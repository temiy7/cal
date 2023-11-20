function cal() {

    //변수
    var v00 = $('input[name="v00"]:checked').attr('value')
    var v00_1 = $('input[name="v00"]:checked').attr('value1'); //종족
    var v0 = Number(document.getElementById("v0").value); // 물공

    //기본댐
    var v1 = $("#v1 option:selected").attr('value'); // 매그넘 랭크별 대미지
    var v1_1 = $("#v1 option:selected").attr('value2'); // 엘프 매그넘 랭크별 대미지
    var v1_0 = $("#v1_0 option:selected").attr('value'); // 하이드로피어스 랭크별 대미지
    var v1_01 = $("#v1_0 option:selected").attr('value2'); // 라스매시 인잭션 랭크별 대미지
    var v2 = $("#v2 option:selected").attr('value'); // 크래시샷 랭크별 대미지
    var v2_1 = $("#v2 option:selected").attr('value2'); // 엘프크래시샷 랭크별 대미지
    var v2_0 = $("#v2_0 option:selected").attr('value'); // 플레임버스트 랭크별 대미지
    var v3 = $("#v3 option:selected").attr('value'); // 트라이어설 랭크별 대미지
    var v3_0 = $("#v3_0 option:selected").attr('value'); // 파리택 랭크별 대미지
    var v3_01 = $("#v3_0 option:selected").attr('value2'); // 파리택 랭크별 인잭

    var v5 = Number(document.getElementById("v5").value); // 전장비율

    //크리
    var v6_0 = Number(document.getElementById("v6_0").value); // 추가크리
    var v6_1 = $('input[name="v6_1"]').is(':checked') ? parseFloat($('input[name="v6_1"]').val()) : 0; //정령연마
    var v6_2 = $('input[name="v6_2"]').is(':checked') ? parseFloat($('input[name="v6_2"]').val()) : 0; //이보나
    var v6_3 = $('input[name="v6_3"]').is(':checked') ? parseFloat($('input[name="v6_3"]').val()) : 0; //크리증가세트
    //추가댐
    var v7_0 = Number(document.getElementById("v7_0").value); // 보너스대미지
    var v7_1 = $('input[name="v7_1"]').is(':checked') ? parseFloat($('input[name="v7_1"]').val()) : 0; //약분
    var v7_2 = $('input[name="v7_2"]').is(':checked') ? parseFloat($('input[name="v7_2"]').val()) : 0; //광폭
    var v7_3 = $('input[name="v7_3"]').is(':checked') ? parseFloat($('input[name="v7_3"]').val()) : 0; //배맴


    //아이템 타이틀
    var v8 = $('input[name="v8"]').is(':checked') ? parseFloat($('input[name="v8"]').val()) : 0; //물공포
    var v9 = $('input[name="v9"]').is(':checked') ? parseFloat($('input[name="v9"]').val()) : 0; //보헤미안세트
    var v10 = $('input[name="v10"]').is(':checked') ? parseFloat($('input[name="v10"]').val()) : 0; //어전트샷

    var v11 = $("#v11 option:selected").attr('value'); //  무기종류
    var v12 = $("#v12 option:selected").attr('value'); // 화살종류

    //세공
    var v13 = Number(document.getElementById("v13").value); //매그넘샷 대미지
    var v19 = Number(document.getElementById("v19").value); //파편 대미지


    //계산식

    var v7; //추가대미지
    v7 = v7_0 + v7_1 + v7_2 + v7_3;
    document.getElementById("v7").value = v7;

    var v6; //추가크리
    v6 = v6_0 + v6_1 + v6_2 + 7 * v6_3;
    document.getElementById("v6").value = v6;

    var res0; //레인지샷 대미지
    res0 = (v0 * (1 + 0.2 * v8) * (1 + (v5 / 100)) * (1 + 0.2 * v8)) * (1 + v7 / 100) * (1 + v12) * (1 + v3 * v20) * (1 * v00 + 2 * v00_1 * (1 + 1 * v21 * v11))
    document.getElementById("res0").value = Math.floor(res0);


    var res1; //매그넘샷 대미지
    res1 = res0 * (1 * v00 + 0.5 * v00_1) * (1 * v1 + 0.1 * v13) * (1 + 0.15 * v9 + v7 / 100)
    document.getElementById("res1").value = Math.floor(res1);


}

//리셋
function reset() {
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