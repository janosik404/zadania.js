# Teoria: Prosta asynchroniczność w JavaScript (timery)

## 1. Po co uczymy się asynchroniczności?

W praktyce programistycznej często trzeba wykonać kod:
- **później** (np. po 2 sekundach),
- **cyklicznie** (np. co 1 sekundę),
- **do momentu spełnienia warunku** (np. 5 prób i stop).

Przykłady realnych sytuacji:
- opóźniony komunikat „moduł gotowy”,
- heartbeat procesu (kontrolne „żyję”) co sekundę,
- odliczanie do restartu usługi,
- ponawianie prób połączenia,
- limit czasu operacji (timeout).

W tym dziale używamy tylko timerów:
- `setTimeout` - uruchamia kod raz po czasie,
- `setInterval` - uruchamia kod cyklicznie,
- `clearTimeout` - anuluje timeout,
- `clearInterval` - zatrzymuje interwał.

Wyniki pokazujemy przez `document.write`.

---

## 2. Co to znaczy „asynchronicznie”?

Kod synchroniczny wykonuje się krok po kroku.

Kod asynchroniczny pozwala zaplanować część kodu na później, a program działa dalej.

Ważne: `setTimeout` i `setInterval` **nie zatrzymują** całego pliku JavaScript.

---

## 3. `setTimeout` - wykonanie jednorazowe

Służy do uruchomienia kodu raz, po podanym czasie.

```javascript
setTimeout(function () {
  // kod
}, czas_w_ms);
```

Przykład użycia:
- opóźniony komunikat,
- timeout operacji,
- pokazanie informacji po krótkiej przerwie.

---

## 4. `clearTimeout` - anulowanie timeoutu

Jeśli zaplanowany timeout nie jest już potrzebny, można go anulować.

Przykład: operacja kończy się szybciej niż limit czasu, więc anulujemy komunikat o przekroczeniu czasu.

---

## 5. `setInterval` - działanie cykliczne

Służy do uruchamiania kodu co określony czas.

```javascript
const id = setInterval(function () {
  // kod
}, czas_w_ms);
```

Przykład użycia:
- licznik sekund,
- monitoring procesu,
- cykliczne próby połączenia.

### Dlaczego przypisujemy `setInterval` do stałej?

`setInterval(...)` **zwraca identyfikator interwału** (ID).  
To jest jak „numer biletu” dla uruchomionego timera.

Jeśli nie zapiszesz tego ID do zmiennej/stałej, nie będziesz wiedzieć, który interwał zatrzymać.

Najczęściej zapisujemy tak:

```javascript
const idIntervalu = setInterval(function () {
  document.write("Działa co sekundę<br>");
}, 1000);
```

W tej stałej (`idIntervalu`) nie zapisuje się tekst ani liczba sekund.  
Zapisuje się **uchwyt do konkretnego interwału**.

---

### Dlaczego zwykle używamy `const`, a nie `let`?

Używamy `const`, bo:
- chcemy, żeby ta referencja była jedna i stabilna,
- nie planujemy podmieniać jej na inne ID w tym samym fragmencie kodu,
- kod jest czytelniejszy: „to ten jeden interwał, który mam zatrzymać”.

Można użyć też `let`, ale w prostych zadaniach `const` jest zwykle bezpieczniejsze i czytelniejsze.

---

## 6. `clearInterval` - zatrzymanie interwału (dokładnie)

### Dlaczego to jest tak ważne?

`setInterval(...)` uruchamia kod w pętli czasowej.  
Ta pętla **nie kończy się sama**.

To znaczy, że bez `clearInterval(...)`:
- komunikaty będą wypisywane cały czas,
- licznik będzie rósł bez końca,
- kod będzie robił niepotrzebną pracę.

W praktyce prawie każde zadanie z `setInterval` powinno mieć też moment zatrzymania.

### Jak działa mechanizm krok po kroku?

1. Uruchamiasz interwał:
   - `const id = setInterval(...);`
2. JavaScript zapisuje numer tego interwału w zmiennej `id`.
3. Gdy spełni się warunek stopu, wołasz:
   - `clearInterval(id);`
4. Ten konkretny interwał przestaje się wykonywać.

