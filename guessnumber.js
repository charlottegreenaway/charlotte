var sliderval= document.getElementById("slider");
sliderval.value= 10;


const gamebg = document.getElementById("gamebg");
let hue = 0;

function changeColor() {
  hue = (hue + 1) % 360; // Increment the hue value by 1 and reset it to 0 when it reaches 360
  const color = `hsl(${hue}, 100%, 50%)`; // Generate an HSL color string
  gamebg.style.backgroundColor = color; // Update the background color of the element
}

setInterval(changeColor, 50); // Call the changeColor() function every 50 milliseconds


var randomnumberactual;
const value = document.querySelector("#slidervalue");
const input = document.querySelector("#slider");
const guessuptonumber = document.querySelector("#guessupto");
guessuptonumber.textContent= "You are guessing up to: "+ sliderval.value;
randomnumberactual=setrand(setguessupto());


document.getElementById("refreshrandombtn").value="Click for new random number";


value.textContent = input.value; // sets the div "text" content to the value of the slider
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
  //let cool= event.target.value;
  guessuptonumber.textContent= "You are guessing up to: "+ event.target.value;
  randomnumberactual= setrand(setguessupto());

 
});
function refreshrandom(){
	randomnumberactual= setrand(setguessupto());	
};

function setguessupto(){
	let guessnumb= document.getElementById("slider").value;
	console.log("this is guessnumupto",guessnumb);
	return guessnumb;
};

function setrand(guessnum){
	let randomnum=  Math.floor(Math.random()*guessnum);
	console.log("this is the randomnumber",randomnum);
	return randomnum;
};




function input1(){
	let input2= document.getElementById("userguess").value;
	console.log(input2);
	return input2;
};



function isGuessRight(randomNum,Guess){
	if(isNaN(Guess)){
		alert("Please enter a number");
		document.getElementById("userguess").value= "";
		document.getElementById("result").innerHTML="";
	}else if(Guess==""){
		alert("Please enter a value");
		document.getElementById("userguess").value= "";
		document.getElementById("result").innerHTML="";
	}else if (randomNum==Guess){
		document.getElementById("result").innerHTML="Correct! Enter another number to play again";
		document.getElementById("userguess").value= "";
		refreshrandom();
	}else if(randomNum>Guess){
		document.getElementById("result").innerHTML="Incorrect- too low!";
		document.getElementById("userguess").value= "";
	}else if(randomNum<Guess){
		document.getElementById("result").innerHTML="Incorrect- too high!";
		document.getElementById("userguess").value= "";
	}
};


  
