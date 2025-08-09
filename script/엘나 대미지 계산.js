function cal() {

    //변수
    //기본댐
    var v1 = $("#v1 option:selected").attr('value'); // 스매시 랭크별 대미지
    var v1_1 = $("#v1 option:selected").attr('value2'); // 자이언트 스매시 랭크별 대미지
    var v1_0 = $("#v1_0 option:selected").attr('value'); // 라스매시 랭크별 대미지
    var v1_01 = $("#v1_0 option:selected").attr('value2'); // 라스매시 인잭션 랭크별 대미지
    var v2 = $("#v2 option:selected").attr('value'); // 윈드밀 랭크별 대미지
    var v2_1 = $("#v2 option:selected").attr('value2'); // 엘프윈드밀 랭크별 대미지
    var v2_0 = $("#v2_0 option:selected").attr('value'); // 아윈드밀 랭크별 대미지
    // var v2_01 = $("#v2_0 option:selected").attr('value2'); // 아윈드밀 랭크별 폭발 대미지
    var v2_02 = $("#v2_0 option:selected").attr('value3'); // 아윈드밀 랭크별 인잭
    var v3 = $("#v3 option:selected").attr('value'); // 다운어택 랭크별 대미지
    var v3_0 = $("#v3_0 option:selected").attr('value'); // 파리택 랭크별 대미지
    var v3_01 = $("#v3_0 option:selected").attr('value2'); // 파리택 랭크별 인잭

    var v4 = Number(document.getElementById("v4").value); // 맥뎀
    var v5 = Number(document.getElementById("v5").value); // 전장비율

    //크리
    var v6 = Number(document.getElementById("v6").value); // 추가크리
    //추가댐
    var v7 = Number(document.getElementById("v7").value); // 보너스대미지

    //콤보카드
    var v8 = Number(document.getElementById("v8").value); //스매시콤카
    var v9 = Number(document.getElementById("v9").value); //윈드밀콤카
    var v10 = Number(document.getElementById("v10").value); //다운어택콤카

    //아이템 타이틀
    var v11v = document.getElementsByName("v11"); // 물공포
    var v11 = document.getElementById("v11")
    for (var i = 0; i < v11v.length; i++) {
        if (v11v[i].checked)
            v11 = 0
        else
            v11 = 1;
        break;
    }
    var v12  = $('input[name="v12"]').is(':checked') ? parseFloat($('input[name="v12"]').val()) : 0; // 인잭션


    var v15v = document.getElementsByName("v15"); // 스매시강화 세트
    var v15 = document.getElementById("v15")
    for (var i = 0; i < v15v.length; i++) {
        if (v15v[i].checked)
            v15 = 0
        else
            v15 = 1;
        break;

    }

    var v16v = document.getElementsByName("v16"); // 윈드밀 세트
    var v16 = document.getElementById("v16")
    for (var i = 0; i < v16v.length; i++) {
        if (v16v[i].checked)
            v16 = 0
        else
            v16 = 1;
        break;

    }




    var v21v = document.getElementsByName("v21"); // 다운어택 세트
    var v21 = document.getElementById("v21")
    for (var i = 0; i < v21v.length; i++) {
        if (v21v[i].checked)
            v21 = 0
        else
            v21 = 1;
        break;

    }

    var v17  = $("#v17 option:selected").attr('value'); // 양손검 옵션
    var v22 = $("#v17 option:selected").attr('value2'); //  스매강 세트효과
    var v22_1 = $("#v17 option:selected").attr('value3'); // 워로드 윈드밀강 세트효과

    
    

    //세공
    var v18 =  Number(document.getElementById("v18").value); //스매시 최댐 세공
    var v19 =  Number(document.getElementById("v19").value); //윈드밀 최댐 세공
    var v20 =  Number(document.getElementById("v20").value); //다운어택 최댐 세공
    var v24 = $('input[name="v24"]').is(':checked') ? parseFloat($('input[name="v24"]').val()) : 0; // 빙결해제보너스
    var v25 =  $("#v25 option:selected").attr('value'); // 배쉬
    var v26 =  $("#v26 option:selected").attr('value'); // 마이트
    var v27 =  $("#v26 option:selected").attr('value1'); // 브레스








    //계산식

    var res0; // 맥뎀
    res0 = v4*(1+0.2*v11)*(1+(v5/100)*(1+0.2*v11))*(1+0.1*v12)
    document.getElementById("res0").value = Math.floor(res0);

    var res1; //스매시 대미지 인간-엘프
    res1 = res0*(1*v1+0.1*v18)*(1+0.15*v15+v8/100)*(1+0.2*v17)*(1+v7/100)*(1+1*v22)*(1+1*v25)*(1+1*v27)
    document.getElementById("res1").value = Math.floor(res1);

    var res1c; //스매시 대미지 인간-엘프 크
    res1c = res1*(2.5 + (v6/100))
    document.getElementById("res1c").value = Math.floor(res1c);

    var res1_1; //스매시 대미지 자이언트
    res1_1 = res0*(1*v1_1+0.1*v18)*(1+0.15*v15+v8/100)*(1+0.2*v17)*(1+v7/100)*(1+1*v22)*(1+1*v25)*(1+1*v26)
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res1_1c; //스매시 대미지  자이언트 크리
    res1_1c = res1_1*(2.5 + (v6/100))
    document.getElementById("res1_1c").value = Math.floor(res1_1c);

    var res2; //윈드밀 대미지 인간-자이언트
    res2 = res0*(1*v2+0.03*v19+0.3*v16)*(1+v9/100)*(1+1*v22_1)*(1+v7/100)*(1+1*v25)*(1+1*v26)
    document.getElementById("res2").value = Math.floor(res2);

    var res2c; //윈드밀 대미지  인간 자이언트 크리
    res2c = res2*(2.5 + (v6/100))
    document.getElementById("res2c").value = Math.floor(res2c);

    var res2_1; //윈드밀 대미지 엘프
    res2_1 = res0*(1*v2_1+0.03*v19+0.3*v16)*(1+v9/100)*(1+1*v22_1)*(1+v7/100)*(1+1*v25)
    document.getElementById("res2_1").value = Math.floor(res2_1);

    var res2_1c; //윈드밀 대미지 엘프 크리
    res2_1c = res2_1*(2.5 + (v6/100))
    document.getElementById("res2_1c").value = Math.floor(res2_1c);

    var res3; //다운어택 대미지
    res3 =res0*(1*v3+0.04*v20)*(1+0.15*v21+v10/100)*(1+v7/100)*(1+1*v25)*(1+1*v26)
    document.getElementById("res3").value = Math.floor(res3);

    var res3c; //다운어택 크리
    res3c = res3*(2.5 + (v6/100))
    document.getElementById("res3c").value = Math.floor(res3c);



    var res4; //라스매 엘-인
    res4 = res0*(((1*v1)+0.1*v18)*(1+0.15*v15)*(1+0.2*v17)*(1+1*v22)*(1+1*v25)*(1+1*v27)+((1*v1_0+6*v12+12*v24)))*(1+v7/100)
    document.getElementById("res4").value = Math.floor(res4);

    var res4c; //라스매 엘-인 크리
    res4c = res4*(2.5 + (v6/100))
    document.getElementById("res4c").value = Math.floor(res4c);

    var res4_1; //라스매 자이언트
    res4_1 = res0*(((1*v1_1)+0.1*v18)*(1+0.15*v15)*(1+0.2*v17)*(1+1*v22)*(1+1*v25)*(1+1*v26)+((1*v1_0+6*v12+12*v24)))*(1+v7/100)
    document.getElementById("res4_1").value = Math.floor(res4_1);

    var res4_1c; //라스매 엘-인
    res4_1c = res4_1*(2.5 + (v6/100))
    document.getElementById("res4_1c").value = Math.floor(res4_1c);


    var res5; //아윈밀 인-자
    res5 =res0*((1*v2+0.03*v19+0.3*v16)*(1+1*v22_1)+((1*v2_0+1*v12*v2_02)))*(1+v7/100)*(1+1*v25)*(1+1*v26)
    document.getElementById("res5").value = Math.floor(res5);

    var res5c; //크리
    res5c = res5*(2.5 + (v6/100))
    document.getElementById("res5c").value = Math.floor(res5c);

    // var res5_0; //아윈밀 인-자 폭발
    // res5_0 =res0*(1*v2_01+1*v13*v2_02)*(1+v7/100)
    // document.getElementById("res5_0").value = Math.floor(res5_0);

    // var res5_0c; //크리
    // res5_0c = res5_0*(2.5 + (v6/100))
    // document.getElementById("res5_0c").value = Math.floor(res5_0c);

    var res5_1; //아윈밀 엘프
    res5_1 =res0*((1*v2_1+0.03*v19+0.3*v16)*(1+0.15*v22_1)+((1*v2_0+4.5*v12)))*(1+v7/100)*(1+1*v25)
    document.getElementById("res5_1").value = Math.floor(res5_1);

    var res5_1c; //크리
    res5_1c = res5_1*(2.5 + (v6/100))
    document.getElementById("res5_1c").value = Math.floor(res5_1c);

    // var res5_10; //아윈밀 엘프 폭발
    // res5_10 =res0*(1*v2_01+1*v13*v2_02)*(1+v7/100)
    // document.getElementById("res5_10").value = Math.floor(res5_10);

    // var res5_10c; //크리
    // res5_10c = res5_10*(2.5 + (v6/100))
    // document.getElementById("res5_10c").value = Math.floor(res5_10c);

    var res6; //파이어리프어택
    res6 =res0*(((1*v3)+0.04*v20)*(1+0.15*v21)*(1+1*v25)*(1+1*v26)+((1*v3_0+4*v12)+1*v12*v3_01))*(1+v7/100)
    document.getElementById("res6").value = Math.floor(res6);

    var res6c; //크리
    res6c = res6*(2.5 + (v6/100))
    document.getElementById("res6c").value = Math.floor(res6c);






}

//리셋
function reset() {
    document.getElementById("res0").value = "";
    document.getElementById("v4").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("v7").value = "";
    document.getElementById("v8").value = "";
    document.getElementById("v9").value = "";
    document.getElementById("v10").value = "";
    document.getElementById("v18").value = "";
    document.getElementById("v19").value = "";
    document.getElementById("v20").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res1_1").value = "";
    document.getElementById("res1c").value = "";
    document.getElementById("res1_1c").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res2c").value = "";
    document.getElementById("res2_1").value = "";
    document.getElementById("res2_1c").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res3c").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res4c").value = "";
    document.getElementById("res4_1").value = "";
    document.getElementById("res4_1c").value = "";
    document.getElementById("res5").value = "";
    document.getElementById("res5_0").value = "";
    document.getElementById("res5c").value = "";
    document.getElementById("res5_0c").value = "";
    document.getElementById("res5_1").value = "";
    document.getElementById("res5_1c").value = "";
    document.getElementById("res5_10").value = "";
    document.getElementById("res5_10c").value = "";
    document.getElementById("res6").value = "";
    document.getElementById("res6c").value = "";



}