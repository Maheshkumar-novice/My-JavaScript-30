const bandListContainer = document.querySelector("#bands");
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function strip(arg) {
    console.log(arg.replace(/^(a |an |the )/i, "").trim());
    return arg.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
bandListContainer.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join('');