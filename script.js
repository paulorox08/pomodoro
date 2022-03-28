// LIGHT AND DARK MODE

const toggle = document.querySelector('.toggle');


function lightOrDark() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
}


lightOrDark()

toggle.addEventListener('click', lightOrDark)

// TIMER

let countDown = document.querySelector('.countdown');

const oldTime = countDown.textContent;

let minutes = countDown.textContent.substring(0,2);
let time = minutes * 60;

function updateTimer() {
    let minutesRemaining = Math.floor(time / 60);
    let secondsRemaining = time % 60;

    secondsRemaining = secondsRemaining < 10 && secondsRemaining > 0 ? '0' + secondsRemaining: secondsRemaining;

    minutesRemaining = minutesRemaining < 10 && minutesRemaining > 0 ? '0' + minutesRemaining: minutesRemaining;

    countDown.innerHTML = `${minutesRemaining}:${secondsRemaining}`;
    time--;

};

const startTimer = document.querySelector('.startTimer');

startTimer.addEventListener('click', () => {
    intervalID = setInterval(updateTimer, 1);
});

const stopTimer = document.querySelector('.stopTimer');
stopTimer.addEventListener('click', () => {
    clearInterval(intervalID);
});

const resetTimer = document.querySelector('.resetTimer');
resetTimer.addEventListener('click', () => {
    countDown.innerHTML = oldTime;
});