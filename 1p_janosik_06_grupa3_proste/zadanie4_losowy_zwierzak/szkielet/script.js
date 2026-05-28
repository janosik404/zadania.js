const zwierzeta = ["Pies", "Kot", "Ptak"];
const przycisk = document.querySelector('#btn-losuj');
const zwierze = document.querySelector('#zwierzak');;

przycisk.addEventListener('click', function(){
    let los = Math.floor(Math.random() * zwierzeta.length);
    zwierze.textContent = zwierzeta[los];
})