/* eslint-disable no-console */
import { isEscDown } from './util';
import './form-validation';
import { resetFilter } from './effects';
import './change-scale';
import './send-data-form';
import { resetScale } from './change-scale';

const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const closeEditorFormBtn = form.querySelector('.img-upload__cancel');
const photoEditorForm = form.querySelector('.img-upload__overlay');
const preview = form.querySelector('.img-upload__preview > img');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const effectsForPreview = form.querySelectorAll('.effects__preview');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

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

  onFileInputChange();
}

function closeEditorForm() {
  form.reset();
  photoEditorForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetFilter();
  resetScale();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onCloseEditorFormBtnClick);

  uploadInput.value = '';
}

uploadInput.addEventListener('change', openEditorForm);

function onFileInputChange() {
  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const url = URL.createObjectURL(file);
    preview.src = url;
    effectsForPreview.forEach((item) => {
      item.style.backgroundImage = `url(${url})`;
    });
  }
}

export { closeEditorForm };
