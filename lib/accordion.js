'use strict';

var accordion = document.querySelectorAll('.accordion-item');

var accordionTrg = document.querySelectorAll('.accordion-trigger');

window.addEventListener("load", function () {
    var i = void 0;
    for (i = 0; i < accordion.length; i++) {
        accordion[i].classList.remove('active');
        accordion[i].querySelector(".accordion-trigger").setAttribute('aria-expanded', "false");
    };
});

var i = void 0;

for (i = 0; i < accordionTrg.length; i++) {
    accordionTrg[i].addEventListener("click", function () {
        var accordionItem = this.parentElement;
        accordionItem.classList.toggle('active');
        if (this.getAttribute('aria-expanded') === "false") {
            this.setAttribute('aria-expanded', "true");
        } else {
            this.setAttribute('aria-expanded', "false");
        }
    });
};
