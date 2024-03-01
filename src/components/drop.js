const accordions = document.querySelectorAll('.accordion');
const plus = "../../public/assets/images/icon-plus.svg";
const minus = "../../public/assets/images/icon-minus.svg";

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const body = accordion.querySelector('.drop-down');
    const img = accordion.querySelector('#img');

    const activeBodies = document.querySelectorAll('.drop-down.active');
    activeBodies.forEach(activeBody => {
      if (activeBody !== body) {
        activeBody.classList.remove('active');
        const activeAccordion = activeBody.parentElement;
        const activeImg = activeAccordion.querySelector('#img');
        activeImg.src = plus; // Reset all icons to plus when collapsing
      }
    });

    body.classList.toggle('active');
    img.src = body.classList.contains('active') ? minus : plus; // Toggle image based on active class
  });
});