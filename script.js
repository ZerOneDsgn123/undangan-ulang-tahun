const playBtn = document.getElementById('playBtn');
const bgMusic = document.getElementById('bgMusic');

playBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        playBtn.textContent = '⏸';
    } else {
        bgMusic.pause();
        playBtn.textContent = '▶';
    }
});
