
var array = [["ISRO was established in which year?","15 August 1949","15 August 1969","15 August 1972","None of these",2],
	    ["What is the full form of ISRO?","Indian Scholar Research Org.","Indian Space Research Org.","Indian Station Research Org.","None of these",2],
        ["Who is the first chairman of ISRO?","Mylswamy Annadurai","B.N. Suresh","Vikram Sarabhai","Kailasavadivoo Sivan",4],
        ["Where is the headquarters of ISRO?","Chennai","Mumbai","Bengaluru","None of these",3],
        ["How many satellites are launched by ISRO?","112","101","104","110",3],
        ["Which was the first satellite launched by ISRO?","Kalpana-1","Bhaskara","Aryabhata","None of these",1],
        ["What is the name of first satellite built by India?","Bhaskara","Aryabhata","Sputnik","Apollo",2],
        ["ISRO had launch India’s second mission to moon called ________?","Chandrayan-1","Chandrayan-2","Chandrayan","Mission Mangal",2],
        ["What is full form of GSLV?","Geosynchronous Satellite Launch Vehicle","Geosynchronous Space Launch Vehicle","Geosynchronous Saturn Launch Vehicle","None of these",1],
        ["How many stages are there in GSLV?","2","5","3","6",3],
        ["What is meant by PSLV?","Polar Space Launch Vehicle","Polar Satellite Launch Vehicle","Polar small Launch Vehicle","None of these",2],
        ["Which is the latest PSLV launched by India?","PSLV C32","PSLV C37","PSLV C42","None of these",3]]


//suppose 5 questions are to be selected
var output_qns= 5
var Qns_be_used= [];
var correct =0;
var incorrect =0;
var unanswered = output_qns;
var Qno = 0;
var str = "None";
var flag = 1;
var temp="";
var correctButton;
var result;
var time= 0;
var qWentThrough= 0;
var bool= true;
var q_index= 0;
var slideIndex = 0;

//generating the random questions
while (Qns_be_used.length < output_qns){
	var r= Math.floor(Math.random()*array.length);
	if (Qns_be_used.indexOf(r)==-1){
		Qns_be_used.push(r);
	}
}

//update the first question
setTimeout(function(){
	document.getElementById("quest").innerHTML =array[Qns_be_used[q_index]][0];
	document.getElementById("button1").innerHTML =array[Qns_be_used[q_index]][1];
	document.getElementById('button2').innerHTML =array[Qns_be_used[q_index]][2];
	document.getElementById('button3').innerHTML =array[Qns_be_used[q_index]][3];
	document.getElementById('button4').innerHTML =array[Qns_be_used[q_index]][4];
	document.getElementsByClassName("Qn")[0].innerHTML='Qno.' + ++Qno;
	
			    

},0);





// capture the button for checking
function msg(x)

	{
	    btn = document.getElementById(x);
	    str= btn.innerHTML;
	
	}
	
   
// functionality of the next button
function nxt()
	{       Qno++;
		    result= array[Qns_be_used[q_index]][array[Qns_be_used[q_index]][5]];
		    var buttons= document.getElementsByClassName("button");
		    for (var j = 0; j < buttons.length; j++) {
    			if (buttons[j].innerHTML==result){
    				correctButton= buttons[j];
    				break;  
  					}
  				else{

  					correctButton= btn;

  				}
  			}

		    if(str == result)
		    {
				time= 2000;
			    correct++;
			    unanswered--;
			    answerHighlter(btn,correctButton,time);
			    message("Correct","green",time);
			    audio("correct");
			    


		    }
		    else if (str == "None")
		    {	time= 0;

		    }
		    else
		    {	time= 4000;
			    incorrect++;
			    unanswered--;
			    answerHighlter(btn,correctButton,time);
			    message("Incorrect","red",time);
			    audio("incorrect");
			    
			    
		    }

 
		    if (Qno == 5){
		    	setTimeout(function(){
		    		document.getElementById("next").style.display= "none";},time)
		    	
		    }
		    progressBar();
		    if (bool){

		    setTimeout(function(){
				document.getElementById("quest").innerHTML =array[Qns_be_used[++q_index]][0];
			    document.getElementById("button1").innerHTML =array[Qns_be_used[q_index]][1];
			    document.getElementById('button2').innerHTML =array[Qns_be_used[q_index]][2];
			    document.getElementById('button3').innerHTML =array[Qns_be_used[q_index]][3];
			    document.getElementById('button4').innerHTML =array[Qns_be_used[q_index]][4];
			    document.getElementsByClassName("Qn")[0].innerHTML="Qno."+Qno;
			    str = "None";},time);	
		    }
    

    }





// submit button of the quiz
function sub()
    {	

    	bool= false;
    	try {
			nxt();	
    	}
    	catch(error){
    	
    	}
		progressBar(100);
        var disp= document.getElementsByClassName("Sub")[0];
        disp.style.display= "block";
        document.getElementById("correctAnswers").innerHTML= correct;
        document.getElementById("incorrectAnswers").innerHTML= incorrect;
        document.getElementById("Unansweredqns").innerHTML= unanswered;


		    
    }





showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



// correct or incorrect message to be shown
function message(answer, color,time){
	var modal = document.getElementById("modalContent");
	modal.style.backgroundColor= color;
	 
	var modalContent = document.getElementById("Msg");
	modalContent.innerHTML= answer;
	
	modal.style.display = "block";
	setTimeout(function() { 
	    modal.style.display = "";
		modal.style.backgroundColor="";
	}, time)
	

	// When the user clicks anywhere outside of the modal, close it
	window.addEventListener("click", function(event) {
 	if (event.target == modal) {
 		modal.style.backgroundColor= "";
	    modal.style.display = "none";
	  }

	});
	
}


// higlight the correct or incorrect answer
function answerHighlter(selectedButton, correctButton,time){
	if (selectedButton==correctButton){
		selectedButton.style.backgroundColor= "green";
		selectedButton.style.color= "white";
		setTimeout(function(){
			selectedButton.style.backgroundColor= "";
			selectedButton.style.color= "";
		},time);
		
	}

	else {
		selectedButton.style.backgroundColor= "red";
		selectedButton.style.color= "white";
		correctButton.style.backgroundColor= "green";
		correctButton.style.color= "white";
		setTimeout(function(){
			selectedButton.style.backgroundColor= "";
			correctButton.style.backgroundColor= "";
			correctButton.style.color= "";
			selectedButton.style.color= "";
		},time);
	}
}


// dynamic progress bar
function progressBar(arg=0){
	let percent;
	if (arg==100){
		percent=arg.toString();
		}

	else { 
		let fraction= (qWentThrough/Qns_be_used.length)*100;
		percent= fraction.toString();
	}
	var elem= document.getElementsByClassName("progressMade")[0];
	elem.style.width= percent+"%";
	

}

//tried adding sound but a bug found when you click quickly
function audio(option){
	var x;
	if (option=="correct"){
		x= document.getElementById("correctAudio");

	}

	else {
		x = document.getElementById("incorrectAudio");
	}
	x.play();
	setTimeout(function(){
		x.pause();
	}, time);

	
	

}


//logic for score 
// function Score(){
// 	if (correct > 3)
// 		return "excellent";
// 	else if correc


// }


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}