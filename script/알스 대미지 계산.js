function cal() {

    //변수

    var v0 = Number(document.getElementById("v0").value); // 물공

    // //기본댐
    var v1 = $("#v1 option:selected").attr('value'); // 매그넘 랭크별 대미지
    var v2 = $("#v2 option:selected").attr('value'); // 크래시샷 랭크별 대미지
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


    // //아이템 타이틀
    var v8 = $('input[name="v8"]').is(':checked') ? parseFloat($('input[name="v8"]').val()) : 0; //물공포
    var v9 = $('input[name="v9"]').is(':checked') ? parseFloat($('input[name="v9"]').val()) : 0; //보헤미안세트
    var v10 = $('input[name="v10"]').is(':checked') ? parseFloat($('input[name="v10"]').val()) : 0; //어전트샷

    var v11 = $("#v11 option:selected").attr('value'); //  무기종류
    var v12 = $("#v12 option:selected").attr('value'); // 화살종류

    // //세공
    var v13 = Number(document.getElementById("v13").value); //매그넘샷 대미지
    var v14 = Number(document.getElementById("v19").value); //파편 대미지

    var v15 = Number(document.getElementById("v15").value); //불연금효율
    var v16 = Number(document.getElementById("v16").value); //물연금효율
    var v17 = Number(document.getElementById("v17").value); //바람연금 효율
    var v18 = Number(document.getElementById("v18").value); //흑연금 효율

    var v19_1 =$('input[name="v19"]:checked').attr('value'); //시너지1 - 불
    var v19_2 =$('input[name="v19"]:checked').attr('value1'); //시너지1 - 물
    var v19_3 =$('input[name="v19"]:checked').attr('value2'); //시너지1 - 바람
    var v19_4 =$('input[name="v19"]:checked').attr('value3'); //시너지1 - 흙
    var v19_5 =$('input[name="v19"]:checked').attr('value4'); //시너지1 -조합용

    var v20_1 =$('input[name="v20"]:checked').attr('value'); //시너지2 - 불
    var v20_2 =$('input[name="v20"]:checked').attr('value1'); //시너지2 - 물
    var v20_3 =$('input[name="v20"]:checked').attr('value2'); //시너지2 - 바람
    var v20_4 =$('input[name="v20"]:checked').attr('value3'); //시너지2 - 흙
    var v20_5 =$('input[name="v20"]:checked').attr('value4'); //시너지1 -조합용

    // // 추가
    var v22 = $("#v22 option:selected").attr('value');; //링크보너스 트라이어설트
    var v22_1 = $("#v22 option:selected").attr('value1');; //링크보너스 하이드로피어스
    var v22_2 = $("#v22 option:selected").attr('value2');; //링크보너스 증발 과열 전류 

    var v23 = Number(document.getElementById("v23").value); //거리




    //계산식

    var v7; //추가대미지
    v7 = v7_0+v7_1+v7_2+v7_3;
    document.getElementById("v7").value = v7;

    var v6; //추가크리
    v6 = v6_0 + v6_1 + v6_2 + 7 * v6_3;
    document.getElementById("v6").value = v6;

    var res00; //알케믹시너지위한 연산
    res00 = v19_5*v20_5 ;
    document.getElementById("res00").value = res00;

    var res01; //알케믹시너지(증발 추댐)
    if(res00==3){
        res01= (0.2+0.01*v15+0.01*v16+0.15-0.25)*(1+0.1*v22_2)}
    else {
        res01= 0}
    document.getElementById("res01").value = Math.round(res01*1000)/1000;

    var res01_1; //알케믹시너지 
    if(res00==3){
        res01_1="증발"}
    else if(res00==5){
        res01_1= "전류"}
    else if(res00==7){
        res01_1= "과열"}
    else if(res00==15){
        res01_1= "냉각"}
    else if(res00==21){
        res01_1= "부식"}
    else if(res00==35){
        res01_1= "분진"}
    else {
        res01_1= "없음"}
    document.getElementById("res01_1").value = res01_1





    var res0; //레인지샷 대미지
    res0 = (v0 * (1 + 0.2 * v8) * (1 + (v5 / 100) * (1 + 0.2 * v8))) * (1 + 1 * v12)
    document.getElementById("res0").value = Math.floor(res0);

    var res1; //매그넘샷 대미지
    res1 = res0 * (1 * v1 + 0.1 * v13) * (1 + 0.15 * v9 + v7 / 100 + 0.1* v4 + 0.12 * v10)* (1 + 0.01*v23*v22_2)
    document.getElementById("res1").value = Math.floor(res1);

    var res2; //크래시샷 파편댐
    res2 = res0 * (1 * v2 + 0.035 * v14) * (1 + 1 * v11) * (1 + v7 / 100 + 0.1* v4 + 0.12 * v10)* (1 + 0.01*v23*v22_2)
    document.getElementById("res2").value = Math.floor(res2);

    var res3; //하이드로피어스 대미지 안 합친거 
    res3 = res0 * 18 * (1 + (v7_0+v7_3) / 100) * (1 + 0.3 * v22_1)* (1 + 0.1*v23*v22_2)
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1; //하이드로피어스 대미지
    res3_1 = (res3 + res1) * (1 + res01)
    document.getElementById("res3_1").value = Math.floor(res3_1);

    var res3_2; //하이드로피어스 크리 대미지
    res3_2 = res3_1 * (2.5 + v6 / 100)
    document.getElementById("res3_2").value = Math.floor(res3_2);

    var res4; //플레임버스트 대미지 안 합친거     
    res4 = (res0 * 4 * (1 + (v7_0+v7_3)  / 100)* (1 + 0.1*v23*v22_2));
    document.getElementById("res4").value = Math.floor(res4);

    var res4_1; //플레임버스트 대미지    
    res4_1 = (res4 + res2)*(1 + res01);
    document.getElementById("res4_1").value = Math.floor(res4_1);

    var res4_2; //플레임버스트 대미지    
    res4_2 = 3*(res4 + res2)*(1 + res01);
    document.getElementById("res4_2").value = Math.floor(res4_2);


    var res4_3; //플레임버스트 크리 대미지
    res4_3 = res4_1 * (2.5 + v6 / 100)
    document.getElementById("res4_3").value = Math.floor(res4_3);
    var res4_4; //플레임버스트 크리 대미지
    res4_4 = res4_2 * (2.5 + v6 / 100)
    document.getElementById("res4_4").value = Math.floor(res4_4);

    var res5; //트라이어설트 대미지
    res5 = res0 * 10 * (1 + (v7_0+v7_3)  / 100) * (1 + 0.01*(v15+v16+v17+v18))*(1 + res01)* (1 +  0.01*v23*v22_2)
    document.getElementById("res5").value = Math.floor(res5);
    
    var res5; //트라이어설트 대미지2
    res5_1 = res0 * 25 * (1 + (v7_0+v7_3) / 100) * (1 + 0.01*(v15+v16+v17+v18))*(1 + res01)* (1 +  0.01*v23*v22_2)
    document.getElementById("res5_1").value = Math.floor(res5_1);
    
    var res5_2; //트라이어설트 대미지3
    res5_2 = (2*res5+res5_1)
    document.getElementById("res5_2").value = Math.floor(res5_2);

    var res5_3; //트라이어설트 크리 대미지
    res5_3 = (res5_2) * (2.5 + v6 / 100)
    document.getElementById("res5_3").value = Math.floor(res5_3);
}

//리셋
function reset() {
    document.getElementById("v0").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v7_0").value = "";
    document.getElementById("v6_0").value = "";
    document.getElementById("v13").value = "";
    document.getElementById("v19").value = "";
    document.getElementById("v15").value = "";
    document.getElementById("v16").value = "";
    document.getElementById("v17").value = "";
    document.getElementById("v18").value = "";
    document.getElementById("res0").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res3_1").value = "";
    document.getElementById("res3_2").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res4_1").value = "";
    document.getElementById("res4_2").value = "";
    document.getElementById("res5").value = "";
    document.getElementById("res5_1").value = "";
    $("input:checkbox").prop("checked", false);

}