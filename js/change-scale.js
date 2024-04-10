const form = document.querySelector('.img-upload__form');
const smallerBtn = form.querySelector('.scale__control--smaller');
const biggerBtn = form.querySelector('.scale__control--bigger');
const controlRang = form.querySelector('.scale__control--value');
const editPictureScale = form.querySelector('.img-upload__preview > img');

const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;

let current = parseInt(controlRang.value, 10);

function makePictureSmaller() {
  if (current > MIN_SCALE) {
    current -= SCALE_STEP;
    controlRang.setAttribute('value', `${current}%`);
    editPictureScale.style.transform = `scale(${current / 100}`;
  }
}

function makePictureBigger() {
  if (current < MAX_SCALE) {
    current += SCALE_STEP;
    controlRang.setAttribute('value', `${current}%`);
    editPictureScale.style.transform = `scale(${current / 100}`;
  }
}

smallerBtn.addEventListener('click', makePictureSmaller);
biggerBtn.addEventListener('click', makePictureBigger);
