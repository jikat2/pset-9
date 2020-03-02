var turn = "white";
var header = document.getElementById("h2");
header.textContent = "Turn: white";
var secondturn = false;
var currentid = -1;
var closede = false;
var win = "";
var turns = 0;
var players = "Two";
window.onload = function(){
for (var i=0; i< 64; i++){
    let dive = document.createElement("div");
    dive.style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
    dive.className = "squire";
	dive.id = i;
	dive.innerHTML = parseInt((i / 8) + i) % 2 == 0 && (i < 24) ? '<div class="blackcircle"></div>' : (parseInt((i / 8) + i) % 2 == 0 && (i > 40) ? '<div class="whitecircle"></div>' : '');
    document.getElementById("mainChessBoard").appendChild(dive);
}
setClick();
setReset();
setPlayer();
}

function setPlayer(){
	document.getElementById("player-toggle").onclick = function(){
		players = players == "Two" ? "One": "Two";
		document.getElementById("player-toggle").textContent = players + " Players";
	}
}
		
function setReset(){
	document.getElementById("reset-button").onclick = function(){
		turn = "white";
		header = document.getElementById("h2");
		header.textContent = "Turn: white";
		secondturn = false;
		currentid = -1;
		closede = false;
		win = "";
		turns = 0;
		for(var i = 0; i < 64; i++){
			document.getElementById(i).remove();
		}
		for (var i=0; i< 64; i++){
			let dive = document.createElement("div");
			dive.style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
			dive.className = "squire";
			dive.id = i;
			dive.innerHTML = parseInt((i / 8) + i) % 2 == 0 && (i < 24) ? '<div class="blackcircle"></div>' : (parseInt((i / 8) + i) % 2 == 0 && (i > 40) ? '<div class="whitecircle"></div>' : '');
			document.getElementById("mainChessBoard").appendChild(dive);
		}
		setClick();
	}
}
function setClick(){
for(var i=0; i < 64; i++){
	let currentSquare = document.getElementById(i.toString());
	currentSquare.onclick = function(){
		if((closede == false || currentSquare.id == currentid || currentSquare.style.backgroundColor == "yellow") && !win){
		if(currentSquare.innerHTML.includes('<div class="whitecircle">') && turn == "white"){
			reset();
			var leftSquare = document.getElementById(currentSquare.id-9);
			var rightSquare = document.getElementById(currentSquare.id-7);
			var moreLeft = document.getElementById(currentSquare.id - 18);
			var moreRight = document.getElementById(currentSquare.id - 14);
			var leftSquar = document.getElementById(currentSquare.id - (-9));
			var rightSquar = document.getElementById(currentSquare.id - (-7));
			var moreLef = document.getElementById(currentSquare.id - (-18));
			var moreRigh = document.getElementById(currentSquare.id - (-14));
			if(!(!leftSquare) && leftSquare.innerHTML == "" && (leftSquare.id - (leftSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
				leftSquare.style.backgroundColor = "yellow";
			}
			else if(!(!leftSquare) && leftSquare.innerHTML.includes('<div class="blackcircle">') && !(!moreLeft) && moreLeft.innerHTML == "" && (moreLeft.id - (moreLeft.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
				moreLeft.style.backgroundColor = "yellow";
			}
			if(!(!rightSquare) && rightSquare.innerHTML == "" && (rightSquare.id - (rightSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
				rightSquare.style.backgroundColor = "yellow";
			}
			else if(!(!rightSquare) && rightSquare.innerHTML.includes('<div class="blackcircle">') && !(!moreRight) && moreRight.innerHTML == "" && (moreRight.id - (moreRight.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
				moreRight.style.backgroundColor = "yellow";
			}
			if(currentSquare.innerHTML.includes('K')){
				if(!(!leftSquar) && leftSquar.innerHTML == "" && (leftSquar.id - (leftSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
					leftSquar.style.backgroundColor = "yellow";
				}
				else if(!(!leftSquar) && leftSquar.innerHTML.includes('<div class="blackcircle">') && !(!moreLef) && moreLef.innerHTML == "" && (moreLef.id - (moreLef.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
					moreLef.style.backgroundColor = "yellow";
				}
				if(!(!rightSquar) && rightSquar.innerHTML == "" && (rightSquar.id - (rightSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
					rightSquar.style.backgroundColor = "yellow";
				}
				else if(!(!rightSquar) && rightSquar.innerHTML.includes('<div class="blackcircle">') && !(!moreRigh) && moreRigh.innerHTML == "" && (moreRigh.id - (moreRigh.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
					moreRigh.style.backgroundColor = "yellow";
				}
			}
			currentSquare.style.backgroundColor = "red";
		}
		if(currentSquare.innerHTML.includes('<div class="blackcircle">') && turn == "black"){
			reset();
			var leftSquare = document.getElementById(currentSquare.id - (-9));
			var rightSquare = document.getElementById(currentSquare.id - (-7));
			var moreLeft = document.getElementById(currentSquare.id - (-18));
			var moreRight = document.getElementById(currentSquare.id - (-14));
			var leftSquar = document.getElementById(currentSquare.id-9);
			var rightSquar = document.getElementById(currentSquare.id-7);
			var moreLef = document.getElementById(currentSquare.id - 18);
			var moreRigh = document.getElementById(currentSquare.id - 14);
			console.log(currentSquare.id + 9);
			if(!(!leftSquare) && leftSquare.innerHTML == "" && (leftSquare.id - (leftSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
				leftSquare.style.backgroundColor = "yellow";
			}
			else if(!(!moreLeft) && leftSquare.innerHTML.includes('<div class="whitecircle">') && moreLeft.innerHTML == "" && (moreLeft.id - (moreLeft.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
				moreLeft.style.backgroundColor = "yellow";
			}
			if(!(!rightSquare) && rightSquare.innerHTML == "" && (rightSquare.id - (rightSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
				rightSquare.style.backgroundColor = "yellow";
			}
			else if(!(!moreRight) && rightSquare.innerHTML.includes('<div class="whitecircle">') && moreRight.innerHTML == "" && (moreRight.id - (moreRight.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
				moreRight.style.backgroundColor = "yellow";
			}
			if(currentSquare.innerHTML.includes('K')){
				if(!(!leftSquar) && leftSquar.innerHTML == "" && (leftSquar.id - (leftSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
					leftSquar.style.backgroundColor = "yellow";
				}
				else if(!(!leftSquar) && leftSquar.innerHTML.includes('<div class="whitecircle">') && !(!moreLef) && moreLef.innerHTML == "" && (moreLef.id - (moreLef.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
					moreLef.style.backgroundColor = "yellow";
				}
				if(!(!rightSquar) && rightSquar.innerHTML == "" && (rightSquar.id - (rightSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
					rightSquar.style.backgroundColor = "yellow";
				}
				else if(!(!rightSquar) && rightSquar.innerHTML.includes('<div class="whitecircle">') && !(!moreRigh) && moreRigh.innerHTML == "" && (moreRigh.id - (moreRigh.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
					moreRigh.style.backgroundColor = "yellow";
				}
			}
			currentSquare.style.backgroundColor = "red";
		}
		if(currentSquare.innerHTML == "" && currentSquare.style.backgroundColor == "yellow"){
			var oldSquare = "";
			for(var i = 0; i < 64; i++){
				if(document.getElementById(i.toString()).style.backgroundColor == "red"){
					oldSquare = document.getElementById(i.toString());
				}
			}
			if(oldSquare.id == currentSquare.id - 18){
				document.getElementById(currentSquare.id - 9).innerHTML = "";
				secondturn = true;
			}
			if(oldSquare.id == currentSquare.id - 14){
				document.getElementById(currentSquare.id - 7).innerHTML = "";
				secondturn = true;
			}
			if(oldSquare.id == currentSquare.id - (-18)){
				document.getElementById(currentSquare.id - (-9)).innerHTML = "";
				secondturn = true;
			}
			if(oldSquare.id == currentSquare.id - (-14)){
				document.getElementById(currentSquare.id - (-7)).innerHTML = "";
				secondturn = true;
			}
			currentSquare.innerHTML = oldSquare.innerHTML;
			oldSquare.innerHTML = "";
			var blackcount = 0;
			var whitecount = 0;
			for(let i = 0; i < 64; i++){
				if(document.getElementById(i).innerHTML.includes('<div class="blackcircle">')){
					blackcount++;
				}
				else if(document.getElementById(i).innerHTML.includes('<div class="whitecircle">')){
					whitecount++;
				}
			}
			if(blackcount == 0){
				win = "white";
			}
			else if(whitecount == 0){
				win = "black";
		    }
			else if(turns == 20){
				win = "No one";
			}
			if(currentSquare.id - currentSquare.id % 8 == 0 || currentSquare.id - currentSquare.id % 8 == 56){
				console.log("hey");
				if(currentSquare.innerHTML.includes('<div class="whitecircle">')){
					currentSquare.innerHTML = '<div class="whitecircle">K</div>';
				}
				else{
					currentSquare.innerHTML = '<div class="blackcircle">K</div>';
				}
			}
			let movementSquare = -1;
			if(secondturn == true){
				currentSquare.click();
				for(let i = 0; i < 64; i++){
					if(document.getElementById(i).style.backgroundColor == "yellow" && Math.abs(currentSquare.id - i) > 10){
						movementSquare = i;
					}
				}
			}
			if(movementSquare >= 0){
				currentid = currentSquare.id;
				closede = true;
			}
			else{
				turn = turn == "white" ? "black": "white";
				secondturn = false;
				closede = false;
			}
			if(blackcount == 1 && whitecount == 1){
				turns++;
			}
			if(!win){    
				header.textContent = "Turn: " + turn;
				reset();
				var possible = false;
				for(let i = 0; i < 64; i++){
					document.getElementById(i).click();
					for(let i = 0; i < 64; i++){
						if(document.getElementById(i).style.backgroundColor == "yellow"){
							possible = true;
						}
					}
					reset();
				}
				document.getElementById(63).style.backgroundColor = "#ababab";
				if(possible == false){
					if(turn == "black"){
						win = "white"
					}
					else{
						win = "black"
					}
					header.textContent = win + " wins";
				}
				if(players == "One"){
					computerTurn();
					turn = turn == "white" ? "black": "white";
				}
				
			}
			else{
				header.textContent = win + " wins";
				
			}
			
		}
		}
	}
}
}
function computerTurn(){
	
}
function reset(){
	for(var i=0; i<64; i++){
		document.getElementById(i).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
	}
}

