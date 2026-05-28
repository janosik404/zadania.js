# Cel zadania
Przećwiczenie modyfikacji właściwości CSS tego samego elementu, który wywołuje zdarzenie. Uczeń korzysta z właściwości `display`.

## Krótka teoria ("Ściągacz")
- **Wyszukiwanie:** `document.querySelector('#identyfikator')`
- **Zdarzenie:** `przycisk.addEventListener('click', funkcja)`
- **Ukrycie elementu:** `element.style.display = "none"`

## Wymagania / Kryteria Oceny
1. Skrypt poprawnie pobiera przycisk z dokumentu HTML.
2. Zdarzenie `click` jest prawidłowo zarejestrowane dla tego przycisku.
3. Wewnątrz funkcji reagującej na zdarzenie zmieniana jest właściwość `style.display` pobranego przycisku na wartość `"none"`.
4. Kliknięcie w przycisk powoduje jego całkowite zniknięcie ze strony.

## Oczekiwany wynik (Kroki do wykonania)
1. Użyj `querySelector` aby złapać przycisk o id `#magiczny-przycisk` do zmiennej.
2. Podepnij nasłuchiwanie kliknięcia (`addEventListener`) do zmiennej z przyciskiem.
3. Wewnątrz nowo utworzonej funkcji wpisz komendę modyfikującą ten sam przycisk: odwołaj się do nazwy swojej zmiennej, wpisz `.style.display` i po znaku równości przypisz słowo `"none"`.

## Obowiązkowe
Pamiętaj, aby przed oddaniem zadania uzupełnić swoje dane (imię, nazwisko, klasę) w stopce na dole strony HTML!
