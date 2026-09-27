/**
 * ============================================================================
 * JS CODE QUEST - TRILHA DE 10 DESAFIOS COM TEST RUNNER ESTILO JEST
 * ============================================================================
 * Ambiente de desenvolvimento com Monaco Editor, execução dinâmica e
 * terminal integrado que renderiza os resultados dos testes no formato do Jest.
 */

/* ============================================================================
   1. BASE DE DADOS: OS 10 DESAFIOS DA TRILHA
   ============================================================================ */
const CHALLENGES = [
  {
    id: 1,
    title: "Sistema de Descontos VIP",
    difficulty: "Iniciante",
    tags: ["Condicionais", "Operadores", "Matemática"],
    problem: `Você foi contratado para implementar o módulo financeiro de um e-commerce moderno. Clientes com status <strong>VIP</strong> recebem <strong>20% de desconto</strong> sobre o valor original de qualquer compra, enquanto clientes comuns pagam o <strong>valor integral</strong> (sem desconto).`,
    rules: [
      "Complete a função <code>calcularPreco(valor, isVip)</code>.",
      "O parâmetro <code>valor</code> é um número positivo que representa o valor original da compra.",
      "O parâmetro <code>isVip</code> é um booleano (<code>true</code> ou <code>false</code>).",
      "Se <code>isVip === true</code>, aplique 20% de desconto.",
      "Se <code>isVip === false</code>, retorne o próprio <code>valor</code> original sem alteração.",
      "A função deve sempre retornar um valor numérico."
    ],
    functionName: "calcularPreco",
    signature: "calcularPreco(valor, isVip)",
    initialCode: `function calcularPreco(valor, isVip) {
  if (!isVip) {
    return valor * 0.8;
  }
  return valor;
}`,
    testCases: [
      { id: 1, desc: "Cliente VIP recebe 20% de desconto sobre 100", args: [100, true], expected: 80, explanation: "100 com 20% off = 80" },
      { id: 2, desc: "Cliente comum paga valor integral sobre 100", args: [100, false], expected: 100, explanation: "Sem desconto = 100" },
      { id: 3, desc: "Cliente VIP com valor decimal (50.50)", args: [50.50, true], expected: 40.4, explanation: "50.50 com 20% off = 40.4" }
    ]
  },
  {
    id: 2,
    title: "Cálculo de Média Escolar",
    difficulty: "Iniciante",
    tags: ["Aritmética", "Funções"],
    problem: `Um colégio precisa de uma função para calcular a média aritmética simples de um aluno a partir de 3 notas bimestrais. A função deve somar as notas e dividir pelo total de avaliações (3).`,
    rules: [
      "Complete a função <code>calcularMedia(nota1, nota2, nota3)</code>.",
      "Os três parâmetros são números representando notas de provas.",
      "A função deve retornar a média aritmética calculada como um número."
    ],
    functionName: "calcularMedia",
    signature: "calcularMedia(nota1, nota2, nota3)",
    initialCode: `function calcularMedia(nota1, nota2, nota3) {
  return nota1 + nota2 + nota3 / 3;
}`,
    testCases: [
      { id: 1, desc: "Notas padrão 7, 8 e 9", args: [7, 8, 9], expected: 8, explanation: "(7 + 8 + 9) / 3 = 8" },
      { id: 2, desc: "Três notas iguais a 6", args: [6, 6, 6], expected: 6, explanation: "(6 + 6 + 6) / 3 = 6" },
      { id: 3, desc: "Notas variadas 10, 5 e 6", args: [10, 5, 6], expected: 7, explanation: "(10 + 5 + 6) / 3 = 7" }
    ]
  },
  {
    id: 3,
    title: "Verificador de Maioridade",
    difficulty: "Iniciante",
    tags: ["Condicionais", "Strings"],
    problem: `Para controlar o acesso a um evento exclusivo, precisamos validar se uma pessoa possui idade igual ou superior a 18 anos. Crie uma função que receba a idade e retorne a classificação textual correspondente.`,
    rules: [
      "Complete a função <code>verificarMaioridade(idade)</code>.",
      "O parâmetro <code>idade</code> é um número inteiro positivo.",
      "Se <code>idade >= 18</code>, retorne exatamente a string <code>\"Maior de idade\"</code>.",
      "Se <code>idade < 18</code>, retorne exatamente a string <code>\"Menor de idade\"</code>."
    ],
    functionName: "verificarMaioridade",
    signature: "verificarMaioridade(idade)",
    initialCode: `function verificarMaioridade(idade) {
  if (idade > 18) {
    return "Maior de Idade";
  } else {
    return "menor de idade";
  }
}`,
    testCases: [
      { id: 1, desc: "Pessoa com exatamente 18 anos", args: [18], expected: "Maior de idade", explanation: "18 anos já é maior de idade" },
      { id: 2, desc: "Jovem com 15 anos", args: [15], expected: "Menor de idade", explanation: "Menor que 18" },
      { id: 3, desc: "Adulto com 21 anos", args: [21], expected: "Maior de idade", explanation: "Maior que 18" }
    ]
  },
  {
    id: 4,
    title: "Par ou Ímpar",
    difficulty: "Iniciante",
    tags: ["Operador Módulo", "Matemática"],
    problem: `Crie uma função matemática elementar que receba um número inteiro e identifique se ele é par ou ímpar utilizando o operador de resto da divisão (<code>%</code>).`,
    rules: [
      "Complete a função <code>verificarParidade(numero)</code>.",
      "O parâmetro <code>numero</code> é um número inteiro.",
      "Se o número for par, retorne exatamente <code>\"Par\"</code>.",
      "Se o número for ímpar, retorne exatamente <code>\"Ímpar\"</code>."
    ],
    functionName: "verificarParidade",
    signature: "verificarParidade(numero)",
    initialCode: `function verificarParidade(numero) {
  if (numero / 2 === 0) {
    return "Ímpar";
  }
  return "Par";
}`,
    testCases: [
      { id: 1, desc: "Número par positivo (4)", args: [4], expected: "Par", explanation: "4 % 2 = 0" },
      { id: 2, desc: "Número ímpar positivo (7)", args: [7], expected: "Ímpar", explanation: "7 % 2 = 1" },
      { id: 3, desc: "Zero (0)", args: [0], expected: "Par", explanation: "0 % 2 = 0" }
    ]
  },
  {
    id: 5,
    title: "Cálculo de IMC",
    difficulty: "Iniciante",
    tags: ["Matemática", "Ponto Flutuante"],
    problem: `O Índice de Massa Corporal (IMC) é uma medida adotada pela Organização Mundial da Saúde para calcular o peso ideal. A fórmula é dada pelo peso dividido pela altura ao quadrado.`,
    rules: [
      "Complete a função <code>calcularIMC(peso, altura)</code>.",
      "O parâmetro <code>peso</code> é em quilogramas e <code>altura</code> em metros.",
      "Calcule o IMC e retorne o valor numérico arredondado para 2 casas decimais."
    ],
    functionName: "calcularIMC",
    signature: "calcularIMC(peso, altura)",
    initialCode: `function calcularIMC(peso, altura) {
  const imc = peso / altura;
  return imc.toFixed(2);
}`,
    testCases: [
      { id: 1, desc: "Peso 70kg e altura 1.75m", args: [70, 1.75], expected: 22.86, explanation: "70 / (1.75 * 1.75) = 22.86" },
      { id: 2, desc: "Peso 80kg e altura 1.80m", args: [80, 1.80], expected: 24.69, explanation: "80 / (1.80 * 1.80) = 24.69" },
      { id: 3, desc: "Peso 95kg e altura 1.70m", args: [95, 1.70], expected: 32.87, explanation: "95 / (1.70 * 1.70) = 32.87" }
    ]
  },
  {
    id: 6,
    title: "Conversor de Temperatura",
    difficulty: "Iniciante",
    tags: ["Fórmula", "Conversão"],
    problem: `Um sistema meteorológico internacional necessita converter temperaturas registradas em graus Celsius para Fahrenheit.`,
    rules: [
      "Complete a função <code>celsiusParaFahrenheit(celsius)</code>.",
      "O parâmetro <code>celsius</code> é um número.",
      "Retorne o valor numérico correspondente em Fahrenheit."
    ],
    functionName: "celsiusParaFahrenheit",
    signature: "celsiusParaFahrenheit(celsius)",
    initialCode: `function celsiusParaFahrenheit(celsius) {
  return (celsius * 32) + 1.8;
}`,
    testCases: [
      { id: 1, desc: "Ponto de congelamento da água (0°C)", args: [0], expected: 32, explanation: "(0 * 1.8) + 32 = 32" },
      { id: 2, desc: "Ponto de ebulição da água (100°C)", args: [100], expected: 212, explanation: "(100 * 1.8) + 32 = 212" },
      { id: 3, desc: "Temperatura ambiente agradável (25°C)", args: [25], expected: 77, explanation: "(25 * 1.8) + 32 = 77" }
    ]
  },
  {
    id: 7,
    title: "Calculadora de Gorjeta",
    difficulty: "Iniciante",
    tags: ["Porcentagem", "Finanças"],
    problem: `Em um restaurante, os clientes podem escolher a porcentagem de gorjeta que desejam deixar para o garçom. Crie uma função que calcule o valor em reais da gorjeta com base no valor total da conta e na taxa percentual informada.`,
    rules: [
      "Complete a função <code>calcularGorjeta(valorConta, percentual)</code>.",
      "Ambos os parâmetros são números positivos.",
      "Retorne o valor numérico da gorjeta."
    ],
    functionName: "calcularGorjeta",
    signature: "calcularGorjeta(valorConta, percentual)",
    initialCode: `function calcularGorjeta(valorConta, percentual) {
  const gorjeta = valorConta * (percentual / 100);
  return valorConta + gorjeta;
}`,
    testCases: [
      { id: 1, desc: "Conta de R$ 100 com 10% de gorjeta", args: [100, 10], expected: 10, explanation: "10% de 100 = 10" },
      { id: 2, desc: "Conta de R$ 200 com 15% de gorjeta", args: [200, 15], expected: 30, explanation: "15% de 200 = 30" },
      { id: 3, desc: "Conta de R$ 50 com 20% de gorjeta", args: [50, 20], expected: 10, explanation: "20% de 50 = 10" }
    ]
  },
  {
    id: 8,
    title: "Maior de Três Números",
    difficulty: "Iniciante",
    tags: ["Comparações", "Math"],
    problem: `Crie uma função que receba três números como argumentos e identifique qual deles é o maior valor numérico, retornando-o.`,
    rules: [
      "Complete a função <code>encontrarMaior(a, b, c)</code>.",
      "Os três argumentos <code>a</code>, <code>b</code> e <code>c</code> são números.",
      "Retorne o maior número encontrado."
    ],
    functionName: "encontrarMaior",
    signature: "encontrarMaior(a, b, c)",
    initialCode: `function encontrarMaior(a, b, c) {
  return Math.min(a, b, c);
}`,
    testCases: [
      { id: 1, desc: "O primeiro número é o maior (10, 5, 8)", args: [10, 5, 8], expected: 10, explanation: "10 é o maior" },
      { id: 2, desc: "O segundo número é o maior (3, 27, 14)", args: [3, 27, 14], expected: 27, explanation: "27 é o maior" },
      { id: 3, desc: "Números negativos (-5, -2, -9)", args: [-5, -2, -9], expected: -2, explanation: "-2 é o mais próximo de zero, logo o maior" }
    ]
  },
  {
    id: 9,
    title: "Conversor de Minutos em Horas",
    difficulty: "Iniciante",
    tags: ["Divisão Inteira", "Strings"],
    problem: `Um aplicativo de podcasts armazena a duração de faixas em minutos totais. Crie uma função que receba os minutos totais e devolva uma string formatada no padrão <code>\"{horas}h {minutos}m\"</code>.`,
    rules: [
      "Complete a função <code>formatarMinutos(totalMinutos)</code>.",
      "O parâmetro <code>totalMinutos</code> é um número inteiro positivo.",
      "Retorne a string exatamente no formato <code>\"{horas}h {minutos}m\"</code> (exemplo: <code>\"2h 10m\"</code>)."
    ],
    functionName: "formatarMinutos",
    signature: "formatarMinutos(totalMinutos)",
    initialCode: `function formatarMinutos(totalMinutos) {
  const horas = totalMinutos / 60;
  const minutos = totalMinutos % 60;
  return \`\${minutos}h \${horas}m\`;
}`,
    testCases: [
      { id: 1, desc: "130 minutos totais", args: [130], expected: "2h 10m", explanation: "130 = 2 horas (120min) + 10 minutos" },
      { id: 2, desc: "Exatamente 60 minutos", args: [60], expected: "1h 0m", explanation: "60 = 1 hora + 0 minutos" },
      { id: 3, desc: "Menos de uma hora (45 minutos)", args: [45], expected: "0h 45m", explanation: "45 = 0 horas + 45 minutos" }
    ]
  },
  {
    id: 10,
    title: "Salário Líquido (INSS Simplificado)",
    difficulty: "Iniciante",
    tags: ["Faixas Salariais", "Regra de Negócio"],
    problem: `O departamento de RH precisa calcular o salário líquido de um funcionário após o desconto simplificado de INSS com base em duas faixas salariais: até R$ 2.000,00 desconta 7.5%, acima de R$ 2.000,00 desconta 10%.`,
    rules: [
      "Complete a função <code>calcularSalarioLiquido(salarioBruto)</code>.",
      "Se <code>salarioBruto <= 2000</code>, o desconto é de 7.5%.",
      "Se <code>salarioBruto > 2000</code>, o desconto é de 10%.",
      "A função deve retornar o valor numérico final do salário líquido."
    ],
    functionName: "calcularSalarioLiquido",
    signature: "calcularSalarioLiquido(salarioBruto)",
    initialCode: `function calcularSalarioLiquido(salarioBruto) {
  if (salarioBruto <= 2000) {
    return salarioBruto * 0.075;
  } else {
    return salarioBruto * 0.10;
  }
}`,
    testCases: [
      { id: 1, desc: "Salário de R$ 1.000 (desconto 7.5%)", args: [1000], expected: 925, explanation: "1000 * 0.925 = 925" },
      { id: 2, desc: "Salário de R$ 2.000 no limite da primeira faixa", args: [2000], expected: 1850, explanation: "2000 * 0.925 = 1850" },
      { id: 3, desc: "Salário de R$ 3.000 na segunda faixa (desconto 10%)", args: [3000], expected: 2700, explanation: "3000 * 0.9 = 2700" }
    ]
  }
];

