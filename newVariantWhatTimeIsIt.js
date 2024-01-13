/*
The new Varian it located in the let result variable, you can check it out yourself!
*/

function whatTimeIsIt(startTime, endTime) {
    // Pisahkan jam dan menit dari waktu yang diberikan
    var [startHour, startMinute] = startTime.split(':');
    var [endHour, endMinute] = endTime.split(':');

    // Konversi jam menjadi format 12 jam dan tentukan AM atau PM
    var formattedStartHour = startHour % 12 || 12;
    var formattedEndHour = endHour % 12 || 12;
    var startPeriod = startHour < 12 ? 'AM' : 'PM';
    var endPeriod = endHour < 12 ? 'AM' : 'PM';
    var timeOfDay = startHour < 12 ? 'morning' : 'afternoon';

    // Hitung berapa lama Anda telah bekerja
    var hoursWorked = Math.abs(endHour - startHour);

    // Buat kalimat sesuai dengan aturan yang diberikan
    let result = `You have been working from ${formattedStartHour}:${startMinute} ${startPeriod} to ${formattedEndHour}:${endMinute} ${endPeriod}, `;
    result += `totaling ${hoursWorked} hours.`;

    return result;
}

// Percobaan
console.log(whatTimeIsIt('07:00', '21:00'));