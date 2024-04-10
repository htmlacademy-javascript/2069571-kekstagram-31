import './full-screen-picture';
import { renderThumbnails } from './picture-template';
import { getData } from './data-fetch';
import { showGettingError } from './alerts';

let photos = [];
const savePhoto = (data) => {
  photos = data;
};

const searchPhoto = (photoID) => photos.find((photo) => photo.id === +(photoID));

const bootstrap = async () => {
  try {
    photos = await getData();
    renderThumbnails(photos);
    savePhoto(photos);
  } catch (error) {
    showGettingError();
  }
};

bootstrap();


export { searchPhoto };
