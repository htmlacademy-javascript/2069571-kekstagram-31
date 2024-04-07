import { renderFullPicture } from './full-screen-picture';
import { picturesContainer } from './picture-template';
import { isEscDown } from './util';

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
picturesContainer.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    evt.preventDefault();
    openFullPictureModal();
    renderFullPicture(currentPicture.dataset.photoID);
  }
});

document.querySelector('.big-picture__cancel').addEventListener('click', closeFullPictureModal);
