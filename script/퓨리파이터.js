function cal() {

    // 종족
    var v00 = $('input[name="v00"]:checked').attr('value');   // 인간
    var v00_1 = $('input[name="v00"]:checked').attr('value1'); // 엘프
    var v00_2 = $('input[name="v00"]:checked').attr('value2'); // 자이언트

    // 기본 스텟
    var v0 = Number(document.getElementById("v0").value); // 맥댐

    // 연속기 마스터리
    var v1   = $("#v1 option:selected").attr('value');  // 인간
    var v1_1 = $("#v1 option:selected").attr('value2'); // 엘프
    var v1_2 = $("#v1 option:selected").attr('value3'); // 자이언트
    var v1_3 = $("#v1 option:selected").attr('value4'); // 중갑 페널티

    // 스킬 랭크 계수
    var v2 = Number($("#v2 option:selected").attr('value')); // 대시펀치
    var v3 = Number($("#v3 option:selected").attr('value')); // 스크류어퍼
    var v4 = Number($("#v4 option:selected").attr('value')); // 드롭킥
    var v5 = Number($("#v5 option:selected").attr('value')); // 차징피스트
    var v6 = Number($("#v6 option:selected").attr('value')); // 섬머솔트
    var v7 = Number($("#v7 option:selected").attr('value')); // 파운딩

    // 도핑
    var v8 = Number(document.getElementById("v8").value); // 전장비율%
    var v17v = document.getElementsByName("v17");
    var v17 = 0;
    for (var i = 0; i < v17v.length; i++) {
        if (v17v[i].checked) { v17 = 0; } else { v17 = 1; }
        break;
    }

    // 추가 옵션
    var v9  = Number(document.getElementById("v9").value);  // 추가 크리%
    var v10 = Number(document.getElementById("v10").value); // 보너스 대미지%

    // 콤보카드 비율
    var v11 = Number(document.getElementById("v11").value); // 대시펀치
    var v12 = Number(document.getElementById("v12").value); // 스크류어퍼
    var v13 = Number(document.getElementById("v13").value); // 드롭킥
    var v14 = Number(document.getElementById("v14").value); // 차징피스트
    var v15 = Number(document.getElementById("v15").value); // 섬머솔트
    var v16 = Number(document.getElementById("v16").value); // 파운딩

    // 무기 / 에르그
    var v18   = Number($("#v18 option:selected").attr('value'));  // 무기 연속기 마스터리 보정
    var v18_1 = Number($("#v18 option:selected").attr('value1')); // 베가본드 드롭킥 추가
    var v18_2 = Number($("#v18 option:selected").attr('value2')); // 페러너클 파운딩 추가
    var v28   = Number($("#v28 option:selected").attr('value'));  // S에르그

    // 타이틀
    var v19 = Number($("#v19 option:selected").attr('value'));  // 대펀 마스터
    var v20 = Number($("#v19 option:selected").attr('value2')); // 어퍼 마스터
    var v21 = Number($("#v19 option:selected").attr('value3')); // 드롭 마스터

    // 중갑옷
    var v29v = document.getElementsByName("v29");
    var v29 = 0;
    for (var i = 0; i < v29v.length; i++) {
        if (v29v[i].checked) { v29 = 0; } else { v29 = 1; }
        break;
    }

    // 세공 (레벨 입력)
    var v22 = Number(document.getElementById("v22").value); // 연속기 대미지
    var v23 = Number(document.getElementById("v23").value); // 대시펀치 대미지
    var v24 = Number(document.getElementById("v24").value); // 스크류어퍼 대미지
    var v25 = Number(document.getElementById("v25").value); // 드롭킥 대미지
    var v26 = Number(document.getElementById("v26").value); // 섬머솔트 대미지
    var v27 = Number(document.getElementById("v27").value); // 파운딩 대미지
    var v31 = Number(document.getElementById("v31").value); // 차징피스트 대미지
    var v32 = Number(document.getElementById("v32").value); // 게일피어스 세공 (차피 3%/레벨)
    var v33 = Number(document.getElementById("v33").value); // 얼티밋스트라이크 세공 (스크류어퍼 계수)

    // 퓨리 파이터 전용
    var v40 = Number($("#v40 option:selected").attr('value')); // 버서커 버프 보너스 대미지 비율

    // ============ 계산 ============

    // 기본 연속기 대미지
    var res0 = (v0 * (1 + 0.2 * v17) * (1 + (v8 / 100) * (1 + 0.2 * v17)))
             * (1 + (Number(v1) * Number(v00) + Number(v1_1) * Number(v00_1) + Number(v1_2) * Number(v00_2)) + v18 + v28 + 0.01 * v22)
             * (1 + v10 / 100)
             * (1 - Number(v1_3) * v29 * Number(v00) - Number(v1_3) * v29 * Number(v00_1));

    // 버서커 버프 배율 (퓨리 오브 더 버서커: 1단계 +2%, 2단계 +5%)
    var berserker = 1 + v40;

    // ---- 기본 연속기 스킬 ----
    var res1 = res0 * (v2 + 0.03 * v23) * (1 + 0.3 * v19) * (1 + v11 / 100);
    var res2 = res0 * (v3 + 0.06 * v24) * (1 + 0.2 * v20) * (1 + v12 / 100);
    var res3 = res0 * (v4 + 0.09 * v25) * (1 + v18_1) * (1 + 0.1 * v21) * (1 + v13 / 100);
    var res4 = res0 * (v5 + 0.03 * v31) * (1 + v14 / 100);
    var res5 = res0 * (v6 + 0.06 * v26) * (1 + v15 / 100);
    var res6 = res0 * (v7 + 0.09 * v27 + v18_2) * (1 + v16 / 100);

    // ---- 익시드 스킬 ----
    // 대시펀치 100% + 기본 500%
    var res_cb  = (res1 + res0 * 5.0) * berserker;
    // 섬머솔트 100% + 기본 300%
    var res_id  = (res5 + res0 * 3.0) * berserker;
    // 파운딩 100% + 기본 500%
    var res_fs  = (res6 + res0 * 5.0) * berserker;

    // ---- 포스 스킬 ----
    // 게일 피어스: 차징피스트 100% + 기본 1300% (세공: 차피 3%/레벨)
    var res_gp  = (res4 + res0 * 13.0) * berserker * (1 + 0.03 * v32);
    // 포스 플레어: 드롭킥 70% + 기본 650%
    var res_ff  = (res3 * 0.7 + res0 * 6.5) * berserker;
    // 얼티밋 스트라이크 1단계: 스크류어퍼 150% + 기본 1000%
    var res_us1 = (res2 * 1.5 + res0 * 10.0) * berserker * (1 + 0.03 * v33);
    // 얼티밋 스트라이크 피니시: 스크류어퍼 150% + 기본 1500%
    var res_us2 = (res2 * 1.5 + res0 * 15.0) * berserker * (1 + 0.03 * v33);

    var crit = 2.5 + (v9 / 100);

    // ---- 결과 출력 ----
    document.getElementById("res1").value   = Math.floor(res1);
    document.getElementById("res1c").value  = Math.floor(res1 * crit);
    document.getElementById("res2").value   = Math.floor(res2);
    document.getElementById("res2c").value  = Math.floor(res2 * crit);
    document.getElementById("res3").value   = Math.floor(res3);
    document.getElementById("res3c").value  = Math.floor(res3 * crit);
    document.getElementById("res4").value   = Math.floor(res4);
    document.getElementById("res4c").value  = Math.floor(res4 * crit);
    document.getElementById("res5").value   = Math.floor(res5);
    document.getElementById("res5c").value  = Math.floor(res5 * crit);
    document.getElementById("res6").value   = Math.floor(res6);
    document.getElementById("res6c").value  = Math.floor(res6 * crit);

    document.getElementById("res_cb").value  = Math.floor(res_cb);
    document.getElementById("res_cbc").value = Math.floor(res_cb * crit);
    document.getElementById("res_id").value  = Math.floor(res_id);
    document.getElementById("res_idc").value = Math.floor(res_id * crit);
    document.getElementById("res_fs").value  = Math.floor(res_fs);
    document.getElementById("res_fsc").value = Math.floor(res_fs * crit);

    document.getElementById("res_gp").value   = Math.floor(res_gp);
    document.getElementById("res_gpc").value  = Math.floor(res_gp * crit);
    document.getElementById("res_ff").value   = Math.floor(res_ff);
    document.getElementById("res_ffc").value  = Math.floor(res_ff * crit);
    document.getElementById("res_us1").value  = Math.floor(res_us1);
    document.getElementById("res_us1c").value = Math.floor(res_us1 * crit);
    document.getElementById("res_us2").value  = Math.floor(res_us2);
    document.getElementById("res_us2c").value = Math.floor(res_us2 * crit);
}

function reset() {
    ["v0","v8","v9","v10",
     "v11","v12","v13","v14","v15","v16",
     "v22","v23","v24","v25","v26","v27","v31","v32","v33"].forEach(function(id) {
        document.getElementById(id).value = "";
    });
    ["res1","res1c","res2","res2c","res3","res3c","res4","res4c","res5","res5c","res6","res6c",
     "res_cb","res_cbc","res_id","res_idc","res_fs","res_fsc",
     "res_gp","res_gpc","res_ff","res_ffc","res_us1","res_us1c","res_us2","res_us2c"].forEach(function(id) {
        document.getElementById(id).value = "";
    });
}
