// NTE-UAN-APK-001 v1.4 — Banco de Reactivos: Unidad 3 (Elementos de combinatoria)
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
  },
  {
    id: "u3_q11",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántas combinaciones de 5 elementos se pueden elegir de un conjunto de 12?",
    opciones: [
      "\\(60\\)",
      "\\(792\\)",
      "\\(95040\\)",
      "\\(248832\\)"
    ],
    correcta: 1,
    explicacion: "\\(\\binom{12}{5} = \\frac{12!}{5! \\cdot 7!} = \\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{5!} = \\frac{95040}{120} = 792\\)."
  },
  {
    id: "u3_q12",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es el coeficiente del término \\(x^3 y^4\\) en la expansión de \\((x + y)^7\\)?",
    opciones: [
      "\\(21\\)",
      "\\(35\\)",
      "\\(70\\)",
      "\\(84\\)"
    ],
    correcta: 1,
    explicacion: "Por el Teorema del Binomio, el coeficiente de \\(x^3 y^4\\) en \\((x+y)^7\\) es \\(\\binom{7}{3} = \\frac{7!}{3!4!} = 35\\)."
  },
  {
    id: "u3_q13",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántos anagramas tiene la palabra MISSISSIPPI?",
    opciones: [
      "\\(34650\\)",
      "\\(69300\\)",
      "\\(11!/4!4!2!\\)",
      "Las opciones A y C son equivalentes."
    ],
    correcta: 3,
    explicacion: "MISSISSIPPI tiene 11 letras: M(1), I(4), S(4), P(2). Permutaciones: \\(\\frac{11!}{1! \\cdot 4! \\cdot 4! \\cdot 2!} = \\frac{39916800}{1 \\times 24 \\times 24 \\times 2} = 34650\\). Las opciones A y C son iguales."
  },
  {
    id: "u3_q14",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántas formas hay de distribuir 10 pelotas idénticas en 4 cajas distintas?",
    opciones: [
      "\\(286\\)",
      "\\(715\\)",
      "\\(1001\\)",
      "\\(10^4\\)"
    ],
    correcta: 0,
    explicacion: "Por estrellas y barras (stars and bars), el número de distribuciones de \\(n\\) objetos idénticos en \\(k\\) cajas distintas es \\(\\binom{n+k-1}{k-1} = \\binom{10+4-1}{4-1} = \\binom{13}{3} = 286\\)."
  },
  {
    id: "u3_q15",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es el número de subconjuntos de un conjunto de \\(n\\) elementos?",
    opciones: [
      "\\(n!\\)",
      "\\(n^2\\)",
      "\\(2^n\\)",
      "\\(n(n-1)/2\\)"
    ],
    correcta: 2,
    explicacion: "Cada elemento puede estar o no estar en un subconjunto (2 opciones). Por el principio multiplicativo, hay \\(2^n\\) subconjuntos en total (incluyendo el vacío y el conjunto completo)."
  },
  {
    id: "u3_q16",
    nivel: "Elementos de combinatoria",
    pregunta: "Por el principio de inclusión-exclusión, ¿cuántos enteros del 1 al 100 no son divisibles por 2, 3 ni 5?",
    opciones: [
      "\\(24\\)",
      "\\(26\\)",
      "\\(27\\)",
      "\\(30\\)"
    ],
    correcta: 1,
    explicacion: "\\(|A_2 \\cup A_3 \\cup A_5| = 50+33+20-16-10-6+3 = 74\\). Los no divisibles son \\(100-74=26\\)."
  },
  {
    id: "u3_q17",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es el residuo de \\(2^{100}\\) al dividirse entre 13?",
    opciones: [
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(12\\)"
    ],
    correcta: 0,
    explicacion: "\\(\\phi(13) = 12\\) y \\(\\operatorname{mcd}(2,13)=1\\). Por el Teorema de Euler: \\(2^{12} \\equiv 1 \\pmod{13}\\). Ahora \\(100 = 12(8) + 4\\), entonces \\(2^{100} = (2^{12})^8 \\cdot 2^4 \\equiv 1^8 \\cdot 16 \\equiv 3 \\pmod{13}\\). La respuesta correcta es 3."
  },
  {
    id: "u3_q18",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántas permutaciones de las letras A, B, C, D, E comienzan con A o terminan con E?",
    opciones: [
      "\\(36\\)",
      "\\(48\\)",
      "\\(72\\)",
      "\\(96\\)"
    ],
    correcta: 1,
    explicacion: "Comienzan con A: \\(4! = 24\\). Terminan con E: \\(4! = 24\\). Comienzan con A y terminan con E: \\(3! = 6\\). Por inclusión-exclusión: \\(24+24-6=42\\)."
  },
  {
    id: "u3_q19",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántos números enteros positivos menores que 1000 son divisibles por 7 pero NO por 5?",
    opciones: [
      "\\(114\\)",
      "\\(126\\)",
      "\\(142\\)",
      "\\(143\\)"
    ],
    correcta: 1,
    explicacion: "Divisibles por 7: \\(\\lfloor 999/7 \\rfloor = 142\\). Divisibles por 35: \\(\\lfloor 999/35 \\rfloor = 28\\). Divisibles por 7 pero no por 5: \\(142 - 28 = 114\\). La respuesta es 114."
  },
  {
    id: "u3_q20",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es la identidad de Vandermonde?",
    opciones: [
      "\\(\\binom{m+n}{r} = \\sum_{k=0}^{r} \\binom{m}{k}\\binom{n}{r-k}\\)",
      "\\(\\binom{m+n}{r} = \\binom{m}{r} + \\binom{n}{r}\\)",
      "\\(\\binom{m+n}{r} = \\binom{m}{r} \\cdot \\binom{n}{r}\\)",
      "\\(\\binom{m+n}{r} = \\binom{m}{r} \\cdot n\\)"
    ],
    correcta: 0,
    explicacion: "La Identidad de Vandermonde establece que \\(\\binom{m+n}{r} = \\sum_{k=0}^{r}\\binom{m}{k}\\binom{n}{r-k}\\), que se demuestra combinatoriamente al elegir \\(r\\) elementos de dos grupos disjuntos de \\(m\\) y \\(n\\) elementos."
  },
  {
    id: "u3_q21",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántas formas hay de sentar 8 personas en una mesa circular (sin distinguir rotaciones)?",
    opciones: [
      "\\(5040\\)",
      "\\(40320\\)",
      "\\(8!\\)",
      "\\((8-1)! = 7!\\)"
    ],
    correcta: 3,
    explicacion: "En permutaciones circulares, fijamos una persona como referencia y permutamos las restantes. El número de arreglos circulares de \\(n\\) personas es \\((n-1)! = 7! = 5040\\)."
  },
  {
    id: "u3_q22",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es el número de funciones inyectivas (one-to-one) de un conjunto de 4 elementos en uno de 7 elementos?",
    opciones: [
      "\\(28\\)",
      "\\(210\\)",
      "\\(840\\)",
      "\\(2401\\)"
    ],
    correcta: 2,
    explicacion: "El número de funciones inyectivas de un conjunto de \\(k\\) en uno de \\(n\\) elementos es \\(P(n,k) = n(n-1)\\cdots(n-k+1) = 7 \\times 6 \\times 5 \\times 4 = 840\\)."
  },
  {
    id: "u3_q23",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Qué cuenta el número de Catalan \\(C_n = \\frac{1}{n+1}\\binom{2n}{n}\\)?",
    opciones: [
      "El número de particiones de \\(n\\) en partes distintas.",
      "El número de caminos monotónicos en una cuadrícula \\(n \\times n\\) que no cruzan la diagonal.",
      "El número de permutaciones de \\(n\\) elementos con exactamente \\(k\\) inversiones.",
      "El número de primos menores que \\(n\\)."
    ],
    correcta: 1,
    explicacion: "Los números de Catalan cuentan, entre otras cosas, los caminos de red de \\((0,0)\\) a \\((n,n)\\) que no pasan por encima de la diagonal, las triangulaciones de un polígono convexo de \\(n+2\\) lados, y las expresiones de paréntesis balanceados."
  },
  {
    id: "u3_q24",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es el valor de \\(C_4\\) (cuarto número de Catalan)?",
    opciones: [
      "\\(5\\)",
      "\\(14\\)",
      "\\(42\\)",
      "\\(132\\)"
    ],
    correcta: 1,
    explicacion: "\\(C_4 = \\frac{1}{5}\\binom{8}{4} = \\frac{1}{5} \\times 70 = 14\\)."
  },
  {
    id: "u3_q25",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántos subconjuntos de \\(\\{1, 2, 3, \\ldots, 10\\}\\) contienen exactamente 3 elementos impares y 2 pares?",
    opciones: [
      "\\(100\\)",
      "\\(200\\)",
      "\\(250\\)",
      "\\(300\\)"
    ],
    correcta: 0,
    explicacion: "Impares en \\([1,10]\\): 5 elementos. Pares: 5 elementos. Elegir 3 impares: \\(\\binom{5}{3}=10\\). Elegir 2 pares: \\(\\binom{5}{2}=10\\). Total: \\(10 \\times 10 = 100\\)."
  },
  {
    id: "u3_q26",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántas formas hay de ordenar las palabras del enunciado ANA que tengan la A en la primera posición?",
    opciones: [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    correcta: 1,
    explicacion: "Con la A fija en posición 1, quedan N y A para las posiciones 2 y 3: NA o AN. Hay exactamente 2 arreglos: ANA y AAN."
  },
  {
    id: "u3_q27",
    nivel: "Elementos de combinatoria",
    pregunta: "Por el Pequeño Teorema de Fermat, ¿cuál es el residuo de \\(5^{2026} \\pmod{7}\\)?",
    opciones: [
      "\\(1\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(6\\)"
    ],
    correcta: 2,
    explicacion: "\\(\\phi(7) = 6\\). \\(2026 = 6(337) + 4\\). Entonces \\(5^{2026} = (5^6)^{337} \\cdot 5^4 \\equiv 1 \\cdot 5^4 = 625 \\pmod 7\\). \\(625 = 7(89) + 2\\), entonces \\(5^{2026} \\equiv 2 \\pmod 7\\). Revisando: \\(5^1=5, 5^2=25\\equiv4, 5^3=20\\equiv6, 5^4\\equiv30\\equiv2, 5^5\\equiv10\\equiv3, 5^6\\equiv15\\equiv1\\). Con \\(2026 \\mod 6 = 4\\): \\(5^{2026}\\equiv5^4\\equiv2\\pmod7\\)."
  },
  {
    id: "u3_q28",
    nivel: "Elementos de combinatoria",
    pregunta: "Si aplicamos el Principio del Palomar, ¿cuántos estudiantes debemos elegir de un grupo para garantizar que al menos 3 nacen en el mismo mes?",
    opciones: [
      "\\(13\\)",
      "\\(25\\)",
      "\\(26\\)",
      "\\(37\\)"
    ],
    correcta: 1,
    explicacion: "Con 12 meses y queriendo 3 por mes, en el peor caso hay 2 por mes: \\(2 \\times 12 = 24\\). El siguiente (25) garantiza al menos 3 en un mismo mes."
  },
  {
    id: "u3_q29",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántos números de 4 cifras distintas pueden formarse con los dígitos \\(\\{1, 2, 3, 4, 5\\}\\)?",
    opciones: [
      "\\(60\\)",
      "\\(120\\)",
      "\\(5^4 = 625\\)",
      "\\(4^5\\)"
    ],
    correcta: 1,
    explicacion: "Se trata de una permutación sin repetición de 5 dígitos tomados de 4 en 4: \\(P(5,4) = 5 \\times 4 \\times 3 \\times 2 = 120\\)."
  },
  {
    id: "u3_q30",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántas cadenas binarias de longitud 8 tienen exactamente 3 unos?",
    opciones: [
      "\\(28\\)",
      "\\(56\\)",
      "\\(70\\)",
      "\\(84\\)"
    ],
    correcta: 1,
    explicacion: "Se elige la posición de los 3 unos entre 8 posiciones: \\(\\binom{8}{3} = 56\\)."
  },
  {
    id: "u3_q31",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántos triángulos se pueden formar con los vértices de un polígono regular de 10 lados?",
    opciones: [
      "\\(90\\)",
      "\\(120\\)",
      "\\(210\\)",
      "\\(720\\)"
    ],
    correcta: 1,
    explicacion: "Cada triángulo es determinado por 3 vértices del decágono. El número de triángulos es \\(\\binom{10}{3} = 120\\)."
  },
  {
    id: "u3_q32",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es el número de particiones del entero \\(n = 5\\) en partes positivas?",
    opciones: [
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)",
      "\\(8\\)"
    ],
    correcta: 2,
    explicacion: "Las particiones de 5 son: 5; 4+1; 3+2; 3+1+1; 2+2+1; 2+1+1+1; 1+1+1+1+1. En total \\(p(5) = 7\\)."
  },
  {
    id: "u3_q33",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántos números de 3 dígitos (del 100 al 999) son divisibles por 7?",
    opciones: [
      "\\(126\\)",
      "\\(128\\)",
      "\\(129\\)",
      "\\(143\\)"
    ],
    correcta: 2,
    explicacion: "El menor es \\(7 \\times 15 = 105\\) y el mayor es \\(7 \\times 142 = 994\\). Cantidad: \\(142 - 15 + 1 = 128\\)."
  },
  {
    id: "u3_q34",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántas funciones biyectivas existen de un conjunto de \\(n\\) elementos sobre sí mismo?",
    opciones: [
      "\\(n^n\\)",
      "\\(2^n\\)",
      "\\(n!\\)",
      "\\(n(n-1)/2\\)"
    ],
    correcta: 2,
    explicacion: "Una biyección de un conjunto de \\(n\\) elementos sobre sí mismo es una permutación. Hay exactamente \\(n!\\) permutaciones."
  },
  {
    id: "u3_q35",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es el valor de \\(\\sum_{k=0}^{n}(-1)^k \\binom{n}{k}\\)?",
    opciones: [
      "\\(0\\)",
      "\\(2^n\\)",
      "\\((-1)^n\\)",
      "\\(1\\)"
    ],
    correcta: 0,
    explicacion: "Sustituyendo \\(x = -1, y = 1\\) en el Binomio: \\((-1+1)^n = 0^n = 0 = \\sum_{k=0}^n \\binom{n}{k}(-1)^k(1)^{n-k}\\), para \\(n \\ge 1\\)."
  },
  {
    id: "u3_q36",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántas permutaciones de los dígitos \\(\\{0,1,2,3,4\\}\\) sin repetición forman números de 5 cifras?",
    opciones: [
      "\\(96\\)",
      "\\(120\\)",
      "\\(100\\)",
      "\\(5!\\)"
    ],
    correcta: 0,
    explicacion: "El primer dígito no puede ser 0 (4 opciones). Los restantes 4 dígitos se ordenan libremente: \\(4 \\times 4! = 4 \\times 24 = 96\\)."
  },
  {
    id: "u3_q37",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Qué establece la fórmula de las permutaciones con repetición para ordenar \\(n\\) elementos de los cuales \\(n_1, n_2, \\ldots, n_k\\) son idénticos?",
    opciones: [
      "\\(\\frac{n!}{n_1 + n_2 + \\cdots + n_k}\\)",
      "\\(\\frac{n!}{n_1! \\cdot n_2! \\cdots n_k!}\\)",
      "\\(n_1! \\cdot n_2! \\cdots n_k!\\)",
      "\\(\\binom{n}{n_1}\\binom{n}{n_2}\\cdots\\binom{n}{n_k}\\)"
    ],
    correcta: 1,
    explicacion: "El número de permutaciones con repetición (coeficiente multinomial) es \\(\\frac{n!}{n_1! n_2! \\cdots n_k!}\\), donde \\(n_1 + n_2 + \\cdots + n_k = n\\)."
  },
  {
    id: "u3_q38",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántos caminos mínimos hay de \\((0,0)\\) a \\((4,3)\\) en una cuadrícula, moviéndose solo derecha (D) o arriba (A)?",
    opciones: [
      "\\(12\\)",
      "\\(35\\)",
      "\\(70\\)",
      "\\(126\\)"
    ],
    correcta: 1,
    explicacion: "Un camino mínimo consiste en 4 pasos D y 3 pasos A, en algún orden. El número de tales caminos es \\(\\binom{4+3}{4} = \\binom{7}{4} = 35\\)."
  },
  {
    id: "u3_q39",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántas palabras de 5 letras (con repetición permitida) pueden formarse con el alfabeto español de 27 letras?",
    opciones: [
      "\\(27^5 = 14348907\\)",
      "\\(P(27,5) = 27 \\times 26 \\times 25 \\times 24 \\times 23\\)",
      "\\(\\binom{27}{5} = 80730\\)",
      "\\(5! = 120\\)"
    ],
    correcta: 0,
    explicacion: "Si la repetición está permitida y hay 27 letras, el número de palabras de 5 letras es \\(27^5 = 14{,}348{,}907\\) (principio multiplicativo con reposición)."
  },
  {
    id: "u3_q40",
    nivel: "Elementos de combinatoria",
    pregunta: "Si \\(A\\) y \\(B\\) son conjuntos disjuntos con \\(|A| = m\\) y \\(|B| = n\\), ¿cuántos subconjuntos de \\(A \\cup B\\) contienen exactamente \\(k\\) elementos de \\(A\\)?",
    opciones: [
      "\\(\\binom{m}{k}\\)",
      "\\(\\binom{m}{k} \\cdot 2^n\\)",
      "\\(\\binom{m}{k} + 2^n\\)",
      "\\(\\binom{m+n}{k}\\)"
    ],
    correcta: 1,
    explicacion: "Se eligen exactamente \\(k\\) elementos de \\(A\\) de \\(m\\) posibles: \\(\\binom{m}{k}\\) formas. Para los elementos de \\(B\\), cada uno puede estar o no: \\(2^n\\) opciones independientes. Total: \\(\\binom{m}{k} \\cdot 2^n\\)."
  },
  {
    id: "u3_q41",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Qué valor tiene \\((p-2)! \\pmod{p}\\) para \\(p\\) primo mayor que 2?",
    opciones: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(p - 1\\)",
      "\\(p - 2\\)"
    ],
    correcta: 1,
    explicacion: "Por Wilson: \\((p-1)! \\equiv -1 \\pmod p\\). Como \\((p-1)! = (p-1)(p-2)!\\) y \\(p-1 \\equiv -1\\), se tiene \\((-1)(p-2)! \\equiv -1 \\pmod p\\), luego \\((p-2)! \\equiv 1 \\pmod p\\)."
  },
  {
    id: "u3_q42",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántos números de 4 dígitos son palíndromos (se leen igual de izquierda a derecha que de derecha a izquierda)?",
    opciones: [
      "\\(81\\)",
      "\\(90\\)",
      "\\(99\\)",
      "\\(100\\)"
    ],
    correcta: 1,
    explicacion: "Un palíndromo de 4 dígitos tiene la forma \\(abba\\), donde \\(a \\in \\{1,\\ldots,9\\}\\) (9 opciones) y \\(b \\in \\{0,\\ldots,9\\}\\) (10 opciones). Total: \\(9 \\times 10 = 90\\)."
  },
  {
    id: "u3_q43",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántos enteros positivos menores a 1000 son coprimos con 1000?",
    opciones: [
      "\\(200\\)",
      "\\(400\\)",
      "\\(500\\)",
      "\\(600\\)"
    ],
    correcta: 1,
    explicacion: "\\(1000 = 2^3 \\cdot 5^3\\). \\(\\phi(1000) = 1000(1-1/2)(1-1/5) = 1000 \\cdot \\frac{1}{2} \\cdot \\frac{4}{5} = 400\\)."
  },
  {
    id: "u3_q44",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es el número de derangements (permutaciones sin punto fijo) de 4 elementos, \\(D_4\\)?",
    opciones: [
      "\\(6\\)",
      "\\(9\\)",
      "\\(11\\)",
      "\\(12\\)"
    ],
    correcta: 1,
    explicacion: "\\(D_n = n! \\sum_{k=0}^{n}\\frac{(-1)^k}{k!}\\). Para \\(n=4\\): \\(D_4 = 24(1 - 1 + 1/2 - 1/6 + 1/24) = 24 \\cdot \\frac{3}{8} = 9\\)."
  },
  {
    id: "u3_q45",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Qué cuenta exactamente \\(\\binom{n+k-1}{k}\\)?",
    opciones: [
      "El número de permutaciones de \\(n\\) objetos en \\(k\\) posiciones.",
      "El número de multiconjuntos de tamaño \\(k\\) elegidos de \\(n\\) tipos de elementos.",
      "El número de funciones sobreyectivas de un conjunto de \\(k\\) en uno de \\(n\\).",
      "El número de subconjuntos de tamaño \\(k\\) de un conjunto de \\(n\\) elementos."
    ],
    correcta: 1,
    explicacion: "La fórmula \\(\\binom{n+k-1}{k}\\) cuenta las combinaciones con repetición: el número de formas de elegir \\(k\\) objetos de \\(n\\) tipos distintos permitiendo repeticiones (multiconjuntos)."
  },
  {
    id: "u3_q46",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántos subconjuntos de \\(\\{1, 2, \\ldots, 20\\}\\) tienen suma par?",
    opciones: [
      "\\(2^{19}\\)",
      "\\(2^{20}/2\\)",
      "\\(2^{19} - 1\\)",
      "Las opciones A y B son equivalentes."
    ],
    correcta: 3,
    explicacion: "La mitad de los \\(2^{20}\\) subconjuntos tienen suma par y la mitad impar. La cantidad con suma par es \\(2^{20}/2 = 2^{19}\\). Las opciones A y B son equivalentes (ambas igual a \\(2^{19}\\))."
  },
  {
    id: "u3_q47",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántos enteros positivos de 6 dígitos no tienen ningún dígito repetido?",
    opciones: [
      "\\(136080\\)",
      "\\(544320\\)",
      "\\(725760\\)",
      "\\(151200\\)"
    ],
    correcta: 1,
    explicacion: "El primer dígito: 9 opciones (1-9). Los siguientes 5 dígitos se eligen sin repetición de los 9 restantes: \\(9 \\times 9 \\times 8 \\times 7 \\times 6 \\times 5 = 9 \\times P(9,5) = 9 \\times 15120 = 136080\\)."
  },
  {
    id: "u3_q48",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuántas formas hay de elegir un presidente, un vicepresidente y un tesorero de un grupo de 15 personas (sin que una persona ocupe dos cargos)?",
    opciones: [
      "\\(455\\)",
      "\\(1365\\)",
      "\\(2730\\)",
      "\\(3003\\)"
    ],
    correcta: 2,
    explicacion: "Es una permutación de 15 personas tomadas de 3 en 3 (los cargos son distintos): \\(P(15,3) = 15 \\times 14 \\times 13 = 2730\\)."
  },
  {
    id: "u3_q49",
    nivel: "Elementos de combinatoria",
    pregunta: "¿Cuál es el valor de \\(\\binom{2n}{n}\\) para \\(n = 5\\)?",
    opciones: [
      "\\(45\\)",
      "\\(126\\)",
      "\\(252\\)",
      "\\(512\\)"
    ],
    correcta: 2,
    explicacion: "\\(\\binom{10}{5} = \\frac{10!}{5!5!} = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{120} = \\frac{30240}{120} = 252\\)."
  },
  {
    id: "u3_q50",
    nivel: "Elementos de combinatoria",
    pregunta: "En un torneo de fútbol de 8 equipos donde todos se enfrentan entre sí exactamente una vez, ¿cuántos partidos se juegan en total?",
    opciones: [
      "\\(28\\)",
      "\\(56\\)",
      "\\(64\\)",
      "\\(16\\)"
    ],
    correcta: 0,
    explicacion: "Cada partido es determinado por el par de equipos que se enfrentan. El número de partidos es \\(\\binom{8}{2} = 28\\)."
  }
];
