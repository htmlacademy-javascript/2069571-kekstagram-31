import { fillBigPictureCommentsTemplate } from './comments-template';

const bigPictureModal = document.querySelector('.big-picture');

function renderFullPicture({ url, likes, comments, description }) {
  bigPictureModal.querySelector('.big-picture__img > img').src = url;
  bigPictureModal.querySelector('.likes-count').textContent = likes;
  bigPictureModal.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPictureModal.querySelector('.social__caption').textContent = description;

  fillBigPictureCommentsTemplate(comments);

  //временно скрытые блоки
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
}


export { renderFullPicture };

