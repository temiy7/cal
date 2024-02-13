function cal() {

    //변수
    //기본댐
    var v1 = Number(document.getElementById("v1").value); // 방어
    var v2 = Number(document.getElementById("v2").value); // 보호
    var v3 = Number(document.getElementById("v3").value); // 받는대미지
    var v4 = Number(document.getElementById("v4").value); // 받은대미지
    var v5 = $("#v5 option:selected").attr('value');  // 디팬스랭크별 방어
    var v6 = $("#v5 option:selected").attr('value2');  // 디팬스랭크별 방어
    var v7 = $("#v5 option:selected").attr('value3'); // 디팬스랭크별 보호
    var v8 = $("#v5 option:selected").attr('value4'); // 디팬스랭크별 보호
    var v9 = $("#v9 option:selected").attr('value'); // 방패종류
    var v10 = Number(document.getElementById("v10").value); // 마공
    var v11 = Number(document.getElementById("v11").value); // 마실세공
    var v12 = $("#v12 option:selected").attr('value'); // 방패종류

    var v13_1= $("#v13_1 option:selected").attr('value'); // 피어싱 보호
    var v13_2= Number(document.getElementById("v13_2").value) // 보깍
    var v14_1= $("#v13_1 option:selected").attr('value2'); // 피어싱 보호
    var v14_2= Number(document.getElementById("v14_2").value) // 보깍

    


    //계산식

    var v13;  // 보깍총합
    v13= 1*v13_1 + v13_2;
    document.getElementById("v13").value = Number(v13);

    var v14;  // 방깍총합
    v14= 1*v14_1 + v14_2;
    document.getElementById("v14").value = Number(v14);



    var res1; //보호 차감 비율
    res1_1 = (100 / Math.sqrt(2)) * Math.log10((v2 + 10*Math.sqrt(2)) / (10*Math.sqrt(2)));
    if (res1_1 >= 90) {
        res1 = 90
    } else {
        res1 = res1_1
    }
    document.getElementById("res1").value = Math.round(res1*10)/10;

    var res1m; //몬스터 보호 차감 비율
    res1_1m = (100 / Math.sqrt(2)) * Math.log10(((v2-v13) + 10*Math.sqrt(2)) / (10*Math.sqrt(2)));
    if (res1_1m >= 100) {
        res1m = 100
    } 
    else if(v2<=v13){
        res1m = 0;
    }

    else {
        res1m = res1_1m
    }
    document.getElementById("res1m").value = Math.round(res1m*10)/10;
    

    var res2; //방어 차감 비율
    res2 = v1
    document.getElementById("res2").value = Math.round(res2*10)/10;

    var res2m; //몬스터 방어 차감 비율
    if (v1 <= v14){
        res2m = 0
    }
    else {
    res2m = v1 - v14
    }
    document.getElementById("res2m").value = Math.round(res2m*10)/10;


    var res3; //받는 대미지
    res3_1 = v9 * (v3 * (1 - res1 / 100) - v1)
    if (res3_1 <= 0) {
        res3 = 0
    } else {
        res3 = res3_1
    }
    document.getElementById("res3").value = Math.round(res3*10)/10; 

    var res3m; //몬스터 받는 대미지
    res3_1m =  v3 *(1 - res1m / 100) - v1 + v14
    if (res3_1m <= 0) {
        res3m = 0} 
    else if(v1 <= v14) {  
        res3m = v3*(1 - res1m / 100)}
    
    else {res3m = res3_1m}

    document.getElementById("res3m").value = Math.round(res3m*10)/10;




    var res4; //대미지 차감비
    res4 = (1 - (res3) / (v3)) * 100
    if (isNaN(res4)) { // 값이 없어서 NaN값이 나올 경우

        res4 = 0;

    }
    document.getElementById("res4").value = Math.round(res4*10)/10;

    var res4m; //대미지 차감비
    res4m = (1 - (res3m) / (v3)) * 100
    if (isNaN(res4m)) { // 값이 없어서 NaN값이 나올 경우

        res4m = 0;

    }
    document.getElementById("res4m").value = Math.round(res4m*10)/10;

    var res5; //역산
    res5 = (v4 + v1) / (1 - 0.01 * res1)
    document.getElementById("res5").value = Math.round(res5*10)/10;


    var res5m; //피어싱 대미지 증가비
    if (res3m <= 0||res4m <= 0) {
            
        res5m = 0; 
    }
    else if (v1 <= v14){
        res5m= (v3*(1 - res1_1m / 100) -(v3 * (1 - res1_1 / 100) - v1))/(v3 * (1 - res1_1 / 100) - v1) * 100 ; 
    }
    else {
        res5m =((v3*(1 - res1m / 100) - v1 + v14) - (v3 * (1 - res1_1 / 100) - v1))/(v3 * (1 - res1_1 / 100) - v1) * 100 ; 
    }   
    document.getElementById("res5m").value = Math.round(res5m*10)/10;
    



    var res6; //디펜스적용(인-엘)
    res6_1 = (res3 * (1 - (29 * Math.asinh(v7 / 24) + 1) / 100) - v5) 
    if (res6_1 <= 0) {
        res6 = 0
    } else {
        res6 = res6_1
    }
    document.getElementById("res6").value = Math.round(res6*10)/10;

    var res7; //디펜스적용(자)
    res7_1 = (res3 * (1 - (29 * Math.asinh((1 * v8) / 24) + 1) / 100) - v6)
    if (res7_1 <= 0) {
        res7 = 0
    } else {
        res7 = res7_1
    }
    document.getElementById("res7").value = Math.round(res7*10)/10;


    var res8; //마실효율
    res8_1 = v10 * 0.01;
    res8_2 = 1.8 + 0.2 * v11;
    if (res8_1 >= 10 || res8_2 >= 10){
        res8 = 10
    }
        else if (res8_1 <= res8_2) {
        res8 = res8_2 + 1 * v12
    }   
        else {
        res8 = res8_1 + 1 * v12
    }
    document.getElementById("res8").value = res8;

    var res9; //마실 대미지 감소 비율
    res9 = (1-(1 / res8))*100
    document.getElementById("res9").value = Math.round(res9*10)/10;

    var res10; //
    res10 = v3
    document.getElementById("res10").value = Math.round(res10*10)/10;

    var res11; //
    res11 = v3
    document.getElementById("res11").value = Math.round(res10*10)/10;


}


//리셋
function reset() {
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v4").value = "";
    document.getElementById("v10").value = "";
    document.getElementById("v11").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res4").value = "";
    document.getElementById("res5").value = "";
    document.getElementById("res6").value = "";
    document.getElementById("res7").value = "";
    document.getElementById("res8").value = "";
    document.getElementById("res9").value = "";
    document.getElementById("res10").value = "";
    document.getElementById("res1m").value = "";
    document.getElementById("res2m").value = "";
    document.getElementById("res3m").value = "";
    document.getElementById("res4m").value = "";
    document.getElementById("res5m").value = "";
    document.getElementById("v13").value = "";
    document.getElementById("v14").value = "";
    


}