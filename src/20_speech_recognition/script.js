window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

const pFirst = document.querySelector('.heading-p');
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);
recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    if (transcript.match(/ip[\sa-z0-9]+address/gi)) {
        fetch('https://ipapi.co/json')
            .then(blob => blob.json())
            .then(data => pFirst.textContent = data.ip)
    }

    if (transcript.match(/random|random[\s]activity|activity/gi)) {
        fetch('https://www.boredapi.com/api/activity')
            .then(blob => blob.json())
            .then(data => pFirst.textContent = data.activity);
    }

    if (transcript.match(/clear/gi)) {
        pFirst.textContent = 'I tested in Chrome! Say Help!'
        words.innerHTML = '';
    }

    if (transcript.match(/btc/gi)) {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(blob => blob.json())
            .then(data => pFirst.textContent = `BTC Price: ${data.bpi.USD.rate} USD(s)`);
    }

    if (transcript.match(/help/gi)) {
        pFirst.textContent = 'Say, IP address, Clear, Help, Random, BTC, Dogs';
    }

    if (transcript.match(/dogs/gi)) {
        img = document.createElement('img');
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(blob => blob.json())
            .then(data => img.src = data.message);
        img.width = 100;
        img.height = 100;
        words.appendChild(img);
    }

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
});

recognition.addEventListener('end', recognition.start);

recognition.start();