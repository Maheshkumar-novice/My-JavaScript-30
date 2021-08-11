function removeTransition(e) {
    e.target.classList.remove('playing');
}

function playSound(e) {
    const selection = document.querySelector(`.key[data-key="${e.key}"]`);
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);

    if (!selection) return;

    selection.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', playSound);

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
});

