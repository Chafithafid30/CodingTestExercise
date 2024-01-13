// Old Solution Kode Program Untuk Mengetauhi Kapan Suatu Postingan di Post?

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

const prompt = require('prompt-sync')();

// Declaration
const now = new Date();
const date = prompt("Date? ");
const month = prompt("Month? ");
const year = prompt("Year? ");
const created = new Date().setFullYear(year, month - 1, date);

// Function
const convertToDate = (before, after) => Math.floor((after - before) / (1000 * 60 * 60 * 24));

function toString(diff) {
    if (diff > 365) return ~~(diff / 365) + " years ago";
    if (diff > 30) return ~~(diff / 30) + " months ago";
    if (diff > 7) return ~~(diff / 7) + " weeks ago";
    return diff + " days ago"

}

// Logic
let diff = convertToDate(created, now);
console.log(toString(diff));

// };
module.exports = whenWasItPosted;