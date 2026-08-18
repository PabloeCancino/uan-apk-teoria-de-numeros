import React, { useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { CATEGORIAS, QUIZZES } from "../data/contenido.js";

export function CentroEvaluaciones({ onIniciarQuiz, progreso }) {
  const { C } = useContext(ThemeCtx);

  // Calcular estadísticas por módulo
  const historial = progreso?.quizHistorial || [];

  const getStatsModulo = (moduloId) => {
    const intentos = historial.filter(h => h.moduloId === moduloId);
    if (intentos.length === 0) return { intentos: 0, mejorPuntaje: null, promedio: null };
    const porcentajes = intentos.map(i => Math.round((i.aciertos / i.total) * 100));
    const mejorPuntaje = Math.max(...porcentajes);
    const promedio = Math.round(porcentajes.reduce((a, b) => a + b, 0) / porcentajes.length);
    return { intentos: intentos.length, mejorPuntaje, promedio };
  };

  const statsGlobal = getStatsModulo("global");

  return (
    <div className="fade-slide-in contenido-vista">
      {/* Encabezado */}
      <div style={{ marginBottom: 20 }}>
        <span
          style={{
            fontSize: "var(--fs-xs)",
            color: C.accent,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Evaluación Formativa por Competencias (Reactivos Institucionales PALMAT)
        </span>
        <h2 style={{ fontSize: "var(--fs-xl)", color: C.text, fontWeight: 700, margin: "4px 0" }}>
          Centro de Evaluaciones Curriculares
        </h2>
        <p style={{ color: C.muted, fontSize: "var(--fs-sm)", marginTop: 4 }}>
          Banco exhaustivo de reactivos por cada unidad curricular de <strong>Teoría de Números (CBIMAT-256)</strong>. Evalúa tus competencias por unidad o realiza el Examen Global Integrador.
        </p>
      </div>

      {/* Grid de Bloques de Evaluación por Unidad */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
        {CATEGORIAS.map((cat, idx) => {
          const qsUnidad = QUIZZES.filter(q => q.nivel === cat.nombre);
          const stats = getStatsModulo(cat.id);

          return (
            <div
              key={cat.id}
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderTop: `4px solid ${cat.color}`,
                borderRadius: 12,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 12,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: "11px", color: cat.color, fontWeight: 700, textTransform: "uppercase" }}>
                    Unidad {idx + 1}
                  </span>
                  <span style={{ fontSize: "10px", padding: "2px 8px", borderRadius: 10, background: `${cat.color}22`, color: cat.color, fontWeight: 600 }}>
                    {qsUnidad.length} Reactivos
                  </span>
                </div>

                <h3 style={{ fontSize: "var(--fs-md)", color: C.text, margin: "2px 0 6px", fontWeight: 700 }}>
                  {cat.icon} {cat.nombre}
                </h3>

                <p style={{ fontSize: "var(--fs-xs)", color: C.muted, lineHeight: 1.4, margin: "0 0 10px" }}>
                  {idx === 0 && "Peano, Buen Orden, Inducción, Divisibilidad, Algoritmo de Euclides, Bézout, Diofánticas y Ternas Pitagóricas."}
                  {idx === 1 && "Primalidad, Coprimalidad, Criba de Eratóstenes, Teorema Fundamental de la Aritmética y Factorización de Fermat."}
                  {idx === 2 && "Conjuntos finitos, permutaciones, combinaciones, Triángulo de Pascal, Teoremas de Fermat y Wilson."}
                  {idx === 3 && "Funciones aritméticas d(n), sigma(n), números perfectos, primos de Mersenne, función phi de Euler y Möbius mu(n)."}
                  {idx === 4 && "Congruencias, unidades en Z_n, Teorema de Euler, Pequeño Fermat, congruencias lineales y Teorema Chino del Residuo."}
                </p>

                {/* Métricas de desempeño */}
                <div style={{
                  background: C.surface2,
                  border: `1px solid ${C.border}`,
                  borderRadius: 6,
                  padding: "6px 10px",
                  fontSize: "11px",
                  display: "flex",
                  justifyContent: "space-between",
                  color: C.text,
                }}>
                  <span>Intentos: <strong>{stats.intentos}</strong></span>
                  <span>Mejor: <strong style={{ color: stats.mejorPuntaje >= 80 ? C.green : cat.color }}>{stats.mejorPuntaje !== null ? `${stats.mejorPuntaje}%` : "—"}</strong></span>
                  <span>Promedio: <strong>{stats.promedio !== null ? `${stats.promedio}%` : "—"}</strong></span>
                </div>
              </div>

              {/* Botón Iniciar Evaluación de Unidad */}
              <button
                onClick={() => onIniciarQuiz(cat.id)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 8,
                  border: "none",
                  background: cat.color,
                  color: "#ffffff",
                  fontSize: "var(--fs-xs)",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  transition: "opacity 0.2s",
                }}
              >
                <span>📝</span> Iniciar Evaluación de Unidad (10 Reactivos)
              </button>
            </div>
          );
        })}
      </div>

      {/* Bloque de Examen Global Integrador */}
      <div
        style={{
          background: `linear-gradient(135deg, ${C.surface} 0%, ${C.surface2} 100%)`,
          border: `1px solid ${C.accent}66`,
          borderRadius: 14,
          padding: 20,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ flex: 1, minWidth: 260 }}>
          <span style={{ fontSize: "11px", color: C.accent, fontWeight: 700, textTransform: "uppercase" }}>
            Simulación Institucional PALMAT
          </span>
          <h3 style={{ fontSize: "var(--fs-lg)", color: C.text, margin: "4px 0 6px" }}>
            🎓 Examen Global Integrador de Teoría de Números
          </h3>
          <p style={{ fontSize: "var(--fs-xs)", color: C.muted, margin: 0 }}>
            Evaluación completa aleatoria seleccionada de todas las unidades temáticas para certificar el dominio integral de la materia CBIMAT-256.
          </p>

          <div style={{ display: "flex", gap: 16, marginTop: 10, fontSize: "11px", color: C.text }}>
            <span>Intentos Globales: <strong>{statsGlobal.intentos}</strong></span>
            <span>Mejor Calificación: <strong style={{ color: statsGlobal.mejorPuntaje >= 80 ? C.green : C.accent }}>{statsGlobal.mejorPuntaje !== null ? `${statsGlobal.mejorPuntaje}%` : "—"}</strong></span>
          </div>
        </div>

        <button
          onClick={() => onIniciarQuiz("global")}
          style={{
            padding: "12px 24px",
            borderRadius: 10,
            border: "none",
            background: C.accent,
            color: "#ffffff",
            fontSize: "var(--fs-sm)",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            boxShadow: "0 4px 12px rgba(227, 179, 65, 0.3)",
          }}
        >
          <span>🚀</span> Iniciar Examen Global (20 Reactivos)
        </button>
      </div>
    </div>
  );
}
