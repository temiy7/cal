function cal() {

    //변수
    //기본댐
    var v00 = $('input[name="v00"]:checked').attr('value')
    var v00_1 = $('input[name="v00"]:checked').attr('value1'); //종족
    var v0 = Number(document.getElementById("v0").value); // 물공
    var v1 = $("#v1 option:selected").attr('value'); // 매그샷 랭크
    var v2 = $("#v2 option:selected").attr('value2'); // 크래시샷 랭크
    var v2_1 = $("#v2 option:selected").attr('value'); // 크래시샷 랭크
    var v3 = $("#v3 option:selected").attr('value'); // 어전트샷 랭크
    // // var v4 = $("#v4 option:selected").attr('value'); // 리볼버 랭크
    //
    var v5 = Number(document.getElementById("v5").value); // 전장비율

    //크리
    var v6 = Number(document.getElementById("v6").value); // 추가크리
    // //추가댐
    var v7 = Number(document.getElementById("v7").value); // 보너스대미지
    //
    // //콤보카드
    var v8 = Number(document.getElementById("v8").value); //매그넘샷
    var v9 = Number(document.getElementById("v9").value); //크래시샷


    var v10v = document.getElementsByName("v10"); // 물공포
    var v10 = document.getElementById("v10")
    for (var i = 0; i < v10v.length; i++) {
        if (v10v[i].checked)
            v10 = 0
        else
            v10 = 1;
        break;
    }
    var v11 = $("#v11 option:selected").attr('value'); //  무기종류
    var v12 = $("#v12 option:selected").attr('value'); // 화살종류


    // //세공
    var v13 = Number(document.getElementById("v13").value); //매그넘샷 대미지
    var v18 = Number(document.getElementById("v18").value); //리볼버 대미지
    var v19 = Number(document.getElementById("v19").value); //파편 대미지
    //
    //
    var v14v = document.getElementsByName("v14"); // 매그넘샷강화 세트
    var v14 = document.getElementById("v14")
    for (var i = 0; i < v14v.length; i++) {
        if (v14v[i].checked)
            v14 = 0
        else
            v14 = 1;
        break;
    }
    //
    var v15 = Number(document.getElementById("v15").value); //조준율
    var v16 = Number(document.getElementById("v16").value); //맞은파편수
    //
    var v17v = document.getElementsByName("v17"); // 불화살
    var v17 = document.getElementById("v17")
    for (var i = 0; i < v17v.length; i++) {
        if (v17v[i].checked)
            v17 = 0
        else
            v17 = 1;
        break;
    }

    var v20v = document.getElementsByName("v20"); // 어전트샷
    var v20 = document.getElementById("v20")
    for (var i = 0; i < v20v.length; i++) {
        if (v20v[i].checked)
            v20 = 0
        else
            v20 = 1;
        break;
    }

    var v21v = document.getElementsByName("v21"); // 파이널샷
    var v21 = document.getElementById("v21")
    for (var i = 0; i < v21v.length; i++) {
        if (v21v[i].checked)
            v21 = 0
        else
            v21 = 1;
        break;
    }


    //

    //계산식
    var res0; //레인지샷 대미지
    if (v15 > 100) {
        res0 = (v0 * (1 + 0.2 * v10) * (1 + (v5 / 100) * (1 + 0.2 * v10))) * (0.01 * v15) * (1 + v7 / 100) * (1 + v12) * (1 + 0.5 * v17) * (1 + v3 * v20) * (1 * v00 + 2 * v00_1 * (1 + 1 * v21 * v11))
    } else if (v15 >= 70) {
        res0 = (v0 * (1 + 0.2 * v10) * (1 + (v5 / 100) * (1 + 0.2 * v10))) * (0.01 * v15 + (0.5 * (1 - 0.01 * v15))) * (1 + v7 / 100) * (1 + 1 * v12) * (1 + 0.5 * v17) * (1 + v3 * v20) * (1 * v00 + 2 * v00_1* (1 + 1 * v21 * v11))
    } else {
        res0 = (v0 * (1 + 0.2 * v10) * (1 + (v5 / 100) * (1 + 0.2 * v10))) * (0.01 * v15) * (1 + v7 / 100) * (1 + 1 * v12) * (1 + 0.5 * v17) * (1 + v3 * v20) * (1 * v00 + 2 * v00_1* (1 + 1 * v21 * v11))
    }

    document.getElementById("res0").value = Math.floor(res0);
    var res0c; //레인지크리
    res0c = res0 * (2.5 + (v6 / 100))
    document.getElementById("res0c").value = Math.floor(res0c);

    var res0_1; //리볼버를 위한 레인지
    if (v15 > 100) {
        res0_1 = ((v0 + 5 * v18) * (1 + 0.2 * v10) * (1 + (v5 / 100)) * (1 + 0.2 * v10)) * (0.01 * v15) * (1 + v7 / 100) * (1 + v12) * (1 + 0.5 * v17) * (1 + v3 * v20) * (1 * v00 + 0 * v00_1)
    } else if (v15 >= 70) {
        res0_1 = ((v0 + 5 * v18) * (1 + 0.2 * v10) * (1 + (v5 / 100)) * (1 + 0.2 * v10)) * (0.01 * v15 + (0.5 * (1 - 0.01 * v15))) * (1 + v7 / 100) * (1 + 1 * v12) * (1 + 0.5 * v17) * (1 + v3 * v20) * (1 * v00 + 0 * v00_1)
    } else {
        res0_1 = ((v0 + 5 * v18) * (1 + 0.2 * v10) * (1 + (v5 / 100)) * (1 + 0.2 * v10)) * (0.01 * v15) * (1 + v7 / 100) * (1 + 1 * v12) * (1 + 0.5 * v17) * (1 + v3 * v20) * (1 * v00 + 0 * v00_1)
    }

    document.getElementById("res0_1").value = res0_1.toFixed(2);

    var res1; //매그넘샷 대미지
    res1 = res0 * (1 * v00 + 0.5 * v00_1) * (1 * v1 + 0.1 * v13) * (1 + 0.15 * v14 + v8 / 100)
    document.getElementById("res1").value = Math.floor(res1);

    var res1c; //매그넘샷 크리
    res1c = res1 * (2.5 + (v6 / 100))
    document.getElementById("res1c").value = Math.floor(res1c);

    var res2; //크래시샷 중앙 대미지
    res2 = res0 * (1 * v00 + 0.5 * v00_1) * (1 * v2 + v9 / 100) * (1 * v16) * (1 + 1 * v11)
    document.getElementById("res2").value = Math.floor(res2);

    var res2c; //크래시샷 중앙 크리
    res2c = res2 * (2.5 + (v6 / 100))
    document.getElementById("res2c").value = Math.floor(res2c);

    var res3; //크래시샷 파편댐
    res3 = res0 * (1 * v00 + 0.5 * v00_1) * (1 * v2_1 + 0.035 * v19 + v9 / 100) * (1 + 1 * v11)
    document.getElementById("res3").value = Math.floor(res3);

    var res3c; //파편댐크리
    res3c = res3 * (2.5 + (v6 / 100))
    document.getElementById("res3c").value = Math.floor(res3c);


    var res4; //리볼버대미지
    res4 = res0_1 * (1 * v00 + 0 * v00_1) * 1.7
    document.getElementById("res4").value = Math.floor(res4);
    var res4_1; //리볼버대미지
    res4_1 = res0_1 * (1 * v00 + 0 * v00_1) * 1.8
    document.getElementById("res4_1").value = Math.floor(res4_1);
    var res4_2; //리볼버대미지
    res4_2 = res0_1 * (1 * v00 + 0 * v00_1) * 1.85
    document.getElementById("res4_2").value = Math.floor(res4_2);
    var res4_3; //리볼버대미지
    res4_3 = res0_1 * (1 * v00 + 0 * v00_1) * 2.05
    document.getElementById("res4_3").value = Math.floor(res4_3);
    var res4_4; //리볼버대미지
    res4_4 = res0_1 * (1 * v00 + 0 * v00_1) * 2.5
    document.getElementById("res4_4").value = Math.floor(res4_4);
    var res4_5; //리볼버대미지
    res4_5 = res4 + res4_1 + res4_2 + res4_3 + res4_4
    document.getElementById("res4_5").value = Math.floor(res4_5);

    var res4c; //리볼버 크리
    res4c = res4 * (2.5 + (v6 / 100))
    document.getElementById("res4c").value = Math.floor(res4c);
    var res4_1c; //리볼버 크리
    res4_1c = res4_1 * (2.5 + (v6 / 100))
    document.getElementById("res4_1c").value = Math.floor(res4_1c);
    var res4_2c; //리볼버 크리
    res4_2c = res4_2 * (2.5 + (v6 / 100))
    document.getElementById("res4_2c").value = Math.floor(res4_2c);
    var res4_3c; //리볼버 크리
    res4_3c = res4_3 * (2.5 + (v6 / 100))
    document.getElementById("res4_3c").value = Math.floor(res4_3c);
    var res4_4c; //리볼버 크리
    res4_4c = res4_4 * (2.5 + (v6 / 100))
    document.getElementById("res4_4c").value = Math.floor(res4_4c);
    var res4_5c; //리볼버 크리
    res4_5c = res4c + res4_1c + res4_2c + res4_3c + res4_4c
    document.getElementById("res4_5c").value = Math.floor(res4_5c);


}

//리셋
function reset() {
    document.getElementById("v0").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("v7").value = "";
    document.getElementById("v8").value = "";
    document.getElementById("v9").value = "";
    document.getElementById("v13").value = "";
    document.getElementById("v15").value = "100";
    document.getElementById("v16").value = "5";
    document.getElementById("v18").value = "";
    document.getElementById("v19").value = "";
    document.getElementById("res0").value = "";
    document.getElementById("res0c").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res1c").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res2c").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res3c").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res4c").value = "";
    document.getElementById("res4_1").value = "";
    document.getElementById("res4_1c").value = "";
    document.getElementById("res4_2").value = "";
    document.getElementById("res4_2c").value = "";
    document.getElementById("res4_3").value = "";
    document.getElementById("res4_3c").value = "";
    document.getElementById("res4_4").value = "";
    document.getElementById("res4_4c").value = "";
    document.getElementById("res4_5").value = "";
    document.getElementById("res4_5c").value = "";

}