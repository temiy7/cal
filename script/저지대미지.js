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

    var v10v = document.getElementsByName("v10"); // 저지세트
    var v10 = document.getElementById("v10")
    for (var i = 0; i < v10v.length; i++) {
        if (v10v[i].checked)
            v10 = 0
        else
            v10 = 1;
        break;
    }

    var v11v = document.getElementsByName("v11"); // 저지세트
    var v11 = document.getElementById("v11")
    for (var i = 0; i < v11v.length; i++) {
        if (v11v[i].checked)
            v11 = 0
        else
            v11 = 1;
        break;
    }
    var v12v = document.getElementsByName("v12"); // 저지세트
    var v12 = document.getElementById("v12")
    for (var i = 0; i < v12v.length; i++) {
        if (v12v[i].checked)
            v12 = 0
        else
            v12 = 1;
        break;
    }
    var v13v = document.getElementsByName("v13"); // 저지세트
    var v13 = document.getElementById("v13")
    for (var i = 0; i < v13v.length; i++) {
        if (v13v[i].checked)
            v13 = 0
        else
            v13 = 1;
        break;
    }
    var v14v = document.getElementsByName("v14"); // 저지세트
    var v14 = document.getElementById("v14")
    for (var i = 0; i < v14v.length; i++) {
        if (v14v[i].checked)
            v14 = 0
        else
            v14 = 1;
        break;
    }
    var v15v = document.getElementsByName("v15"); // 저지세트
    var v15 = document.getElementById("v15")
    for (var i = 0; i < v15v.length; i++) {
        if (v15v[i].checked)
            v15 = 0
        else
            v15 = 1;
        break;
    }
    var v16v = document.getElementsByName("v16"); // 저지세트
    var v16 = document.getElementById("v16")
    for (var i = 0; i < v16v.length; i++) {
        if (v16v[i].checked)
            v16 = 0
        else
            v16 = 1;
        break;
    }
    var v17v = document.getElementsByName("v17"); // 저지세트
    var v17 = document.getElementById("v17")
    for (var i = 0; i < v17v.length; i++) {
        if (v17v[i].checked)
            v17 = 0
        else
            v17 = 1;
        break;
    }
    var v18v = document.getElementsByName("v18"); // 저지세트
    var v18 = document.getElementById("v18")
    for (var i = 0; i < v18v.length; i++) {
        if (v18v[i].checked)
            v18 = 0
        else
            v18 = 1;
        break;
    }
    var v19v = document.getElementsByName("v19"); // 저지세트
    var v19 = document.getElementById("v19")
    for (var i = 0; i < v19v.length; i++) {
        if (v19v[i].checked)
            v19 = 0
        else
            v19 = 1;
        break;
    }

    var v20 = $("#v20 option:selected").attr('value'); // 칼의세레



    //계산식


    var res1_1; //저지민
    res1_1 = (v6 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * v1 * (1 + 0.1 * v8) * (1 * v9) * (1 + v4 / 100)
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res1; //저지맥
    res1 = (v2 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * v1 * (1 + 0.1 * v8) * (1 * v9) * (1 + v4 / 100)
    document.getElementById("res1").value = Math.floor(res1);

    var res2; // (크리포함)대미지 배율
    res2 = (100 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * v1 * (1 + 0.1 * v8) * (1 * v9) * (1 + v4 / 100)
    document.getElementById("res2").value = Math.floor(res2);

    var res2_1; // (크리포함)대미지 배율
    res2_1 = (100 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * v1 * (1 + 0.1 * v8) * (1 * v9) * (1 + v4 / 100) * (2.5 +1*v20 + v5 / 100)
    document.getElementById("res2_1").value = Math.floor(res2_1);


    var res3; //저지 크리 맥대미지
    res3 = res1 * (2.5 +1*v20 + v5 / 100)
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1; //저지 크리 민대미지
    res3_1 = res1_1 + res1 * (1.5 +1*v20+ v5 / 100)
    document.getElementById("res3_1").value = Math.floor(res3_1);

    var res4; //하시딤 한방 피통 55만
    res4 = res3_1 * (1 + 0.25*v10+(0.03*v11+0.05*v12)*v10)*(1+0.7*v13+(0.36*v14+0.1*v15)*v13)*(1+0.15*v16*v13)*(1+0.5*v17)*(1+0.1*v18)*(1+0.05*v19);
    document.getElementById("res4").value = Math.floor(res4);

    var res4_1; //하시딤 한방 피통 55만
    res4_1 = res3 * (1 + 0.25*v10+(0.03*v11+0.05*v12)*v10)*(1+0.7*v13+(0.36*v14+0.1*v15)*v13)*(1+0.15*v16*v13)*(1+0.5*v17)*(1+0.1*v18)*(1+0.05*v19);
    document.getElementById("res4_1").value = Math.floor(res4_1);


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