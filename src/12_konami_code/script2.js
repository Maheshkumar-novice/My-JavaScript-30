const h1 = document.querySelector('h1');
const pressed = [];
const secretCode = 'a';
const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
window.addEventListener('keyup', (e) => {
    h1.textContent = e.key;
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }
});
setInterval(() => {
    window.dispatchEvent(new KeyboardEvent('keyup', { 'key': alphabets[Math.floor(Math.random(alphabets.length) * alphabets.length)] }));
}, 200);