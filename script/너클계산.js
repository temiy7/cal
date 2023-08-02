function cal() {

    //변수
    //기본댐
    var v00 = $('input[name="v00"]:checked').attr('value');
    var v00_1 = $('input[name="v00"]:checked').attr('value1'); //종족
    var v00_2 = $('input[name="v00"]:checked').attr('value2'); //종족
    var v0 = Number(document.getElementById("v0").value); // 물공
    var v1 = $("#v1 option:selected").attr('value'); // 연속기 마스터리 인간
    var v1_1 = $("#v1 option:selected").attr('value2'); // 연속기 마스터리 엘프
    var v1_2 = $("#v1 option:selected").attr('value3'); // 연속기 마스터리 자이언트
    var v1_3 = $("#v1 option:selected").attr('value4'); // 연속마 중갑
    var v2 = $("#v2 option:selected").attr('value'); // 대시펀치 랭크
    var v3 = $("#v3 option:selected").attr('value'); // 어퍼컷 랭크
    var v4 = $("#v4 option:selected").attr('value'); // 드롭킥 랭크
    var v5 = $("#v5 option:selected").attr('value'); // 차피 랭크
    var v6 = $("#v6 option:selected").attr('value'); // 섬머솔트 랭크
    var v7 = $("#v7 option:selected").attr('value'); // 파운딩 랭크


    var v8 = Number(document.getElementById("v8").value); // 전장비율
    //
    //크리
    var v9 = Number(document.getElementById("v9").value); // 추가크리
    //추가댐
    var v10 = Number(document.getElementById("v10").value); // 보너스대미지
    //
    // //콤보카드
    var v11 = Number(document.getElementById("v11").value); //대시펀치
    var v12 = Number(document.getElementById("v12").value); //어퍼컷
    var v13 = Number(document.getElementById("v13").value); //드롭킥
    var v14 = Number(document.getElementById("v14").value); //차피
    var v15 = Number(document.getElementById("v15").value); //섬솔
    var v16 = Number(document.getElementById("v16").value); //파운딩


    var v17v = document.getElementsByName("v17"); // 물공포
    var v17 = document.getElementById("v17")
    for (var i = 0; i < v17v.length; i++) {
        if (v17v[i].checked)
            v17 = 0
        else
            v17 = 1;
        break;
    }
    var v18 = $("#v18 option:selected").attr('value'); //  무기종류
    var v19 = $("#v19 option:selected").attr('value'); // 대펀마
    var v20 = $("#v19 option:selected").attr('value2'); // 어퍼마
    var v21 = $("#v19 option:selected").attr('value3'); // 드롭마


    //세공
    var v22 = Number(document.getElementById("v22").value); //연속기 대미지
    var v23 = Number(document.getElementById("v23").value); //대시펀치 대미지
    var v24 = Number(document.getElementById("v24").value); //어퍼컷 대미지
    var v25 = Number(document.getElementById("v25").value); //드롭킥 대미지
    var v26 = Number(document.getElementById("v26").value); //섬머솔트 대미지
    var v27 = Number(document.getElementById("v27").value); //파운딩 대미지
    var v31 = Number(document.getElementById("v31").value); //차피세공

    var v28 = $("#v28 option:selected").attr('value'); // 에르그

    var v29v = document.getElementsByName("v29"); // 중갑옷
    var v29 = document.getElementById("v29")
    for (var i = 0; i < v29v.length; i++) {
        if (v29v[i].checked)
            v29 = 0
        else
            v29 = 1;
        break;
    }

    var v30 = $("#v18 option:selected").attr('value1'); // 베본
    var v30_1 = $("#v18 option:selected").attr('value2'); // 패러


    //

    //계산식
    var res0; //연속기 대미지
    res0 = (v0 * (1 + 0.2 * v17) * (1 + (v8 / 100) * (1 + 0.2 * v17))) * (1 + (1 * v1 * v00 + 1 * v1_1 * v00_1 + 1 * v1_2 * v00_2) + 1 * v18 + 1 * v28 + 0.01 * v22) * (1 + v10 / 100) * (1 - v1_3 * v29 * v00 - v1_3 * v29 * v00_1)
    document.getElementById("res0").value = res0.toFixed(2);


    var res1; //대시펀치
    res1 = res0 * (1 * v2 + 0.03 * v23) * (1 + 0.3 * v19) * (1 + v11 / 100)
    document.getElementById("res1").value = Math.floor(res1);

    var res1c; //대시펀치 크리
    res1c = res1 * (2.5 + (v9 / 100))
    document.getElementById("res1c").value = Math.floor(res1c);

    var res2; //어퍼컷 대미지
    res2 = res0 * (1 * v3 + 0.06 * v24) * (1 + 0.2 * v20) * (1 + v12 / 100)
    document.getElementById("res2").value = Math.floor(res2);

    var res2c; //어퍼컷 크리
    res2c = res2 * (2.5 + (v9 / 100))
    document.getElementById("res2c").value = Math.floor(res2c);

    var res3; //드롭킥 대미지
    res3 = res0 * (1 * v4 + 0.09 * v25) * (1 + 1 * v30) * (1 + 0.1 * v21) * (1 + v13 / 100)
    document.getElementById("res3").value = Math.floor(res3);

    var res3c; //드롭킥 크리
    res3c = res3 * (2.5 + (v9 / 100))
    document.getElementById("res3c").value = Math.floor(res3c);

    var res4; //차피 대미지
    res4 = res0 * (1 * v5 + 0.03 * v31) * (1 + v14 / 100)
    document.getElementById("res4").value = Math.floor(res4);

    var res4c; //차피 크리
    res4c = res4 * (2.5 + (v9 / 100))
    document.getElementById("res4c").value = Math.floor(res4c);

    var res5; //섬머솔트 대미지
    res5 = res0 * (1 * v6 + 0.06 * v26) * (1 + v15 / 100)
    document.getElementById("res5").value = Math.floor(res5);

    var res5c; //섬머솔트 크리
    res5c = res5 * (2.5 + (v9 / 100))
    document.getElementById("res5c").value = Math.floor(res5c);

    var res6; //파운딩 대미지
    res6 = res0 * (1 * v7 + 0.09 * v27 + 1 * v30_1) * (1 + v16 / 100)
    document.getElementById("res6").value = Math.floor(res6);

    var res6c; //파운딩 크리
    res6c = res6 * (2.5 + (v9 / 100))
    document.getElementById("res6c").value = Math.floor(res6c);


}

//리셋
function reset() {
    document.getElementById("v0").value = "";
    document.getElementById("v8").value = "";
    document.getElementById("v9").value = "";
    document.getElementById("v10").value = "";
    document.getElementById("v11").value = "";
    document.getElementById("v12").value = "";
    document.getElementById("v13").value = "";
    document.getElementById("v14").value = "";
    document.getElementById("v15").value = "";
    document.getElementById("v16").value = "";
    document.getElementById("v22").value = "";
    document.getElementById("v23").value = "";
    document.getElementById("v24").value = "";
    document.getElementById("v25").value = "";
    document.getElementById("v26").value = "";
    document.getElementById("v27").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res1c").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res2c").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res3c").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res4c").value = "";
    document.getElementById("res5").value = "";
    document.getElementById("res5c").value = "";
    document.getElementById("res6").value = "";
    document.getElementById("res6c").value = "";


}