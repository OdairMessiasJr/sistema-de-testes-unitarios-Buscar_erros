# 📘 Guia de Resoluções e Diagnóstico de Erros - JS Code Quest

Este documento traz o guia completo dos **20 Desafios** (10 de Testes Unitários e 10 de Testes Integrados).
Cada desafio já vem carregado no editor da direita com **erros de código propositais (bugs)**. O objetivo dos alunos é executar os testes no terminal Jest, identificar o erro pela mensagem de falha e corrigir o código até obter 100% de aprovação.

---

## ⚡ TRILHA 1: TESTES UNITÁRIOS (10 DESAFIOS)

### Desafio 1: Sistema de Descontos VIP
* **🐛 Bug Inicial:** A lógica de desconto foi invertida (`if (!isVip)`), aplicando 20% off para clientes normais e cobrando valor integral de clientes VIP.
* **✅ Código Corrigido:**
```javascript
function calcularPreco(valor, isVip) {
  if (isVip) {
    return valor * 0.8;
  }
  return valor;
}
```

---

### Desafio 2: Cálculo de Média Escolar
* **🐛 Bug Inicial:** Faltavam parênteses na soma das notas (`nota1 + nota2 + nota3 / 3`), fazendo com que apenas a `nota3` fosse dividida por 3 devido à precedência dos operadores.
* **✅ Código Corrigido:**
```javascript
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}
```

---

### Desafio 3: Verificador de Maioridade
* **🐛 Bug Inicial:** Operador de comparação maior estrito (`idade > 18`) classificava jovens de 18 anos como menores, além de erro nas maiúsculas/minúsculas das strings.
* **✅ Código Corrigido:**
```javascript
function verificarMaioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
```

---

### Desafio 4: Par ou Ímpar
* **🐛 Bug Inicial:** Usou divisão simples (`numero / 2 === 0`) em vez do operador de resto da divisão (`%`), além de inverter os retornos de "Par" e "Ímpar".
* **✅ Código Corrigido:**
```javascript
function verificarParidade(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
```

---

### Desafio 5: Cálculo de IMC
* **🐛 Bug Inicial:** Esqueceu de elevar a altura ao quadrado (`peso / altura`) e retornou o valor como String em vez de converter para Number (`Number(...)`).
* **✅ Código Corrigido:**
```javascript
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return Number(imc.toFixed(2));
}
```

---

### Desafio 6: Conversor de Temperatura
* **🐛 Bug Inicial:** Trocou os coeficientes da fórmula matemática, multiplicando por 32 e somando 1.8.
* **✅ Código Corrigido:**
```javascript
function celsiusParaFahrenheit(celsius) {
  return (celsius * 1.8) + 32;
}
```

---

### Desafio 7: Calculadora de Gorjeta
* **🐛 Bug Inicial:** Retornou a soma do valor da conta com a gorjeta (`valorConta + gorjeta`) em vez de retornar apenas o valor da gorjeta.
* **✅ Código Corrigido:**
```javascript
function calcularGorjeta(valorConta, percentual) {
  return valorConta * (percentual / 100);
}
```

---

### Desafio 8: Maior de Três Números
* **🐛 Bug Inicial:** Usou a função `Math.min` em vez de `Math.max`, retornando o menor número entre os três.
* **✅ Código Corrigido:**
```javascript
function encontrarMaior(a, b, c) {
  return Math.max(a, b, c);
}
```

---

### Desafio 9: Conversor de Minutos em Horas
* **🐛 Bug Inicial:** Não utilizou `Math.floor()` nas horas (gerando número decimal) e inverteu as variáveis na string formatada (`${minutos}h ${horas}m`).
* **✅ Código Corrigido:**
```javascript
function formatarMinutos(totalMinutos) {
  const horas = Math.floor(totalMinutos / 60);
  const minutos = totalMinutos % 60;
  return `${horas}h ${minutos}m`;
}
```

---

### Desafio 10: Salário Líquido (INSS Simplificado)
* **🐛 Bug Inicial:** Retornava somente a quantia descontada (`salarioBruto * 0.075`) em vez de calcular o salário líquido restante.
* **✅ Código Corrigido:**
```javascript
function calcularSalarioLiquido(salarioBruto) {
  if (salarioBruto <= 2000) {
    return salarioBruto * 0.925; // 7.5% de desconto
  } else {
    return salarioBruto * 0.9;   // 10% de desconto
  }
}
```

---

## 🔗 TRILHA 2: TESTES INTEGRADOS (10 DESAFIOS)

### Desafio 1: Validador de Login e Registro de Log
* **🐛 Bug Inicial:** Método do logger chamado incorretamente como `logger.logar()` (gerando `TypeError`) e mensagens de log com padrão diferente.
* **✅ Código Corrigido:**
```javascript
function loginComLog(usuario, senha, logger) {
  if (senha === "1234") {
    logger.log("Login bem-sucedido: " + usuario);
    return "Acesso liberado";
  } else {
    logger.log("Falha de login: " + usuario);
    return "Senha incorreta";
  }
}
```

---

