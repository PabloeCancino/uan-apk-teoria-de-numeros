import React, { useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { CATEGORIAS } from "../data/contenido.js";
import { Formula, renderTextWithMath } from "./Formula";
import { SimuladorEuclides } from "./SimuladorEuclides";
import { SimuladorCriba } from "./SimuladorCriba";
import { SimuladorDiofanticas } from "./SimuladorDiofanticas";
import { SimuladorFuncionesAritmeticas } from "./SimuladorFuncionesAritmeticas";
import { SimuladorRelojModular } from "./SimuladorRelojModular";
import { SimuladorCRT } from "./SimuladorCRT";
import { TablaContenedor } from "./TablaContenedor";

export function VistaTema({ tema, onIniciarQuizModulo }) {
  const { C } = useContext(ThemeCtx);
  const cat = CATEGORIAS.find(c => c.id === tema.categoria) || { nombre: "General", color: "#e3b341", icon: "🔢" };

  const renderWidget = () => {
    if (tema.widget === "euclides") return <SimuladorEuclides catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "criba") return <SimuladorCriba catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "diofanticas") return <SimuladorDiofanticas catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "funciones_aritmeticas") return <SimuladorFuncionesAritmeticas catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "reloj_modular") return <SimuladorRelojModular catColor={cat.color} {...tema.widgetProps} />;
    if (tema.widget === "crt") return <SimuladorCRT catColor={cat.color} {...tema.widgetProps} />;
    if (tema.tabla) return <TablaContenedor tabla={tema.tabla} catColor={cat.color} />;
    return null;
  };

  const hasWidget = !!(tema.widget || tema.tabla);

  return (
    <div key={tema.id} className="fade-slide-in contenido-vista">
      {/* Chip de Categoría */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <span
          className="tema-categoria-chip"
          style={{
            padding: "3px 12px",
            borderRadius: 20,
            background: `${cat.color}22`,
            color: cat.color,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          {cat.icon} {cat.nombre}
        </span>
        {onIniciarQuizModulo && (
          <button
            onClick={() => onIniciarQuizModulo(cat.id)}
            style={{
              padding: "4px 10px",
              borderRadius: 6,
              background: C.surface2,
              border: `1px solid ${C.border}`,
              color: cat.color,
              fontSize: "var(--fs-xs)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            📝 Evaluar Módulo
          </button>
        )}
      </div>

      {/* Título */}
      <h2
        className="tema-titulo"
        style={{ color: C.text, fontWeight: 700, margin: "8px 0 16px", letterSpacing: -0.5 }}
      >
        {tema.titulo}
      </h2>

      {/* Grid: Definición + Widget */}
      <div className="vista-tema-grid" style={{ marginBottom: "var(--sp-md)" }}>
        <div>
          <div className="tema-definicion" style={{ color: C.text, marginTop: 0 }}>
            {renderTextWithMath(tema.definicion)}
          </div>
          {tema.formula && <Formula latex={tema.formula} color={cat.color} />}
        </div>

        {hasWidget && (
          <div
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "var(--sp-sm)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {renderWidget()}
          </div>
        )}
      </div>

      {/* Observaciones clave y Notas */}
      {tema.notas && tema.notas.length > 0 && (
        <div
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: "var(--sp-sm) var(--sp-md)",
            marginTop: "var(--sp-sm)",
          }}
        >
          <div
            className="tema-nota-label"
            style={{
              color: C.muted,
              marginBottom: "var(--sp-xs)",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              fontWeight: 600,
            }}
          >
            Observaciones y Demostraciones Clave
          </div>
          {tema.notas.map((n, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
              <span style={{ color: cat.color, fontSize: "var(--fs-md)", marginTop: -2, minWidth: 16 }}>›</span>
              <span className="tema-nota-texto" style={{ color: C.text }}>
                {renderTextWithMath(n)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
