function fibbonaciExercise(n) {
    var output = [];

    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

    return output;
}

/*
Langkahnya:
1. Buat variable untuk menyimpan output
2. Buat kondisi untuk n == 1
3. Buat kondisi untuk n == 2
4. Buat kondisi untuk n > 2
5. Buat looping untuk menghitung angka fibonacci
6. Return output
*/