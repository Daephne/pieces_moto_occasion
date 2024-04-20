// Sélectionne tous les boutons de défilement précédent
const prevButtons = document.querySelectorAll('.prev');
// Sélectionne tous les boutons de défilement suivant
const nextButtons = document.querySelectorAll('.next');

// Ajoute un écouteur d'événement de clic à chaque bouton de défilement précédent
prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Trouve le conteneur du carrousel parent du bouton cliqué
        const carousel = button.parentElement.querySelector('.carousel');
        // Fait défiler le carrousel vers la gauche (précédent) en ajustant la valeur de défilement
        carousel.scrollLeft -= 100; // ajuste la valeur selon la largeur de ton image et la direction de défilement souhaitée
    });
});

// Ajoute un écouteur d'événement de clic à chaque bouton de défilement suivant
nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Trouve le conteneur du carrousel parent du bouton cliqué
        const carousel = button.parentElement.querySelector('.carousel');
        // Fait défiler le carrousel vers la droite (suivant) en ajustant la valeur de défilement
        carousel.scrollLeft += 100; // ajuste la valeur selon la largeur de ton image et la direction de défilement souhaitée
    });
});
