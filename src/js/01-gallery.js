// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

//1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const galleryRef = document.querySelector('.gallery');
function createMarkup({ preview, original, description}){
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
};
const markup = galleryItems.map(createMarkup).join('');
galleryRef.insertAdjacentHTML('afterbegin', markup);

let lightbox = new SimpleLightbox('.gallery a');
//console.dir(lightbox);
lightbox.defaultOptions.captionDelay = 250;
lightbox.defaultOptions.captionsData = 'Alt';
