const photos = [
    { image_url: 'images/poppies.jpg', is_favorite: true },
    { image_url: 'images/dogwoods.jpg', is_favorite: true },
    { image_url: 'images/blossom.jpg', is_favorite: false },
    { image_url: 'images/field3.jpg', is_favorite: false },
    { image_url: 'images/field4.jpg', is_favorite: false },
    { image_url: 'images/branch.jpg', is_favorite: true },
    { image_url: 'images/red.jpg', is_favorite: true },
    { image_url: 'images/purple2.jpg', is_favorite: false },
    { image_url: 'images/field1.jpg', is_favorite: false },
    { image_url: 'images/purple.jpg', is_favorite: true },
    { image_url: 'images/jar.jpg', is_favorite: true },
    { image_url: 'images/green.jpg', is_favorite: false },
    { image_url: 'images/green1.jpg', is_favorite: true },
    { image_url: 'images/purple1.jpg', is_favorite: false },
    { image_url: 'images/magnolias.jpg', is_favorite: false },
    { image_url: 'images/daisy1.jpg', is_favorite: true }
];

// write a program, using any kind of loop you want, 
// that draws all of the pictures to the screen 
// where the is_favorite property is set to true. 
// 8 photos should be displayed.

const images = ['images/poppies.jpg', 'images/dogwoods.jpg','images/branch.jpg', 'images/red.jpg','images/purple.jpg', 'images/jar.jpg','images/green1.jpg','images/daisy1.jpg'];
for (let i = 0; i < images.length; i++) {
    const element = '<img src="' + images[i] + '">'
    document.querySelector('.images').innerHTML += element; 
}




//for (let i = 0; i < photos.length; i++) {
 //   if(photos[i].is_favorite == true) {
 //       document.querySelector('#images').innerHTML += '<img src="' + photos[i] + '">';
 //   }
//}


