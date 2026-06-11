# Zadanie 3: Timeout i anulowanie

## Cel
Nauczyć się łączyć `setTimeout` i `clearTimeout`.

## Problem programistyczny
Operacja ma limit 5 sekund.
Jeśli sukces pojawi się po 2 sekundach, timeout ma zostać anulowany.

## Kroki
1. Wypisz „Rozpoczynam operację”.
2. Ustaw timeout 5000 ms dla komunikatu o przekroczeniu czasu.
3. Ustaw drugi timeout 2000 ms dla komunikatu o sukcesie.
4. Po sukcesie anuluj timeout o przekroczeniu czasu.

## Oczekiwany efekt
Pojawia się tylko komunikat o sukcesie, bez komunikatu o przekroczeniu czasu.
