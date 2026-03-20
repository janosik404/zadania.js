# Zadanie 5: Walidator Loginu

Napisz funkcję `dodajUzytkownika()`, która prosi o podanie nazwy użytkownika. Jeśli nazwa jest krótsza niż 3 znaki – wyświetl błąd przez `alert`. Jeśli jest poprawna – dodaj ją do globalnej tablicy `uzytkownicy`.

### Wymagania:
- Wywołaj funkcję 3 razy.
- Na koniec wypisz ostateczną liczbę użytkowników w tablicy.

### Podpowiedzi:
- Wykorzystaj właściwość sprawdzającą liczbę znaków w tekście.
- Użyj odpowiedniej operacji do dołożenia elementu do tablicy.

### Kod bazowy:
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Zadanie JS</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background-color: #f4f7f6; margin: 0; padding: 40px; display: flex; justify-content: center; }
        .app-card { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); width: 100%; max-width: 650px; border-left: 8px solid #2c3e50; }
        h1 { color: #2c3e50; font-size: 24px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        .output { background: #1e1e1e; color: #dcdcdc; padding: 20px; border-radius: 6px; font-family: 'Consolas', monospace; line-height: 1.6; min-height: 50px; white-space: pre-wrap; }
    </style>
</head>
<body>
    <div class="app-card">
        <h1>Wynik działania programu</h1>
        <div class="output">
            <script>
                // --- TWOJE ROZWIĄZANIE ---
            </script>
        </div>
    </div>
</body>
</html>

```