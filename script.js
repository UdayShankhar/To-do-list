var today = new Date();
var d = today.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var result = dayList[d];
document.getElementById("day").innerHTML = `${result}`

function myclock(){
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let period = "AM";
  if(hours>12){
    hours=hours-12;
    period = "PM"
}if(hours<10){
    hours = `0${hours}`
}if(minutes<10){
    minutes = `0${minutes}`
}if(seconds<10){
    seconds = `0${seconds}`
}
document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds} ${period}`;
setTimeout(myclock,1000);
}
myclock();


document.querySelector('#push').onclick = function () {
    if(document.querySelector('#newtask input').
    value.length==0){
        alert("Please Enter a task")
    }
    else{
     document.querySelector('#tasks').innerHTML += 
     `
     <div class = "task">
     <span id = "taskname">
     ${document.querySelector('#newtask input').value}
     </span>
     <button class = "delete"> 
     REMOVE
     </button>
     </div>
     `;
   
     var current_tasks = document.querySelectorAll('.delete');
     for(var i=0;i<=current_tasks.length;i++){
     current_tasks[i].onclick = function(){
         this.parentNode.remove();
     }
     }
}
}