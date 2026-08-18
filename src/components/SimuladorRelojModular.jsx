import React, { useState, useMemo, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function SimuladorRelojModular({ catColor = "#f0883e" }) {
  const { C } = useContext(ThemeCtx);
  const [moduloInput, setModuloInput] = useState(12);
  const [elemA, setElemA] = useState(5);
  const [elemB, setElemB] = useState(7);
  const [operacion, setOperacion] = useState("mult"); // "suma" | "mult" | "inverso"

  const n = Math.min(Math.max(parseInt(moduloInput, 10) || 2, 2), 24);
  const a = Math.abs(parseInt(elemA, 10) || 0) % n;
  const b = Math.abs(parseInt(elemB, 10) || 0) % n;

  // Cálculo de unidades (coprimos con n) e inversos
  const datosModular = useMemo(() => {
    const elementos = Array.from({ length: n }, (_, i) => i);
    const mcd = (x, y) => (!y ? x : mcd(y, x % y));

    const unidades = [];
    const inversos = {};

    elementos.forEach((el) => {
      if (mcd(el, n) === 1) {
        unidades.push(el);
        for (let inv = 1; inv < n; inv++) {
          if ((el * inv) % n === 1) {
            inversos[el] = inv;
            break;
          }
        }
      }
    });

    const resSuma = (a + b) % n;
    const resMult = (a * b) % n;
    const invA = inversos[a] ?? null;

    return {
      elementos,
      unidades,
      inversos,
      resSuma,
      resMult,
      invA,
      esUnidadA: unidades.includes(a),
    };
  }, [n, a, b]);

  // Coordenadas para la rueda del reloj SVG
  const radio = 80;
  const cx = 100;
  const cy = 100;

  return (
    <div style={{ width: "100%", padding: 12, borderRadius: 12, background: C.surface, border: `1px solid ${C.border}` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <h4 style={{ margin: 0, color: catColor, fontSize: "var(--fs-md)", fontWeight: 700 }}>
          🕒 Aritmética Modular & Anillo \(\mathbb{"{Z}"}_{n}\)
        </h4>
        <span style={{ fontSize: "var(--fs-xs)", color: C.muted }}>Módulo \(n = {n}\)</span>
      </div>

      {/* Selector de Módulo y Operación */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
        <div>
          <label style={{ display: "block", fontSize: "var(--fs-xs)", color: C.muted, marginBottom: 2 }}>
            Módulo \(n\) (2 a 24):
          </label>
          <input
            type="number"
            min="2"
            max="24"
            value={moduloInput}
            onChange={(e) => setModuloInput(e.target.value)}
            style={{
              width: "100%",
              padding: "4px 8px",
              borderRadius: 6,
              border: `1px solid ${C.border}`,
              background: C.surface2,
              color: C.text,
              fontSize: "var(--fs-xs)",
              fontWeight: 600,
            }}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "var(--fs-xs)", color: C.muted, marginBottom: 2 }}>
            Operación:
          </label>
          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value)}
            style={{
              width: "100%",
              padding: "4px 8px",
              borderRadius: 6,
              border: `1px solid ${C.border}`,
              background: C.surface2,
              color: C.text,
              fontSize: "var(--fs-xs)",
              fontWeight: 600,
            }}
          >
            <option value="mult">Multiplicación \(a \cdot b \pmod n\)</option>
            <option value="suma">Adición \(a + b \pmod n\)</option>
            <option value="inverso">Inverso Multiplicativo \(a^{"-1"} \pmod n\)</option>
          </select>
        </div>
      </div>

      {/* Visualización Dual: Rueda Reloj + Controles */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, alignItems: "center", marginBottom: 10 }}>
        {/* Rueda del Reloj SVG */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <svg viewBox="0 0 200 200" style={{ width: 170, height: 170, overflow: "visible" }}>
            <circle cx={cx} cy={cy} r={radio} fill="none" stroke={C.border} strokeWidth="2" />
            {datosModular.elementos.map((val, idx) => {
              const angulo = (idx / n) * 2 * Math.PI - Math.PI / 2;
              const px = cx + radio * Math.cos(angulo);
              const py = cy + radio * Math.sin(angulo);
              const esA = val === a;
              const esB = operacion !== "inverso" && val === b;
              const esRes =
                operacion === "suma" ? val === datosModular.resSuma :
                operacion === "mult" ? val === datosModular.resMult :
                val === datosModular.invA;
              const esUnidad = datosModular.unidades.includes(val);

              let fillColor = C.surface2;
              let strokeColor = esUnidad ? catColor : C.border;
              let textColor = C.text;

              if (esA) {
                fillColor = C.blue;
                textColor = "#fff";
              } else if (esB) {
                fillColor = C.purple;
                textColor = "#fff";
              } else if (esRes) {
                fillColor = C.green;
                textColor = "#fff";
              }

              return (
                <g key={val} onClick={() => setElemA(val)} style={{ cursor: "pointer" }}>
                  <circle
                    cx={px}
                    cy={py}
                    r={n > 16 ? 9 : 12}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth="1.5"
                  />
                  <text
                    x={px}
                    y={py + (n > 16 ? 3 : 4)}
                    textAnchor="middle"
                    fill={textColor}
                    fontSize={n > 16 ? "9px" : "11px"}
                    fontWeight="700"
                  >
                    {val}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Panel de Cálculo de la Operación */}
        <div style={{ background: C.surface2, padding: 10, borderRadius: 8, border: `1px solid ${C.border}` }}>
          <div style={{ marginBottom: 6 }}>
            <label style={{ fontSize: "11px", color: C.blue, fontWeight: 700 }}>Elemento \(a = {a}\):</label>
            <input
              type="range"
              min="0"
              max={n - 1}
              value={a}
              onChange={(e) => setElemA(Number(e.target.value))}
              style={{ width: "100%", accentColor: C.blue }}
            />
          </div>

          {operacion !== "inverso" && (
            <div style={{ marginBottom: 6 }}>
              <label style={{ fontSize: "11px", color: C.purple, fontWeight: 700 }}>Elemento \(b = {b}\):</label>
              <input
                type="range"
                min="0"
                max={n - 1}
                value={b}
                onChange={(e) => setElemB(Number(e.target.value))}
                style={{ width: "100%", accentColor: C.purple }}
              />
            </div>
          )}

          <div style={{ marginTop: 8, padding: 6, background: C.surface, borderRadius: 6, border: `1px solid ${C.border}` }}>
            {operacion === "suma" && (
              <div style={{ fontSize: "var(--fs-xs)", color: C.text }}>
                <InlineFormula latex={`${a} + ${b} = ${a + b} \\equiv ${datosModular.resSuma} \\pmod{${n}}`} />
              </div>
            )}
            {operacion === "mult" && (
              <div style={{ fontSize: "var(--fs-xs)", color: C.text }}>
                <InlineFormula latex={`${a} \\cdot ${b} = ${a * b} \\equiv ${datosModular.resMult} \\pmod{${n}}`} />
              </div>
            )}
            {operacion === "inverso" && (
              <div style={{ fontSize: "var(--fs-xs)", color: C.text }}>
                {datosModular.esUnidadA ? (
                  <InlineFormula latex={`${a}^{-1} \\equiv ${datosModular.invA} \\pmod{${n}} \\quad (${a} \\cdot ${datosModular.invA} \\equiv 1)`} />
                ) : (
                  <span style={{ color: C.red, fontSize: "11px" }}>
                    <InlineFormula latex={`\\operatorname{mcd}(${a}, ${n}) \\neq 1`} />, por lo que {a} no tiene inverso modular.
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Grupo de Unidades Z_n^* */}
      <div style={{
        background: `${catColor}15`,
        borderRadius: 6,
        padding: "6px 10px",
        fontSize: "11px",
        color: C.text,
      }}>
        <strong>Grupo de Unidades <InlineFormula latex={`\\mathbb{Z}_{${n}}^\\times`} />:</strong> {"\\{" + datosModular.unidades.join(", ") + "\\}"} (Orden: \(\phi({n})\) = {datosModular.unidades.length})
      </div>
    </div>
  );
}