import { renderThumbnails } from './picture-thumbnails';
import { savePhoto } from './render-full-picture';
import { getData } from './data-fetch';
import { showGettingError } from './alerts';
import { setFilter } from './filter';
import './editor-form';

const openBigPhoto = (dataPhotos) => {
  savePhoto(dataPhotos);
};

const bootstrap = async () => {
  try {
    const photos = await getData();
    setFilter(photos);
    renderThumbnails(photos, openBigPhoto(photos));
  } catch (error) {
    showGettingError();
  }
};

bootstrap();
