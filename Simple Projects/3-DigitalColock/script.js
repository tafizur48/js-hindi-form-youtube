const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')
setInterval(function(){ // setinterval means => kitna time ke bath isko continously runn kor sake->1000 =>1 milisecond
let date = new Date();
//console.log(date.toLocaleString());
//clock.innerHTML = date.toLocaleTimeString();
//clock.innerHTML = date.toLocaleDateString();
// clock.innerHTML = date.getMilliseconds()

}, 1000)



