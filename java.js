var cards = document.querySelectorAll(".container");
var currentIndex = 0;

function cardsChange(){
    cards.forEach((card, index)=> {
        card.classList.toggle('active', index === currentIndex );
    })
}
function next(){
    currentIndex = (currentIndex + 1) % cards.length;
    cardsChange()
}
function prev(){
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    cardsChange()
}