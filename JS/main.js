const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Developer',
        img:
        '../images/person-1.jpeg',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima omnis ut voluptatum! Nulla recusandae praesentium expedita quibusdam in beatae quisquam facilis odit autem provident illum dolorem id ab eum quae minima numquam architecto ea a perferendis sint, error temporibus.'
    },
    {
        id: 2,
        name: 'John Wilde',
        job: 'Game Developer',
        img:
        '../images/person-3.jpg',
        text:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio omnis, nihil autem, saepe similique dolores quidem ea aperiam sit, placeat ullam iste. Doloremque quis, quibusdam est temporibus labore corrupti id aspernatur hic animi? Doloribus, earum!'
    },
    {
        id: 3,
        name: 'Green Copperfield',
        job: 'Content writer',
        img:
        '../images/person-4.jpg',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut quis hic. Iste laudantium facere fugit est! Quasi totam minima perspiciatis repudiandae, esse repellendus voluptatem.'
    },
    {
        id: 4,
        name: 'Julia Jones',
        job: 'Travel Vlogger',
        img:
        '../images/person-2.jpeg',
        text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur assumenda rem porro iste quaerat blanditiis nam? Consectetur quis molestias repellendus nesciunt. Ut omnis itaque impedit exercitationem soluta perferendis suscipit saepe.'
    },
];

// Selecting name, image, job and information of reviewer 
const image = document.getElementById('person-image');
const personName = document.querySelector('.author');
const occupation = document.getElementById('occupation');
const info = document.getElementById('person-info');

// Selecting the buttons

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const surpriseBtn = document.querySelector('.surprise')

// Initial init
let currentItem = 0;

function showPerson(person) {
    image.src = reviews[person].img;
    personName.textContent = reviews[person].name;
    occupation.textContent = reviews[person].occupation;
    info.textContent = reviews[person].text;
}

window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
})

// Show the next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem = 0;
    }
    showPerson(currentItem);
})

// Show previous person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// Show random: Surprise
surpriseBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * 100) % 4;
    showPerson(currentItem);
})