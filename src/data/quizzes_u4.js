// NTE-UAN-APK-001 v1.3 — Banco de Reactivos: Unidad 4 (Funciones aritméticas)
// Licenciatura en Matemáticas — UAN (CBIMAT-256)

export const QUIZZES_U4 = [
  {
    id: "u4_q1",
    nivel: "Funciones aritméticas",
    pregunta: "¿Cuál es el valor del número de divisores \\(d(360)\\)?",
    opciones: [
      "\\(18\\)",
      "\\(24\\)",
      "\\(36\\)",
      "\\(48\\)"
    ],
    correcta: 1,
    explicacion: "Factorización: \\(360 = 2^3 \\cdot 3^2 \\cdot 5^1\\). La fórmula es \\(d(n) = (a_1+1)(a_2+1)(a_3+1) = (3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24\\)."
  },
  {
    id: "u4_q2",
    nivel: "Funciones aritméticas",
    pregunta: "¿Cuál es el valor de la función suma de divisores \\(\\sigma(12)\\)?",
    opciones: [
      "\\(16\\)",
      "\\(24\\)",
      "\\(28\\)",
      "\\(36\\)"
    ],
    correcta: 2,
    explicacion: "Divisores de 12: \\(1, 2, 3, 4, 6, 12\\). Su suma es \\(1 + 2 + 3 + 4 + 6 + 12 = 28\\)."
  },
  {
    id: "u4_q3",
    nivel: "Funciones aritméticas",
    pregunta: "¿Cuál es la definición estricta de un número perfecto en teoría de números?",
    opciones: [
      "Un entero \\(n\\) tal que \\(\\sigma(n) = n\\).",
      "Un entero \\(n\\) tal que la suma de sus divisores propios es igual a \\(n\\), es decir, \\(\\sigma(n) = 2n\\).",
      "Un entero \\(n\\) que tiene exactamente 2 factores primos.",
      "Un entero que es a la vez primo y cuadrado perfecto."
    ],
    correcta: 1,
    explicacion: "Un número \\(n\\) es perfecto si es igual a la suma de sus divisores positivos menores que él (divisores propios), lo cual equivale a que \\(\\sigma(n) = 2n\\)."
  },
  {
    id: "u4_q4",
    nivel: "Funciones aritméticas",
    pregunta: "Por el Teorema de Euclides-Euler, ¿cuál de los siguientes es el segundo número perfecto par?",
    opciones: [
      "\\(6\\)",
      "\\(28\\)",
      "\\(496\\)",
      "\\(8128\\)"
    ],
    correcta: 1,
    explicacion: "Los primeros números perfectos pares son: \\(2^1(2^2-1) = 6\\), \\(2^2(2^3-1) = 28\\), \\(2^4(2^5-1) = 496\\), y \\(2^6(2^7-1) = 8128\\)."
  },
  {
    id: "u4_q5",
    nivel: "Funciones aritméticas",
    pregunta: "¿Cuál es el valor de la función totatriz \\(\\phi(60)\\) de Euler?",
    opciones: [
      "\\(12\\)",
      "\\(16\\)",
      "\\(24\\)",
      "\\(32\\)"
    ],
    correcta: 1,
    explicacion: "\\(60 = 2^2 \\cdot 3 \\cdot 5\\). Aplicando \\(\\phi(n) = n \\prod_{p \\mid n} (1 - 1/p) = 60(1 - 1/2)(1 - 1/3)(1 - 1/5) = 60 \\cdot \\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{4}{5} = 16\\)."
  },
  {
    id: "u4_q6",
    nivel: "Funciones aritméticas",
    pregunta: "¿Cuál es el valor de la función de Möbius \\(\\mu(30)\\)?",
    opciones: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "\\(30\\)"
    ],
    correcta: 2,
    explicacion: "\\(30 = 2 \\cdot 3 \\cdot 5\\) es producto de \\(k = 3\\) factores primos distintos (libre de cuadrados). Por tanto, \\(\\mu(30) = (-1)^3 = -1\\)."
  },
  {
    id: "u4_q7",
    nivel: "Funciones aritméticas",
    pregunta: "¿Qué valor toma la función de Möbius \\(\\mu(n)\\) si \\(n\\) es divisible por un cuadrado perfecto mayor a 1 (por ejemplo, \\(n = 12 = 2^2 \\cdot 3\\))?",
    opciones: [
      "\\(\\mu(n) = 0\\)",
      "\\(\\mu(n) = 1\\)",
      "\\(\\mu(n) = -1\\)",
      "\\(\\mu(n) = \\infty\\)"
    ],
    correcta: 0,
    explicacion: "Por definición de la función de Möbius, si \\(p^2 \\mid n\\) para algún primo \\(p\\), entonces \\(\\mu(n) = 0\\)."
  },
  {
    id: "u4_q8",
    nivel: "Funciones aritméticas",
    pregunta: "¿Qué significa que una función aritmética no nula \\(f\\) sea multiplicativa?",
    opciones: [
      "\\(f(a + b) = f(a) + f(b)\\) para todo \\(a, b\\).",
      "\\(f(a \\cdot b) = f(a) \\cdot f(b)\\) siempre que \\(\\operatorname{mcd}(a, b) = 1\\).",
      "\\(f(a \\cdot b) = f(a) + f(b)\\) para todo par de enteros.",
      "\\(f(n^k) = k \\cdot f(n)\\) para todo entero \\(k\\)."
    ],
    correcta: 1,
    explicacion: "Una función aritmética \\(f\\) es multiplicativa si preserva el producto para argumentos coprimos: \\(f(ab) = f(a)f(b)\\) si \\(\\operatorname{mcd}(a,b) = 1\\)."
  },
  {
    id: "u4_q9",
    nivel: "Funciones aritméticas",
    pregunta: "La Fórmula de Inversión de Möbius establece que si \\(g(n) = \\sum_{d \\mid n} f(d)\\), entonces la función original \\(f(n)\\) se recupera mediante:",
    opciones: [
      "\\(f(n) = \\sum_{d \\mid n} \\mu(d) g\\left(\\frac{n}{d}\\right)\\)",
      "\\(f(n) = \\sum_{d \\mid n} \\phi(d) g(d)\\)",
      "\\(f(n) = \\prod_{d \\mid n} g(d)^{\\mu(d)}\\)",
      "\\(f(n) = g(n) - g(1)\\)"
    ],
    correcta: 0,
    explicacion: "La Inversión de Möbius afirma que \\(f(n) = \\sum_{d \\mid n} \\mu(d) g(n/d) = \\sum_{d \\mid n} \\mu(n/d) g(d)\\)."
  },
  {
    id: "u4_q10",
    nivel: "Funciones aritméticas",
    pregunta: "¿Qué propiedad fundamental relaciona a la función \\(\\phi\\) de Euler con la suma sobre todos los divisores de \\(n\\)?",
    opciones: [
      "\\(\\sum_{d \\mid n} \\phi(d) = n\\)",
      "\\(\\sum_{d \\mid n} \\phi(d) = \\sigma(n)\\)",
      "\\(\\sum_{d \\mid n} \\phi(d) = d(n)^2\\)",
      "\\(\\sum_{d \\mid n} \\phi(d) = 2^n\\)"
    ],
    correcta: 0,
    explicacion: "Por la identidad de Gauss, la suma de los valores de \\(\\phi(d)\\) sobre todos los divisores positivos de \\(n\\) es exactamente igual a \\(n\\): \\(\\sum_{d \\mid n} \\phi(d) = n\\)."
  }
];
