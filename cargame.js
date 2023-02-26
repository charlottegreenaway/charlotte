var currentx=0;
var currenty=0;
var forbidxhigh= 965;
var forbidxlow=-15;
var forbidyhigh=-15;
var forbidylow=465;
const gamewindow = document.getElementById("myCanvas");
var ctx = gamewindow.getContext("2d");
const carup = new Image();
const cardown = new Image();
const carleft = new Image();
const carright = new Image();
var parcelnumber=0;
var parcelsCleared = {}; // keep track of which parcels have been cleared
document.getElementById("parcelscollected").innerHTML= parcelnumber;


carup.src="carspriteup.png";
cardown.src="carspritedown.png";
carleft.src="carspriteleft.png";
carright.src="carspriteright.png";

carup.addEventListener("load", function() {
  // Draw the image onto the canvas at position (x: 0, y: 0)
  ctx.drawImage(carup, currentx, currenty,50,50);

  
});


// Add event listener for keydown event on the window object
window.addEventListener("keydown", function(event) {
  // Check if the key pressed is the up arrow
  if (timeLeft > 0) {
	  if (event.code === "ArrowUp") {
		// Perform actions for up arrow key
		if (!(currentx >= 705 && currentx <= 834 && currenty-5 >= 235 && currenty-5 <= 390)) {
			if (!(currentx >= 800 && currentx <= 925 && currenty-5 >= -10 && currenty-5 <= 45)) {
				if (!(currentx >= 215 && currentx <= 392 && currenty-5 >= 300 && currenty-5 <= 425)) {
					if (!(currentx >= 180 && currentx <= 295 && currenty >= 10 && currenty <= 150)) {
						if ((currenty-5)>forbidyhigh){
							ctx.clearRect(currentx, currenty, 60, 60);
							currenty= currenty-5;
							console.log("up",currentx,currenty);
							ctx.drawImage(carup, currentx, currenty,50,50);
							
						};
					};
				};
			};
		};
		
	  }
	  if (event.code === "ArrowDown") {
		// Perform actions for down arrow key
		if (!(currentx >= 705 && currentx <= 834 && currenty+5 >= 235 && currenty+5 <= 390)) {
			if (!(currentx >= 800 && currentx <= 925 && currenty+5 >= -10  && currenty+5 <= 45)) {
			  if (!(currentx >= 215 && currentx <= 392 && currenty+5 >= 300 && currenty+5 <= 425)) {
					if (!(currentx >= 180 && currentx <= 295 && currenty+5 >= 10 && currenty+5 <= 150)) {
						if ((currenty+5)<forbidylow){
							ctx.clearRect(currentx, currenty, 60, 60);
							currenty= currenty+5;
							console.log("down",currentx,currenty);
							ctx.drawImage(cardown, currentx, currenty,50,50);
						};
						
							
					};
				};
			};
		};
			
	  }
	  if (event.code === "ArrowLeft") {
		// Perform actions for up arrow key
		if (!(currentx-5 >= 705 && currentx-5 <= 834 && currenty >= 235 && currenty <= 390)) {
				if (!(currentx-5 >= 800 && currentx-5 <= 925 && currenty >= -10  && currenty <= 45)) {
					if (!(currentx-5 >= 215 && currentx-5 <= 392 && currenty >= 300 && currenty <= 425)) {
						if (!(currentx-5 >= 180 && currentx-5 <= 295 && currenty >= 10 && currenty <= 150)) {
							if ((currentx-5)>forbidxlow){
								ctx.clearRect(currentx, currenty, 60, 60);
								currentx= currentx-5;
							
								console.log("left",currentx,currenty);
								ctx.drawImage(carleft, currentx, currenty,50,50);
							};
						
								
						};
					};
				};
		};
		
	  }
	  if (event.code === "ArrowRight") {
		// Perform actions for right arrow key
		if (!(currentx+5 >= 705 && currentx+5 <= 834 && currenty >= 235 && currenty <= 390)) {
			if (!(currentx+5 >= 800 && currentx+5 <= 925 && currenty >= -10  && currenty <= 45)) {
				if (!(currentx+5 >= 215 && currentx+5 <= 392 && currenty >= 300 && currenty <= 425)) {
					if (!(currentx+5 >= 180 && currentx+5 <= 295 && currenty >= 10 && currenty <= 150)) {
						if ((currentx+5)<forbidxhigh){
							ctx.clearRect(currentx, currenty, 60, 60);
							currentx= currentx+5;
							
							console.log("right",currentx,currenty);
							ctx.drawImage(carright, currentx, currenty,50,50);
						};
						
					};
				};
			};
		};
	  };
  }
 




	// Check if car overlaps any of the parcels
	if (currentx + 50 >= 170 && currentx <= 190 && currenty + 50 >= 150 && currenty <= 170 && !parcelsCleared.parcel1) {
	parcelnumber++;
	ctx.clearRect(170, 150, 20, 20);
	parcelsCleared.parcel1 = true;
		document.getElementById("parcelscollected").innerHTML= parcelnumber;
	};

	if (currentx + 50 >= 325 && currentx <= 345 && currenty + 50 >= 290 && currenty <= 310 && !parcelsCleared.parcel2) {
	parcelnumber++;
	ctx.clearRect(325, 290, 20, 20);
	parcelsCleared.parcel2 = true;
		document.getElementById("parcelscollected").innerHTML= parcelnumber;
	};

	if (currentx + 50 >= 170 && currentx <= 190 && currenty + 50 >= 400 && currenty <= 420 && !parcelsCleared.parcel3) {
	parcelnumber++;
	ctx.clearRect(170, 400, 20, 20);
	parcelsCleared.parcel3 = true;
		document.getElementById("parcelscollected").innerHTML= parcelnumber;
	};

	if (currentx + 50 >= 465 && currentx <= 485 && currenty + 50 >= 205 && currenty <= 225 && !parcelsCleared.parcel4) {
	parcelnumber++;
	ctx.clearRect(465 , 205, 20, 20);
	parcelsCleared.parcel4 = true;
		document.getElementById("parcelscollected").innerHTML= parcelnumber;
	};

	if (currentx + 50 >= 775 && currentx <= 795 && currenty + 50 >= 135 && currenty <= 155 && !parcelsCleared.parcel5) {
	parcelnumber++;
	ctx.clearRect(775, 135, 20, 20);
	parcelsCleared.parcel5 = true;
		document.getElementById("parcelscollected").innerHTML= parcelnumber;
	};
	

	if (currentx + 50 >= 920 && currentx <= 940 && currenty + 50 >= 60 && currenty <= 80 && !parcelsCleared.parcel6) {
	parcelnumber++;
	ctx.clearRect(920, 60, 20, 20);
	parcelsCleared.parcel6 = true;
		document.getElementById("parcelscollected").innerHTML= parcelnumber;
	};

	if (currentx + 50 >= 465 && currentx <= 485 && currenty + 50 >= 5 && currenty <= 25 && !parcelsCleared.parcel7) {
	parcelnumber++;
	ctx.clearRect(465, 5, 20, 20);
	parcelsCleared.parcel7 = true;
		document.getElementById("parcelscollected").innerHTML= parcelnumber;
	};

	if (currentx + 50 >= 465 && currentx <= 485 && currenty + 50 >= 355 && currenty <= 375 && !parcelsCleared.parcel8) {
	parcelnumber++;
	ctx.clearRect(465, 355, 20, 20);
	parcelsCleared.parcel8 = true;
		document.getElementById("parcelscollected").innerHTML= parcelnumber;
	};

	if (currentx + 50 >= 550 && currentx <= 570 && currenty + 50 >= 55 && currenty <= 75 && !parcelsCleared.parcel9) {
	parcelnumber++;
	ctx.clearRect(550, 55, 20, 20);
	parcelsCleared.parcel9 = true;
		document.getElementById("parcelscollected").innerHTML= parcelnumber;
	};

	if (currentx + 50 >= 695 && currentx <= 715 && currenty + 50 >= 325 && currenty <= 345 && !parcelsCleared.parcel10) {
	parcelnumber++;
	ctx.clearRect(695, 325, 20, 20);
	parcelsCleared.parcel10 = true;
	document.getElementById("parcelscollected").innerHTML= parcelnumber;
	};





});




