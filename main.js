

function openclick() {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");
    updateDynamicText(); // chamada para atualizar a frase ao abrir
  }

  function clickTry() {
    document.querySelector(".screen1").classList.remove("hide");
    document.querySelector(".screen2").classList.add("hide");
    document.querySelector(".screen2 p").innerHTML = ""; // Limpa o texto ao fechar
  }

  function updateDynamicText() {
    let phrases = [
        "Procure acender uma vela em vez de amaldiçoar a escuridão",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia",
        "Acredite que você pode e você já está no meio do caminho",
        "A jornada de mil milhas começa com um simples passo",
        "A persistência realiza o impossível",
        "A sorte favorece a mente preparada",
        "A verdadeira medida de um homem não é como ele se comporta em momentos de conforto e conveniência, mas como ele se mantém em tempos de desafio e controvérsia",
        "A única maneira de fazer um excelente trabalho é amar o que você faz",
        "O segredo para progredir é começar",
        "Nada é impossível, a palavra mesma diz 'eu sou possível'"
      
    ];

    let randomIndex = Math.floor(Math.random() * 9);
    let selectedPhrase = phrases[randomIndex];
    document.querySelector(".screen2 p").innerHTML = selectedPhrase;
  }