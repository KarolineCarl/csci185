const restaurants =  [
    "Suwana's Thai Orchid", 
    "Khao Thai Cuisine", 
    "Little Bee Thai", 
    "PIE.ZAA Pizza", 
    "Fahrenheit Pizza & Brewhouse", 
    "Fresh Wood Fired Pizza West", 
    "Wasabi", 
    "Red Ginger Dimsum And Tapas", 
    "Murasaki Asheville"
];

// while 
const outputElement = document.querySelector('#output');
let i = 0;
while(i < restaurants.length) {
outputElement.innerHTML += `<p> ${restaurants[i]}</p>`;
++i;
}