import React, { useState, useEffect, useContext, createContext } from "react";
import { useProgreso } from "./hooks/useProgreso";
import { CATEGORIAS, QUIZZES, META } from "./data/contenido.js";
import { DARK, LIGHT, ThemeCtx } from "./ThemeCtx";
import { Sidebar } from "./components/Sidebar";
import { VistaTema } from "./components/VistaTema";
import { SimuladorDemostraciones } from "./components/SimuladorDemostraciones";
import { Creditos } from "./components/Creditos";
import { DocumentosBasicos } from "./components/DocumentosBasicos";
import { CentroEvaluaciones } from "./components/CentroEvaluaciones";
import { renderTextWithMath } from "./components/Formula";

// ── CONTEXTO DE TAMAÑO DE FUENTE (8 niveles de 0.85x a 2.00x) ────────────────
const FONT_SCALES = [0.85, 0.95, 1.0, 1.15, 1.30, 1.50, 1.75, 2.00];
const FontSizeCtx = createContext({ scaleIdx: 2, aumentar: () => {}, reducir: () => {} });
export const useFontSize = () => useContext(FontSizeCtx);

function FontSizeProvider({ children }) {
  const [scaleIdx, setScaleIdx] = useState(() => {
    try {
      const guardado = Number(localStorage.getItem("uan_tn_font_scale"));
      return Number.isInteger(guardado) && guardado >= 0 && guardado < FONT_SCALES.length ? guardado : 2;
    } catch {
      return 2;
    }
  });

  const aumentar = () => setScaleIdx(i => Math.min(i + 1, FONT_SCALES.length - 1));
  const reducir = () => setScaleIdx(i => Math.max(i - 1, 0));

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", FONT_SCALES[scaleIdx]);
    try {
      localStorage.setItem("uan_tn_font_scale", scaleIdx);
    } catch {}
  }, [scaleIdx]);

  return (
    <FontSizeCtx.Provider value={{ scaleIdx, aumentar, reducir, escalaActual: FONT_SCALES[scaleIdx] }}>
      {children}
    </FontSizeCtx.Provider>
  );
}

// ── CONTEXTO DE TEMA ───────────────────────────────────────────────────────────
function ThemeProvider({ children }) {
  const [modo, setModo] = useState(() => {
    try { return localStorage.getItem("uan_tn_tema") || "oscuro"; } catch { return "oscuro"; }
  });
  const C = modo === "claro" ? LIGHT : DARK;

  const toggleTema = () => setModo(m => {
    const nuevo = m === "oscuro" ? "claro" : "oscuro";
    try { localStorage.setItem("uan_tn_tema", nuevo); } catch {}
    return nuevo;
  });

  useEffect(() => {
    document.body.style.background = C.bg;
    document.body.style.color = C.text;
  }, [C.bg, C.text]);

  return (
    <ThemeCtx.Provider value={{ C, toggleTema }}>
      {children}
    </ThemeCtx.Provider>
  );
}

// ── TODOS LOS TEMAS APLANADOS ──────────────────────────────────────────────────
const TODOS_TEMAS = CATEGORIAS.flatMap(c =>
  c.temas.map(t => ({ ...t, categoria: c.id, catNombre: c.nombre, catColor: c.color }))
);

