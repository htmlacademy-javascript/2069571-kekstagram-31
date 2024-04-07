let commentsData = [];
const COUNT_STEP = 5;
let currentCount = 0;
const socialCommentsNode = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const shownCommentsCountHode = document.querySelector('.social__comment-shown-count');
const loadCommentBtn = document.querySelector('.comments-loader');
const commentsFragment = document.createDocumentFragment();

function createCommentTemplate({ avatar, name, message }) {
  const commentTemplate = socialCommentTemplate.cloneNode(true);
  commentTemplate.querySelector('.social__picture').src = avatar;
  commentTemplate.querySelector('.social__picture').alt = name;
  commentTemplate.querySelector('.social__text').textContent = message;
  commentsFragment.appendChild(commentTemplate);
}

function loadMoreComments() {
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
}

function clearComments() {
  currentCount = 0;
  loadCommentBtn.classList.remove('hidden');
  socialCommentsNode.innerHTML = '';
  loadCommentBtn.removeEventListener('click', loadMoreComments);
}

function renderComments(data) {
  commentsData = data;
  clearComments();
  loadMoreComments();

  loadCommentBtn.addEventListener('click', loadMoreComments);
}

export { renderComments };


