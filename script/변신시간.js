function cal() {
    const rebirthCount = Number(document.getElementById("rebirthCount").value || '0');
    const age = Number(document.getElementById("age").value || '17');
    const additionalSec = Number(document.getElementById("additionalSec").value || '0');

    let rebirthBonusSec = 0;

    if (rebirthCount > 100) {
        rebirthBonusSec = Math.floor(rebirthCount * 240 / 5400 + 450);
    }
    else if (rebirthCount > 10) {
        rebirthBonusSec = Math.floor(rebirthCount * 240 / 180 + 320);
    }
    else {
        rebirthBonusSec = Math.floor(rebirthCount * 240 / 30 + 240);
    }

    const sec = Math.floor(rebirthBonusSec + additionalSec - (age * (rebirthBonusSec - 160) / (rebirthCount + 50)));
    const min = Math.floor(sec / 60);

    const resultStr = min ? `${min}분 ${sec % 60}초` : `${sec}초`;

    document.getElementById("transformDuration").value = resultStr;
}

//리셋
function reset() {
    document.getElementById("rebirthCount").value = "";
    document.getElementById("age").value = "17";
    document.getElementById("additionalSec").value = "0";
}