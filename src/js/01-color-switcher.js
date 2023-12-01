const buttonStart = document.querySelector("[data-start]");
const buttonStop = document.querySelector("[data-stop]")
const body = document.querySelector("body");
 
 
// const onClick = () => {
//     intervalId = setInterval(() => {
//         const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`
//         body.style.backgroundColor = color;
//         buttonStart.setAttribute('disabled', '');
//         buttonStop.removeAttribute('disabled', '');
//     }, 1000);
          
    
// };
 
 

const offClick = () => {
    clearInterval(intervalId);
    buttonStart.removeAttribute('disabled', '');
    buttonStop.setAttribute('disabled', '');
};

buttonStart.addEventListener("click", () => {
    intervalId = setInterval(() => {
        const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`
        body.style.backgroundColor = color;
        buttonStart.setAttribute('disabled', '');
        buttonStop.removeAttribute('disabled', '');
    }, 1000);
});
buttonStop.addEventListener("click", offClick);


 
  
 
 