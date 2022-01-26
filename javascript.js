// Clock
setInterval(Timer, 10);

function Timer() {
    var date = new Date();
    var [hour, minute, second] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var currentTime = ('0' + hour).slice(-2)+':'+('0' + minute).slice(-2)+':'+('0' + second).slice(-2);
    document.getElementById("clock").innerHTML = currentTime;
}

// Date

day();

function day() {
    var date = new Date();
    var [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
    var currentDate = (year + " / " + month + " / " + day);
    document.getElementById("fullDate").innerHTML = currentDate;
}

