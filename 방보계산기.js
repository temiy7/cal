function cal() {

    //변수
    //기본댐
    var v1 = Number(document.getElementById("v1").value); // 방어
    var v2 = Number(document.getElementById("v2").value); // 보호
    var v3 = Number(document.getElementById("v3").value); // 받는대미지





    //계산식

    var res1; //보호 차감 비율
    res1_1 = 29*Math.asinh(v2/24)+1
    if(res1_1>=100){res1=100}
    else {res1=res1_1}
    document.getElementById("res1").value = Math.floor(res1);

    var res2; //보호 차감 비율
    res2 = 1*v1
    document.getElementById("res2").value = Math.floor(res2);

    var res3; //받는 대미지
    res3_1 = v3*(1-res1/100)-res2
    if(res3_1<=0){res3=0}
    else {res3=res3_1}
    document.getElementById("res3").value = Math.floor(res3);


    var res4; //대미지 차감비
    res4 = (1-(res3)/(v3))*100
    document.getElementById("res4").value = Math.floor(res4);






}

//리셋
function reset() {
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("res4").value = "";


}