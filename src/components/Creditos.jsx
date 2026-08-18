import React, { useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { META } from "../data/contenido.js";

export function Creditos() {
  const { C } = useContext(ThemeCtx);

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
          Información Institucional & Licencia
        </span>
        <h2 style={{ fontSize: "var(--fs-xl)", color: C.text, fontWeight: 700, margin: "4px 0" }}>
          Créditos y Acervos Académicos
        </h2>
        <p style={{ color: C.muted, fontSize: "var(--fs-sm)", marginTop: 4 }}>
          Aplicación educativa desarrollada bajo la norma técnica institucional <strong>{META.norma}</strong> para la Universidad Autónoma de Nayarit.
        </p>
      </div>

      {/* Tarjeta de Ficha Técnica */}
      <div
        style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 14,
          padding: "var(--sp-md)",
          marginBottom: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: `${C.accent}22`,
              border: `1px solid ${C.accent}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
            }}
          >
            🔢
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: "var(--fs-lg)", color: C.text }}>
              {META.nombreCompleto}
            </h3>
            <div style={{ fontSize: "var(--fs-xs)", color: C.muted }}>
              Versión {META.version} · Actualización {META.anio} · CBIMAT-256
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
            background: C.surface2,
            padding: 14,
            borderRadius: 10,
            border: `1px solid ${C.border}`,
            fontSize: "var(--fs-xs)",
          }}
        >
          <div>
            <div style={{ color: C.muted }}>Autor y Docente Responsable:</div>
            <div style={{ color: C.text, fontWeight: 700, marginTop: 2 }}>{META.autor}</div>
          </div>
          <div>
            <div style={{ color: C.muted }}>Unidad Académica:</div>
            <div style={{ color: C.text, fontWeight: 600, marginTop: 2 }}>{META.unidad}</div>
          </div>
          <div>
            <div style={{ color: C.muted }}>Programa Académico:</div>
            <div style={{ color: C.text, fontWeight: 600, marginTop: 2 }}>{META.programa} (Plan 2024)</div>
          </div>
          <div>
            <div style={{ color: C.muted }}>Repositorio GitHub Oficial:</div>
            <div style={{ marginTop: 2 }}>
              <a
                href="https://github.com/PabloeCancino/uan-apk-teoria-de-numeros"
                target="_blank"
                rel="noreferrer"
                style={{ color: C.accent, textDecoration: "none", fontWeight: 600 }}
              >
                uan-apk-teoria-de-numeros ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bibliografía Básica y de Consulta Oficial */}
      <div
        style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 14,
          padding: "var(--sp-md)",
        }}
      >
        <h4 style={{ color: C.accent, fontSize: "var(--fs-md)", margin: "0 0 12px" }}>
          📚 Acervos Bibliográficos Básicos (Programa en Extenso)
        </h4>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: "var(--fs-xs)" }}>
          {[
            { autor: "APARICIO, E.", tit: "Teoría de los Números", ed: "Servicio Editorial Universidad del País Vasco, 1993." },
            { autor: "APOSTOL, T.M.", tit: "Introducción a la Teoría Analítica de Números", ed: "Editorial Reverté, 2002." },
            { autor: "APOSTOL, T.M.", tit: "Modular Functions and Dirichlet Series in Number Theory", ed: "Springer-Verlag, 1976." },
            { autor: "BAKER, A.", tit: "Breve Introducción a la Teoría Analítica de Números", ed: "Alianza Editorial, 1986." },
            { autor: "CILLERUELO, J. y CÓRDOBA, A.", tit: "La Teoría de los Números", ed: "Mondadori, 1992." },
            { autor: "DAVENPORT, H.", tit: "Multiplicative Number Theory", ed: "Springer, 2000." },
            { autor: "GENTILE, E.R.", tit: "Aritmética Elemental", ed: "Ed. Universidad de Buenos Aires y CONICET, 1985." },
            { autor: "HARDY, G. H. y WRIGHT, E. M.", tit: "An Introduction to the Theory of Numbers", ed: "Clarendon Press, Oxford, 1979." },
            { autor: "NARKIEWICZ, W.", tit: "The Development of Prime Number Theory", ed: "Springer, 2000." },
            { autor: "NEWMAN, D.J.", tit: "Analytic Number Theory", ed: "Springer, 2000." },
            { autor: "PEREZ SEGUÍ, M.L.", tit: "Teoría de Números", ed: "Universidad Nacional Autónoma de México, Instituto de Matemáticas, 2003." },
            { autor: "NIVEN, I. y ZUCKERMAN, H.S.", tit: "Introducción a la Teoría de los Números", ed: "Limusa-Wiley, 1999." },
          ].map((b, i) => (
            <div
              key={i}
              style={{
                background: C.surface2,
                padding: "8px 12px",
                borderRadius: 8,
                border: `1px solid ${C.border}`,
              }}
            >
              <strong style={{ color: C.text }}>{b.autor}</strong>: <em>{b.tit}</em>. {b.ed}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
