const current = document.querySelector('#current')
const imgs = document.querySelectorAll('.imgs img')
const opacity = 0.4;

//set first image opacity.
imgs[0].style.opacity = opacity
// imgs.forEach(img =>
//     img.addEventListener('click', e => (current.src = e.target.src))
// );

imgs.forEach(img =>
    img.addEventListener('click', imgClick));

function imgClick(e) {
    // reset opacity of all images
    imgs.forEach(img => (img.style.opacity = 1))
    // change current image to source of clicked image.
    current.src = e.target.src

    // add fade in class
    current.classList.add('fade-in');
    // remove fade in class after 0.5 sec
    setTimeout(() => current.classList.remove('fade-in'), 500)

    // change opacity to opacity var
    e.target.style.opacity = opacity
}