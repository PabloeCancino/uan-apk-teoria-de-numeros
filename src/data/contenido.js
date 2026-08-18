// NTE-UAN-APK-001 v1.3 — Base de Conocimiento Curricular: Teoría de Números (CBIMAT-256)
// Universidad Autónoma de Nayarit — Licenciatura en Matemáticas (PALMAT Plan 2024 / Act. 2026)
// Docente Responsable: Dr. Pablo Eduardo Cancino Marentes
import { QUIZZES_U1 } from "./quizzes_u1.js";
import { QUIZZES_U2 } from "./quizzes_u2.js";
import { QUIZZES_U3 } from "./quizzes_u3.js";
import { QUIZZES_U4 } from "./quizzes_u4.js";
import { QUIZZES_U5 } from "./quizzes_u5.js";

export const META = {
  materia:        "teoria_de_numeros",
  nombreCompleto: "Teoría de Números UAN",
  version:        "1.0.0",
  autor:          "Dr. Pablo Eduardo Cancino Marentes",
  anio:           "2026",
  descripcion:    "Aplicación interactiva de Teoría de Números — Licenciatura en Matemáticas (PALMAT UAN) CBIMAT-256",
  unidad:         "Unidad Académica de Ciencias Básicas e Ingenierías",
  programa:       "Licenciatura en Matemáticas (PALMAT)",
  norma:          "NTE-UAN-APK-001 v1.3",
  github:         "https://github.com/PabloeCancino/uan-apk-teoria-de-numeros",
};

