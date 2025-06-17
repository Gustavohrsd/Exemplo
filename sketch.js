let fazenda;

function preload() {
  // Carrega a imagem que foi enviada para o projeto
  fazenda = loadImage('fazenda.jpg');
}

function setup() {
  createCanvas(500,400);
}

function draw() {
  // Desenha a imagem como fundo
  image(fazenda, 0, 0, width, height);

}