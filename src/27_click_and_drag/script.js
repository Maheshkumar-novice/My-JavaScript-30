const slider = document.querySelector('.items');

let startX;
let scrollLeft;
let isDown = false;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.table({ pageX: e.pageX, pageY: e.pageY, clientX: e.clientX, clientY: e.clientY, screenX: e.screenX, screenY: e.screenY, offsetX: e.offsetX, offsetY: e.offsetY });
});
slider.addEventListener('mouseup', (e) => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseleave', (e) => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (isDown) {
        let x = e.pageX - slider.offsetLeft;
        let walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;
        let a = walk / 3;
        let b = slider.scrollLeft / 3;
    }
});