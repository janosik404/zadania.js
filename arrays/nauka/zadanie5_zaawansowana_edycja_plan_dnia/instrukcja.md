# Zadanie 5: Zaawansowana Edycja (Interaktywne)

## Cel

Edycja planu dnia na podstawie decyzji użytkownika.

## Krok 1: Dane wejściowe

Utwórz tablicę `dni`: `["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]`.
Wyświetl ją.

## Krok 2: Slice (Weekend)

Skopiuj weekend (od indeksu 5) do nowej zmiennej i wyświetl: "Odpoczywam w: ..."

## Krok 3: Slice (Praca)

Skopiuj dni robocze (indeksy 0-4 włącznie, czyli slice do 5). Wyświetl: "Pracuję w: ..."

## Krok 4: Splice (Zmiana planów)

Zapytaj użytkownika: "Jaki masz inny plan na środę?".
Użyj `splice`, aby **zamienić** "Środa" (indeks 2) na to, co wpisał użytkownik.
Parametry: start=2, usuwamy=1, wstawiamy=odpowiedź użytkownika.
Wyświetl zmodyfikowany tydzień.
