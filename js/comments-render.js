let commentsData = [];
const COUNT_STEP = 5;
let currentCount = 0;
const socialCommentsNode = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const shownCommentsCountHode = document.querySelector('.social__comment-shown-count');
const loadCommentBtn = document.querySelector('.comments-loader');
const commentsFragment = document.createDocumentFragment();

const createCommentTemplate = ({ avatar, name, message }) => {
  const commentTemplate = socialCommentTemplate.cloneNode(true);
  commentTemplate.querySelector('.social__picture').src = avatar;
  commentTemplate.querySelector('.social__picture').alt = name;
  commentTemplate.querySelector('.social__text').textContent = message;
  commentsFragment.appendChild(commentTemplate);
};

const onLoadMoreCommentsButtonClick = () => {
  const shownComments = commentsData.slice(currentCount, currentCount + COUNT_STEP);
  const shownCommentsCount = shownComments.length + currentCount;

  shownComments.forEach((comment) => {
    createCommentTemplate(comment);
  });

  socialCommentsNode.appendChild(commentsFragment);
  shownCommentsCountHode.textContent = shownCommentsCount;

  if (shownCommentsCount >= commentsData.length) {
    loadCommentBtn.classList.add('hidden');
  }
  currentCount += COUNT_STEP;
};

const clearComments = () => {
  currentCount = 0;
  loadCommentBtn.classList.remove('hidden');
  socialCommentsNode.innerHTML = '';
  loadCommentBtn.removeEventListener('click', onLoadMoreCommentsButtonClick);
};

const renderComments = (data) => {
  commentsData = data;
  clearComments();
  onLoadMoreCommentsButtonClick();
  loadCommentBtn.addEventListener('click', onLoadMoreCommentsButtonClick);
};

export { renderComments };


