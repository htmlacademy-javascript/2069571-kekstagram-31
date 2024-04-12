import { renderComments } from './comments-render';
const bigPictureModal = document.querySelector('.big-picture');

let photos = [];
const savePhoto = (data) => {
  photos = data;
};

const renderFullPicture = (photoID) => {
  const currentPhoto = photos.find((photo) => photo.id === +(photoID));
  bigPictureModal.querySelector('.big-picture__img > img').src = currentPhoto.url;
  bigPictureModal.querySelector('.likes-count').textContent = currentPhoto.likes;
  bigPictureModal.querySelector('.social__comment-total-count').textContent = currentPhoto.comments.length;
  bigPictureModal.querySelector('.social__caption').textContent = currentPhoto.description;

  renderComments(currentPhoto.comments);
};

export { renderFullPicture, savePhoto };