export const CATEGORIAS = [
  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 1: EL ANILLO DE LOS ENTEROS Z
  // ══════════════════════════════════════════════════════════════════════════
  {
    id:     "anillo_enteros",
    nombre: "El anillo de los enteros Z",
    icon:   "🔢",
    color:  "#e3b341",
    temas: [
      {
        id:         "axiomas_peano",
        titulo:     "1.1 Axiomas de Peano y Construcción de N y Z",
        definicion: "Los Axiomas de Peano (1889) proporcionan la fundamentación lógica rigurosa para el conjunto de los números naturales \\(\\mathbb{N}\\) a partir de una constante base \\(1\\) y una función sucesor inyectiva \\(S: \\mathbb{N} \\to \\mathbb{N}\\). El anillo de los enteros \\(\\mathbb{Z}\\) se construye formalmente como el cociente de pares ordenados \\(\\mathbb{N} \\times \\mathbb{N}\\) bajo la relación de equivalencia \\((a, b) \\sim (c, d) \\iff a + d = b + c\\), dotándolo de una estructura de dominio de integridad conmutativo unitario.",
        formula:    "\\mathbb{Z} = (\\mathbb{N} \\times \\mathbb{N}) / \\sim, \\quad (a, b) + (c, d) = (a+c, b+d), \\quad (a, b) \\cdot (c, d) = (ac+bd, ad+bc)",
        notas: [
          "Axioma 1 — Elemento base: \\(1 \\in \\mathbb{N}\\). El número \\(1\\) es un número natural (elemento inicial del sistema).",
          "Axioma 2 — Función sucesor: Para todo \\(n \\in \\mathbb{N}\\) existe un único sucesor \\(S(n) \\in \\mathbb{N}\\). Cada natural tiene un siguiente.",
          "Axioma 3 — El 1 no es sucesor: \\(\\forall n \\in \\mathbb{N},\\; S(n) \\neq 1\\). El elemento base \\(1\\) no es el sucesor de ningún natural.",
          "Axioma 4 — Inyectividad del sucesor: \\(S(m) = S(n) \\implies m = n\\). Naturales distintos tienen sucesores distintos.",
          "Axioma 5 — Inducción: Si \\(S \\subseteq \\mathbb{N}\\) cumple \\(1 \\in S\\) y \\(\\forall k(k \\in S \\implies S(k) \\in S)\\), entonces \\(S = \\mathbb{N}\\). Toda propiedad heredable desde el 1 vale para todos los naturales.",
          "\\(\\mathbb{Z}\\) es un Dominio de Ideales Principales (DIP) y un Dominio Euclidiano.",
          "Carece de divisores de cero propios: \\(a \\cdot b = 0 \\implies a = 0 \\lor b = 0\\)."
        ],
        tabla: {
          cabecera: ["Estructura", "Operaciones", "Propiedad Distintiva", "Clasificación Algebraica"],
          filas: [
            ["Naturales \\(\\mathbb{N}\\)", "Suma, Producto", "Principio del Buen Orden", "Monoide conmutativo"],
            ["Enteros \\(\\mathbb{Z}\\)", "Suma, Opuesto, Producto", "Dominio Euclidiano", "Anillo conmutativo unitario (DIP)"],
            ["Racionales \\(\\mathbb{Q}\\)", "Suma, Producto, Inverso", "Cuerpo de fracciones de \\(\\mathbb{Z}\\)", "Cuerpo arquimediano denso"],
          ],
        },
      },
      {
        id:         "principio_buen_orden_induccion",
        titulo:     "1.2 Principio del Buen Orden e Inducción Matemática",
        definicion: "El Principio del Buen Orden (PBO) postula que todo subconjunto no vacío \\(S \\subseteq \\mathbb{N}\\) posee un elemento mínimo \\(m \\in S\\) tal que \\(m \\le x\\) para todo \\(x \\in S\\). El PBO es lógicamente equivalente al Principio de Inducción Simple y a la Inducción Completa (fuerte). Es la herramienta medular para demostrar la existencia del algoritmo de la división y la terminación finita del algoritmo de Euclides.",
        formula:    "\\forall S \\subseteq \\mathbb{N}, \\; S \\neq \\emptyset \\implies \\exists m \\in S : \\forall x \\in S \\; (m \\le x)",
        notas: [
          "Inducción Simple: Base \\(P(1)\\) y Paso Inductivo \\(P(k) \\implies P(k+1)\\).",
          "Inducción Completa o Fuerte: Base \\(P(1)\\) y Paso \\([P(1) \\land \\dots \\land P(k)] \\implies P(k+1)\\).",
          "El método del descenso infinito de Fermat es una aplicación directa por contradicción del Buen Orden."
        ],
      },
      {
        id:         "divisibilidad_algoritmo",
        titulo:     "1.3 Divisibilidad en Z y Algoritmo de la División",
        definicion: "Dados \\(a, b \\in \\mathbb{Z}\\) con \\(b \\neq 0\\), decimos que \\(b\\) divide a \\(a\\) (notado \\(b \\mid a\\)) si existe un entero \\(c \\in \\mathbb{Z}\\) tal que \\(a = b \\cdot c\\). El Algoritmo de la División establece que para cualquier dividendo \\(a \\in \\mathbb{Z}\\) y divisor \\(b \\in \\mathbb{Z} \\setminus \\{0\\}\\), existen enteros únicos cociente \\(q\\) y residuo \\(r\\) tales que \\(a = bq + r\\) con \\(0 \\le r < |b|\\).",
        formula:    "a = b \\cdot q + r, \\quad \\text{con } 0 \\le r < |b|, \\quad q = \\left\\lfloor \\frac{a}{b} \\right\\rfloor, \\quad r = a - b \\left\\lfloor \\frac{a}{b} \\right\\rfloor",
        notas: [
          "Transitividad: Si \\(a \\mid b\\) y \\(b \\mid c\\), entonces \\(a \\mid c\\).",
          "Linealidad: Si \\(c \\mid a\\) y \\(c \\mid b\\), entonces \\(c \\mid (ax + by)\\) para cualesquiera \\(x, y \\in \\mathbb{Z}\\).",
          "El residuo \\(r\\) siempre es no negativo por definición matemática estricta."
        ],
        tabla: {
          cabecera: ["Dividendo \\(a\\)", "Divisor \\(b\\)", "Cociente \\(q\\)", "Residuo \\(r\\)", "Ecuación \\(a = bq + r\\)"],
          filas: [
            ["\\(47\\)", "\\(6\\)", "\\(7\\)", "\\(5\\)", "\\(47 = 6(7) + 5\\)"],
            ["\\(-47\\)", "\\(6\\)", "\\(-8\\)", "\\(1\\)", "\\(-47 = 6(-8) + 1\\)"],
            ["\\(105\\)", "\\(15\\)", "\\(7\\)", "\\(0\\)", "\\(105 = 15(7) + 0\\)"],
            ["\\(-28\\)", "\\(-5\\)", "\\(6\\)", "\\(2\\)", "\\(-28 = (-5)(6) + 2\\)"],
          ],
        },
      },
      {
        id:         "algoritmo_euclides_bezout",
        titulo:     "1.4 Algoritmo de Euclides e Identidad de Bézout",
        definicion: "El Máximo Común Divisor \\(d = \\operatorname{mcd}(a, b)\\) es el mayor entero que divide simultáneamente a \\(a\\) y \\(b\\). El Algoritmo de Euclides calcula \\(d\\) mediante divisiones sucesivas: \\(r_{i-1} = r_i q_{i+1} + r_{i+1}\\), finalizando cuando \\(r_{k+1} = 0\\), donde \\(d = r_k\\). El Teorema de Bézout garantiza que \\(d\\) es la menor combinación lineal entera positiva de \\(a\\) y \\(b\\): \\(ax + by = \\operatorname{mcd}(a, b)\\).",
        formula:    "\\operatorname{mcd}(a, b) = \\operatorname{mcd}(b, a \\bmod b), \\qquad a x_0 + b y_0 = \\operatorname{mcd}(a, b)",
        notas: [
          "Propiedad de factorización: \\(|a \\cdot b| = \\operatorname{mcd}(a, b) \\cdot \\operatorname{mcm}(a, b)\\).",
          "Lema de Euclides: Si \\(p\\) es primo y \\(p \\mid ab\\), entonces \\(p \\mid a\\) o \\(p \\mid b\\).",
          "Lema de Gauss: Si \\(a \\mid bc\\) y \\(\\operatorname{mcd}(a, b) = 1\\), entonces \\(a \\mid c\\)."
        ],
        widget: "euclides",
      },
      {
        id:         "ecuaciones_diofanticas",
        titulo:     "1.5 Ecuaciones Diofánticas Lineales en Dos Variables",
        definicion: "Una ecuación diofántica lineal en dos incógnitas es de la forma \\(ax + by = c\\) donde \\(a, b, c \\in \\mathbb{Z}\\) con \\(a, b\\) no ambos nulos. Posee soluciones enteras si y solo si \\(d = \\operatorname{mcd}(a, b)\\) divide a \\(c\\). Si \\((x_0, y_0)\\) es una solución particular obtenida por el algoritmo extendido de Euclides, la totalidad de soluciones enteras está parametrizada por \\(k \\in \\mathbb{Z}\\).",
        formula:    "x = x_0 + \\left(\\frac{b}{d}\\right) k, \\qquad y = y_0 - \\left(\\frac{a}{d}\\right) k, \\quad k \\in \\mathbb{Z}, \\quad d = \\operatorname{mcd}(a, b)",
        notas: [
          "Si \\(\\operatorname{mcd}(a, b) = 1\\), la ecuación \\(ax + by = c\\) siempre tiene infinitas soluciones enteras para cualquier \\(c \\in \\mathbb{Z}\\).",
          "Para hallar soluciones no negativas \\(x \\ge 0, y \\ge 0\\), se impone un sistema de desigualdades sobre el parámetro \\(k\\).",
          "El Teorema de Frobenius (problema de las monedas) determina el mayor entero que no puede expresarse como \\(ax + by\\) con \\(x, y \\ge 0\\): \\(g(a, b) = ab - a - b\\)."
        ],
        widget: "diofanticas",
      },
      {
        id:         "ternas_pitagoricas",
        titulo:     "1.6 Ternas Pitagóricas y Ecuaciones Cuadráticas",
        definicion: "Una terna pitagórica es una tupla de enteros positivos \\((a, b, c)\\) que satisface la ecuación diofántica cuadrática \\(a^2 + b^2 = c^2\\). Se dice que es primitiva si \\(\\operatorname{mcd}(a, b, c) = 1\\). Euclides demostró que toda terna primitiva (con \\(a\\) impar y \\(b\\) par) está generada biunívocamente por dos enteros coprimos \\(m > n > 0\\) de distinta paridad.",
        formula:    "a = m^2 - n^2, \\quad b = 2mn, \\quad c = m^2 + n^2, \\quad \\operatorname{mcd}(m, n) = 1, \\quad m \\not\\equiv n \\pmod 2",
        notas: [
          "En toda terna primitiva, exactamente uno de los catetos es múltiplo de 4, uno de los catetos es múltiplo de 3, y uno de los tres lados es múltiplo de 5.",
          "El área del triángulo rectángulo generado siempre es un entero divisible por 6.",
          "El Último Teorema de Fermat (demostrado por Andrew Wiles en 1995) prueba que \\(x^n + y^n = z^n\\) no tiene soluciones enteras no triviales para ningún entero \\(n \\ge 3\\)."
        ],
        tabla: {
          cabecera: ["Generadores \\((m, n)\\)", "Cateto \\(a = m^2-n^2\\)", "Cateto \\(b = 2mn\\)", "Hipotenusa \\(c = m^2+n^2\\)", "Comprobación \\(a^2+b^2=c^2\\)"],
          filas: [
            ["\\((2, 1)\\)", "\\(3\\)", "\\(4\\)", "\\(5\\)", "\\(9 + 16 = 25\\)"],
            ["\\((3, 2)\\)", "\\(5\\)", "\\(12\\)", "\\(13\\)", "\\(25 + 144 = 169\\)"],
            ["\\((4, 1)\\)", "\\(15\\)", "\\(8\\)", "\\(17\\)", "\\(225 + 64 = 289\\)"],
            ["\\((4, 3)\\)", "\\(7\\)", "\\(24\\)", "\\(25\\)", "\\(49 + 576 = 625\\)"],
            ["\\((5, 2)\\)", "\\(21\\)", "\\(20\\)", "\\(29\\)", "\\(441 + 400 = 841\\)"],
          ],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 2: PRIMALIDAD Y FACTORIZACIÓN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id:     "primalidad_factorizacion",
    nombre: "Primalidad",
    icon:   "🌿",
    color:  "#3fb950",
    temas: [
      {
        id:         "numeros_primos_coprimos",
        titulo:     "2.1 Números Primos y Números Relativos",
        definicion: "Un número entero \\(p > 1\\) es primo si sus únicos divisores positivos son \\(1\\) y \\(p\\). Si \\(n > 1\\) no es primo, se denomina compuesto. Dos enteros \\(a\\) y \\(b\\) son primos relativos (coprimos) si \\(\\operatorname{mcd}(a, b) = 1\\). Euclides demostró que el conjunto de los números primos \\(\\mathbb{P}\\) es infinito considerando el número \\(N = p_1 p_2 \\dots p_k + 1\\).",
        formula:    "p \\in \\mathbb{P} \\iff (d \\mid p \\land d > 0 \\implies d = 1 \\lor d = p), \\qquad |\\mathbb{P}| = \\infty",
        notas: [
          "El 2 es el único número primo par.",
          "Conjetura de Goldbach (1742): Todo entero par mayor que 2 es suma de dos primos.",
          "Conjetura de los primos gemelos: Existen infinitos pares de primos \\((p, p+2)\\)."
        ],
      },
      {
        id:         "criba_erastotenes",
        titulo:     "2.2 Criba de Eratóstenes y Conteo de Primos",
        definicion: "La Criba de Eratóstenes (siglo III a.C.) es un algoritmo sistemático para hallar todos los números primos hasta un límite \\(N\\). Se listan los enteros de \\(2\\) a \\(N\\) y sucesivamente se tachan los múltiplos de cada primo no tachado \\(p\\), iniciando en \\(p^2\\), hasta que \\(p > \\sqrt{N}\\). Los números remanentes son exactamente los primos en dicho rango.",
        formula:    "\\pi(N) = \\sum_{p \\le N, \\, p \\in \\mathbb{P}} 1, \\qquad \\pi(N) \\sim \\frac{N}{\\ln N} \\quad (N \\to \\infty)",
        notas: [
          "Complejidad temporal de la criba: \\(O(N \\log \\log N)\\).",
          "Basta verificar divisibilidad por primos \\(p \\le \\sqrt{N}\\) para comprobar la primalidad de \\(N\\).",
          "El Teorema de los Números Primos (Hadamard y de la Vallée Poussin, 1896) cuantifica la densidad asintótica de primos."
        ],
        widget: "criba",
      },
      {
        id:         "teorema_fundamental_aritmetica",
        titulo:     "2.3 Teorema Fundamental de la Aritmética",
        definicion: "Todo entero \\(n > 1\\) puede expresarse como producto de uno o más factores primos de forma única, salvo por el orden de los factores. Esta representación canónica permite caracterizar completamente todas las propiedades de divisibilidad, cálculo de divisores, MCD y MCM a partir de los exponentes de los factores primos.",
        formula:    "n = p_1^{a_1} p_2^{a_2} \\dots p_k^{a_k} = \\prod_{i=1}^k p_i^{a_i}, \\quad p_1 < p_2 < \\dots < p_k, \\; a_i \\ge 1",
        notas: [
          "Fórmula canónica para MCD: \\(\\operatorname{mcd}(a, b) = \\prod p_i^{\\min(a_i, b_i)}\\).",
          "Fórmula canónica para MCM: \\(\\operatorname{mcm}(a, b) = \\prod p_i^{\\max(a_i, b_i)}\\).",
          "La existencia se demuestra por inducción/buen orden y la unicidad mediante el Lema de Euclides."
        ],
      },
      {
        id:         "metodos_factorizacion",
        titulo:     "2.4 Métodos Elementales de Factorización",
        definicion: "La factorización de enteros es el proceso de descomponer un número compuesto en sus factores primos. Los métodos elementales incluyen la división por tentativa hasta \\(\\sqrt{n}\\), el método de factorización de Fermat basado en diferencias de cuadrados \\(n = x^2 - y^2 = (x-y)(x+y)\\), el método \\(\\rho\\) de Pollard y el algoritmo de cribas modernas.",
        formula:    "n = x^2 - y^2 \\iff x^2 - n = y^2 \\implies n = (x - y)(x + y)",
        notas: [
          "El método de Fermat es sumamente rápido cuando \\(n\\) tiene dos factores de tamaño similar.",
          "La dificultad computacional de la factorización de enteros grandes sustenta la criptografía asimétrica moderna (RSA).",
          "Criptosistema RSA: La clave pública usa \\(n = pq\\); descifrar requiere conocer \\(\\phi(n) = (p-1)(q-1)\\)."
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 3: ELEMENTOS DE COMBINATORIA Y TEOREMAS CLÁSICOS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id:     "combinatoria_teoremas",
    nombre: "Elementos de combinatoria",
    icon:   "📐",
    color:  "#58a6ff",
    temas: [
      {
        id:         "conteo_permutaciones_combinaciones",
        titulo:     "3.1 Principios de Conteo y Coeficientes Binomiales",
        definicion: "El análisis combinatorio enumera las configuraciones de conjuntos finitos. Para un conjunto de \\(n\\) elementos, el número de formas de ordenar \\(k\\) elementos es \\(V_k^n = \\frac{n!}{(n-k)!}\\) (variaciones), mientras que el número de subconjuntos de cardinalidad \\(k\\) sin importar el orden es el coeficiente binomial \\(\\binom{n}{k} = \\frac{n!}{k!(n-k)!}\\).",
        formula:    "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}, \\qquad (x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k",
        notas: [
          "Identidad de simetría: \\(\\binom{n}{k} = \\binom{n}{n-k}\\).",
          "Suma de la fila \\(n\\): \\(\\sum_{k=0}^n \\binom{n}{k} = 2^n\\).",
          "Suma alternada: \\(\\sum_{k=0}^n (-1)^k \\binom{n}{k} = 0\\) para \\(n \\ge 1\\)."
        ],
      },
      {
        id:         "triangulo_pascal_propiedades",
        titulo:     "3.2 Triángulo de Pascal y Relaciones Aritméticas",
        definicion: "El Triángulo de Pascal organiza geométricamente los coeficientes binomiales \\(\\binom{n}{k}\\) donde cada término interior es la suma de los dos superiores inmediatos: \\(\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}\\). Conecta directamente con los números figurados, los coeficientes polinomiales y la sucesión de Fibonacci (sumando diagonales inclinadas).",
        formula:    "\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}, \\qquad F_{n+1} = \\sum_{k=0}^{\\lfloor n/2 \\rfloor} \\binom{n-k}{k}",
        notas: [
          "Si \\(p\\) es primo, entonces \\(p \\mid \\binom{p}{k}\\) para todo \\(1 \\le k \\le p-1\\).",
          "Teorema de Lucas: Permite calcular \\(\\binom{n}{k} \\bmod p\\) a partir de las expansiones en base \\(p\\) de \\(n\\) y \\(k\\).",
          "Visualmente, colorear los números impares en el triángulo de Pascal genera el fractal del triángulo de Sierpinski."
        ],
      },
      {
        id:         "teoremas_fermat_wilson",
        titulo:     "3.3 Teoremas de Fermat y Wilson",
        definicion: "El Pequeño Teorema de Fermat establece que si \\(p\\) es primo y \\(\\operatorname{mcd}(a, p) = 1\\), entonces \\(a^{p-1} \\equiv 1 \\pmod p\\). El Teorema de Wilson proporciona un criterio analítico exacto de primalidad demostrando que \\((p-1)! \\equiv -1 \\pmod p\\) si y solo si \\(p\\) es un número primo.",
        formula:    "a^{p-1} \\equiv 1 \\pmod p \\; (\\operatorname{mcd}(a,p)=1), \\qquad (p-1)! \\equiv -1 \\pmod p \\iff p \\in \\mathbb{P}",
        notas: [
          "Demostración combinatoria de Fermat: Contando collares de \\(p\\) cuentas con \\(a\\) colores.",
          "El Teorema de Wilson es ineficiente computacionalmente para primos grandes debido al crecimiento factorial de \\((p-1)!\\).",
          "Los números pseudoprimos de Fermat son compuestos que satisfacen \\(a^{n-1} \\equiv 1 \\pmod n\\) para ciertas bases."
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 4: FUNCIONES ARITMÉTICAS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id:     "funciones_aritmeticas",
    nombre: "Funciones aritméticas",
    icon:   "📊",
    color:  "#bc8cff",
    temas: [
      {
        id:         "funciones_d_sigma",
        titulo:     "4.1 Número de Divisores d(n) y Suma de Divisores sigma(n)",
        definicion: "Una función aritmética es una función cuyo dominio es \\(\\mathbb{N}\\). La función \\(d(n)\\) cuenta la cantidad de divisores positivos de \\(n\\), y \\(\\sigma(n)\\) calcula su suma. Ambas funciones son multiplicativas: \\(f(mn) = f(m)f(n)\\) siempre que \\(\\operatorname{mcd}(m, n) = 1\\).",
        formula:    "d(n) = \\prod_{i=1}^k (a_i + 1), \\qquad \\sigma(n) = \\prod_{i=1}^k \\frac{p_i^{a_i + 1} - 1}{p_i - 1}",
        notas: [
          "\\(d(n)\\) es impar si y solo si \\(n\\) es un cuadrado perfecto.",
          "La función de Dirichlet generalizada \\(\\sigma_k(n) = \\sum_{d \\mid n} d^k\\) satisface \\(\\sigma_0(n) = d(n)\\) y \\(\\sigma_1(n) = \\sigma(n)\\).",
          "Convolución de Dirichlet de funciones aritméticas: \\((f * g)(n) = \\sum_{d \\mid n} f(d) g(n/d)\\)."
        ],
        widget: "funciones_aritmeticas",
      },
      {
        id:         "perfectos_mersenne",
        titulo:     "4.2 Números Perfectos y Primos de Mersenne",
        definicion: "Un entero positivo \\(n\\) es perfecto si \\(\\sigma(n) = 2n\\) (la suma de sus divisores propios es \\(n\\)). El Teorema de Euclides-Euler demuestra que un entero par \\(N\\) es perfecto si y solo si \\(N = 2^{p-1}(2^p - 1)\\), donde \\(M_p = 2^p - 1\\) es un primo de Mersenne (lo que requiere que \\(p\\) sea primo).",
        formula:    "N = 2^{p-1}(2^p - 1) \\quad \\text{con } M_p = 2^p - 1 \\in \\mathbb{P} \\iff \\sigma(N) = 2N",
        notas: [
          "Primeros 4 números perfectos conocidos desde la antigüedad: 6, 28, 496, 8128.",
          "Problema abierto: ¿Existen números perfectos impares? (No se ha encontrado ninguno hasta \\(10^{1500}\\)).",
          "Test de Lucas-Lehmer: Algoritmo determinista ultra-rápido para probar primalidad de números de Mersenne."
        ],
      },
      {
        id:         "phi_euler_mobius",
        titulo:     "4.3 Función phi de Euler y Función de Möbius",
        definicion: "La función totatriz \\(\\phi(n)\\) de Euler cuenta los enteros positivos \\(1 \\le k \\le n\\) coprimos con \\(n\\). Es multiplicativa con \\(\\phi(p^a) = p^a - p^{a-1}\\). La función de Möbius \\(\\mu(n)\\) vale \\(1\\) si \\(n=1\\), \\((-1)^k\\) si \\(n\\) es producto de \\(k\\) primos distintos, y \\(0\\) si tiene factores cuadrados. La Fórmula de Inversión de Möbius permite despejar funciones definidas por sumas de divisores.",
        formula:    "\\phi(n) = n \\prod_{p \\mid n} \\left(1 - \\frac{1}{p}\\right), \\qquad g(n) = \\sum_{d \\mid n} f(d) \\iff f(n) = \\sum_{d \\mid n} \\mu(d) g\\left(\\frac{n}{d}\\right)",
        notas: [
          "Identidad de Gauss: \\(\\sum_{d \\mid n} \\phi(d) = n\\).",
          "Identidad de Möbius: \\(\\sum_{d \\mid n} \\mu(d) = [n = 1]\\) (delta de Kronecker).",
          "La función zeta de Riemann satisface \\(\\sum_{n=1}^\\infty \\frac{\\mu(n)}{n^s} = \\frac{1}{\\zeta(s)}\\)."
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNIDAD 5: ANILLO DE RESIDUOS MÓDULO N
  // ══════════════════════════════════════════════════════════════════════════
  {
    id:     "anillo_residuos",
    nombre: "Anillo de residuos módulo n",
    icon:   "🕒",
    color:  "#f0883e",
    temas: [
      {
        id:         "congruencias_propiedades",
        titulo:     "5.1 Congruencias y Álgebra Modular",
        definicion: "Dados \\(a, b \\in \\mathbb{Z}\\) y \\(m \\in \\mathbb{N}\\), decimos que \\(a\\) es congruente con \\(b\\) módulo \\(m\\) (notado \\(a \\equiv b \\pmod m\\)) si \\(m \\mid (a - b)\\). La congruencia módulo \\(m\\) es una relación de equivalencia que particiona a \\(\\mathbb{Z}\\) en \\(m\\) clases de equivalencia \\(\\mathbb{Z}/m\\mathbb{Z}\\), compatibles con la adición y multiplicación de anillos.",
        formula:    "a \\equiv b \\pmod m \\iff m \\mid (a - b) \\iff a \\bmod m = b \\bmod m",
        notas: [
          "Compatibilidad: Si \\(a \\equiv b\\) y \\(c \\equiv d\\), entonces \\(a + c \\equiv b + d\\) y \\(ac \\equiv bd \\pmod m\\).",
          "Regla de cancelación: \\(ac \\equiv bc \\pmod m \\iff a \\equiv b \\pmod{m / \\operatorname{mcd}(c, m)}\\).",
          "Criterios de divisibilidad usuales (por 3, 9, 11) se derivan examinando las potencias de 10 módulo \\(m\\)."
        ],
        widget: "reloj_modular",
      },
      {
        id:         "teorema_euler_unidades",
        titulo:     "5.2 Teorema de Euler y Grupo de Unidades Z_n^*",
        definicion: "El conjunto de unidades \\(\\mathbb{Z}_m^\\times = \\{ [a] \\in \\mathbb{Z}_m : \\operatorname{mcd}(a, m) = 1 \\}\\) forma un grupo abeliano bajo la multiplicación modular de orden \\(|\\mathbb{Z}_m^\\times| = \\phi(m)\\). Por el teorema de Lagrange, todo elemento \\(a\\) coprimo con \\(m\\) cumple el Teorema de Euler: \\(a^{\\phi(m)} \\equiv 1 \\pmod m\\).",
        formula:    "a^{\\phi(m)} \\equiv 1 \\pmod m \\quad \\text{si } \\operatorname{mcd}(a, m) = 1, \\qquad a^{-1} \\equiv a^{\\phi(m) - 1} \\pmod m",
        notas: [
          "Un elemento \\(a\\) tiene inverso multiplicativo módulo \\(m\\) si y solo si \\(\\operatorname{mcd}(a, m) = 1\\).",
          "Si \\(p\\) es primo, \\(\\mathbb{Z}_p\\) es un cuerpo finito \\(\\mathbb{F}_p\\) y todo elemento no nulo es invertible.",
          "Un número compuesto \\(n\\) que cumple \\(a^{n-1} \\equiv 1 \\pmod n\\) para todo \\(a\\) coprimo con \\(n\\) se llama número de Carmichael (ej. 561, 1105)."
        ],
      },
      {
        id:         "congruencias_lineales",
        titulo:     "5.3 Congruencias Lineales y Métodos de Solución",
        definicion: "Una congruencia lineal tiene la forma \\(ax \\equiv b \\pmod m\\). Es soluble si y solo si \\(d = \\operatorname{mcd}(a, m)\\) divide a \\(b\\). Si la condición se cumple, posee exactamente \\(d\\) soluciones mutuamente incongruentes módulo \\(m\\), obtenibles multiplicando la ecuación simplificada \\((a/d)x \\equiv (b/d) \\pmod{m/d}\\) por el inverso modular de \\(a/d\\).",
        formula:    "ax \\equiv b \\pmod m, \\quad d = \\operatorname{mcd}(a, m) \\mid b \\implies x_k \\equiv x_0 + k \\left(\\frac{m}{d}\\right) \\pmod m, \\; k \\in \\{0, \\dots, d-1\\}",
        notas: [
          "Si \\(\\operatorname{mcd}(a, m) = 1\\), la solución es única módulo \\(m\\): \\(x \\equiv a^{-1} b \\pmod m\\).",
          "El cálculo del inverso \\(a^{-1} \\pmod m\\) se ejecuta en tiempo logarítmico con el Algoritmo Extendido de Euclides.",
          "Equivale geométricamente a resolver la ecuación diofántica \\(ax - my = b\\)."
        ],
      },
      {
        id:         "teorema_chino_residuo",
        titulo:     "5.4 Teorema Chino del Residuo (CRT)",
        definicion: "Sean \\(m_1, m_2, \\dots, m_k\\) enteros positivos coprimos dos a dos (\\(\\operatorname{mcd}(m_i, m_j) = 1\\) para \\(i \\neq j\\)). Para cualquier colección de enteros \\(a_1, a_2, \\dots, a_k\\), el sistema de congruencias simultáneas \\(x \\equiv a_i \\pmod{m_i}\\) posee una solución entera única módulo \\(M = m_1 m_2 \\dots m_k\\).",
        formula:    "x \\equiv \\sum_{i=1}^k a_i M_i y_i \\pmod M, \\quad M = \\prod_{i=1}^k m_i, \\quad M_i = \\frac{M}{m_i}, \\quad M_i y_i \\equiv 1 \\pmod{m_i}",
        notas: [
          "Establece el isomorfismo de anillos \\(\\mathbb{Z}/M\\mathbb{Z} \\cong \\mathbb{Z}/m_1\\mathbb{Z} \\times \\dots \\times \\mathbb{Z}/m_k\\mathbb{Z}\\).",
          "Permite realizar operaciones aritméticas con números gigantescos en computación paralela modular (RNS).",
          "Apareció por primera vez en el siglo III en el manual matemático del sabio chino Sun Tzu."
        ],
        widget: "crt",
      },
    ],
  },
];

export const QUIZZES = [
  ...QUIZZES_U1,
  ...QUIZZES_U2,
  ...QUIZZES_U3,
  ...QUIZZES_U4,
  ...QUIZZES_U5,
];
