import React, { useState, useMemo, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function SimuladorDiofanticas({ catColor = "#58a6ff" }) {
  const { C } = useContext(ThemeCtx);
  const [aInput, setAInput] = useState(12);
  const [bInput, setBInput] = useState(15);
  const [cInput, setCInput] = useState(33);

  const a = parseInt(aInput, 10) || 0;
  const b = parseInt(bInput, 10) || 0;
  const c = parseInt(cInput, 10) || 0;

  const resultado = useMemo(() => {
    if (a === 0 && b === 0) {
      return { tieneSolucion: c === 0, mcd: 0, mensaje: "Ecuación degenerada 0 = c" };
    }

    // MCD y Bézout
    const absA = Math.abs(a);
    const absB = Math.abs(b);

    let s0 = 1, s1 = 0;
    let t0 = 0, t1 = 1;
    let tempA = absA, tempB = absB;

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

    const d = tempA; // mcd(a, b)
    const tieneSolucion = c % d === 0;

    if (!tieneSolucion) {
      return {
        tieneSolucion: false,
        mcd: d,
        mensaje: `El $\\operatorname{mcd}(${a}, ${b}) = ${d}$ no divide a $c = ${c}$. Por lo tanto, no existen soluciones enteras.`,
      };
    }

    // Coeficientes de Bézout con signos ajustados
    const sigA = a >= 0 ? 1 : -1;
    const sigB = b >= 0 ? 1 : -1;
    const baseBezoutX = s0 * sigA;
    const baseBezoutY = t0 * sigB;

    // Multiplicamos por factor c / d
    const factor = c / d;
    const x0 = baseBezoutX * factor;
    const y0 = baseBezoutY * factor;

    // Paso para k
    const pasoX = b / d;
    const pasoY = -(a / d);

    // Generar muestras para k = -2, -1, 0, 1, 2
    const puntos = [-3, -2, -1, 0, 1, 2, 3].map(k => ({
      k,
      x: x0 + k * pasoX,
      y: y0 + k * pasoY,
    }));

    return {
      tieneSolucion: true,
      mcd: d,
      x0,
      y0,
      pasoX,
      pasoY,
      puntos,
    };
  }, [a, b, c]);

  return (
    <div style={{ width: "100%", padding: 12, borderRadius: 12, background: C.surface, border: `1px solid ${C.border}` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <h4 style={{ margin: 0, color: catColor, fontSize: "var(--fs-md)", fontWeight: 700 }}>
          📐 Resolutor de Ecuaciones Diofánticas
        </h4>
        <span style={{ fontSize: "var(--fs-xs)", color: C.muted }}>\(ax + by = c\)</span>
      </div>

      {/* Controles de Coeficientes */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
        <div>
          <label style={{ display: "block", fontSize: "var(--fs-xs)", color: C.muted, marginBottom: 4 }}>
            Coef. \(a\):
          </label>
          <input
            type="number"
            value={aInput}
            onChange={(e) => setAInput(e.target.value)}
            style={{
              width: "100%",
              padding: "6px 8px",
              borderRadius: 6,
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
            Coef. \(b\):
          </label>
          <input
            type="number"
            value={bInput}
            onChange={(e) => setBInput(e.target.value)}
            style={{
              width: "100%",
              padding: "6px 8px",
              borderRadius: 6,
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
            Const. \(c\):
          </label>
          <input
            type="number"
            value={cInput}
            onChange={(e) => setCInput(e.target.value)}
            style={{
              width: "100%",
              padding: "6px 8px",
              borderRadius: 6,
              border: `1px solid ${C.border}`,
              background: C.surface2,
              color: C.text,
              fontSize: "var(--fs-sm)",
              fontWeight: 600,
            }}
          />
        </div>
      </div>

      {/* Ecuación Planteada */}
      <div style={{
        background: C.surface2,
        padding: "8px 12px",
        borderRadius: 8,
        border: `1px solid ${C.border}`,
        marginBottom: 12,
        textAlign: "center",
        fontSize: "var(--fs-sm)",
        color: C.text,
      }}>
        Ecuación: <strong style={{ color: catColor }}>{a}x + {b}y = {c}</strong>
        <div style={{ fontSize: "var(--fs-xs)", color: C.muted, marginTop: 4 }}>
          Condición de Solubilidad: <InlineFormula latex={`\\operatorname{mcd}(${a}, ${b}) = ${resultado.mcd}`} /> {resultado.tieneSolucion ? `divide a ${c} ✅` : `NO divide a ${c} ❌`}
        </div>
      </div>

      {resultado.tieneSolucion ? (
        <>
          {/* Solución General */}
          <div style={{
            background: `${C.green}12`,
            border: `1px solid ${C.green}44`,
            borderRadius: 8,
            padding: "8px 12px",
            marginBottom: 12,
            fontSize: "var(--fs-xs)",
          }}>
            <div style={{ fontWeight: 700, color: C.green, marginBottom: 4 }}>
              ✅ Familia Infinita de Soluciones Enteras (\(k \in \mathbb{"{Z}"}\)):
            </div>
            <div style={{ fontSize: "var(--fs-sm)", color: C.text, margin: "4px 0" }}>
              <InlineFormula
                latex={`x = ${resultado.x0} ${resultado.pasoX >= 0 ? `+ ${resultado.pasoX}` : `- ${Math.abs(resultado.pasoX)}`} k, \\quad y = ${resultado.y0} ${resultado.pasoY >= 0 ? `+ ${resultado.pasoY}` : `- ${Math.abs(resultado.pasoY)}`} k`}
              />
            </div>
            <div style={{ color: C.muted }}>
              Solución particular de referencia: <strong style={{ color: C.text }}>\((x_0, y_0) = ({resultado.x0}, {resultado.y0})\)</strong>
            </div>
          </div>

          {/* Tabla de Puntos Discretos */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--fs-xs)" }}>
              <thead>
                <tr style={{ background: `${catColor}22`, borderBottom: `1px solid ${catColor}` }}>
                  <th style={{ padding: "4px 8px", textAlign: "center", color: C.text }}>Parámetro \(k\)</th>
                  <th style={{ padding: "4px 8px", textAlign: "center", color: C.text }}>\(x_k\)</th>
                  <th style={{ padding: "4px 8px", textAlign: "center", color: C.text }}>\(y_k\)</th>
                  <th style={{ padding: "4px 8px", textAlign: "left", color: C.text }}>Comprobación</th>
                </tr>
              </thead>
              <tbody>
                {resultado.puntos.map((p) => (
                  <tr key={p.k} style={{ borderBottom: `1px solid ${C.border}`, background: p.k === 0 ? `${catColor}15` : "transparent" }}>
                    <td style={{ padding: "4px 8px", textAlign: "center", fontWeight: 700, color: p.k === 0 ? catColor : C.muted }}>{p.k}</td>
                    <td style={{ padding: "4px 8px", textAlign: "center", fontWeight: 600, color: C.text }}>{p.x}</td>
                    <td style={{ padding: "4px 8px", textAlign: "center", fontWeight: 600, color: C.text }}>{p.y}</td>
                    <td style={{ padding: "4px 8px", color: C.muted, fontFamily: "monospace" }}>
                      {a}({p.x}) + {b}({p.y}) = {a * p.x + b * p.y}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div style={{
          background: `${C.red}15`,
          border: `1px solid ${C.red}44`,
          borderRadius: 8,
          padding: 12,
          color: C.red,
          fontSize: "var(--fs-sm)",
          textAlign: "center"
        }}>
          ❌ Sin soluciones enteras: <InlineFormula latex={`\\operatorname{mcd}(${a}, ${b}) = ${resultado.mcd}`} /> no divide a {c}.
        </div>
      )}
    </div>
  );
}
