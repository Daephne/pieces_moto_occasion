const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');

prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        const carousel = button.parentElement.querySelector('.carousel');
        carousel.scrollLeft -= 100; // ajuste la valeur selon la largeur de ton image
    });
});

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        const carousel = button.parentElement.querySelector('.carousel');
        carousel.scrollLeft += 100; // ajuste la valeur selon la largeur de ton image
    });
});
