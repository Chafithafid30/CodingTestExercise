/*

# What time is it? New Solution

## Description

Help us to translate the given time into a sentence that states that time it self

## Hint

- time : String time that must be translated into a sentence
- if time = 12:00 am return must be "It's midnight"
- if time = 12:00 pm return must be "It's noon"
- else return must be what time is it and it's afternoon or morning

## Examples

> - time = 2:15 pm
> - return = It's two past fifteen in the afternoon

> - time = 8:57
> - return = It's eight past fifty seven in the morning
---
*/

/* Langkahnya:
1. Bikin function whatTimeIsIt(time)
2. Pisahkan jam dan menit dari waktu yang diberikan
3. Konversi jam menjadi format 12 jam
4. Tentukan apakah itu pagi atau sore
5. Buat kalimat sesuai dengan aturan yang diberikan
6. Return kalimat yang dibuat
*/

// Fungsi whatTimeIsIt
function whatTimeIsIt(time) {
    // Pisahkan jam dan menit dari waktu yang diberikan
    var [hour, minute] = time.split(':');

    // Konversi jam menjadi format 12 jam dan tentukan AM atau PM
    var formattedHour = hour % 12 || 12;
    var period = hour < 12 ? 'AM' : 'PM';
    var time = hour < 12 ? 'morning' : 'afternoon';

    // Buat kalimat sesuai dengan aturan yang diberikan
    let result = `It's ${formattedHour}:${minute} ${period} in the ${time}`;

    return result;
}

// Percobaan
console.log(whatTimeIsIt('07:00'));
console.log(whatTimeIsIt('17:00'));