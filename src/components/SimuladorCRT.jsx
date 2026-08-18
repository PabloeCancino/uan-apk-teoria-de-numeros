import React, { useState, useMemo, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function SimuladorCRT({ catColor = "#58a6ff" }) {
  const { C } = useContext(ThemeCtx);
  const [congruencias, setCongruencias] = useState([
    { a: 2, m: 3 },
    { a: 3, m: 5 },
    { a: 2, m: 7 },
  ]);

  const updateCongruencia = (idx, field, value) => {
    const next = [...congruencias];
    next[idx] = { ...next[idx], [field]: parseInt(value, 10) || 0 };
    setCongruencias(next);
  };

  const crt = useMemo(() => {
    const mcd = (x, y) => (!y ? x : mcd(y, x % y));
    const invMod = (val, mod) => {
      const b0 = mod;
      let x0 = 0, x1 = 1;
      if (mod === 1) return 1;
      let aTemp = ((val % mod) + mod) % mod;
      let mTemp = mod;
      while (aTemp > 1) {
        if (mTemp === 0) return 0;
        const q = Math.floor(aTemp / mTemp);
        let t = mTemp;
        mTemp = aTemp % mTemp;
        aTemp = t;
        t = x0;
        x0 = x1 - q * x0;
        x1 = t;
      }
      if (x1 < 0) x1 += b0;
      return x1;
    };

    const n = congruencias.length;
    const ms = congruencias.map(c => Math.max(c.m, 2));
    const as = congruencias.map((c, i) => ((c.a % ms[i]) + ms[i]) % ms[i]);

    // Verificar coprimalidad 2 a 2
    let sonCoprimos = true;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (mcd(ms[i], ms[j]) !== 1) {
          sonCoprimos = false;
        }
      }
    }

    if (!sonCoprimos) {
      return { valido: false, error: "Los módulos deben ser primos relativos (coprimos dos a dos)." };
    }

    // M = prod(m_i)
    const M = ms.reduce((acc, v) => acc * v, 1);

    // M_i = M / m_i y y_i = M_i^(-1) mod m_i
    const pasos = ms.map((mi, i) => {
      const Mi = Math.floor(M / mi);
      const yi = invMod(Mi, mi);
      const ai = as[i];
      const termino = ai * Mi * yi;
      return { i: i + 1, ai, mi, Mi, yi, termino };
    });

    const sumaTotal = pasos.reduce((acc, p) => acc + p.termino, 0);
    const xSol = ((sumaTotal % M) + M) % M;

    return {
      valido: true,
      M,
      pasos,
      sumaTotal,
      xSol,
    };
  }, [congruencias]);

  return (
    <div style={{ width: "100%", padding: 12, borderRadius: 12, background: C.surface, border: `1px solid ${C.border}` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <h4 style={{ margin: 0, color: catColor, fontSize: "var(--fs-md)", fontWeight: 700 }}>
          🇨🇳 Teorema Chino del Residuo (CRT)
        </h4>
        <span style={{ fontSize: "var(--fs-xs)", color: C.muted }}>Resolutor Modular</span>
      </div>

      {/* Entradas de Congruencias */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8, marginBottom: 12 }}>
        {congruencias.map((c, idx) => (
          <div key={idx} style={{ background: C.surface2, padding: 8, borderRadius: 8, border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: "var(--fs-xs)", color: catColor, fontWeight: 700, marginBottom: 4 }}>
              Congruencia {idx + 1}:
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ fontSize: "var(--fs-xs)", color: C.text }}>\(x \equiv\)</span>
              <input
                type="number"
                value={c.a}
                onChange={(e) => updateCongruencia(idx, "a", e.target.value)}
                style={{ width: 42, padding: "3px 4px", borderRadius: 4, background: C.surface, border: `1px solid ${C.border}`, color: C.text, fontSize: "var(--fs-xs)", textAlign: "center" }}
              />
              <span style={{ fontSize: "var(--fs-xs)", color: C.text }}>\(\pmod\)</span>
              <input
                type="number"
                min="2"
                value={c.m}
                onChange={(e) => updateCongruencia(idx, "m", e.target.value)}
                style={{ width: 42, padding: "3px 4px", borderRadius: 4, background: C.surface, border: `1px solid ${C.border}`, color: C.accent, fontWeight: 700, fontSize: "var(--fs-xs)", textAlign: "center" }}
              />
            </div>
          </div>
        ))}
      </div>

      {crt.valido ? (
        <>
          {/* Tabla de Cálculo de M_i e Inversos y_i */}
          <div style={{ overflowX: "auto", marginBottom: 10 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--fs-xs)" }}>
              <thead>
                <tr style={{ background: `${catColor}22`, borderBottom: `1px solid ${catColor}` }}>
                  <th style={{ padding: "4px 6px", textAlign: "center", color: C.text }}>\(i\)</th>
                  <th style={{ padding: "4px 6px", textAlign: "center", color: C.text }}>\(a_i\)</th>
                  <th style={{ padding: "4px 6px", textAlign: "center", color: C.text }}>\(m_i\)</th>
                  <th style={{ padding: "4px 6px", textAlign: "center", color: C.text }}>\(M_i = M/m_i\)</th>
                  <th style={{ padding: "4px 6px", textAlign: "center", color: C.text }}>\(y_i \equiv M_i^{-1}\)</th>
                  <th style={{ padding: "4px 6px", textAlign: "right", color: C.text }}>\(a_i M_i y_i\)</th>
                </tr>
              </thead>
              <tbody>
                {crt.pasos.map((p) => (
                  <tr key={p.i} style={{ borderBottom: `1px solid ${C.border}` }}>
                    <td style={{ padding: "4px 6px", textAlign: "center", fontWeight: 700, color: catColor }}>{p.i}</td>
                    <td style={{ padding: "4px 6px", textAlign: "center", color: C.text }}>{p.ai}</td>
                    <td style={{ padding: "4px 6px", textAlign: "center", fontWeight: 600, color: C.accent }}>{p.mi}</td>
                    <td style={{ padding: "4px 6px", textAlign: "center", color: C.text }}>{p.Mi}</td>
                    <td style={{ padding: "4px 6px", textAlign: "center", color: C.green, fontWeight: 700 }}>{p.yi}</td>
                    <td style={{ padding: "4px 6px", textAlign: "right", fontFamily: "monospace", color: C.text }}>{p.termino}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Resultado Final */}
          <div style={{
            background: `${C.green}15`,
            border: `1px solid ${C.green}44`,
            borderRadius: 8,
            padding: "8px 12px",
            fontSize: "var(--fs-xs)",
          }}>
            <div style={{ fontWeight: 700, color: C.green, marginBottom: 2 }}>
              ✨ Solución Única Módulo \(M = {crt.M}\):
            </div>
            <div style={{ fontSize: "var(--fs-md)", fontWeight: 700, color: C.text, margin: "4px 0" }}>
              <InlineFormula latex={`x \\equiv ${crt.xSol} \\pmod{${crt.M}}`} />
            </div>
            <div style={{ color: C.muted }}>
              Solución general entera: <strong style={{ color: C.text }}>\(x = {crt.xSol} + {crt.M}k, \quad k \in \mathbb{Z}\)</strong>
            </div>
          </div>
        </>
      ) : (
        <div style={{
          background: `${C.red}15`,
          border: `1px solid ${C.red}44`,
          borderRadius: 8,
          padding: 10,
          color: C.red,
          fontSize: "var(--fs-xs)",
          textAlign: "center"
        }}>
          ❌ {crt.error}
        </div>
      )}
    </div>
  );
}
