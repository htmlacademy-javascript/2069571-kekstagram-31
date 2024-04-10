import { renderComments } from './comments-render';
import { isEscDown } from './util';
import { searchPhoto } from './gallery';

const bigPictureModal = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures');

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

//обработчик для полноэкранного показа фото
picturesContainer.addEventListener('click', (evt) => {
  const currentPictureTag = evt.target.closest('.picture');

  if (currentPictureTag) {
    evt.preventDefault();
    openFullPictureModal();
    const currentPicture = searchPhoto(currentPictureTag.dataset.photoID);

    renderFullPicture(currentPicture);
  }
});

document.querySelector('.big-picture__cancel').addEventListener('click', closeFullPictureModal);


export { renderFullPicture };

