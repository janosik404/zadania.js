# Cel zadania
Przećwiczenie mechanizmu losowania jednego elementu ze zdefiniowanej tablicy i wstawiania go na stronę po kliknięciu przycisku.

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie:** `document.querySelector('#identyfikator')`
- **Reakcja na kliknięcie:** `przycisk.addEventListener('click', funkcja)`
- **Losowanie liczby z zakresu tablicy:** 
  `let numerek = Math.floor(Math.random() * tablica.length);`
- **Podmienianie tekstu za pomocą wylosowanego indeksu:**
  `element.textContent = tablica[numerek];`

## Wymagania / Kryteria Oceny
1. Skrypt posiada zadeklarowaną tablicę ze zwierzętami: `["Pies", "Kot", "Ptak"]`.
2. Do przycisku z dokumentu HTML podpięte jest zdarzenie `click`.
3. W funkcji zdarzenia wykorzystano `Math.random` w celu wygenerowania losowej, całkowitej liczby będącej poprawnym indeksem tablicy.
4. Do elementu z wynikiem na stronie wpisywane jest losowe zwierzę pobrane z tablicy.

## Oczekiwany wynik (Kroki do wykonania)
1. Utwórz w kodzie tablicę: `const zwierzeta = ["Pies", "Kot", "Ptak"];`.
2. Pobierz z HTML przycisk do losowania oraz element, w którym ma się wyświetlić wynik (`#zwierzak`). Użyj do tego `querySelector`.
3. Podłącz zdarzenie kliknięcia (`addEventListener`) do pobranego przycisku.
4. Wewnątrz przypisanej funkcji stwórz nową zmienną (np. `los`) i wygeneruj do niej losowy indeks, korzystając ze wzoru z użyciem `.length` Twojej tablicy.
5. Zmień właściwość `textContent` na elemencie wyniku przypisując mu zwierzę z tablicy wskazane przez losowy indeks (np. `zwierzeta[los]`).

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
