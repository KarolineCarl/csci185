const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

const turnOn = (ev) => {
    elem.src = imgOn;
    if (elem.src===imgOff){
        elem.src=imgOn;
    } else {
        elem.src=imgOff;
    }
};

// attach function to image's click event:
document.querySelector("#my_image").onclick = turnOn;


if (timeOfDay >= 12 && timeOfDay < 19) {
    console.log('good afternoon, + name +'!')
} else( timeOfDay >=20 || timeOfDay <=2) {
    console.log('good night, + name +'!')
}
const greet = (name, timeOfDay) => {
    console.log('hi, + name +'!')
}
greet ('sarah', 11)
greet ('walter', 20)
greet ('brenda', 2)