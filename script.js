document.addEventListener("DOMContentLoaded", () =>{

    const guessInput = document.querySelector("input");
    const checkButton = document.querySelector("button");
    const message = document.querySelector("#message");

    let random = Math.floor(Math.random() * 100) // random number between 1 and 100;
    let attempts = 0;

    checkButton.addEventListener("click", () =>{
        let guess = parseInt(guessInput.value);
        attempts++;
        if(isNaN(guess) || guess < 1 || guess > 100){
            message.textContent = "please enter a number between 1 and 100";
        }
        else if(guess  === random){
            message.textContent = `congratulations, you can find the ${random} number in ${attempts} attempts`;
        }
        else{
            guess < random ? message.textContent = "try a higher number" : message.textContent = "try a lower number";
        }
        guessInput.value = "";
    })
})
