/**
 * Created by daf on 11.11.2016.
 * Многие сервисы, такие как ВК, Twitter, Telegram позволяют занимать унивальные имена пользователей.
 * Очень часто пользователи заполняя формы на сайте, вставляют не стандартные ссылки на свои профили в соц.сетях.
 * Клиент выполняет GET запрос с параметром Query: ` ?username` в разных форматах.
 * Задача: привести все ссылки к единому формату, а именно к виду ` @username`.
 * В случае если в url находится некорретная строка, необходимо вывести `Invalid username`
 */

const getUserName = (url) => {
  let result = 'Invalid username';
  if (isUrlWrong(url)) {
    return result;
  }
  result = '1';
  return result;
};

const isUrlWrong = (url) => {
  "use strict";
  return !!((!url) ||
  (url.length === 0));
};

export default getUserName;
