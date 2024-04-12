/* eslint-disable no-console */
import { isEscDown } from './util';
import { resetFilter } from './effects';
import { unvalidate } from './form-validation';
import { onMakePictureSmallerButtonClick, onMakePictureBiggerButtonClick, resetScale } from './change-scale';
import './send-data-handler';
import { onFileInputChange } from './loading-new-photo';

const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const closeEditorFormBtn = form.querySelector('.img-upload__cancel');
const photoEditorForm = form.querySelector('.img-upload__overlay');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const smallerBtn = form.querySelector('.scale__control--smaller');
const biggerBtn = form.querySelector('.scale__control--bigger');

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

function closeEditorForm() {
  form.reset();
  photoEditorForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetFilter();
  resetScale();
  unvalidate();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onCloseEditorFormBtnClick);

  uploadInput.value = '';
}

const onOpenEditorFormClick = () => {
  photoEditorForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeEditorFormBtn.addEventListener('click', onCloseEditorFormBtnClick);
  document.addEventListener('keydown', onDocumentKeydown);

  onFileInputChange();
};

uploadInput.addEventListener('change', onOpenEditorFormClick);
smallerBtn.addEventListener('click', onMakePictureSmallerButtonClick);
biggerBtn.addEventListener('click', onMakePictureBiggerButtonClick);

export { closeEditorForm };
