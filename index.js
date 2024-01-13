/*

# What time is it? Old Solution

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

function whatTimeIsIt(time) {
    var ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    var tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    var numString = num.toString();

    if (num < 0) throw new Error("Negative numbers are not supported.");

    if (num === 0) return "zero";

    //the case of 1 - 20
    if (num < 20) {
        return ones[num];
    }

    if (numString.length === 2) {
        return tens[numString[0]] + " " + ones[numString[1]];
    }

    //100 and more
    if (numString.length == 3) {
        if (numString[1] === "0" && numString[2] === "0")
            return ones[numString[0]] + " hundred";
        else
            return (
                ones[numString[0]] +
                " hundred and " +
                convert(+(numString[1] + numString[2]))
            );
    }

    if (numString.length === 4) {
        var end = +(numString[1] + numString[2] + numString[3]);
        if (end === 0) return ones[numString[0]] + " thousand";
        if (end < 100) return ones[numString[0]] + " thousand and " + convert(end);
        return ones[numString[0]] + " thousand " + convert(end);
    }
}

function getTimeZoneWording(timeZone, hour) {
    let wording;

    switch (timeZone) {
        case "am":
            if (hour == 12) {
                wording = "midnight";
            } else {
                wording = "morning";
            }
            break;
        case "pm":
            if (hour == 12) {
                wording = "noon";
            } else {
                wording = "afternoon";
            }
            break;
        default:
            break;
    }

    return wording;
}

function solution(times) {
    let splittedTimes = times.split(" ");

    let timeZone = splittedTimes[1];
    let hourAndMinute = splittedTimes[0];

    let splittedHourAndMinute = hourAndMinute.split(":");
    let hour = splittedHourAndMinute[0];
    let minute = splittedHourAndMinute[1];

    let timeZoneWording = getTimeZoneWording(timeZone, hour);
    let hourWording = humanize(hour);
    let minuteWording = humanize(minute);

    return `It's ${hourWording} past ${minuteWording} in the ${timeZoneWording}`;
}

console.log(solution("2:15 pm"));

console.log(solution("8:57am"));

module.exports = whatTimeIsIt;