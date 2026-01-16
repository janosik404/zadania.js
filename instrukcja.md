# Zadanie 1: System Mandatowy

## Opis zadania

Twoim zadaniem jest stworzenie prostego systemu dla fotoradaru. Skrypt powinien oceniać prędkość pojazdu i na tej podstawie decydować o ewentualnej karze.

## Wymagania

1.  Pobierz od użytkownika prędkość pojazdu (w km/h) za pomocą polecenia `prompt()`.
2.  Wykorzystaj instrukcje warunkowe `if`, `else if`, `else`, aby obsłużyć następujące przypadki:
    - Jeśli prędkość nie przekracza 50 km/h: Wypisz na stronie komunikat **"Jazda przepisowa"** (możesz użyć koloru zielonego w CSS).
    - Jeśli prędkość jest w przedziale 51 km/h - 60 km/h: Wypisz komunikat **"Ostrzeżenie: Zwolnij!"** (kolor żółty/pomarańczowy).
    - Jeśli prędkość przekracza 60 km/h: Oblicz i wypisz mandat (kolor czerwony).
3.  **Wzór na mandat:** Opłata bazowa wynosi 100 zł. Za każdy kilometr powyżej 60 km/h doliczane jest dodatkowe 10 zł.
    - _Przykład: Prędkość 70 km/h. Przekroczenie o 10 km. Mandat = 100 zł + (10 _ 10 zł) = 200 zł.\*

## Podpowiedzi

- Pamiętaj o konwersji pobranej wartości na liczbę: `parseInt(predkosc)`.
- Użyj `document.write("...text...")` aby wypisać wynik. Możesz wewnątrz stringa używać tagów HTML, np. `document.write('<p class="red">Mandat</p>')`.

## Struktura plików

- `index.html` - pusta struktura z dołączonym skryptem.
- `style.css` - style dla klas użytych w `document.write` (np. `.green`, `.red`).
- `script.js` - tutaj wpisz swój kod.
