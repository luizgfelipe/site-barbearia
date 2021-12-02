var total = 0;
var imagem = 306;
var contador = 0;

function slider(){
    contador += 1;
    total = total - imagem;
    if(contador < 5){
        document.querySelector('.slider').style.marginLeft = total+"px";
    } else{
        document.querySelector('.slider').style.marginLeft = "0px";
        contador = 0;
        total = 0;
    }
    
}


var timeoutID = setInterval(slider, 5000);