/* ============================================================================
   2. GERENCIADOR DE ESTADO & PERSISTÊNCIA (LOCALSTORAGE)
   ============================================================================ */
const STORAGE_KEYS = {
  TRACK: "jsquest_active_track",
  // Unit Track
  UNLOCKED_MAX: "jsquest_unlocked_max",
  COMPLETED: "jsquest_completed",
  CURRENT_ID: "jsquest_current_id",
  CODE_PREFIX: "jsquest_code_",
  // Integration Track
  INT_UNLOCKED_MAX: "jsquest_int_unlocked_max",
  INT_COMPLETED: "jsquest_int_completed",
  INT_CURRENT_ID: "jsquest_int_current_id",
  INT_CODE_PREFIX: "jsquest_int_code_"
};

const State = {
  track: "unit", // "unit" | "integration"
  unlockedMax: 1,
  completed: [],
  currentId: 1,
  intUnlockedMax: 1,
  intCompleted: [],
  intCurrentId: 1,

  load() {
    try {
      // Purga códigos salvos antigos que continham comentários no localStorage
      const PURGE_KEY = "jsquest_purge_comments_v5";
      if (!localStorage.getItem(PURGE_KEY)) {
        for (let i = 1; i <= 20; i++) {
          localStorage.removeItem(STORAGE_KEYS.CODE_PREFIX + i);
          localStorage.removeItem(STORAGE_KEYS.INT_CODE_PREFIX + i);
        }
        localStorage.setItem(PURGE_KEY, "true");
      }

      const defaultTrackAttr = document.body ? document.body.getAttribute("data-default-track") : null;
      const savedTrack = localStorage.getItem(STORAGE_KEYS.TRACK);

      if (defaultTrackAttr === "integration") {
        this.track = "integration";
      } else if (savedTrack === "integration" || savedTrack === "unit") {
        this.track = savedTrack;
      } else {
        this.track = "unit";
      }

      // Unit Track
      const savedUnlocked = localStorage.getItem(STORAGE_KEYS.UNLOCKED_MAX);
      const savedCompleted = localStorage.getItem(STORAGE_KEYS.COMPLETED);
      const savedCurrentId = localStorage.getItem(STORAGE_KEYS.CURRENT_ID);
      this.unlockedMax = savedUnlocked ? parseInt(savedUnlocked, 10) : 1;
      this.completed = savedCompleted ? JSON.parse(savedCompleted) : [];
      this.currentId = savedCurrentId ? parseInt(savedCurrentId, 10) : 1;

      // Integration Track
      const savedIntUnlocked = localStorage.getItem(STORAGE_KEYS.INT_UNLOCKED_MAX);
      const savedIntCompleted = localStorage.getItem(STORAGE_KEYS.INT_COMPLETED);
      const savedIntCurrentId = localStorage.getItem(STORAGE_KEYS.INT_CURRENT_ID);
      this.intUnlockedMax = savedIntUnlocked ? parseInt(savedIntUnlocked, 10) : 1;
      this.intCompleted = savedIntCompleted ? JSON.parse(savedIntCompleted) : [];
      this.intCurrentId = savedIntCurrentId ? parseInt(savedIntCurrentId, 10) : 1;

      const unitList = CHALLENGES;
      const intList = typeof INTEGRATION_CHALLENGES !== "undefined" ? INTEGRATION_CHALLENGES : [];

      if (isNaN(this.unlockedMax) || this.unlockedMax < 1) this.unlockedMax = 1;
      if (this.unlockedMax > unitList.length) this.unlockedMax = unitList.length;
      if (this.currentId > this.unlockedMax) this.currentId = this.unlockedMax;

      if (isNaN(this.intUnlockedMax) || this.intUnlockedMax < 1) this.intUnlockedMax = 1;
      if (intList.length > 0 && this.intUnlockedMax > intList.length) this.intUnlockedMax = intList.length;
      if (this.intCurrentId > this.intUnlockedMax) this.intCurrentId = this.intUnlockedMax;
    } catch (e) {
      console.warn("Erro ao ler dados do localStorage:", e);
    }
  },

  save() {
    try {
      localStorage.setItem(STORAGE_KEYS.TRACK, this.track);
      localStorage.setItem(STORAGE_KEYS.UNLOCKED_MAX, this.unlockedMax.toString());
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(this.completed));
      localStorage.setItem(STORAGE_KEYS.CURRENT_ID, this.currentId.toString());

      localStorage.setItem(STORAGE_KEYS.INT_UNLOCKED_MAX, this.intUnlockedMax.toString());
      localStorage.setItem(STORAGE_KEYS.INT_COMPLETED, JSON.stringify(this.intCompleted));
      localStorage.setItem(STORAGE_KEYS.INT_CURRENT_ID, this.intCurrentId.toString());
    } catch (e) {}
  },

  getActiveChallenges() {
    if (this.track === "integration" && typeof INTEGRATION_CHALLENGES !== "undefined") {
      return INTEGRATION_CHALLENGES;
    }
    return CHALLENGES;
  },

  getCurrentId() {
    return this.track === "integration" ? this.intCurrentId : this.currentId;
  },

  setCurrentId(id) {
    if (this.track === "integration") {
      this.intCurrentId = id;
    } else {
      this.currentId = id;
    }
    this.save();
  },

  getUnlockedMax() {
    return this.track === "integration" ? this.intUnlockedMax : this.unlockedMax;
  },

  getCompletedList() {
    return this.track === "integration" ? this.intCompleted : this.completed;
  },

  saveCode(challengeId, code) {
    try {
      const prefix = this.track === "integration" ? STORAGE_KEYS.INT_CODE_PREFIX : STORAGE_KEYS.CODE_PREFIX;
      localStorage.setItem(prefix + challengeId, code);
    } catch (e) {}
  },

  getCode(challengeId) {
    try {
      const prefix = this.track === "integration" ? STORAGE_KEYS.INT_CODE_PREFIX : STORAGE_KEYS.CODE_PREFIX;
      const code = localStorage.getItem(prefix + challengeId);
      if (code) {
        const activeList = this.getActiveChallenges();
        const challenge = activeList.find(c => c.id === challengeId);
        // Se o código contiver qualquer comentário (// ou /*), apaga do storage e carrega o código limpo
        if (!challenge || !code.includes(challenge.functionName) || code.includes("//") || code.includes("/*")) {
          this.clearCode(challengeId);
          return null;
        }
      }
      return code;
    } catch (e) {
      return null;
    }
  },

  clearCode(challengeId) {
    try {
      const prefix = this.track === "integration" ? STORAGE_KEYS.INT_CODE_PREFIX : STORAGE_KEYS.CODE_PREFIX;
      localStorage.removeItem(prefix + challengeId);
    } catch (e) {}
  },

  isCompleted(id) {
    return this.getCompletedList().includes(id);
  },

  isUnlocked(id) {
    return id <= this.getUnlockedMax();
  },

  markCompleted(id) {
    const list = this.getActiveChallenges();
    if (this.track === "integration") {
      if (!this.intCompleted.includes(id)) {
        this.intCompleted.push(id);
      }
      if (id === this.intUnlockedMax && this.intUnlockedMax < list.length) {
        this.intUnlockedMax++;
      }
    } else {
      if (!this.completed.includes(id)) {
        this.completed.push(id);
      }
      if (id === this.unlockedMax && this.unlockedMax < list.length) {
        this.unlockedMax++;
      }
    }
    this.save();
  },

  resetCurrentTrack() {
    const list = this.getActiveChallenges();
    list.forEach(c => this.clearCode(c.id));
    if (this.track === "integration") {
      this.intUnlockedMax = 1;
      this.intCompleted = [];
      this.intCurrentId = 1;
    } else {
      this.unlockedMax = 1;
      this.completed = [];
      this.currentId = 1;
    }
    this.save();
  }
};

