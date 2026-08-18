import React, { useState, useMemo, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function SimuladorEuclides({ catColor = "#e3b341" }) {
  const { C } = useContext(ThemeCtx);
  const [aInput, setAInput] = useState(252);
  const [bInput, setBInput] = useState(105);

  const a = Math.abs(parseInt(aInput, 10) || 0);
  const b = Math.abs(parseInt(bInput, 10) || 0);

  const data = useMemo(() => {
    if (a === 0 && b === 0) return { pasos: [], mcd: 0, x: 0, y: 0, bezoutPasos: [] };
    if (a === 0) return { pasos: [{ r0: 0, r1: b, q: 0, r: 0 }], mcd: b, x: 0, y: 1, bezoutPasos: [] };
    if (b === 0) return { pasos: [{ r0: a, r1: 0, q: 0, r: 0 }], mcd: a, x: 1, y: 0, bezoutPasos: [] };

    let r0 = Math.max(a, b);
    let r1 = Math.min(a, b);
    const invertido = a < b;

    const pasos = [];
    while (r1 > 0) {
      const q = Math.floor(r0 / r1);
      const r = r0 % r1;
      pasos.push({ r0, r1, q, r });
      r0 = r1;
      r1 = r;
    }
    const mcd = r0;

    // Algoritmo extendido de Euclides para Bézout
    let s0 = 1, s1 = 0;
    let t0 = 0, t1 = 1;
    let tempA = a, tempB = b;

    while (tempB > 0) {
      const q = Math.floor(tempA / tempB);
      const r = tempA % tempB;
      const s2 = s0 - q * s1;
      const t2 = t0 - q * t1;

      tempA = tempB;
      tempB = r;
      s0 = s1;
      s1 = s2;
      t0 = t1;
      t1 = t2;
    }

    const x = s0;
    const y = t0;
    const mcm = (a * b) / mcd;

    return { pasos, mcd, mcm, x, y };
  }, [a, b]);

  return (
    <div style={{ width: "100%", padding: 12, borderRadius: 12, background: C.surface, border: `1px solid ${C.border}` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <h4 style={{ margin: 0, color: catColor, fontSize: "var(--fs-md)", fontWeight: 700 }}>
          ⚡ Algoritmo de Euclides & Bézout
        </h4>
        <span style={{ fontSize: "var(--fs-xs)", color: C.muted }}>Paso a Paso</span>
      </div>

      {/* Controles de Entrada */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
        <div>
          <label style={{ display: "block", fontSize: "var(--fs-xs)", color: C.muted, marginBottom: 4 }}>
            Entero \(a\):
          </label>
          <input
            type="number"
            min="1"
            max="99999"
            value={aInput}
            onChange={(e) => setAInput(e.target.value)}
            style={{
              width: "100%",
              padding: "6px 10px",
              borderRadius: 8,
              border: `1px solid ${C.border}`,
              background: C.surface2,
              color: C.text,
              fontSize: "var(--fs-sm)",
              fontWeight: 600,
            }}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "var(--fs-xs)", color: C.muted, marginBottom: 4 }}>
            Entero \(b\):
          </label>
          <input
            type="number"
            min="1"
            max="99999"
            value={bInput}
            onChange={(e) => setBInput(e.target.value)}
            style={{
              width: "100%",
              padding: "6px 10px",
              borderRadius: 8,
              border: `1px solid ${C.border}`,
              background: C.surface2,
              color: C.text,
              fontSize: "var(--fs-sm)",
              fontWeight: 600,
            }}
          />
        </div>
      </div>

      {/* Resultados Sintéticos */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        gap: 8,
        marginBottom: 14,
        background: C.surface2,
        padding: 10,
        borderRadius: 8,
        border: `1px solid ${C.border}`
      }}>
        <div>
          <div style={{ fontSize: "var(--fs-xs)", color: C.muted }}>Máximo Común Divisor:</div>
          <div style={{ fontSize: "var(--fs-md)", fontWeight: 700, color: C.green }}>
            <InlineFormula latex={`\\operatorname{mcd}(${a}, ${b}) = ${data.mcd}`} />
          </div>
        </div>
        <div>
          <div style={{ fontSize: "var(--fs-xs)", color: C.muted }}>Mínimo Común Múltiplo:</div>
          <div style={{ fontSize: "var(--fs-md)", fontWeight: 700, color: C.accent }}>
            <InlineFormula latex={`\\operatorname{mcm}(${a}, ${b}) = ${data.mcm}`} />
          </div>
        </div>
      </div>

      {/* Tabla de Divisiones Sucesivas */}
      <div style={{ overflowX: "auto", marginBottom: 12 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--fs-xs)" }}>
          <thead>
            <tr style={{ background: `${catColor}22`, borderBottom: `1px solid ${catColor}` }}>
              <th style={{ padding: "6px 8px", textAlign: "center", color: C.text }}>Paso</th>
              <th style={{ padding: "6px 8px", textAlign: "left", color: C.text }}>Dividendo</th>
              <th style={{ padding: "6px 8px", textAlign: "left", color: C.text }}>Divisor</th>
              <th style={{ padding: "6px 8px", textAlign: "left", color: C.text }}>Cociente (\(q\))</th>
              <th style={{ padding: "6px 8px", textAlign: "left", color: C.text }}>Residuo (\(r\))</th>
              <th style={{ padding: "6px 8px", textAlign: "left", color: C.text }}>Ecuación de División</th>
            </tr>
          </thead>
          <tbody>
            {data.pasos.map((p, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, background: p.r === 0 ? `${C.green}15` : "transparent" }}>
                <td style={{ padding: "6px 8px", textAlign: "center", fontWeight: 600, color: catColor }}>{i + 1}</td>
                <td style={{ padding: "6px 8px", color: C.text }}>{p.r0}</td>
                <td style={{ padding: "6px 8px", color: C.text }}>{p.r1}</td>
                <td style={{ padding: "6px 8px", color: C.accent }}>{p.q}</td>
                <td style={{ padding: "6px 8px", fontWeight: 700, color: p.r === 0 ? C.green : C.orange }}>{p.r}</td>
                <td style={{ padding: "6px 8px", color: C.muted, fontFamily: "monospace" }}>
                  {p.r0} = {p.r1} × {p.q} + {p.r}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Identidad de Bézout */}
      <div style={{
        background: `${C.accent}12`,
        border: `1px solid ${C.accent}44`,
        borderRadius: 8,
        padding: "8px 12px",
        fontSize: "var(--fs-xs)"
      }}>
        <div style={{ fontWeight: 700, color: C.accent, marginBottom: 4 }}>
          📜 Identidad de Bézout: <InlineFormula latex="a \cdot x + b \cdot y = \operatorname{mcd}(a, b)" />
        </div>
        <div style={{ color: C.text, fontSize: "var(--fs-sm)" }}>
          <InlineFormula latex={`${a} \\cdot (${data.x}) + ${b} \\cdot (${data.y}) = ${a * data.x + b * data.y}`} />
        </div>
        <div style={{ color: C.muted, marginTop: 4 }}>
          Coeficientes enteros: <strong style={{ color: C.text }}>\(x = {data.x}\)</strong>, <strong style={{ color: C.text }}>\(y = {data.y}\)</strong>
        </div>
      </div>
    </div>
  );
}
