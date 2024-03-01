import plus from "../../public/assets/images/icon-plus.svg";
import minus from "../../public/assets/images/icon-minus.svg";

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const body = accordion.querySelector('.drop-down');
    const img = accordion.querySelector('#img');

    const activeBodies = document.querySelectorAll('.drop-down.active');
    activeBodies.forEach(activeBody => {
      if (activeBody !== body) {
        activeBody.classList.remove('active');
        img.src = plus.src; // Change the image back to plus when collapsing
      }
    });

    body.classList.toggle('active');
    img.src = body.classList.contains('active') ? minus.src : plus.src; // Toggle image based on active class
  });
});