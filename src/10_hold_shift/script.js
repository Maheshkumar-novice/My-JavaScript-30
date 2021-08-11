const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
let counter = 0;
function handleCheck(e) {
    let inBetween = false;
    if (counter !== 0) {
        if (e.shiftKey && this.checked) {
            checkboxes.forEach(checkbox => {
                if (checkbox === this || checkbox === lastChecked) {
                    inBetween = !inBetween;
                }
                if (inBetween) {
                    checkbox.checked = true;
                }
            });
        }
    }
    counter++;
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

