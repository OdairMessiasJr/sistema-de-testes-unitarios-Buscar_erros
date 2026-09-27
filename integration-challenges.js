/**
 * ============================================================================
 * INTEGRATION_CHALLENGES - 10 DESAFIOS DE TESTES INTEGRADOS (NÍVEL ENSINO MÉDIO)
 * ============================================================================
 * Desafios amigáveis e didáticos projetados para estudantes do Ensino Médio.
 * Cada desafio ensina a integrar 2 componentes simples (ex: Login + Log,
 * Média + Notificação, Carrinho + Desconto, Sensor + Ar-condicionado).
 */

const INTEGRATION_CHALLENGES = [
  {
    id: 1,
    title: "Validador de Login e Registro de Log",
    difficulty: "Iniciante",
    tags: ["Login", "Logs", "Integração"],
    problem: `Um sistema web de escola precisa autenticar o aluno e registrar a tentativa de acesso em um histórico (log). Crie a função <code>loginComLog(usuario, senha, logger)</code>.`,
    rules: [
      "Se <code>senha === \"1234\"</code>, chame <code>logger.log(\"Login bem-sucedido: \" + usuario)</code> e retorne <code>\"Acesso liberado\"</code>.",
      "Se <code>senha !== \"1234\"</code>, chame <code>logger.log(\"Falha de login: \" + usuario)</code> e retorne <code>\"Senha incorreta\"</code>."
    ],
    functionName: "loginComLog",
    signature: "loginComLog(usuario, senha, logger)",
    initialCode: `function loginComLog(usuario, senha, logger) {
  if (senha === "1234") {
    logger.logar("Sucesso: " + usuario);
    return "Acesso liberado";
  } else {
    logger.logar("Erro: " + usuario);
    return "Senha incorreta";
  }
}`,
    testCases: [
      {
        id: 1,
        desc: "Login com senha correta '1234' libera acesso e registra o log de sucesso",
        args: [
          "Lucas",
          "1234",
          { log: () => {} }
        ],
        expected: "Acesso liberado",
        explanation: "Senha '1234' válida libera acesso e grava log de sucesso."
      },
      {
        id: 2,
        desc: "Login com senha incorreta nega acesso e registra o log de falha",
        args: [
          "Lucas",
          "0000",
          { log: () => {} }
        ],
        expected: "Senha incorreta",
        explanation: "Senha errada bloqueia acesso e grava log de falha."
      }
    ]
  },
  {
    id: 2,
    title: "Carrinho de Compras com Cupom Simples",
    difficulty: "Iniciante",
    tags: ["E-commerce", "Carrinho", "Desconto"],
    problem: `Em uma loja virtual escolar, os alunos podem comprar materiais. Crie a função <code>calcularTotalCarrinho(itens, cupom, tabelaCupons)</code> que soma o valor dos produtos e aplica o desconto do cupom, se ele for válido.`,
    rules: [
      "O parâmetro <code>itens</code> é um array de números representando os preços dos produtos.",
      "Calcule o subtotal somando todos os preços do array.",
      "Se <code>cupom</code> existir no objeto <code>tabelaCupons</code>, aplique o desconto percentual correspondente.",
      "Se o cupom não for informado ou não existir na tabela, mantenha o subtotal.",
      "Retorne o valor total final como um número."
    ],
    functionName: "calcularTotalCarrinho",
    signature: "calcularTotalCarrinho(itens, cupom, tabelaCupons)",
    initialCode: `function calcularTotalCarrinho(itens, cupom, tabelaCupons) {
  let subtotal = 0;
  for (let i = 0; i < itens.length; i++) {
    subtotal += itens[i];
  }
  
  if (cupom && tabelaCupons && cupom in tabelaCupons) {
    return subtotal * (1 + tabelaCupons[cupom] / 100);
  }
  return subtotal;
}`,
    testCases: [
      {
        id: 1,
        desc: "Carrinho de R$ 100 com cupom de 10% de desconto",
        args: [
          [50, 50],
          "PROMO10",
          { PROMO10: 10 }
        ],
        expected: 90,
        explanation: "Subtotal: 100. 10% de desconto = R$ 90."
      },
      {
        id: 2,
        desc: "Carrinho de R$ 80 sem cupom de desconto",
        args: [
          [30, 50],
          null,
          { PROMO10: 10 }
        ],
        expected: 80,
        explanation: "Sem cupom, mantém o valor original de R$ 80."
      }
    ]
  },
  {
    id: 3,
    title: "Média Escolar e Envio de Boletim",
    difficulty: "Iniciante",
    tags: ["Escola", "Média", "Notificação"],
    problem: `O sistema de notas da escola calcula a média bimestral de um aluno a partir de 2 notas e avisa o aluno se ele foi Aprovado ou se ficou em Recuperação. Crie a função <code>processarBoletim(aluno, nota1, nota2, notificador)</code>.`,
    rules: [
      "Calcule a média simples de <code>nota1</code> e <code>nota2</code>.",
      "Se <code>media >= 6</code>, chame <code>notificador.enviar(aluno, \"Aprovado\")</code>.",
      "Se <code>media < 6</code>, chame <code>notificador.enviar(aluno, \"Recuperacao\")</code>.",
      "Retorne a média calculada como um número."
    ],
    functionName: "processarBoletim",
    signature: "processarBoletim(aluno, nota1, nota2, notificador)",
    initialCode: `function processarBoletim(aluno, nota1, nota2, notificador) {
  const media = nota1 + nota2 / 2;
  if (media >= 6) {
    notificador.enviar("Aprovado", aluno);
  } else {
    notificador.enviar("Recuperacao", aluno);
  }
  return media;
}`,
    testCases: [
      {
        id: 1,
        desc: "Aluno com notas 7 e 9 obtém média 8 e notificação 'Aprovado'",
        args: [
          "Mariana",
          7,
          9,
          { enviar: () => {} }
        ],
        expected: 8,
        explanation: "(7 + 9) / 2 = 8. Média >= 6 gera aviso de Aprovado."
      },
      {
        id: 2,
        desc: "Aluno com notas 4 e 5 obtém média 4.5 e notificação 'Recuperacao'",
        args: [
          "Pedro",
          4,
          5,
          { enviar: () => {} }
        ],
        expected: 4.5,
        explanation: "(4 + 5) / 2 = 4.5. Média < 6 gera aviso de Recuperacao."
      }
    ]
  },
  {
    id: 4,
    title: "Pagamento com Cartão e Notificação por E-mail",
    difficulty: "Iniciante",
    tags: ["Pagamento", "E-mail", "Serviços"],
    problem: `Um aplicativo de cantina escolar precisa cobrar o lanche no cartão de crédito (<code>bancoPagamentos</code>) e enviar uma mensagem por e-mail (<code>servicoEmail</code>) informando se a compra foi aprovada ou recusada.`,
    rules: [
      "Execute a cobrança chamando <code>bancoPagamentos.pagar(valor, cartao)</code>.",
      "Se retornar <code>true</code> (pagamento aprovado): chame <code>servicoEmail.enviar(\"Compra aprovada\")</code> e retorne <code>\"Sucesso\"</code>.",
      "Se retornar <code>false</code> (pagamento recusado): chame <code>servicoEmail.enviar(\"Compra recusada\")</code> e retorne <code>\"Falha\"</code>."
    ],
    functionName: "comprarComCartao",
    signature: "comprarComCartao(valor, cartao, bancoPagamentos, servicoEmail)",
    initialCode: `function comprarComCartao(valor, cartao, bancoPagamentos, servicoEmail) {
  const aprovado = bancoPagamentos.pagar(cartao, valor);
  if (aprovado) {
    servicoEmail.enviar("Compra recusada");
    return "Sucesso";
  } else {
    servicoEmail.enviar("Compra aprovada");
    return "Falha";
  }
}`,
    testCases: [
      {
        id: 1,
        desc: "Pagamento aprovado pelo banco envia e-mail 'Compra aprovada'",
        args: [
          15,
          "1234-5678",
          { pagar: () => true },
          { enviar: () => {} }
        ],
        expected: "Sucesso",
        explanation: "Banco aprovou a cobrança: e-mail enviado e retorno 'Sucesso'."
      },
      {
        id: 2,
        desc: "Cartão recusado envia e-mail 'Compra recusada'",
        args: [
          50,
          "0000-0000",
          { pagar: () => false },
          { enviar: () => {} }
        ],
        expected: "Falha",
        explanation: "Banco recusou a cobrança: e-mail de aviso enviado e retorno 'Falha'."
      }
    ]
  },
  {
    id: 5,
    title: "Emissor de Ingressos de Cinema por Idade",
    difficulty: "Iniciante",
    tags: ["Cinema", "Ingressos", "Impressão"],
    problem: `O cinema local oferece meia-entrada para estudantes e jovens menores de 18 anos. Crie a função <code>emitirIngresso(nome, idade, emissor)</code> que valida a idade e solicita a impressão do ingresso adequado.`,
    rules: [
      "Se <code>idade < 18</code>, chame <code>emissor.imprimir(nome, \"Meia\")</code> e retorne <code>\"Meia-entrada\"</code>.",
      "Se <code>idade >= 18</code>, chame <code>emissor.imprimir(nome, \"Inteira\")</code> e retorne <code>\"Inteira\"</code>."
    ],
    functionName: "emitirIngresso",
    signature: "emitirIngresso(nome, idade, emissor)",
    initialCode: `function emitirIngresso(nome, idade, emissor) {
  if (idade >= 18) {
    emissor.imprimir(nome, "Meia");
    return "Meia entrada";
  } else {
    emissor.imprimir(nome, "Inteira");
    return "Inteira";
  }
}`,
    testCases: [
      {
        id: 1,
        desc: "Jovem de 15 anos recebe Meia-entrada",
        args: [
          "Gabriel",
          15,
          { imprimir: () => {} }
        ],
        expected: "Meia-entrada",
        explanation: "15 anos < 18 -> Meia-entrada."
      },
      {
        id: 2,
        desc: "Adulto de 20 anos recebe Inteira",
        args: [
          "Ana",
          20,
          { imprimir: () => {} }
        ],
        expected: "Inteira",
        explanation: "20 anos >= 18 -> Inteira."
      }
    ]
  },
  {
    id: 6,
    title: "Conversor de Moeda com Taxa em Tempo Real",
    difficulty: "Iniciante",
    tags: ["Câmbio", "API", "Matemática"],
    problem: `Um aplicativo de viagens precisa converter valores de Reais (BRL) para Dólares (USD) consultando a taxa de câmbio atual de um serviço financeiro (<code>apiCambio</code>). Crie a função <code>converterReaisParaDolar(valorReais, apiCambio)</code>.`,
    rules: [
      "Obtenha a cotação atual do dólar chamando <code>apiCambio.getTaxaDolar()</code>.",
      "Calcule o valor em dólares e arredonde para 2 casas decimais.",
      "Retorne o valor em dólares como um número."
    ],
    functionName: "converterReaisParaDolar",
    signature: "converterReaisParaDolar(valorReais, apiCambio)",
    initialCode: `function converterReaisParaDolar(valorReais, apiCambio) {
  const cotacao = apiCambio.taxaDolar();
  return Number((valorReais * cotacao).toFixed(2));
}`,
    testCases: [
      {
        id: 1,
        desc: "R$ 100 com dólar a R$ 5,00 resulta em $ 20.00",
        args: [
          100,
          { getTaxaDolar: () => 5.0 }
        ],
        expected: 20,
        explanation: "100 / 5.0 = 20 dólares."
      },
      {
        id: 2,
        desc: "R$ 50 com dólar a R$ 5.25 resulta em $ 9.52",
        args: [
          50,
          { getTaxaDolar: () => 5.25 }
        ],
        expected: 9.52,
        explanation: "50 / 5.25 = 9.5238... arredondado para 9.52."
      }
    ]
  },
  {
    id: 7,
    title: "Validador de Cadastro com E-mail Único",
    difficulty: "Iniciante",
    tags: ["Cadastro", "Banco de Dados", "Validação"],
    problem: `Em uma rede social escolar, ao cadastrar um novo usuário, o sistema deve primeiro consultar o banco de dados (<code>bancoUsuarios</code>) para verificar se o e-mail já está em uso. Crie a função <code>cadastrarUsuario(novoUsuario, bancoUsuarios)</code>.`,
    rules: [
      "O parâmetro <code>novoUsuario</code> é um objeto <code>{ nome, email }</code>.",
      "Verifique se o e-mail existe chamando <code>bancoUsuarios.existeEmail(novoUsuario.email)</code>.",
      "Se retornar <code>true</code> (já existe), retorne a string <code>\"Email ja cadastrado\"</code>.",
      "Se retornar <code>false</code> (e-mail livre), salve o usuário chamando <code>bancoUsuarios.salvar(novoUsuario)</code> e retorne a string <code>\"Usuario cadastrado com sucesso\"</code>."
    ],
    functionName: "cadastrarUsuario",
    signature: "cadastrarUsuario(novoUsuario, bancoUsuarios)",
    initialCode: `function cadastrarUsuario(novoUsuario, bancoUsuarios) {
  bancoUsuarios.salvar(novoUsuario);
  if (bancoUsuarios.existeEmail(novoUsuario.email)) {
    return "Usuario cadastrado com sucesso";
  }
  return "Email ja cadastrado";
}`,
    testCases: [
      {
        id: 1,
        desc: "E-mail novo realiza o cadastro com sucesso",
        args: [
          { nome: "Julia", email: "julia@escola.com" },
          { existeEmail: () => false, salvar: () => {} }
        ],
        expected: "Usuario cadastrado com sucesso",
        explanation: "E-mail disponível permite o salvamento no banco."
      },
      {
        id: 2,
        desc: "E-mail repetido é rejeitado sem salvar",
        args: [
          { nome: "Julia", email: "julia@escola.com" },
          { existeEmail: () => true, salvar: () => {} }
        ],
        expected: "Email ja cadastrado",
        explanation: "E-mail em uso impede novo cadastro."
      }
    ]
  },
  {
    id: 8,
    title: "Controle de Ar-Condicionado com Sensor de Temperatura",
    difficulty: "Iniciante",
    tags: ["Sensores", "Automação", "Clima"],
    problem: `O sistema de automação das salas de aula lê a temperatura de um sensor ambiental (<code>sensorTemp</code>) e liga ou desliga o aparelho de ar-condicionado (<code>aparelhoAr</code>) para manter o ambiente agradável.`,
    rules: [
      "Leia a temperatura atual chamando <code>sensorTemp.lerTemperatura()</code>.",
      "Se a temperatura for maior que 25 (<code>temp > 25</code>): chame <code>aparelhoAr.ligar()</code> e retorne <code>\"Ar ligado\"</code>.",
      "Se a temperatura for igual ou menor que 25 (<code>temp <= 25</code>): chame <code>aparelhoAr.desligar()</code> e retorne <code>\"Ar desligado\"</code>."
    ],
    functionName: "controlarClima",
    signature: "controlarClima(sensorTemp, aparelhoAr)",
    initialCode: `function controlarClima(sensorTemp, aparelhoAr) {
  const temp = sensorTemp.temperatura;
  if (temp > 25) {
    aparelhoAr.desligar();
    return "Ar desligado";
  } else {
    aparelhoAr.ligar();
    return "Ar ligado";
  }
}`,
    testCases: [
      {
        id: 1,
        desc: "Temperatura de 28°C aciona e liga o ar-condicionado",
        args: [
          { lerTemperatura: () => 28 },
          { ligar: () => {}, desligar: () => {} }
        ],
        expected: "Ar ligado",
        explanation: "28°C > 25°C exige resfriamento."
      },
      {
        id: 2,
        desc: "Temperatura de 22°C mantém o ar-condicionado desligado",
        args: [
          { lerTemperatura: () => 22 },
          { ligar: () => {}, desligar: () => {} }
        ],
        expected: "Ar desligado",
        explanation: "22°C <= 25°C mantém o aparelho desligado."
      }
    ]
  },
  {
    id: 9,
    title: "Gerenciador de Lista de Tarefas com Salvamento",
    difficulty: "Iniciante",
    tags: ["Listas", "Storage", "Tarefas"],
    problem: `Em um aplicativo de estudos, o aluno adiciona uma nova matéria para estudar. A função deve incluir a nova tarefa na lista e salvar a lista atualizada no armazenamento (<code>storage</code>). Crie a função <code>adicionarETarefaSalvar(novaTarefa, listaAtual, storage)</code>.`,
    rules: [
      "Adicione a string <code>novaTarefa</code> ao array <code>listaAtual</code>.",
      "Salve a lista atualizada no armazenamento chamando <code>storage.salvar(\"minhas_tarefas\", listaAtual)</code>.",
      "Retorne o número total de tarefas na lista (<code>listaAtual.length</code>)."
    ],
    functionName: "adicionarETarefaSalvar",
    signature: "adicionarETarefaSalvar(novaTarefa, listaAtual, storage)",
    initialCode: `function adicionarETarefaSalvar(novaTarefa, listaAtual, storage) {
  storage.salvar("minhas_tarefas", listaAtual);
  return listaAtual.length;
}`,
    testCases: [
      {
        id: 1,
        desc: "Adiciona 'Estudar Matemática' em uma lista que tinha 2 itens",
        args: [
          "Estudar Matematica",
          ["Fazer redação", "Ler livro"],
          { salvar: () => {} }
        ],
        expected: 3,
        explanation: "Com a inclusão, o total de tarefas passa de 2 para 3."
      }
    ]
  },
  {
    id: 10,
    title: "Calculadora de Frete e Prazo de Entrega",
    difficulty: "Iniciante",
    tags: ["Frete", "Correios", "Objetos"],
    problem: `Ao comprar um livro didático, o sistema calcula o preço do frete e o prazo estimado de entrega consultando o serviço postal (<code>servicoEntrega</code>) com base na distância e no tipo de envio (\"EXPRESSO\" ou \"PADRAO\").`,
    rules: [
      "Complete a função <code>calcularFreteEPrazo(distanciaKm, tipoFrete, servicoEntrega)</code>.",
      "Obtenha o valor por km chamando <code>servicoEntrega.getPrecoPorKm(tipoFrete)</code>.",
      "Calcule o preço do frete: <code>precoTotal = distanciaKm * valorPorKm</code>.",
      "Defina o prazo em dias:",
      "  - Se <code>tipoFrete === \"EXPRESSO\"</code>, o prazo é 2 dias.",
      "  - Se <code>tipoFrete === \"PADRAO\"</code>, o prazo é 5 dias.",
      "Retorne um objeto no formato: <code>{ preco: precoTotal, prazoDias: prazoDias }</code>."
    ],
    functionName: "calcularFreteEPrazo",
    signature: "calcularFreteEPrazo(distanciaKm, tipoFrete, servicoEntrega)",
    initialCode: `function calcularFreteEPrazo(distanciaKm, tipoFrete, servicoEntrega) {
  const valorPorKm = servicoEntrega.getPrecoPorKm();
  const precoTotal = distanciaKm * valorPorKm;
  const prazoDias = tipoFrete === "EXPRESSO" ? 5 : 2;
  return { preco: precoTotal, prazoDias: prazoDias };
}`,
    testCases: [
      {
        id: 1,
        desc: "Frete EXPRESSO para 10km (R$ 4/km)",
        args: [
          10,
          "EXPRESSO",
          { getPrecoPorKm: (tipo) => (tipo === "EXPRESSO" ? 4 : 2) }
        ],
        expected: { preco: 40, prazoDias: 2 },
        explanation: "10km * R$4/km = R$ 40 com prazo de 2 dias."
      },
      {
        id: 2,
        desc: "Frete PADRAO para 20km (R$ 2/km)",
        args: [
          20,
          "PADRAO",
          { getPrecoPorKm: (tipo) => (tipo === "EXPRESSO" ? 4 : 2) }
        ],
        expected: { preco: 40, prazoDias: 5 },
        explanation: "20km * R$2/km = R$ 40 com prazo de 5 dias."
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.INTEGRATION_CHALLENGES = INTEGRATION_CHALLENGES;
}
