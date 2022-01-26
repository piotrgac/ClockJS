let [hours, minutes, seconds, zero1, zero2, zero3, working] = [0,0,0,0,0,0,false];

document.getElementById("clock").innerHTML = '00:00:00';

function startTimer() {
    seconds++;

    if( seconds/60 === 1){
        seconds = 0;
        minutes++;
    }
    if (minutes/60 === 1){
        minutes = 0;
        hours++;
    }

    if(hours < 10) zero1 = "0"; else zero1 = "";
    if(minutes < 10) zero2 = "0"; else zero2 = "";
    if(seconds < 10) zero3 = "0"; else zero3 = "";

    document.getElementById("clock").innerHTML = zero1 + hours + ":" + zero2 + minutes + ":" + zero3 + seconds;
}

function startTimer() {
    if (working == false){
    interval = window.setInterval(startTimer,1000);
    }
    working = true
}

function stopTimer() {
    window.clearInterval(interval);
    working = false;
}

function restartTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("clock").innerHTML = '00:00:00';
}