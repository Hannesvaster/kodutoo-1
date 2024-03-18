const localClock = document.getElementById('local-clock');
const londonClock = document.getElementById('london-clock');
const newYorkClock = document.getElementById('new-york-clock');
const changeMonthButton = document.getElementById('changeMonth');
const changeDayButton = document.getElementById('changeDay');
const changeYearButton = document.getElementById('changeYear');
const body = document.body;

function updateClocks() {
    const now = new Date();

    // Kohalik kell
    const localHours = now.getHours().toString().padStart(2, '0');
    const localMinutes = now.getMinutes().toString().padStart(2, '0');
    const localSeconds = now.getSeconds().toString().padStart(2, '0');
    localClock.textContent = `Kell Eestis: ${localHours}:${localMinutes}:${localSeconds}\n` +
                              `Date: ${now.toLocaleDateString()}, Day: ${now.toLocaleDateString('en-US', { weekday: 'long' })}, Year: ${now.getFullYear()}`;

    // Londoni kell
    const londonTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/London"}));
    const londonHours = londonTime.getHours().toString().padStart(2, '0');
    const londonMinutes = londonTime.getMinutes().toString().padStart(2, '0');
    const londonSeconds = londonTime.getSeconds().toString().padStart(2, '0');
    londonClock.textContent = `Kell Londonis: ${londonHours}:${londonMinutes}:${londonSeconds}\n` +
                              `Date: ${londonTime.toLocaleDateString()}, Day: ${londonTime.toLocaleDateString('en-US', { weekday: 'long' })}, Year: ${londonTime.getFullYear()}`;

    // New Yorgi kell
    const newYorkTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
    const newYorkHours = newYorkTime.getHours().toString().padStart(2, '0');
    const newYorkMinutes = newYorkTime.getMinutes().toString().padStart(2, '0');
    const newYorkSeconds = newYorkTime.getSeconds().toString().padStart(2, '0');
    newYorkClock.textContent = `Kell New Yorgis: ${newYorkHours}:${newYorkMinutes}:${newYorkSeconds}\n` +
                               `Date: ${newYorkTime.toLocaleDateString()}, Day: ${newYorkTime.toLocaleDateString('en-US', { weekday: 'long' })}, Year: ${newYorkTime.getFullYear()}`;
}

function changeLocalMonth() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const newMonth = (currentMonth + 1) % 12; // Loop through months

    now.setMonth(newMonth);

    const localHours = now.getHours().toString().padStart(2, '0');
    const localMinutes = now.getMinutes().toString().padStart(2, '0');
    const localSeconds = now.getSeconds().toString().padStart(2, '0');
    localClock.textContent = `Kell Eestis: ${localHours}:${localMinutes}:${localSeconds}\n` +
                              `Date: ${now.toLocaleDateString()}, Day: ${now.toLocaleDateString('en-US', { weekday: 'long' })}, Year: ${now.getFullYear()}`;
}

function changeLocalDay() {
    const now = new Date();
    const currentDay = now.getDay();
    const newDay = (currentDay + 1) % 7; // Loop through days

    now.setDate(now.getDate() + 1);

    const localHours = now.getHours().toString().padStart(2, '0');
    const localMinutes = now.getMinutes().toString().padStart(2, '0');
    const localSeconds = now.getSeconds().toString().padStart(2, '0');
    localClock.textContent = `Kell Eestis: ${localHours}:${localMinutes}:${localSeconds}\n` +
                              `Date: ${now.toLocaleDateString()}, Day: ${now.toLocaleDateString('en-US', { weekday: 'long' })}, Year: ${now.getFullYear()}`;
}

function changeLocalYear() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = currentYear + 1;

    now.setFullYear(newYear);

    const localHours = now.getHours().toString().padStart(2, '0');
    const localMinutes = now.getMinutes().toString().padStart(2, '0');
    const localSeconds = now.getSeconds().toString().padStart(2, '0');
    localClock.textContent = `Kell Eestis: ${localHours}:${localMinutes}:${localSeconds}\n` +
                              `Date: ${now.toLocaleDateString()}, Day: ${now.toLocaleDateString('en-US', { weekday: 'long' })}, Year: ${now.getFullYear()}`;
}
function changeBackgroundColor() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
}

body.addEventListener('click', changeBackgroundColor);
changeMonthButton.addEventListener('click', changeLocalMonth);
changeDayButton.addEventListener('click', changeLocalDay);
changeYearButton.addEventListener('click', changeLocalYear);

updateClocks();
setInterval(updateClocks, 1000);
