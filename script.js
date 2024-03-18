const calculator = document.getElementById('calculator');
let display = document.getElementById("display");

// screen
display.innerHTML = 0;

//button 1-9
for(let i = 9; i > 0; i--) {
    let button = document.createElement("button");
   button.innerHTML = i;
   button.classList.add("calc-button");

   button.addEventListener("click",function(){
    display.innerHTML += i;
   })
   
   calculator.appendChild(button);  
}

//operators
let operators = ["+","-","x","/","."];

operators.forEach((operator) => {
    let button = document.createElement("button");
button.innerHTML = operator;
button.classList.add("calc-button");

button.addEventListener("click", function () {
    display.innerHTML += operator;
});
calculator.appendChild(button);
});

// clearBtn
let clearBtn = document.createElement("button");
clearBtn.innerHTML = "AC";
clearBtn.classList.add("calc-button");

clearBtn.addEventListener("click",function (){
    display.innerHTML = 0;
});
calculator.appendChild(clearBtn);

// = button


// functionality