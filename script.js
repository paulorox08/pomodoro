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

function stopTimer() {

}


const startTimer = document.querySelector('.startTimer');
startTimer.addEventListener('click', () => {
    setInterval(updateTimer, 1000); 
    startTimer.innerHTML = "STOP";
})