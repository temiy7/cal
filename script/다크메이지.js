
function cal() {

    //변수
    //기본스텟
    var v1 = Number(document.getElementById("v1").value); // 마법공격력
    var v2 = Number(document.getElementById("v2").value); // 최댐인챈트
    //마법최댐
    var v3 = Number(document.getElementById("v3").value); // 라볼트최댐

    var v7 = Number(document.getElementById("v7").value); // 파이어볼최댐
    var v8 = Number(document.getElementById("v8").value); // 아습최댐

    //마스터리
    var v12 = Number(document.getElementById("v12").value); // 볼트마스터리
    var v14 = Number(document.getElementById("v14").value); // 라이트닝마스터리
    var v15 = Number(document.getElementById("v15").value); // 파이어마스터리
    var v16 = Number(document.getElementById("v16").value); // 아이스마스터리


    //아이템 타이틀
    var v26v = document.getElementsByName("v26"); // 헤보나로브
    var v26 = document.getElementById("v26")
    for (var i = 0; i < v26v.length; i++) {
        if (v26v[i].checked)
            v26 = 0
        else
            v26 = 1;
        break;
    }
    var v27v = document.getElementsByName("v27"); // 로즈마리장깁
    var v27 = document.getElementById("v27")
    for (var i = 0; i < v27v.length; i++) {
        if (v27v[i].checked)
            v27 = 0
        else
            v27 = 1;
        break;

    }

    var v28v = document.getElementsByName("v28"); //블리안세트
    var v28 = document.getElementById("v28")
    for (var i = 0; i < v28v.length; i++) {
        if (v28v[i].checked)
            v28 = 0;
        else
            v28 = 1;
        break;
    }


    var v29 = Number(document.getElementById("v29").value); //추댐
    var v30 = $("#v30 option:selected").attr('value'); //아르카나 추댐
    var v30_1 = $("#v30 option:selected").attr('value1'); // 속성 중마 추댐
    var v30_2 = $("#v30 option:selected").attr('value2'); // 원드영향력




    var v31 = Number(document.getElementById("v31").value); //라이트닝원드영향력

    var v32 = Number(document.getElementById("v32").value); //추가크리대미지

    var v33v = document.getElementsByName("v33"); //속성마스터 타이틀
        var v33 = document.getElementById("v33") //
    for (var i = 0; i < v33v.length; i++) {
        if (v33v[i].checked)
            v33 = 0;
        else
            v33 = 1;
        break;
    }


    //계산식

    var res1; //런지
    res1 = ((6000+v1*100)*(1+0.15+0.005*v15+0.15*v28)*v30 +((2760 + 21 * v1 + 0.5 * v2 + 15 * v7) * (1 + 0.15 + 0.005 * v15 +0.1*v33+0.15*v28))*v30_1) * (1 + v29 / 100);
    document.getElementById("res1").value = Math.floor(res1);

    var res1_1; // 런지 크리
    res1_1 = res1*(2.5+v32/100)
    document.getElementById("res1_1").value = Math.floor(res1_1);

    var res2; //체인
    res2 = ((800+v1*11)*(1+0.15+0.005*v14+0.15*v28)*v30 +((180 + 0.6 * v1 + 0.44 * v2 + 2.5 * v3 + (7 + 0.75 * v31)*5*v30_2) *1.28 * (1 + 1.5 + 0.3 + 0.01 * v12 + 0.005 * v14+0.1*v33+0.15*v26+0.15*v28 ))) * (1 + v29 / 100);
    document.getElementById("res2").value = Math.floor(res2);

    var res2_1; //체인크리
    res2_1 = res2*(2.5+v32/100)
    document.getElementById("res2_1").value = Math.floor(res2_1);


    var res3; //스톰
    res3 = ((1000+v1*17)*(1+0.15+0.005*v16+0.15*v28)*v30 +((336 + 2.3 * v1 + 0.1 * v2 + 5 * v8) * (1 + 0.15 + 0.005 * v16 + 0.15 * v27 +0.1*v33++0.15*v28) *v30_1 )) * (1 + v29 / 100);
    document.getElementById("res3").value = Math.floor(res3);

    var res3_1//스톰크리
    res3_1 = res3*(2.5+v32/100)
    document.getElementById("res3_1").value = Math.floor(res3_1);




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


}

