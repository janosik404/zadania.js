# Grupa A — Zadanie 4: Kolejka zleceń druku

> Prostszy zapis **krok po kroku:** `instrukcja_dostepna.md` w tym folderze.

## Cel

Zbuduj **kolejkę** zleceń: **trzykrotnie** poprosisz użytkownika o krótki opis (`prompt()`), dodasz zlecenia, następnie **symulujesz obsługę jednego** zlecenia z początku kolejki i pokażesz, co zostało do wykonania.

**FIFO** = *first in, first out* — **pierwsze dodane zlecenie** jest **pierwsze obsłużone** (zdejmujesz z **początku** tablicy, dopisujesz na **koniec**).

**Kolejność zdarzeń:** 1) trzy razy `prompt` i dopisanie treści na koniec tablicy (albo Twoja reguła na pusto/anulowanie); 2) jedno zdjęcie z **początku** tablicy; 3) `document.write` z tym, co zostało; 4) funkcja z parametrem; 5) `console.log` testy tablicy bez `prompt`.

## Wymagania

- Tablica z modelem **FIFO**: dopisywanie na koniec, zdejmowanie z początku, rozumienie **aktualnej liczby** elementów.
- Dokładnie **3** zapytania do użytkownika. Gdy ktoś **anuluje** albo zostawi pusto — opisz regułę w **komentarzu**. *Przykładowa reguła (możesz przyjąć taką samą):* anulowanie **nie liczy** jako wpis — **pytasz ponownie**, aż zbierzesz **3** realne opisy.
- **Funkcja z parametrem**.
- Wynik przez **`document.write()`**.
- **`console.log`**: testy operacji na tablicy bez `prompt`.

## HTML

- Znacznik **meta** z autorem (forma według lekcji) + stopka.

## Wskazówki

- FIFO: co zostaje po jednym zdjęciu z początku?

## Instrukcja uproszczona

W tym samym folderze jest **`instrukcja_dostepna.md`** — te same wymagania, zapis **krok po kroku** i checklistą przed oddaniem.

## Wspólna pomoc (ściąga techniczna)

Plik **`pomoc_skrocona.md`** leży w folderze `zestaw_realnych_problemow`. Z folderu tego zadania otwórz **`../../../pomoc_skrocona.md`**.
