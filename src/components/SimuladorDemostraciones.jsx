// NTE-UAN-APK-001 v1.3 — Simulador de Demostraciones Matemáticas Paso a Paso
// Asignatura: Teoría de Números (CBIMAT-256) — PALMAT UAN
import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { DEMOSTRACIONES } from "../data/demostraciones.js";
import { Formula, renderTextWithMath } from "./Formula";

export function SimuladorDemostraciones() {
  const { C } = useContext(ThemeCtx);
  const [catFiltro, setCatFiltro] = useState("Todos");
  const [demId, setDemId] = useState(DEMOSTRACIONES[0].id);
  const [pasoActual, setPasoActual] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const itvRef = useRef(null);

  const categorias = [
    "Todos",
    "Divisibilidad",
    "Primalidad",
    "Funciones Aritméticas",
    "Aritmética Modular",
  ];

  const demsFilt = catFiltro === "Todos"
    ? DEMOSTRACIONES
    : DEMOSTRACIONES.filter(d => d.categoria === catFiltro);

  const dem = DEMOSTRACIONES.find(d => d.id === demId) || demsFilt[0] || DEMOSTRACIONES[0];

  const iniciarAuto = useCallback(() => {
    clearInterval(itvRef.current);
    setPasoActual(0);
    setCorriendo(true);
  }, []);

  const pausarAuto = useCallback(() => {
    setCorriendo(false);
    clearInterval(itvRef.current);
  }, []);

  useEffect(() => {
    if (!corriendo || !dem) return;
    itvRef.current = setInterval(() => {
      setPasoActual(p => {
        if (p >= dem.pasos.length - 1) {
          setCorriendo(false);
          return p;
        }
        return p + 1;
      });
    }, 2200);
    return () => clearInterval(itvRef.current);
  }, [corriendo, dem]);

  const seleccionarDem = (id) => {
    setDemId(id);
    setPasoActual(0);
    setCorriendo(false);
    clearInterval(itvRef.current);
  };

  const pasoObj = dem?.pasos?.[pasoActual] || { numero: 1, tipo: "—", explicacion: "" };
  const totalPasos = dem?.pasos?.length || 1;
  const progresoPct = Math.round(((pasoActual + 1) / totalPasos) * 100);

  return (
    <div className="fade-slide-in contenido-vista">
      {/* Encabezado */}
      <div style={{ marginBottom: 16 }}>
        <span
          style={{
            fontSize: "var(--fs-xs)",
            color: dem.color || C.accent,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Rigor Formal y Deducción Matemática
        </span>
        <h2 style={{ fontSize: "var(--fs-xl)", color: C.text, fontWeight: 700, margin: "4px 0" }}>
          📜 Simulador de Demostraciones Matemáticas
        </h2>
        <p style={{ color: C.muted, fontSize: "var(--fs-sm)", marginTop: 4 }}>
          Visualiza paso a paso la cadena de deducción formal de los grandes teoremas de la Teoría de Números con justificaciones lógicas y notación KaTeX rigurosa.
        </p>
      </div>

      {/* Filtro por Categorías */}
      <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 6, marginBottom: 12 }}>
        {categorias.map(c => {
          const activo = catFiltro === c;
          const label = c === "Todos" ? "🌐 Todos los Teoremas" : c;
          return (
            <button
              key={c}
              onClick={() => {
                setCatFiltro(c);
                const primeros = c === "Todos" ? DEMOSTRACIONES : DEMOSTRACIONES.filter(d => d.categoria === c);
                if (primeros.length > 0) seleccionarDem(primeros[0].id);
              }}
              style={{
                padding: "6px 12px",
                borderRadius: 20,
                fontSize: "var(--fs-xs)",
                fontWeight: 600,
                whiteSpace: "nowrap",
                cursor: "pointer",
                border: activo ? `1px solid ${dem.color || C.accent}` : `1px solid ${C.border}`,
                background: activo ? `${dem.color || C.accent}22` : C.surface,
                color: activo ? (dem.color || C.accent) : C.muted,
                transition: "all 0.15s ease",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Selector de Teoremas */}
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 6, marginBottom: 14 }}>
        {demsFilt.map(d => {
          const activo = dem.id === d.id;
          return (
            <button
              key={d.id}
              onClick={() => seleccionarDem(d.id)}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                fontSize: "var(--fs-xs)",
                fontWeight: 600,
                whiteSpace: "nowrap",
                cursor: "pointer",
                border: activo ? `2px solid ${d.color}` : `1px solid ${C.border}`,
                background: activo ? `${d.color}15` : C.surface,
                color: activo ? C.text : C.muted,
                transition: "all 0.15s ease",
              }}
            >
              {d.titulo}
            </button>
          );
        })}
      </div>

      {/* Ficha del Teorema */}
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: "var(--sp-sm) var(--sp-md)",
        marginBottom: 14,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <span style={{ fontSize: "var(--fs-xs)", color: dem.color, fontWeight: 700, textTransform: "uppercase" }}>
            {dem.categoria} · {dem.autor}
          </span>
          <span style={{ fontSize: "var(--fs-xs)", color: C.muted }}>
            Paso {pasoActual + 1} de {totalPasos}
          </span>
        </div>
        <h3 style={{ fontSize: "var(--fs-lg)", color: C.text, margin: "2px 0 8px" }}>
          {dem.titulo}
        </h3>
        <div style={{ fontSize: "var(--fs-sm)", color: C.muted, fontStyle: "italic", borderLeft: `3px solid ${dem.color}`, paddingLeft: 10 }}>
          {renderTextWithMath(dem.enunciado)}
        </div>
      </div>

      {/* Barra de Progreso del Paso */}
      <div style={{ background: C.surface2, height: 6, borderRadius: 3, marginBottom: 16, overflow: "hidden" }}>
        <div style={{
          width: `${progresoPct}%`,
          height: "100%",
          background: dem.color || C.accent,
          transition: "width 0.3s ease",
        }} />
      </div>

      {/* Contenedor del Paso Actual */}
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: "var(--sp-md)",
        marginBottom: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{
            background: dem.color,
            color: "#ffffff",
            width: 24,
            height: 24,
            borderRadius: "50%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "12px"
          }}>
            {pasoObj.numero}
          </span>
          <span style={{ fontSize: "var(--fs-md)", fontWeight: 700, color: C.text }}>
            {pasoObj.tipo}
          </span>
        </div>

        {/* Expresión KaTeX del Paso */}
        {pasoObj.latex && <Formula latex={pasoObj.latex} color={dem.color} />}

        {/* Explicación Lógica */}
        <div style={{ fontSize: "var(--fs-sm)", color: C.text, lineHeight: 1.7, marginTop: 10 }}>
          {renderTextWithMath(pasoObj.explicacion)}
        </div>
      </div>

      {/* Controles de Navegación del Paso */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center", alignItems: "center" }}>
        <button
          onClick={() => { setCorriendo(false); setPasoActual(0); }}
          disabled={pasoActual === 0}
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            background: C.surface2,
            border: `1px solid ${C.border}`,
            color: pasoActual === 0 ? C.muted : C.text,
            cursor: pasoActual === 0 ? "not-allowed" : "pointer",
            fontSize: "var(--fs-sm)",
          }}
        >
          ⏮ Inicio
        </button>

        <button
          onClick={() => { setCorriendo(false); setPasoActual(p => Math.max(0, p - 1)); }}
          disabled={pasoActual === 0}
          style={{
            padding: "8px 16px",
            borderRadius: 8,
            background: C.surface2,
            border: `1px solid ${C.border}`,
            color: pasoActual === 0 ? C.muted : C.text,
            cursor: pasoActual === 0 ? "not-allowed" : "pointer",
            fontSize: "var(--fs-sm)",
            fontWeight: 600,
          }}
        >
          ◀ Anterior
        </button>

        {corriendo ? (
          <button
            onClick={pausarAuto}
            style={{
              padding: "8px 18px",
              borderRadius: 8,
              background: C.orange,
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "var(--fs-sm)",
              fontWeight: 700,
            }}
          >
            ⏸ Pausar
          </button>
        ) : (
          <button
            onClick={iniciarAuto}
            style={{
              padding: "8px 18px",
              borderRadius: 8,
              background: dem.color || C.accent,
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "var(--fs-sm)",
              fontWeight: 700,
            }}
          >
            ▶ Auto Play
          </button>
        )}

        <button
          onClick={() => { setCorriendo(false); setPasoActual(p => Math.min(totalPasos - 1, p + 1)); }}
          disabled={pasoActual === totalPasos - 1}
          style={{
            padding: "8px 16px",
            borderRadius: 8,
            background: C.surface2,
            border: `1px solid ${C.border}`,
            color: pasoActual === totalPasos - 1 ? C.muted : C.text,
            cursor: pasoActual === totalPasos - 1 ? "not-allowed" : "pointer",
            fontSize: "var(--fs-sm)",
            fontWeight: 600,
          }}
        >
          Siguiente ▶
        </button>
      </div>
    </div>
  );
}
