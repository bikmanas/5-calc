/*
Ka reikia zinoti: 
- koki noriu sugeneruoti turini?
- kur turini ikisti? koks yra selector'ius?

btn.classList.remove('..');
btn.classList.add('...');

*/
//susirandame vieta:
// const selector = '.calc';
const DOM = document.querySelector('.calc');
const formulaDOM = DOM.querySelector('.formula');


//sukuriame turini:
const symbols = ['C', '+/-', '%', '/', '1', '2', '3', '*', '4', '5', '6', '-', '7', '8', '9', '+', '0', 
'.', '<', '='];

let HTML = '';

for (let i = 0; i < symbols.length; i++){
    HTML += `<div class="key" data-symbol="${symbols[i]}"></div>`;
}

//istatome turini i vieta:
DOM.insertAdjacentHTML('beforeend',HTML);

//susirandame ka tik sukurtus mygtukus (turini):

const buttons = document.querySelectorAll('.key');
console.log(buttons);

//uzregistruojame kuris mygtukas yra paspaustas: 
for (let i = 0; i < buttons.length; i++){
    const btn = buttons[i];

    btn.addEventListener('click', function(){
        const symbol = btn.dataset.symbol;
        formulaDOM.innerText += symbol;
    });
}

