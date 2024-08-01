function cal() {

    //변수
    //기본댐
    var v1 = $("#v1 option:selected").attr('value'); // 랭크별 도르카 추가 획득량 
    var v2 = $("#v2 option:selected").attr('value'); // 체인에르그
    var v3 = Number(document.getElementById("v3").value); // 도르카세공레벨
    

    var v4 = $('input[name="v4"]').is(':checked') ? parseFloat($('input[name="v4"]').val()) : 0; // 다크메이지링크효과

    var v5 = $('input[name="v5"]').is(':checked') ? parseFloat($('input[name="v5"]').val()) : 0; // 마스터타이틀
    var v6 = $('input[name="v6"]').is(':checked') ? parseFloat($('input[name="v6"]').val()) : 1; // 2차타이틀
    var v7 = $('input[name="v7"]').is(':checked') ? parseFloat($('input[name="v7"]').val()) : 0; //에아렌 세트효과




    //계산식


    var res1; //도르카 계산
    res1 = v1*(1+1*v2+0.02*v3+v4+v5*v6)+(1*v1+0.25)*v7+0.25;
    document.getElementById("res1").value = Math.round(res1*100)/100;
    // var res2; //랜차 대미지 배율
    // res2 = (100 * (1 + 0.2 * v7) * (1 + (v3 / 100) * (1 + 0.2 * v7))) * (1 * v1 + 0.04 * v10) * (2 + 0.025 * v12) * ((1000 + 400 + (400 + v14d) * v8) / 1400) * (1 + (0.2 + 0.03 * v13) * v8) * (1 + v6 / 100) * v9 * (1 + v4 / 100)
    // document.getElementById("res2").value = Math.floor(res2);

}

//리셋
function reset() {
    document.getElementById("v3").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("res2").value = "";
    $("input:checkbox").prop("checked", false);

}