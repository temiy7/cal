function cal() {

    //변수
    //기본스텟
    var v1 = Number(document.getElementById("v1").value); // 마법공격력
    var v2 = Number(document.getElementById("v2").value); // 최댐인챈트
    //마법최댐
    var v3 = Number(document.getElementById("v3").value); // 라볼트최댐
    var v4 = Number(document.getElementById("v4").value); // 파볼트최댐
    var v5 = Number(document.getElementById("v5").value); // 아볼트최댐
    var v6 = Number(document.getElementById("v6").value); // 썬더최댐
    var v7 = Number(document.getElementById("v7").value); // 파이어볼최댐
    var v8 = Number(document.getElementById("v8").value); // 아습최댐
    var v9 = Number(document.getElementById("v9").value); // 라로최댐
    var v10 = Number(document.getElementById("v10").value); // 해일최댐
    var v11 = Number(document.getElementById("v11").value); // 메테오최댐
    //마스터리
    var v12 = Number(document.getElementById("v12").value); // 볼트마스터리
    var v13 = Number(document.getElementById("v13").value); // 볼트조합마스터리
    var v14 = Number(document.getElementById("v14").value); // 라이트닝마스터리
    var v15 = Number(document.getElementById("v15").value); // 파이어마스터리
    var v16 = Number(document.getElementById("v16").value); // 아이스마스터리
    var v17 = Number(document.getElementById("v17").value); // 라로 풀차지 대미지
    //콤보카드
    var v18 = Number(document.getElementById("v18").value); //라볼콤카
    var v19 = Number(document.getElementById("v19").value); //파볼트콤카 
    var v20 = Number(document.getElementById("v20").value); //아볼콤파
    var v21 = Number(document.getElementById("v21").value); //썬더콤카 
    var v22 = Number(document.getElementById("v22").value); //파볼콤카  
    var v23 = Number(document.getElementById("v23").value); //아습콤카 
    var v24 = Number(document.getElementById("v24").value); //라로콤카 
    var v25 = Number(document.getElementById("v25").value); //헤일콤카
    //아이템 타이틀
    var v26v = document.getElementsByName("v26"); // 헤보나로브
    var v26 = document.getElementById("v26")
    for (var i = 0; i < v26v.length; i++) {
        if (v26v[i].checked)
            v26 = 0
        else
            v26 = 1;
        break;
    }
    var v27v = document.getElementsByName("v27"); // 로즈마리장깁
    var v27 = document.getElementById("v27")
    for (var i = 0; i < v27v.length; i++) {
        if (v27v[i].checked)
            v27 = 0
        else
            v27 = 1;
        break;

    }

    var v28v = document.getElementsByName("v28"); //바다의 지배자  
    var v28 = document.getElementById("v28")
    for (var i = 0; i < v28v.length; i++) {
        if (v28v[i].checked)
            v28 = 0;
        else
            v28 = 1;
        break;
    }


    var v29 = Number(document.getElementById("v29").value); //추댐
    var v30 = $("#v30 option:selected").attr('value'); //차지수(6.5배)
    var v30_1 = $("#v30 option:selected").attr('value2'); //차지수(5배)
    var v30_2 = $("#v30 option:selected").attr('value1'); //차지수(1.28배)



    var v31 = Number(document.getElementById("v31").value); //라이트닝원드영향력

    var v32v = document.getElementsByName("v32"); //볼조타이틀
    var v32 = document.getElementById("v32")
    for (var i = 0; i < v32v.length; i++) {
        if (v32v[i].checked)
            v32 = 0;
        else
            v32 = 1;
        break;
    }


    //계산식

    var res1; //라볼트 대미지 
    res1 = (180 + 0.6 * v1 + 0.44 * v2 + 2.5 * v3 + (7 + 0.75 * v31) * v30_1) * (1 + 1.5 + 0.3 + 0.01 * v12 + 0.005 * v14 + (v18 / 100)) * v30_2;
    document.getElementById("res1").value = Math.floor(res1);

    var res1_1; //라볼트 최종비
    res1_1 = 100 * (res1 * (1 + v29 / 100) - (180 * 2.8 * v30_2)) / (180 * 2.8 * v30_2);
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res2; //파볼트 대미지 
    res2 = (126 + 0.5 * v1 + 0.4 * v2 + 2.5 * v4 + 5 * v30_1) * (1 + 1.5 + 0.3 + 0.01 * v12 + 0.005 * v15 + 0.15 * v26 + (v19/100)) * v30;
    document.getElementById("res2").value = Math.floor(res2);

    var res2_1; //파볼트 최종비
    res2_1 = 100 * (res2 * (1 + v29/100) - (126 * 2.8 * v30)) / (126 * 2.8 * v30);
    document.getElementById("res2_1").value = Math.floor(res2_1);

    var res1_2; //라파볼 대미지
    res1_2 = (res1 + res2) * (1 + 0.3 + 0.01 * v13) * (1 + 0.05 * v32 * (1 + v29 / 100));
    document.getElementById("res1_2").value = Math.floor(res1_2);

    var res1_21; //라파볼 최종비
    res1_21 = 100 * (res1_2 -  (180 * v30_2 + 126 * v30) *2.8 * 1.3) / ((180 * v30_2 + 126 * v30) * 2.8 * 1.3);
    document.getElementById("res1_21").value = Math.floor(res1_21);


    var res3; //아볼트 대미지
    res3 = (104 + 0.4 * v1 + 0.08 * v2 + 2.5 * v5 + 10 * v30_1) * (1 + 1.5 + 0.3 + 0.01 * v12 + 0.005 * v16 + 0.15 * v26 + (v20 / 100) + 0.15 * v27) * (1 + v29 / 100);
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1//아볼트 최종비
    res3_1 = 100 * (res3 - 104 * 2.8) / (104 * 2.8)
    document.getElementById("res3_1").value = Math.floor(res3_1);

    var res4; //썬더 대미지
    res4 = (481 + 3.5 * v1 + 0.5 * v2 + 5 * v6) * (1 + 0.15 + 0.005 * v14 + (v21 / 100)) * (1 + v29 / 100);
    document.getElementById("res4").value = Math.floor(res4);

    var res4_1; //썬더 증가비
    res4_1 = 100 * (res4 - 481 * 1.15) / (481 * 1.15);
    document.getElementById("res4_1").value = Math.floor(res4_1);

    var res5; //파이어볼
    res5 = (425 + 3.23 * v1 + 0.077 * v2 + 2.3 * v7) * (1 + 0.15 + 0.005 * v15 + (v22 / 100)) * (1 + v29 / 100);
    document.getElementById("res5").value = Math.floor(res5);

    var res5_1; //파이어볼 증가비
    res5_1 = 100 * (res5 - 425 * 1.15) / (425 * 1.15);
    document.getElementById("res5_1").value = Math.floor(res5_1);

    var res6; //아이스스피어
    res6 = (336 + 2.3 * v1 + 0.1 * v2 + 5 * v8) * (1 + 0.15 + 0.005 * v16 + 0.15 * v27 + (v23 / 100)) * (1 + v29 / 100);
    document.getElementById("res6").value = Math.floor(res6);

    var res6_1; //아이스스피어 증가비
    res6_1 = 100 * (res6 - 336 * 1.15) / (336 * 1.15);
    document.getElementById("res6_1").value = Math.floor(res6_1);

    var res7; //라이트닝로드
    res7 = (500 + 12 * v1 + 20 * v9) * (1 + 0.15 + 0.005 * v14 + (v24 / 100) + (v17 / 100)) * (1 + 0.1 * v28) * (1 + v29 / 100);
    document.getElementById("res7").value = Math.floor(res7);

    var res7_1; //라이트닝로드 증가비
    res7_1 = 100 * (res7 - 500 * 1.15) / (500 * 1.15);
    document.getElementById("res7_1").value = Math.floor(res7_1);

    var res8; //헤일스톰
    res8 = (300 + 3.2 * v1 + 10 * v10) * (1 + 0.15 + 0.005 * v16 + 0.15 * v27 + (v25 / 100)) * (1 + v29 / 100);
    document.getElementById("res8").value = Math.floor(res8);

    var res8_1; //헤일스톰 증가비
    res8_1 = 100 * (res8 - 300 * 1.15) / (300 * 1.15);
    document.getElementById("res8_1").value = Math.floor(res8_1);

    var res9; //메테오
    res9 = (7517 + (8400 + 160 * v1 + 150 * v11) * (1 + 0.15 + 0.005 * v15)) * (1 + v29 / 100);
    document.getElementById("res9").value = Math.floor(res9);

    var res9_1; //메테오 증가비
    res9_1 = 100 * (res9 - (7517 + 8400 * 1.15)) / (7517 + 8400 * 1.15);
    document.getElementById("res9_1").value = Math.floor(res9_1);


}

//리셋
function reset() {
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v4").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("v7").value = "";
    document.getElementById("v8").value = "";
    document.getElementById("v10").value = "";
    document.getElementById("v11").value = "";
    document.getElementById("v12").value = "";
    document.getElementById("v13").value = "";
    document.getElementById("v14").value = "";
    document.getElementById("v15").value = "";
    document.getElementById("v16").value = "";
    document.getElementById("v17").value = "";
    document.getElementById("v18").value = "";
    document.getElementById("v19").value = "";
    document.getElementById("v20").value = "";
    document.getElementById("v21").value = "";
    document.getElementById("v22").value = "";
    document.getElementById("v23").value = "";
    document.getElementById("v24").value = "";
    document.getElementById("v25").value = "";
    document.getElementById("v29").value = "";
    document.getElementById("v31").value = "";
    document.getElementById("res1_1").value = "";
    document.getElementById("res2_1").value = "";
    document.getElementById("res1_21").value = "";
    document.getElementById("res3_1").value = "";
    document.getElementById("res4_1").value = "";
    document.getElementById("res5_1").value = "";
    document.getElementById("res6_1").value = "";
    document.getElementById("res7_1").value = "";
    document.getElementById("res8_1").value = "";
    document.getElementById("res9_1").value = "";

}

