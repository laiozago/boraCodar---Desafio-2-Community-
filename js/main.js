// Seleciona o botão
var button = document.querySelector("button[type='button']");

// Armazena as imagens
var images = ["./assets/img/Sofa.png", "./assets/img/Sofa.gif"];
var botoes = ["assets/img/360-degree-rotate-icon.svg", "assets/img/close.svg"]

// Variável para controlar qual imagem e qual botão está sendo exibida
var currentImage = 0;

// Adiciona um event listener para o clique no botão
button.addEventListener("click", function () {
    // Seleciona a imagem
    var image = document.querySelector("img");

    // Altera o src da imagem para a próxima imagem no array
    image.src = images[currentImage];
    button.style.backgroundImage = "url('" + botoes[currentImage] + "')";

    // Seleciona o botão novamente
    button = document.querySelector("button[type='button']");

    // Altera o índice da imagem atual
    currentImage = (currentImage + 1) % images.length;
});
