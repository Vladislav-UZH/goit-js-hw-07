/**
 * 
 * Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
 *  и изменяет инлайн-стиль span#text обновляя свойство font-size.
 *  В результате при перетаскивании ползунка будет меняться размер текста.
 */

const refs = {
    rangeInput: document.querySelector('#font-size-control'),
    textArea: document.querySelector('#text')
}

const setFontSizeOfInput = () => {
    const inputValue = refs.rangeInput.value;
    console.log(inputValue);
    return refs.textArea.style.fontSize = `${inputValue}px`;
};
refs.rangeInput.addEventListener('input',setFontSizeOfInput)
