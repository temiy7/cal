function cal() {
    // 기본 스텟
    var v1 = Number(document.getElementById("v1").value); // 마법공격력
    var v2 = $("#v2 option:selected").attr('value'); // 공격카드수
    var v2_1 = $("#v2_1 option:selected").attr('value'); // 공격카드 종류

    // 무기와 에르그
    var v3 = $("#v3 option:selected").attr('value'); // 에르그
    var v4 = $("#v4 option:selected").attr('value'); // 무기

    // 보너스 대미지
    var v5 = Number(document.getElementById("v5").value); // 추댐
    var v6 = $('input[name="v6"]').is(':checked') ? parseFloat($('input[name="v6"]').val()) : 0; // 약분
    var v7 = $('input[name="v7"]').is(':checked') ? parseFloat($('input[name="v7"]').val()) : 0; // 광폭
    var v8 = $('input[name="v8"]').is(':checked') ? parseFloat($('input[name="v8"]').val()) : 0; // 배맴

    // 추가 크리 대미지
    var v9 = Number(document.getElementById("v9").value); // 추가크리대미지
    var v10 = $('input[name="v10"]').is(':checked') ? parseFloat($('input[name="v10"]').val()) : 0; // 정령연마
    var v11 = $('input[name="v11"]').is(':checked') ? parseFloat($('input[name="v11"]').val()) : 0; // 이보나
    var v12 = $('input[name="v12"]').is(':checked') ? parseFloat($('input[name="v12"]').val()) : 0; // 크리증가세트

    // 새로운 스킬
    var v13 = Number(document.getElementById("v13").value); // 사이드 슬래시 %
    var v14 = Number(document.getElementById("v14").value); // 스타 데토네이션 %
    var v15 = Number(document.getElementById("v15").value); // 스텔라 브레이크 %
    var v16 = Number(document.getElementById("v16").value); // 스핀 스퍼트 %
    var v17 = Number(document.getElementById("v17").value); // 리볼브 쇼크 %
    var v19 = Number(document.getElementById("v19").value); // 페이탈 크러시 %

    //세공
    var v21 = Number(document.getElementById("v21").value);
    v21 = v21 * 0.02; // 사이드슬래시대미지 
    var v22 = Number(document.getElementById("v22").value);
    v22 = v22 * 0.1; // 스타데토네이션대미지
    var v23 = Number(document.getElementById("v23").value); 
    v23 = v23 * 0.25; // 스텔라브레이크대미지
    var v24 = Number(document.getElementById("v24").value); 
    v24 = v24 * 0.02; // 리볼브쇼크대미지
    var v25 = Number(document.getElementById("v25").value);
    v25 = v25 * 0.3; // 페이탈크러시대미지


    // 보너스 대미지 총합
    var bonusDamage =(v5 + v6 + v7 + v8)
    document.getElementById("bonusDamage").value= bonusDamage.toFixed(2);


    // 무기와 에르그 대미지 합
    var weaponErg = (Number(v3) + Number(v4))*100
    document.getElementById("weaponErg").value = weaponErg.toFixed(2);

    // 계산식
    function calculateDamage(skillPercent,sg) {
        return v1 * (skillPercent+sg) * (1+weaponErg/100) * (1+bonusDamage/100);
    }

    var res1 = calculateDamage(v13,v21); // 사이드 슬래시
    document.getElementById("res1").value = Math.floor(res1);

    var res2 = calculateDamage(v14,v22); // 스타 데토네이션
    document.getElementById("res2").value = Math.floor(res2);

    var res3 = calculateDamage(v15,v23); // 스텔라 브레이크
    document.getElementById("res3").value = Math.floor(res3);

    var res4 = calculateDamage(v16,0); // 스핀 스퍼트
    document.getElementById("res4").value = Math.floor(res4);

    var res5 = calculateDamage(v17,v24); // 리볼브 쇼크
    document.getElementById("res5").value = Math.floor(res5);

    var res7 =v1*(v19+v25)*(1+weaponErg/100)*(1+bonusDamage/100+0.05*Number(v2_1))*Number(v2) // 페이탈 크러시
    document.getElementById("res7").value = Math.floor(res7);

    // 크리티컬 대미지 계산
    var criticalMultiplier = (v9 + v10 + v11 + v12) ;
    document.getElementById("criticalMultiplier").value= criticalMultiplier.toFixed(2);    
    
    document.getElementById("res1_crit").value = Math.floor(res1 * (2.5+criticalMultiplier/100));
    document.getElementById("res2_crit").value = Math.floor(res2 * (2.5+criticalMultiplier/100));
    document.getElementById("res3_crit").value = Math.floor(res3 * (2.5+criticalMultiplier/100));
    document.getElementById("res4_crit").value = Math.floor(res4 * (2.5+criticalMultiplier/100));
    document.getElementById("res5_crit").value = Math.floor(res5 * (2.5+criticalMultiplier/100));
    document.getElementById("res7_crit").value = Math.floor(res7 * (2.5+criticalMultiplier/100));
}

// 리셋 함수
function reset() {
    // 입력 필드 리셋
    var inputFields = ["v1", "v2", "v5", "v9"];
    inputFields.forEach(field => document.getElementById(field).value = "");

    // 결과 필드 리셋
    var resultFields = ["res1", "res2", "res3", "res4", "res5", "res6", "res7", 
                        "res1_crit", "res2_crit", "res3_crit", "res4_crit", "res5_crit", "res7_crit"];
    resultFields.forEach(field => document.getElementById(field).value = "");

    // 체크박스 리셋
    $("input:checkbox").prop("checked", false);

    // 선택 옵션 리셋
    $("#v3").val($("#v3 option:first").val());
    $("#v4").val($("#v4 option:first").val());
}