// Tutaj wpisz swój kod
const btn = document.querySelector("#changeBtn");
let text = document.querySelector("#text");

btn.addEventListener("click", function (){
    text = "Tekst zostal zmieniony!";
    document.body.style.backgroundColor="lightblue";
})