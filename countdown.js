const days1=document.getElementById('days');
const hour1=document.getElementById('hours');
const minute1=document.getElementById('minutes');
const second1=document.getElementById('seconds');

const birthday= "10 Dec 2022";

function countdown(){

    const birthday1= new Date(birthday);
const today= new Date();

const difference=(birthday1 - today);


totalseconds=difference/1000;
// console.log(totalseconds);

const days= Math.floor(totalseconds/3600/24);
const hours=Math.floor(totalseconds/3600)%24;
const minutes=Math.floor(totalseconds/3600/60)%60;
const seconds=Math.floor(totalseconds)%60;

days1.innerText=days;
hour1.innerText=hours;
minute1.innerText=minutes;
second1.innerText=seconds;
 
    
}
countdown();
setInterval(countdown,1000); 
