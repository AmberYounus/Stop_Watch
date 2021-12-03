var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >= 120){
        sec++
        secHeading.innerHTML =sec;
        msec =0 
    }else if(sec >=60){
        min++
        minHeading.innerHTML= min;
        sec =0;
    }else if(min >=60){
         hour++;
         hourHeading.innerHTML = hour;
         min=0;
    }
}

function start(){
 interval = setInterval(timer,10)
}
function pause(){
    clearInterval(interval);
}
function reset(){
    min = 0;
    msec = 0;
    sec = 0;
    hour = 0;
    minHeading.innerHTML =min;
    msecHeading.innerHTML =msec;
    hourHeading.innerHTML = hour;
    secHeading.innerHTML = sec;
    pause();
}