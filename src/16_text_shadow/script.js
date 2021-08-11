const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.offsetLeft;
    y = y + e.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const ywalk = Math.round((y / height) * walk - walk / 2);
  console.log(xWalk, ywalk);
  text.style.textShadow = `
    ${xWalk}px ${ywalk}px 0 rgba(255, 0, 0, 1)
  `;
}

hero.addEventListener("mousemove", shadow);
