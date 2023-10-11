let adivinhar = parseInt(prompt("Inserir numero para adivinhar entre 1 e 10:"))

for (let i=1; i<=20; i++)  {
	document.write(i)
	if (adivinhar == i)
		document.write(" Achou o número! ")
	
}

