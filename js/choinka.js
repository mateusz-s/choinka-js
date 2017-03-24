function rysujChoinke1(b) {
    for (var n = 0; n < b; n++) {
        var star = '';
        for (var m = 0; m < (n + b); m++) {
            if (m < (b - (n + 1))) {
                star += ' ';
            } else {
                star += '*';
            }
        }
        console.log(star);
    }
}

function rysujChoinke2(b) {
    for (var n = 1; n <= b; n++) {
        var star = '';
        for (var m = 1; m <= (2* n - 1); m++) {
            star += '*';
        }
        console.log(star);
    }
}

do {
    var choice = prompt('Choinka - Wybierz wariant 1 lub 2:');
} while ( (choice != 1) && (choice != 2) );

do {
    var branch = Number(prompt('Podaj liczbę poziomów choinki, a następnie przejdź do konsoli \n(Ctrl + Shift + I):'));
} while ( isNaN(branch) );

switch (choice) {
    case '1':
        rysujChoinke1(branch);
        break;
    case '2':
        rysujChoinke2(branch);
}