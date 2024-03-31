import { getRandomInteger, messages, names } from './utils.js';

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

const photoArray = () => Array.from({ length: getRandomInteger(1, 30) }, createPhotoDescription());

export { photoArray };
