const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  
];
/**
 * Напиши скрипт, который для каждого элемента массива ingredients: Создаст отдельный элемент <li>. 
 * Обзательно используй метод document.createElement().
 * Добавит название ингредиента как его текстовое содержимое. Добавит элементу класс item.
 * После чего вставит все <li> за одну операцию в список ul#ingredients.
 */

const getCreateIngredients = () => {
  const listWithId = document.querySelector('#ingredients')
  let ingredientsEl = '';
  for (let i = 0; i < ingredients.length; i += 1) {
    ingredientsEl = document.createElement('li');
    ingredientsEl.textContent = ingredients[i];
    ingredientsEl.classList.add('item');
    
    console.log(ingredientsEl);
  };
  return listWithId.append(ingredientsEl);
;
};
getCreateIngredients()