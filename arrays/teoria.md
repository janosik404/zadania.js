# Tablice w JavaScript - Kompendium Wiedzy

Tablica (Array) to uporządkowana lista danych. W przeciwieństwie do zwykłej zmiennej, która przechowuje jedną wartość, tablica może przechowywać ich wiele pod jedną nazwą.

## 1. Tworzenie tablicy

Najprostszym sposobem na utworzenie tablicy jest użycie nawiasów kwadratowych `[]`.

```javascript
// Pusta tablica
let pustyKoszyk = [];

// Tablica z elementami (liczby)
let oceny = [4, 5, 3, 2, 6];

// Tablica z tekstami (stringami)
let owoce = ["jabłko", "banan", "gruszka"];

// Tablica mieszana (różne typy danych - możliwe, ale rzadko stosowane w prostych zadaniach)
let osoba = ["Jan", "Kowalski", 17, true];
```

## 2. Dostęp do elementów (Indeksowanie)

Elementy w tablicy są numerowane od **0**. Ten numer nazywamy **indeksem**.

```javascript
let owoce = ["jabłko", "banan", "gruszka"];

document.write(owoce[0]); // Wypisze: jabłko (pierwszy element)
document.write(owoce[1]); // Wypisze: banan (drugi element)
document.write(owoce[2]); // Wypisze: gruszka (trzeci element)
```

Aby zmienić element, również używamy indeksu:

```javascript
owoce[1] = "truskawka"; // Zmienia "banan" na "truskawka"
// Teraz tablica to: ["jabłko", "truskawka", "gruszka"]
```

## 3. Długość tablicy (length)

Właściwość `.length` mówi nam, ile elementów znajduje się w tablicy.

```javascript
let kolory = ["czerwony", "zielony", "niebieski"];
document.write(kolory.length); // Wypisze: 3
```

**Ważne:** Ostatni element tablicy ma zawsze indeks o 1 mniejszy niż długość tablicy (`tablica.length - 1`).

## 4. Dodawanie i usuwanie elementów

JavaScript oferuje gotowe metody do zarządzania zawartością tablic.

| Metoda             | Opis                                    | Przykład                        |
| :----------------- | :-------------------------------------- | :------------------------------ |
| `push(element)`    | Dodaje element na **koniec** tablicy.   | `owoce.push("mango");`          |
| `pop()`            | Usuwa **ostatni** element i go zwraca.  | `let ostatni = owoce.pop();`    |
| `unshift(element)` | Dodaje element na **początek** tablicy. | `owoce.unshift("ananas");`      |
| `shift()`          | Usuwa **pierwszy** element i go zwraca. | `let pierwszy = owoce.shift();` |

## 5. Iteracja (Pętle)

Aby wykonać operację na każdym elemencie tablicy, używamy pętli `for`.

```javascript
let liczby = [10, 20, 30, 40];

for (let i = 0; i < liczby.length; i++) {
  document.write("Liczba: " + liczby[i] + "<br>");
}
```

## 6. Operacje na tekście (String <-> Array)

Często musimy zamienić tekst na tablicę lub odwrotnie.

- **`split(separator)`**: Zamienia tekst na tablicę, dzieląc go według separatora.
- **`join(separator)`**: Łączy elementy tablicy w jeden tekst, wstawiając separator między nimi.

```javascript
let zdanie = "Ala ma kota";
let slowa = zdanie.split(" "); // ["Ala", "ma", "kota"]

let noweslowa = ["To", "jest", "test"];
let tekst = noweslowa.join("-"); // "To-jest-test"
```

## 7. Inne przydatne metody

- **`reverse()`**: Odwraca kolejność elementów w tablicy (mutuje tablicę - zmienia ją na stałe).
- **`sort()`**: Sortuje tablicę (alfabetycznie). Dla liczb wymaga specjalnej funkcji pomocniczej, ale w podstawowych zadaniach sortujemy teksty.
- **`splice(start, ile, co_dodać)`**: Potężna metoda do usuwania i dodawania elementów w środku tablicy.
  - `start`: indeks, od którego zaczynamy.
  - `ile`: ile elementów usunąć (0 jeśli tylko dodajemy).
  - `co_dodać`: (opcjonalnie) nowe elementy do wstawienia.
- **`slice(start, koniec)`**: Kopiuje fragment tablicy od indeksu `start` do `koniec` (nie wliczając `koniec`). Nie zmienia oryginalnej tablicy.
- **`concat(tablica2)`**: Łączy dwie tablice w nową.

```javascript
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b); // [1, 2, 3, 4]
```

## 8. Interakcja z Użytkownikiem

Aby nasze programy były ciekawsze, możemy pobierać dane od użytkownika.

### `prompt()`

Funkcja `prompt("Pytanie")` wyświetla okienko, w którym użytkownik może wpisać tekst.

```javascript
let imie = prompt("Podaj swoje imię:");
let imiona = [];
imiona.push(imie); // Dodajemy imię do tablicy
```

### Konwersja typów (Tekst -> Liczba)

**Ważne:** `prompt` zawsze zwraca **tekst** (string). Jeśli wpiszesz "5", program widzi to jako napis "5", a nie liczbę 5.
Aby wykonywać obliczenia matematyczne, musisz zamienić tekst na liczbę.

- **`Number(tekst)`**: Zamienia tekst na liczbę (również zmiennoprzecinkową).
- **`parseInt(tekst)`**: Zamienia tekst na liczbę całkowitą (ucina część po przecinku).

```javascript
let cenaTekst = prompt("Podaj cenę:"); // np. "10"
let cenaLiczba = Number(cenaTekst); // 10 (jako liczba)

// Lub skrócony zapis w jednej linii:
let wiek = Number(prompt("Ile masz lat?"));
```
