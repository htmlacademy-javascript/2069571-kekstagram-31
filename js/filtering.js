/* eslint-disable no-console */
const form = document.querySelector('.img-upload__form');
const effectFieldset = form.querySelector('.img-upload__effect-level');
const effectLevelInput = form.querySelector('.effect-level__value');
const effectLevelSlider = form.querySelector('.effect-level__slider');
const editPicture = form.querySelector('.img-upload__preview > img');
const filters = form.querySelectorAll('.effects__radio');

effectFieldset.classList.add('hidden');

const optionsDefault = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
};
const optionsChromeSepia = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
};
const optionsMarvin = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
};
const optionsFobos = {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
  connect: 'lower',
};
const optionsHeat = {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

const allEffects = {
  none: optionsDefault,
  chrome: optionsChromeSepia,
  sepia: optionsChromeSepia,
  marvin: optionsMarvin,
  phobos: optionsFobos,
  heat: optionsHeat,
};

noUiSlider.create(effectLevelSlider, optionsDefault);

const defaultSliderOptions = (effect) => effectLevelSlider.noUiSlider.updateOptions(allEffects[effect]);

const switchEffects = (value) => {
  defaultSliderOptions(value);
  let sliderValue = effectLevelSlider.noUiSlider.get(true);

  effectLevelSlider.noUiSlider.on('update', () => {
    sliderValue = effectLevelInput.value = effectLevelSlider.noUiSlider.get(true);
    effectLevelInput.setAttribute('value', sliderValue);
    switch (value) {
      case 'none':
        editPicture.style.filter = '';
        break;
      case 'chrome':
        editPicture.style.filter = `grayscale(${sliderValue})`;
        break;
      case 'sepia':
        editPicture.style.filter = `sepia(${sliderValue})`;
        break;
      case 'marvin':
        editPicture.style.filter = `invert(${sliderValue}%)`;
        break;
      case 'phobos':
        editPicture.style.filter = `blur(${sliderValue}px)`;
        break;
      case 'heat':
        editPicture.style.filter = `brightness(${sliderValue})`;
        break;
    }
  });
};

filters.forEach((filter) => {
  filter.addEventListener('change', () => {
    if (filter.checked) {
      if (filter.value !== 'none') {
        effectFieldset.classList.remove('hidden');
        switchEffects(filter.value);
      } else {
        effectFieldset.classList.add('hidden');
        effectLevelSlider.noUiSlider.reset();
        editPicture.style.filter = '';
      }
    }
  });
});
