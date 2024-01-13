// Buatlah kode program jika kelipatan 3 itu Fizz, jika kelipatan 5 Buzz

/*
Langkahnya:
1. Buatlah function FizzBuzz
2. Buat variabel dengan nilai 0
3. Buat perulangan dengan kondisi i < 100
4. Buat kondisi jika i % 3 == Fizz 
5. Buat kondisi jika i % 5 == Buzz
6. Buat kondisi jika i % 3 == 0 && i % 5 == 0 == FizzBuzz
7. Return function FizzBuzz
*/

function FizzBuzz() {
    var nilai = 0;
    for (nilai = 0; nilai < 100; nilai++) {
        if (nilai % 3 == 0) {
            console.log("Fizz");
        } else if (nilai % 5 == 0) {
            console.log("Buzz");
        } else if (nilai % 3 == 0 && nilai % 5 == 0) {
            console.log("FizzBuzz");
        }
    }
    return FizzBuzz;
}