document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(image => image.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    document.getElementById("nextBtn").addEventListener("click", nextImage);
    document.getElementById("prevBtn").addEventListener("click", prevImage);
});


function chargerCSV(chemin) {
    fetch(chemin)
        .then(response => response.text())
        .then(data => {
            // Appel d'une fonction pour traiter les données CSV
            traiterCSV(data);
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors du chargement du fichier CSV :', error);
        });
}
function traiterCSV(data) {
    // Séparer les lignes du fichier CSV
    const lignes = data.split('\n');

    // Parcourir chaque ligne du CSV
    lignes.forEach(ligne => {
        // Diviser la ligne en colonnes
        const colonnes = ligne.split(';');

        // Traiter les colonnes
        const id = colonnes[0];
        const urlPhoto = colonnes[1];
        const nomProduit = colonnes[2];
        const categorie = colonnes[3];
        const prix = colonnes[4];
        const hashtags = colonnes[5];

        // Appeler une fonction pour afficher les produits sur ton site
        afficherProduit(id, urlPhoto, nomProduit, categorie, prix, hashtags);
    });
}
function afficherProduit(id, urlPhoto, nomProduit, categorie, prix, hashtags) {
    // Code pour créer et afficher un produit sur ton site
    console.log(id, urlPhoto, nomProduit, categorie, prix, hashtags);
}
