// New Solution Kode Program Untuk Mengetauhi Kapan Suatu Postingan di Post?

/*
## Hint

- date : Is string of the date it was posted
- when it's less than a week return how many day ago job was posted
- when it's more than equal a week and less than a month return how many week ago job was posted
- when it's more than equal a month and less than a year return how many month ago jow was posted
- when it's more than equal a year return how many year ago job was posted

## Examples

> - current date : 13 December 2020
> - date posted : 8 December 2020
> - return : 5 days ago

> - current date : 13 December 2020
> - date posted : 19 November 2020
> - return : 3 weeks ago

> - current date : 13 December 2020
> - date posted : 13 September 2020
> - return : 3 months ago

> - current date : 13 December 2020
> - date posted : 13 December 2019
> - return : 1 year ago
*/

/* Langkahnya:
1. Bikin function whenWasItPosted
2. Bikin variabel untuk menampung tanggal di posted
3. Bikin variabel untuk menampung tanggal sekarang
4. Bikin percabangan if else
    4.1 Kalau tanggal di posted lebih dari 365 hari, maka return berapa years ago
    4.2 Kalau tanggal di posted lebih dari 30 hari, maka return berapa months ago
    4.3 Kalau tanggal di posted lebih dari 7 hari, maka return berapa weeks ago
    4.4 Else, maka return berapa days ago
5. Masukkan nilai didalam function
6. Print function
*/

function main(tanggalPosting, tanggalSekarang) {
    var postingDate = new Date(tanggalPosting);
    var currentDate = new Date(tanggalSekarang);
    var selisihHari = Math.floor((currentDate - postingDate) / (1000 * 60 * 60 * 24));

    if (selisihHari > 365) {
        return Math.floor(selisihHari / 365) + " years ago";
    } else if (selisihHari > 30) {
        return Math.floor(selisihHari / 30) + " months ago";
    } else if (selisihHari > 7) {
        return Math.floor(selisihHari / 7) + " weeks ago";
    } else {
        return selisihHari + " days ago";
    }
}

var result = main("August 17, 1945", "August 17, 2024"); // format using "December 13, 2020"
console.log(result);
