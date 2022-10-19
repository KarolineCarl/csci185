const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe"
];


// use a while loop to output a message for each
// item in the array:
const outputElement = document.querySelector('#output');
let i = 0;
while(i < names.length) {
outputElement.innerHTML += `<p>Welcome, ${names[i]}!</p>`;
++i;
}
//outputElement.innerHTML += `<p>Welcome, ${names[0]}!</p>`;
//outputElement.innerHTML += `<p>Welcome, ${names[1]}!</p>`;
//outputElement.innerHTML += `<p>Welcome, ${names[2]}!</p>`;
//outputElement.innerHTML += `<p>Welcome, ${names[3]}!</p>`;