window.addEventListener("keydown", function(event) {
  // Check if the key pressed is an arrow key
  if (event.code.startsWith("Arrow")) {
    // Prevent the default behavior of the arrow keys
    event.preventDefault();
  }
});

window.addEventListener("keydown", function(event) {
			if (event.key === "h") {
				var audio = new Audio("beepbeep.mp3");
				audio.play();
			}
		});
	

	// ctx.strokeStyle = "black";
		// ctx.lineWidth = 5;
		// ctx.strokeRect(220, 50, 85, 110); 

 //  THE HOUSE BOXES
	// ctx.strokeStyle = "black";
		// ctx.lineWidth = 5;
		// ctx.strokeRect(255, 345, 143, 90); 
		
		// ctx.strokeStyle = "black";
		// ctx.lineWidth = 5;
		// ctx.strokeRect(842, 10, 93, 43); 
		
	// ctx.strokeStyle = "black";
		// ctx.lineWidth = 5;
		// ctx.strokeRect(750, 273, 88, 128); 
		
		
// Get a reference to the pop-up container and the start button
		const popupContainer = document.querySelector('#popup-container');
		var startButton = document.querySelector('#start-button');

		// Show the pop-up when the page loads
		window.addEventListener('load', () => {
			popupContainer.style.display = 'block';
		});

		// Hide the pop-up when the start button is clicked
		startButton.addEventListener('click', () => {
			popupContainer.style.display = 'none';
		});
		
