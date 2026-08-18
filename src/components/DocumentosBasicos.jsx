import React, { useState, useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { renderTextWithMath } from "./Formula";

export function DocumentosBasicos() {
  const { C } = useContext(ThemeCtx);
  const [docActivo, setDocActivo] = useState("programa"); // "programa" | "linea" | "acreditacion"

  return (
    <div className="fade-slide-in contenido-vista">
      {/* Encabezado */}
      <div style={{ marginBottom: 16 }}>
        <span
          style={{
            fontSize: "var(--fs-xs)",
            color: C.accent,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Documentos Básicos e Institucionales UAN
        </span>
        <h2 style={{ fontSize: "var(--fs-xl)", color: C.text, fontWeight: 700, margin: "4px 0" }}>
          Fundamentación Curricular y Programa Oficial
        </h2>
        <p style={{ color: C.muted, fontSize: "var(--fs-sm)", marginTop: 4 }}>
          Consulte los documentos rectores del Programa Académico de la Licenciatura en Matemáticas (PALMAT) de la Universidad Autónoma de Nayarit.
        </p>
      </div>

      {/* Selector de Documentos */}
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 8, marginBottom: 16 }}>
        {[
          { id: "programa", nombre: "📄 Programa en Extenso (CBIMAT-256)", color: "#e3b341" },
          { id: "linea", nombre: "🗺️ Línea de Formación: Álgebra", color: "#58a6ff" },
          { id: "acreditacion", nombre: "⚖️ Sistema de Evaluación y Criterios", color: "#3fb950" },
        ].map(d => (
          <button
            key={d.id}
            onClick={() => setDocActivo(d.id)}
            style={{
              padding: "8px 14px",
              borderRadius: 8,
              fontSize: "var(--fs-sm)",
              fontWeight: 600,
              whiteSpace: "nowrap",
              cursor: "pointer",
              border: docActivo === d.id ? `1px solid ${d.color}` : `1px solid ${C.border}`,
              background: docActivo === d.id ? `${d.color}22` : C.surface,
              color: docActivo === d.id ? d.color : C.muted,
              transition: "all 0.2s ease",
            }}
          >
            {d.nombre}
          </button>
        ))}
      </div>

      {/* Contenedor del Documento */}
      <div
        style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 14,
          padding: "var(--sp-md)",
          color: C.text,
          lineHeight: 1.6,
        }}
      >
        {/* DOCUMENTO 1: PROGRAMA EN EXTENSO */}
        {docActivo === "programa" && (
          <div>
            <div style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "11px", color: C.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                UNIVERSIDAD AUTÓNOMA DE NAYARIT · SECRETARÍA ACADÉMICA · DIRECCIÓN DE EDUCACIÓN SUPERIOR
              </div>
              <h3 style={{ fontSize: "var(--fs-lg)", margin: "4px 0", color: C.text }}>
                PROGRAMA DE ESTUDIOS EN EXTENSO: TEORÍA DE NÚMEROS (CBIMAT-256)
              </h3>
              <div style={{ color: C.muted, fontSize: "var(--fs-xs)" }}>
                Licenciatura en Matemáticas (PALMAT) · Plan 2024 · Revisado y Aprobado
              </div>
            </div>

            {/* Ficha de Identificación */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 10,
              background: C.surface2,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: 12,
              marginBottom: 16,
              fontSize: "var(--fs-xs)"
            }}>
              <div><strong>Clave de UA:</strong> CBIMAT-256</div>
              <div><strong>Docente Responsable:</strong> Dr. Pablo Eduardo Cancino Marentes</div>
              <div><strong>Área de Formación:</strong> Disciplinar - Profesionalizante</div>
              <div><strong>Línea de Formación:</strong> Álgebra (Posición 6,5)</div>
              <div><strong>Tipo de UA:</strong> Obligatoria (Curso - Taller)</div>
              <div><strong>Horas Teoría / Práctica:</strong> 48 h Teoría / 32 h Práctica / 48 h Indep.</div>
              <div><strong>Total de Horas:</strong> 128 horas</div>
              <div><strong>Valor en Créditos:</strong> 8 Créditos</div>
            </div>

            {/* Presentación */}
            <h4 style={{ color: C.accent, fontSize: "var(--fs-md)", marginTop: 16, marginBottom: 6 }}>
              1. Presentación y Justificación
            </h4>
            <p style={{ fontSize: "var(--fs-sm)", color: C.text, marginBottom: 12 }}>
              {renderTextWithMath("La teoría de números es la rama de las matemáticas puras que estudia las propiedades de los números, centrándose de manera particular en el conjunto de los enteros \\(\\mathbb{Z}\\), pero más en general en las estructuras de \"Dominios Enteros\". Su estudio favorece la comprensión profunda de las estructuras numéricas que dan base a los sistemas de numeración y establecen los cimientos de los números algebraicos y la criptografía moderna.")}
            </p>

            {/* Unidad de Competencia */}
            <h4 style={{ color: C.accent, fontSize: "var(--fs-md)", marginTop: 16, marginBottom: 6 }}>
              2. Unidad de Competencia
            </h4>
            <div style={{
              background: `${C.accent}12`,
              borderLeft: `3px solid ${C.accent}`,
              padding: "10px 14px",
              borderRadius: 6,
              fontSize: "var(--fs-sm)",
              marginBottom: 16,
            }}>
              El estudiante adquirirá competencias para manejar eficientemente los métodos analíticos y algebraicos de la Teoría de los Números: divisibilidad, números primos, congruencias, funciones aritméticas, ecuaciones diofánticas y métodos de partición, demostrando rigurosamente principios clave como el Axioma del Buen Orden, el Teorema Fundamental de la Aritmética, el Teorema de Bézout, el Teorema de Wilson y el Pequeño Teorema de Fermat.
            </div>

            {/* Desglose de Unidades */}
            <h4 style={{ color: C.accent, fontSize: "var(--fs-md)", marginTop: 16, marginBottom: 8 }}>
              3. Desglose de Unidades Curriculares
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "var(--fs-sm)" }}>
              {[
                { num: "I", tit: "El anillo de los enteros Z", desc: "Axiomas de Peano, Buen Orden, Inducción, Divisibilidad, Algoritmo de Euclides, Identidad de Bézout, Ecuaciones Diofánticas Lineales y Ternas Pitagóricas." },
                { num: "II", tit: "Primalidad y Factorización", desc: "Números primos y coprimos, Criba de Eratóstenes, Teorema Fundamental de la Aritmética, Métodos de Factorización (Fermat, diferencias de cuadrados)." },
                { num: "III", tit: "Elementos de Combinatoria y Teoremas Clásicos", desc: "Conjuntos finitos, permutaciones y combinaciones, Triángulo de Pascal, Teorema de Wilson y Teorema de Fermat." },
                { num: "IV", tit: "Funciones Aritméticas", desc: "Suma de divisores sigma(n), conteo d(n), números perfectos y de Mersenne, función phi de Euler y función mu de Möbius." },
                { num: "V", tit: "Anillo de Residuos Módulo n (Z/nZ)", desc: "Congruencias, sistemas de residuos, Teorema de Euler, unidades e inversos, congruencias lineales y Teorema Chino del Residuo (CRT)." },
              ].map(u => (
                <div key={u.num} style={{ background: C.surface2, padding: "8px 12px", borderRadius: 8, border: `1px solid ${C.border}` }}>
                  <strong style={{ color: C.accent }}>Unidad {u.num}: {u.tit}</strong>
                  <div style={{ color: C.muted, fontSize: "var(--fs-xs)", marginTop: 2 }}>{u.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DOCUMENTO 2: LÍNEA DE ÁLGEBRA */}
        {docActivo === "linea" && (
          <div>
            <h3 style={{ fontSize: "var(--fs-lg)", color: C.text, marginBottom: 8 }}>
              🗺️ Articulación Curricular: Línea de Formación en Álgebra
            </h3>
            <p style={{ fontSize: "var(--fs-sm)", color: C.muted, marginBottom: 16 }}>
              La UA de Teoría de Números se ubica en el 5° semestre del PALMAT Plan 2024, actuando como culminación de la formación algebraica fundamental y puente con las Matemáticas Discretas.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10, fontSize: "var(--fs-xs)" }}>
              <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 12 }}>
                <strong style={{ color: C.blue, fontSize: "var(--fs-sm)" }}>🔗 Antecedentes Directos</strong>
                <ul style={{ marginTop: 6, paddingLeft: 16, color: C.text }}>
                  <li>Álgebra Superior I y II</li>
                  <li>Estructuras Algebraicas (Grupos y Anillos)</li>
                  <li>Álgebra Lineal</li>
                </ul>
              </div>
              <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 12 }}>
                <strong style={{ color: C.green, fontSize: "var(--fs-sm)" }}>🎯 Materia Actual (Posición 6,5)</strong>
                <ul style={{ marginTop: 6, paddingLeft: 16, color: C.text }}>
                  <li><strong>Teoría de Números (CBIMAT-256)</strong></li>
                  <li>8 Créditos · 128 Horas</li>
                  <li>5° Semestre PALMAT</li>
                </ul>
              </div>
              <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 8, padding: 12 }}>
                <strong style={{ color: C.purple, fontSize: "var(--fs-sm)" }}>🚀 Consecuentes y Aplicaciones</strong>
                <ul style={{ marginTop: 6, paddingLeft: 16, color: C.text }}>
                  <li>Matemáticas Discretas</li>
                  <li>Criptografía y Seguridad Informática</li>
                  <li>Geometría Algebraica y Curvas Elípticas</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* DOCUMENTO 3: ACREDITACIÓN Y EVALUACIÓN */}
        {docActivo === "acreditacion" && (
          <div>
            <h3 style={{ fontSize: "var(--fs-lg)", color: C.text, marginBottom: 8 }}>
              ⚖️ Sistema de Evaluación y Criterios de Acreditación
            </h3>
            <p style={{ fontSize: "var(--fs-sm)", color: C.muted, marginBottom: 16 }}>
              Ponderación oficial según el programa en extenso registrado ante el H. Consejo Técnico de Ciencias Básicas e Ingenierías.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 16 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--fs-sm)" }}>
                <thead>
                  <tr style={{ background: C.surface2, borderBottom: `2px solid ${C.accent}` }}>
                    <th style={{ padding: "8px 12px", textAlign: "left" }}>Evidencia de Aprendizaje</th>
                    <th style={{ padding: "8px 12px", textAlign: "center" }}>Ponderación</th>
                    <th style={{ padding: "8px 12px", textAlign: "left" }}>Criterio de Desempeño</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Examen Escrito / Práctico", "40%", "Resolución individual rigurosa de problemas teórico-analíticos."],
                    ["Rúbrica de Portafolio", "20%", "Compilación de demostraciones y ejercicios resueltos formalmente."],
                    ["Rúbrica de Exposición Temática", "20%", "Presentación en equipo de tópicos avanzados de Teoría de Números."],
                    ["Rúbrica de Caso Integrador", "10%", "Aplicación práctica o computacional (criptografía, algoritmos)."],
                    ["Lista de Asistencia y Participación", "10%", "Intervención argumentada y colaborativa en sesiones."],
                  ].map(([ev, pond, crit], i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
                      <td style={{ padding: "8px 12px", fontWeight: 600, color: C.text }}>{ev}</td>
                      <td style={{ padding: "8px 12px", textAlign: "center", fontWeight: 700, color: C.accent }}>{pond}</td>
                      <td style={{ padding: "8px 12px", color: C.muted, fontSize: "var(--fs-xs)" }}>{crit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ background: C.surface2, borderRadius: 8, padding: 12, border: `1px solid ${C.border}`, fontSize: "var(--fs-xs)" }}>
              <strong>Requisitos de Acreditación:</strong> Calificación mínima aprobatoria de <strong>60/100</strong>, entrega del <strong>100%</strong> de evidencias y asistencia mínima del <strong>80%</strong> a las sesiones.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
