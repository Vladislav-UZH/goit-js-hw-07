

/**
 * Напиши скрипт, который изменяет цвета фона элемента <body>
 *  через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
 *  
 */

const refs = {
  bodyEl: document.querySelector('body'),
  colorTypeEl: document.querySelector('.color'),
  btnChangingColor: document.querySelector('.change-color')
};
refs.btnChangingColor.addEventListener('click',setBodyBgColor)



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


function setBodyBgColor() {
  console.log('Changing Color!');

  const thisColor = refs.bodyEl.style.backgroundColor = getRandomHexColor()
  console.log(thisColor);

  return setColorTypeName(thisColor); 
};

function setColorTypeName(currentColor) {
  refs.colorTypeEl.textContent = currentColor;
}
