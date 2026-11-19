const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

const temperature = 19;
const windSpeed = 6;


function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * speed ** 0.16) + (0.3965 * temp * speed ** 0.16);
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

document.getElementById("windChill").textContent = windChill;

/**
let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
let namesB = names.filter(name => namecharAt(0) === 'B');

let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
let namesLengths = names.map((name) => name.length); **/

names.reduce((total, name) => total + name.length, 0) / names.length;

