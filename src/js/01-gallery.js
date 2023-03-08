import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryBoxRef = document.querySelector('.gallery');
const galleryCard = createGalleryCard(galleryItems);
galleryBoxRef.insertAdjacentHTML('afterbegin', galleryCard);

function createGalleryCard(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item"
	  href="${original}">
	  <img class="gallery__image"
	  src="${preview}" alt="${description}" />
	</a>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
