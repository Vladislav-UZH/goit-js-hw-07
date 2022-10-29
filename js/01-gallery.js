import { galleryItems } from './gallery-items.js';
// Change code below this line
const instance = basicLightbox.create(``)

const galleryUlEl = document.querySelector('.gallery')

galleryUlEl.addEventListener('click', (event) => {
    event.preventDefault()
    
    if (event.target.nodeName !== 'IMG') {
        return
    }
    basicLightbox.create(`
	   <img src="${event.target.dataset.source}"> 
`).show(onCheckModalWindowStatus())
 
});
console.log(galleryItems);

function markup() {
    return galleryItems.map(({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a>
  </li>`).join('');
}

function onGetImages() {
    
    return galleryUlEl.insertAdjacentHTML('beforeend',markup())
}
onGetImages();
function onCheckModalWindowStatus() {
    if (!instance.visible()) {

        console.log('It is open');
        // basicLightbox.close()
        
    }
    document.addEventListener('keyup', onEscKeyBtn);
}
const onEscKeyBtn = (ev) => {
    if (ev.code === 'Escape') {
        console.log('noup');
        instance.close()
            return
        }
        return instance.close()
}
//1 створити прослуховувач при кліку на картинку +
//2 створити функцію яка буде створювати розмітку +
//3 створити функцію, яка буде пушити в ДОМ розмітку +
//4  створити функцію, яка буде перевіряти чи відкрита та закрита модалка 
// і буде вішати прослуховувач на Esc , та знімати його.
