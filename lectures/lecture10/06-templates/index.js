//The data:
const firstName = "Jane";
const pic = "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png"; 
const score = 300;

console.log(firstName);
console.log(pic);
console.log(score);

document.querySelector('main').innerHTML = `
    <section class="card">
        <img src="${pic}" />
        <p>Welcome, ${firstName}. Your current high score is ${score}.</p>
    </section>
`;

// const getBackgroundColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }
//
// document.querySelector('main').innerHTML = `
//     <section class="card" style="background-color: ${getBackgroundColor()}" >
//         <img src="${pic}" />
//         <p>Welcome, ${firstName}. Your current high score is ${score}.</p>
//     </section>
// `;