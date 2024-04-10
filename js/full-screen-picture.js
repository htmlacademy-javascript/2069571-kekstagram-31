import { renderComments } from './comments-render';
import { isEscDown } from './util';
const bigPictureModal = document.querySelector('.big-picture');

function renderFullPicture(currentPhoto) {
  bigPictureModal.querySelector('.big-picture__img > img').src = currentPhoto.url;
  bigPictureModal.querySelector('.likes-count').textContent = currentPhoto.likes;
  bigPictureModal.querySelector('.social__comment-total-count').textContent = currentPhoto.comments.length;
  bigPictureModal.querySelector('.social__caption').textContent = currentPhoto.description;

  renderComments(currentPhoto.comments);
}

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

document.querySelector('.big-picture__cancel').addEventListener('click', closeFullPictureModal);


export { renderFullPicture, openFullPictureModal };

