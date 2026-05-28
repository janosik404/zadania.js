# Cel zadania
Przećwiczenie elementarnego użycia pętli `for` do modyfikowania zawartości tekstowej na stronie oraz wykorzystania wartości samego licznika pętli (`i`) do tworzenia numeracji.

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie wielu elementów:** `document.querySelectorAll('.nazwa-klasy')`
- **Reakcja na kliknięcie:** `przycisk.addEventListener('click', funkcja)`
- **Pętla z użyciem swojego licznika do tekstu:**
  ```javascript
  for (let i = 0; i < elementy.length; i++) {
      elementy[i].textContent = "Wartość: " + i;
  }
  ```

## Wymagania / Kryteria Oceny
1. Skrypt poprawnie pobiera z dokumentu przycisk oraz WSZYSTKIE elementy o klasie `.linijka` używając metody `querySelectorAll`.
2. Zdarzenie `click` jest prawidłowo zarejestrowane dla przycisku.
3. Wewnątrz funkcji kliknięcia użyto pętli `for`, która iteruje od 0 do długości kolekcji elementów.
4. Wewnątrz pętli podmieniany jest `textContent` każdego elementu na frazę składającą się z tekstu i numeru obecnej iteracji (`i`).

## Oczekiwany wynik (Kroki do wykonania)
1. Użyj `querySelector` dla przycisku `#btn-drukuj`.
2. Użyj `querySelectorAll`, aby złapać do innej zmiennej wszystkie elementy o klasie `.linijka`.
3. Podepnij pod przycisk reagowanie na kliknięcie (`addEventListener`).
4. Wewnątrz funkcji stwórz pętlę `for`, w której zmienna `i` startuje od zera, i wykonuje się dopóki `i` jest mniejsze od długości pobranej listy linijek (`twojaZmienna.length`).
5. Pomiędzy klamrami pętli odwołaj się do aktualnego elementu: `twojaZmienna[i]` i przypisz mu do właściwości `textContent` następujący tekst: `"Wpisano numer: " + i`.

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
