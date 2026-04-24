# Grupa A — Zadanie 1: Proste logowanie

> Prostszy zapis **krok po kroku:** `instrukcja_dostepna.md` w tym folderze.

## Cel

Zasymulujesz **dostęp** po podaniu danych przez `prompt()`: program akceptuje lub odrzuca logowanie w **kilku próbach** (limit z góry).

**Sposób wpisywania:** możesz użyć **dwóch** okienek (`prompt`) — najpierw login, potem hasło — **albo jednego** (np. jeden tekst, który potem dzielisz). **Oba warianty są poprawne**, chyba że na lekcji ustalicie inaczej z nauczycielem.

**Kolejność pracy (skrót):** 1) stałe login/hasło w kodzie; 2) pętla z limitem prób i `prompt`; 3) funkcja z parametrem sprawdzająca dane; 4) komunikat końcowy `document.write`; 5) na końcu pliku testy `console.log` (bez `prompt` w testach).

## Wymagania

- **Powtarzanie prób** z ustalonym maksimum + **`prompt()`**.
- Porównania (np. stałe poprawnego loginu/hasła w kodzie — **nie** trzymaj prawdziwych danych osobowych).
- Komunikat końcowy przez **`document.write()`** w panelu wyniku.
- **Funkcja z parametrem** (np. sprawdzenie poprawności pary danych).
- **`console.log`**: testy funkcji na znanych stringach.

## HTML

- Znacznik **meta** z autorem (forma według lekcji) oraz ta sama treść w **stopce**.

## Wskazówki ogólne

- Obsłuż anulowanie `prompt`.
- Unikaj ujawniania w komunikacie, *która* część była błędna, jeśli chcesz uproszczonego modelu bezpieczeństwa (opcjonalnie).

## Instrukcja uproszczona

W tym samym folderze jest **`instrukcja_dostepna.md`** — te same wymagania, zapis **krok po kroku** i checklistą przed oddaniem.

## Wspólna pomoc (ściąga techniczna)

Plik **`pomoc_skrocona.md`** leży w folderze `zestaw_realnych_problemow`. Z folderu tego zadania otwórz **`../../../pomoc_skrocona.md`**.
