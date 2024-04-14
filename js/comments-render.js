let commentsData = [];
const COUNT_STEP = 5;
let currentCount = 0;
const socialCommentsList = document.querySelector('.social__comments');
const socialCommentElement = document.querySelector('.social__comment');
const shownCommentsCountHode = document.querySelector('.social__comment-shown-count');
const loadCommentsBtn = document.querySelector('.comments-loader');
const commentsFragment = document.createDocumentFragment();

const createCommentTemplate = ({ avatar, name, message }) => {
  const commentInner = socialCommentElement.cloneNode(true);
  commentInner.querySelector('.social__picture').src = avatar;
  commentInner.querySelector('.social__picture').alt = name;
  commentInner.querySelector('.social__text').textContent = message;
  commentsFragment.appendChild(commentInner);
};

const onLoadMoreCommentsButtonClick = () => {
  const shownComments = commentsData.slice(currentCount, currentCount + COUNT_STEP);
  const shownCommentsCount = shownComments.length + currentCount;

  shownComments.forEach((comment) => {
    createCommentTemplate(comment);
  });

  socialCommentsList.appendChild(commentsFragment);
  shownCommentsCountHode.textContent = shownCommentsCount;

  if (shownCommentsCount >= commentsData.length) {
    loadCommentsBtn.classList.add('hidden');
  }
  currentCount += COUNT_STEP;
};

const clearComments = () => {
  currentCount = 0;
  loadCommentsBtn.classList.remove('hidden');
  socialCommentsList.innerHTML = '';
  loadCommentsBtn.removeEventListener('click', onLoadMoreCommentsButtonClick);
};

const renderComments = (data) => {
  commentsData = data;
  clearComments();
  onLoadMoreCommentsButtonClick();
  loadCommentsBtn.addEventListener('click', onLoadMoreCommentsButtonClick);
};

export { renderComments };


