# Zadanie 6: Retry połączenia

## Cel
Nauczyć się kontrolować liczbę prób i zatrzymywać proces.

## Problem programistyczny
System próbuje połączyć się z usługą maksymalnie 3 razy. Próba jest co 2 sekundy.

## Kroki
1. Przygotuj licznik prób.
2. Uruchom timer cykliczny co 2 sekundy.
3. W każdej próbie wypisz numer próby.
4. Gdy liczba prób osiągnie 3, zatrzymaj timer.
5. Wypisz komunikat, że przerwano dalsze próby.

## Oczekiwany efekt
Widzisz 3 próby, potem komunikat końcowy i brak dalszych wpisów.
