
/**
 * Напиши скрипт, который при потере фокуса на инпуте (событие blur),
 * проверяет его содержимое на правильное количество введённых символов.
 * 
 * Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
 * Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
 * Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
 */

// 1) Create function checkInputOfBlur()
// 2) Create function setStyleOfInput()

const refs = {
    validationInputEl: document.querySelector('#validation-input'),
};

// refs.validationInputEl.classList.add('invalid')

const setStyleOfInput = (type) => {
    console.log(`You entered  ${type} number of characters `);
    if (type === 'valid') {
        refs.validationInputEl.classList.remove('invalid')
       return refs.validationInputEl.classList.add(type);
    }
        refs.validationInputEl.classList.remove('valid')
        return refs.validationInputEl.classList.add(type);
};

const checkInputOfBlur = () => {
    const enteredLength = refs.validationInputEl.value.length;
    const validLength = refs.validationInputEl.dataset.length;

    console.log(refs.validationInputEl.value.length);

    if (enteredLength >= validLength && validLength >= enteredLength ) {
        return setStyleOfInput('valid');
    } 
        return setStyleOfInput('invalid');
};

  const input =  refs.validationInputEl.addEventListener('blur', checkInputOfBlur);
