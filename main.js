const images = [
        'img/01.jpg',
        'img/02.jpg',
        'img/03.jpg',
        'img/04.jpg',
        'img/05.jpg',
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


let slides = '';

for(let i=0; i<images.length; i++){
    slides += `<div class="item">
                    <img src="${images[i]}">
                </div>`;
}

// creo le slide
let mostraItem = document.querySelector('.item-container');
mostraItem.innerHTML = slides;
let itemView = document.querySelector('.item-view');
itemView.innerHTML = slides;


// creo i pallini
// let circleContainer = document.querySelector('.circle-container');
// circleContainer.innerHTML = bullets;


// inizializzo variabile che mi tenga traccia della slide attiva
let currentSlide = 0;

let itemsHidden = document.querySelector('.item-container').getElementsByClassName('item');
let prevItems = document.querySelector('.item-view').getElementsByClassName('item')
itemsHidden[0].classList.add('active');
prevItems[0].classList.add('active');

// let circles = document.getElementsByClassName('circle');
// circles[currentSlide].classList.add('active');
