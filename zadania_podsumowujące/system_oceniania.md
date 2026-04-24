# System oceniania — zestaw „Sprawdzian — grupa A” (5 zadań)

Materiał: `JS_podstawy/zestaw_realnych_problemow/sprawdzian/grupa_a/`  
Skrót: **SO** — kryteria i sposób liczenia wyniku.

---

## 1. Skala ocen (rozszerzona)

Ta sama skala co w zestawie „Nauka”. **2−** = dwójka z minusem; **5−** = piątka z minusem.

| Symbol | Znaczenie przybliżone |
|--------|------------------------|
| 1 | wymagania praktycznie niespełnione |
| 1+ | minimalny postęp względem 1 |
| 2− | poniżej podstawy, część pracy widoczna |
| 2 | podstawa z dużymi lukami |
| 2+ | podstawa z drobnymi uzupełnieniami |
| 3− | ponad podstawą, nierówno |
| 3 | poprawnie, drobne braki |
| 3+ | dobrze |
| 4− | bardzo dobrze, drobne uwagi |
| 4 | bardzo dobrze |
| 4+ | powyżej oczekiwań |
| 5− | prawie wzorowo |
| 5 | wzorowo |

---

## 2. Punktacja jednego zadania i mapowanie na ocenę

- Każde zadanie: **10 punktów** (kryteria: po **1 pkt**).
- **Procent z zadania** = `(suma pkt / 10) × 100%`.

| Procent pkt (zadanie) | Ocena |
|----------------------|--------|
| 0% – 7% | 1 |
| 8% – 15% | 1+ |
| 16% – 23% | 2− |
| 24% – 31% | 2 |
| 32% – 39% | 2+ |
| 40% – 47% | 3− |
| 48% – 55% | 3 |
| 56% – 63% | 3+ |
| 64% – 71% | 4− |
| 72% – 79% | 4 |
| 80% – 87% | 4+ |
| 88% – 95% | 5− |
| 96% – 100% | 5 |

---

## 3. SO — poszczególne zadania

### Zadanie A1 — Proste logowanie

| # | Kryterium | 1 pkt gdy |
|---|-----------|-----------|
| 1 | Limit prób | Ustalony maksimum prób; pętla sensownie zakończona |
| 2 | `prompt()` | Pobieranie danych; anulowanie obsłużone |
| 3 | Porównania | Login/hasło w kodzie (bez prawdziwych danych osobowych) |
| 4 | `document.write()` | Komunikat końcowy w panelu |
| 5 | Funkcja z parametrem | Np. walidacja pary login+hasło |
| 6 | `console.log` | Testy na znanych stringach |
| 7 | Meta + stopka | Zgodnie z instrukcją |
| 8 | Komunikat końcowy | Jasny wynik (dostęp / brak / limit) |
| 9 | Stabilność | Brak błędów przy typowej ścieżce |
| 10 | Czytelność kodu | — |

---

### Zadanie A2 — Lista zadań (TODO)

| # | Kryterium | 1 pkt gdy |
|---|-----------|-----------|
| 1 | Tablica | Lista przechowywana w tablicy |
| 2 | Dodawanie | Elementy dodane z kodu (bez `prompt`) |
| 3 | Wypisanie | Wszystkie pozycje na stronie (`document.write`) |
| 4 | Długość | Poprawne użycie liczby elementów przy wypisaniu |
| 5 | Funkcja z parametrem | Dodanie / format wiersza — użyte |
| 6 | `console.log` | Testy na małej tablicy |
| 7 | Meta + stopka | — |
| 8 | Pusta lista | Komunikat zamiast pustki |
| 9 | Poprawność | Kolejność i treść zgodne z operacjami |
| 10 | Czytelność kodu | — |

---

### Zadanie A3 — Losowy kupon

| # | Kryterium | 1 pkt gdy |
|---|-----------|-----------|
| 1 | Jedno `prompt()` | Identyfikator; pusty tekst / anulowanie obsłużone |
| 2 | Los w zakresie | Indeks zawsze poprawny; pusta tablica — komunikat |
| 3 | Tablica kuponów | Użyta w programie |
| 4 | Funkcja z parametrem | Losowanie lub budowa komunikatu |
| 5 | `document.write()` | Wynik w panelu |
| 6 | `console.log` | Test bez losu (np. składanie tekstu) |
| 7 | Meta + stopka | — |
| 8 | Komunikat | Czytelny dla użytkownika |
| 9 | Stabilność | Brak wyjścia poza tablicę |
| 10 | Czytelność kodu | — |

---

### Zadanie A4 — Kolejka zleceń druku

| # | Kryterium | 1 pkt gdy |
|---|-----------|-----------|
| 1 | FIFO | Dopisywanie na koniec, zdejmowanie z początku |
| 2 | Trzy wpisy | Dokładnie trzy próby `prompt` (reguła na puste/anulowanie opisana) |
| 3 | Jedna obsługa | Po dodaniu — symulacja obsługi pierwszego zlecenia |
| 4 | Stan końcowy | W panelu widać, co zostało w kolejce |
| 5 | Funkcja z parametrem | — |
| 6 | `console.log` | Testy tablicy bez `prompt` |
| 7 | Meta + stopka | — |
| 8 | `document.write()` | — |
| 9 | Spójność | Kolejka po operacjach zgodna z modelem |
| 10 | Czytelność kodu | — |

---

### Zadanie A5 — Raport ocen

| # | Kryterium | 1 pkt gdy |
|---|-----------|-----------|
| 1 | Tablica w kodzie | Oceny zdefiniowane w skrypcie (bez `prompt`) |
| 2 | Średnia | Poprawny wzór; pusta tablica — decyzja opisana |
| 3 | Próg | Liczba ocen poniżej ustalonego progu (np. poniżej 2) poprawna |
| 4 | Dwie funkcje z parametrami | Np. średnia i licznik — obie użyte |
| 5 | `document.write()` | Raport czytelny |
| 6 | `console.log` | Testy na małych tablicach |
| 7 | Meta + stopka | — |
| 8 | Przejście po tablicy | Wszystkie elementy uwzględnione przy agregacji |
| 9 | Poprawność liczb | Brak błędów przy danych z treści |
| 10 | Czytelność kodu | — |

---

## 4. SO — podsumowanie całego zestawu (grupa A)

### Wynik procentowy zestawu

- **Punkty możliwe** = `5 × 10 = 50`.
- **Punkty zdobyte** = suma ze wszystkich pięciu zadań.
- **Procent zestawu** = `(zdobyte / 50) × 100%` (zaokrąglenie wg ustalenia z klasą).

### Próg zaliczenia

- **Zaliczony zestaw** przy **procent zestawu ≥ 40%**, czyli co najmniej **20 / 50 pkt**.

### Ocena końcowa zestawu (symbol)

Użyj **tabeli z §2**, wstawiając **procent zestawu** zamiast „procentu zadania”.

### Uwagi

- Możesz dodatkowo wymagać minimum 40% w **każdym** zadaniu — dopisz wtedy w regulaminie wewnętrznym.
- Plagiat: **0 pkt** za dotyczący fragment, według zasad szkoły.

---

## 5. Szybki arkusz (opcjonalnie)

| Zadanie | Pkt / 10 | % |
|---------|----------|---|
| A1 Logowanie | | |
| A2 Lista TODO | | |
| A3 Losowy kupon | | |
| A4 Kolejka druku | | |
| A5 Raport ocen | | |
| **Suma** | **/ 50** | **%** |
| **Zaliczony (≥ 40%)** | TAK / NIE | |
| **Ocena zestawu** | | |
