// NTE-UAN-APK-001 v1.3 — Banco de Reactivos: Unidad 3 (Elementos de combinatoria)
// Licenciatura en Matemáticas — UAN (CBIMAT-256)

export const QUIZZES_U3 = [
  {
    id: "u3_q1",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es el valor del coeficiente binomial \\(\\binom{8}{3}\\)?",
    opciones: [
      "\\(24\\)",
      "\\(56\\)",
      "\\(112\\)",
      "\\(336\\)"
    ],
    correcta: 1,
    explicacion: "\\(\\binom{8}{3} = \\frac{8!}{3!(8-3)!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56\\)."
  },
  {
    id: "u3_q2",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Qué propiedad fundamental del Triángulo de Pascal permite calcular recursivamente sus elementos?",
    opciones: [
      "\\(\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}\\)",
      "\\(\\binom{n}{k} = \\binom{n-1}{k-1} \\cdot \\binom{n-1}{k}\\)",
      "\\(\\binom{n}{k} = \\binom{n}{k-1} + 1\\)",
      "\\(\\binom{n}{k} = \\frac{n}{k} + \\binom{n-1}{k}\\)"
    ],
    correcta: 0,
    explicacion: "La Identidad de Pascal \\(\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}\\) define la suma aditiva de elementos adyacentes de la fila anterior en el Triángulo de Pascal."
  },
  {
    id: "u3_q3",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Qué afirma el Teorema de Wilson para un entero \\(p > 1\\)?",
    opciones: [
      "\\(p\\) es primo si y solo si \\(2^p - 1\\) es primo.",
      "\\(p\\) es primo si y solo si \\((p - 1)! \\equiv -1 \\pmod p\\).",
      "\\(p\\) es primo si y solo si \\(p! \\equiv 0 \\pmod{p^2}\\).",
      "\\(p\\) divide a \\(a^p - a\\) solo si \\(a\\) es primo."
    ],
    correcta: 1,
    explicacion: "El Teorema de Wilson es un criterio analítico exacto de primalidad que establece: \\(p \\in \\mathbb{P} \\iff (p-1)! \\equiv -1 \\pmod p\\)."
  },
  {
    id: "u3_q4",
    nivel: "Elementos de combinatoria",
    pregunta: "Por el Teorema de Wilson, ¿cuál es el residuo de \\(16!\\) al dividirse entre \\(17\\)?",
    opciones: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(15\\)",
      "\\(16\\)"
    ],
    correcta: 3,
    explicacion: "Como 17 es primo, por el Teorema de Wilson \\(16! \\equiv -1 \\equiv 16 \\pmod{17}\\)."
  },
  {
    id: "u3_q5",
    nivel: "Elementos de combinatoria",
    pregunta: "Si \\(p\\) es un número primo y \\(1 \\le k \\le p-1\\), ¿cuál de las siguientes afirmaciones sobre el coeficiente binomial \\(\\binom{p}{k}\\) es correcta?",
    opciones: [
      "\\(\\binom{p}{k}\\) siempre es un número impar.",
      "\\(p\\) divide exactamente al entero \\(\\binom{p}{k}\\).",
      "\\(\\binom{p}{k} = p!\\)",
      "\\(\\binom{p}{k}\\) nunca es divisible por \\(p\\)."
    ],
    correcta: 1,
    explicacion: "Dado que \\(\\binom{p}{k} = \\frac{p!}{k!(p-k)!}\\), el factor primo \\(p\\) en el numerador no puede cancelarse con los factores del denominador (ya que todos son menores a \\(p\\)), por lo que \\(p \\mid \\binom{p}{k}\\)."
  },
  {
    id: "u3_q6",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es la suma de todos los coeficientes binomiales de la fila \\(n\\) del Triángulo de Pascal: \\(\\sum_{k=0}^n \\binom{n}{k}\\)?",
    opciones: [
      "\\(n^2\\)",
      "\\(2^n\\)",
      "\\(n!\\)",
      "\\(2^{n-1}\\)"
    ],
    correcta: 1,
    explicacion: "Sustituyendo \\(x = 1, y = 1\\) en el Teorema del Binomio \\((x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k\\), obtenemos \\((1+1)^n = 2^n\\)."
  },
  {
    id: "u3_q7",
    nivel: "Elementos de combinatoria",
    pregunta: "En el Pequeño Teorema de Fermat, si \\(p\\) es un número primo y \\(a\\) es cualquier número entero, se cumple la congruencia:",
    opciones: [
      "\\(a^p \\equiv a \\pmod p\\)",
      "\\(a^{p+1} \\equiv 1 \\pmod p\\)",
      "\\(a^{p-1} \\equiv p \\pmod a\\)",
      "\\(a^p \\equiv 0 \\pmod p\\)"
    ],
    correcta: 0,
    explicacion: "La forma universal del Pequeño Teorema de Fermat (válida para todo entero \\(a\\), sea o no coprimo con \\(p\\)) es \\(a^p \\equiv a \\pmod p\\)."
  },
  {
    id: "u3_q8",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántas permutaciones distintas pueden formarse con las letras de la palabra MATEMATICA?",
    opciones: [
      "\\(151200\\)",
      "\\(302400\\)",
      "\\(604800\\)",
      "\\(3628800\\)"
    ],
    correcta: 0,
    explicacion: "Total de letras: 10 (M: 2, A: 3, T: 2, E: 1, I: 1, C: 1). Permutaciones con repetición: \\(PR_{10}^{2,3,2,1,1,1} = \\frac{10!}{2! \\cdot 3! \\cdot 2!} = \\frac{3628800}{2 \\times 6 \\times 2} = 151200\\)."
  },
  {
    id: "u3_q9",
    nivel: "Elementos de combinatoria",
    pregunta: "El principio del palomar (o de las casillas de Dirichlet) garantiza que si se distribuyen \\(n + 1\\) objetos en \\(n\\) cajas:",
    opciones: [
      "Todas las cajas tendrán exactamente 1 objeto.",
      "Al menos una caja contendrá 2 o más objetos.",
      "Al menos una caja quedará vacía.",
      "La suma de los objetos en cada caja es constante."
    ],
    correcta: 1,
    explicacion: "El Principio del Palomar establece que si el número de elementos excede al número de contenedores, al menos un contenedor albergará dos o más elementos."
  },
  {
    id: "u3_q10",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es el residuo de \\(3^{100}\\) al dividirse entre el primo \\(p = 101\\)?",
    opciones: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(3\\)",
      "\\(100\\)"
    ],
    correcta: 1,
    explicacion: "Como \\(p = 101\\) es primo y \\(\\operatorname{mcd}(3, 101) = 1\\), por el Pequeño Teorema de Fermat \\(3^{101-1} = 3^{100} \\equiv 1 \\pmod{101}\\)."
  }
];
