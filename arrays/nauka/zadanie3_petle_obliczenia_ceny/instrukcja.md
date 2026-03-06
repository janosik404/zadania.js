# Zadanie 3: Pętle i Obliczenia (Interaktywne)

## Cel

Iteracja po tablicy liczb, które poda użytkownik. **Uwaga na konwersję typów!**

## Krok 1: Pobieranie cen

Utwórz pustą tablicę `ceny`.
Użyj pętli `for`, która wykona się 4 razy (od i=0 do i<4).
Wewnątrz pętli zapytaj użytkownika o cenę produktu.
**WAŻNE:** Od razu zamień tekst na liczbę używając `Number()` lub `parseInt()`. Np.: `let cena = Number(prompt("Podaj cenę"));`
Dodaj cenę do tablicy (`push`).

## Krok 2: Wyświetlanie listy

Napisz drugą pętlę `for`, która przejdzie przez tablicę `ceny` i wyświetli każdą z nich w ładnym formacie (np. "Produkt 1: ... zł").

## Krok 3: Sumowanie

Przed drugą pętlą (lub w jej trakcie) oblicz sumę wszystkich cen.
Pamiętaj o zmiennej `suma` ustawionej na 0 na początku.

## Krok 4: Wynik

Wyświetl sumę całkowitą.
