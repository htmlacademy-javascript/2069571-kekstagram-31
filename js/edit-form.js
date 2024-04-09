/* eslint-disable no-console */
import { isEscDown } from './util';
import './form-validation';
import './filtering';

const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const closeEditorFormBtn = form.querySelector('.img-upload__cancel');
const photoEditorForm = form.querySelector('.img-upload__overlay');

const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');

const onCloseEditorFormBtnClick = () => closeEditorForm();

const onDocumentKeydown = (evt) => {
  if (isEscDown(evt)) {
    evt.preventDefault();
    if (document.activeElement === hashtagField || document.activeElement === commentField) {
      evt.stopPropagation();
    } else {
      closeEditorForm();
    }
  }
};

function openEditorForm() {
  photoEditorForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeEditorFormBtn.addEventListener('click', onCloseEditorFormBtnClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeEditorForm() {
  photoEditorForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onCloseEditorFormBtnClick);

  uploadInput.value = '';
}
uploadInput.addEventListener('change', openEditorForm);

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
