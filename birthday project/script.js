function validateLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;

    if(user === "Vikas Yadav" && pass === "1234" && dob === "2000-04-28") {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('intro-screen').classList.remove('hidden');
    } else {
        document.getElementById('error').innerText = "Wrong Details ❌";
    }
}

const startBtn = document.getElementById('start-btn');
const music = document.getElementById('bg-music');

startBtn.addEventListener('click', () => {
    music.play();
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
    fireConfetti();
});

// Gift Button
const giftBtn = document.getElementById('gift-btn');

giftBtn.addEventListener('click', () => {
    document.getElementById('gift-box').classList.remove('hidden');
});

function fireConfetti() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;

    var interval = setInterval(function() {
        if (Date.now() > animationEnd) return clearInterval(interval);

        confetti({
            particleCount: 50,
            spread: 360
        });
    }, 300);
}