/* ============================================================================
   3. REFERÊNCIAS DO DOM & INSTÂNCIA DO MONACO
   ============================================================================ */
let monacoEditorInstance = null;

const dom = {
  // Top Navbar & Track Selector
  trackUnitBtn: document.getElementById("track-unit-btn"),
  trackIntegrationBtn: document.getElementById("track-integration-btn"),
  headerBrandIcon: document.getElementById("header-brand-icon"),
  headerBrandSubtitle: document.getElementById("header-brand-subtitle"),
  progressTrackLabel: document.getElementById("progress-track-label"),
  prevBtn: document.getElementById("prev-challenge-btn"),
  nextBtn: document.getElementById("next-challenge-btn"),
  openRoadmapBtn: document.getElementById("open-roadmap-btn"),
  currentStatusDot: document.getElementById("current-badge-status"),
  currentSummaryText: document.getElementById("current-challenge-summary"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  progressPercentage: document.getElementById("progress-percentage"),
  resetAllBtn: document.getElementById("reset-all-progress-btn"),

  // Painel Esquerdo
  badgesGroup: document.getElementById("challenge-badges"),
  challengeTitle: document.getElementById("challenge-title"),
  challengeBody: document.getElementById("challenge-body"),

  // Painel Direito
  monacoContainer: document.getElementById("monaco-container"),
  editorTabName: document.getElementById("editor-tab-name"),
  editorSavedStatus: document.getElementById("editor-saved-status"),
  runBtn: document.getElementById("run-btn"),
  resetCodeBtn: document.getElementById("reset-code-btn"),
  terminalOutput: document.getElementById("terminal-output"),
  terminalStatusDot: document.getElementById("terminal-status-dot"),
  clearConsoleBtn: document.getElementById("clear-console-btn"),

  // Modal
  roadmapModal: document.getElementById("roadmap-modal"),
  closeRoadmapBtn: document.getElementById("close-roadmap-btn"),
  challengeGrid: document.getElementById("challenge-grid")
};

function getCurrentChallenge() {
  const list = State.getActiveChallenges();
  const curId = State.getCurrentId();
  return list.find(c => c.id === curId) || list[0];
}

/* ============================================================================
   4. RENDERIZAÇÃO DAS INSTRUÇÕES DO DESAFIO
   ============================================================================ */
function renderChallengeInstructions(challenge) {
  const trackLabel = State.track === "integration" ? "Testes Integrados" : "Testes Unitários";
  const trackBadgeClass = State.track === "integration" ? "badge-integration-track" : "badge-unit-track";

  dom.badgesGroup.innerHTML = `
    <span class="badge ${trackBadgeClass}">${trackLabel}</span>
    <span class="badge badge-difficulty">${challenge.difficulty}</span>
    <span class="badge badge-lang">JavaScript</span>
    ${challenge.tags.map(t => `<span class="badge badge-topic">${t}</span>`).join("")}
  `;

  dom.challengeTitle.textContent = `${challenge.id}. ${challenge.title}`;

  const rulesHtml = challenge.rules.map(r => `<li>${r}</li>`).join("");

  const tableRowsHtml = challenge.testCases.map(tc => {
    const argsStr = tc.args.map(formatValue).join(", ");
    const expStr = formatValue(tc.expected);
    return `
      <tr>
        <td><strong>${tc.id}</strong></td>
        <td><code>${escapeHtml(argsStr)}</code></td>
        <td><span class="tag-expected">${escapeHtml(expStr)}</span></td>
        <td>${escapeHtml(tc.explanation)}</td>
      </tr>
    `;
  }).join("");

  dom.challengeBody.innerHTML = `
    <!-- Situação Problema -->
    <section class="section">
      <h2 class="section-title"><span class="section-icon">📌</span> Situação Problema</h2>
      <p>${challenge.problem}</p>
    </section>

    <!-- Regras do Desafio -->
    <section class="section">
      <h2 class="section-title"><span class="section-icon">⚙️</span> Regras de Negócio & Integração</h2>
      <ul class="rule-list">
        ${rulesHtml}
      </ul>
    </section>

    <!-- Código Inicial com Erros -->
    <section class="section">
      <h2 class="section-title"><span class="section-icon">🐛</span> Código Inicial com Erros (Para Depurar)</h2>
      <pre class="code-snippet"><code>${escapeHtml(challenge.initialCode)}</code></pre>
    </section>

    <!-- Casos de Teste -->
    <section class="section">
      <h2 class="section-title"><span class="section-icon">🧪</span> Casos de Teste Esperados</h2>
      <div class="table-container">
        <table class="test-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Entrada (${escapeHtml(challenge.signature.replace(/.*\((.*)\)/, "$1"))})</th>
              <th>Saída Esperada</th>
              <th>Explicação</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>
      </div>
    </section>
  `;

  dom.editorTabName.textContent = `${challenge.functionName}.js`;
}

/* ============================================================================
   5. ATUALIZAÇÃO DA UI GERAL
   ============================================================================ */
function updateUiState() {
  const activeList = State.getActiveChallenges();
  const current = getCurrentChallenge();
  const total = activeList.length;
  const completedCount = State.getCompletedList().length;
  const percentage = Math.round((completedCount / total) * 100);

  if (dom.progressTrackLabel) {
    dom.progressTrackLabel.textContent = State.track === "integration" ? "Progresso Integrado" : "Progresso Unitário";
  }

  if (dom.headerBrandIcon) {
    dom.headerBrandIcon.textContent = State.track === "integration" ? "🔗" : "⚡";
  }
  if (dom.headerBrandSubtitle) {
    dom.headerBrandSubtitle.textContent = State.track === "integration" ? "Trilha de Testes Integrados" : "Trilha de Testes Unitários";
  }

  if (dom.trackUnitBtn && dom.trackIntegrationBtn) {
    if (State.track === "integration") {
      dom.trackUnitBtn.classList.remove("active");
      dom.trackIntegrationBtn.classList.add("active");
    } else {
      dom.trackUnitBtn.classList.add("active");
      dom.trackIntegrationBtn.classList.remove("active");
    }
  }

  dom.progressPercentage.textContent = `${percentage}% (${completedCount}/${total})`;
  dom.progressBarFill.style.width = `${percentage}%`;

  const isCurCompleted = State.isCompleted(current.id);
  dom.currentSummaryText.textContent = `Desafio ${current.id} de ${total}: ${current.title}`;
  dom.currentStatusDot.textContent = isCurCompleted ? "✅" : "🔓";

  dom.prevBtn.disabled = current.id <= 1;
  const nextId = current.id + 1;
  dom.nextBtn.disabled = nextId > total || !State.isUnlocked(nextId);

  renderRoadmapGrid();
}

function renderRoadmapGrid() {
  dom.challengeGrid.innerHTML = "";
  const activeList = State.getActiveChallenges();

  activeList.forEach(c => {
    const isComp = State.isCompleted(c.id);
    const isUnlk = State.isUnlocked(c.id);
    const isActive = c.id === State.getCurrentId();

    let cardClass = "grid-card";
    let statusBadgeText = "";
    let badgeClass = "";

    if (isComp) {
      cardClass += " completed";
      statusBadgeText = "✅ Concluído";
      badgeClass = "badge-pass";
    } else if (isUnlk) {
      cardClass += " unlocked";
      statusBadgeText = "🔓 Disponível";
      badgeClass = "badge-tag";
    } else {
      cardClass += " locked";
      statusBadgeText = "🔒 Bloqueado";
      badgeClass = "badge-fail";
    }

    if (isActive) cardClass += " active-card";

    const card = document.createElement("div");
    card.className = cardClass;
    card.title = isUnlk
      ? `Acessar Desafio ${c.id}: ${c.title}`
      : `Complete o Desafio ${c.id - 1} para desbloquear este.`;

    card.innerHTML = `
      <div class="grid-card-num">${c.id}</div>
      <div class="grid-card-content">
        <div class="grid-card-title">${c.title}</div>
        <div class="grid-card-func"><code>${c.functionName}()</code></div>
      </div>
      <span class="grid-card-status-badge ${badgeClass}">${statusBadgeText}</span>
    `;

    if (isUnlk) {
      card.addEventListener("click", () => {
        switchToChallenge(c.id);
        closeRoadmap();
      });
    }

    dom.challengeGrid.appendChild(card);
  });
}

/* ============================================================================
   6. TROCA DE DESAFIO & TRILHA
   ============================================================================ */
function switchToChallenge(targetId) {
  const activeList = State.getActiveChallenges();
  if (targetId < 1 || targetId > activeList.length) return;
  if (!State.isUnlocked(targetId)) {
    alert(`O Desafio ${targetId} está bloqueado. Conclua os testes do desafio anterior primeiro!`);
    return;
  }

  if (monacoEditorInstance) {
    State.saveCode(State.getCurrentId(), monacoEditorInstance.getValue());
  }

  State.setCurrentId(targetId);

  const challenge = getCurrentChallenge();
  renderChallengeInstructions(challenge);

  if (monacoEditorInstance) {
    const savedCode = State.getCode(challenge.id);
    const codeToLoad = savedCode !== null ? savedCode : challenge.initialCode;
    monacoEditorInstance.setValue(codeToLoad);
  }

  updateUiState();
  executeTestSuite();
}

function switchToTrack(targetTrack) {
  if (State.track === targetTrack) return;

  if (monacoEditorInstance) {
    State.saveCode(State.getCurrentId(), monacoEditorInstance.getValue());
  }

  State.track = targetTrack;
  State.save();

  const challenge = getCurrentChallenge();
  renderChallengeInstructions(challenge);

  if (monacoEditorInstance) {
    const savedCode = State.getCode(challenge.id);
    const codeToLoad = savedCode !== null ? savedCode : challenge.initialCode;
    monacoEditorInstance.setValue(codeToLoad);
  }

  updateUiState();
  executeTestSuite();
}

/* ============================================================================
   7. INICIALIZAÇÃO DO MONACO EDITOR (VIA CDN REQUIREJS)
   ============================================================================ */
function initMonaco() {
  if (typeof require === "undefined") {
    console.error("RequireJS não foi carregado.");
    renderRawTerminalError("Erro ao carregar RequireJS para o editor.");
    return;
  }

  require.config({
    paths: {
      vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs"
    }
  });

  require(["vs/editor/editor.main"], function () {
    const current = getCurrentChallenge();
    const savedCode = State.getCode(current.id);
    const initialContent = savedCode !== null ? savedCode : current.initialCode;

    monacoEditorInstance = monaco.editor.create(dom.monacoContainer, {
      value: initialContent,
      language: "javascript",
      theme: "vs-dark",
      automaticLayout: true,
      fontSize: 13.5,
      fontFamily: "'Fira Code', Consolas, Monaco, 'Courier New', monospace",
      fontLigatures: true,
      tabSize: 2,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      roundedSelection: true,
      contextmenu: true,
      renderLineHighlight: "all",
      padding: { top: 12, bottom: 12 }
    });

    monacoEditorInstance.onDidChangeModelContent(() => {
      State.saveCode(State.getCurrentId(), monacoEditorInstance.getValue());
      dom.editorSavedStatus.textContent = "salvo";
    });

    monacoEditorInstance.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
      executeTestSuite
    );

    executeTestSuite();
  });
}

