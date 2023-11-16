function cal() {
    var v1 = Number(document.getElementById("v1").value); // 마법공격력
    var v2 = Number(document.getElementById("v2").value); // 최댐인챈트
    var v3 = Number(document.getElementById("v3").value); // 썬더최댐
    var v4 = Number(document.getElementById("v4").value); // 파이어볼최댐
    var v5 = Number(document.getElementById("v5").value); // 아습최댐
    var v6 = Number(document.getElementById("v6").value); // 라이트닝마스터리
    var v7 = Number(document.getElementById("v7").value); // 파이어마스터리
    var v8 = Number(document.getElementById("v8").value); //  아이스마스터리
    var v18 = Number(document.getElementById("v18").value);// 헤일최댐세공
    var v19 = Number(document.getElementById("v19").value);// 라로 대미지 에코
    var v20 = Number(document.getElementById("v20").value);// 라로 풀차지 대미지
    var vv = document.getElementsByName("v9"); //로즈마리
    var v9 = document.getElementById("v9")
    for (var i = 0; i < vv.length; i++) {
        if (vv[i].checked)
            v9 = 0
        else
            v9 = 1;
        break;
    }
    var v10_0 = Number(document.getElementById("v10_0").value); // 추가크리
    var v10_1 = $('input[name="v10_1"]').is(':checked') ? parseFloat($('input[name="v10_1"]').val()) : 0; //정령연마
    var v10_2 = $('input[name="v10_2"]').is(':checked') ? parseFloat($('input[name="v10_2"]').val()) : 0; //이보나

    var v11 = Number(document.getElementById("v11").value); // 썬더콤카
    var v12 = Number(document.getElementById("v12").value); // 아습콤카
    var v15 = Number(document.getElementById("v15").value); // 파볼콤카
    var v16 = Number(document.getElementById("v16").value); //헤일콤카
    var v17 = Number(document.getElementById("v17").value); //라로콤카
    var v13 = Number(document.getElementById("v13").value); // 전장비율
    var v14 = Number(document.getElementById("v14").value); //맥뎀

    var vv2 = document.getElementsByName("v21"); //바다의 지배자
    var v21 = document.getElementById("v21")
    for (var i = 0; i < vv2.length; i++) {
        if (vv2[i].checked)
            v21 = 0;
        else
            v21 = 1;
        break;
    }
    var v22 = Number(document.getElementById("v22").value); //메테오 최댐

    var vm = document.getElementsByName("v23"); // 물공포
    var v23 = document.getElementById("v23")
    for (var i = 0; i < vm.length; i++) {
        if (vm[i].checked)
            v23 = 0;
        else
            v23 = 1;
        break;
    }

    var v24_0 = Number(document.getElementById("v24_0").value); //추가대미지
    var v24_1 = $('input[name="v24_1"]').is(':checked') ? parseFloat($('input[name="v24_1"]').val()) : 0; //약분
    var v24_2 = $('input[name="v24_2"]').is(':checked') ? parseFloat($('input[name="v24_2"]').val()) : 0; //광폭
    var v24_3 = $('input[name="v24_3"]').is(':checked') ? parseFloat($('input[name="v24_3"]').val()) : 0; //배맴


    var v25 = $("#v25 option:selected").attr('value'); //인퀴지터


    var vf = document.getElementsByName("v26");
    var v26 = document.getElementById("v26") //파마타이틀
    for (var i = 0; i < vf.length; i++) {
        if (vf[i].checked)
            v26 = 0;
        else
            v26 = 1;
        break;
    }

    var vg = document.getElementsByName("v27");
    var v27 = document.getElementById("v27") //라마타이틀
    for (var i = 0; i < vg.length; i++) {
        if (vg[i].checked)
            v27 = 0;
        else
            v27 = 1;
        break;
    }

    var vh = document.getElementsByName("v28");
    var v28 = document.getElementById("v28") //아마타이틀
    for (var i = 0; i < vh.length; i++) {
        if (vh[i].checked)
            v28 = 0;
        else
            v28 = 1;
        break;
    }

    var v29 = Number(document.getElementById("v29").value); // 블레이즈 폭발 대미지
    var v30 = Number(document.getElementById("v30").value); //블레이즈 대미지
    var v31 = Number(document.getElementById("v31").value); //블레이즈 콤보카드

    var vbb = document.getElementsByName("v32"); // 다운게이지
    var v32 = document.getElementById("v32")
    for (var i = 0; i < vbb.length; i++) {
        if (vbb[i].checked)
            v32 = 1;
        else
            v32 = 2.75;
        break;
    }


    var vg = document.getElementsByName("v33");
    var v33 = document.getElementById("v33") //블리안 엔더스
    for (var i = 0; i < vg.length; i++) {
        if (vg[i].checked)
            v33 = 0;
        else
            v33 = 1;
        break;
    }

    var v34 = $('input[name="v34"]').is(':checked') ? parseFloat($('input[name="v34"]').val()) : 0; //다크메이지 링크효과

    var v35 = $("#v35 option:selected").attr('value'); //에르그




    var v24; //추가대미지
    v24 = v24_0 + v24_1 + v24_2 + v24_3;
    document.getElementById("v24").value = v24;

    var v10; //추가크리
    v10 = v10_0 + v10_1 + v10_2;
    document.getElementById("v10").value = v10;


    var res1; // 썬더 대미지 3차지

    res1 = (481 + 3.5 * v1 + 0.5 * v2 + 0.5 * v14 * (1 + 0.2 * v23) * (v13 / 100) + 5 * v3) * 3.5 * (1 + 0.15 + 0.005 * v6 + (v11 / 100) + 0.1 * v27 + 0.15 * v33) * (1 + v24 / 100 + 1 + 0.01 *(1*v25+1*v35))

    document.getElementById("res1").value = Math.floor(res1);


    var res3; //썬더 대미지 5차지

    res3 = (481 + 3.5 * v1 + 0.5 * v2 + 0.5 * v14 * (1 + 0.2 * v23) * (v13 / 100) + 5 * v3) * 6 * (1 + 0.15 + 0.005 * v6 + (v11 / 100) + 0.1 * v27 + 0.15 * v33) * (1 + v24 / 100 + 1 + 0.01 *  (1*v25+1*v35))


    document.getElementById("res3").value = Math.floor(res3);


    var res4; //파이어볼 5차지대미지

    res4 = (2760 + 0.85*21 * v1 + 0.85*0.5 * v2 + 0.5 * v14 * (1 + 0.2 * v23) * (v13 / 100) + 15 * v4) * (1 + 0.15 + 0.005 * v7 + (v15 / 100) + 0.1 * v26 + 0.15 * v33) * (1 + v24 / 100 +1 + 0.01 *  (1*v25+1*v35))


    document.getElementById("res4").value = Math.floor(res4);

    var res5; //아이스 스피어 3차지 대미지

    res5 = (336 + 2.3 * v1 + 0.1 * v2 + 0.1 * v14 * (1 + 0.2 * v23) * (v13 / 100) + 5 * v5) * 3 * (1 + 0.15 + 0.005 * v8 + 0.15 * v9 + (v12 / 100) + 0.1 * v28 + 0.15 * v33) * (1 + v24 / 100 + 1 + 0.01 *  (1*v25+1*v35))


    document.getElementById("res5").value = Math.floor(res5);


    var res6; //아이스스피어 5차지 대미지

    res6 = (336 + 2.3 * v1 + 0.1 * v2 + 0.1 * v14 * (1 + 0.2 * v23) * (v13 / 100) + 5 * v5) * 6.5 * (1 + 0.15 + 0.005 * v8 + 0.15 * v9 + (v12 / 100) + 0.1 * v28 + 0.15 * v33) * (1 + v24 / 100 +1 + 0.01 * (1*v25+1*v35))


    document.getElementById("res6").value = Math.floor(res6);


    var res7_h; //헤일스톰 대미지위한 v25 수정값
    if (v25 == 15) {
        res7_h = 2 * v25
    } else {
        res7_h = 1 * v25
    }
    document.getElementById("res7_h").value = res7_h;


    var res7; //헤일스톰 대미지

    res7 = (300 + 3.2 * v1 + 10 * v18) * 6.25 * (1 + 0.15 + 0.005 * v8 + 0.15 * v9 + (v16 / 100) + 0.1 * v28 + 0.15 * v33) * (1 + v24 / 100) * (1 + 0.01 * res7_h) * (1 + 0.1 * v34)


    document.getElementById("res7").value = Math.floor(res7);

    var res8; //라이트닝 로드 대미지

    res8 = (500 + 12 * v1 + 20 * v19) * (3.3 + (v20 / 100)) * (1 + 0.15 + 0.005 * v6 + (v17 / 100) + 0.1 * v27 + 0.15 * v33) * (1 + 0.1 * v21) * (1 + v24 / 100) * (1 + 0.1 * v34) * (1 + 0.01 * v25)

    document.getElementById("res8").value = Math.floor(res8);

    var res9; //썬3크리

    res9 = res1 * (2.5 + (v10 / 100));

    document.getElementById("res9").value = Math.floor(res9);

    var res10; //썬5크리

    res10 = res3 * (2.5 + (v10 / 100));

    document.getElementById("res10").value = Math.floor(res10);

    var res11; //파볼크리

    res11 = res4 * (2.5 + (v10 / 100));

    document.getElementById("res11").value = Math.floor(res11);

    var res12; //아3크리

    res12 = res5 * (2.5 + (v10 / 100));

    document.getElementById("res12").value = Math.floor(res12);

    var res13; //아5크리

    res13 = res6 * (2.5 + (v10 / 100));

    document.getElementById("res13").value = Math.floor(res13);

    var res14; //헤일크리

    res14 = res7 * (2.5 + (v10 / 100));

    document.getElementById("res14").value = Math.floor(res14);

    var res15; //라로크리

    res15 = res8 * (2.5 + (v10 / 100));

    document.getElementById("res15").value = Math.floor(res15);

    var res16; //파볼 3차지

    res16 = (425 + 3.23 * v1 + 0.077 * v2 + 0.077 * v14 * (v13 / 100) + 2.3 * v4) * 3 * (1 + 0.15 + 0.005 * v7 + (v15 / 100) + 0.1 * v26 + 0.15 * v33) * (1 + v24 / 100 + 1 + 0.01 * (1*v25+1*v35))

    document.getElementById("res16").value = Math.floor(res16);

    var res17; //파볼 3차지 크리

    res17 = res16 * (2.5 + (v10 / 100));

    document.getElementById("res17").value = Math.floor(res17);

    var res18; //메테오

    res18 = (7517 + (8400 + 160 * v1 + 150 * v22) * (1 + 0.15 + 0.005 * v7 + 0.1 * v26 + 0.15 * v33)) * (1 + v24 / 100) * (1 + 0.1 * v34) * (1 + 0.01 * v25)

    document.getElementById("res18").value = Math.floor(res18);

    var res19; //메테오 크리

    res19 = res18 * (2.5 + (v10 / 100));

    document.getElementById("res19").value = Math.floor(res19);

    var res20; //블레이즈

    res20 = v1 * 1.875 * 0.3525 * (14 + 0.1 * v29) * (2.4 + 0.05 * v30) * v32 * (1 + v31 / 100) * (1 + v24 / 100 + 1 + 0.01 *  (1*v25+1*v35))

    document.getElementById("res20").value = Math.floor(res20);

    var res21; //블레이즈 크리

    res21 = res20 * (2.5 + (v10 / 100));

    document.getElementById("res21").value = Math.floor(res21);


}

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
    document.getElementById("v24").value = "";
    document.getElementById("v29").value = "";
    document.getElementById("v30").value = "";
    document.getElementById("v31").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res5").value = "";
    document.getElementById("res6").value = "";
    document.getElementById("res7").value = "";
    document.getElementById("res8").value = "";
    document.getElementById("res9").value = "";
    document.getElementById("res10").value = "";
    document.getElementById("res11").value = "";
    document.getElementById("res12").value = "";
    document.getElementById("res13").value = "";
    document.getElementById("res14").value = "";
    document.getElementById("res15").value = "";
    document.getElementById("res16").value = "";
    document.getElementById("res17").value = "";
    document.getElementById("res18").value = "";
    document.getElementById("res19").value = "";
    document.getElementById("res20").value = "";
    document.getElementById("res21").value = "";
    $("input:checkbox").prop("checked", false);

}
