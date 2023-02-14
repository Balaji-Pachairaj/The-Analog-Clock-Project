const hourHandEl = document.getElementById("hourHand");
const minuteHandEl = document.getElementById("minuteHand");
const secondHandEl = document.getElementById("secondHand");
const hourDigitalEl = document.getElementById("hourDigit");
const minuteDigitalEl = document.getElementById("minuteDigit");
const secondDigitalEl = document.getElementById("secondDigit");
const tl = "translate(-50%,-50%)";


function getTime(a){
    let current = new Date ;
    if (a==1) return current.getSeconds();
    else if(a==2) return current.getMinutes();
    else if(a==3) return current.getHours();
}
function secondsHand(){
    let second = getTime(1);
    let secondDegree = (6* second); //for each second moves 6 degree
    secondHandEl.style.transform = `${tl} rotate(${secondDegree}deg)`;
    minutesHand(second)
    setTimeout(secondsHand ,1000);
}
function minutesHand(second){
    const minute = getTime(2)  
    let minuteDegree = (6* minute) + (second * 0.1);//for each minute minute moves 6 degree add minute hand moves 0.1 degree for each second
    minuteHandEl.style.transform = `${tl} rotate(${minuteDegree}deg)`;
    hoursHand(minute)
}
function hoursHand(minute){
    let hour = getTime(3);
    if (hour > 12 ) hour = hour - 12 ; 
    let hourDegree = (30 * hour) + (minute * 0.5);//for each hour hour moves 30 degree add hour hand moves 0.5 degree  for minute.
    hourHandEl.style.transform = `${tl} rotate(${hourDegree}deg)`;
}
secondsHand(); 
DigitalTime()
//minutesHand();
//hoursHand()

function DigitalTime(){
    let second = getTime(1)
    let minute = getTime(2)
    let hour = getTime(3)
    if (second < 10) second = "0" + second;
    if (minute < 10) minute = "0" + minute;
    if (hour < 10) hour = "0" + hour;
    secondDigitalEl.innerText = second;

    hourDigitalEl.innerText = hour;
    minuteDigitalEl.innerText  = minute;
    setTimeout(DigitalTime,1000)
}

