function cal() {

    //변수
    //기본스텟
    var v1 = Number(document.getElementById("v1").value); // 마법공격력
    var v2 = Number(document.getElementById("v2").value); // 최댐인챈트
    var v2_1 = Number(document.getElementById("v2_1").value); // 맥뎀
    var v2_2 = Number(document.getElementById("v2_2").value); // 전장비
    var v2_3 = $('input[name="v2_3"]').is(':checked') ? parseFloat($('input[name="v2_3"]').val()) : 1; //물공포

    
    //마법최댐
    var v3 = Number(document.getElementById("v3").value); // 라볼트최댐
    var v4 = $('input[name="v4"]').is(':checked') ? parseFloat($('input[name="v4"]').val()) : 1; //라체상태

    var v7 = Number(document.getElementById("v7").value); // 파이어볼최댐
    var v8 = Number(document.getElementById("v8").value); // 아습최댐
    //마스터리
    var v12 = Number(document.getElementById("v12").value); // 볼트마스터리
    var v14 = Number(document.getElementById("v14").value); // 라이트닝마스터리
    var v15 = Number(document.getElementById("v15").value); // 파이어마스터리
    var v16 = Number(document.getElementById("v16").value); // 아이스마스터리


    //아이템 타이틀
  
    var v27 = $('input[name="v27"]').is(':checked') ? parseFloat($('input[name="v27"]').val()) : 0; //로즈마리장
    var v28 = $('input[name="v28"]').is(':checked') ? parseFloat($('input[name="v28"]').val()) : 0; //블리안세트


    var v29 = Number(document.getElementById("v29").value); //추댐
    var v29_1 =$('input[name="v29_1"]').is(':checked') ? parseFloat($('input[name="v29_1"]').val()) : 0; //약분
    var v29_2 = $('input[name="v29_2"]').is(':checked') ? parseFloat($('input[name="v29_2"]').val()) : 0; //광폭
    var v29_3 =$('input[name="v29_3"]').is(':checked') ? parseFloat($('input[name="v29_3"]').val()) : 0; //배맴
    


    var v30 = $("#v30 option:selected").attr('value'); //아르카나 추댐
    var v30_1 = $("#v30 option:selected").attr('value1'); // 속성 중마 추댐
    var v30_2 = $("#v30 option:selected").attr('value2'); // 원드영향력


    var v31 = Number(document.getElementById("v31").value); //라이트닝원드영향력

    var v32 = Number(document.getElementById("v32").value); //추가크리대미지
    var v32_1 = $('input[name="v32_1"]').is(':checked') ? parseFloat($('input[name="v32_1"]').val()) : 0; //정령연마
    var v32_2 = $('input[name="v32_2"]').is(':checked') ? parseFloat($('input[name="v32_2"]').val()) : 0; //이보나
    var v32_3 = $('input[name="v32_3"]').is(':checked') ? parseFloat($('input[name="v32_3"]').val()) : 0; //크리증가세트


    var v33 = $('input[name="v33"]').is(':checked') ? parseFloat($('input[name="v33"]').val()) : 0; //속성타이틀

    var v34 = $("#v34 option:selected").attr('value'); //에르그


    //계산식

    var res1; //런지
    res1 = ((6000 + v1 * 100) * (1 + 0.15 + 0.005 * v15 + 0.15 * v28)* (1 + (v29+v29_3 )/ 100) + ((2760 + 0.85*21 * v1 + 0.85*0.5 * (v2+v2_1*v2_2/100*(1+0.2*v2_3)) + 15 * v7) * (1 + 0.15 + 0.005 * v15 + 0.1 * v33 + 0.15 * v28)) * (1 + (v29+v29_1+v29_2+v29_3 )/100 )*(1+ (1*v34 +1*v30_1))) * v30 * v4;
    document.getElementById("res1").value = Math.floor(res1);

    var res1_1; // 런지 크리
    res1_1 = res1 * (2.5 + (v32+v32_1+v32_2)/ 100)
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res2; //체인
    res2 = ((800 + v1 * 11) * (1 + 0.15 + 0.005 * v14 + 0.15 * v28)* (1 + (v29+v29_3 )/ 100) + ((180 + 0.6 * v1 + 0.44 * (v2+v2_1*v2_2/100*(1+0.2*v2_3)) + 2.5 * v3 + (7 + 0.75 * v31) * v30_2) *1.1* (1 + 1.5 + 0.3 + 0.01 * v12 + 0.005 * v14 +  0.15 * v28 +0.1*v33))* (1 + (v29+v29_1+v29_2+v29_3 )/ 100)) * v30 ;
    document.getElementById("res2").value = Math.floor(res2);

    var res2_1; //체인크리
    res2_1 = res2 * (2.5 +  (v32+v32_1+v32_2)/ 100)
    document.getElementById("res2_1").value = Math.floor(res2_1);


    var res3; //스톰
    res3 = ((1000 + v1 * 17) * (1 + 0.15 + 0.005 * v16 + 0.15 * v28+0.15*v27)* (1 + (v29+v29_3 )/ 100) + ((336 + 2.3 * v1 + 0.5 * (v2+v2_1*v2_2/100*(1+0.2*v2_3)) + 5 * v8) * (1 + 0.15 + 0.005 * v16 + 0.15 * v27 + 0.1 * v33 + 0.15 * v28) * (1 + (v29+v29_1+v29_2+v29_3 )/ 100) *(1+ (1*v34 +1*v30_1)))) * v30 ;
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1//스톰크리
    res3_1 = res3 * (2.5 +  (v32+v32_1+v32_2)/ 100)
    document.getElementById("res3_1").value = Math.floor(res3_1);

    var res4; //보너스대미지 총합
    res4 = v29+v29_1+v29_2+v29_3;
    document.getElementById("res4").value = res4;

    var res5; //보너스 크리 총합
    res5 = v32+v32_1+v32_2+v32_3;
    document.getElementById("res5").value = res5;



}

//리셋
function reset() {
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v7").value = "";
    document.getElementById("v8").value = "";
    document.getElementById("v12").value = "";
    document.getElementById("v14").value = "";
    document.getElementById("v15").value = "";
    document.getElementById("v16").value = "";
    document.getElementById("v29").value = "";
    document.getElementById("v31").value = "";
    document.getElementById("v32").value = "";
    document.getElementById("res1_1").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2_1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res3_1").value = "";
    document.getElementById("res3").value = "";
    $("input:checkbox").prop("checked", false);


}

