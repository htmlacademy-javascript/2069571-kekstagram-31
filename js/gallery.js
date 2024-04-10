import './full-screen-picture';
import { renderThumbnails } from './picture-thumbnails';
import { getData } from './data-fetch';
import { showGettingError } from './alerts';
import { setFilter } from './filter';

let photos = [];
const savePhoto = (data) => {
  photos = data;
};

const searchPhoto = (photoID) => photos.find((photo) => photo.id === +(photoID));

const bootstrap = async () => {
  try {
    photos = await getData();
    setFilter(photos);
    renderThumbnails(photos);
    savePhoto(photos);
  } catch (error) {
    showGettingError();
  }
};

bootstrap();


export { searchPhoto };
