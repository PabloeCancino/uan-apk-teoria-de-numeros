import { useContext, useState } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function GraficoPascal() {
  const { C } = useContext(ThemeCtx);
  const [filas, setFilas] = useState(6);

  const numFilas = Math.min(Math.max(filas, 3), 10);

  // Generar el triángulo dinámicamente
  const triangle = [];
  for (let n = 0; n < numFilas; n++) {
    const row = [];
    for (let k = 0; k <= n; k++) {
      if (k === 0 || k === n) row.push(1);
      else row.push(triangle[n - 1][k - 1] + triangle[n - 1][k]);
    }
    triangle.push(row);
  }

  const W = 460;
  const cellW = Math.min(44, (W - 20) / numFilas);
  const cellH = 40;

  const getPos = (n, k) => ({
    cx: W / 2 + (k - n / 2) * cellW,
    cy: 28 + n * cellH,
  });

  const svgH = 28 + numFilas * cellH + 10;

  return (
    <div style={{
      width: "100%",
      maxWidth: 520,
      margin: "18px auto 12px",
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 16,
      padding: 16,
      boxShadow: "0 4px 20px rgba(0,0,0,0.12)"
    }}>
      {/* Encabezado */}
      <div style={{ fontSize: 13, color: C.text, lineHeight: 1.6, marginBottom: 10 }}>
        <strong>Triángulo de Pascal interactivo:</strong> cada entrada es{" "}
        <InlineFormula latex="\binom{n}{k} = \binom{n-1}{k-1}+\binom{n-1}{k}" />.
        Los números en <span style={{ color: C.accent, fontWeight: 700 }}>color</span> son los centrales.
      </div>

      {/* Control de filas */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ fontSize: 12, color: C.muted }}>Filas:</span>
        <input
          type="range" min="3" max="10" value={numFilas}
          onChange={e => setFilas(Number(e.target.value))}
          style={{ flex: 1, accentColor: C.accent }}
        />
        <span style={{ fontSize: 13, color: C.accent, fontWeight: 700, minWidth: 20 }}>{numFilas}</span>
      </div>

      <svg viewBox={`0 0 ${W} ${svgH}`} width="100%" height={svgH} style={{ display: "block", overflow: "visible" }}>
        {/* Líneas conectoras */}
        <g stroke={`${C.border}`} strokeWidth="1" strokeDasharray="3 3">
          {triangle.map((row, n) => {
            if (n === triangle.length - 1) return null;
            return row.map((_, k) => {
              const parent = getPos(n, k);
              const cL = getPos(n + 1, k);
              const cR = getPos(n + 1, k + 1);
              return (
                <g key={`l-${n}-${k}`}>
                  <line x1={parent.cx} y1={parent.cy} x2={cL.cx} y2={cL.cy} />
                  <line x1={parent.cx} y1={parent.cy} x2={cR.cx} y2={cR.cy} />
                </g>
              );
            });
          })}
        </g>

        {/* Nodos */}
        {triangle.map((row, n) =>
          row.map((val, k) => {
            const { cx, cy } = getPos(n, k);
            const isCenter = n % 2 === 0 && k === n / 2;
            const isBorder = val === 1;
            const color = isBorder ? C.muted : isCenter ? C.orange : C.accent;
            return (
              <g key={`n-${n}-${k}`}>
                <circle cx={cx} cy={cy} r={cellW * 0.34} fill={C.surface} stroke={color} strokeWidth="1.2" />
                <text x={cx} y={cy + 4} fill={color} fontSize={val > 99 ? "8" : val > 9 ? "10" : "12"}
                  fontWeight="bold" textAnchor="middle">
                  {val}
                </text>
              </g>
            );
          })
        )}

        {/* Etiquetas de fila: (a+b)^n */}
        {triangle.map((row, n) => {
          const lastK = row.length - 1;
          const { cx, cy } = getPos(n, lastK);
          return (
            <text key={`r-${n}`} x={cx + cellW * 0.55 + 8} y={cy + 4}
              fill={C.orange} fontSize="10" fontWeight="600" fontFamily="monospace" textAnchor="start">
              {"(a+b)"}
              <tspan baselineShift="super" fontSize="8">{n}</tspan>
            </text>
          );
        })}
      </svg>

      {/* Propiedad destacada */}
      <div style={{ marginTop: 10, padding: "8px 12px", background: `${C.accent}18`, borderRadius: 8, fontSize: 12, color: C.text }}>
        <strong style={{ color: C.accent }}>Propiedad de Fibonacci:</strong>{" "}
        Sumando diagonales inclinadas: <InlineFormula latex="F_{n+1} = \sum_{k=0}^{\lfloor n/2\rfloor}\binom{n-k}{k}" />
      </div>
    </div>
  );
}
