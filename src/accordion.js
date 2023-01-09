const accordion = document.querySelectorAll('.accordion-item');

const accordionTrg = document.querySelectorAll('.accordion-trigger');

window.addEventListener("load", function () {
    let i;
    for (i = 0; i < accordion.length; i++) {
        accordion[i].classList.remove('active');
        accordion[i].querySelector(".accordion-trigger").setAttribute('aria-expanded', "false");
    };
});

let i;

for (i = 0; i < accordionTrg.length; i++) {
    accordionTrg[i].addEventListener("click", function () {
        const accordionItem = this.parentElement;
        accordionItem.classList.toggle('active');
        if (this.getAttribute('aria-expanded') === "false"){
            this.setAttribute('aria-expanded', "true");
        }else{
            this.setAttribute('aria-expanded', "false");
        }
    });
};
