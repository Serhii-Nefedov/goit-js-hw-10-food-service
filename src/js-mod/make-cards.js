
import cardsTemplate from '../templates/card-markup.hbs';

import menu from '../menu.json'

const markupCards = cardsTemplate(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markupCards);