// NTE-UAN-APK-001 v1.3 — Banco de Reactivos: Unidad 5 (Anillo de residuos módulo n)
// Licenciatura en Matemáticas — UAN (CBIMAT-256)

export const QUIZZES_U5 = [
  {
    id: "u5_q1",
    nivel: "Anillo de residuos módulo n",
    pregunta: "Si \\(a \\equiv b \\pmod m\\), ¿cuál de las siguientes afirmaciones es equivalente por definición?",
    opciones: [
      "\\(m\\) divide a la diferencia \\(a - b\\).",
      "\\(a\\) y \\(b\\) son ambos múltiplos de \\(m\\).",
      "\\(a + b = m\\).",
      "\\(\\operatorname{mcd}(a, b) = m\\)."
    ],
    correcta: 0,
    explicacion: "La relación de congruencia modular \\(a \\equiv b \\pmod m\\) se define formalmente como \\(m \\mid (a - b)\\)."
  },
  {
    id: "u5_q2",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Qué afirma el Teorema de Euler para enteros \\(a\\) y \\(m > 1\\) tales que \\(\\operatorname{mcd}(a, m) = 1\\)?",
    opciones: [
      "\\(a^m \\equiv 1 \\pmod m\\)",
      "\\(a^{\\phi(m)} \\equiv 1 \\pmod m\\)",
      "\\(a^{\\phi(m)} \\equiv 0 \\pmod m\\)",
      "\\(a^{m-1} \\equiv m \\pmod a\\)"
    ],
    correcta: 1,
    explicacion: "El Teorema de Euler generaliza el Pequeño Teorema de Fermat a módulos compuestos: si \\(\\operatorname{mcd}(a, m) = 1\\), entonces \\(a^{\\phi(m)} \\equiv 1 \\pmod m\\)."
  },
  {
    id: "u5_q3",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el inverso multiplicativo de \\(3\\) en el anillo de residuos \\(\\mathbb{Z}_{11}\\)?",
    opciones: [
      "\\(2\\)",
      "\\(4\\)",
      "\\(7\\)",
      "\\(8\\)"
    ],
    correcta: 1,
    explicacion: "Buscamos \\(x\\) tal que \\(3x \\equiv 1 \\pmod{11}\\). Evaluamos: \\(3 \\times 4 = 12 = 11(1) + 1 \\equiv 1 \\pmod{11}\\). Por tanto, \\(3^{-1} \\equiv 4 \\pmod{11}\\)."
  },
  {
    id: "u5_q4",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuántas unidades (elementos invertibles) tiene el anillo \\(\\mathbb{Z}_{24}\\)?",
    opciones: [
      "\\(6\\)",
      "\\(8\\)",
      "\\(12\\)",
      "\\(16\\)"
    ],
    correcta: 1,
    explicacion: "El número de unidades de \\(\\mathbb{Z}_m\\) es \\(\\phi(m)\\). Para \\(24 = 2^3 \\cdot 3\\): \\(\\phi(24) = 24(1 - 1/2)(1 - 1/3) = 24 \\cdot \\frac{1}{2} \\cdot \\frac{2}{3} = 8\\) unidades (1, 5, 7, 11, 13, 17, 19, 23)."
  },
  {
    id: "u5_q5",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es la solución de la congruencia lineal \\(5x \\equiv 2 \\pmod 7\\)?",
    opciones: [
      "\\(x \\equiv 1 \\pmod 7\\)",
      "\\(x \\equiv 3 \\pmod 7\\)",
      "\\(x \\equiv 6 \\pmod 7\\)",
      "\\(x \\equiv 4 \\pmod 7\\)"
    ],
    correcta: 2,
    explicacion: "Multiplicamos por el inverso de 5 mod 7 (que es 3, ya que \\(5 \\times 3 = 15 \\equiv 1\\)): \\(x \\equiv 2 \\times 3 = 6 \\pmod 7\\). Comprobamos: \\(5(6) = 30 = 4(7) + 2 \\equiv 2 \\pmod 7\\)."
  },
  {
    id: "u5_q6",
    nivel: "Anillo de residuos módulo n",
    pregunta: "Por el Teorema Chino del Residuo (CRT), ¿cuál es la solución única módulo \\(M = 35\\) del sistema \\(x \\equiv 2 \\pmod 5\\) y \\(x \\equiv 3 \\pmod 7\\)?",
    opciones: [
      "\\(x \\equiv 12 \\pmod{35}\\)",
      "\\(x \\equiv 17 \\pmod{35}\\)",
      "\\(x \\equiv 24 \\pmod{35}\\)",
      "\\(x \\equiv 32 \\pmod{35}\\)"
    ],
    correcta: 1,
    explicacion: "Verificamos: \\(17 \\equiv 2 \\pmod 5\\) (pues \\(17 = 5(3) + 2\\)) y \\(17 \\equiv 3 \\pmod 7\\) (pues \\(17 = 7(2) + 3\\)). Así, \\(x \\equiv 17 \\pmod{35}\\)."
  },
  {
    id: "u5_q7",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Qué es un número de Carmichael (o pseudoprimo absoluto)?",
    opciones: [
      "Un número primo de la forma \\(2^n + 1\\).",
      "Un número compuesto \\(n\\) que satisface \\(a^{n-1} \\equiv 1 \\pmod n\\) para toda base \\(a\\) coprima con \\(n\\).",
      "Un número par que no puede expresarse como suma de dos primos.",
      "Un número cuya suma de divisores es un número primo."
    ],
    correcta: 1,
    explicacion: "Un número de Carmichael (como el 561) es un entero compuesto que supera el test de primalidad de Fermat para todas las bases relativamente primas con él."
  },
  {
    id: "u5_q8",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuántas soluciones incongruentes módulo \\(m\\) tiene la congruencia lineal \\(ax \\equiv b \\pmod m\\) si \\(d = \\operatorname{mcd}(a, m)\\) divide a \\(b\\)?",
    opciones: [
      "Exactamente 1 solución.",
      "Exactamente \\(d\\) soluciones incongruentes.",
      "Exactamente \\(m\\) soluciones.",
      "Infinitas soluciones incongruentes."
    ],
    correcta: 1,
    explicacion: "Si \\(d = \\operatorname{mcd}(a, m) \\mid b\\), existen exactamente \\(d\\) soluciones mutuamente incongruentes módulo \\(m\\), espaciadas a intervalos de \\(m/d\\)."
  },
  {
    id: "u5_q9",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el residuo de \\(7^{82}\\) al dividirse entre \\(10\\) (es decir, la última cifra decimal de \\(7^{82}\\))?",
    opciones: [
      "\\(1\\)",
      "\\(3\\)",
      "\\(7\\)",
      "\\(9\\)"
    ],
    correcta: 3,
    explicacion: "Como \\(\\phi(10) = 4\\), por el Teorema de Euler \\(7^4 \\equiv 1 \\pmod{10}\\). Por tanto, \\(7^{82} = (7^4)^{20} \\cdot 7^2 \\equiv 1^{20} \\cdot 49 \\equiv 9 \\pmod{10}\\)."
  },
  {
    id: "u5_q10",
    nivel: "Anillo de residuos módulo n",
    pregunta: "En el criptosistema RSA, si la clave pública es \\((e, n) = (3, 33)\\) con \\(n = 3 \\times 11\\), ¿cuál es el valor de \\(\\phi(n)\\)?",
    opciones: [
      "\\(18\\)",
      "\\(20\\)",
      "\\(22\\)",
      "\\(30\\)"
    ],
    correcta: 1,
    explicacion: "Dado que \\(n = p \\cdot q = 3 \\cdot 11\\) con \\(p, q\\) primos, \\(\\phi(n) = (p-1)(q-1) = (3-1)(11-1) = 2 \\times 10 = 20\\)."
  }
];
