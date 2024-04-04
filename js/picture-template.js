/* eslint-disable no-console */
import { createPhotos } from './data';

const photos = createPhotos();
const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

function createPictureElement(pic) {
  const element = newPictureTemplate.cloneNode(true);
  element.querySelector('.picture > img').src = pic.url;
  element.querySelector('.picture > img').alt = pic.description;
  element.querySelector('.picture__likes').textContent = pic.likes;
  element.querySelector('.picture__comments').textContent = pic.comments.length;
  fragment.appendChild(element);
  picturesContainer.appendChild(fragment);
}

photos.forEach((element) => {
  createPictureElement(element);
});

export { picturesContainer };
