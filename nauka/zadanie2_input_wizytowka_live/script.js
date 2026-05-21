// Tutaj wpisz kod
let imie = document.querySelector("#nameInput");
let wiz = document.querySelector("#namePreview");

imie.addEventListener("input", (e) =>{
    wiz = (e.target.value);
    // e.target.value;
})