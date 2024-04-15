// Récupérer le bouton du mode nuit
var nightModeButton = document.getElementById("night-mode-btn");

// Ajouter un gestionnaire d'événement pour le clic sur le bouton du mode nuit
nightModeButton.addEventListener("click", function() {
    // Basculer entre les classes dark-mode et light-mode sur le body
    document.body.classList.toggle("dark-mode");
    
    // Basculer entre les styles du bouton Mode Nuit en fonction du mode
    nightModeButton.classList.toggle("light-mode");
});

// Attendre que le DOM soit entièrement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez tous les liens dans le header
    const headerLinks = document.querySelectorAll('.header-nav ul li a');

    // Parcours des liens pour ajouter un écouteur d'événements à chacun
    headerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Empêcher le comportement par défaut du lien (chargement de la page)
            event.preventDefault();
            
            // Récupérer l'URL de la page vers laquelle le lien pointe
            const href = this.getAttribute('href');
            
            // Appliquer une classe pour la transition en douceur
            document.body.classList.add('page-transition');
            
            // Attendre une courte période pour que l'animation se déroule
            setTimeout(() => {
                // Rediriger vers la nouvelle page
                window.location.href = href;
            }, 500); // Réglage de la durée de la transition en millisecondes
        });
    });
});



