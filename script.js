const countDown = document.querySelector('.countdown');

const minutes = countDown.textContent.substring(0,2);
let time = minutes * 60;

function updateTimer() {
    const minutesRemaining = Math.floor(time / 60);
    let secondsRemaining = time % 60;

    secondsRemaining = secondsRemaining < 10 ? '0' + secondsRemaining: secondsRemaining;

    countDown.innerHTML = `${minutesRemaining}:${secondsRemaining}`;
    time--;
}

const startTimer = document.querySelector('.startTimer');

startTimer.addEventListener('click', () => {
    intervalID = setInterval(updateTimer, 1000);
})

const stopTimer = document.querySelector('.stopTimer');
stopTimer.addEventListener('click', () => {
    clearInterval(intervalID);
});