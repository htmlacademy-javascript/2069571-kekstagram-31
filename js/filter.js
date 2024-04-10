import { debounce } from './util';
import { renderThumbnails } from './picture-thumbnails';
const filterList = document.querySelector('.img-filters');

const debounceRender = debounce(renderThumbnails);

const ACTIVE_CLASS = 'img-filters__button--active';

const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};
const MAX_PHOTO_COUNT = 10;

let currentFilter = FILTER.default;
let photos = [];

function onFilterChange(evt) {
  const targetBtn = evt.target;
  const activeBtn = document.querySelector(`.${ACTIVE_CLASS}`);

  if (!targetBtn.matches('button')) {
    return;
  }
  if (targetBtn === activeBtn) {
    return;
  }
  activeBtn.classList.toggle(ACTIVE_CLASS);
  targetBtn.classList.toggle(ACTIVE_CLASS);

  currentFilter = targetBtn.getAttribute('id');

  applyFilter();
}

function applyFilter() {
  let filteredPhotos = [];
  switch (currentFilter) {
    case FILTER.default:
      filteredPhotos = photos;
      break;
    case FILTER.random:
      filteredPhotos = photos.toSorted(() => 0.5 - Math.random()).slice(0, MAX_PHOTO_COUNT);
      break;
    case FILTER.discussed:
      filteredPhotos = photos.toSorted((a, b) => b.comments.length - a.comments.length);
      break;
  }
  debounceRender(filteredPhotos);
}

const setFilter = (data) => {
  filterList.classList.remove('.img-filters--inactive');
  filterList.addEventListener('click', onFilterChange);
  photos = data;
};

export { setFilter };
