var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on start/reset
document.getElementById("startreset").onclick=
function(){
    //if we are playing
   if(playing==true){
       location.reload()//reloading our page
   }else{//if we are not playing
    //change mode to playing
    playing=true;
       score=  0;
       document.getElementById('scorevalue').innerHTML=
       score;
       //show countdown box
       showId('timeremaining')
       timeremaining=60
       document.getElementById('timeremainingvalue').innerHTML=timeremaining;
       //hide game over box
       hideId('gameOver')
       // Change button to reset
       document.getElementById("startreset").innerHTML="Reset Game"
       //start countdown
       startCountDown();

       //generate a new question and answer
       generateQA();
   }
}
for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=
function(){
    if(playing==true){
       if(this.innerHTML==correctAnswer){
           score++;
      document.getElementById('scorevalue').innerHTML=score

      //hide wrong box and show correct box
      hideId('wrong')
      showId('correct')
      setTimeout(function(){
          hideId('correct')
      },1000)
     generateQA();
       }else{
        hideId('correct')
        showId('wrong')
        setTimeout(function(){
            hideId('wrong')
        },1000)
     }
    }
}
}
function startCountDown(){
action = setInterval(function(){
    timeremaining-=1;
    document.getElementById('timeremainingvalue').innerHTML=
    timeremaining
    if(timeremaining==0){
        //Game Over
       stopCountDown();
       showId('gameOver')
       document.getElementById('gameOver').innerHTML="<p>Game Over</p><p>Your Score is"+
       score+"</p>"
       hideId('timeremaining')
       hideId('correct')
       hideId('wrong')
       playing=false;
       document.getElementById('startreset').innerHTML="Start Game"
    }
},1000)
}
function stopCountDown(){
    clearInterval(action);
}
function hideId(Id){
    document.getElementById(Id).style.display="none"
}
function showId(Id){
    document.getElementById(Id).style.display="block"
}
function generateQA(){
var x=1+Math.round(9*Math.random())
var y =1+Math.round(9*Math.random())
correctAnswer=x*y;

document.getElementById('question').innerHTML=
x+ "*" + y;
var correctPosition=1+Math.round(3*Math.random());
document.getElementById("box"+correctPosition).innerHTML=correctAnswer//fill one box with correct answer 

//fill other boxes with wrong answer
var answers=[correctAnswer]

for(i=1;i<5;i++){
    if(i!=correctPosition){
      var wrongAnswer;
     do{
        wrongAnswer=(1+Math.round(9*Math.random()))*
        (1+Math.round(9*Math.random()))
      } while(answers.indexOf(wrongAnswer)>-1)
      document.getElementById("box"+i).innerHTML=wrongAnswer
      answers.push(wrongAnswer)
    }
}
}
