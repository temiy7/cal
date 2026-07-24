'use strict';

// ── DOM helpers ───────────────────────────────────────────────────────────────
const el     = id      => document.getElementById(id);
const selOpt = id      => { const s = el(id); return s ? s.options[s.selectedIndex] : null; };
const cb     = name    => { const e = document.querySelector(`input[name="${name}"]`); return e?.checked ? +e.value : 0; };
const numEl  = id      => +el(id)?.value || 0;
const attrOf = (id, a) => Number(selOpt(id)?.getAttribute(a));

// ── Input reading ─────────────────────────────────────────────────────────────
function readInputs() {
    return {
        magicAtk:           numEl('magicAtk'),
        fireMaxEnchLv:      numEl('fireMaxEnchLv'),
        lightMaxEnchLv:     numEl('lightMaxEnchLv'),
        fireMastEnchLv:     numEl('fireMastEnchLv'),
        lightMastEnchLv:    numEl('lightMastEnchLv'),
        boltMastEnchLv:     numEl('boltMastEnchLv'),
        boltComboEnchLv:    numEl('boltComboEnchLv'),
        hebona:             cb('hebona'),
        extraCritRaw:       numEl('extraCritRaw'),
        spiritCrit:         cb('spiritCrit'),
        ivona:              cb('ivona'),
        fireComboCardPct:   numEl('fireComboCardPct'),
        lightComboCardPct:  numEl('lightComboCardPct'),
        bibacePct:          numEl('bibacePct'),
        arkanaLinkMagicAtk: numEl('arkanaLinkMagicAtk'),
        spiritGrowthBonus:  numEl('spiritGrowth'),
        spiritControlBonus: numEl('spiritControl'),
        boltComboTitle:     cb('boltComboTitle'),
        arkanaWeaponPct:    numEl('arkanaWeaponLv'),
        secondTitlePct:     numEl('secondTitle'),
        darkErgPct:         numEl('darkErgPct'),
        magicAtkPotion:     cb('magicAtkPotion'),
        additionalDmgRaw:   numEl('additionalDmgRaw'),
        weakPointDmg:       cb('weakPointDmg'),
        berserkerDmg:       cb('berserkerDmg'),
        battleMembership:   cb('battleMembership'),
        weaponGradeCoeff:   numEl('weaponGrade'),
        chargeMult:         attrOf('charge', 'value')  || 6.7,
        lightChargeBonus:   attrOf('charge', 'value1') || 0.28,
        singleFiveCharge:   cb('singleFiveCharge'),
        lightWandInflLv:    numEl('lightWandInflLv'),
        castSpeedPct:       numEl('castSpeedPct'),
        elemWeaponBonus:    attrOf('weapon', 'value')  || 0,
        elemCritBonus:      attrOf('weapon', 'value2') || 0,
        weaponBaseExtraDmg: attrOf('weapon', 'value1') || 0,
        weaponAddExtraDmg:  attrOf('weapon', 'value3') || 0,
        ergBonus:           attrOf('erg',    'value')  || 0,
        fireBoltRank:       numEl('fireBoltRank')       || 0.3,
        lightBoltRank:      numEl('lightBoltRank')      || 0.4,
        boltMastRank:       numEl('boltMastRank'),
        boltComboMastRank:  numEl('boltComboMastRank'),
        magicWepMastRank:   numEl('magicWepMastRank'),
        lightMastRank:      numEl('lightMastRank'),
        fireMastRank:       numEl('fireMastRank'),
        blian:              cb('blian'),
        critSetEffect:      cb('critSetEffect'),
    };
}

// ── Derived values (no DOM) ───────────────────────────────────────────────────
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

// ── Pure damage formulas ──────────────────────────────────────────────────────
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

// ── DPS & shot count ──────────────────────────────────────────────────────────
function calcDps(comboDmg, d) {
    const twiceCast = d.singleFiveCharge === 0 && d.chargeMult > 3;
    const capped    = d.castSpeedPct >= (twiceCast ? 91.2 : 83);
    if (capped) return { dps: comboDmg / 0.5182, shotsIn20: 39 };
    const t = (twiceCast ? 3 : 1.5) * (1 - d.castSpeedPct / 100) + 0.252;
    return { dps: comboDmg / t, shotsIn20: 20 / t };
}

