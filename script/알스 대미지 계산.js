function cal() {

    //변수
    var v00 = $('input[name="v00"]:checked').attr('value')
    var v00_1 = $('input[name="v00"]:checked').attr('value1'); //종족
    var v0 = Number(document.getElementById("v0").value); // 물공

    //기본댐
    var v1 = $("#v1 option:selected").attr('value'); // 매그넘 랭크별 대미지
    var v2 = $("#v2 option:selected").attr('value'); // 크래시샷 랭크별 대미지
    var v3 = $('input[name="v3"]').is(':checked') ? parseFloat($('input[name="v3"]').val()) : 0; //어전트샷
    var v4 = $('input[name="v4"]').is(':checked') ? parseFloat($('input[name="v4"]').val()) : 0; //비전오브라데카




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
    var v14 = Number(document.getElementById("v19").value); //파편 대미지
    var v15 = Number(document.getElementById("v20").value); //불연금효율
    var v16 = Number(document.getElementById("v21").value); //물연금효율
    // var v17 = Number(document.getElementById("v22").value); //바람연금 효율
    // var v18 = Number(document.getElementById("v23").value); //흑연금 효율


    // 추가


    var v21 = $('input[name="v21"]').is(':checked') ? parseFloat($('input[name="v21"]').val()) : 0; //증발
    var v22 = $('input[name="v22"]').is(':checked') ? parseFloat($('input[name="v22"]').val()) : 0; //링크보너스
    var v23 = $('input[name="v23"]').is(':checked') ? parseFloat($('input[name="v23"]').val()) : 0; //최대거리




    //계산식

    var v7; //추가대미지
    v7 = v7_0 + v7_1 + v7_2 + v7_3;
    document.getElementById("v7").value = v7;

    var v6; //추가크리
    v6 = v6_0 + v6_1 + v6_2 + 7 * v6_3;
    document.getElementById("v6").value = v6;
    
    var res0; //레인지샷 대미지
    res0 = (v0 * (1 + 0.2 * v8) * (1 + (v5 / 100)) * (1 + 0.2 * v8)) * (1 + v7 / 100) * (1 + v12) 
    document.getElementById("res0").value = Math.floor(res0);

    
    var res0_1; //알케믹 시너지
    res0_1 = (1+0.15+0.01*v20+0.01*v21-0.25)
    if(res0_1<1){res0_1=1}
    else{res0_1=res0_1}
    document.getElementById("res0_1").value = Math.floor(res0_1);

    var res1; //매그넘샷 대미지
    res1 = res0 * (1 * v00 + 0.5 * v00_1) * (1 * v1 + 0.1 * v13) * (1 + 0.15 * v9 + v7 / 100)
    document.getElementById("res1").value = Math.floor(res1);

    var res2; //크래시샷 파편댐
    res2 = res0 * (1 * v00 + 0.5 * v00_1) * (1 * v2 + 0.035 * v14 + v9 / 100) * (1 + 1 * v11)*(1 + v7 / 100)
    document.getElementById("res2").value = Math.floor(res2);

    var res3; //하이드로피어스 대미지
    res3 = res1+ res0 *18 *(1 + v7 / 100)*(1+0.15*v22)  
    document.getElementById("res3").value = Math.floor(res3);

    var res4; //플레임버스트 대미지    
    res4 = (res0 * 4 *(1 + v7 / 100)  + res2)*res0_1;
    document.getElementById("res4").value = Math.floor(res4);

    var res5; //




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