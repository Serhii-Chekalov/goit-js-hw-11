const btnStart=document.querySelector('button[data-start]');
const btnStop=document.querySelector('button[data-stop]');

let timerId = null;
const start = () => {
    btnStart.disabled=true;
    timerId = setInterval(() => {document.body.style.backgroundColor = getRandomHexColor()}, 1000)
} 

const stop = () => {
    btnStart.disabled=false;
    clearInterval(timerId)
} 

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  btnStart.addEventListener('click', start);
  btnStop.addEventListener('click', stop); 