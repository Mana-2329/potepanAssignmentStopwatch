$(document).ready(function(){
  let time = document.getElementById("time");
  let startButton = document.getElementById("start");
  let stopButton = document.getElementById("stop");
  let resetButton = document.getElementById("reset");

  let startTime;
  let stopTime = 0;
  let intervalTime;
  let timeAdd = 0;

const updateTimeText = (function(){
    let hour = Math.floor(stopTime / 1000 / 60 / 60);
    let minitue = Math.floor((stopTime / 1000 / 60) % 60);
    let second = Math.floor((stopTime / 1000) % 60 );
    let millisecond = stopTime %  1000;

    hour = ('0' + hour).slice(-2);
    minitue = ('0' + minitue).slice(-2);
    second = ('0' + second).slice(-2);
    millisecond = ('0' + millisecond).slice(-3);

    time.textContent = hour + ':' + minitue + ':' + second + ':' + millisecond;
})

const countUp = (function(){
    intervalTime = setTimeout(function (){
        stopTime = Date.now() - startTime + timeAdd;
        updateTimeText();
        countUp();
    },10);
})

startButton.addEventListener("click", function() {
  startTime = Date.now();
  countUp();
  
 })

stopButton.addEventListener("click", function() {
    clearTimeout(intervalTime);
    timeAdd += Date.now() - startTime;

})

resetButton.addEventListener("click", function() {
    stopTime = 0;
    timeAdd = 0;
    updateTimeText();

})
});


  

