function cal() {

    //변수
    //기본댐
    var v1 = $("#v1 option:selected").attr('value'); // 저지 랭크별 대미지
    var v2 = Number(document.getElementById("v2").value); // 맥뎀
    var v6 = Number(document.getElementById("v6").value); // 민뎀
    var v3 = Number(document.getElementById("v3").value); // 전장비율
    //크리
    var v4 = Number(document.getElementById("v4").value); // 보너스대미지
    //추가댐
    var v5 = Number(document.getElementById("v5").value); // 추가크리대미리

    //아이템 타이틀
    var v7v = document.getElementsByName("v7"); // 물공포
    var v7 = document.getElementById("v7")
    for (var i = 0; i < v7v.length; i++) {
        if (v7v[i].checked)
            v7 = 0
        else
            v7 = 1;
        break;
    }

    var v8v = document.getElementsByName("v8"); // 저지세트
    var v8 = document.getElementById("v8")
    for (var i = 0; i < v8v.length; i++) {
        if (v8v[i].checked)
            v8 = 0
        else
            v8 = 1;
        break;
    }


    var v9 = $("#v9 option:selected").attr('value'); // 처형레벨


    //계산식


    var res1_1; //랜차 대미지
    res1_1 = (v6 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) *  v1  * (1 +0.1* v8) * (1*v9) * (1 + v4 / 100)
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res1; //랜차 대미지
    res1 = (v2 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) *  v1  * (1 +0.1* v8) * (1*v9) * (1 + v4 / 100)
    document.getElementById("res1").value = Math.floor(res1);

    var res2; //랜차 (크리포함)대미지 배율
    res2 = (100 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) *  v1  * (1 +0.1* v8) * (1*v9) * (1 + v4 / 100)
    document.getElementById("res2").value = Math.floor(res2);

    var res2_1; //랜차 (크리포함)대미지 배율
    res2_1 = (100 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) *  v1  * (1 +0.1* v8) * (1*v9) * (1 + v4 / 100)*(2.5 + v5 / 100)
    document.getElementById("res2_1").value = Math.floor(res2_1);


    var res3; //랜차 크리 대미지
    res3 = res1 * (2.5 + v5 / 100)
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1; //랜차 크리 대미지
    res3_1 = res1_1+res1 * (1.5 + v5 / 100)
    document.getElementById("res3_1").value = Math.floor(res3_1);


}

//리셋
function reset() {
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v4").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res1_1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res3_1").value = "";

}