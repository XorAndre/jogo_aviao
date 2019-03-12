let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
//Arruma borda de verde
//larguras
contexto.fillStyle = "transparent";
contexto.fillRect(0, 0, canvas.width, 80);
contexto.fillStyle = "transparent";
contexto.fillRect(0, 380, canvas.width, 80);
//Objeto
function desenhaImagem(){contexto.drawImage(imagem, x, y, imagem.width, imagem.height);};
let imagem = new Image();
imagem.src = "assets/img/aviao.png";
let x = 100;
let y = 50;
imagem.onload = desenhaImagem;
setInterval(function(){
    desenhaImagem();
},50);
//movimentacao
document.onkeydown = function(event) {
    switch(event.which) {
        case 37: 
            x = x -10;
            if(x < -imagem.width) {
                x = canvas.width;
            }
        break;
        case 38:
            y = y - 10;
            if(y <= -5) {
                y = canvas.height - imagem.height;
            }
        break;
        case 39: 
            x = x + 10;
            if(x > canvas.width) {
                x = -imagem.width;
            }
        break;
        case 40: 
            y = y + 10;
            if(y > canvas.height - imagem.height + 5) {
                y -= 10;
            }
        break;
    }
}