var questionnumber=document.getElementById("Questionoutof");

questionnumber.innerHTML="Question 1 out of 10";;
var currentquestionslot =document.getElementById("currquest");
currentquestionslot.innerHTML='<h4>You are decorating your room, which colour do you choose?</h4><br>\
<input type="radio" name="question1" value=1 required="required" ><label>Green</label><br>\
<input type="radio" name="question1" value="2" required="required" ><label>Beige</label><br>\
<input type="radio" name="question1" value="3" required="required" ><label>Bright Blue</label><br>\
<input type="radio" name="question1" value="4" required="required" ><label>Lilac</label></input><br>\
<input type="submit" onclick="nextslide()"id="next">';
document.getElementById("next").value="Next";
var currentquestion =1;
var dogresult;
var selectedValue = 0;
function nextslide(){
	 var requiredd=false;
     var radioButtons = document.getElementsByName("question" + currentquestion);
	 
     for (var i = 0; i < radioButtons.length; i++) {
		 if (radioButtons[i].checked) {
		   selectedValue = selectedValue+ Number(radioButtons[i].value);
		   console.log(selectedValue);
		   currentquestion= currentquestion+1;
	       console.log(currentquestion);
	       setslide(currentquestion);
		   requiredd= true;
		   
		   break;
		 }
    };
	if (requiredd==false){
		alert("Please select a value");
		
	};
	
	
};

