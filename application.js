document.getElementsByClassName("squares");

// Get all the squares
var squares = document.getElementsByClassName("squares");

var board = ["","","","","","","","",""];
var check4Win = function(){
	/*if ((win1[0] == currentUser[0]) && (win1[1] == currentUser[1]) && win1[2] == currentUser[2]) ||
			((win2[3] == currentUser[3]) && (win2[4] == currentUser[4]) && win2[5] == currentUser[5]) ||*/
}


// var wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

}


var isXTurn = true;
// Cycle over every square
for(var x = 0; x< squares.length; ++x) {
    // Give it a click handler
    squares[x].onclick = function() {
    	if (isXTurn == true) {
    		console.log("x");
    		this.innerHTML = "x";
    		// function checkForWin(){
    		// 	return "x wins";
    		// }
    		check4Win();
	    	// That alerts on click
			alert("user chooses x");
    		isXTurn = false; 
    	}
		else{
			console.log("o");
			this.innerHTML = "o";
			check4Win();
			alert("user chooses o");
			isXTurn = true;
			console.log(x);

			}
	}
}




/*.onclick = function() {
	alert("user chooses x");
}
*/











/*count % 2 == 0 = player 1
count % 2 != 0 = player 2

win = [[0,1,2], [3,4,5], [6,7,8],[0,3,6], [1,4,7],

]