import { isEscDown } from './util';
const ALERT_SHOW_TIME = 5000;

const showGettingError = () => {
  const errorTemplate = document.querySelector('#data-error').content;
  const errorInner = errorTemplate.cloneNode(true);
  const errorContent = errorInner.querySelector('.data-error');

  document.body.append(errorContent);

  setTimeout(() => {
    errorContent.remove();
  }, ALERT_SHOW_TIME);
};

const closeAlert = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.error') || document.querySelector('.success');
  const closeBtn = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeBtn || isEscDown(evt)) {
    existElement.remove();
    document.body.removeEventListener('click', closeAlert);
    document.body.removeEventListener('keydown', closeAlert);
  }
};

const showSendingError = () => {
  const errorTemplate = document.querySelector('#error').content;
  const errorInner = errorTemplate.cloneNode(true);
  const errorContent = errorInner.querySelector('.error');

  document.body.append(errorContent);
  document.body.addEventListener('click', closeAlert);
  document.body.addEventListener('keydown', closeAlert);
};

const showSendingSuccess = () => {
  const successTemplate = document.querySelector('#success').content;
  const successInner = successTemplate.cloneNode(true);
  const successContent = successInner.querySelector('.success');

  document.body.append(successContent);

  document.body.addEventListener('click', closeAlert);
  document.body.addEventListener('keydown', closeAlert);
};


export { showGettingError, showSendingError, showSendingSuccess, closeAlert };