Najważniejsze: `clearInterval` musi dostać **to samo ID**, które zwrócił `setInterval`.

### Jak ta stała działa w praktyce?

Najpierw tworzysz interwał i zapisujesz ID:

```javascript
const idIntervalu = setInterval(function () {
  document.write("Tick<br>");
}, 1000);
```

Potem, w miejscu gdzie ma nastąpić stop (np. warunek, timeout), używasz tej samej stałej:

```javascript
clearInterval(idIntervalu);
```

To jest dokładnie ten moment:
- `setInterval` -> „uruchom i zwróć ID”,
- `const idIntervalu = ...` -> „zapamiętaj ID”,
- `clearInterval(idIntervalu)` -> „zatrzymaj ten konkretny interwał”.

Bez tej stałej nie masz „adresu” interwału do zatrzymania.

---

### Przykład 1: Zatrzymanie po 5 powtórzeniach

```javascript
let licznik = 0;

const id = setInterval(function () {
  licznik++;
  document.write("Pomiar nr " + licznik + "<br>");

  if (licznik === 5) {
    clearInterval(id);
    document.write("Koniec pomiarów<br>");
  }
}, 1000);
```

Co tu się dzieje:
- co 1 sekundę zwiększamy licznik,
- gdy licznik dojdzie do 5, zatrzymujemy interwał.

---

### Przykład 2: Odliczanie do zera

```javascript
let sekundy = 3;

const id = setInterval(function () {
  document.write("Pozostało: " + sekundy + " s<br>");
  sekundy--;

  if (sekundy < 0) {
    clearInterval(id);
    document.write("Odliczanie zakończone<br>");
  }
}, 1000);
```

Tu interwał kończy się wtedy, gdy odliczanie zostanie wykonane do końca.

---

### Przykład 3: Ręczne zatrzymanie przez drugi timer

Czasem interwał kończy inna część programu, np. timeout:

```javascript
let i = 0;

const id = setInterval(function () {
  i++;
  document.write("Praca w tle: " + i + "<br>");
}, 1000);

setTimeout(function () {
  clearInterval(id);
  document.write("Przerwano pracę w tle po 4 sekundach<br>");
}, 4000);
```

To częsty wzorzec: „coś działa cyklicznie, ale maksymalnie X sekund”.

---

### Najczęstsze błędy przy `clearInterval`

1. Brak zapisanego ID:
   - zrobisz `setInterval(...)`, ale nie zapiszesz do zmiennej.
   - wtedy nie masz czego przekazać do `clearInterval`.

2. Złe ID:
   - próbujesz zatrzymać inny interwał niż ten uruchomiony.

3. Zły warunek stopu:
   - warunek nigdy nie jest spełniony (np. literówka w zmiennej).

4. Zbyt wczesne zatrzymanie:
   - `clearInterval(id)` wywołane od razu po `setInterval`, zanim pętla zrobi cokolwiek.

### Dobra praktyka

- zawsze nazwij zmienną z ID jasno, np. `idIntervalu`,
- od razu zaplanuj: „kiedy i gdzie zatrzymam ten interwał?”,
- po zatrzymaniu wypisz komunikat końcowy, żeby było jasne, że proces się zakończył.

---

## 7. Milisekundy i sekundy

- `1000 ms = 1 s`
- `2000 ms = 2 s`
- `5000 ms = 5 s`

Typowy błąd: wpisanie `5` zamiast `5000`.

---

## 8. Najczęstsze błędy

1. Brak `clearInterval`.
2. Pomylenie `setTimeout` (raz) z `setInterval` (wiele razy).
3. Założenie, że timer zatrzyma cały program.
4. Brak warunku zakończenia odliczania.
5. Niewłaściwa jednostka czasu (ms zamiast s lub odwrotnie).

---

## 9. Prosty schemat rozwiązywania zadań

1. Ustal, czy akcja ma wykonać się raz czy cyklicznie.
2. Wybierz `setTimeout` albo `setInterval`.
3. Podaj czas w milisekundach.
4. Dodaj warunek zakończenia (jeśli to interwał).
5. Zatrzymaj timer (`clearTimeout` lub `clearInterval`).
6. Wypisz wynik czytelnie przez `document.write`.
