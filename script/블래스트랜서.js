function cal() {
    // 기본 스텟
    var v1 = Number(document.getElementById("v1").value); // 최대공격력
    var v2 = Number(document.getElementById("v2").value); // 전장비율
    var v2_2 = $('input[name="v2_2"]').is(':checked') ? parseFloat($('input[name="v2_2"]').val()) : 0; // 물공포
    var v3 = Number(document.getElementById("v3").value); // 마나셀
    var v3_1 = $("#v3_1 option:selected").attr('value'); // 아르카나 링크개


    // 무기와 에르그
    var v4 = $("#v4 option:selected").attr('value'); // 무기
    var v4_1 = $("#v4_1 option:selected").attr('value'); // 마력탄
    var v4_2 = $('input[name="v4_2"]').is(':checked') ? parseFloat($('input[name="v4_2"]').val()) : 0; // 펫탑승


    // 보너스 대미지
    var v5 = Number(document.getElementById("v5").value); // 추댐
    var v5_1 = $("#v5_1 option:selected").attr('value'); // 푸개
    var v6 = $('input[name="v6"]').is(':checked') ? parseFloat($('input[name="v6"]').val()) : 0; // 약분
    var v7 = $('input[name="v7"]').is(':checked') ? parseFloat($('input[name="v7"]').val()) : 0; // 광폭
    var v8 = $('input[name="v8"]').is(':checked') ? parseFloat($('input[name="v8"]').val()) : 0; // 배맴

    // 추가 크리 대미지
    var v9 = Number(document.getElementById("v9").value); // 추가크리대미지
    var v9_1 = $("#v9_1 option:selected").attr('value'); // 붉개
    var v10 = $('input[name="v10"]').is(':checked') ? parseFloat($('input[name="v10"]').val()) : 0; // 정령연마
    var v11 = $('input[name="v11"]').is(':checked') ? parseFloat($('input[name="v11"]').val()) : 0; // 이보나
    var v12 = $('input[name="v12"]').is(':checked') ? parseFloat($('input[name="v12"]').val()) : 0; // 크리증가세트

    // 새로운 스킬
    var v13 = Number(document.getElementById("v13").value); // 크로스 버스터 %
    var v13_1 = Number(document.getElementById("v13_1").value); // 임팩트 크러쉬 %
    var v14 = Number(document.getElementById("v14").value); // 클로져 %
    var v14_1 = Number(document.getElementById("v14_1").value); // 스파이럴 볼택스 %
    var v15 = Number(document.getElementById("v15").value); // 랜스블로우
    var v15_1 = Number(document.getElementById("v15_1").value); // 차지 어설트
    var v16 = Number(document.getElementById("v16").value); // 랜스차지
    var v16_0 = $("#v16_1 option:selected").attr('value'); // 오버드라이브 찌르기
    var v16_1 = $("#v16_1 option:selected").attr('value2'); // 오버드라이브 폭발
    var v16_2 = Number(document.getElementById("v16_2").value); // 어나이얼레이션
    var v16_3 = v16_3 = v3 + v4_1; // 어나일 폭발 계수

    //세공
    var v21 = Number(document.getElementById("v21").value);
    v21 = v21 * 0.05; // 크로스버스터 대미지
    var v22 = Number(document.getElementById("v22").value);
    v22 = v22 * 0.1; // 클로져대미지
    var v23 = Number(document.getElementById("v23").value);
    v23 = v23 * 0.04; // 랜스차지 대미지
    var v24 = Number(document.getElementById("v24").value);
    v24 = v24 * 0.025; // 주 목표물 대미지
    var v25 = Number(document.getElementById("v25").value);
    v25 = v25 * 0.03; // 마상돌진 대미지
    var v26 = Number(document.getElementById("v26").value);
    v26 = v26 * 1; // 마상돌진 추가거리

    var v26d; //랜차 거리 계산
    if (v26 >= 2) {
        v26d = (1 + (v26 - 1) * 0.2) * 100
    } else {
        v26d = v26 * 100
    }

    var basedamage = (v1 * (1 + 0.2 * v2_2) * (1 + (v2 / 100) * (1 + 0.2 * v2_2)))
    document.getElementById("basedamage").value = basedamage.toFixed(1);


    var bonusDamage = (v5 + v5_1 * 1 + v6 + v7 + v8) 
    document.getElementById("bonusDamage").value = bonusDamage.toFixed(2);    // 보너스 대미지 총합

    // 계산식
    function calculateDamage(skillPercent, sg) {
        return basedamage * (Number(skillPercent) + sg) * (1 + bonusDamage / 100);
    }

    function calculateDamage2(baseskill, arkana) {
        return baseskill + basedamage * Number(arkana) *(1+Number(v3_1)) * (1 + bonusDamage / 100);
    }

    var res1 = calculateDamage(v13, v21); // 크로스버스터 대미지
    document.getElementById("res1").value = Math.floor(res1);

    var res2 = calculateDamage2(res1, v13_1); // 임팩트크러쉬 대미지
    document.getElementById("res2").value = Math.floor(res2);

    var res3 = calculateDamage(v14, v22); // 클로져 대미지
    document.getElementById("res3").value = Math.floor(res3);

    var res4 = calculateDamage2(res3, v14_1); // 스파이럴 볼택스 대미지
    document.getElementById("res4").value = Math.floor(res4);

    var res5 = calculateDamage(v15, 0); // 랜스 블로우 대미지
    document.getElementById("res5").value = Math.floor(res5);

    var res6 = calculateDamage2(res5, v15_1); // 차지 어설트 대미지
    document.getElementById("res6").value = Math.floor(res6);

    var res7 = basedamage * (1 * v16 + v23) * (2 + v24) * ((1000 + 400 + (400 + v26d) * v4_2) / 1400) * (1 + (0.2 + v25) * v4_2) * (1+v4) // 랜스차지 대미지
    document.getElementById("res7").value = Math.floor(res7);

    var res8_0 = calculateDamage(v16_0, 0); // 오버드라이브 찌르기 대미지
    document.getElementById("res8_0").value = Math.floor(res8_0);

    var res8 = calculateDamage2(res7, v16_1); // 오버드라이브 폭발 대미지
    document.getElementById("res8").value = Math.floor(res8);

    var res9 = calculateDamage(v16_2, 0); //어나이얼레이션 찌르기 대미지
    document.getElementById("res9").value = Math.floor(res9);

    // 크리티컬 대미지 계산
    var criticalMultiplier = (v9 + v9_1 * 1 + v10 + v11 + v12);
    document.getElementById("criticalMultiplier").value = criticalMultiplier.toFixed(2);
    document.getElementById("res1_crit").value = Math.floor(res1 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res2_crit").value = Math.floor(res2 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res3_crit").value = Math.floor(res3 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res4_crit").value = Math.floor(res4 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res5_crit").value = Math.floor(res5 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res6_crit").value = Math.floor(res6 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res7_crit").value = Math.floor(res7 * (2.5 + criticalMultiplier / 100));
    document.getElementById("res8_crit").value = Math.floor((res8_0+res8) * (2.5 + criticalMultiplier / 100));
    document.getElementById("res9_crit").value = Math.floor(res9 * (2.5 + criticalMultiplier / 100));
}

// 리셋 함수
function reset() {
    // 입력 필드 리셋
    var inputFields = ["v1", "v2", "v3", "v4", "v5", "v9", "v21", "v22", "v23", "v24", "v25", "v26"];
    inputFields.forEach(field => document.getElementById(field).value = "");

    // 결과 필드 리셋
    var resultFields = ["res1", "res2", "res3", "res4", "res5", "res6", "res7",
        "res1_crit", "res2_crit", "res3_crit", "res4_crit", "res5_crit", "res6_crit","res7_crit",
        "res8", "res8_crit", "res9", "res9_crit"];
    resultFields.forEach(field => document.getElementById(field).value = "");

    // 체크박스 리셋
    $("input:checkbox").prop("checked", false);

    // 선택 옵션 리셋
    $("#v3").val($("#v3 option:first").val());
    $("#v4").val($("#v4 option:first").val());
}