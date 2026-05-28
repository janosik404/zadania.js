# Ściągawka: Mikro-Zadania (Podstawy JS)

## 1. Jak korzystać z plików
Każde zadanie znajduje się w swoim folderze. Masz w nim:
- `szkielet/` – tu pracujesz. Zawsze musisz otworzyć plik `index.html` i podpiąć do niego swój nowy plik `script.js` przy użyciu tagu: `<script src="script.js" defer></script>`
- `rozwiazanie/` – tu jest gotowy kod. Zajrzyj tu, jeśli utkniesz.

## 2. Przydatne komendy

### Złapanie elementu z HTML do JS
- Po identyfikatorze: `document.querySelector('#mojeId')`
- Po klasie: `document.querySelector('.mojaKlasa')`
- Wszystkie elementy (lista): `document.querySelectorAll('li')`

### Reakcja na kliknięcie
```javascript
const przycisk = document.querySelector('button');
przycisk.addEventListener('click', function() {
    // Co ma się stać po kliknięciu
});
```

### Zmiana tekstu i stylów
- Tekst: `element.textContent = "Nowy wyraz";`
- Tło: `element.style.backgroundColor = "red";`
- Ukrycie elementu: `element.style.display = "none";`
- Wyświetlenie elementu: `element.style.display = "block";`

### Tablice i losowanie
- Definiowanie: `const owoce = ["Jabłko", "Banan", "Gruszka"];`
- Pobranie np. Banana (indeks 1): `owoce[1]`
- Losowanie indeksu: `Math.floor(Math.random() * owoce.length)`

### Pętle i Warunki
**Pętla for** (wykona się tyle razy, ile elementów w tablicy):
```javascript
for (let i = 0; i < tablica.length; i++) {
    console.log(tablica[i]);
}
```

**Warunek if**:
```javascript
if (warunek) {
    // jeśli warunek spełniony
} else {
    // w przeciwnym razie
}
```
