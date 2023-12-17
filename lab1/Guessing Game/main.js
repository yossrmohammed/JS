var num=7;
var exit=false
while(!exit){
var guess= prompt("Guess the secret number");
guess=Number(guess);
if(guess===num){
    alert(`You guessed it! The secret number is ${num}`);
    exit=true

}
else if (guess>num){
    alert(" too High. Try again.")

}
else if (guess<num){
    alert(" Too low. Try again.")
}
}