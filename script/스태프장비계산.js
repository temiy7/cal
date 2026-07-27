'use strict';

// ── DOM helpers ───────────────────────────────────────────────────────────────
const el     = id => document.getElementById(id);
const numEl  = id => +el(id)?.value || 0;
const selNum = id => { const s = el(id); return s ? Number(s.options[s.selectedIndex]?.value || 0) : 0; };

// ── Input reading ─────────────────────────────────────────────────────────────
function readSide(sfx) {
    const n = k => numEl(k + sfx);
    const s = k => selNum(k + sfx);
    return {
        magicAtk:           n('magicAtk'),
        thunderMaxEnch:     n('thunderMaxEnch'),
        fireBallMaxEnch:    n('fireBallMaxEnch'),
        iceMaxEnch:         n('iceMaxEnch'),
        lightMastEnch:      n('lightMastEnch'),
        fireMastEnch:       n('fireMastEnch'),
        iceMastEnch:        n('iceMastEnch'),
        rosemary:           s('rosemary'),
        thunderComboCard:   n('thunderComboCard'),
        iceComboCard:       n('iceComboCard'),
        battleBuff:         n('battleBuff'),
        fireBallComboCard:  n('fireBallComboCard'),
        hailComboCard:      n('hailComboCard'),
        lightRodComboCard:  n('lightRodComboCard'),
        hailMaxEnch:        n('hailMaxEnch'),
        lightRodEcho:       n('lightRodEcho'),
        lightRodFullCharge: n('lightRodFullCharge'),
        seaDominator:       s('seaDominator'),
        meteorEnch:         n('meteorEnch'),
        physAtkPotion:      s('physAtkPotion'),
        additionalDmg:      n('additionalDmg'),
        weaponEffect:       s('weaponEffect'),
        fireMastTitle:      s('fireMastTitle'),
        lightMastTitle:     s('lightMastTitle'),
        iceMastTitle:       s('iceMastTitle'),
        blian:              s('blian'),
        erg:                s('erg'),
    };
}

// ── Derived values ────────────────────────────────────────────────────────────
function effectiveMagicAtk(p) {
    const potionMult = 1 + 0.2 * p.physAtkPotion;
    return p.magicAtk * potionMult * (1 + (p.battleBuff / 100) * potionMult);
}

// ── Pure damage formulas ──────────────────────────────────────────────────────
// 인퀴지터는 헤일/라로/메테오에 별도 비율 적용 (헤일=30%, 라로·메테오=15%)
function inqBonus(weaponEffect, isHail) {
    return weaponEffect === 35 ? (isHail ? 30 : 15) : 0;
}

function thunder(p, chargeMult) {
    return effectiveMagicAtk(p) * (2 + 0.005*p.thunderMaxEnch)
        * chargeMult
        * (1 + 0.15 + 0.005*p.lightMastEnch + p.thunderComboCard/100 + 0.1*p.lightMastTitle + 0.15*p.blian)
        * (1 + p.additionalDmg/100)
        * (1 + 0.01*p.weaponEffect + 0.01*p.erg);
}

function fireBall(p, charge) {
    const chargeFactor = charge === 3 ? (3 / 6.5) : 1;
    return effectiveMagicAtk(p) * (10.1 + 0.03*p.fireBallMaxEnch)
        * chargeFactor
        * (1 + 0.15 + 0.005*p.fireMastEnch + p.fireBallComboCard/100 + 0.1*p.fireMastTitle + 0.15*p.blian)
        * (1 + p.additionalDmg/100)
        * (1 + 0.01*p.weaponEffect + 0.01*p.erg);
}

function iceSpear(p, chargeMult) {
    return effectiveMagicAtk(p) * (1.3 + 0.03*p.iceMaxEnch)
        * chargeMult
        * (1 + 0.15 + 0.005*p.iceMastEnch + 0.15*p.rosemary + p.iceComboCard/100 + 0.1*p.iceMastTitle + 0.15*p.blian)
        * (1 + p.additionalDmg/100)
        * (1 + 0.01*p.weaponEffect + 0.01*p.erg);
}

