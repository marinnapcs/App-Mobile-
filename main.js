// video joão tinti - java para mudar imagem 

let musicas = [
  { titulo: "Constelações", artista: "Ivyson", src: "music/Constelações.mp3" },

  { titulo: "Esquina", artista: "Ivyson", src: "music/Esquina.mp3" },

  {
    titulo: "Me chama pra dançar",
    artista: "Ivyson",
    src: "music/Me chama pra dançar.mp3",
  },

  { titulo: "Norte", artista: "Ivyson", src: "music/Norte.mp3" },

  {
    titulo: "O que devia ser",
    artista: "Ivyson",
    src: "music/O que devia ser.mp3",
  },

  {
    titulo: "Quando não havia mais ninguém",
    artista: "Ivyson",
    src: "music/Quando não havia mais ninguém.mp3",
  },

  { titulo: "Sabe flor", artista: "Ivyson", src: "music/sabe flor.mp3" },

  {
    titulo: "Se me ver sorrir",
    artista: "Ivyson",
    src: "music/se me ver sorrir.mp3",
  },

  { titulo: "Sem direção", artista: "Ivyson", src: "music/sem direção.mp3" },
];

let musica = document.querySelector("audio");
let indexMusica = 0;
let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");
renderizarMusica(indexMusica);

// Eventos
document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
  indexMusica--;
  renderizarMusica(indexMusica);
});

document.querySelector(".proximo").addEventListener("click", () => {
  indexMusica++;
  renderizarMusica(indexMusica);
});

//Funcoes

function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    duracaoMusica.textContent = segundosParaMinutos(
      Math.floor(musica.duration)
    );
  });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }
  return campoMinutos + ":" + campoSegundos;
}

