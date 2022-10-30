import { galleryItems } from './gallery-items.js';

//1 створити прослуховувач при кліку на картинку +
//2 створити функцію яка буде створювати розмітку +
//3 створити функцію, яка буде пушити в ДОМ розмітку +
//4  створити функцію, яка буде перевіряти чи відкрита та закрита модалка 
// і буде вішати прослуховувач на Esc , та знімати його.


let instance = '';
const gallery = document.querySelector('.gallery')
const modalClickList = gallery.addEventListener('click',onModalWindowOpened)

function markup() {
   return galleryItems.map(({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('')
}
function onGetStartGalleryImg() {
    gallery.insertAdjacentHTML('beforeend',markup())
}
onGetStartGalleryImg()

function onModalWindowOpened(ev) {
    ev.preventDefault()
    if (ev.target.nodeName !== 'IMG') {
        return;
    };
    instance = basicLightbox.create(`<img src="${ev.target.dataset.source}">`);
    instance.show();
    document.addEventListener('keyup',onCloseToEsc)
}
function onCloseToEsc(ev) {
    if (ev.code !== 'Escape') {
        return;
    }
    console.log('tap');
    instance.close(()=> document.removeEventListener('keyup',onCloseToEsc))

}
