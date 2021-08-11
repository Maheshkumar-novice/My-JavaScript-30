const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('change', updateValues));
inputs.forEach(input => input.addEventListener('mousemove', updateValues));

function updateValues() {
    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}