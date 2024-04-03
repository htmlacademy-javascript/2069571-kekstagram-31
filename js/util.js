const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(min + Math.random() * (max + 1 - min));
};

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

const getRundomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

export { getRandomInteger, getId, getRundomArrayElement };
