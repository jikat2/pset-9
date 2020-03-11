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
fakeBoard();
copyBoard();
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
for(var i=0; i < 128; i++){
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
			for(var i = 0; i < 128; i++){
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
				for(let i = 0; i < 128; i++){
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
function reset(){
	for(var i=0; i<128; i++){
		document.getElementById(i).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
	}
}
//AI related things
function fakeBoard(){
	for (var i=64; i< 128; i++){
    let dive = document.createElement("div");
	dive.id = i;
	dive.style.display = "none";
	dive.innnerHTML = '<div class="whitecircle">K</div>';
    document.getElementById("mainChessBoard").appendChild(dive);
	}
}
function fakeBoardSnapshot(){
	var snapshot = [];
	for(var i = 64; i < 128; i++){
		if(document.getElementById(i).innerHTML.includes('<div class="whitecircle">')){
			if(document.getElementById(i).innerHTML.includes('K')){
				snapshot.push(i);
			}
			else{
				snapshot.push(i + 64);
			}
		}
		else if(document.getElementById(i).innerHTML.includes('<div class="blackcircle">')){
			if(document.getElementById(i).innerHTML.includes('K')){
				snapshot.push(i + 128);
			}
			else{
				snapshot.push(i + 192);
			}
		}
	}
	return snapshot;
}

function restoreSnapshot(snapshot){

	for(var i = 64; i < 128; i++){
		document.getElementById(i).innerHTML = "";
	}
	for(var i = 0; i < snapshot.length; i++){
		if(snapshot[i] < 128){
			document.getElementById(snapshot[i]).innerHTML = '<div class="whitecircle">K</div>';
		}
		else if(snapshot[i] < 192){
			document.getElementById(snapshot[i] - 64).innerHTML = '<div class="whitecircle"></div>';
		}
		else if(snapshot[i] < 256){
			document.getElementById(snapshot[i] - 128).innerHTML = '<div class="blackcircle">K</div>';
		}
		else{
			document.getElementById(snapshot[i] - 192).innerHTML = '<div class="blackcircle"></div>';
		}
	}

	/*if(fakeBoardSnapshot() != snapshot){
		console.log("bad");
	}*/
}
	
function copyBoard(){
	for (var i = 0; i < 64; i++){
		document.getElementById(i+64).innerHTML = document.getElementById(i).innerHTML;
    }
}
function move(start, end){
	var oldSquar = document.getElementById(start);
	var currentSquar = document.getElementById(end);
	if(oldSquar.id == currentSquar.id - 18){
		document.getElementById(currentSquar.id - 9).innerHTML = "";
	}
	if(oldSquar.id == currentSquar.id - 14){
		document.getElementById(currentSquar.id - 7).innerHTML = "";
	}
	if(oldSquar.id == currentSquar.id - (-18)){
		document.getElementById(currentSquar.id - (-9)).innerHTML = "";
	}
	if(oldSquar.id == currentSquar.id - (-14)){
		document.getElementById(currentSquar.id - (-7)).innerHTML = "";
	}

	document.getElementById(end).innerHTML = document.getElementById(start).innerHTML;
	document.getElementById(start).innerHTML = "";
}
function computerTurn(){
	copyBoard();
	var selected_move = search(fakeBoardSnapshot(), 6);
	console.log(selected_move);
	document.getElementById(selected_move[0][0] - 64).click();
	document.getElementById(selected_move[0][1] - 64).click();
}
function getMoves(player, target_board){
	var moves = [];
	var change = false;
	var curturn = turn;
	for(let i = 64; i < 128; i++){
		if(document.getElementById(i).innerHTML.includes('<div class="' + player + 'circle">')){
		   if(turn != player){
			   turn = player;
			   change = true;
		   }
		   document.getElementById(i).click();
		   if(change == true){
			   turn = curturn;
		   }
		   for(let j = 64; j < 128; j++){
			if(document.getElementById(j).style.backgroundColor == "yellow"){
				moves.push([i, j]);
			}
		   }
	    }
		reset();
	}
	var jumps = [];
	for(let i = 64; i < 128; i++){
		if(document.getElementById(i).innerHTML.includes('<div class="' + player + 'circle">')){
		   document.getElementById(i).click();
		   for(let j = 64; j < 128; j++){
			if(document.getElementById(j).style.backgroundColor == "yellow" && Math.abs(i - j) > 10){
				jumps.push([i, j]);
			}
		   }
	    }
		reset();
	}
	if(jumps.length > 0){
		moves = jumps;
	}
	return moves;
}

function evaluate(target_board) {
    var sum = 0;
    var computer_pieces = 0;
    var computer_kings = 0;
    var human_pieces = 0;
    var human_kings = 0;
    var computer_pos_sum = 0;
    var human_pos_sum = 0;

    //log("************* UTILITY *****************")
    for (var i=64; i < 128; i++) {
	    if (document.getElementById(i).innerHTML.includes('<div class="whitecircle">')) { // human
	         human_pieces += 1;
	         if (document.getElementById(i).innerHTML.includes("K")){
	             human_kings += 1;
	         }
	         human_pos_sum += 3;
	    }
	     else if(document.getElementById(i).innerHTML.includes('<div class="blackcircle">')){ // computer
	         computer_pieces += 1;
	         if (document.getElementById(i).innerHTML.includes("K")){
	             computer_kings += 1;
	         }
	         computer_pos_sum += 3;
	     }
   
    }

    var piece_difference = computer_pieces - human_pieces;
    var king_difference = computer_kings - human_kings;
    if (human_pieces === 0){
        human_pieces = 0.00001;
    }
    var avg_human_pos = human_pos_sum / human_pieces;
    if (computer_pieces === 0) {
        computer_pieces = 0.00001;
    }
    var avg_computer_pos = computer_pos_sum / computer_pieces;
    var avg_pos_diff = avg_computer_pos - avg_human_pos;

    var features = [piece_difference, king_difference, avg_pos_diff];
    var weights = [100, 10, 1];

    var position = 0;

    for (var f=0; f < features.length; f++){
        var weight = features[f] * weights[f];
        position += weight;
    }

    //log("utility=" + board_utility);
    //log("************* END  UTILITY ************")

    return position;
}

function jump_available(moves){
	var jump = false;
	for(var i = 0; i < moves.length; i++){
		if(Math.abs(moves[i][0] - moves[i][1]) > 10){
			jump = true;
		}
	}
	return jump;
}

function min_value(calc_board, human_moves, limit, alpha, beta){
	if(limit <= 0){// && !jump_available(human_moves)){
		return evaluate("h");
	}

	var min = 10000000000000000000000;
	
	if(human_moves.length > 0){
		for(var i = 0; i < human_moves.length; i++){
			restoreSnapshot(calc_board);
			move(human_moves[i][0], human_moves[i][1]);
			var computer_moves = getMoves("black", "h");
			var max_score = max_value(fakeBoardSnapshot(), computer_moves, limit-1, alpha, beta);
		    if (max_score < min) {
                min = max_score;
            }
            human_moves[i].score = min;
            if (min <= alpha) {
                break;
            }
            if (min < beta) {
                beta = min;
            }
		}
	}
	else {
      if( win != ""){
        if (win == "white"){
             return -100000;
        }
		else return 100000;
      }                                                                                                                                                                  
    }
	return min;
}

function max_value(calc_board, computer_moves, limit, alpha, beta){
	if(limit <= 0){ // && !jump_available(computer_moves)){
		return evaluate("h");
	}
	var max = -100000000000000000;
	
	if(computer_moves.length > 0){
		for(var i = 0; i < computer_moves.length; i++){
			restoreSnapshot(calc_board);
			move(computer_moves[i][0], computer_moves[i][1]);
			var human_moves = getMoves("white", "h");
			var min_score = min_value(fakeBoardSnapshot(), human_moves, limit-1, alpha, beta);
			computer_moves[i].score = min_score;
			if (min_score > max) {
                max = min_score;
            }
            if (max >= beta) {
                break;
            }
            if (max > alpha) {
                alpha = max;
            }
		}
	}
	else {
      if( win != ""){
        if (win == "white"){
             return -100000;
        }
		else return 100000;
      }
    }
	if(limit == 6){
		console.log(computer_moves);
		for(var i = 0; i < computer_moves.length; i++){
			console.log(computer_moves[i].score);
		}
	}
	return max;
}

function search(calc_board, limit) {
    var alpha = Number.NEGATIVE_INFINITY;
    var beta = Number.INFINITY;
    restoreSnapshot(calc_board);
    //get available moves for computer
    var available_moves = getMoves("black", calc_board);
    //get max value for each available move
    var max = max_value(calc_board,available_moves,limit,alpha,beta);
    //find all moves that have max-value
    var best_moves = [];
    var max_move = null;
    console.log(max);
    console.log(available_moves);  
    for(var i=0;i<available_moves.length;i++){
        var next_move = available_moves[i];
        if (next_move.score == max){
            max_move = next_move;
            best_moves.push(next_move);
        }
    }

    //randomize selection, if multiple moves have same max-value
    return best_moves;
}
