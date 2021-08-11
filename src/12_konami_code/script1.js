const h1 = document.querySelector('h1');
const pressed = [];
const secretCode = 'a';
window.addEventListener('keyup', (e) => {
    h1.textContent = e.key;
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }
});