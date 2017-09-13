	var randomLoc = Math.floor(Math.random() * 5 );
	var location1 = randomLoc
	var location2 = location1 + 1
	var location3 = location2 + 1
	var guess
	var hits = 0
	var guesses = 0
	var isSunk = false

	while (isSunk == false) {
		guess = prompt("Ready, aim, fire! (enter a number from 0-6):");

		if (guess < 0 || guess > 6) { //Codido de validação
			alert("Coloque os numeros validos"); 
		} else {
			guesses = guesses+1; //Se o "guess" é valido, siga em frente e add um ao "guesses" pra contar quantas vezes o usuario adivinhou
		if (guess == location1 || guess == location2 || guess == location3) { // Se "guess" corresponder a alguma localização do navio, adiciona no contador
			alert("Acertou!");
			hits = hits + 1;
		if (hits == 3 ) {
			isSunk = true;
			alert("You sank my battleship!");
		}
			}else {
				alert("ERRROU!");
			}
		}
}	
	var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses * 100 + "%");
	alert(stats);