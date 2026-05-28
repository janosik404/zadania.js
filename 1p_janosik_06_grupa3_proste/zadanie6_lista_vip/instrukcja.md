# Cel zadania
Przećwiczenie instrukcji warunkowej (`if` / `else`) do podejmowania decyzji na podstawie wartości logicznej (prawda/fałsz). Uczeń decyduje co wypisać na ekranie.

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie:** `document.querySelector('#identyfikator')`
- **Reakcja na kliknięcie:** `przycisk.addEventListener('click', funkcja)`
- **Warunek logiczny:**
  ```javascript
  if (czyAktywne === true) {
      // Wykona się jeśli zmienna wynosi true
  } else {
      // Wykona się jeśli zmienna wynosi false
  }
  ```

## Wymagania / Kryteria Oceny
1. Skrypt posiada zadeklarowaną zmienną logiczną `czyVIP` ustawioną na wartość `true` (bez cudzysłowów).
2. Do przycisku sprawdzania na stronie podpięte jest zdarzenie kliknięcia.
3. W funkcji znajduje się prawidłowo zbudowana instrukcja warunkowa `if`, która sprawdza wartość zmiennej `czyVIP`.
4. Jeśli `czyVIP === true`, skrypt wypisuje na stronie tekst "Wstęp Wolny" i zmienia kolor tła elementu na złoty (`"gold"`).
5. Jeśli `czyVIP` wynosi false (blok `else`), skrypt wypisuje "Brak dostępu" i zmienia kolor tła na szary (`"gray"`).

## Oczekiwany wynik (Kroki do wykonania)
1. Utwórz zmienną: `let czyVIP = true;` (pamiętaj, nie dodawaj cudzysłowów przy słowach true/false).
2. Użyj `querySelector` aby pobrać do zmiennych przycisk `#btn-bramka` i element wiadomości `#wiadomosc`.
3. Przypisz nasłuchiwanie kliknięcia do przycisku.
4. W funkcji zdarzenia napisz instrukcję `if`, która sprawdzi, czy `czyVIP` jest równe `true` (np. `if(czyVIP === true)`).
5. Pomiędzy pierwszymi klamrami (dla prawdy) przypisz elementowi na stronie `textContent` równy `"Wstęp Wolny"` oraz zmień jego `style.backgroundColor` na `"gold"`.
6. Stwórz po klamrach instrukcję `else`. 
7. Wewnątrz bloku `else` przypisz napis `"Brak dostępu"`, a tło zmień na `"gray"`.

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
