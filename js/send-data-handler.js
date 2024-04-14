import { validate } from './form-validation';
import { sendData } from './data-fetch';
import { showSendingError, showSendingSuccess } from './alerts';
import { closeEditorForm } from './editor-form';

const uploadForm = document.querySelector('.img-upload__form');
const submitButton = uploadForm.querySelector('.img-upload__submit');

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

uploadForm.addEventListener('reset', () => closeEditorForm());

const sendFormData = async (formElem) => {
  const isValid = validate();
  if (isValid) {
    blockSubmitButton();
    try {
      await sendData(new FormData(formElem));
      showSendingSuccess();
      closeEditorForm();
    } catch (error) {
      showSendingError();
    } finally {
      unblockSubmitButton();
    }
  }
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  sendFormData(evt.target);
};

uploadForm.addEventListener('submit', formSubmitHandler);

