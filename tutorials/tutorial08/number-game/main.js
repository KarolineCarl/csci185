// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let counter = 0;

function check() { 
    let userGuess = document.querySelector('#guess').value;
    console.log(userGuess);
    userGuess = Number(userGuess);

    if(userGuess === secret){
        console.log('you win!');
        document.querySelector('#message').innerHTML = 'you win!'
        document.querySelector('#celebrate').className = '';
    } else if (userGuess < secret){
        console.log('to low!');
        document.querySelector('#message').innerHTML = 'to low!'
    } else{
        console.log("to high!")
        document.querySelector('#message').innerHTML = 'to high!'
    }
    counter ++;
    document.querySelector('#num-guesses').innerHTML = 'you have guessed ' + counter + ' times';

}