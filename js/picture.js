import { findElement, isEnterKey, isEscapeKey } from './utils.js';

const modalWindow = findElement(document, '.big-picture'); // само окно
// openWindow = findElement(document,''); // на картинки надо повесить открытие окна
// const openWindow = document.querySelector('.setup-open');
const closeWindow = findElement(modalWindow, '.big-picture__cancel');

const pictureImg = findElement(modalWindow, '.big-picture__img');
const pictureCancel = findElement(modalWindow, '#picture-cancel');

// templatePicture.addEventListener('click', openModal);


const onModalEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal() {
  modalWindow.classList.remove('hidden');
  const body = findElement(document, 'body');
  body.classList.add('modal-open');
  renderPicture();
  modalWindow.addEventListener('keydown', onModalEscKeyDown);
};

function closeModal() {
  modalWindow.classList.add('hidden');
  const body = findElement(document, 'body');
  body.classList.remove('modal-open');
  // надо ли чистить что-то за собой ? анти rendererPicture
  modalWindow.removeEventListener('keydown', onModalEscKeyDown);
};

function renderPicture() {
  // временная штука
  // 3. После открытия окна спрячьте блоки счётчика комментариев.social__comment - count и загрузки новых комментариев.comments - loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.
  const socialComment = find(modalWindow, '.social__comment-count');
  socialComment.classList.add('hidden');
  const commentsLoader = find(modalWindow, '.comments-loader');
  commentsLoader.classList.add('hidden');

  // перерисовка новой картинки
  const img = findElement(pictureImg, 'img');
  // img.src = '';
  img.alt = 'описание';
  const likesCount = findElement(modalWindow, '.likes-count');
  likesCount.textContent = 25;
  const commentsCount = findElement(modalWindow, '.comments-count');
  commentsCount.textContent = 120;
  // const socialComments = findElement(modalWindow, '.social__comments');
};

pictureCancel.addEventListener('click', () => {
  closeModal();
});

pictureCancel.addEventListener('keydown', () => {
  if (isEnterKey(evt)) {
    closeWindow();
  }
});

// Реализовать сценарий просмотра фотографий в полноразмерном режиме.
// В таком режиме пользователь получает несколько дополнительных возможностей:
// детально рассмотреть изображение, поставить «лайк», почитать комментарии, оставленные другими пользователями.
//     Заведите модуль, который будет отвечать за отрисовку окна с полноразмерным изображением.
//     Для отображения окна нужно удалять класс hidden у элемента.big - picture и каждый раз заполнять его данными о конкретной фотографии:
//         Адрес изображения url подставьте как src изображения внутри блока.big - picture__img.
//         Количество лайков likes подставьте как текстовое содержание элемента.likes - count.
//         Количество комментариев comments подставьте как текстовое содержание элемента.comments - count.
//         Список комментариев под фотографией: комментарии должны вставляться в блок.social__comments.Разметка каждого комментария должна выглядеть так:
// <li class="social__comment">
//   <img
//     class="social__picture"
//     src="{{аватар}}"
//     alt="{{имя комментатора}}"
//     width="35" height="35">
//     <p class="social__text">{{ текст комментария }}</p>
// </li>
//         Описание фотографии description вставьте строкой в блок.social__caption.
//     После открытия окна спрячьте блоки счётчика комментариев.social__comment - count и загрузки новых комментариев.comments - loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.
//     После открытия окна добавьте тегу < body > класс modal - open, чтобы контейнер с фотографиями позади не прокручивался при скролле.При закрытии окна не забудьте удалить этот класс.
//     Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
//     Подключите модуль в проект.
// Как связать модули миниатюр и полноразмерного режима ?
//   Задача не имеет одного верного решения, поэтому будет правильным
// как использование третьего модуля для связки двух других,
// так и импорт модуля полноразмерных изображений в модуль миниатюр и дальнейшая работа с интерфейсом этого модуля,
// addEventListener и замыканиями.Последнее решение похоже на демонстрацию по учебному проекту.
// А первое — с третьим модулем — более сложное из - за отсутствия примера, но самостоятельное.
// В качестве третьего модуля можно выбрать точку входа, а можно завести отдельный модуль, например «Галерея». Решение за вами.

const picture = findElement(document, 'picture');
openModal();