// ── Efficiency ratios ─────────────────────────────────────────────────────────
function efficiencyRatios(d, baseDmg) {
    const comboPlus1   = boltCombo({ ...d, boltComboEnchLv: d.boltComboEnchLv + 1 });
    const boltMPlus1   = boltCombo({ ...d, boltMastEnchLv:  d.boltMastEnchLv  + 1 });
    const fireMPlus1   = boltCombo({ ...d, fireMastEnchLv:  d.fireMastEnchLv  + 1 });
    const fireMaxPlus1 = boltCombo({ ...d, fireMaxEnchLv:   d.fireMaxEnchLv   + 1 });

    const newEffMagicAtk =
        ((d.magicAtk + 4 - d.noPotionMagicAtk) * (1 + 0.2 * d.magicAtkPotion) + d.noPotionMagicAtk)
        * (1 + (d.bibacePct / 100) * (1 + 0.2 * d.magicAtkPotion));
    const magicAtkPlus4 =
        (fireBolt({ ...d, effectiveMagicAtk: newEffMagicAtk }) + lightBolt(d))
        * 0.85
        * (1 + 0.01 * d.boltComboMastRank + 0.01 * d.boltComboEnchLv)
        * (1 + 0.05 * d.boltComboTitle)
        * (1 + 0.01 * (d.elemWeaponBonus + d.ergBonus));

    const comboGain = comboPlus1 / baseDmg - 1;
    const ratio = alt => {
        const r = comboGain / (alt / baseDmg - 1);
        return isFinite(r) ? Math.round(r * 10) / 10 : '?';
    };

    return {
        boltMast: ratio(boltMPlus1),
        fireMast: ratio(fireMPlus1),
        magicAtk: ratio(magicAtkPlus4),
        fireMax:  ratio(fireMaxPlus1),
    };
}

// ── Output helpers ────────────────────────────────────────────────────────────
const setText = (id, v) => { const e = el(id); if (e) e.textContent = v; };
const setVal  = (id, v) => { const e = el(id); if (e) e.value = v; };

// ── Public: calculate ─────────────────────────────────────────────────────────
function cal() {
    const d     = derive(readInputs());
    const fire  = fireBolt(d);
    const lite  = lightBolt(d);
    const combo = boltCombo(d);
    const { dps, shotsIn20 } = calcDps(combo, d);
    const eff   = efficiencyRatios(d, combo);
    const crit  = 2.5 + d.extraCritPct / 100;

    setText('arkanaWeaponTotalDisplay',  d.arkanaWeaponTotalPct);
    setText('additionalDmgPctDisplay',   d.additionalDmgPct);
    setText('weaponGradeBonusPctDisplay',d.weaponGradeBonusPct);
    setText('extraCritPctDisplay',       d.extraCritPct);
    setText('noPotionMagicAtkDisplay',   d.noPotionMagicAtk);
    setText('effectiveMagicAtkDisplay',  Math.floor(d.effectiveMagicAtk));

    setVal('fireBoltDmg',      Math.floor(fire));
    setVal('fireBoltCritDmg',  Math.floor(fire  * crit));
    setVal('lightBoltDmg',     Math.floor(lite));
    setVal('lightBoltCritDmg', Math.floor(lite  * crit));
    setVal('boltComboDmg',     Math.floor(combo));
    setVal('boltComboCritDmg', Math.floor(combo * crit));
    setVal('dps',              Math.floor(dps));
    setVal('shotsIn20',        Math.floor(shotsIn20));

    setText('boltMastRatio', eff.boltMast);
    setText('fireMastRatio', eff.fireMast);
    setText('magicAtkRatio', eff.magicAtk);
    setText('fireMaxRatio',  eff.fireMax);
}

// ── Public: reset ─────────────────────────────────────────────────────────────
function reset() {
    ['magicAtk','fireMaxEnchLv','lightMaxEnchLv','fireMastEnchLv','lightMastEnchLv',
     'boltMastEnchLv','boltComboEnchLv','extraCritRaw','fireComboCardPct','lightComboCardPct',
     'bibacePct','darkErgPct','additionalDmgRaw','lightWandInflLv','castSpeedPct']
        .forEach(id => { const e = el(id); if (e) e.value = ''; });

    ['arkanaWeaponTotalDisplay','additionalDmgPctDisplay','weaponGradeBonusPctDisplay',
     'extraCritPctDisplay','noPotionMagicAtkDisplay','effectiveMagicAtkDisplay',
     'boltMastRatio','fireMastRatio','magicAtkRatio','fireMaxRatio']
        .forEach(id => setText(id, ''));

    ['fireBoltDmg','fireBoltCritDmg','lightBoltDmg','lightBoltCritDmg',
     'boltComboDmg','boltComboCritDmg','dps','shotsIn20']
        .forEach(id => setVal(id, ''));

    document.querySelectorAll('input[type="checkbox"]').forEach(e => { e.checked = false; });
}

