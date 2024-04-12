const form = document.querySelector('.img-upload__form');
const controlRang = form.querySelector('.scale__control--value');
const editPictureScale = form.querySelector('.img-upload__preview > img');

const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;

let current = parseInt(controlRang.value, 10);

const onMakePictureSmallerButtonClick = () => {
  if (current > MIN_SCALE) {
    current -= SCALE_STEP;
    controlRang.setAttribute('value', `${current}%`);
    editPictureScale.style.transform = `scale(${current / 100}`;
  }
};

const onMakePictureBiggerButtonClick = () => {
  if (current < MAX_SCALE) {
    current += SCALE_STEP;
    controlRang.setAttribute('value', `${current}%`);
    editPictureScale.style.transform = `scale(${current / 100}`;
  }
};

const resetScale = () => {
  controlRang.setAttribute('value', `${MAX_SCALE}%`);
  editPictureScale.style.transform = `scale(${MAX_SCALE / 100}`;
};

export { onMakePictureSmallerButtonClick, onMakePictureBiggerButtonClick, resetScale };
