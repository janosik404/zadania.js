const x = parseInt(prompt("podaj predkosc", 0));

if (x <= 50) {
document.write('<p class = "green">Jazda przepisowa</p>');
}

else if (x >= 51 && x <= 60) {
document.write('<p class = "yellow">Uwaga: zwolnij!</p>');
}

else if (x > 60) {
    document.write('<p class = "red">Mandat:</p>');
    let mandat = 100;
    let ponad = mandat + ((x - 60) * 10);
        document.write(ponad);
}