### Desafio 2: Carrinho de Compras com Cupom Simples
* **🐛 Bug Inicial:** Aplicava o desconto somando o percentual ao valor (`subtotal * (1 + desconto/100)`), encarecendo a compra.
* **✅ Código Corrigido:**
```javascript
function calcularTotalCarrinho(itens, cupom, tabelaCupons) {
  let subtotal = 0;
  for (let i = 0; i < itens.length; i++) {
    subtotal += itens[i];
  }
  if (cupom && tabelaCupons && cupom in tabelaCupons) {
    return subtotal * (1 - tabelaCupons[cupom] / 100);
  }
  return subtotal;
}
```

---

### Desafio 3: Média Escolar e Envio de Boletim
* **🐛 Bug Inicial:** Faltavam parênteses na média e a ordem dos argumentos em `notificador.enviar("Aprovado", aluno)` estava invertida.
* **✅ Código Corrigido:**
```javascript
function processarBoletim(aluno, nota1, nota2, notificador) {
  const media = (nota1 + nota2) / 2;
  if (media >= 6) {
    notificador.enviar(aluno, "Aprovado");
  } else {
    notificador.enviar(aluno, "Recuperacao");
  }
  return media;
}
```

---

### Desafio 4: Pagamento com Cartão e Notificação por E-mail
* **🐛 Bug Inicial:** Chamava `bancoPagamentos.pagar(cartao, valor)` com argumentos invertidos e trocou os assuntos das notificações de e-mail.
* **✅ Código Corrigido:**
```javascript
function comprarComCartao(valor, cartao, bancoPagamentos, servicoEmail) {
  const aprovado = bancoPagamentos.pagar(valor, cartao);
  if (aprovado) {
    servicoEmail.enviar("Compra aprovada");
    return "Sucesso";
  } else {
    servicoEmail.enviar("Compra recusada");
    return "Falha";
  }
}
```

---

### Desafio 5: Emissor de Ingressos de Cinema por Idade
* **🐛 Bug Inicial:** Condição de idade invertida (`idade >= 18` para meia) e falta do hífen na string de retorno ("Meia entrada").
* **✅ Código Corrigido:**
```javascript
function emitirIngresso(nome, idade, emissor) {
  if (idade < 18) {
    emissor.imprimir(nome, "Meia");
    return "Meia-entrada";
  } else {
    emissor.imprimir(nome, "Inteira");
    return "Inteira";
  }
}
```

---

### Desafio 6: Conversor de Moeda com Taxa em Tempo Real
* **🐛 Bug Inicial:** Chamada de método inexistente `apiCambio.taxaDolar()` e operação de multiplicação em vez de divisão por cotação.
* **✅ Código Corrigido:**
```javascript
function converterReaisParaDolar(valorReais, apiCambio) {
  const cotacao = apiCambio.getTaxaDolar();
  return Number((valorReais / cotacao).toFixed(2));
}
```

---

### Desafio 7: Validador de Cadastro com E-mail Único
* **🐛 Bug Inicial:** Salva o usuário antes de verificar se o e-mail já existe e inverte as mensagens de retorno.
* **✅ Código Corrigido:**
```javascript
function cadastrarUsuario(novoUsuario, bancoUsuarios) {
  if (bancoUsuarios.existeEmail(novoUsuario.email)) {
    return "Email ja cadastrado";
  }
  bancoUsuarios.salvar(novoUsuario);
  return "Usuario cadastrado com sucesso";
}
```

---

### Desafio 8: Controle de Ar-Condicionado com Sensor de Temperatura
* **🐛 Bug Inicial:** Tentou ler `sensorTemp.temperatura` (propriedade indefinida em vez do método `lerTemperatura()`) e inverteu a lógica de ligar/desligar.
* **✅ Código Corrigido:**
```javascript
function controlarClima(sensorTemp, aparelhoAr) {
  const temp = sensorTemp.lerTemperatura();
  if (temp > 25) {
    aparelhoAr.ligar();
    return "Ar ligado";
  } else {
    aparelhoAr.desligar();
    return "Ar desligado";
  }
}
```

---

### Desafio 9: Gerenciador de Lista de Tarefas com Salvamento
* **🐛 Bug Inicial:** Esqueceu de inserir a nova tarefa no array (`listaAtual.push(novaTarefa)`) antes de salvar no storage e retornar o tamanho.
* **✅ Código Corrigido:**
```javascript
function adicionarETarefaSalvar(novaTarefa, listaAtual, storage) {
  listaAtual.push(novaTarefa);
  storage.salvar("minhas_tarefas", listaAtual);
  return listaAtual.length;
}
```

---

### Desafio 10: Calculadora de Frete e Prazo de Entrega
* **🐛 Bug Inicial:** Faltou passar `tipoFrete` para `servicoEntrega.getPrecoPorKm()` e inverteu os prazos (5 dias para expresso e 2 para padrão).
* **✅ Código Corrigido:**
```javascript
function calcularFreteEPrazo(distanciaKm, tipoFrete, servicoEntrega) {
  const valorPorKm = servicoEntrega.getPrecoPorKm(tipoFrete);
  const precoTotal = distanciaKm * valorPorKm;
  const prazoDias = tipoFrete === "EXPRESSO" ? 2 : 5;
  return { preco: precoTotal, prazoDias: prazoDias };
}
```
