const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de alto nível",
        "Um tipo de café especial",
        "Um sistema operacional para navegadores da web",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'console.log()' em JavaScript?",
      respostas: [
        "Registrar mensagens de erro no console",
        "Exibir dados na página web",
        "Nenhuma das opções acima",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "int myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o símbolo usado para comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "<!-- -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '2 + 2 + '5' em JavaScript?",
      respostas: [
        "95",
        "9",
        "25",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Adicionar estilos a elementos HTML",
        "Adicionar um ouvinte de eventos a um elemento HTML",
        "Adicionar uma nova classe CSS a um elemento HTML",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de variável",
        "Um bloco de código reutilizável que é executado quando chamado",
        "Uma palavra-chave reservada em JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar vários elementos em um documento HTML",
        "Selecionar um único elemento do DOM usando um seletor CSS",
        "Selecionar um elemento pelo seu ID",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um loop 'for' em JavaScript?",
      respostas: [
        "for (var i = 0; i < 5; i++) { }",
        "loop.for (var i = 0; i < 5; i++) { }",
        "for (var i < 5; i++) { }",
      ],
      correta: 0
    },
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set ()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' * perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
  
  const estaCorreta = event.target.value == item.correta // true
  corretas.delete(item)
  if(estaCorreta){
  corretas.add(item)
   }
  
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  }
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  //escopo
