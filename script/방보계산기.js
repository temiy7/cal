function cal() {

    //변수
    //기본댐
    var v1 = Number(document.getElementById("v1").value); // 방어
    var v2 = Number(document.getElementById("v2").value); // 보호
    var v3 = Number(document.getElementById("v3").value); // 받는대미지
    var v4 = Number(document.getElementById("v4").value); // 받은대미지
    var v5 = $("#v5 option:selected").attr('value');  // 디팬스랭크별 방어
    var v6 = $("#v5 option:selected").attr('value2');  // 디팬스랭크별 방어
    var v7 = $("#v5 option:selected").attr('value3'); // 디팬스랭크별 보호
    var v8 = $("#v5 option:selected").attr('value4'); // 디팬스랭크별 보호
    var v9 = $("#v9 option:selected").attr('value'); // 방패종류


    //계산식

    var res1; //보호 차감 비율
    res1_1 = 29 * Math.asinh(v2 / 24) + 1
    if (res1_1 >= 100) {
        res1 = 100
    } else {
        res1 = res1_1
    }
    document.getElementById("res1").value = Math.round(res1);


    var res2; //방어 차감 비율
    res2 = v1
    document.getElementById("res2").value = Math.round(res2);

    var res3; //받는 대미지
    res3_1 = v3 * (1 - res1 / 100) - v1
    if (res3_1 <= 0) {
        res3 = 0
    } else {
        res3 = res3_1
    }
    document.getElementById("res3").value = Math.floor(res3);


    var res4; //대미지 차감비
    res4 = (1 - (res3) / (v3)) * 100
    if (isNaN(res4)) { // 값이 없어서 NaN값이 나올 경우

        res4 = 0;

    }
    document.getElementById("res4").value = Math.floor(res4);

    var res5; //역산
    res5 = (v4 + v1) / (1 - 0.01 * res1)
    document.getElementById("res5").value = Math.floor(res5);


    var res6; //디펜스적용(인-엘)
    res6_1 = (res3 * (1 - (29 * Math.asinh(v7 / 24) + 1) / 100) - v5) * v9
    if (res6_1 <= 0) {
        res6 = 0
    } else {
        res6 = res6_1
    }
    document.getElementById("res6").value = Math.floor(res6);

    var res7; //디펜스적용(자)
    res7_1 = (res3 * (1 - (29 * Math.asinh((1 * v8) / 24) + 1) / 100) - v6) * 1 * v9
    if (res7_1 <= 0) {
        res7 = 0
    } else {
        res7 = res7_1
    }
    document.getElementById("res7").value = Math.floor(res7);


}

//리셋
function reset() {
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v4").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res5").value = "";
    document.getElementById("res6").value = "";
    document.getElementById("res7").value = "";


}