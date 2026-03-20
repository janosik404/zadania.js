# Zadanie 10: System Autoryzacji

Stwórz dwie tablice: `bazaLoginow = ["admin", "user1", "student"]` oraz `bazaHasel = ["123", "pass", "zaq1"]`.
Napisz funkcję `zaloguj(login, haslo)`, która sprawdzi, czy para się zgadza.

### Wymagania:
- Hasło dla "admin" (indeks 0) musi pasować do hasła na indeksie 0 w drugiej tablicy.
- Wypisz wynik autoryzacji.

### Podpowiedzi:
- Najpierw znajdź indeks, pod którym znajduje się podany login w pierwszej tablicy.
- Następnie sprawdź, czy pod tym samym indeksem w tablicy haseł znajduje się podane hasło.

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