// ── COMPONENTE SESIÓN DE QUIZ ─────────────────────────────────────────────────
function SesionQuiz({ pool, nPreguntas, guardarQuiz, onVolver, tituloModulo }) {
  const { C } = useContext(ThemeCtx);
  const [fase, setFase] = useState("quiz"); // "quiz" | "resultado"
  const [qIdx, setQIdx] = useState(0);
  const [resp, setResp] = useState({});
  const [sel, setSel] = useState(null);
  const [exp, setExp] = useState(false);

  const buildQs = () => {
    const arr = [...pool];
    return arr.sort(() => 0.5 - Math.random()).slice(0, Math.min(nPreguntas, arr.length));
  };

  const [qs, setQs] = useState(buildQs);
  const q = qs[qIdx];
  const total = qs.length;
  const aciertos = Object.entries(resp).filter(([idx, ans]) => qs[Number(idx)]?.correcta === ans).length;

  const seleccionarOpcion = (idx) => {
    if (sel !== null) return;
    setSel(idx);
    setResp(r => ({ ...r, [qIdx]: idx }));
    setExp(true);
  };

  const siguiente = () => {
    if (qIdx + 1 < total) {
      setQIdx(i => i + 1);
      setSel(resp[qIdx + 1] ?? null);
      setExp(resp[qIdx + 1] !== undefined);
    } else {
      guardarQuiz(aciertos, total);
      setFase("resultado");
    }
  };

  const reiniciar = () => {
    setQs(buildQs());
    setFase("quiz");
    setQIdx(0);
    setResp({});
    setSel(null);
    setExp(false);
  };

  if (!q) {
    return (
      <div className="contenido-vista" style={{ textAlign: "center", padding: 40 }}>
        <p style={{ color: C.muted }}>No hay preguntas disponibles para este módulo.</p>
        <button onClick={onVolver} style={{ padding: "8px 16px", borderRadius: 8, background: C.accent, color: "#fff", border: "none", cursor: "pointer" }}>
          Volver
        </button>
      </div>
    );
  }

  if (fase === "resultado") {
    const porcentaje = Math.round((aciertos / total) * 100);
    const aprobado = porcentaje >= 60;
    return (
      <div className="fade-slide-in contenido-vista" style={{ textAlign: "center", maxWidth: 500, margin: "40px auto" }}>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>{aprobado ? "🎉" : "📚"}</div>
          <h2 style={{ color: C.text, fontSize: "var(--fs-xl)", margin: "8px 0" }}>
            {aprobado ? "¡Excelente Desempeño!" : "¡Sigue Practicando!"}
          </h2>
          <p style={{ color: C.muted, fontSize: "var(--fs-sm)" }}>
            Has completado la evaluación de {tituloModulo || "Teoría de Números"}.
          </p>

          <div style={{
            fontSize: "var(--fs-xl)", fontWeight: "bold",
            color: aprobado ? C.green : C.orange,
            margin: "20px 0"
          }}>
            {aciertos} / {total} Aciertos ({porcentaje}%)
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
            <button
              onClick={reiniciar}
              style={{ padding: "10px 20px", borderRadius: 8, background: C.surface2, border: `1px solid ${C.border}`, color: C.text, cursor: "pointer", fontWeight: 600 }}
            >
              🔄 Reintentar
            </button>
            <button
              onClick={onVolver}
              style={{ padding: "10px 20px", borderRadius: 8, background: C.accent, border: "none", color: "#fff", cursor: "pointer", fontWeight: 700 }}
            >
              🏁 Finalizar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-slide-in contenido-vista" style={{ maxWidth: 720, margin: "0 auto" }}>
      {/* Barra superior del quiz */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <button
          onClick={onVolver}
          style={{ background: "transparent", border: "none", color: C.muted, cursor: "pointer", fontSize: "var(--fs-sm)" }}
        >
          ← Abandonar
        </button>
        <span style={{ fontSize: "var(--fs-xs)", color: C.accent, fontWeight: 700, textTransform: "uppercase" }}>
          {tituloModulo} · Pregunta {qIdx + 1} de {total}
        </span>
        <span style={{ fontSize: "var(--fs-xs)", color: C.green, fontWeight: 600 }}>
          {aciertos} Aciertos
        </span>
      </div>

      {/* Tarjeta de la Pregunta */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "var(--sp-md)", marginBottom: 16 }}>
        <div style={{ fontSize: "var(--fs-md)", fontWeight: 600, color: C.text, marginBottom: 18, lineHeight: 1.5 }}>
          {renderTextWithMath(q.pregunta)}
        </div>

        {/* Opciones */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {q.opciones.map((opc, idx) => {
            let bg = C.surface2;
            let border = `1px solid ${C.border}`;
            let color = C.text;

            if (sel !== null) {
              if (idx === q.correcta) {
                bg = `${C.green}22`;
                border = `1px solid ${C.green}`;
                color = C.green;
              } else if (idx === sel) {
                bg = `${C.red}22`;
                border = `1px solid ${C.red}`;
                color = C.red;
              }
            }

            return (
              <button
                key={idx}
                onClick={() => seleccionarOpcion(idx)}
                disabled={sel !== null}
                style={{
                  padding: "12px 16px",
                  borderRadius: 8,
                  background: bg,
                  border,
                  color,
                  textAlign: "left",
                  fontSize: "var(--fs-sm)",
                  cursor: sel === null ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  transition: "all 0.15s ease",
                }}
              >
                <span style={{
                  width: 24, height: 24, borderRadius: "50%",
                  background: C.surface, border: `1px solid ${C.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700, flexShrink: 0
                }}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span style={{ flex: 1 }}>{renderTextWithMath(opc)}</span>
              </button>
            );
          })}
        </div>

        {/* Explicación formativa */}
        {exp && (
          <div style={{
            marginTop: 18,
            padding: 14,
            borderRadius: 8,
            background: sel === q.correcta ? `${C.green}15` : `${C.orange}15`,
            borderLeft: `4px solid ${sel === q.correcta ? C.green : C.orange}`,
            fontSize: "var(--fs-xs)",
            color: C.text,
            lineHeight: 1.6
          }}>
            <strong style={{ display: "block", marginBottom: 4, color: sel === q.correcta ? C.green : C.orange }}>
              {sel === q.correcta ? "✅ ¡Respuesta Correcta!" : "💡 Justificación Matemática:"}
            </strong>
            {renderTextWithMath(q.explicacion)}
          </div>
        )}
      </div>

      {/* Botón de Siguiente */}
      {sel !== null && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={siguiente}
            style={{
              padding: "10px 24px",
              borderRadius: 8,
              background: C.accent,
              border: "none",
              color: "#fff",
              fontSize: "var(--fs-sm)",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            {qIdx + 1 < total ? "Siguiente Pregunta →" : "Ver Resultados Finales 🎉"}
          </button>
        </div>
      )}
    </div>
  );
}

// ── COMPONENTE PRINCIPAL APP ──────────────────────────────────────────────────
function AppContenido() {
  const { C } = useContext(ThemeCtx);
  const { scaleIdx, aumentar, reducir, escalaActual } = useFontSize();
  const { progreso, marcarVisitado, guardarQuiz } = useProgreso();

  const [sidebarAbierto, setSidebarAbierto] = useState(false);
  const [vista, setVista] = useState("tema"); // "tema" | "demostraciones" | "evaluaciones" | "documentos" | "creditos" | "quiz_modulo" | "quiz_general"
  const [temaActivoId, setTemaActivoId] = useState(TODOS_TEMAS[0].id);
  const [moduloQuizActivo, setModuloQuizActivo] = useState(null);

  const temaActual = TODOS_TEMAS.find(t => t.id === temaActivoId) || TODOS_TEMAS[0];
  const temaIndex = TODOS_TEMAS.findIndex(t => t.id === temaActual.id);

  // Marcar tema visitado al cambiar
  useEffect(() => {
    if (vista === "tema" && temaActual) {
      marcarVisitado(temaActual.id, temaActual.categoria);
    }
  }, [temaActual, vista, marcarVisitado]);

  // Iniciar Quiz de Módulo
  const iniciarQuizModulo = (catId) => {
    setModuloQuizActivo(catId);
    setVista("quiz_modulo");
    setSidebarAbierto(false);
  };

  // Iniciar Quiz General o de Unidad desde Centro de Evaluaciones
  const iniciarQuizEvaluacion = (tipo) => {
    if (tipo === "global") {
      setModuloQuizActivo("global");
      setVista("quiz_general");
    } else {
      setModuloQuizActivo(tipo);
      setVista("quiz_modulo");
    }
    setSidebarAbierto(false);
  };

  // Navegación secuencial de temas
  const anteriorTema = () => {
    if (temaIndex > 0) {
      setTemaActivoId(TODOS_TEMAS[temaIndex - 1].id);
      setVista("tema");
    }
  };

  const siguienteTema = () => {
    if (temaIndex < TODOS_TEMAS.length - 1) {
      setTemaActivoId(TODOS_TEMAS[temaIndex + 1].id);
      setVista("tema");
    }
  };

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden", background: C.bg, color: C.text }}>
      {/* Sidebar Lateral */}
      <Sidebar
        temaActivo={temaActivoId}
        setTemaActivo={setTemaActivoId}
        vista={vista}
        setVista={setVista}
        progreso={progreso}
        abierto={sidebarAbierto}
        setAbierto={setSidebarAbierto}
        aumentarFuente={aumentar}
        reducirFuente={reducir}
        escalaActual={escalaActual}
        onIniciarQuizModulo={iniciarQuizModulo}
      />

      {/* Área Principal de Contenido */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
        {/* Topbar */}
        <header
          style={{
            height: 52,
            minHeight: 52,
            borderBottom: `1px solid ${C.border}`,
            background: C.surface,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
            zIndex: 100,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={() => setSidebarAbierto(true)}
              className="topbar-mobile"
              style={{
                background: "transparent",
                border: "none",
                color: C.text,
                fontSize: 20,
                cursor: "pointer",
                padding: 4,
                display: "none",
              }}
            >
              ☰
            </button>
            <span style={{ fontWeight: 700, fontSize: "var(--fs-sm)", color: C.text }}>
              {vista === "tema" && temaActual?.titulo}
              {vista === "demostraciones" && "📜 Simulador de Demostraciones"}
              {vista === "evaluaciones" && "🎯 Centro de Evaluaciones"}
              {vista === "documentos" && "📄 Documentos Básicos PALMAT"}
              {vista === "creditos" && "ℹ️ Créditos Institucionales"}
              {vista === "quiz_modulo" && "📝 Evaluación de Unidad"}
              {vista === "quiz_general" && "🎓 Examen Global Integrador"}
            </span>
          </div>

          {/* Controles de Navegación Rápida */}
          {vista === "tema" && (
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <button
                onClick={anteriorTema}
                disabled={temaIndex === 0}
                style={{
                  padding: "4px 8px",
                  borderRadius: 6,
                  background: C.surface2,
                  border: `1px solid ${C.border}`,
                  color: temaIndex === 0 ? C.muted : C.text,
                  cursor: temaIndex === 0 ? "not-allowed" : "pointer",
                  fontSize: "var(--fs-xs)",
                }}
              >
                ◀ Ant
              </button>
              <span style={{ fontSize: "11px", color: C.muted }}>
                {temaIndex + 1}/{TODOS_TEMAS.length}
              </span>
              <button
                onClick={siguienteTema}
                disabled={temaIndex === TODOS_TEMAS.length - 1}
                style={{
                  padding: "4px 8px",
                  borderRadius: 6,
                  background: C.surface2,
                  border: `1px solid ${C.border}`,
                  color: temaIndex === TODOS_TEMAS.length - 1 ? C.muted : C.text,
                  cursor: temaIndex === TODOS_TEMAS.length - 1 ? "not-allowed" : "pointer",
                  fontSize: "var(--fs-xs)",
                }}
              >
                Sig ▶
              </button>
            </div>
          )}
        </header>

        {/* Cuerpo con Scroll */}
        <main style={{ flex: 1, overflowY: "auto", position: "relative" }}>
          {vista === "tema" && (
            <VistaTema tema={temaActual} onIniciarQuizModulo={iniciarQuizModulo} />
          )}

          {vista === "demostraciones" && (
            <SimuladorDemostraciones />
          )}

          {vista === "evaluaciones" && (
            <CentroEvaluaciones
              onIniciarQuiz={iniciarQuizEvaluacion}
              progreso={progreso}
            />
          )}

          {vista === "documentos" && (
            <DocumentosBasicos />
          )}

          {vista === "creditos" && (
            <Creditos />
          )}

          {vista === "quiz_modulo" && (
            <SesionQuiz
              pool={QUIZZES.filter(q => {
                const cat = CATEGORIAS.find(c => c.id === moduloQuizActivo);
                return cat ? q.nivel === cat.nombre : true;
              })}
              nPreguntas={10}
              guardarQuiz={(aciertos, total) => guardarQuiz(aciertos, total, moduloQuizActivo)}
              onVolver={() => setVista("evaluaciones")}
              tituloModulo={CATEGORIAS.find(c => c.id === moduloQuizActivo)?.nombre || "Unidad"}
            />
          )}

          {vista === "quiz_general" && (
            <SesionQuiz
              pool={QUIZZES}
              nPreguntas={20}
              guardarQuiz={(aciertos, total) => guardarQuiz(aciertos, total, "global")}
              onVolver={() => setVista("evaluaciones")}
              tituloModulo="Examen Global Integrador"
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <FontSizeProvider>
        <AppContenido />
      </FontSizeProvider>
    </ThemeProvider>
  );
}
