//The data:
const person = { 
    name: "Jane", 
    pic: "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png", 
    score: 300 
};

document.querySelector('main').innerHTML += "<img src='" + person.pic + "'>";
document.querySelector('main').innerHTML += person.name + "'s high score is: " + person.score + "<br>";

