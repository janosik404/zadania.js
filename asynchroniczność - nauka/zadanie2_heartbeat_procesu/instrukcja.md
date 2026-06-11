# Zadanie 2: Heartbeat procesu

## Cel
Nauczyć się używać `setInterval` i `clearInterval`.

## Problem programistyczny
Proces monitoringu ma wysyłać heartbeat co 1 sekundę, ale tylko 5 razy.

## Kroki
1. Utwórz zmienną licznika i ustaw wartość początkową.
2. Uruchom timer cykliczny co 1000 ms.
3. W każdym kroku zwiększ licznik i wypisz numer heartbeat.
4. Gdy licznik osiągnie 5, zatrzymaj interwał.
5. Wypisz komunikat końcowy.

## Oczekiwany efekt
Pojawia się 5 heartbeatów, a potem komunikat końcowy i stop.
