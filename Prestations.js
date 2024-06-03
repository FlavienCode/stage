document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const span = document.getElementsByClassName("close")[0];

    const serviceDetails = {
        "Réparation de Carrosserie": {
            "description": "Nos services de réparation de carrosserie couvrent tous les aspects, de la réparation des dommages mineurs aux restaurations complètes après un accident. Nous utilisons des techniques de pointe pour garantir que votre véhicule retrouve son état d'origine.",
            "image": "images/reparation de carrosserie.jpg"
        },
        "Peinture Automobile": {
            "description": "Nous proposons des services de peinture automobile de haute qualité, utilisant des produits et des techniques de pointe pour assurer une finition durable et brillante. Que ce soit pour une retouche ou une peinture complète, votre véhicule sera entre de bonnes mains.",
            "image": "images/peintureapres.jpg"
        },
        "Entretien Régulier": {
            "description": "L'entretien régulier de votre véhicule est essentiel pour assurer sa longévité et ses performances. Nous proposons des forfaits d'entretien qui incluent les vidanges, le remplacement des filtres, la vérification des freins, et plus encore.",
            "image": "images/revision.jpg"
        },
        "Débosselage Sans Peinture": {
            "description": "Notre service de débosselage sans peinture répare les petites bosses sans endommager la peinture d'origine du véhicule.",
            "image": "images/debossage.jpg"
        },
        "Polissage et Lustrage": {
            "description": "Des services de polissage et de lustrage pour redonner à votre véhicule un aspect neuf et brillant.",
            "image": "images/lustrage.jpg"
        },
        "Remplacement de Vitres": {
            "description": "Remplacement de tous vitrage sur votre véhicule de manière rapide et efficace, en utilisant des matériaux de haute qualité.",
            "image": "images/vitre.jpg"
        },
        "Changement de Pneus": {
            "description": "Montage de pneus, équilibrage, valve et alignement pour garantir une conduite sûre et confortable.",
            "image": "images/pneus.jpg"
        },
        "Rénovation Phare": {
            "description": "La rénovation des optiques de phare permet de retrouver la transparence d'origine.",
            "image": "images/lavage.jpg"
        },
        "Entretien Climatisation": {
            "description": "Changement du filtre habitacle et entretien de la climatisation pour assurer un confort optimal dans votre véhicule.",
            "image": "images/climatisation.jpg"
        }
    };

    document.querySelectorAll('.service').forEach(service => {
        service.addEventListener('click', () => {
            const serviceName = service.getAttribute('data-service');
            const details = serviceDetails[serviceName];
            modalTitle.innerText = serviceName;
            modalImage.src = details.image;
            modalDescription.innerText = details.description;
            modal.style.display = "block";
        });
    });

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
