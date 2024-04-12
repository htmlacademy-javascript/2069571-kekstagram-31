import { isEscDown } from './util';

const bigPictureModal = document.querySelector('.big-picture');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscDown(evt)) {
    evt.preventDefault();
    closeFullPictureModal();
  }
};

function openFullPictureModal() {
  bigPictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeFullPictureModal() {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureCloseElement.addEventListener('click', closeFullPictureModal);


export { openFullPictureModal };

