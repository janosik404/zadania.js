const text = document.querySelector('#maly-tekst');
const przycisk = document.querySelector('#btn-powieksz');

przycisk.addEventListener('click', function(){
    text.style.fontSize = "40px";
})