function hailstorm(p) {
    return effectiveMagicAtk(p) * (1.6 + 0.06*p.hailMaxEnch)
        * 6.25
        * (1 + 0.15 + 0.005*p.iceMastEnch + 0.15*p.rosemary + p.hailComboCard/100 + 0.1*p.iceMastTitle + 0.15*p.blian)
        * (1 + p.additionalDmg/100)
        * (1 + 0.01*inqBonus(p.weaponEffect, true));
}

function lightningRod(p) {
    return effectiveMagicAtk(p) * (6.5 + 0.02*p.lightRodEcho)
        * (3.3 + p.lightRodFullCharge/100)
        * (1 + 0.15 + 0.005*p.lightMastEnch + p.lightRodComboCard/100 + 0.1*p.lightMastTitle + 0.15*p.blian)
        * (1 + 0.1*p.seaDominator)
        * (1 + p.additionalDmg/100)
        * (1 + 0.01*inqBonus(p.weaponEffect, false));
}

function meteor(p) {
    return (7800 + effectiveMagicAtk(p) * (85 + 0.1*p.meteorEnch))
        * (1 + 0.15 + 0.005*p.fireMastEnch + 0.1*p.fireMastTitle + 0.15*p.blian)
        * (1 + p.additionalDmg/100)
        * (1 + 0.01*inqBonus(p.weaponEffect, false));
}

// ── Output helpers ────────────────────────────────────────────────────────────
const setVal = (id, v) => { const e = el(id); if (e) e.value = v; };

// ── Public: calculate ─────────────────────────────────────────────────────────
function cal() {
    const a = readSide('_a');
    const b = readSide('_b');

    const dmg = (fn, ...args) => [fn(a, ...args), fn(b, ...args)];

    const [t3a,  t3b]  = dmg(thunder,      3.5);
    const [t5a,  t5b]  = dmg(thunder,      6);
    const [fb3a, fb3b] = dmg(fireBall,     3);
    const [fb5a, fb5b] = dmg(fireBall,     5);
    const [is3a, is3b] = dmg(iceSpear,     3);
    const [is5a, is5b] = dmg(iceSpear,     6.5);
    const [ha,   hb]   = dmg(hailstorm);
    const [lra,  lrb]  = dmg(lightningRod);
    const [ma,   mb]   = dmg(meteor);

    setVal('thunder3Diff',  Math.floor(t3b  - t3a));
    setVal('thunder5Diff',  Math.floor(t5b  - t5a));
    setVal('fireBall3Diff', Math.floor(fb3b - fb3a));
    setVal('fireBall5Diff', Math.floor(fb5b - fb5a));
    setVal('ice3Diff',      Math.floor(is3b - is3a));
    setVal('ice5Diff',      Math.floor(is5b - is5a));
    setVal('hailDiff',      Math.floor(hb   - ha));
    setVal('lrodDiff',      Math.floor(lrb  - lra));
    setVal('meteorDiff',    Math.floor(mb   - ma));

    setVal('thunderRatio',  Math.floor(100 * (t3b  - t3a)  / t3a));
    setVal('iceRatio',      Math.floor(100 * (is3b - is3a) / is3a));
    setVal('hailRatio',     Math.floor(100 * (hb   - ha)   / ha));
    setVal('lrodRatio',     Math.floor(100 * (lrb  - lra)  / lra));
    setVal('fireBallRatio', Math.floor(100 * (fb3b - fb3a) / fb3a));
    setVal('meteorRatio',   Math.floor(100 * (mb   - ma)   / ma));
}

// ── Public: reset ─────────────────────────────────────────────────────────────
function reset() {
    ['magicAtk','thunderMaxEnch','fireBallMaxEnch','iceMaxEnch',
     'lightMastEnch','fireMastEnch','iceMastEnch','thunderComboCard','iceComboCard',
     'battleBuff','fireBallComboCard','hailComboCard','lightRodComboCard',
     'hailMaxEnch','lightRodEcho','lightRodFullCharge','meteorEnch','additionalDmg']
        .flatMap(k => [k + '_a', k + '_b'])
        .forEach(id => { const e = el(id); if (e) e.value = ''; });

    ['thunder3Diff','thunder5Diff','fireBall3Diff','fireBall5Diff','ice3Diff','ice5Diff',
     'hailDiff','lrodDiff','meteorDiff','thunderRatio','iceRatio','hailRatio','lrodRatio',
     'fireBallRatio','meteorRatio']
        .forEach(id => setVal(id, ''));
}
