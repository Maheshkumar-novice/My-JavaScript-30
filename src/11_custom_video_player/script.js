const player = document.querySelector('.player');
const video = document.querySelector('.video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress_fill');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const slider = document.querySelectorAll('.slider');
const expand = document.querySelector('.expand');

function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
}

function updateButton() {
    toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
}

function scrub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
slider.forEach(range => range.addEventListener('change', handleRangeUpdate));
slider.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

function fullscreen() {
    player.classList.toggle('fullscreen');
    if (expand.textContent == 'expand') {
        expand.textContent = 'shrink';
    }
    else {
        expand.textContent = 'expand';
    }
}