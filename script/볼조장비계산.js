'use strict';

// ── DOM helpers ───────────────────────────────────────────────────────────────
const el     = id        => document.getElementById(id);
const selOpt = id        => { const s = el(id); return s ? s.options[s.selectedIndex] : null; };
const numEl  = id        => +el(id)?.value || 0;
const selNum = id        => Number(selOpt(id)?.value  || 0);
const attrOf = (id, a)   => Number(selOpt(id)?.getAttribute(a) || 0);
const ck     = name      => { const e = document.querySelector(`input[name="${name}"]`); return e?.checked ? +e.value : 0; };

// ── Per-side input reading ────────────────────────────────────────────────────
function readSide(sfx) {
    const n  = id       => numEl(id + sfx);
    const s  = id       => selNum(id + sfx);
    const ao = (id, a)  => attrOf(id + sfx, a);
    const cb = name     => { const e = document.querySelector(`input[name="${name}${sfx}"]`); return e?.checked ? +e.value : 0; };

    return {
        magicAtk:           n('magicAtk'),
        fireMaxEnchLv:      n('fireMaxEnchLv'),
        lightMaxEnchLv:     n('lightMaxEnchLv'),
        fireMastEnchLv:     n('fireMastEnchLv'),
        lightMastEnchLv:    n('lightMastEnchLv'),
        boltMastEnchLv:     n('boltMastEnchLv'),
        boltComboEnchLv:    n('boltComboEnchLv'),
        lightWandInflLv:    n('lightWandInflLv'),
        hebona:             cb('hebona'),
        blian:              cb('blian'),
        critSetEffect:      cb('critSetEffect'),
        elemWeaponBonus:    ao('weapon', 'value'),
        weaponBaseExtraDmg: ao('weapon', 'value1'),
        elemCritBonus:      ao('weapon', 'value2'),
        weaponAddExtraDmg:  ao('weapon', 'value3'),
        weaponGradeCoeff:   s('weaponGrade'),
        ergBonus:           s('erg'),
        arkanaWeaponPct:    s('arkanaWeaponLv'),
        darkErgPct:         n('darkErgPct'),
        boltComboTitle:     cb('boltComboTitle'),
        secondTitlePct:     s('secondTitle'),
    };
}

// ── Shared input reading (same conditions for both sides) ─────────────────────
function readShared() {
    return {
        fireBoltRank:       selNum('fireBoltRank')     || 0.3,
        lightBoltRank:      selNum('lightBoltRank')    || 0.4,
        boltMastRank:       selNum('boltMastRank'),
        boltComboMastRank:  selNum('boltComboMastRank'),
        magicWepMastRank:   selNum('magicWepMastRank'),
        lightMastRank:      selNum('lightMastRank'),
        fireMastRank:       selNum('fireMastRank'),
        chargeMult:         attrOf('charge', 'value')  || 6.7,
        lightChargeBonus:   attrOf('charge', 'value1') || 0.28,
        singleFiveCharge:   ck('singleFiveCharge'),
        fireComboCardPct:   numEl('fireComboCardPct'),
        lightComboCardPct:  numEl('lightComboCardPct'),
        extraCritRaw:       numEl('extraCritRaw'),
        spiritCrit:         ck('spiritCrit'),
        ivona:              ck('ivona'),
        additionalDmgRaw:   numEl('additionalDmgRaw'),
        weakPointDmg:       ck('weakPointDmg'),
        berserkerDmg:       ck('berserkerDmg'),
        battleMembership:   ck('battleMembership'),
        bibacePct:          numEl('bibacePct'),
        magicAtkPotion:     ck('magicAtkPotion'),
        arkanaLinkMagicAtk: selNum('arkanaLinkMagicAtk'),
        spiritGrowthBonus:  selNum('spiritGrowth'),
        spiritControlBonus: selNum('spiritControl'),
    };
}

// ── Derived values (same as 볼트조합계산_v2.js) ──────────────────────────────
function derive(p) {
    const noPotionMagicAtk     = p.arkanaLinkMagicAtk + p.spiritGrowthBonus + p.spiritControlBonus;
    const hasCritBonus         = (p.critSetEffect > 0 || p.elemCritBonus > 0) ? 1 : 0;
    const arkanaWeaponTotalPct = p.arkanaWeaponPct + p.darkErgPct;
    const additionalDmgPct     = p.additionalDmgRaw + p.weakPointDmg + p.berserkerDmg + p.battleMembership;
    const extraCritPct         = p.extraCritRaw + p.spiritCrit + p.ivona + 7 * hasCritBonus;
    const weaponGradeBonusPct  = p.weaponBaseExtraDmg + p.weaponAddExtraDmg * p.weaponGradeCoeff;
    const effectiveMagicAtk    =
        ((p.magicAtk - noPotionMagicAtk) * (1 + 0.2 * p.magicAtkPotion) + noPotionMagicAtk)
        * (1 + (p.bibacePct / 100) * (1 + 0.2 * p.magicAtkPotion));

    return { ...p, noPotionMagicAtk, hasCritBonus, arkanaWeaponTotalPct,
                   additionalDmgPct, extraCritPct, weaponGradeBonusPct, effectiveMagicAtk };
}

