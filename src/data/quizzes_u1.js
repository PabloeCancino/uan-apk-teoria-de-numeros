// NTE-UAN-APK-001 v1.3 — Banco de Reactivos: Unidad 1 (El anillo de los enteros Z)
// Licenciatura en Matemáticas — UAN (CBIMAT-256)

export const QUIZZES_U1 = [
  {
    id: "u1_q1",
    nivel: "El anillo de los enteros Z",
    pregunta: "¿Cuál es el axioma de Peano que fundamenta el principio de inducción matemática en \\(\\mathbb{N}\\)?",
    opciones: [
      "El número 1 es un número natural y no es sucesor de ningún natural.",
      "Si un conjunto \\(S \\subseteq \\mathbb{N}\\) contiene a 1 y para todo \\(k \\in S\\) se tiene \\(S(k) \\in S\\), entonces \\(S = \\mathbb{N}\\).",
      "La función sucesor es inyectiva: si \\(S(a) = S(b)\\), entonces \\(a = b\\).",
      "Todo número natural distinto de 1 posee un predecesor único."
    ],
    correcta: 1,
    explicacion: "El quinto axioma de Peano (axioma de inducción) establece que cualquier subconjunto inductivo de \\(\\mathbb{N}\\) que contiene al elemento base coincide con la totalidad de \\(\\mathbb{N}\\)."
  },
  {
    id: "u1_q2",
    nivel: "El anillo de los enteros Z",
    pregunta: "¿Qué establece el Principio del Buen Orden para los números enteros?",
    opciones: [
      "Todo subconjunto no vacío de enteros acotado inferiormente posee un elemento mínimo.",
      "Todo subconjunto infinito de \\(\\mathbb{Z}\\) contiene al menos un número primo.",
      "Para todo entero \\(a\\) y \\(b\\), existe un entero \\(q\\) tal que \\(a = bq\\).",
      "La suma y el producto en \\(\\mathbb{Z}\\) son operaciones conmutativas y asociativas."
    ],
    correcta: 0,
    explicacion: "El Principio del Buen Orden garantiza que cualquier conjunto no vacío de enteros con cota inferior (en particular cualquier subconjunto no vacío de \\(\\mathbb{N}\\)) tiene un elemento mínimo."
  },
  {
    id: "u1_q3",
    nivel: "El anillo de los enteros Z",
    pregunta: "Por el Algoritmo de la División, al dividir \\(a = -47\\) entre \\(b = 6\\), ¿cuáles son el cociente \\(q\\) y el residuo \\(r\\) únicos tales que \\(a = bq + r\\) con \\(0 \\le r < |b|\\)?",
    opciones: [
      "\\(q = -7, \\quad r = -5\\)",
      "\\(q = -8, \\quad r = 1\\)",
      "\\(q = -7, \\quad r = 5\\)",
      "\\(q = -8, \\quad r = 5\\)"
    ],
    correcta: 1,
    explicacion: "El residuo en el algoritmo de la división euclídea debe ser no negativo: \\(0 \\le r < 6\\). Comprobamos: \\(-47 = 6(-8) + 1 = -48 + 1 = -47\\), con \\(r = 1\\)."
  },
  {
    id: "u1_q4",
    nivel: "El anillo de los enteros Z",
    pregunta: "¿Cuál es el valor de \\(\\operatorname{mcd}(360, 132)\\)?",
    opciones: [
      "\\(6\\)",
      "\\(12\\)",
      "\\(24\\)",
      "\\(36\\)"
    ],
    correcta: 1,
    explicacion: "Por divisiones sucesivas: \\(360 = 132(2) + 96\\), \\(132 = 96(1) + 36\\), \\(96 = 36(2) + 24\\), \\(36 = 24(1) + 12\\), \\(24 = 12(2) + 0\\). El último residuo no nulo es 12."
  },
  {
    id: "u1_q5",
    nivel: "El anillo de los enteros Z",
    pregunta: "Si \\(\\operatorname{mcd}(a, b) = 15\\) y \\(a \\cdot b = 1800\\), ¿cuál es el valor del mínimo común múltiplo \\(\\operatorname{mcm}(a, b)\\)?",
    opciones: [
      "\\(60\\)",
      "\\(120\\)",
      "\\(240\\)",
      "\\(300\\)"
    ],
    correcta: 1,
    explicacion: "Se cumple la propiedad fundamental \\(|a \\cdot b| = \\operatorname{mcd}(a, b) \\cdot \\operatorname{mcm}(a, b)\\). Por tanto, \\(\\operatorname{mcm}(a, b) = 1800 / 15 = 120\\)."
  },
  {
    id: "u1_q6",
    nivel: "El anillo de los enteros Z",
    pregunta: "¿Cuál es la condición necesaria y suficiente para que la ecuación diofántica lineal \\(ax + by = c\\) tenga soluciones enteras \\((x, y) \\in \\mathbb{Z}^2\\)?",
    opciones: [
      "\\(a\\) y \\(b\\) deben ser números primos.",
      "\\(\\operatorname{mcd}(a, b)\\) debe dividir a \\(c\\).",
      "\\(a + b = c\\).",
      "\\(c\\) debe ser un múltiplo tanto de \\(a\\) como de \\(b\\)."
    ],
    correcta: 1,
    explicacion: "Por el Teorema de Bézout, cualquier combinación entera \\(ax + by\\) es múltiplo de \\(d = \\operatorname{mcd}(a,b)\\). Por consiguiente, la ecuación tiene solución entera si y solo si \\(d \\mid c\\)."
  },
  {
    id: "u1_q7",
    nivel: "El anillo de los enteros Z",
    pregunta: "¿Cuál de las siguientes ternas es una terna pitagórica primitiva?",
    opciones: [
      "\\((6, 8, 10)\\)",
      "\\((5, 12, 13)\\)",
      "\\((9, 12, 15)\\)",
      "\\((8, 15, 18)\\)"
    ],
    correcta: 1,
    explicacion: "Una terna pitagórica \\((a, b, c)\\) es primitiva si \\(a^2 + b^2 = c^2\\) y \\(\\operatorname{mcd}(a, b, c) = 1\\). En \\((5, 12, 13)\\), \\(5^2 + 12^2 = 25 + 144 = 169 = 13^2\\) y sus elementos son coprimos."
  },
  {
    id: "u1_q8",
    nivel: "El anillo de los enteros Z",
    pregunta: "Si \\((a, b, c)\\) es una terna pitagórica primitiva generada por los enteros coprimos \\(m > n > 0\\) de distinta paridad mediante las fórmulas de Euclides, ¿cuál es la expresión de la hipotenusa \\(c\\)?",
    opciones: [
      "\\(c = m^2 - n^2\\)",
      "\\(c = 2mn\\)",
      "\\(c = m^2 + n^2\\)",
      "\\(c = (m + n)^2\\)"
    ],
    correcta: 2,
    explicacion: "Las fórmulas de Euclides parametrizan las ternas primitivas como \\(a = m^2 - n^2\\), \\(b = 2mn\\) y \\(c = m^2 + n^2\\)."
  },
  {
    id: "u1_q9",
    nivel: "El anillo de los enteros Z",
    pregunta: "Según el Lema de Euclides, si \\(p\\) es un número primo y \\(p \\mid (ab)\\), ¿qué se deduce necesariamente?",
    opciones: [
      "\\(p \\mid a\\) o \\(p \\mid b\\)",
      "\\(p \\mid a\\) y \\(p \\mid b\\)",
      "\\(p = a\\) o \\(p = b\\)",
      "\\(\\operatorname{mcd}(a, b) = p\\)"
    ],
    correcta: 0,
    explicacion: "El Lema de Euclides afirma que si un primo divide al producto de dos enteros, divide forzosamente a al menos uno de los factores."
  },
  {
    id: "u1_q10",
    nivel: "El anillo de los enteros Z",
    pregunta: "Si una solución particular de la ecuación \\(7x + 5y = 1\\) es \\((x_0, y_0) = (3, -4)\\), ¿cuál es la forma general de todas las soluciones enteras con \\(k \\in \\mathbb{Z}\\)?",
    opciones: [
      "\\(x = 3 + 7k, \\quad y = -4 - 5k\\)",
      "\\(x = 3 + 5k, \\quad y = -4 - 7k\\)",
      "\\(x = 3 - 5k, \\quad y = -4 - 7k\\)",
      "\\(x = 3 + k, \\quad y = -4 - k\\)"
    ],
    correcta: 1,
    explicacion: "Para \\(ax + by = c\\) con \\(\\operatorname{mcd}(a,b) = 1\\), la solución general es \\(x = x_0 + bk\\), \\(y = y_0 - ak\\). Con \\(a=7, b=5\\): \\(x = 3 + 5k\\), \\(y = -4 - 7k\\)."
  }
];
