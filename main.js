const images = [
        'img/01.jpg',
        'img/02.jpg',
        'img/03.jpg',
        'img/04.jpg',
];

let slides = '';
let bullets = '';

for(let i=0; i<images.length; i++){
    slides += `<div class="item">
                    <img src="${images[i]}">
                </div>`;

    bullets += `<div class="circle"></div>`;
}


// creo le slide
let itemscontainer = document.querySelector('.items-container');
itemscontainer.innerHTML = slides;


// creo i pallini
let circleContainer = document.querySelector('.circle-container');
circleContainer.innerHTML = bullets;


// inizializzo variabile che mi tenga traccia della slide attiva
let currentSlide = 0;

let items = document.getElementsByClassName('item');
items[currentSlide].classList.add('active');

let circles = document.getElementsByClassName('circle');
circles[currentSlide].classList.add('active');
