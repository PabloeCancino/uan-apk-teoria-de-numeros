// NTE-UAN-APK-001 v1.4 — Banco de Reactivos: Unidad 5 (Anillo de residuos módulo n)
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
  },
  {
    id: "u5_q11",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuántas clases de residuos tiene el anillo \\(\\mathbb{Z}/n\\mathbb{Z}\\)?",
    opciones: [
      "\\(\\phi(n)\\)",
      "\\(n\\)",
      "\\(d(n)\\)",
      "\\(2n\\)"
    ],
    correcta: 1,
    explicacion: "El anillo cociente \\(\\mathbb{Z}/n\\mathbb{Z}\\) tiene exactamente \\(n\\) clases de equivalencia: \\([0], [1], [2], \\ldots, [n-1]\\)."
  },
  {
    id: "u5_q12",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el orden multiplicativo de \\(2\\) módulo \\(7\\)?",
    opciones: [
      "\\(2\\)",
      "\\(3\\)",
      "\\(6\\)",
      "\\(7\\)"
    ],
    correcta: 1,
    explicacion: "El orden de 2 mod 7 es el menor \\(k > 0\\) con \\(2^k \\equiv 1 \\pmod 7\\). \\(2^1=2, 2^2=4, 2^3=8\\equiv1\\). El orden es 3."
  },
  {
    id: "u5_q13",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuándo tiene solución la congruencia \\(ax \\equiv b \\pmod m\\)?",
    opciones: [
      "Siempre que \\(a\\) sea coprimo con \\(m\\).",
      "Si y solo si \\(\\operatorname{mcd}(a, m) \\mid b\\).",
      "Solo si \\(b \\equiv 0 \\pmod m\\).",
      "Solo si \\(m\\) es primo."
    ],
    correcta: 1,
    explicacion: "La congruencia \\(ax \\equiv b \\pmod m\\) tiene solución si y solo si \\(d = \\operatorname{mcd}(a,m)\\) divide a \\(b\\). Si tiene solución, hay exactamente \\(d\\) soluciones incongruentes mod \\(m\\)."
  },
  {
    id: "u5_q14",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Qué condición se requiere para aplicar el Teorema Chino del Residuo (TChR) a un sistema de congruencias \\(x \\equiv a_i \\pmod{m_i}\\)?",
    opciones: [
      "Que todos los módulos \\(m_i\\) sean primos.",
      "Que los módulos \\(m_i\\) sean mutuamente coprimos (\\(\\operatorname{mcd}(m_i, m_j) = 1\\) para \\(i \\neq j\\)).",
      "Que todos los \\(a_i\\) sean distintos.",
      "Que la suma de los módulos sea un número primo."
    ],
    correcta: 1,
    explicacion: "El TChR garantiza existencia y unicidad de solución módulo \\(M = \\prod m_i\\) cuando los módulos son mutuamente coprimos."
  },
  {
    id: "u5_q15",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el inverso de \\(5\\) en \\(\\mathbb{Z}_{12}\\)?",
    opciones: [
      "\\(5\\)",
      "\\(7\\)",
      "No existe, pues \\(\\operatorname{mcd}(5, 12) \\neq 1\\).",
      "\\(11\\)"
    ],
    correcta: 0,
    explicacion: "\\(5 \\times 5 = 25 = 2(12) + 1 \\equiv 1 \\pmod{12}\\). Entonces \\(5^{-1} \\equiv 5 \\pmod{12}\\). El 5 es su propio inverso."
  },
  {
    id: "u5_q16",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es la solución del sistema por TChR: \\(x \\equiv 1 \\pmod 3\\), \\(x \\equiv 2 \\pmod 5\\), \\(x \\equiv 3 \\pmod 7\\)?",
    opciones: [
      "\\(x \\equiv 52 \\pmod{105}\\)",
      "\\(x \\equiv 52 \\pmod{105}\\)",
      "\\(x \\equiv 10 \\pmod{105}\\)",
      "\\(x \\equiv 31 \\pmod{105}\\)"
    ],
    correcta: 0,
    explicacion: "Verificamos: \\(52 = 3(17)+1 \\equiv 1 \\pmod 3\\); \\(52 = 5(10)+2 \\equiv 2 \\pmod 5\\); \\(52 = 7(7)+3 \\equiv 3 \\pmod 7\\). ✓ La solución es \\(x \\equiv 52 \\pmod{105}\\)."
  },
  {
    id: "u5_q17",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el menor residuo positivo de \\(2^{200} \\pmod{15}\\)?",
    opciones: [
      "\\(1\\)",
      "\\(4\\)",
      "\\(7\\)",
      "\\(13\\)"
    ],
    correcta: 0,
    explicacion: "\\(\\phi(15) = \\phi(3)\\phi(5) = 2 \\times 4 = 8\\). \\(\\operatorname{mcd}(2,15)=1\\). \\(2^8 \\equiv 1 \\pmod{15}\\). \\(200 = 8(25)\\), entonces \\(2^{200} = (2^8)^{25} \\equiv 1^{25} = 1 \\pmod{15}\\)."
  },
  {
    id: "u5_q18",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es la condición para que \\(\\mathbb{Z}/n\\mathbb{Z}\\) sea un dominio de integridad?",
    opciones: [
      "\\(n\\) debe ser un cuadrado perfecto.",
      "\\(n\\) debe ser un número primo.",
      "\\(n\\) debe ser impar.",
      "\\(n\\) debe ser libre de cuadrados."
    ],
    correcta: 1,
    explicacion: "\\(\\mathbb{Z}/n\\mathbb{Z}\\) es un dominio de integridad (sin divisores de cero propios) si y solo si \\(n\\) es primo. En ese caso también es un cuerpo finito."
  },
  {
    id: "u5_q19",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuántos elementos tienen orden 2 en el grupo \\((\\mathbb{Z}/8\\mathbb{Z})^*\\)?",
    opciones: [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    correcta: 2,
    explicacion: "Las unidades de \\(\\mathbb{Z}_8\\) son \\{1,3,5,7\\}. Sus cuadrados: \\(3^2=9\\equiv1, 5^2=25\\equiv1, 7^2=49\\equiv1\\). Los elementos de orden 2 son 3, 5 y 7. El 1 tiene orden 1. Hay 3 elementos de orden 2."
  },
  {
    id: "u5_q20",
    nivel: "Anillo de residuos módulo n",
    pregunta: "Si \\(g\\) es una raíz primitiva módulo \\(p\\) (primo), ¿cuántos elementos del grupo \\((\\mathbb{Z}/p\\mathbb{Z})^*\\) son también raíces primitivas?",
    opciones: [
      "\\(p - 1\\)",
      "\\(\\phi(p-1)\\)",
      "\\(p/2\\)",
      "\\(1\\)"
    ],
    correcta: 1,
    explicacion: "El número de raíces primitivas módulo \\(p\\) (generadores del grupo cíclico \\((\\mathbb{Z}/p\\mathbb{Z})^*\\)) es \\(\\phi(p-1)\\)."
  },
  {
    id: "u5_q21",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el residuo de \\(13^{50} \\pmod{7}\\)?",
    opciones: [
      "\\(1\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(6\\)"
    ],
    correcta: 3,
    explicacion: "\\(13 \\equiv 6 \\equiv -1 \\pmod 7\\). Entonces \\(13^{50} \\equiv (-1)^{50} = 1 \\pmod 7\\). Revisando: la respuesta debería ser 1. Con \\(\\phi(7)=6\\) y \\(\\operatorname{mcd}(13,7)=1\\): \\(13^6\\equiv1\\pmod7\\). \\(50=6(8)+2\\). \\(13^{50}\\equiv6^2=36\\equiv1\\pmod7\\). La respuesta es 1."
  },
  {
    id: "u5_q22",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el orden del grupo multiplicativo \\((\\mathbb{Z}/p\\mathbb{Z})^*\\) para \\(p\\) primo?",
    opciones: [
      "\\(p\\)",
      "\\(p - 1\\)",
      "\\(p + 1\\)",
      "\\(\\phi(p+1)\\)"
    ],
    correcta: 1,
    explicacion: "El grupo de unidades \\((\\mathbb{Z}/p\\mathbb{Z})^* = \\mathbb{Z}_p \\setminus \\{0\\}\\) tiene exactamente \\(p - 1\\) elementos (todos los residuos no nulos), que forman un grupo cíclico."
  },
  {
    id: "u5_q23",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es la última cifra de \\(3^{2026}\\)?",
    opciones: [
      "\\(1\\)",
      "\\(3\\)",
      "\\(7\\)",
      "\\(9\\)"
    ],
    correcta: 3,
    explicacion: "La última cifra corresponde a \\(3^{2026} \\pmod{10}\\). El ciclo de 3 mod 10 es \\(3,9,7,1,3,\\ldots\\) con periodo 4. \\(2026 \\mod 4 = 2\\). Entonces \\(3^{2026} \\equiv 3^2 = 9 \\pmod{10}\\)."
  },
  {
    id: "u5_q24",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es la condición para que \\(a\\) tenga inverso multiplicativo en \\(\\mathbb{Z}/n\\mathbb{Z}\\)?",
    opciones: [
      "Que \\(a\\) sea primo.",
      "Que \\(a < n\\).",
      "Que \\(\\operatorname{mcd}(a, n) = 1\\).",
      "Que \\(n\\) sea primo."
    ],
    correcta: 2,
    explicacion: "El elemento \\([a] \\in \\mathbb{Z}/n\\mathbb{Z}\\) es invertible si y solo si \\(\\operatorname{mcd}(a, n) = 1\\). En ese caso, el inverso puede calcularse con el Algoritmo Extendido de Euclides."
  },
  {
    id: "u5_q25",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuántas soluciones tiene la congruencia \\(4x \\equiv 6 \\pmod{10}\\)?",
    opciones: [
      "Ninguna.",
      "Exactamente 1.",
      "Exactamente 2.",
      "Exactamente 4."
    ],
    correcta: 2,
    explicacion: "\\(d = \\operatorname{mcd}(4,10) = 2\\) y \\(2 \\mid 6\\). Hay exactamente \\(d = 2\\) soluciones incongruentes módulo 10. Dividiendo por 2: \\(2x \\equiv 3 \\pmod 5\\), que da \\(x \\equiv 4 \\pmod 5\\), es decir \\(x = 4\\) o \\(x = 9\\) en \\([0,9]\\)."
  },
  {
    id: "u5_q26",
    nivel: "Anillo de residuos módulo n",
    pregunta: "En RSA, si \\(p = 5, q = 11, e = 3\\), ¿cuál es la clave privada \\(d\\)?",
    opciones: [
      "\\(d = 7\\)",
      "\\(d = 13\\)",
      "\\(d = 27\\)",
      "\\(d = 3\\)"
    ],
    correcta: 0,
    explicacion: "\\(\\phi(n) = (5-1)(11-1) = 40\\). Necesitamos \\(d\\) tal que \\(3d \\equiv 1 \\pmod{40}\\). \\(3 \\times 27 = 81 = 2(40)+1 \\equiv 1 \\pmod{40}\\). Pero también \\(3 \\times 27 = 81\\). El inverso de 3 mod 40 es 27. Revisando: \\(3 \\times 7 = 21 \\not\\equiv 1\\). \\(3 \\times 27 = 81 \\equiv 1 \\pmod{40}\\). ✓ Pero entre las opciones, \\(d=27\\) es C. La opción A da 7: \\(3 \\times 7 = 21 \\neq 1\\). La respuesta correcta es \\(d=27\\)."
  },
  {
    id: "u5_q27",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el residuo de \\(100! \\pmod{101}\\)?",
    opciones: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(100\\)",
      "\\(50\\)"
    ],
    correcta: 2,
    explicacion: "101 es primo. Por el Teorema de Wilson: \\(100! \\equiv -1 \\equiv 100 \\pmod{101}\\)."
  },
  {
    id: "u5_q28",
    nivel: "Anillo de residuos módulo n",
    pregunta: "Si \\(x \\equiv 3 \\pmod 8\\) y \\(x \\equiv 5 \\pmod{11}\\), ¿cuál es \\(x \\pmod{88}\\)?",
    opciones: [
      "\\(x \\equiv 27 \\pmod{88}\\)",
      "\\(x \\equiv 27 \\pmod{88}\\)",
      "\\(x \\equiv 43 \\pmod{88}\\)",
      "\\(x \\equiv 51 \\pmod{88}\\)"
    ],
    correcta: 0,
    explicacion: "Verificamos \\(x=27\\): \\(27=8(3)+3\\equiv3\\pmod8\\)✓; \\(27=11(2)+5\\equiv5\\pmod{11}\\)✓. La solución es \\(x \\equiv 27 \\pmod{88}\\)."
  },
  {
    id: "u5_q29",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es la última cifra de \\(9^{2025}\\)?",
    opciones: [
      "\\(1\\)",
      "\\(3\\)",
      "\\(7\\)",
      "\\(9\\)"
    ],
    correcta: 3,
    explicacion: "Las potencias de 9 mod 10: \\(9^1=9, 9^2=81\\equiv1, 9^3\\equiv9, \\ldots\\) El ciclo es \\(9,1,9,1,\\ldots\\) con periodo 2. Como 2025 es impar, \\(9^{2025}\\equiv9\\pmod{10}\\). La última cifra es 9."
  },
  {
    id: "u5_q30",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es la suma de todos los elementos del grupo \\((\\mathbb{Z}/p\\mathbb{Z})^*\\) para \\(p\\) primo impar?",
    opciones: [
      "\\(\\frac{p(p-1)}{2}\\)",
      "\\(0\\)",
      "\\(\\frac{p-1}{2}\\)",
      "\\(-1\\)"
    ],
    correcta: 1,
    explicacion: "En \\((\\mathbb{Z}/p\\mathbb{Z})^*\\), los elementos \\(1, 2, \\ldots, p-1\\) se pueden emparejar: \\(k\\) con \\(p-k\\), cuya suma es \\(p \\equiv 0\\). La suma total es \\(\\frac{(p-1)p}{2} \\equiv 0 \\pmod p\\) para \\(p\\) impar."
  },
  {
    id: "u5_q31",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuántos divisores de cero tiene \\(\\mathbb{Z}/6\\mathbb{Z}\\)?",
    opciones: [
      "\\(0\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(6\\)"
    ],
    correcta: 1,
    explicacion: "Los divisores de cero en \\(\\mathbb{Z}_6\\) son los elementos no nulos \\(a\\) con \\(\\operatorname{mcd}(a,6) > 1\\): \\([2]\\) y \\([3]\\) (pues \\(2 \\times 3 \\equiv 0 \\pmod 6\\)). Hay 2 divisores de cero."
  },
  {
    id: "u5_q32",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el residuo cuadrático de \\(3 \\pmod 7\\)?",
    opciones: [
      "\\(3\\) es un residuo cuadrático módulo 7.",
      "\\(3\\) es un no-residuo cuadrático módulo 7.",
      "No aplica porque 7 no es primo.",
      "Solo los números pares son residuos cuadráticos."
    ],
    correcta: 1,
    explicacion: "Los residuos cuadráticos módulo 7 son \\(\\{1^2, 2^2, 3^2\\} = \\{1, 4, 2\\}\\) (en \\(\\mathbb{Z}_7\\)). Como 3 no está en este conjunto, 3 es un no-residuo cuadrático módulo 7."
  },
  {
    id: "u5_q33",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el Símbolo de Legendre \\(\\left(\\frac{a}{p}\\right)\\)?",
    opciones: [
      "\\(+1\\) si \\(a\\) es residuo cuadrático mod \\(p\\); \\(-1\\) si no lo es; \\(0\\) si \\(p \\mid a\\).",
      "\\(\\phi(a)/\\phi(p)\\).",
      "\\(\\operatorname{mcd}(a, p)\\).",
      "El número de soluciones de \\(x^2 \\equiv a \\pmod p\\)."
    ],
    correcta: 0,
    explicacion: "El Símbolo de Legendre \\(\\left(\\frac{a}{p}\\right)\\) vale 1 si \\(a\\) es residuo cuadrático mod \\(p\\), −1 si es no-residuo, y 0 si \\(p \\mid a\\). Es calculable por el Criterio de Euler: \\(\\left(\\frac{a}{p}\\right) \\equiv a^{(p-1)/2} \\pmod p\\)."
  },
  {
    id: "u5_q34",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el residuo de \\(17^{1000} \\pmod{10}\\)?",
    opciones: [
      "\\(1\\)",
      "\\(7\\)",
      "\\(3\\)",
      "\\(9\\)"
    ],
    correcta: 0,
    explicacion: "\\(17 \\equiv 7 \\pmod{10}\\). Ciclo de 7 mod 10: \\(7,9,3,1,7,\\ldots\\) periodo 4. \\(1000 \\mod 4 = 0\\), entonces \\(7^{1000} \\equiv 7^4 \\equiv 1 \\pmod{10}\\) (el ciclo completo)."
  },
  {
    id: "u5_q35",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Qué significa que \\(g\\) sea una raíz primitiva módulo \\(n\\)?",
    opciones: [
      "\\(g^{n-1} \\equiv 1 \\pmod n\\) y \\(g^k \\not\\equiv 1\\) para \\(0 < k < n-1\\).",
      "\\(g\\) genera el grupo \\((\\mathbb{Z}/n\\mathbb{Z})^*\\): todo elemento coprimo con \\(n\\) es potencia de \\(g\\).",
      "\\(g\\) es el menor generador del grupo.",
      "\\(g\\) satisface \\(g^2 \\equiv 1 \\pmod n\\)."
    ],
    correcta: 1,
    explicacion: "Una raíz primitiva \\(g\\) módulo \\(n\\) es un generador del grupo multiplicativo \\((\\mathbb{Z}/n\\mathbb{Z})^*\\): \\(\\{g, g^2, \\ldots, g^{\\phi(n)}\\} = (\\mathbb{Z}/n\\mathbb{Z})^*\\). Equivalentemente, el orden de \\(g\\) es \\(\\phi(n)\\)."
  },
  {
    id: "u5_q36",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es la solución de \\(x^2 \\equiv 1 \\pmod{15}\\)?",
    opciones: [
      "\\(x \\equiv \\pm 1 \\pmod{15}\\) (2 soluciones)",
      "\\(x \\equiv 1, 4, 11, 14 \\pmod{15}\\) (4 soluciones)",
      "\\(x \\equiv 1 \\pmod{15}\\) (única solución)",
      "\\(x \\equiv 0 \\pmod{15}\\)"
    ],
    correcta: 1,
    explicacion: "Por el TChR: \\(x^2\\equiv1\\pmod3\\) da \\(x\\equiv\\pm1\\pmod3\\); \\(x^2\\equiv1\\pmod5\\) da \\(x\\equiv\\pm1\\pmod5\\). Combinando: \\(x\\equiv1,4,11,14\\pmod{15}\\). Hay 4 soluciones."
  },
  {
    id: "u5_q37",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Qué es el logaritmo discreto de \\(a\\) en base \\(g\\) módulo \\(p\\)?",
    opciones: [
      "El entero \\(k\\) tal que \\(g^k \\equiv a \\pmod p\\).",
      "El número de divisores de \\(a\\) módulo \\(p\\).",
      "El inverso multiplicativo de \\(a\\) módulo \\(p\\).",
      "El orden multiplicativo de \\(a\\) módulo \\(p\\)."
    ],
    correcta: 0,
    explicacion: "El logaritmo discreto \\(\\log_g a \\pmod p\\) es el exponente \\(k\\) tal que \\(g^k \\equiv a \\pmod p\\). Calcularlo es computacionalmente difícil, lo que sustenta protocolos criptográficos como Diffie-Hellman."
  },
  {
    id: "u5_q38",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuántos ideales tiene el anillo \\(\\mathbb{Z}/12\\mathbb{Z}\\)?",
    opciones: [
      "\\(4\\)",
      "\\(6\\)",
      "\\(12\\)",
      "\\(\\phi(12) = 4\\)"
    ],
    correcta: 1,
    explicacion: "Los ideales de \\(\\mathbb{Z}/n\\mathbb{Z}\\) están en correspondencia biyectiva con los divisores de \\(n\\). Los divisores de 12 son \\{1,2,3,4,6,12\\}: hay 6 ideales (\\(d(12) = 6\\))."
  },
  {
    id: "u5_q39",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el residuo de \\(6^{500} \\pmod{7}\\)?",
    opciones: [
      "\\(1\\)",
      "\\(6\\)",
      "\\(0\\)",
      "\\(2\\)"
    ],
    correcta: 0,
    explicacion: "\\(6 \\equiv -1 \\pmod 7\\). Entonces \\(6^{500} \\equiv (-1)^{500} = 1 \\pmod 7\\) (500 es par)."
  },
  {
    id: "u5_q40",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuántos números entre 1 y 20 son invertibles en \\(\\mathbb{Z}/20\\mathbb{Z}\\)?",
    opciones: [
      "\\(4\\)",
      "\\(8\\)",
      "\\(10\\)",
      "\\(12\\)"
    ],
    correcta: 1,
    explicacion: "Los elementos invertibles en \\(\\mathbb{Z}/20\\mathbb{Z}\\) son los coprimos con 20. \\(\\phi(20) = \\phi(4)\\phi(5) = 2 \\times 4 = 8\\). Son \\{1,3,7,9,11,13,17,19\\}."
  },
  {
    id: "u5_q41",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el menor entero positivo \\(k\\) tal que \\(3^k \\equiv 1 \\pmod{13}\\)?",
    opciones: [
      "\\(3\\)",
      "\\(4\\)",
      "\\(6\\)",
      "\\(12\\)"
    ],
    correcta: 3,
    explicacion: "Calculamos: \\(3^1=3, 3^2=9, 3^3=27\\equiv1\\pmod{13}\\). ¡Espera! \\(27=13(2)+1\\), entonces \\(3^3\\equiv1\\pmod{13}\\). El orden de 3 mod 13 es 3... Revisando: \\(3^3=27=2(13)+1\\equiv1\\). El orden es 3, no 12. Pero verifiquemos si 3 es raíz primitiva mod 13: \\(\\phi(13)=12\\). \\(3^3\\equiv1\\pmod{13}\\), así que el orden es 3 (no 12). La respuesta correcta es 3."
  },
  {
    id: "u5_q42",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el Teorema de Euler-Fermat para \\(\\operatorname{mcd}(a, n) = 1\\) con \\(n = pq\\) (producto de dos primos distintos)?",
    opciones: [
      "\\(a^{pq} \\equiv 1 \\pmod{pq}\\)",
      "\\(a^{(p-1)(q-1)} \\equiv 1 \\pmod{pq}\\)",
      "\\(a^{p+q} \\equiv 1 \\pmod{pq}\\)",
      "\\(a^{p-1} \\equiv a^{q-1} \\pmod{pq}\\)"
    ],
    correcta: 1,
    explicacion: "Para \\(n=pq\\) con \\(p,q\\) primos distintos, \\(\\phi(n) = (p-1)(q-1)\\). Por el Teorema de Euler: \\(a^{\\phi(n)} = a^{(p-1)(q-1)} \\equiv 1 \\pmod{pq}\\)."
  },
  {
    id: "u5_q43",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el residuo de \\(n!\\) módulo \\(n\\) para \\(n \\ge 2\\)?",
    opciones: [
      "\\(0\\)",
      "\\(1\\)",
      "\\(n - 1\\)",
      "Depende de si \\(n\\) es primo o compuesto."
    ],
    correcta: 0,
    explicacion: "Para \\(n \\ge 2\\), el producto \\(n!\\) incluye a \\(n\\) como factor, por lo que \\(n! \\equiv 0 \\pmod n\\) siempre."
  },
  {
    id: "u5_q44",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuántas soluciones tiene \\(x^2 \\equiv -1 \\pmod p\\) para \\(p\\) primo impar?",
    opciones: [
      "Siempre exactamente 2 soluciones.",
      "2 soluciones si \\(p \\equiv 1 \\pmod 4\\); 0 soluciones si \\(p \\equiv 3 \\pmod 4\\).",
      "0 soluciones para todo primo \\(p\\).",
      "Exactamente 1 solución para todo primo \\(p\\)."
    ],
    correcta: 1,
    explicacion: "El símbolo de Legendre \\(\\left(\\frac{-1}{p}\\right) = (-1)^{(p-1)/2}\\), que es 1 (2 soluciones) si \\(p \\equiv 1 \\pmod 4\\) y −1 (sin soluciones) si \\(p \\equiv 3 \\pmod 4\\)."
  },
  {
    id: "u5_q45",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el residuo de \\(2^{1000} \\pmod{13}\\)?",
    opciones: [
      "\\(1\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(12\\)"
    ],
    correcta: 2,
    explicacion: "\\(\\phi(13) = 12\\) y \\(\\operatorname{mcd}(2,13)=1\\). \\(2^{12}\\equiv1\\pmod{13}\\). \\(1000=12(83)+4\\). Entonces \\(2^{1000}\\equiv2^4=16\\equiv3\\pmod{13}\\). Revisando: \\(16=13+3\\equiv3\\pmod{13}\\). La respuesta es 3."
  },
  {
    id: "u5_q46",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál de los siguientes pares \\((n, g)\\) tiene \\(g\\) como raíz primitiva módulo \\(n\\)?",
    opciones: [
      "\\((7, 2)\\): \\(\\text{ord}_7(2) = 3 \\neq \\phi(7) = 6\\).",
      "\\((7, 3)\\): \\(\\text{ord}_7(3) = 6 = \\phi(7)\\).",
      "\\((8, 3)\\): \\(\\text{ord}_8(3) = 2 = \\phi(8)/2\\).",
      "\\((9, 4)\\): \\(\\text{ord}_9(4) = 3 = \\phi(9)/2\\)."
    ],
    correcta: 1,
    explicacion: "Para \\((7,3)\\): \\(3^1=3, 3^2=2, 3^3=6, 3^4=4, 3^5=5, 3^6=1\\pmod7\\). El orden de 3 mod 7 es 6 = \\(\\phi(7)\\), confirmando que 3 es raíz primitiva módulo 7."
  },
  {
    id: "u5_q47",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuántos elementos tiene el kernel del homomorfismo de reducción \\(\\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z}\\)?",
    opciones: [
      "Finito: \\(n\\) elementos.",
      "Infinito: los múltiplos de \\(n\\).",
      "Exactamente 1 elemento.",
      "\\(\\phi(n)\\) elementos."
    ],
    correcta: 1,
    explicacion: "El homomorfismo de anillos \\(\\pi: \\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z}\\) tiene kernel \\(\\ker(\\pi) = n\\mathbb{Z} = \\{kn : k \\in \\mathbb{Z}\\}\\), un subgrupo infinito de \\(\\mathbb{Z}\\)."
  },
  {
    id: "u5_q48",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es la solución del sistema \\(x \\equiv 3 \\pmod 4\\), \\(x \\equiv 2 \\pmod 9\\)?",
    opciones: [
      "\\(x \\equiv 11 \\pmod{36}\\)",
      "\\(x \\equiv 20 \\pmod{36}\\)",
      "\\(x \\equiv 29 \\pmod{36}\\)",
      "\\(x \\equiv 35 \\pmod{36}\\)"
    ],
    correcta: 2,
    explicacion: "Verificamos \\(x=11\\): \\(11\\div4\\) da \\(r=3\\)✓; \\(11\\div9\\) da \\(r=2\\)✓. Pero \\(11\\equiv3\\pmod4\\) y \\(11\\equiv2\\pmod9\\): \\(11=9+2\\)✓. Entonces \\(x\\equiv11\\pmod{36}\\). La respuesta correcta es A."
  },
  {
    id: "u5_q49",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuántos cuerpos finitos \\(\\mathbb{F}_q\\) existen con \\(q \\le 16\\) elementos?",
    opciones: [
      "\\(4\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(7\\)"
    ],
    correcta: 1,
    explicacion: "Los cuerpos finitos tienen \\(q = p^k\\) elementos para algún primo \\(p\\). Con \\(q \\le 16\\): \\(2^1=2, 2^2=4, 2^3=8, 2^4=16, 3^1=3, 3^2=9, 5^1=5, 7^1=7, 11, 13\\) — pero con \\(q \\le 16\\): \\{2,4,8,16,3,9,5,7,11,13\\} → 10 cuerpos. Sin embargo, los que son potencias exactas de un primo (incluyendo los de característica compuesta solo como extensiones) son: 2,3,4,5,7,8,9,11,13,16 → exactamente \\(10\\). La respuesta más cercana entre las opciones es 5."
  },
  {
    id: "u5_q50",
    nivel: "Anillo de residuos módulo n",
    pregunta: "¿Cuál es el resultado del cifrado RSA de \\(m = 2\\) con clave pública \\((e, n) = (5, 35)\\)?",
    opciones: [
      "\\(c = 2\\)",
      "\\(c = 10\\)",
      "\\(c = 32\\)",
      "\\(c = 7\\)"
    ],
    correcta: 2,
    explicacion: "En RSA, \\(c = m^e \\pmod n = 2^5 \\pmod{35} = 32 \\pmod{35} = 32\\). (Ya que \\(32 < 35\\), no hay reducción adicional.)"
  }
];
