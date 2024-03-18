const calculator = document.getElementById('calculator');
let display = document.getElementById("display");
// calculator.innerHTML = 'calculator'
display.innerHTML = 5;
// screen

//button 1-9
for(let i = 1; i < 10; i++){
    let button = document.createElement("button");
   button.innerHTML = i;
   button.classList.add("calc-button");

   button.addEventListener("click",function(){
    display.innerHTML += i;
   })
   
   calculator.appendChild(button);
   
}
//operators
// = button


// functionality
let result = 0;

console.log(result);