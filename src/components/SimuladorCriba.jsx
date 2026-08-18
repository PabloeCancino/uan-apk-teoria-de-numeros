import React, { useState, useMemo, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";

export function SimuladorCriba({ catColor = "#3fb950" }) {
  const { C } = useContext(ThemeCtx);
  const [maxN, setMaxN] = useState(100);
  const [pasoPrimo, setPasoPrimo] = useState(null); // Primo actual en el que se encuentra la criba

  // Calculamos la lista de números y primos hasta maxN
  const { matriz, primos, factores, primosHastaRaiz } = useMemo(() => {
    const n = Math.min(Math.max(Number(maxN) || 50, 20), 120);
    const esPrimo = new Array(n + 1).fill(true);
    esPrimo[0] = false;
    esPrimo[1] = false;
    const factoresMin = new Array(n + 1).fill(null);

    const raiz = Math.floor(Math.sqrt(n));
    const pRaiz = [];

    for (let p = 2; p <= raiz; p++) {
      if (esPrimo[p]) {
        pRaiz.push(p);
        for (let i = p * p; i <= n; i += p) {
          if (esPrimo[i]) {
            esPrimo[i] = false;
            factoresMin[i] = p;
          }
        }
      }
    }

    const listaPrimos = [];
    for (let p = 2; p <= n; p++) {
      if (esPrimo[p]) listaPrimos.push(p);
    }

    return {
      matriz: Array.from({ length: n }, (_, i) => i + 1),
      primos: listaPrimos,
      factores: factoresMin,
      primosHastaRaiz: pRaiz,
    };
  }, [maxN]);

  // Colores para los múltiplos de los primeros primos
  const PRIMO_COLORES = {
    2: "#f85149",
    3: "#58a6ff",
    5: "#e3b341",
    7: "#bc8cff",
    11: "#f0883e",
  };

  return (
    <div style={{ width: "100%", padding: 12, borderRadius: 12, background: C.surface, border: `1px solid ${C.border}` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <h4 style={{ margin: 0, color: catColor, fontSize: "var(--fs-md)", fontWeight: 700 }}>
          🌿 Criba de Eratóstenes Interactiva
        </h4>
        <span style={{ fontSize: "var(--fs-xs)", color: C.muted }}>
          \(\pi({maxN}) = {primos.length}\) primos
        </span>
      </div>

      {/* Control de Rango y Filtros por Primo */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <label style={{ fontSize: "var(--fs-xs)", color: C.muted }}>Límite \(N\):</label>
          <select
            value={maxN}
            onChange={(e) => {
              setMaxN(Number(e.target.value));
              setPasoPrimo(null);
            }}
            style={{
              padding: "4px 8px",
              borderRadius: 6,
              border: `1px solid ${C.border}`,
              background: C.surface2,
              color: C.text,
              fontSize: "var(--fs-xs)",
              fontWeight: 600,
            }}
          >
            <option value={50}>50</option>
            <option value={80}>80</option>
            <option value={100}>100</option>
            <option value={120}>120</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }}>
          <button
            onClick={() => setPasoPrimo(null)}
            style={{
              padding: "3px 8px",
              borderRadius: 6,
              fontSize: "11px",
              fontWeight: 600,
              cursor: "pointer",
              border: pasoPrimo === null ? `1px solid ${catColor}` : `1px solid ${C.border}`,
              background: pasoPrimo === null ? `${catColor}22` : C.surface2,
              color: pasoPrimo === null ? catColor : C.muted,
            }}
          >
            Todos
          </button>
          {primosHastaRaiz.map(p => (
            <button
              key={p}
              onClick={() => setPasoPrimo(pasoPrimo === p ? null : p)}
              style={{
                padding: "3px 8px",
                borderRadius: 6,
                fontSize: "11px",
                fontWeight: 600,
                cursor: "pointer",
                border: pasoPrimo === p ? `1px solid ${PRIMO_COLORES[p] || catColor}` : `1px solid ${C.border}`,
                background: pasoPrimo === p ? `${PRIMO_COLORES[p] || catColor}33` : C.surface2,
                color: pasoPrimo === p ? (PRIMO_COLORES[p] || catColor) : C.text,
              }}
            >
              Múltiplos de {p}
            </button>
          ))}
        </div>
      </div>

      {/* Matriz Cuadrícula de Números */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        gap: 4,
        maxHeight: 280,
        overflowY: "auto",
        padding: 6,
        background: C.surface2,
        borderRadius: 8,
        border: `1px solid ${C.border}`,
        marginBottom: 10,
      }}>
        {matriz.map((num) => {
          const esP = primos.includes(num);
          const esUno = num === 1;
          const factor = factores[num];
          const resaltarMultiplo = pasoPrimo !== null && (num % pasoPrimo === 0 && num !== pasoPrimo);
          const esPrimoActivo = pasoPrimo !== null && num === pasoPrimo;

          let bg = "transparent";
          let textColor = C.muted;
          let border = `1px solid ${C.border}44`;

          if (esUno) {
            textColor = "#555";
          } else if (esPrimoActivo) {
            bg = PRIMO_COLORES[num] || catColor;
            textColor = "#ffffff";
            border = `1px solid ${PRIMO_COLORES[num] || catColor}`;
          } else if (resaltarMultiplo) {
            bg = `${PRIMO_COLORES[pasoPrimo] || C.red}22`;
            textColor = PRIMO_COLORES[pasoPrimo] || C.red;
            border = `1px solid ${PRIMO_COLORES[pasoPrimo] || C.red}55`;
          } else if (esP) {
            bg = `${catColor}22`;
            textColor = catColor;
            border = `1px solid ${catColor}55`;
          } else if (factor) {
            textColor = "#777777";
          }

          return (
            <div
              key={num}
              style={{
                padding: "6px 2px",
                textAlign: "center",
                fontSize: "var(--fs-xs)",
                fontWeight: esP || esPrimoActivo ? 700 : 400,
                borderRadius: 4,
                background: bg,
                color: textColor,
                border,
                textDecoration: (!esP && !esUno && pasoPrimo !== null && num % pasoPrimo === 0) ? "line-through" : "none",
                transition: "all 0.15s ease",
              }}
            >
              {num}
            </div>
          );
        })}
      </div>

      {/* Leyenda */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: "11px", color: C.muted }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: `${catColor}44`, border: `1px solid ${catColor}` }} />
          <span>Número Primo (\(p\))</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: C.surface2, border: `1px solid ${C.border}` }} />
          <span>Compuesto</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ color: C.orange }}>\(\sqrt{maxN} \approx {Math.floor(Math.sqrt(maxN))}\)</span>
          <span>(Límite de verificación)</span>
        </div>
      </div>
    </div>
  );
}
