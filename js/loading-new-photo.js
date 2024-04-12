const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const preview = form.querySelector('.img-upload__preview > img');
const effectsForPreview = form.querySelectorAll('.effects__preview');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const onFileInputChange = () => {
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
};

export { onFileInputChange };
