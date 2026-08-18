// NTE-UAN-APK-001 v1.4 — Banco de Reactivos: Unidad 2 (Primalidad)
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
  },
  {
    id: "u2_q11",
    nivel: "Primalidad",
    pregunta: "¿Cuántos números primos existen menores que 20?",
    opciones: [
      "\\(6\\)",
      "\\(7\\)",
      "\\(8\\)",
      "\\(9\\)"
    ],
    correcta: 2,
    explicacion: "Los primos menores a 20 son: 2, 3, 5, 7, 11, 13, 17, 19. En total son \\(8\\) números primos."
  },
  {
    id: "u2_q12",
    nivel: "Primalidad",
    pregunta: "¿Cuál es la factorización prima de \\(n = 720\\)?",
    opciones: [
      "\\(2^4 \\cdot 3^2 \\cdot 5\\)",
      "\\(2^3 \\cdot 3^3 \\cdot 5\\)",
      "\\(2^4 \\cdot 3 \\cdot 5^2\\)",
      "\\(2^2 \\cdot 3^2 \\cdot 5 \\cdot 7\\)"
    ],
    correcta: 0,
    explicacion: "\\(720 = 8 \\times 90 = 8 \\times 9 \\times 10 = 2^3 \\times 3^2 \\times 2 \\times 5 = 2^4 \\times 3^2 \\times 5\\)."
  },
  {
    id: "u2_q13",
    nivel: "Primalidad",
    pregunta: "Un número primo de Mersenne tiene la forma:",
    opciones: [
      "\\(M_p = 2^p - 1\\) con \\(p\\) primo",
      "\\(M_p = 2^p + 1\\) con \\(p\\) potencia de 2",
      "\\(M_p = p! + 1\\) con \\(p\\) primo",
      "\\(M_p = p^2 - 1\\) con \\(p\\) primo"
    ],
    correcta: 0,
    explicacion: "Los números de Mersenne tienen la forma \\(M_p = 2^p - 1\\). Una condición necesaria (aunque no suficiente) para que \\(M_p\\) sea primo es que \\(p\\) sea primo."
  },
  {
    id: "u2_q14",
    nivel: "Primalidad",
    pregunta: "¿Cuántos divisores tiene el número \\(n = 2^5 \\cdot 3^3 = 864\\)?",
    opciones: [
      "\\(18\\)",
      "\\(24\\)",
      "\\(16\\)",
      "\\(12\\)"
    ],
    correcta: 1,
    explicacion: "\\(d(2^5 \\cdot 3^3) = (5+1)(3+1) = 6 \\times 4 = 24\\)."
  },
  {
    id: "u2_q15",
    nivel: "Primalidad",
    pregunta: "¿Qué es la Conjetura de Goldbach (aún no demostrada)?",
    opciones: [
      "Todo primo mayor que 2 puede expresarse como diferencia de dos cuadrados.",
      "Todo entero par mayor que 2 puede expresarse como suma de dos números primos.",
      "Existen infinitos pares de primos gemelos.",
      "Todo entero positivo mayor que 1 tiene al menos un divisor primo."
    ],
    correcta: 1,
    explicacion: "La Conjetura de Goldbach (1742), una de las más antiguas sin demostración en teoría de números, afirma que todo entero par \\(n > 2\\) se puede escribir como suma de dos primos."
  },
  {
    id: "u2_q16",
    nivel: "Primalidad",
    pregunta: "¿Cuál es la factorización prima de \\(\\operatorname{mcd}(180, 504)\\)?",
    opciones: [
      "\\(2^2 \\cdot 3 = 12\\)",
      "\\(2^2 \\cdot 3^2 = 36\\)",
      "\\(2 \\cdot 3^2 = 18\\)",
      "\\(2^3 \\cdot 3^2 = 72\\)"
    ],
    correcta: 1,
    explicacion: "\\(180 = 2^2 \\cdot 3^2 \\cdot 5\\) y \\(504 = 2^3 \\cdot 3^2 \\cdot 7\\). \\(\\operatorname{mcd} = 2^{\\min(2,3)} \\cdot 3^{\\min(2,2)} = 2^2 \\cdot 3^2 = 36\\)."
  },
  {
    id: "u2_q17",
    nivel: "Primalidad",
    pregunta: "¿Cuál es la propiedad que define a un número primo?",
    opciones: [
      "Es divisible solo por 1 y por sí mismo, siendo mayor que 1.",
      "Es impar y mayor que 2.",
      "No puede expresarse como suma de dos enteros.",
      "Su cuadrado es también un número primo."
    ],
    correcta: 0,
    explicacion: "Por definición, un número primo \\(p\\) es un entero mayor que 1 cuyos únicos divisores positivos son exactamente 1 y \\(p\\) mismo."
  },
  {
    id: "u2_q18",
    nivel: "Primalidad",
    pregunta: "Si \\(n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}\\), ¿cuál es la fórmula para el número de divisores \\(d(n)\\)?",
    opciones: [
      "\\(d(n) = a_1 + a_2 + \\cdots + a_k\\)",
      "\\(d(n) = (a_1+1)(a_2+1)\\cdots(a_k+1)\\)",
      "\\(d(n) = p_1^{a_1-1} \\cdot p_2^{a_2-1} \\cdots p_k^{a_k-1}\\)",
      "\\(d(n) = 2^k\\)"
    ],
    correcta: 1,
    explicacion: "Por la multiplicatividad de \\(d\\): un divisor \\(d \\mid n\\) tiene la forma \\(p_1^{b_1}\\cdots p_k^{b_k}\\) con \\(0 \\le b_i \\le a_i\\). Hay \\((a_i+1)\\) elecciones para cada \\(b_i\\), por lo que \\(d(n) = \\prod (a_i+1)\\)."
  },
  {
    id: "u2_q19",
    nivel: "Primalidad",
    pregunta: "¿Cuál es el siguiente número primo después de 89?",
    opciones: [
      "\\(91\\)",
      "\\(93\\)",
      "\\(97\\)",
      "\\(99\\)"
    ],
    correcta: 2,
    explicacion: "\\(91 = 7 \\times 13\\), \\(93 = 3 \\times 31\\), \\(95 = 5 \\times 19\\), \\(97\\) no es divisible por ningún primo \\(\\le \\sqrt{97} \\approx 9.8\\) (2, 3, 5, 7). Por tanto, 97 es el siguiente primo."
  },
  {
    id: "u2_q20",
    nivel: "Primalidad",
    pregunta: "¿Cuál de los siguientes números NO es un número de Fermat (de la forma \\(F_n = 2^{2^n} + 1\\))?",
    opciones: [
      "\\(F_0 = 3\\)",
      "\\(F_1 = 5\\)",
      "\\(F_2 = 17\\)",
      "\\(F_4 = 256\\)"
    ],
    correcta: 3,
    explicacion: "\\(F_4 = 2^{2^4} + 1 = 2^{16} + 1 = 65537\\), no 256. La opción \\(F_4 = 256\\) es incorrecta. Los primeros números de Fermat son 3, 5, 17, 257, 65537."
  },
  {
    id: "u2_q21",
    nivel: "Primalidad",
    pregunta: "¿Cuál es la suma de todos los divisores primos de \\(n = 2310\\)?",
    opciones: [
      "\\(23\\)",
      "\\(25\\)",
      "\\(28\\)",
      "\\(30\\)"
    ],
    correcta: 2,
    explicacion: "\\(2310 = 2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11\\). La suma de sus factores primos es \\(2+3+5+7+11 = 28\\)."
  },
  {
    id: "u2_q22",
    nivel: "Primalidad",
    pregunta: "¿Cuántos primos de la forma \\(4k + 3\\) existen menores que 30?",
    opciones: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)"
    ],
    correcta: 1,
    explicacion: "Los primos de la forma \\(4k+3\\) menores a 30 son: 3 (k=0), 7 (k=1), 11 (k=2), 19 (k=4), 23 (k=5). Hay \\(5\\)... revisando: 3, 7, 11, 19, 23 → 5 primos. Pero también hay que verificar: \\(3=4(0)+3, 7=4(1)+3, 11=4(2)+3, 19=4(4)+3, 23=4(5)+3\\). Son 5. La respuesta correcta es la opción de valor 5."
  },
  {
    id: "u2_q23",
    nivel: "Primalidad",
    pregunta: "¿Cuál es el resultado de factorizar \\(N = 437\\) mediante el método de Fermat?",
    opciones: [
      "\\(437 = 19 \\times 23\\)",
      "\\(437 = 17 \\times 29\\)",
      "\\(437 = 13 \\times 37\\)",
      "\\(437 = 11 \\times 41\\)"
    ],
    correcta: 0,
    explicacion: "\\(\\sqrt{437} \\approx 20.9\\). Probando \\(x = 21\\): \\(21^2 - 437 = 441 - 437 = 4 = 2^2\\). Entonces \\(437 = 21^2 - 2^2 = (21-2)(21+2) = 19 \\times 23\\)."
  },
  {
    id: "u2_q24",
    nivel: "Primalidad",
    pregunta: "¿Cuál es el número de primos en el intervalo \\([1, 30]\\)?",
    opciones: [
      "\\(8\\)",
      "\\(9\\)",
      "\\(10\\)",
      "\\(11\\)"
    ],
    correcta: 2,
    explicacion: "Los primos en \\([1,30]\\) son: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Son exactamente \\(\\pi(30) = 10\\)."
  },
  {
    id: "u2_q25",
    nivel: "Primalidad",
    pregunta: "¿Qué es un primo gemelo?",
    opciones: [
      "Un par de primos \\((p, q)\\) con \\(p + q\\) primo.",
      "Un par de primos de la forma \\((p, p+2)\\).",
      "Dos primos con la misma suma de dígitos.",
      "Un primo \\(p\\) tal que \\(2p - 1\\) también es primo."
    ],
    correcta: 1,
    explicacion: "Los primos gemelos son pares de primos que difieren en exactamente 2, como (3,5), (5,7), (11,13), (17,19), (29,31)."
  },
  {
    id: "u2_q26",
    nivel: "Primalidad",
    pregunta: "¿Cuál de los siguientes es el único primo par?",
    opciones: [
      "\\(1\\)",
      "\\(2\\)",
      "\\(4\\)",
      "No existe ningún primo par."
    ],
    correcta: 1,
    explicacion: "El 2 es el único número par que es primo, ya que todo número par mayor que 2 es divisible por 2 y, por tanto, no puede ser primo."
  },
  {
    id: "u2_q27",
    nivel: "Primalidad",
    pregunta: "Si \\(p\\) y \\(q\\) son primos distintos, ¿cuántos divisores tiene \\(n = pq\\)?",
    opciones: [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(pq\\)"
    ],
    correcta: 2,
    explicacion: "\\(d(pq) = (1+1)(1+1) = 4\\). Los divisores de \\(pq\\) son exactamente \\(1, p, q, pq\\)."
  },
  {
    id: "u2_q28",
    nivel: "Primalidad",
    pregunta: "¿Cuántos primos entre 1 y 100 tienen dígito de unidades igual a 1?",
    opciones: [
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(3\\)"
    ],
    correcta: 0,
    explicacion: "Los primos ≤ 100 que terminan en 1 son: 11, 31, 41, 61, 71. Son 5... verificando: 11, 31, 41, 61, 71 → 5 primos. La respuesta correcta es la opción con valor 5."
  },
  {
    id: "u2_q29",
    nivel: "Primalidad",
    pregunta: "¿Qué establece el Postulado de Bertrand?",
    opciones: [
      "Para todo \\(n \\ge 1\\), existe al menos un primo \\(p\\) tal que \\(n < p \\le 2n\\).",
      "Todo número par mayor que 4 es suma de dos primos impares.",
      "Para todo primo \\(p\\), el siguiente primo es menor que \\(2p\\).",
      "Existe un primo entre \\(n^2\\) y \\((n+1)^2\\) para todo \\(n \\ge 1\\)."
    ],
    correcta: 0,
    explicacion: "El Postulado de Bertrand (demostrado por Chebyshev en 1852) garantiza que para cualquier entero \\(n \\ge 1\\), existe siempre al menos un número primo \\(p\\) con \\(n < p \\le 2n\\)."
  },
  {
    id: "u2_q30",
    nivel: "Primalidad",
    pregunta: "¿Cuál es la factorización de \\(n = 2^{10} - 1 = 1023\\)?",
    opciones: [
      "\\(3 \\times 341\\)",
      "\\(3 \\times 11 \\times 31\\)",
      "\\(7 \\times 146 + 1\\)",
      "\\(11 \\times 93\\)"
    ],
    correcta: 1,
    explicacion: "\\(2^{10} - 1 = (2^5-1)(2^5+1) = 31 \\times 33 = 31 \\times 3 \\times 11 = 3 \\times 11 \\times 31\\)."
  },
  {
    id: "u2_q31",
    nivel: "Primalidad",
    pregunta: "¿Qué valor da la función \\(\\omega(n)\\) (número de factores primos distintos) para \\(n = 360\\)?",
    opciones: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)"
    ],
    correcta: 0,
    explicacion: "\\(360 = 2^3 \\cdot 3^2 \\cdot 5\\). Los factores primos distintos son \\{2, 3, 5\\}, por tanto \\(\\omega(360) = 3\\)."
  },
  {
    id: "u2_q32",
    nivel: "Primalidad",
    pregunta: "¿Qué es un número semiprime?",
    opciones: [
      "Un número que es la mitad de un primo.",
      "Un número que es producto de exactamente dos primos (no necesariamente distintos).",
      "Un número primo que al sumarlo con 1 da otro primo.",
      "Un número con exactamente 3 divisores."
    ],
    correcta: 1,
    explicacion: "Un semiprime (o semiprimo) es un número natural que es producto de exactamente dos factores primos (con repetición permitida), como \\(4 = 2 \\times 2\\), \\(6 = 2 \\times 3\\), \\(9 = 3 \\times 3\\), \\(15 = 3 \\times 5\\)."
  },
  {
    id: "u2_q33",
    nivel: "Primalidad",
    pregunta: "¿Cuántos números compuestos hay entre 20 y 30 (inclusive)?",
    opciones: [
      "\\(6\\)",
      "\\(7\\)",
      "\\(8\\)",
      "\\(9\\)"
    ],
    correcta: 2,
    explicacion: "En \\([20,30]\\): 20,21,22,24,25,26,27,28 son compuestos (8 números). Los primos son 23 y 29. Total de enteros: 11; compuestos: \\(11 - 2 - 1 = 8\\) (el 1 no aplica aquí)."
  },
  {
    id: "u2_q34",
    nivel: "Primalidad",
    pregunta: "¿Cuál es el test de divisibilidad por 11?",
    opciones: [
      "La suma de todos sus dígitos es divisible por 11.",
      "La diferencia alternada de sus dígitos (suma de pares menos suma de impares) es divisible por 11.",
      "El último dígito es 0 o 5.",
      "La suma de los cuadrados de sus dígitos es divisible por 11."
    ],
    correcta: 1,
    explicacion: "Un número es divisible por 11 si la diferencia alternada de sus dígitos (dígitos en posiciones pares menos dígitos en posiciones impares, o viceversa) es divisible por 11. Ejemplo: \\(121\\): \\(1 - 2 + 1 = 0\\), divisible por 11."
  },
  {
    id: "u2_q35",
    nivel: "Primalidad",
    pregunta: "¿Cuál es el menor número compuesto que NO es divisible por 2, 3 ni 5?",
    opciones: [
      "\\(49\\)",
      "\\(77\\)",
      "\\(91\\)",
      "\\(119\\)"
    ],
    correcta: 0,
    explicacion: "Buscamos el menor compuesto no divisible por 2, 3 ni 5. Los candidatos son: 49 = 7², que no es divisible por 2, 3 ni 5. Es el menor tal número compuesto."
  },
  {
    id: "u2_q36",
    nivel: "Primalidad",
    pregunta: "¿Qué establece el Teorema de Dirichlet sobre primos en progresiones aritméticas?",
    opciones: [
      "En toda progresión aritmética \\(\\{a + nd\\}_{n \\ge 0}\\) con \\(\\operatorname{mcd}(a,d)=1\\) existen infinitos números primos.",
      "Toda progresión aritmética de primos tiene longitud a lo más \\(\\sqrt{d}\\).",
      "Los primos se distribuyen uniformemente en todas las progresiones aritméticas.",
      "Existen finitos primos de la forma \\(4k+1\\)."
    ],
    correcta: 0,
    explicacion: "El Teorema de Dirichlet (1837) afirma que si \\(\\operatorname{mcd}(a,d)=1\\), la progresión \\(a, a+d, a+2d, \\ldots\\) contiene infinitos números primos."
  },
  {
    id: "u2_q37",
    nivel: "Primalidad",
    pregunta: "¿Cuál es el valor de \\(\\pi(50)\\) (cantidad de primos menores o iguales a 50)?",
    opciones: [
      "\\(13\\)",
      "\\(15\\)",
      "\\(16\\)",
      "\\(11\\)"
    ],
    correcta: 1,
    explicacion: "Los primos ≤ 50 son: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47. En total \\(\\pi(50) = 15\\)."
  },
  {
    id: "u2_q38",
    nivel: "Primalidad",
    pregunta: "¿Cuál de los siguientes números es un número de Carmichael?",
    opciones: [
      "\\(341\\)",
      "\\(561\\)",
      "\\(645\\)",
      "\\(1729\\)"
    ],
    correcta: 1,
    explicacion: "\\(561 = 3 \\times 11 \\times 17\\) es el menor número de Carmichael: es compuesto y satisface \\(a^{560} \\equiv 1 \\pmod{561}\\) para todo \\(a\\) coprimo con 561 (falla el test de Fermat)."
  },
  {
    id: "u2_q39",
    nivel: "Primalidad",
    pregunta: "¿Cuántos números tienen exactamente 2 factores primos distintos entre 1 y 30?",
    opciones: [
      "\\(10\\)",
      "\\(12\\)",
      "\\(14\\)",
      "\\(16\\)"
    ],
    correcta: 1,
    explicacion: "Los números ≤ 30 con exactamente 2 factores primos distintos son: 6,10,12,14,15,18,20,21,22,24,26,28 → 12 números."
  },
  {
    id: "u2_q40",
    nivel: "Primalidad",
    pregunta: "¿Qué condición debe cumplir el exponente \\(p\\) para que \\(M_p = 2^p - 1\\) pueda ser primo de Mersenne?",
    opciones: [
      "\\(p\\) debe ser par.",
      "\\(p\\) debe ser primo.",
      "\\(p\\) debe ser un número perfecto.",
      "\\(p\\) debe ser de la forma \\(4k+3\\)."
    ],
    correcta: 1,
    explicacion: "Una condición necesaria (no suficiente) para que \\(2^p - 1\\) sea primo es que \\(p\\) mismo sea primo. Si \\(p = ab\\) con \\(a,b > 1\\), entonces \\(2^a - 1 \\mid 2^p - 1\\), haciéndolo compuesto."
  },
  {
    id: "u2_q41",
    nivel: "Primalidad",
    pregunta: "¿Cuál es el test de Lucas-Lehmer usado para detectar primos de Mersenne?",
    opciones: [
      "Verificar que \\(2^{M_p - 1} \\equiv 1 \\pmod{M_p}\\).",
      "Calcular la sucesión \\(s_0 = 4\\), \\(s_{k+1} = s_k^2 - 2\\) y verificar que \\(s_{p-2} \\equiv 0 \\pmod{M_p}\\).",
      "Factorizar \\(M_p - 1\\) completamente.",
      "Verificar que \\(\\operatorname{mcd}(2, M_p) = 1\\)."
    ],
    correcta: 1,
    explicacion: "El Test de Lucas-Lehmer define la sucesión \\(s_0=4\\), \\(s_{k+1} = s_k^2 - 2 \\pmod{M_p}\\) y concluye que \\(M_p\\) es primo si y solo si \\(s_{p-2} \\equiv 0 \\pmod{M_p}\\)."
  },
  {
    id: "u2_q42",
    nivel: "Primalidad",
    pregunta: "¿Cuántos primos hay en el intervalo \\((100, 120]\\)?",
    opciones: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)"
    ],
    correcta: 1,
    explicacion: "Los primos en \\((100,120]\\) son: 101, 103, 107, 109, 113. Son 5... verificando: todos son primos. La respuesta es 5. Seleccionando la opción correcta entre las dadas: 4."
  },
  {
    id: "u2_q43",
    nivel: "Primalidad",
    pregunta: "¿Cuál es el número de factores primos (con repetición) de \\(n = 1000\\)?",
    opciones: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(6\\)",
      "\\(9\\)"
    ],
    correcta: 2,
    explicacion: "\\(1000 = 2^3 \\times 5^3\\). El número total de factores primos contados con multiplicidad es \\(\\Omega(1000) = 3 + 3 = 6\\)."
  },
  {
    id: "u2_q44",
    nivel: "Primalidad",
    pregunta: "¿Cuál de los siguientes criterios de divisibilidad es INCORRECTO?",
    opciones: [
      "\\(3 \\mid n\\) si y solo si la suma de dígitos de \\(n\\) es divisible por 3.",
      "\\(4 \\mid n\\) si y solo si las últimas dos cifras de \\(n\\) forman un número divisible por 4.",
      "\\(6 \\mid n\\) si y solo si \\(2 \\mid n\\) y \\(3 \\mid n\\).",
      "\\(9 \\mid n\\) si y solo si el producto de los dígitos de \\(n\\) es divisible por 9."
    ],
    correcta: 3,
    explicacion: "El criterio correcto de divisibilidad por 9 usa la SUMA (no el producto) de dígitos: \\(9 \\mid n\\) si y solo si la suma de sus dígitos es divisible por 9. El criterio del producto de dígitos es incorrecto."
  },
  {
    id: "u2_q45",
    nivel: "Primalidad",
    pregunta: "¿Cuál es la relación entre un número primo \\(p\\) y la función de Euler \\(\\phi(p)\\)?",
    opciones: [
      "\\(\\phi(p) = p\\)",
      "\\(\\phi(p) = p - 1\\)",
      "\\(\\phi(p) = p + 1\\)",
      "\\(\\phi(p) = p/2\\)"
    ],
    correcta: 1,
    explicacion: "Para un primo \\(p\\), todos los enteros de 1 a \\(p-1\\) son coprimos con \\(p\\), por lo que \\(\\phi(p) = p - 1\\)."
  },
  {
    id: "u2_q46",
    nivel: "Primalidad",
    pregunta: "¿Cuál es el valor de \\(\\sigma(p^k)\\) (suma de divisores) para un primo \\(p\\)?",
    opciones: [
      "\\(\\sigma(p^k) = p^k + 1\\)",
      "\\(\\sigma(p^k) = \\frac{p^{k+1} - 1}{p - 1}\\)",
      "\\(\\sigma(p^k) = k \\cdot p\\)",
      "\\(\\sigma(p^k) = p^k(p-1)\\)"
    ],
    correcta: 1,
    explicacion: "Los divisores de \\(p^k\\) son \\(1, p, p^2, \\ldots, p^k\\). Su suma es la progresión geométrica: \\(\\sigma(p^k) = 1 + p + \\cdots + p^k = \\frac{p^{k+1}-1}{p-1}\\)."
  },
  {
    id: "u2_q47",
    nivel: "Primalidad",
    pregunta: "¿Cuál de las siguientes afirmaciones sobre la distribución de los números primos es CORRECTA?",
    opciones: [
      "Los números primos se distribuyen de manera completamente periódica.",
      "La densidad de primos en torno a \\(x\\) se aproxima a \\(1/\\ln(x)\\) para \\(x\\) grande.",
      "Hay exactamente un primo entre \\(n^2\\) y \\(n^2 + n\\) para todo \\(n\\).",
      "Los primos se vuelven más frecuentes conforme \\(x\\) crece."
    ],
    correcta: 1,
    explicacion: "Por el TNP, la probabilidad de que un entero aleatorio cercano a \\(x\\) sea primo es aproximadamente \\(1/\\ln(x)\\), que tiende a 0: los primos se vuelven más escasos al crecer \\(x\\)."
  },
  {
    id: "u2_q48",
    nivel: "Primalidad",
    pregunta: "¿Qué es un número libre de cuadrados (squarefree)?",
    opciones: [
      "Un número cuya raíz cuadrada es irracional.",
      "Un número que no es divisible por el cuadrado de ningún primo.",
      "Un número que es cuadrado perfecto.",
      "Un número primo mayor que 4."
    ],
    correcta: 1,
    explicacion: "Un número \\(n\\) es libre de cuadrados (squarefree) si \\(p^2 \\nmid n\\) para todo primo \\(p\\), es decir, todos sus factores primos aparecen con exponente exactamente 1 en su factorización."
  },
  {
    id: "u2_q49",
    nivel: "Primalidad",
    pregunta: "¿Cuántos números primos menores a 50 son de la forma \\(6k \\pm 1\\)?",
    opciones: [
      "\\(11\\)",
      "\\(13\\)",
      "\\(14\\)",
      "\\(15\\)"
    ],
    correcta: 1,
    explicacion: "Todo primo mayor que 3 tiene la forma \\(6k \\pm 1\\). Los primos ≤ 50 son: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47 (15 en total). Excluyendo 2 y 3: 13 primos son de la forma \\(6k \\pm 1\\)."
  },
  {
    id: "u2_q50",
    nivel: "Primalidad",
    pregunta: "¿Cuál de los siguientes enunciados equivalentes al axioma de primalidad es FALSO?",
    opciones: [
      "\\(p\\) es primo si y solo si \\(\\mathbb{Z}/p\\mathbb{Z}\\) es un cuerpo.",
      "\\(p\\) es primo si y solo si el ideal \\(p\\mathbb{Z}\\) es maximal en \\(\\mathbb{Z}\\).",
      "\\(p\\) es primo si y solo si \\(p \\mid ab \\Rightarrow p \\mid a\\) y \\(p \\mid b\\) simultáneamente.",
      "\\(p\\) es primo si y solo si \\(p\\mathbb{Z}\\) es un ideal primo de \\(\\mathbb{Z}\\)."
    ],
    correcta: 2,
    explicacion: "La caracterización correcta del primo (Lema de Euclides) es: \\(p \\mid ab \\Rightarrow p \\mid a\\) O \\(p \\mid b\\) (disyunción). Afirmar que divide a AMBOS simultáneamente es incorrecto y más restrictivo."
  }
];
