function cal() {

    //변수
    //기본스텟
    var v1 = Number(document.getElementById("v1").value); // 최대공격력
    // var v2 = Number(document.getElementById("v2").value); // 최댐인챈트
    // var v2_1 = Number(document.getElementById("v2_1").value); // 맥뎀
    var v2_2 = Number(document.getElementById("v2_2").value); // 전장비
    var v2_3 = $('input[name="v2_3"]').is(':checked') ? parseFloat($('input[name="v2_3"]').val()) : 0; //물공포

    
    //마법최댐
    var v3 = Number(document.getElementById("v3").value); // 블릿스톰 세공
    var v4 = $('input[name="v4"]').is(':checked') ? parseFloat($('input[name="v4"]').val()) : 1; //프렌지상태

    var v7 = Number(document.getElementById("v7").value); // 크로스 버스터 세공
    var v8 = Number(document.getElementById("v8").value); // 슈팅러시 세공
    var v9 = Number(document.getElementById("v9").value); // 파어웨이 세공

    //타이틀
    var v12 = $('input[name="v12"]').is(':checked') ? parseFloat($('input[name="v12"]').val()) : 0; //슈러마
    var v13 = $('input[name="v13"]').is(':checked') ? parseFloat($('input[name="v13"]').val()) : 0; //블릿마
    var v14 = $('input[name="v14"]').is(':checked') ? parseFloat($('input[name="v14"]').val()) : 0; //크버마 
    var v15 = $('input[name="v15"]').is(':checked') ? parseFloat($('input[name="v15"]').val()) : 0; //파어웨이마 



    var v29_0 = Number(document.getElementById("v29_0").value); //추댐
    var v29_1 =$('input[name="v29_1"]').is(':checked') ? parseFloat($('input[name="v29_1"]').val()) : 0; //약분
    var v29_2 = $('input[name="v29_2"]').is(':checked') ? parseFloat($('input[name="v29_2"]').val()) : 0; //광폭
    var v29_3 =$('input[name="v29_3"]').is(':checked') ? parseFloat($('input[name="v29_3"]').val()) : 0; //배맴

    
    var v30 = $("#v30 option:selected").attr('value'); //아르카나 추댐
    var v30_1 = $("#v30 option:selected").attr('value1'); // 블릿 스톰 추댐
    var v30_2 = $("#v30 option:selected").attr('value2'); // 슈팅러시 추댐


    // var v31 = Number(document.getElementById("v31").value); //라이트닝원드영향력

    var v32_0 = Number(document.getElementById("v32_0").value); //추가크리대미지
    var v32_1 = $('input[name="v32_1"]').is(':checked') ? parseFloat($('input[name="v32_1"]').val()) : 0; //정령연마
    var v32_2 = $('input[name="v32_2"]').is(':checked') ? parseFloat($('input[name="v32_2"]').val()) : 0; //이보나
    var v32_3 = $('input[name="v32_3"]').is(':checked') ? parseFloat($('input[name="v32_3"]').val()) : 0; //크리증가세트



    var v34 = $("#v34 option:selected").attr('value'); //에르그

    // var v35_0 =  $("#v35_0 option:selected").attr('value'); //링크보너스
    var v35_1 =  $("#v35_1 option:selected").attr('value'); //정령육성 레벨
    var v35_2 =  $("#v35_2 option:selected").attr('value'); //정령제어 레벨
    

    var v29 //추댐합
    v29 = v29_0+v29_1+v29_2+v29_3 ; 
    document.getElementById("v29").value = Math.floor(v29);

    var v32 // 추가크리합
    v32 = v32_0+v32_1+v32_2
    document.getElementById("v32").value = Math.floor(v32);

    var v35; //마공포 미적용합
    v35 =Number(v35_1)+Number(v35_2)
    document.getElementById("v35").value = v35;

    


    //계산식

    var res0; //계산물공
    res0 = ((v1-v35)*(1+0.2*v2_3)+v35)*(1+(v2_2/100)*(1+0.2*v2_3));
    document.getElementById("res0").value = Math.floor(res0);

    var res1; //래피드파이어
    res1 = (res0*3* (1 + (v29_0+v29_3 )/ 100))+(res0);
    document.getElementById("res1").value = Math.floor(res1);

    var res1_1; // 래피드파이어 크리
    res1_1 = res1 * (2.5 +  v32/ 100)
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res2; //헤비아틸러리
    res2 = (res0*6* (1 + (v29_0+v29_3 )/ 100))+(res0*(16.25+0.05*v7+0.2*v14)* (1 + (v29_0+v29_3 )/ 100));
    document.getElementById("res2").value = Math.floor(res2);

    var res2_1; //헤비아틸러리 크리
    res2_1 = res2 * (2.5 +  v32/ 100)
    document.getElementById("res2_1").value = Math.floor(res2_1);

    var res3; //데바스테이션 캐논
    res3 = (res0*12* (1 + (v29_0+v29_3 )/ 100))+(res0*(9.6+0.01*v8+0.12*v12+1*v34+1*v30_2)* (1 + (v29_0+v29_3 )/ 100));
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1//데바스테이션 캐논 크리
    res3_1 = res3 * (2.5 +   v32/ 100)
    document.getElementById("res3_1").value = Math.floor(res3_1);

    var res4; //페이탈 스코프
    res4 = (res0*14* (1 + (v29_0+v29_3 )/ 100))+(res0*(12+0.01*v9+0.15*v15)* (1 + (v29_0+v29_3 )/ 100));
    document.getElementById("res4").value = Math.floor(res4);

    var res4_1//페이탈 스코프 크리
    res4_1 = res4 * (2.5 +   v32/ 100)
    document.getElementById("res4_1").value = Math.floor(res4_1);


   


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
    document.getElementById("res4_1").value = "";
    document.getElementById("res4").value = "";
    $("input:checkbox").prop("checked", false);


}

