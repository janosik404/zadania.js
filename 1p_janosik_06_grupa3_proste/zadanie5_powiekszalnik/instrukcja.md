# Cel zadania
Przećwiczenie modyfikacji właściwości stylów obiektu (konkretnie wielkości czcionki), po wywołaniu odpowiedniego zdarzenia na elemencie HTML.

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie:** `document.querySelector('#identyfikator')`
- **Reakcja na kliknięcie:** `przycisk.addEventListener('click', funkcja)`
- **Zmiana wielkości czcionki:** `element.style.fontSize = "50px"` (uwaga na duże `S` i dopisek `px` w cudzysłowie!)

## Wymagania / Kryteria Oceny
1. Skrypt poprawnie pobiera przycisk `#btn-powieksz` oraz mały tekst `#maly-tekst`.
2. Zdarzenie `click` jest przypisane do przycisku.
3. Wewnątrz funkcji kliknięcia skrypt przypisuje elementowi tekstu nową wielkość czcionki w CSS.
4. Po kliknięciu w przycisk tekst na stronie wyraźnie i prawidłowo się powiększa (wymagane dopisanie jednostki `px`).

## Oczekiwany wynik (Kroki do wykonania)
1. Użyj `querySelector` aby pobrać do jednej zmiennej element tekstu (`#maly-tekst`), a do drugiej przycisk (`#btn-powieksz`).
2. Podłącz reagowanie na `click` do zmiennej z przyciskiem.
3. W funkcji zdarzenia napisz komendę modyfikującą CSS: użyj zmiennej z tekstem, postaw kropkę, wpisz `style`, postaw kolejną kropkę i użyj wyrazu `fontSize`.
4. Po znaku równości, w cudzysłowie wpisz wartość np. `"40px"`.

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