const timer = document.querySelector('#timeremaining');

		// Set the initial time to 30 seconds
		let timeLeft = 30;
		
function starttimer(){

		// Update the timer every second
		const countdown = setInterval(() => {
			// Decrement the time left by 1 second
			timeLeft--;

			// Update the timer element with the new time
			timer.textContent = timeLeft;

			// Check if the time has run out
			if (timeLeft === 0) {
				
				clearInterval(countdown);
				popupContainer.style.display='block';
				popupContainer.innerHTML='<div id="popup-box"><h1>The Parcel Game</h1><p>You picked up '+parcelnumber+' parcels!</p><button onclick="location.reload()" id="retry">Try again!</button>'
					
				
			}
		}, 1000);
		

}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // code for mobile devices
  document.getElementById("popup-container").innerHTML='<div id="popup-box"><h1>The Parcel Game</h1><p>This device isnt supported, please run this on desktop</p><button id="start-button">Okay</button>';
   startButton = document.querySelector('#start-button');
   // Hide the pop-up when the start button is clicked
		startButton.addEventListener('click', () => {
			popupContainer.style.display = 'none';
		});
  document.getElementById("cargame").innerHTML="";
} ;
//parcel1
ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.fillRect(170, 150, 20, 20); 

//parcel2
ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.fillRect(325, 290, 20, 20); 

//parcel3
ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.fillRect(170, 400, 20, 20); 

//parcel4
ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.fillRect(465 , 205, 20, 20); 

//parcel5
ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.fillRect(775, 135, 20, 20); 

//parcel6
ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.fillRect(920, 60, 20, 20); 

//parcel7
ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.fillRect(465, 5, 20, 20); 

//parcel8
ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.fillRect(465, 355, 20, 20); 

//parcel9
ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.fillRect(550, 55, 20, 20); 

//parcel10
ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.fillRect(695, 325, 20, 20); 
