const NAMES = ['Таня', 'Рома', 'Лена', 'Коля', 'Алиса', 'Вика', 'Антон', 'Арсений', 'Инна'];
const MESSAGES = ['Всё отлично!', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.', 'В целом всё неплохо. Но не всё.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];
const DESCRIPTIONS = ['Фотка с отдыха на море', 'Красивый закат', 'В Третьяковской галерее', 'В зоопарке', 'Южная сторона Эльбруса', 'Прогулка на велосипедах',];

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const MAX_PHOTO_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const COMMENTS_COUNT = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);

const getId = (maxCount) => {
  const idArr = [];
  while (idArr.length < maxCount) {
    const randomNumber = getRandomInteger(1, 25);
    let found = false;
    for (let i = 0; i < idArr.length; i++) {
      if (idArr[i] === randomNumber) {
        found = true;
        break;
      }
    }
    if (!found) {
      idArr[idArr.length] = randomNumber;
    }
  }
  return idArr;
};

const photosID = getId(MAX_PHOTO_COUNT); //запись массива с айдишниками для фото в переменную
const commentsID = getId(MAX_PHOTO_COUNT); //запись массива с айдишниками для url фото в переменную

const commentID = () => (~~(Math.random() * 1e8)).toString(10); //ID для комментариев, любое уникальное число, диапазон значений отстутсвует, т.к. заранее неизвестно количество комментариев

const getRundomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const createComment = () => ({
  id: commentID(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRundomArrayElement(MESSAGES),
  name: getRundomArrayElement(NAMES),
});


const createPhoto = () => ({
  id: photosID.shift(),
  url: `photos/${commentsID.shift()}.jpg`,
  description: getRundomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: COMMENTS_COUNT }, createComment),
});

const photosArray = Array.from({ length: MAX_PHOTO_COUNT }, createPhoto);

// eslint-disable-next-line no-console
console.log(photosArray);
