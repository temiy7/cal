const ctx = document.getElementById('gaussian-chart').getContext('2d');
const valanceInput = document.getElementById('valance');
const value1Input = document.getElementById('value1');
const value2Input = document.getElementById('value2');
const updateButton = document.getElementById('update');

const gaussianFunction = (x, mean, variance) => {
    const coeff = 1 / Math.sqrt(2 * Math.PI * variance);
    const exponent = -Math.pow(x - mean, 2) / (2 * variance);
    return coeff * Math.exp(exponent);
};


const createGaussianData = (mean, variance, value1, value2) => {
    const step = 1;
    const halfRange = 80;
    const xValues = Array.from({length: Math.ceil(2 * halfRange / step)}, (_, i) => mean - halfRange + i * step);
    const yValues = xValues.map(x => gaussianFunction(x, mean, variance));

    const borderColor = xValues.map(x => {
        if (x < value1) {
            return 'rgba(255, 99, 132, 1)';
        } else if (x >= value1 && x <= value2) {
            return 'rgba(75, 192, 192, 1)';
        } else {
            return 'rgba(255, 206, 86, 1)';
        }
    });

    const modeRounded = Number(mean.toFixed(2));
    const varianceRounded = Number(variance.toFixed(2));

    return {
        labels: xValues,
        datasets: [{
            label: `중앙값(최빈값): ${modeRounded}, 분산: ${varianceRounded}`,
            data: yValues,
            borderColor: borderColor,
            borderWidth: 0,
            fill: false
        }]
    };
};

const customFillPlugin = {
    id: 'customFill',
    beforeDraw(chart, args, options) {
        const ctx = chart.ctx;
        const dataset = chart.data.datasets[0];

        for (let i = 0; i < dataset.data.length; i++) {
            const model = chart.getDatasetMeta(0).data[i].getProps(['x', 'y'], true);
            ctx.save();
            ctx.fillStyle = dataset.borderColor[i];
            ctx.globalAlpha = 0.8;
            ctx.beginPath();
            ctx.moveTo(model.x, chart.chartArea.bottom);
            ctx.lineTo(model.x, model.y);
            ctx.lineTo(model.x - 1, model.y);
            ctx.lineTo(model.x - 1, chart.chartArea.bottom);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }
};

const customGradientPlugin = {
    id: 'customGradient',
    beforeUpdate(chart, args, options) {
        const dataset = chart.data.datasets[0];
        if (!chart.originalBorderColor) {
            chart.originalBorderColor = [...dataset.borderColor];
        }
    },
    beforeDatasetsDraw(chart, args, options) {
        const ctx = chart.ctx;
        const dataset = chart.data.datasets[0];
        const originalBorderColor = chart.originalBorderColor;

        for (let i = 0; i < dataset.data.length - 1; i++) {
            const model1 = chart.getDatasetMeta(0).data[i].getProps(['x', 'y'], true);
            const model2 = chart.getDatasetMeta(0).data[i + 1].getProps(['x', 'y'], true);
            const gradient = ctx.createLinearGradient(model1.x, 0, model2.x, 0);

            gradient.addColorStop(0, originalBorderColor[i]);
            gradient.addColorStop(1, originalBorderColor[i + 1]);

            ctx.save();
            ctx.strokeStyle
            ctx.lineWidth = dataset.borderWidth;
            ctx.beginPath();
            ctx.moveTo(model1.x, model1.y);
            ctx.lineTo(model2.x, model2.y);
            ctx.stroke();
            ctx.restore();
        }
    },
    afterDatasetsDraw(chart) {
        // 기본 데이터셋의 선을 지워서 겹치지 않게 함
        chart.getDatasetMeta(0).controller.draw();
    }
};

const config = {
    type: 'line',
    data: createGaussianData(
        Number(value1Input.value) + Number(valanceInput.value) * ((Number(value2Input.value) - Number(value1Input.value)) / 100),
        variance = (28.9 * ((Number(value2Input.value) - Number(value1Input.value)) / 100)) ^ 2,
        Number(valanceInput.value),
        Number(value1Input.value),
        Number(value2Input.value)
    ),
    options: {
        plugins: {
            customFill: {},
            customGradient: {}
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: '대미지'
                }
            },

            y: {
                display: true,
                title: {
                    display: true,
                    text: '확률'
                }
            }
        }
    },
    plugins: [customFillPlugin, customGradientPlugin]
};
const numericalIntegration = (func, start, end, numSteps) => {
    const stepSize = (end - start) / numSteps;
    let area = 0;

    for (let i = 0; i < numSteps; i++) {
        const x1 = start + i * stepSize;
        const x2 = start + (i + 1) * stepSize;
        const y1 = func(x1);
        const y2 = func(x2);
        const trapezoidArea = (y1 + y2) / 2 * stepSize;
        area += trapezoidArea;
    }

    return area;
};

const expectedDamageSpan = document.getElementById('expectedDamage');
const gaussianChart = new Chart(ctx, config);
const probLowerSpan = document.getElementById('probLower');
const probBetweenSpan = document.getElementById('probBetween');
const probUpperSpan = document.getElementById('probUpper');
probLowerSpan.innerText = (probLower * 100).toFixed(2) + '%';
probBetweenSpan.innerText = (probBetween * 100).toFixed(2) + '%';
probUpperSpan.innerText = (probUpper * 100).toFixed(2) + '%';

const expectedValueBetween = (func, lowerBound, upperBound, numSteps) => {
    const stepSize = (upperBound - lowerBound) / numSteps;
    let expectedValue = 0;

    for (let i = 0; i < numSteps; i++) {
        const x1 = lowerBound + stepSize * i;
        const x2 = lowerBound + stepSize * (i + 1);
        const midPoint = (x1 + x2) / 2;
        expectedValue += func(midPoint) * midPoint * stepSize;
    }

    return expectedValue;
};

const updateChart = () => {
    const mean = Number(value1Input.value) + Number(valanceInput.value) * ((Number(value2Input.value) - Number(value1Input.value)) / 100);
    const variance = (28.9 * ((Number(value2Input.value) - Number(value1Input.value)) / 100)) ** 2;
    const value1 = Number(value1Input.value);
    const value2 = Number(value2Input.value);
    const gaussianFunc = x => gaussianFunction(x, mean, variance);

    const probLower = numericalIntegration(gaussianFunc, mean - 4 * Math.sqrt(variance), value1, 1000);
    const probBetween = numericalIntegration(gaussianFunc, value1, value2, 1000);
    const probUpper = numericalIntegration(gaussianFunc, value2, mean + 4 * Math.sqrt(variance), 1000);

    probLowerSpan.innerText = (probLower * 100).toFixed(2) + '%';
    probBetweenSpan.innerText = (probBetween * 100).toFixed(2) + '%';
    probUpperSpan.innerText = (probUpper * 100).toFixed(2) + '%';

    const expectedDamageLower = probLower * value1;
    const expectedDamageBetween = expectedValueBetween(gaussianFunc, value1, value2, 1000);
    const expectedDamageUpper = probUpper * value2;
    const totalExpectedDamage = expectedDamageLower + expectedDamageBetween + expectedDamageUpper;


    expectedDamageSpan.innerText = totalExpectedDamage.toFixed(2);

    gaussianChart.data = createGaussianData(mean, variance, value1, value2);
    gaussianChart.originalBorderColor = [...gaussianChart.data.datasets[0].borderColor];
    gaussianChart.update();
};


updateButton.addEventListener('click', updateChart);