// ── Pure damage formulas (identical to 볼트조합계산_v2.js) ───────────────────
function fireBolt(d) {
    return (d.effectiveMagicAtk * (d.fireBoltRank + 0.002 + 0.001 * d.fireMaxEnchLv))
        * d.chargeMult
        * (1 + 0.01 * d.magicWepMastRank + 0.01 * d.boltMastRank  + 0.01 * d.fireMastRank
             + 0.01 * d.boltMastEnchLv   + 0.005 * d.fireMastEnchLv
             + 0.15 * d.hebona           + d.fireComboCardPct / 100
             + 0.15 * d.blian            + 0.01 * d.secondTitlePct)
        * (1 + d.additionalDmgPct / 100)
        * (1 + d.weaponGradeBonusPct / 100)
        * (1 + d.arkanaWeaponTotalPct / 100);
}

function lightBolt(d) {
    return (d.effectiveMagicAtk * (d.lightBoltRank + 0.002 + 0.001 * d.lightMaxEnchLv + 0.0003 * d.lightWandInflLv))
        * (1 + d.lightChargeBonus + 0.01 * d.magicWepMastRank + 0.01 * d.boltMastRank + 0.01 * d.lightMastRank
             + 0.01 * d.boltMastEnchLv  + 0.005 * d.lightMastEnchLv
             + d.lightComboCardPct / 100 + 0.15 * d.blian + 0.01 * d.secondTitlePct)
        * (1 + d.additionalDmgPct / 100)
        * (1 + d.weaponGradeBonusPct / 100)
        * (1 + d.arkanaWeaponTotalPct / 100);
}

function boltCombo(d) {
    return (fireBolt(d) + lightBolt(d))
        * 0.85
        * (1 + 0.01 * d.boltComboMastRank + 0.01 * d.boltComboEnchLv)
        * (1 + 0.05 * d.boltComboTitle)
        * (1 + 0.01 * (d.elemWeaponBonus + d.ergBonus));
}

// ── Output helpers ────────────────────────────────────────────────────────────
const setVal = (id, v) => { const e = el(id); if (e) e.value = v; };

// ── Public: calculate ─────────────────────────────────────────────────────────
function cal() {
    const shared = readShared();
    const da = derive({ ...readSide('_a'), ...shared });
    const db = derive({ ...readSide('_b'), ...shared });

    const fireA = fireBolt(da),  fireB = fireBolt(db);
    const liteA = lightBolt(da), liteB = lightBolt(db);
    const combA = boltCombo(da), combB = boltCombo(db);
    const critA = 2.5 + da.extraCritPct / 100;
    const critB = 2.5 + db.extraCritPct / 100;

    const ratio = (b, a) => isFinite(b / a) ? Math.floor(100 * (b - a) / a) : 0;

    setVal('fireBoltDmgA',       Math.floor(fireA));
    setVal('fireBoltDmgDiff',    Math.floor(fireB  - fireA));
    setVal('fireBoltCritA',      Math.floor(fireA  * critA));
    setVal('fireBoltCritDiff',   Math.floor(fireB  * critB - fireA * critA));
    setVal('fireBoltRatio',      ratio(fireB,        fireA));
    setVal('fireBoltCritRatio',  ratio(fireB * critB, fireA * critA));

    setVal('lightBoltDmgA',      Math.floor(liteA));
    setVal('lightBoltDmgDiff',   Math.floor(liteB  - liteA));
    setVal('lightBoltCritA',     Math.floor(liteA  * critA));
    setVal('lightBoltCritDiff',  Math.floor(liteB  * critB - liteA * critA));
    setVal('lightBoltRatio',     ratio(liteB,        liteA));
    setVal('lightBoltCritRatio', ratio(liteB * critB, liteA * critA));

    setVal('boltComboDmgA',      Math.floor(combA));
    setVal('boltComboDmgDiff',   Math.floor(combB  - combA));
    setVal('boltComboCritA',     Math.floor(combA  * critA));
    setVal('boltComboCritDiff',  Math.floor(combB  * critB - combA * critA));
    setVal('boltComboRatio',     ratio(combB,        combA));
    setVal('boltComboCritRatio', ratio(combB * critB, combA * critA));
}

// ── Public: reset ─────────────────────────────────────────────────────────────
function reset() {
    ['magicAtk','fireMaxEnchLv','lightMaxEnchLv','fireMastEnchLv','lightMastEnchLv',
     'boltMastEnchLv','boltComboEnchLv','lightWandInflLv','darkErgPct']
        .flatMap(k => [k + '_a', k + '_b'])
        .forEach(id => { const e = el(id); if (e) e.value = ''; });

    ['fireComboCardPct','lightComboCardPct','extraCritRaw','additionalDmgRaw',
     'bibacePct']
        .forEach(id => { const e = el(id); if (e) e.value = ''; });

    document.querySelectorAll('input[type="checkbox"]').forEach(e => { e.checked = false; });

    ['fireBoltDmgA','fireBoltDmgDiff','fireBoltCritA','fireBoltCritDiff',
     'fireBoltRatio','fireBoltCritRatio',
     'lightBoltDmgA','lightBoltDmgDiff','lightBoltCritA','lightBoltCritDiff',
     'lightBoltRatio','lightBoltCritRatio',
     'boltComboDmgA','boltComboDmgDiff','boltComboCritA','boltComboCritDiff',
     'boltComboRatio','boltComboCritRatio']
        .forEach(id => setVal(id, ''));
}

// ── Checkbox side-effects ─────────────────────────────────────────────────────
['_a', '_b'].forEach(sfx => {
    document.querySelector(`input[name="blian${sfx}"]`)?.addEventListener('change', function () {
        if (this.checked) document.querySelector(`input[name="critSetEffect${sfx}"]`).checked = true;
    });
});
