const uploadForm = document.querySelector('.img-upload__form');
const hashtagField = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');
const MAX_HASHTAG_COUNT = 5;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

function validateCommentField(value) {
  return value.length <= 140;
}

let errorMessage = '';
const error = () => errorMessage;

function validateHashtagField(value) {
  errorMessage = '';
  const hashtagsString = value.toLowerCase().trim();
  if (!hashtagsString) {
    return true;
  }
  const hashtagsArr = hashtagsString.split(' ');
  const hashtagRegExp = /^#[a-zа-яё0-9]{1,19}$/i;
  const hashtagValueControl = [
    {
      check: hashtagsArr.some((item) => (item[0] !== '#')),
      errorText: 'Хэштег должен начинаться с символа # (решетка).'
    },
    {
      check: hashtagsArr.some((item) => item.length === 1),
      errorText: 'Минимум 2 символа.'
    },
    {
      check: hashtagsArr.some((item) => item.slice(1).includes('#')),
      errorText: 'Хэштеги разделяются пробелами.'
    },
    {
      check: hashtagsArr.some((item, index, arr) => (arr.includes(item, index + 1))),
      errorText: 'Хэштеги не могут повторяться'
    },
    {
      check: hashtagsArr.length > MAX_HASHTAG_COUNT,
      errorText: 'Превышено количество хэштегов, нельзя указать больше 5'
    },
    {
      check: hashtagsArr.some((item) => item.length > 20),
      errorText: 'Максимум 20 символов.'
    },
    {
      check: hashtagsArr.some((item) => !hashtagRegExp.test(item)),
      errorText: 'Хэштег может состоять только из букв и чисел.'
    },
  ];

  if (hashtagsString) {
    return hashtagValueControl.every((item) => {
      const isInvalid = item.check;
      if (isInvalid) {
        errorMessage = item.errorText;
      }
      return !isInvalid;
    });
  }
}
pristine.addValidator(hashtagField, validateHashtagField, error);
pristine.addValidator(commentField, validateCommentField, 'Превышено количество символов, максимум 140 символов.');

const validate = () => pristine.validate();

export { validate };

