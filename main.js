const text = ["Hello My name is Frank Welcome to my website, Over here we don't just make you feel special but we make you special"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(async function type() {
    if(count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.form-header-item').textContent = letter;
    if(letter.length === currentText.length) {
        await delay(5000);
        count++;
        index = 0;
    }
    setTimeout(type, 250);
})();
function delay(ms) {
    return new Promise(res => setTimeout(res,ms));
} 