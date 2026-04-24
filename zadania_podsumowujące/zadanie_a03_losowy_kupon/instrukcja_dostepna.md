# Instrukcja dostępna — Grupa A, zadanie 3: Losowy kupon

Dodatkowa instrukcja obok `instrukcja.md`. **Zalecenie:** najpierw ten plik.

---

## O co chodzi

Użytkownik **raz** wpisuje np. **imię** w `prompt`. Program **losuje jeden kupon** z tablicy i pokazuje wynik na stronie.

---

## Kroki

1. Otwórz pliki. **Meta** + **stopka** — autor.
2. Tablica **kuponów** (teksty) w kodzie.
3. Jeśli tablica **pusta** — krótki komunikat, **bez losowania**.
4. **`prompt` dokładnie raz** — imię lub identyfikator. Obsłuż: pusty tekst i **Anuluj**.
5. Wylosuj **jeden** indeks w zakresie **od 0 do ostatniego** elementu. *Liczby:* **3** kupony → indeksy **0, 1, 2**; **5** kuponów → **0 … 4**.
6. **Funkcja z parametrem** (losowanie z listy albo budowa tekstu wyniku). **Użyj** jej.
7. Wynik przez **`document.write`** w panelu.
8. **`console.log`** — test np. funkcji sklejającej tekst **bez** losu.
9. Sprawdź stronę i konsolę.

---

## Sprawdź przed oddaniem

- [ ] Jeden `prompt`, los w dobrym zakresie, pusta tablica obsłużona.
- [ ] Funkcja z parametrem; wynik na stronie; testy w konsoli.

---

## Pomoc do całego zestawu

`../../../pomoc_skrocona.md`
