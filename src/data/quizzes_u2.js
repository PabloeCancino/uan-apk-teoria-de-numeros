// NTE-UAN-APK-001 v1.3 — Banco de Reactivos: Unidad 2 (Primalidad)
// Licenciatura en Matemáticas — UAN (CBIMAT-256)

export const QUIZZES_U2 = [
  {
    id: "u2_q1",
    nivel: "Primalidad",
    pregunta: "¿Qué afirma el Teorema Fundamental de la Aritmética?",
    opciones: [
      "Existen infinitos números primos de la forma \\(4k+1\\).",
      "Todo número entero \\(n > 1\\) se descompone de forma única como producto de factores primos, salvo el orden de los factores.",
      "Todo número par mayor que 2 es la suma de dos números primos.",
      "La función que cuenta primos \\(\\pi(x)\\) es exactamente igual a \\(x / \\ln(x)\\)."
    ],
    correcta: 1,
    explicacion: "El Teorema Fundamental de la Aritmética garantiza tanto la existencia como la unicidad esencial de la factorización prima canónica para todo entero \\(n > 1\\)."
  },
  {
    id: "u2_q2",
    nivel: "Primalidad",
    pregunta: "Al aplicar la Criba de Eratóstenes para encontrar todos los números primos menores o iguales a \\(n = 200\\), ¿hasta qué número primo es necesario tachar sus múltiplos?",
    opciones: [
      "Hasta \\(p = 7\\)",
      "Hasta \\(p = 13\\)",
      "Hasta \\(p = 17\\)",
      "Hasta \\(p = 19\\)"
    ],
    correcta: 1,
    explicacion: "Solo es necesario cribar los múltiplos de primos \\(p \\le \\sqrt{n}\\). Como \\(\\sqrt{200} \\approx 14.14\\), los primos a considerar son \\(2, 3, 5, 7, 11, 13\\)."
  },
  {
    id: "u2_q3",
    nivel: "Primalidad",
    pregunta: "¿Cuál es la descomposición canónica en factores primos de \\(n = 1960\\)?",
    opciones: [
      "\\(2^4 \\cdot 5 \\cdot 7^2\\)",
      "\\(2^3 \\cdot 5 \\cdot 7^2\\)",
      "\\(2^3 \\cdot 5^2 \\cdot 7\\)",
      "\\(2^2 \\cdot 5 \\cdot 7^3\\)"
    ],
    correcta: 1,
    explicacion: "Dividiendo sucesivamente: \\(1960 / 8 = 245\\); \\(245 / 5 = 49\\); \\(49 = 7^2\\). Por tanto, \\(1960 = 2^3 \\cdot 5 \\cdot 7^2\\)."
  },
  {
    id: "u2_q4",
    nivel: "Primalidad",
    pregunta: "¿Qué caracteriza a dos números enteros \\(a\\) y \\(b\\) como primos relativos o coprimos?",
    opciones: [
      "Ambos números son primos individuales.",
      "Su suma es un número primo.",
      "\\(\\operatorname{mcd}(a, b) = 1\\).",
      "Uno es par y el otro es impar."
    ],
    correcta: 2,
    explicacion: "Dos números son coprimos o primos relativos si y solo si su único divisor común positivo es el 1, es decir, \\(\\operatorname{mcd}(a, b) = 1\\)."
  },
  {
    id: "u2_q5",
    nivel: "Primalidad",
    pregunta: "El método de factorización de Fermat busca expresar un entero impar compuesto \\(N\\) como la diferencia de dos cuadrados:",
    opciones: [
      "\\(N = x^2 - y^2 = (x - y)(x + y)\\)",
      "\\(N = x^3 - y^3\\)",
      "\\(N = x^2 + y^2\\)",
      "\\(N = 2x^2 - y^2\\)"
    ],
    correcta: 0,
    explicacion: "El método de factorización de Fermat se fundamenta en la identidad algebraica \\(N = x^2 - y^2 = (x-y)(x+y)\\), siendo muy eficiente cuando los factores primos son cercanos a \\(\\sqrt{N}\\)."
  },
  {
    id: "u2_q6",
    nivel: "Primalidad",
    pregunta: "¿Cuál de los siguientes números es un número primo?",
    opciones: [
      "\\(91\\)",
      "\\(119\\)",
      "\\(127\\)",
      "\\(143\\)"
    ],
    correcta: 2,
    explicacion: "\\(91 = 7 \\cdot 13\\), \\(119 = 7 \\cdot 17\\), \\(143 = 11 \\cdot 13\\). El número 127 no es divisible por ningún primo menor a \\(\\sqrt{127} \\approx 11.26\\) (2, 3, 5, 7, 11), por lo que es primo."
  },
  {
    id: "u2_q7",
    nivel: "Primalidad",
    pregunta: "¿En qué problema de la teoría de números se basa la seguridad del criptosistema asimétrico RSA?",
    opciones: [
      "El cálculo del mínimo común múltiplo.",
      "La dificultad computacional de factorizar el producto de dos números primos grandes.",
      "La suma de divisores de números pares.",
      "La generación de ternas pitagóricas."
    ],
    correcta: 1,
    explicacion: "El algoritmo RSA basa su seguridad en la asimetría computacional entre multiplicar dos primos grandes (operación rápida) y factorizar su producto \\(n = pq\\) sin conocer \\(p\\) o \\(q\\) (problema intratable para números grandes)."
  },
  {
    id: "u2_q8",
    nivel: "Primalidad",
    pregunta: "Si \\(p\\) es un número primo y \\(a, b \\in \\mathbb{Z}\\) cumplen \\(a \\cdot b \\equiv 0 \\pmod p\\), ¿qué propiedad de los cuerpos se deduce para \\(\\mathbb{Z}_p\\)?",
    opciones: [
      "\\(\\mathbb{Z}_p\\) contiene divisores de cero no nulos.",
      "\\(\\mathbb{Z}_p\\) es un dominio de integridad y cuerpo finito.",
      "\\(\\mathbb{Z}_p\\) tiene infinitos ideales maximales.",
      "\\(\\mathbb{Z}_p\\) no posee elemento neutro multiplicativo."
    ],
    correcta: 1,
    explicacion: "Al ser \\(p\\) primo, \\(ab \\equiv 0 \\pmod p\\) implica \\(a \\equiv 0\\) o \\(b \\equiv 0\\), careciendo de divisores de cero propios, lo que convierte a \\(\\mathbb{Z}/p\\mathbb{Z}\\) en un dominio de integridad y, por ser finito, en un cuerpo \\(\\mathbb{F}_p\\)."
  },
  {
    id: "u2_q9",
    nivel: "Primalidad",
    pregunta: "¿Cuál es el menor entero positivo que tiene exactamente 3 divisores positivos?",
    opciones: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(6\\)",
      "\\(9\\)"
    ],
    correcta: 1,
    explicacion: "Un número tiene exactamente 3 divisores si y solo si es el cuadrado de un primo \\(p^2\\) (sus divisores son \\(1, p, p^2\\)). Para el menor primo \\(p=2\\), tenemos \\(2^2 = 4\\) (divisores: 1, 2, 4)."
  },
  {
    id: "u2_q10",
    nivel: "Primalidad",
    pregunta: "El Teorema de los Números Primos describe el comportamiento asintótico de \\(\\pi(x)\\) cuando \\(x \\to \\infty\\) como:",
    opciones: [
      "\\(\\pi(x) \\sim \\frac{x}{\\ln x}\\)",
      "\\(\\pi(x) \\sim \\frac{x^2}{2}\\)",
      "\\(\\pi(x) \\sim e^x\\)",
      "\\(\\pi(x) \\sim x \\ln x\\)"
    ],
    correcta: 0,
    explicacion: "El Teorema de los Números Primos (demostrado independientemente por Hadamard y de la Vallée Poussin en 1896) establece que \\(\\lim_{x \\to \\infty} \\frac{\\pi(x)}{x / \\ln x} = 1\\)."
  }
];
