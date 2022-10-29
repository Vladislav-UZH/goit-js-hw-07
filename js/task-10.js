/**
 * Напиши скрипт создания и очистки коллекции элементов.
 *  Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
 *  При нажатии на кнопку Очистить, коллекция элементов очищается.
 * Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>,
 *  сколько указано в amount и добавляет их в div#boxes.
 
 * Размеры самого первого <div> - 30px на 30px.
 * Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
 * Все элементы должены иметь случайный цвет фона в формате HEX.
 * Используй готовую функцию getRandomHexColor для получения цвета.
 
 * Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
 */

const refs = {
  quantityOfBoxesInputEl: (document.querySelector('#controls')).firstElementChild,
  createDivBtn: document.querySelector('button[data-create]'),
  destroyDivBtn: document.querySelector('button[data-destroy]'),
  boxesContainerEl: document.querySelector('#boxes')
}


// Make random HEX color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Input Amount Value
const getInputValue = () => {
  console.log(refs.quantityOfBoxesInputEl.value);
  return refs.quantityOfBoxesInputEl.value;
}

// Creating Div Boxes
const createBoxes = amount => {
  let result = [];
  let counterWidth = 20;
  let counterHeight = 20;
  for (let i = 1; i <= amount; i += 1){
    result.push(`<div style="background-color: ${getRandomHexColor()}; width:${counterWidth+=10}px; height:${counterHeight+=10}px;" ">${i}</div>`);    
  }
  result = result.join('');

  console.log(result);

  refs.boxesContainerEl.insertAdjacentHTML('beforeend',result);
}
// Call createBoxex() after btn click
const callCreateBoxesAfterClick = () => createBoxes(getInputValue());
// Remove Div Boxes
const destroyBoxes = () => refs.boxesContainerEl.innerHTML = '';

console.log(refs.quantityOfBoxesInputEl.value);
refs.quantityOfBoxesInputEl.addEventListener('change', getInputValue);
refs.createDivBtn.addEventListener('click',callCreateBoxesAfterClick );
refs.destroyDivBtn.addEventListener('click', destroyBoxes);