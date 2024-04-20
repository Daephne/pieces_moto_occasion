const slide = ["https://drive.google.com/thumbnail?id=1fJkQyc3HcQ1-tlbPuq4KzDZIvSGLKCbG", "https://drive.google.com/thumbnail?id=1M2fcywvc-5Pz9kRB9rL1MJ_tTQlEIMyh", "https://drive.google.com/thumbnail?id=1fJkQyc3HcQ1-tlbPuq4KzDZIvSGLKCbG"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}




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
