monthLength = [
    28, //enero
    56, //febrero
    28, //marzo
    28, //abril
    28, //mayo
    28, //junio
    28, //julio
    28, //agosto
    28, //septiembre
    28, //octubre
    28, //noviembre
    28, //diciembre
    1   //???
                ];

let month4YearExtra = [
    0, //enero
    0, //febrero
    0, //marzo
    0, //abril
    0, //mayo
    0, //junio
    0, //julio
    0, //agosto
    0, //septiembre
    0, //octubre
    0, //noviembre
    0, //diciembre
    1  //???
                ];

let monthName = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
    "???"
                ];

const silksongReleaseDate = new Date("2025-9-4");

let timePassed; //seconds

let days;
let seconds;

let format = 0;
function setDate(){
    let d = days + 1;
    let m = 1;
    let y = 1;

    while(d > monthLength[m-1] && y % 4 != 0 || d > monthLength[m-1] + month4YearExtra[m-1] && y % 4 == 0){
        if(y % 4)
            d -= monthLength[m-1];
        else
            d -= monthLength[m-1] + month4YearExtra[m-1];
        m++;

        if(m > 13){
            m = 1;
            y++;
        }
    }

    if (format == 0)
        date = d + " de " + monthName[m-1] + " de " + y + " DS";
    else if(format == 1)
        date = d + " del " + m + " de " + y + " DS";
    else
        date = d + " / " + m + " / " + y;

    document.getElementById("date").textContent = date;
}

setDate();

function setTime(){
    s = seconds;
    min = 0;
    h = 0;

    while(s > 59){
    s -= 60;
    min++;

    if(min > 59){
        min = 0;
        h++;
    }
}

    sClock = String(s).padStart(2, "0")
    minClock = String(min).padStart(2, "0")
    hClock = String(h).padStart(2, "0")
    document.getElementById("time").textContent = hClock + ":" + minClock + ":" + sClock
}

const dateText = document.getElementById("date");
dateText.addEventListener("click", () => {
    format = (format + 1) % 3;
})

function update(){
    timePassed = Math.floor((Date.now() - silksongReleaseDate.getTime()) / 1000);

    days = Math.floor(timePassed / 86400);
    seconds = Math.floor(timePassed - days * 86400);

    setDate();
    setTime();

    requestAnimationFrame(update);
}

update()