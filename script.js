var sec = 0;
var min = 0;
var hour = 0;

const counter = document.querySelector('.counter');
const countHour = counter.querySelector('.hour');
const countMin = counter.querySelector('.min');
const countSec = counter.querySelector('.sec');
const lap = document.querySelector('.lap');
const laps = document.querySelector('.laps');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
var inter;



start.addEventListener('click', function(){
  
  

   var testStatus = start.textContent;
   

   if(testStatus=="Start"){
      startTimer();
      start.textContent="Stop"
   }
   else{
      clearInterval(inter);
      start.textContent="Start"
   }

});




mainProgram = () => {
   sec = sec+1;
      // min = sec/60;
      // hour = min/60;
   
      countSec.innerHTML = `${sec}`
   
     
   
      if(sec==60){
         min= min+1;
         countMin.innerHTML = `${min}:`
      }
      
      if(min==60){
         hour= hour+1;
         countHour.innerHTML = `${hour}:`
      }
   
   
}


startTimer=()=> {
  inter = setInterval(() => {
      
   mainProgram();
   secRepeater();
   minRepeater();
   
   
   
   
   
   
   
   
   
   
   
   
   
   }, 1000);
   
}


secRepeater = () => {
   if(sec==60){
      sec=1;
   }
}
minRepeater = () => {
   if(min==60){
      min=0;
   }
}



lap.addEventListener('click', function(){

   const lapSec = document.createElement('p');
   lapSec.id = "lapSec";
   const lapMin = document.createElement('p');
   lapMin.id = "lapMin";
   const lapHour = document.createElement('p');
   lapHour.id = "lapHour";

   const div = document.createElement('div');
   div.id = "lap_div"

   laps.appendChild(div);





   div.appendChild(lapHour);
   lapHour.textContent= `${hour}:`;


   
   div.appendChild(lapMin);
   lapMin.textContent= `${min}:`;



   div.appendChild(lapSec);
   lapSec.textContent= `${sec}`;


  
})

reset.addEventListener('click', function(){
   sec = 0;
   min = 0;
   hour = 0;
   countSec.innerHTML = `${sec}`
   countMin.innerHTML = `${min}:`
   countHour.innerHTML = `${hour}:`
})
