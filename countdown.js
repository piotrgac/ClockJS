var [hour,minute,second,zero1,zero2,zero3,start] = [0,0,0,0,0,0,false];

document.getElementById('clock').innerHTML = "00:00:00";

document.querySelector('#times').addEventListener('click', function(){

    if (document.querySelector('#times').value === "5sec"){
        second = 6;
        minute = 0;
        hour = 0;
    }
    else if (document.querySelector('#times').value === "10sec"){
        second = 11;
        minute = 0;
        hour = 0;
    }
    else if (document.querySelector('#times').value === "15sec"){
        second = 16;
        minute = 0;
        hour = 0;
    }
    else if (document.querySelector('#times').value === "30sec"){
        second = 31;
        minute = 0;
        hour = 0;
    }
    else if (document.querySelector('#times').value === "45sec"){
        second = 46;
        minute = 0;
        hour = 0;
    }
    else if (document.querySelector('#times').value === "1min"){
        second = 1;
        minute = 1;
        hour = 0;
    }
    else if (document.querySelector('#times').value === "5min"){
        second = 1;
        minute = 5;
        hour = 0;
    }
    else if (document.querySelector('#times').value === "10min"){
        second = 1;
        minute = 10;
        hour = 0;
    }
    else if (document.querySelector('#times').value === "15min"){
        second = 1;
        minute = 15;
        hour = 0;
    }
    else if (document.querySelector('#times').value === "30min"){
        second = 1;
        minute = 30;
        hour = 0;
    }
    else if (document.querySelector('#times').value === "1hr"){
        second = 1;
        minute = 0;
        hour = 1;
    }
    else if (document.querySelector('#times').value === "1,5 hr"){
        second = 1;
        minute = 30;
        hour = 1;
    }

    showCountdown();
    countdown();
});

function countdown() {
    if(start == false){
        interval = setInterval(countdown, 1000);
        start = true;
    }

    second--;

    if(second < 0){
        if (minute > 0){
        second = 59;
        minute--;
        }
        else if (minute == 0){
            hour--;
            minute = 59;
            second = 59;
        }
    }

    showCountdown();
    stopCountdown();
}

function showCountdown() {
    if(hour < 10) zero1 = "0"; else zero1 = "";
    if(minute < 10) zero2 = "0"; else zero2 = "";
    if(second < 10) zero3 = "0"; else zero3 = "";
    document.getElementById('clock').innerHTML = zero1 + hour + ":" + zero2 + minute + ":" + zero3 + second;
}

function stopCountdown() {
    if (second == 0 & minute == 0 & hour == 0){
        document.getElementById('clock').innerHTML = "ALARM";
        clearInterval(interval);
    }
}