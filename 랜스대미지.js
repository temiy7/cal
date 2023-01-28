function cal() {

    //변수
    //기본댐
    var v1 = $("#v1 option:selected").attr('value'); // 랜스차지 랭크별 대미지
    var v2 = Number(document.getElementById("v2").value); // 맥뎀
    var v3 = Number(document.getElementById("v3").value); // 전장비율

    //크리
    var v4 = Number(document.getElementById("v4").value); // 보너스대미지
    //추가댐
    var v5 = Number(document.getElementById("v5").value); // 추가크리대미리

    //콤보카드
    var v6 = Number(document.getElementById("v6").value); //랜차콤카

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

    var v8v = document.getElementsByName("v8"); // 펫
    var v8 = document.getElementById("v8")
    for (var i = 0; i < v8v.length; i++) {
        if (v8v[i].checked)
            v8 = 0
        else
            v8 = 1;
        break;
    }


    var v9 = $("#v9 option:selected").attr('value'); // 랜스 종류


    //세공
    var v10 = Number(document.getElementById("v10").value); //랜차 대미지
    // var v11 = Number(document.getElementById("v11").value); //랜차 거리
    var v12 = Number(document.getElementById("v12").value); //주 목표물 대미지
    var v13 = Number(document.getElementById("v13").value); //마상 돌진 대미지
    var v14 = Number(document.getElementById("v14").value); //마상 돌진 추가거리


    //계산식

    var v14d; //랜차 거리 계산
    if (v14 >= 2) {
        v14d = (1 + (v14 - 1) * 0.2) * 100
    } else {
        v14d = v14 * 1 * 100
    }
    document.getElementById("v14d").value = Math.floor(v14d);

    var res1; //랜차 대미지
    res1 = (v2 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * (1 * v1 + 0.04 * v10) * (2 + 0.025 * v12) * ((1000 + 400 + (400 + v14d) * v8) / 1400) * (1 + (0.2 + 0.03 * v13) * v8) * (1 + v6 / 100) * v9 * (1 + v4 / 100)
    document.getElementById("res1").value = Math.floor(res1);

    var res2; //랜차 대미지 배율
    res2 = (100 * (1 + 0.2 * v7) * ((1 + (v3 / 100)) * (1 + 0.2 * v7))) * (1 * v1 + 0.04 * v10) * (2 + 0.025 * v12) * ((1000 + 400 + (400 + v14d) * v8) / 1400) * (1 + (0.2 + 0.03 * v13) * v8) * (1 + v6 / 100) * v9 * (1 + v4 / 100)
    document.getElementById("res2").value = Math.floor(res2);

    var res3; //랜차 크리 대미지
    res3 = res1 * (2.5 + v5 / 100)
    document.getElementById("res3").value = Math.floor(res3);


}

//리셋
function reset() {
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v4").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("v10").value = "";
    document.getElementById("v12").value = "";
    document.getElementById("v13").value = "";
    document.getElementById("v14").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res3").value = "";

}