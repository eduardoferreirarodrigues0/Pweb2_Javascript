num1 = parseInt(prompt("Digite o 1° número: "))
num2 = parseInt(prompt("Digite o 2° número: "))
num3 = parseInt(prompt("Digite o 3° número: "))

function maiorNumero(num1,num2,num3) {
    if (num1 > num2 && num1 > num3){
        alert("o maior número é:" + num1) 
    }else if (num2 > num1 && num2 > num3){
        alert("o maior número é:" + num2)
    }else{
        alert("o maior número é:" + num3)
    }
  }
  
console.log(maiorNumero())