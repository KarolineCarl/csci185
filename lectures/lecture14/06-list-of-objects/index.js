const people = [
    { name: "Jane", pic: "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png", score: 300 },
    { name: "Brenda", pic: "https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png", score: 10} ,
    { name: "Wanda", pic: "https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png", score: 60 },
    { name: "Maria", pic: "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png", score: 80 },
    { name: "Jasper", pic: "https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png", score: 600 },
    { name: "Malik", pic: "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png", score: 40 }
];

// currently, this program adds a single card to the DOM, where the
// image, name, and score are hard-coded.
// 
// Your job: Use a "for...of" loop to render a unique card for each person 
//           in the list above. You will replace the image url, name, and 
//           points with a template variable.

let template = `
    <div class="card">
        <div>
            <img src="http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png">
            <p>Maria scored 80 points</p>
        </div>
    </div>
`;
document.querySelector(".players").innerHTML = template;


