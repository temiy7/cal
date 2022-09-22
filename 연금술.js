function cal() {

    //변수
    //기본댐
    var v1 = $("#v1 option:selected").attr('value'); // 플레이머 랭크 기본대미지 
    var v2 = Number(document.getElementById("v2").value); // 생명력 2500까지
    var v3 = Number(document.getElementById("v3").value); // 불연댐
    var v4 = $("#v4 option:selected").attr('value'); // 차지수
    var v5 = Number(document.getElementById("v5").value); // 대미지인챈트
    var v6 = Number(document.getElementById("v6").value); // 최대대미지
    var v7 = Number(document.getElementById("v7").value); // 전장비율

    //크리
    var v8 = Number(document.getElementById("v8").value); // 추가크리

    //추가댐
    var v9 = $("#v1 option:selected").attr('value2'); // 플레이머 랭크 추가뎀
    var v10 = $("#v10 option:selected").attr('value'); // 연금술 마스터리 보너스
    var v11 = $("#v11 option:selected").attr('value'); // 불 연금술 마스터리 보너스
    var v20 = $("#v12 option:selected").attr('value2'); // 실린더 추가보정

    
    //마지막에 곱연산
    var v12 = $("#v12 option:selected").attr('value'); // 실린더 보정

    //콤보카드
    var v13 = Number(document.getElementById("v13").value); //플머콤카

    //아이템 타이틀
    var v14v = document.getElementsByName("v14"); // 물공포
    var v14 = document.getElementById("v14")
    for (var i = 0; i < v14v.length; i++) {
        if (v14v[i].checked)
            v14 = 0
        else
            v14 = 1;
        break;
    }
    var v15v = document.getElementsByName("v15"); // 크래시다 세트
    var v15 = document.getElementById("v15")
    for (var i = 0; i < v15v.length; i++) {
        if (v15v[i].checked)
            v15 = 0
        else
            v15 = 1;
        break;

    }

    



    
    //세공
    var v17 =  Number(document.getElementById("v17").value); //플머 최댐 세공
    var v18 =  Number(document.getElementById("v18").value); //불연금 마스터리 효율 세공
    
    var v19 = $("#v19 option:selected").attr('value'); // 불 연금마 타이틀
    var v19_1 = $("#v19 option:selected").attr('value2'); // 연금마 타이틀

    var v20 = $("#v20 option:selected").attr('value'); // 가드실린더 마스터


    var v21 =  Number(document.getElementById("v21").value); //추가 대미지 비율



    //계산식

    var resv2; //체력 비례 대미지 
    if(v2>=3500){
        resv2=3500}
    else{
        resv2=v2}
    document.getElementById("resv2").value = Math.floor(resv2);



    var res1; //플레이머 대미지 
    res1 = ((1*v1+1*v17+0.08*resv2+v3+1*v19_1+1*v20)*v4+v5+v6*(1 + 0.2 * v14 *(v7 / 100)) + v9*v4*((1*v11/100+1*v19+0.005*v18+(1*v10/100))/0.15))*(1+0.15*v15+v13/100)*v12*(1+v21/100)
    document.getElementById("res1").value = Math.floor(res1);

    
    var res2; //플레이머 크리 대미지 
    res2 = (((1*v1+1*v17+0.08*resv2+v3+1*v19_1+1*v20)*v4+v5+v6*(1 + 0.2 * v14 *(v7 / 100)))*(2.5 + (v8/100)) + v9*v4*(1*v11/100+1*v19+0.005*v18+(v10/100)/0.15))*(1+0.15*v15+v13/100)*v12*(1+v21/100)
    

    document.getElementById("res2").value = Math.floor(res2);

    


}

//리셋
function reset() {
    document.getElementById("v2").value = "";
    document.getElementById("v3").value = "";
    document.getElementById("v5").value = "";
    document.getElementById("v6").value = "";
    document.getElementById("v7").value = "";
    document.getElementById("v8").value = "";
    document.getElementById("v17").value = "";
    document.getElementById("v18").value = "";    
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";



}