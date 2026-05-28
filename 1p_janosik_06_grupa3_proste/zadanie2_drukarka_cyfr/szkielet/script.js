const przycisk = document.querySelector('#btn-drukuj');
const linijki = document.querySelectorAll('.linijka');

przycisk.addEventListener('click', function(){
    for(let i = 0; i < linijki.length; i++){
        linijki[i].textContent = "Wpisano numer: " + i;
    }
});