/* ============================================================================
   8. TEST RUNNER EM FORMATO JEST
   ============================================================================ */
function clearTerminal() {
  dom.terminalOutput.innerHTML = "";
  updateStatusDot("idle");
}

function updateStatusDot(status) {
  dom.terminalStatusDot.className = "terminal-indicator";
  if (status === "success") dom.terminalStatusDot.classList.add("success");
  if (status === "failed") dom.terminalStatusDot.classList.add("failed");
}

function formatValue(val) {
  if (typeof val === "string") return `"${val}"`;
  if (typeof val === "number") return String(val);
  if (typeof val === "boolean") return val ? "true" : "false";
  if (val === undefined) return "undefined";
  if (val === null) return "null";
  if (typeof val === "function") return `[Function: ${val.name || "mock"}]`;
  try {
    return JSON.stringify(val);
  } catch (e) {
    return String(val);
  }
}

function isValueEqual(actual, expected) {
  if (actual === expected) return true;
  if (typeof actual === "number" && typeof expected === "number") {
    return Math.abs(actual - expected) < 0.0001;
  }
  if (typeof actual === "object" && actual !== null && typeof expected === "object" && expected !== null) {
    try {
      return JSON.stringify(actual) === JSON.stringify(expected);
    } catch (e) {
      return false;
    }
  }
  return false;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderRawTerminalError(msg) {
  dom.terminalOutput.innerHTML = `<div style="color: #f85149; font-family: var(--font-code); padding: 8px;">${escapeHtml(msg)}</div>`;
}

/**
 * Executa a suíte de testes com medição de tempo e saída formatada idêntica ao Jest
 */
function executeTestSuite() {
  if (!monacoEditorInstance) return;

  const challenge = getCurrentChallenge();
  const code = monacoEditorInstance.getValue();
  const fileName = `${challenge.functionName}.test.js`;

  const startTime = performance.now();

  let compiledFn = null;
  let compileError = null;

  // 1. Compilação isolada com new Function()
  try {
    const wrappedCode = `
      "use strict";
      ${code};
      if (typeof ${challenge.functionName} !== 'function') {
        throw new ReferenceError("A função '${challenge.functionName}' não foi declarada ou não é uma função.");
      }
      return ${challenge.functionName};
    `;
    const factory = new Function(wrappedCode);
    compiledFn = factory();
  } catch (err) {
    compileError = err;
  }

  if (compileError) {
    updateStatusDot("failed");
    const totalTimeSec = ((performance.now() - startTime) / 1000).toFixed(3);

    dom.terminalOutput.innerHTML = `
      <div class="jest-report">
        <div class="jest-suite-header">
          <span class="jest-badge-fail">FAIL</span>
          <span class="jest-file-path">${fileName}</span>
        </div>

        <div class="jest-failure-block">
          <div class="jest-failure-title">● Test suite failed to run</div>
          <div style="color: #f85149; margin-top: 4px;">
            ${escapeHtml(compileError.name)}: ${escapeHtml(compileError.message)}
          </div>
          <div style="color: #8b949e; font-size: 11px; margin-top: 8px;">
            Verifique se a função <code>function ${challenge.functionName}()</code> foi declarada corretamente sem erros de sintaxe.
          </div>
        </div>

        <div class="jest-summary">
          <div class="jest-summary-line">
            <span class="jest-summary-label">Test Suites:</span>
            <span class="jest-val-red">1 failed</span>, 1 total
          </div>
          <div class="jest-summary-line">
            <span class="jest-summary-label">Tests:</span>
            <span class="jest-val-muted">0 passed, ${challenge.testCases.length} total</span>
          </div>
          <div class="jest-summary-line">
            <span class="jest-summary-label">Snapshots:</span>
            <span class="jest-val-muted">0 total</span>
          </div>
          <div class="jest-summary-line">
            <span class="jest-summary-label">Time:</span>
            <span class="jest-val-muted">${totalTimeSec} s</span>
          </div>
          <div class="jest-footer-ran">Ran all test suites matching /${challenge.functionName}/i.</div>
        </div>
      </div>
    `;
    dom.terminalOutput.scrollTop = 0;
    return;
  }

  // 2. Execução dos Casos de Teste
  let passedCount = 0;
  let failedCount = 0;
  const testResults = [];
  const failuresDetail = [];

  challenge.testCases.forEach((tc) => {
    const tStart = performance.now();
    let receivedVal;
    let runError = null;

    try {
      receivedVal = compiledFn(...tc.args);
    } catch (e) {
      runError = e;
    }

    const tDurationMs = Math.max(1, Math.round(performance.now() - tStart));
    const passed = !runError && isValueEqual(receivedVal, tc.expected);

    if (passed) {
      passedCount++;
      testResults.push({
        status: "pass",
        desc: tc.desc,
        duration: tDurationMs
      });
    } else {
      failedCount++;
      testResults.push({
        status: "fail",
        desc: tc.desc,
        duration: tDurationMs
      });

      failuresDetail.push({
        desc: tc.desc,
        args: tc.args,
        expected: tc.expected,
        received: runError ? `RuntimeError: ${runError.message}` : receivedVal
      });
    }
  });

  const allPassed = failedCount === 0;
  const totalTimeSec = ((performance.now() - startTime) / 1000).toFixed(3);

  const suiteBadge = allPassed
    ? `<span class="jest-badge-pass">PASS</span>`
    : `<span class="jest-badge-fail">FAIL</span>`;

  const testRowsHtml = testResults.map(tr => {
    if (tr.status === "pass") {
      return `
        <div class="jest-test-row">
          <span class="jest-icon-pass">✓</span>
          <span class="jest-desc-pass">${escapeHtml(tr.desc)}</span>
          <span class="jest-duration">(${tr.duration} ms)</span>
        </div>
      `;
    } else {
      return `
        <div class="jest-test-row">
          <span class="jest-icon-fail">✕</span>
          <span class="jest-desc-fail">${escapeHtml(tr.desc)}</span>
          <span class="jest-duration">(${tr.duration} ms)</span>
        </div>
      `;
    }
  }).join("");

  const failureBlocksHtml = failuresDetail.map(f => {
    const argsFormatted = f.args.map(formatValue).join(", ");
    return `
      <div class="jest-failure-block">
        <div class="jest-failure-title">● ${escapeHtml(challenge.functionName)} › ${escapeHtml(f.desc)}</div>
        <div class="jest-failure-matcher">
          expect(received).toEqual(expected) // Chamada: ${challenge.functionName}(${escapeHtml(argsFormatted)})
        </div>
        <div class="jest-diff-row jest-diff-expected">
          - Expected: ${escapeHtml(formatValue(f.expected))}
        </div>
        <div class="jest-diff-row jest-diff-received">
          + Received: ${escapeHtml(formatValue(f.received))}
        </div>
      </div>
    `;
  }).join("");

  const suiteSummaryText = allPassed
    ? `<span class="jest-val-green">1 passed</span>, 1 total`
    : `<span class="jest-val-red">1 failed</span>, 1 total`;

  let testsSummaryText = "";
  if (allPassed) {
    testsSummaryText = `<span class="jest-val-green">${passedCount} passed</span>, ${challenge.testCases.length} total`;
  } else {
    testsSummaryText = `<span class="jest-val-red">${failedCount} failed</span>, <span class="jest-val-green">${passedCount} passed</span>, ${challenge.testCases.length} total`;
  }

  let unlockHtml = "";
  const activeList = State.getActiveChallenges();
  const curId = State.getCurrentId();

  if (allPassed) {
    updateStatusDot("success");
    State.markCompleted(curId);
    updateUiState();

    if (curId < activeList.length) {
      const nextChallenge = activeList.find(c => c.id === curId + 1);
      unlockHtml = `
        <div class="unlock-card">
          <div class="unlock-card-text">
            <span class="unlock-card-title">🎉 Testes Aprovados! Desafio ${nextChallenge.id} Desbloqueado: ${escapeHtml(nextChallenge.title)}</span>
            <span class="unlock-card-desc">Todos os testes de integração passaram no Jest. Avance para o próximo desafio!</span>
          </div>
          <button id="btn-advance-now" class="btn-advance">
            Avançar para o Desafio ${nextChallenge.id} ➔
          </button>
        </div>
      `;
    } else {
      unlockHtml = `
        <div class="unlock-card" style="border-color: #f7df1e;">
          <div class="unlock-card-text">
            <span class="unlock-card-title" style="color: #f7df1e;">🏆 PARABÉNS! VOCÊ CONCLUIU TODOS OS 10 DESAFIOS!</span>
            <span class="unlock-card-desc" style="color: #ffffff;">Você concluiu com 100% de sucesso todos os testes da ${State.track === "integration" ? "Trilha de Testes Integrados" : "Trilha de Testes Unitários"}!</span>
          </div>
        </div>
      `;
    }
  } else {
    updateStatusDot("failed");
  }

  dom.terminalOutput.innerHTML = `
    <div class="jest-report">
      <div class="jest-suite-header">
        ${suiteBadge}
        <span class="jest-file-path">${fileName}</span>
      </div>

      <div class="jest-suite-name">${escapeHtml(challenge.functionName)}</div>
      ${testRowsHtml}

      ${failureBlocksHtml}

      <div class="jest-summary">
        <div class="jest-summary-line">
          <span class="jest-summary-label">Test Suites:</span>
          ${suiteSummaryText}
        </div>
        <div class="jest-summary-line">
          <span class="jest-summary-label">Tests:</span>
          ${testsSummaryText}
        </div>
        <div class="jest-summary-line">
          <span class="jest-summary-label">Snapshots:</span>
          <span class="jest-val-muted">0 total</span>
        </div>
        <div class="jest-summary-line">
          <span class="jest-summary-label">Time:</span>
          <span class="jest-val-muted">${totalTimeSec} s</span>
        </div>
        <div class="jest-footer-ran">Ran all test suites matching /${challenge.functionName}/i.</div>
      </div>

      ${unlockHtml}
    </div>
  `;

  const advanceBtn = document.getElementById("btn-advance-now");
  if (advanceBtn) {
    advanceBtn.addEventListener("click", () => {
      switchToChallenge(curId + 1);
    });
  }

  dom.terminalOutput.scrollTop = 0;
}

/* ============================================================================
   9. MODAL ROADMAP & EVENT LISTENERS
   ============================================================================ */
function openRoadmap() {
  renderRoadmapGrid();
  dom.roadmapModal.classList.remove("hidden");
}

function closeRoadmap() {
  dom.roadmapModal.classList.add("hidden");
}

function setupEventListeners() {
  if (dom.trackUnitBtn) {
    dom.trackUnitBtn.addEventListener("click", () => switchToTrack("unit"));
  }
  if (dom.trackIntegrationBtn) {
    dom.trackIntegrationBtn.addEventListener("click", () => switchToTrack("integration"));
  }

  dom.runBtn.addEventListener("click", executeTestSuite);
  dom.clearConsoleBtn.addEventListener("click", clearTerminal);

  dom.resetCodeBtn.addEventListener("click", () => {
    const current = getCurrentChallenge();
    const confirmed = confirm(`Deseja restaurar o código inicial do Desafio ${current.id}?`);
    if (confirmed) {
      State.clearCode(current.id);
      if (monacoEditorInstance) {
        monacoEditorInstance.setValue(current.initialCode);
      }
      executeTestSuite();
    }
  });

  dom.prevBtn.addEventListener("click", () => {
    const curId = State.getCurrentId();
    if (curId > 1) {
      switchToChallenge(curId - 1);
    }
  });

  dom.nextBtn.addEventListener("click", () => {
    const curId = State.getCurrentId();
    const activeList = State.getActiveChallenges();
    if (curId < activeList.length) {
      switchToChallenge(curId + 1);
    }
  });

  dom.openRoadmapBtn.addEventListener("click", openRoadmap);
  dom.closeRoadmapBtn.addEventListener("click", closeRoadmap);
  dom.roadmapModal.addEventListener("click", (e) => {
    if (e.target === dom.roadmapModal) closeRoadmap();
  });

  dom.resetAllBtn.addEventListener("click", () => {
    const trackName = State.track === "integration" ? "Testes Integrados" : "Testes Unitários";
    const confirmed = confirm(
      `⚠️ ATENÇÃO: Deseja realmente reiniciar a ${trackName}?\n\nIsso apagará o progresso de desbloqueio e os códigos salvos desta trilha.`
    );
    if (confirmed) {
      State.resetCurrentTrack();
      const firstChallenge = getCurrentChallenge();
      renderChallengeInstructions(firstChallenge);
      if (monacoEditorInstance) {
        monacoEditorInstance.setValue(firstChallenge.initialCode);
      }
      updateUiState();
      executeTestSuite();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !dom.roadmapModal.classList.contains("hidden")) {
      closeRoadmap();
    }
  });
}

/* ============================================================================
   10. INICIALIZAÇÃO DA APLICAÇÃO
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  State.load();
  setupEventListeners();

  const current = getCurrentChallenge();
  renderChallengeInstructions(current);
  updateUiState();

  initMonaco();
});

