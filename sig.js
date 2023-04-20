const sigages = document.querySelector('.sigages');

let transformY = 0;

function updateSlider(newTransform) {
    transformY += newTransform;
    sigages.style.transform = `translate(0px,${transformY}px)`;
    if(newTransform > (400)) return
    if(newTransform < (-1200)) return
}

const prevArrow = document.querySelector('.arrow');
const nextArrow = document.querySelector('.arrow2');
prevArrow.addEventListener('click', () => updateSlider(400))
nextArrow.addEventListener('click', () => updateSlider(-400))



    