function setslide(currentquestion){
	if (currentquestion== 2){
		currentquestionslot.innerHTML=('<h4>What would be your dream job?</h4><br><input type="radio" name="question2" value=1 required="required"><label>Actor</label><br><input type="radio" name="question2" value="2" required="required"><label>Teacher</label><br><input type="radio" name="question2" value="3" required="required"><label>Fashion Designer</label><br><input type="radio" name="question2" value="4" required="required"><label>Doctor</label></input><br><input type="submit"id="next" onclick="nextslide()"></input>');
		questionnumber.innerHTML="Question 2 out of 10";
		document.getElementById("next").value="Next";
		
	}else if (currentquestion== 3){
		currentquestionslot.innerHTML=('<h4>Your perfect Sunday includes:</h4><br><input type="radio" name="question3" value="1" required="required"><label>Social outing with friends</label><br><input type="radio" name="question3" value="2" required="required"><label>Reading a book</label><br><input type="radio" name="question3" value="3" required="required"><label>Relaxing from a busy Saturday night</label><br><input type="radio" name="question3" value="4" required="required"><label>Outdoor activities</label></input><br><input type="submit"id="next" onclick="nextslide()"></input>');
		questionnumber.innerHTML="Question 3 out of 10";
		document.getElementById("next").value="Next";
	}else if (currentquestion== 4){
		currentquestionslot.innerHTML=('<h4 >Where do you go to get a refreshment?</h4><br><input type="radio" name="question4" value="1" required="required"><label>A trendy bar</label><br><input type="radio" name="question4" value="2" required="required"><label>Coffee shop</label><br><input type="radio" name="question4" value="3" required="required"><label>Make cocktails at home</label><br></input><input type="submit"id="next" onclick="nextslide()"></input>');
		questionnumber.innerHTML="Question 4 out of 10";
		document.getElementById("next").value="Next";
	}else if (currentquestion== 5){
		currentquestionslot.innerHTML=('<h4 >What is your body type?</h4><br><input type="radio" name="question5" value="1" required="required"><label>Mainly muscles</label><br><input type="radio" name="question5" value="2" required="required"><label>Pretty average</label><br><input type="radio" name="question5" value="3" required="required"><label>Small and Slender</label><br></input><input type="submit"id="next" onclick="nextslide()"></input>');
		questionnumber.innerHTML="Question 5 out of 10";
		document.getElementById("next").value="Next";
	}else if (currentquestion== 6){
		currentquestionslot.innerHTML=('<h4>What characteristic in people annoys you the most?</h4><br><input type="radio" name="question6" value="1" required="required"><label>I love everyone</label><br><input type="radio" name="question6" value="2" required="required"><label>Boring</label><br><input type="radio" name="question6" value="3" required="required"><label>Pretentiousness</label><br><input type="radio" name="question6" value="4" required="required"><label>Ignorance</label></input><br><input type="submit"id="next" onclick="nextslide()"></input>');
		questionnumber.innerHTML="Question 6 out of 10";
		document.getElementById("next").value="Next";
	}else if (currentquestion== 7){
		currentquestionslot.innerHTML=('<h4>How would your close friends describe you?</h4><br><input type="radio" name="question7" value="1" required="required"><label>Centre of attention</label><br><input type="radio" name="question7" value="2" required="required"><label>Fearless</label><br><input type="radio" name="question7" value="3" required="required"><label>Intelligent</label><br><input type="radio" name="question7" value="4" required="required"><label>Funny</label></input><br><input type="submit"id="next" onclick="nextslide()"></input>');
		questionnumber.innerHTML="Question 7 out of 10";
		document.getElementById("next").value="Next";
	}else if (currentquestion== 8){
		currentquestionslot.innerHTML=('<h4>Pick your favourite dessert</h4><br><input type="radio" name="question8" value="1" required="required"><label>Ice Cream</label><br><input type="radio" name="question8" value="2" required="required"><label>Carrot Cake</label><br><input type="radio" name="question8" value="3" required="required"><label>Chocolate Cake</label><br><input type="radio" name="question8" value="4" required="required"><label>Tirimasu</label></input><br><input type="submit" id="next"onclick="nextslide()"></input>');
		questionnumber.innerHTML="Question 8 out of 10";
		document.getElementById("next").value="Next";
	}else if (currentquestion== 9){
		currentquestionslot.innerHTML=('<h4>What is your favourite way to exercise?</h4><br><input type="radio" name="question9" value="1" required="required"><label>Anything as long as I am with friends</label><br><input type="radio" name="question9" value="2" required="required"><label>Individual activities</label><br><input type="radio" name="question9" value="3" required="required"><label>Team sports</label></input><br><input type="submit" id="next" onclick="nextslide()"></input>');
		questionnumber.innerHTML="Question 9 out of 10";
		document.getElementById("next").value="Next";
	}else if (currentquestion== 10){
		currentquestionslot.innerHTML=('<h4>What is your favourite type of holiday?</h4><br><input type="radio" name="question10" value="1" required="required"><label>Sightseeing</label><br><input type="radio" name="question10" value="2" required="required"><label>Relaxing on a beach</label><br><input type="radio" name="question10" value="3" required="required"><label>Shopping Trip</label></input><br><input type="submit" id="next" onclick="nextslide()"></input>');
		questionnumber.innerHTML="Question 10 out of 10";
		document.getElementById("next").value="Next";
	}else{
		finalresult();
		currentquestionslot.innerHTML="<center>You are a " + dogresult + "!<br>" +"<br><img src='" + dogpic + "'></center>";;
		questionnumber.innerHTML="Completed";
	};
};

var dogpic;
function finalresult(){
	if (selectedValue<12){
		dogresult="Chihuahua";
		dogpic="chihuahua.jpg";
	}else if(selectedValue<16&& selectedValue>12){
		dogresult="Poodle";
		dogpic="poodle.jfif";
	}else if(selectedValue<20&& selectedValue>16){
		dogresult="Pug";
		dogpic="pug.jpg";
	}else if(selectedValue<24&& selectedValue>20){
		dogresult="Corgi";
		dogpic="corgi.jfif"
	}else if (selectedValue<26&& selectedValue>24){
		dogresult="German Shepherd";
		dogpic="german.jpg"
	}else {
		dogresult="Jack Russell";
		dogpic="jackrussell.png"
		
	};
	
};