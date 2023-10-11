var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

tentativa = parseInt(prompt("Tente acertar o número: "))


function checagem(){
   
}


if (tentativa > numeroAleatorio){
   alert("Abaixe o número")
}else if(tentaiva < numeroAleatorio){
   alert("Aumente o número")
}else{
   alert("Acertou!")
}