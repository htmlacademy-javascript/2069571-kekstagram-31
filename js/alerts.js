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

const сloseAlertHandler = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.error') || document.querySelector('.success');
  const closeBtn = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeBtn || isEscDown(evt)) {
    existElement.remove();
    document.body.removeEventListener('click', сloseAlertHandler);
    document.body.removeEventListener('keydown', сloseAlertHandler);
  }
};

const showSendingError = () => {
  const errorTemplate = document.querySelector('#error').content;
  const errorInner = errorTemplate.cloneNode(true);
  const errorContent = errorInner.querySelector('.error');

  document.body.append(errorContent);
  document.body.addEventListener('click', сloseAlertHandler);
  document.body.addEventListener('keydown', сloseAlertHandler);
};

const showSendingSuccess = () => {
  const successTemplate = document.querySelector('#success').content;
  const successInner = successTemplate.cloneNode(true);
  const successContent = successInner.querySelector('.success');

  document.body.append(successContent);

  document.body.addEventListener('click', сloseAlertHandler);
  document.body.addEventListener('keydown', сloseAlertHandler);
};


export { showGettingError, showSendingError, showSendingSuccess };

