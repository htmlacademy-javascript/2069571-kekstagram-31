const socialCommentTemplate = document.querySelector('.social__comment');
const fragmentComment = document.createDocumentFragment();

function createCommentTemplate({ avatar, name, message }) {
  const commentTemplate = socialCommentTemplate.cloneNode(true);

  commentTemplate.querySelector('.social__picture').src = avatar;
  commentTemplate.querySelector('.social__picture').alt = name;
  commentTemplate.querySelector('.social__text').innerHTML = '';
  commentTemplate.querySelector('.social__text').textContent = message;
  return commentTemplate;
}

function fillBigPictureCommentsTemplate(commentsData) {
  commentsData.forEach((item) => {
    const commentsTempalte = createCommentTemplate(item);
    fragmentComment.appendChild(commentsTempalte);
  });
  document.querySelector('.social__comments').appendChild(fragmentComment);
}

export { fillBigPictureCommentsTemplate };


