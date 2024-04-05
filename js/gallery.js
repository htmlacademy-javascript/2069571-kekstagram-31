import { createPhotos } from './data';
import { renderFullPicture } from './full-screen-picture';
import { renderPicturesGallery } from './picture-template';
import { isEscDown } from './util';

const photos = createPhotos();
const gallery = renderPicturesGallery(photos);
const bigPictureModal = document.querySelector('.big-picture');

const onDocumentKeydown = (evt) => {
  if (isEscDown(evt)) {
    evt.preventDefault();
    closeFullPictureModal();
  }
};

//открывает модальное окно
function openFullPictureModal() {
  bigPictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

//закрывает модальное окно
function closeFullPictureModal() {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

//обработчик для полноэкранного показа фото
const picturesList = document.querySelectorAll('.picture');

for (let i = 0; i < picturesList.length; i++) {
  picturesList[i].addEventListener('click', () => {
    renderFullPicture(photos[i]);
    openFullPictureModal();
  });
}

document.querySelector('.big-picture__cancel').addEventListener('click', closeFullPictureModal);

export { gallery };
