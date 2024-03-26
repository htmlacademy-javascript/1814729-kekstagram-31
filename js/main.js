const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const messages = ['Всё отлично!', 'В целом всё неплохо.', 'Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент ?'];
const names = ['Майра', 'Марс', 'Куся', 'Бэлла', 'Сэм', 'Бэтти', 'Арчи', 'Ричи', 'Чебурашка', 'Пашка'];

const createComment = () => {
  let id = 1;

  return () => {
    const comment = {};
    const indexOfMessage = getRandomInteger(0, messages.length - 1);
    comment.id = id;
    comment.avatar = `img/avatar-${getRandomInteger(1, 6)}.svg`;
    comment.message = messages[indexOfMessage];
    comment.name = names[getRandomInteger(0, names.length - 1)];
    id++;
    return comment;
  };
};

const createPhotoDescription = () => {
  let id = 1;
  return () => {
    const photo = {};
    const likesCount = getRandomInteger(15, 200);
    photo.id = id;
    photo.url = `photos/${id}.jpg`;
    photo.description = `Это фотография №${id}`;
    photo.likes = likesCount;
    photo.comments = Array.from({ length: getRandomInteger(1, 30) }, createComment());
    id++;
    return photo;
  };
};

const photoArray = Array.from({ length: getRandomInteger(1, 30) }, createPhotoDescription());

console.log(photoArray);
