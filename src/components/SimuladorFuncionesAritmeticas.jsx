import React, { useState, useMemo, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function SimuladorFuncionesAritmeticas({ catColor = "#bc8cff" }) {
  const { C } = useContext(ThemeCtx);
  const [numInput, setNumInput] = useState(28);

  const n = Math.min(Math.max(parseInt(numInput, 10) || 1, 1), 100000);

  const stats = useMemo(() => {
    // Factorización
    let temp = n;
    const factores = {};
    for (let d = 2; d * d <= temp; d++) {
      while (temp % d === 0) {
        factores[d] = (factores[d] || 0) + 1;
        temp = Math.floor(temp / d);
      }
    }
    if (temp > 1) {
      factores[temp] = (factores[temp] || 0) + 1;
    }

    // Lista de divisores
    const divisores = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) divisores.push(i);
    }

    // d(n)
    const d_n = divisores.length;

    // sigma(n)
    const sigma_n = divisores.reduce((acc, v) => acc + v, 0);

    // phi(n) = n * prod(1 - 1/p)
    let phi_n = n;
    Object.keys(factores).forEach((p) => {
      phi_n = Math.floor((phi_n * (Number(p) - 1)) / Number(p));
    });

    // mu(n)
    let mu_n = 1;
    if (n === 1) {
      mu_n = 1;
    } else {
      const tieneCuadrados = Object.values(factores).some((exp) => exp > 1);
      if (tieneCuadrados) {
        mu_n = 0;
      } else {
        const numFactores = Object.keys(factores).length;
        mu_n = numFactores % 2 === 0 ? 1 : -1;
      }
    }

    // Clasificación
    let clasificacion = "Deficiente";
    if (sigma_n === 2 * n) {
      clasificacion = "Perfecto (Euclides-Euler) ⭐";
    } else if (sigma_n > 2 * n) {
      clasificacion = "Abundante";
    }

    // Verificar si es forma Mersenne 2^p - 1
    const pot = n + 1;
    const esPot2 = (pot & (pot - 1)) === 0 && pot > 1;
    const exponenteMersenne = esPot2 ? Math.round(Math.log2(pot)) : null;

    // Factorización en string LaTeX
    const factLatex = Object.entries(factores)
      .map(([p, e]) => (e > 1 ? `${p}^{${e}}` : `${p}`))
      .join(" \\cdot ") || "1";

    return {
      factores,
      factLatex,
      divisores,
      d_n,
      sigma_n,
      phi_n,
      mu_n,
      clasificacion,
      esMersenne: esPot2,
      exponenteMersenne,
    };
  }, [n]);

  return (
    <div style={{ width: "100%", padding: 12, borderRadius: 12, background: C.surface, border: `1px solid ${C.border}` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <h4 style={{ margin: 0, color: catColor, fontSize: "var(--fs-md)", fontWeight: 700 }}>
          🔢 Calculadora de Funciones Aritméticas
        </h4>
        <span style={{ fontSize: "var(--fs-xs)", color: C.muted }}>\(\sigma, d, \phi, \mu\)</span>
      </div>

      {/* Control de Entrada */}
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block", fontSize: "var(--fs-xs)", color: C.muted, marginBottom: 4 }}>
          Evaluar Entero Positivo \(n\) (1 a 100,000):
        </label>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="number"
            min="1"
            max="100000"
            value={numInput}
            onChange={(e) => setNumInput(e.target.value)}
            style={{
              flex: 1,
              padding: "6px 10px",
              borderRadius: 8,
              border: `1px solid ${C.border}`,
              background: C.surface2,
              color: C.text,
              fontSize: "var(--fs-sm)",
              fontWeight: 700,
            }}
          />
          <button
            onClick={() => setNumInput(28)}
            style={{
              padding: "6px 10px",
              borderRadius: 8,
              border: `1px solid ${C.border}`,
              background: C.surface2,
              color: C.accent,
              fontSize: "var(--fs-xs)",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Ej. 28
          </button>
          <button
            onClick={() => setNumInput(496)}
            style={{
              padding: "6px 10px",
              borderRadius: 8,
              border: `1px solid ${C.border}`,
              background: C.surface2,
              color: C.accent,
              fontSize: "var(--fs-xs)",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Ej. 496
          </button>
        </div>
      </div>

      {/* Factorización en Primos */}
      <div style={{
        background: C.surface2,
        padding: "8px 12px",
        borderRadius: 8,
        border: `1px solid ${C.border}`,
        marginBottom: 12,
        fontSize: "var(--fs-sm)",
        color: C.text,
      }}>
        Descomposición canónica: <strong style={{ color: catColor }}><InlineFormula latex={`n = ${n} = ${stats.factLatex}`} /></strong>
      </div>

      {/* Grid de Funciones Evaluadas */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        gap: 8,
        marginBottom: 12,
      }}>
        <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8 }}>
          <div style={{ fontSize: "var(--fs-xs)", color: C.muted }}>Núm. Divisores \(d(n)\):</div>
          <div style={{ fontSize: "var(--fs-md)", fontWeight: 700, color: C.blue }}>
            \(d({n}) = {stats.d_n}\)
          </div>
        </div>
        <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8 }}>
          <div style={{ fontSize: "var(--fs-xs)", color: C.muted }}>Suma Divisores \(\sigma(n)\):</div>
          <div style={{ fontSize: "var(--fs-md)", fontWeight: 700, color: C.green }}>
            \(\sigma({n}) = {stats.sigma_n}\)
          </div>
        </div>
        <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8 }}>
          <div style={{ fontSize: "var(--fs-xs)", color: C.muted }}>Función \(\phi(n)\) de Euler:</div>
          <div style={{ fontSize: "var(--fs-md)", fontWeight: 700, color: C.accent }}>
            \(\phi({n}) = {stats.phi_n}\)
          </div>
        </div>
        <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8 }}>
          <div style={{ fontSize: "var(--fs-xs)", color: C.muted }}>Función \(\mu(n)\) Möbius:</div>
          <div style={{ fontSize: "var(--fs-md)", fontWeight: 700, color: stats.mu_n === 0 ? C.muted : C.orange }}>
            \(\mu({n}) = {stats.mu_n}\)
          </div>
        </div>
      </div>

      {/* Diagnóstico y Divisores */}
      <div style={{
        background: `${catColor}12`,
        border: `1px solid ${catColor}33`,
        borderRadius: 8,
        padding: "8px 12px",
        fontSize: "var(--fs-xs)",
      }}>
        <div><strong>Clasificación según \(\sigma(n)\):</strong> <span style={{ color: C.green, fontWeight: 700 }}>{stats.clasificacion}</span></div>
        {stats.esMersenne && (
          <div style={{ color: C.accent, marginTop: 2 }}>
            ✨ Es un número de la forma de Mersenne: \(M_{stats.exponenteMersenne} = 2^{stats.exponenteMersenne} - 1\)
          </div>
        )}
        <div style={{ color: C.muted, marginTop: 4, maxHeight: 44, overflowY: "auto" }}>
          Divisores positivos: {stats.divisores.join(", ")}
        </div>
      </div>
    </div>
  );
}
