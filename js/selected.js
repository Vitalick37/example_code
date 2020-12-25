window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let cardSelected = document.querySelectorAll('.card__selected'),
        cardSelectedAdd = document.querySelectorAll('.card__selected-add'),
        cardSelectedClose = document.querySelectorAll('.card__selected-close');

    cardSelected.forEach((item, i) => item.addEventListener('click', () => {
        cardSelectedAdd[i].classList.toggle('show');
    }));
    cardSelectedClose.forEach((item, i) => item.addEventListener('click', () => {
        if (cardSelectedAdd[i].classList.contains('show')) {
            cardSelectedAdd[i].classList.remove('show');
        }
    }));


});