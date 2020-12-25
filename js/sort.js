window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let sortButton = document.querySelectorAll('.sort-button');
    let sortArrow = document.querySelectorAll('.sort__arrow');



    document.querySelector('.sort').addEventListener('click', function(e) {
        let target = e.target
        if (target && target.classList.contains('sort-button') || target && target.classList.contains('sort__arrow')) {
            for (let i = 0; i < sortButton.length; i++) {
                if (target == sortButton[i] || target == sortArrow[i]) {
                    sortArrow[i].classList.toggle('_active');
                    break;
                }
            }
        }

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////



let sortPrice = document.querySelector('.sort__price');

sortPrice.addEventListener('click', () => {
    sortPrice.classList.toggle('_property');
    if (sortPrice.classList.contains('_property')) {
        sortList('data-price');
    } else {
        sortListDesc('data-price');
    }
    
})

let sortAge = document.querySelector('.sort__age');

sortAge.addEventListener('click', () => {
    sortPrice.classList.toggle('_property');
    if (sortPrice.classList.contains('_property')) {
        sortList('data-age');
    } else {
        sortListDesc('data-age');
    }
   
})

    
    function sortList(sortType) {
        let items = document.querySelector('.cards__wrapper');
        for (let i = 0; i < items.children.length - 1; i++) {
            for (let j = i; j < items.children.length; j++) {
                if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                    console.log(1);
                    let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                    insertAfter(replacedNode, items.children[i]);
                }
            }
        }
    }
    
    function sortListDesc(sortType) {
        let items = document.querySelector('.cards__wrapper');
        for (let i = 0; i < items.children.length - 1; i++) {
            for (let j = i; j < items.children.length; j++) {
                if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                    console.log(1);
                    let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                    insertAfter(replacedNode, items.children[i]);
                }
            }
        }
    }
    
    
    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }



});