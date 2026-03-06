# Zadanie 4: Konwersja Tekst - Tablica (Interaktywne)

## Cel

Nauczyć się zamieniać ciąg znaków pobrany od użytkownika na tablicę.

## Krok 1: Pobieranie danych

Poproś użytkownika (`prompt`) o wpisanie **5 miast, które chciałby odwiedzić, oddzielonych przecinkami**.
(np. "Paryż,Rzym,Londyn,Praga,Wiedeń").
Zapisz odpowiedź do zmiennej `dane`.

## Krok 2: Split (Tekst -> Tablica)

Użyj `split(",")`, aby podzielić wpisany tekst na tablicę miast.
Wyświetl drugie miasto z tej listy.

## Krok 3: Dodawanie

Dodaj do tablicy jeszcze jedno miasto "na doczepkę" (np. "Radom") używając `push`.

## Krok 4: Join (Tablica -> Tekst)

Stwórz nową trasę wycieczki: połącz miasta używając `join(" -> ")`.
Wyświetl gotową trasę.
