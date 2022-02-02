// creo un array contenente le img titoli e testo
const items = [

    {
        'photo' : 'img/01.jpg',
        'title' : 'Svezia',
        'text' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
    },
    {
        photo: 'img/02.jpg',
        title: "Svizzera",
        text: "Lorem ipsum."
    },
    {
        photo: 'img/03.jpg',
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        photo: 'img/04.jpg',
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
    },
    {
        photo: 'img/05.jpg',
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
    }

];


// inizializzo variabili
const itemsRef = document.getElementsByClassName('items')[0];
const thumbsRef = document.getElementsByClassName('thumbs')[0];
let item = '';
let thumb = '';
let active = 1;


// creo un ciclo for che mi permetta di creare gli elementi nel dom 
for(let i=0; i<items.length; i++){
    item += `
            <div class = "item">
                <img src="${items[i].photo}" alt="">
                <div class ="text">
                    <h3>${items[i].title}</h3>
                    <p>${items[i].text}</p>
                </div>
            </div>`
    thumb += `
        <div class = "thumb">
            <img src ="${items[i].photo}" alt="">
        </div>`
}

// aggiungo alla classe item la classe active per renderla visibile
itemsRef.innerHTML = item;
document.getElementsByClassName('item')[active].classList.add('active');

// aggiungo alla classe thumb la classe active per renderla visibile
thumbsRef.innerHTML += thumb;
document.getElementsByClassName('thumb')[active].classList.add('active');

// creo gli eventi al click delle frecce
const prev = document.querySelector('.prev');
prev.addEventListener('click', prevClick);

const next = document.querySelector('.next');
next.addEventListener('click', nextClick);






// creo una funzione al click della freccia 
function prevClick(){
    if(active == 0){
        active = items.length - 1;
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');
        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if (active < items.length){
        --active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');
        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }
}


// creo una funzione al click della freccia 
function nextClick(){
    if(active < items.length - 1) {
        ++active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');
        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if (active == items.length - 1){
        active = 0;
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');
        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }

}