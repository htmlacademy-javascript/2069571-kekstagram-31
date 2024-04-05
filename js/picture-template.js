const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

function renderPicturesGallery(array) {
  array.forEach(({ url, description, likes, comments }) => {
    const element = newPictureTemplate.cloneNode(true);
    element.querySelector('.picture > img').src = url;
    element.querySelector('.picture > img').alt = description;
    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(element);
    picturesContainer.appendChild(fragment);
  });
}

export { renderPicturesGallery };
