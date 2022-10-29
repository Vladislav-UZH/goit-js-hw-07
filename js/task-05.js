/**
 * Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
 * подставляет его текущее значение в span#name-output. Если инпут пустой,
 *  в спане должна отображаться строка "Anonymous".
 */


const refs = {
    inputEl: document.querySelector('#name-input'),
    nameValue: document.querySelector('#name-output'),
}


function getNameOutput() {
    console.log(typeof refs.inputEl.value);
    if (!refs.inputEl.value) {
        return refs.nameValue.textContent = 'Anonymous'
    }
   return refs.nameValue.textContent = refs.inputEl.value;
    
}

    refs.inputEl.addEventListener('input',getNameOutput)

