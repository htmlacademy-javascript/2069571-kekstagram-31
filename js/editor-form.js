/* eslint-disable no-console */
import { isEscDown } from './util';
import './form-validation';
import { resetFilter } from './effects';
import './change-scale';
import './send-data-form';

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
  resetFilter();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onCloseEditorFormBtnClick);

  uploadInput.value = '';
}

uploadInput.addEventListener('change', openEditorForm);


export { closeEditorForm };
