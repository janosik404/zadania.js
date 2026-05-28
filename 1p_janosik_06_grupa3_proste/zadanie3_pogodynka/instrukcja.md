# Cel zadania
Przećwiczenie wyciągania danych z tablicy wewnątrz pętli `for` i wstawiania ich na stronę internetową. Uczeń buduje w ten sposób prosty mechanizm wyświetlania danych z "bazy".

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie wszystkich elementów:** `document.querySelectorAll('.nazwa-klasy')`
- **Pętla z użyciem tablicy:**
  ```javascript
  for (let i = 0; i < elementy.length; i++) {
      elementy[i].textContent = tablicaZDanymi[i];
  }
  ```

## Wymagania / Kryteria Oceny
1. Skrypt posiada własnoręcznie stworzoną tablicę z pogodą: `["Słońce", "Deszcz", "Śnieg", "Wiatr"]`.
2. Do zmiennej za pomocą `querySelectorAll` pobrano wszystkie elementy HTML reprezentujące kafelki z prognozą.
3. Do przycisku podpięto zdarzenie `click`.
4. Funkcja po kliknięciu uruchamia pętlę `for`.
5. Pętla iteruje od 0 do długości listy elementów, przypisując każdemu z nich właściwą pogodę z tablicy na podstawie tego samego indeksu `i`.

## Oczekiwany wynik (Kroki do wykonania)
1. Utwórz tablicę i wpisz w niej dokładnie 4 typy pogody: `["Słońce", "Deszcz", "Śnieg", "Wiatr"]`.
2. Utwórz zmienną (np. `kafelki`), w której za pomocą `querySelectorAll` złapiesz wszystkie miejsca na wpisanie prognozy (klasa `.dzien`).
3. Złap przycisk `#btn-prognoza` używając `querySelector`.
4. Podepnij zdarzenie kliknięcia pod ten przycisk.
5. Wewnątrz funkcji stwórz pętlę `for`. Zmienna `i` startuje od 0 i rośnie dopóki jest mniejsza od liczby pobranych kafelków (`kafelki.length`).
6. Wewnątrz pętli wskaż na bieżący kafelek (np. `kafelki[i]`) i zmień jego `textContent`, przypisując mu słowo z tablicy z pogodą — również z indeksu `i` (np. `pogoda[i]`).

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
