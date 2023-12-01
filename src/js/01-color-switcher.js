const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

let intervalId;

 const onClick = () => {
    intervalId = setInterval(() => {
        const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`
        body.style.backgroundColor = color;
        buttonStart.setAttribute('disabled', '');
        buttonStop.removeAttribute('disabled', '');
    }, 1000);
 };
 
 const offClick = () => {
    clearInterval(intervalId);
    buttonStart.removeAttribute('disabled', '');
    buttonStop.setAttribute('disabled', '');
};
 
buttonStart.addEventListener("click", onClick);
buttonStop.addEventListener("click", offClick);


 
  
 
 