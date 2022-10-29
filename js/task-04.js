/**
 * 1) Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
 * 2) Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
 * 3) Обновляй интерфейс новым значением переменной counterValue.
 */

const counterEl = document.querySelector('#value');
const incrBtn = document.querySelector('button[data-action="increment"]')
const decrBtn = document.querySelector('button[data-action="decrement"]')
counterEl.textContent = 0
let value = 0;


const incrementValue = () => {
    return counterEl.textContent = value += 1;
    
   
};
const decrementValue = () => {
    return counterEl.textContent = value -= 1;
    
};


incrBtn.addEventListener('click', incrementValue);
decrBtn.addEventListener('click', decrementValue)
console.log();
