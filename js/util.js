const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export { ESC_KEYCODE, ENTER_KEYCODE, getRandomInteger };
