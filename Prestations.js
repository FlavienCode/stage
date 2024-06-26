document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const span = document.getElementsByClassName("close")[0];

    const serviceDetails = {
        "Réparation de Carrosserie": {
            "description": "Nos services de réparation de carrosserie couvrent tous les aspects, de la réparation des dommages mineurs aux restaurations complètes . Nous utilisons des techniques de pointe et des matériaux de haute qualité pour garantir que votre véhicule retrouve son état d'origine après un accident. Nos techniciens qualifiés évaluent les dommages et procèdent à des réparations efficaces, qu'il s'agisse de petites éraflures, de bosses ou de réparations structurelles majeures.",
            "image": "images/CARRO2.jpg"
        },
        "Peinture Automobile": {
            "description": "Nous proposons des services de peinture carrosserie de haute qualité, utilisant des produits et des techniques de pointe pour assurer une finition durable. Que ce soit pour une retouche ou une peinture complète, votre véhicule sera entre de bonnes mains. Nous offrons également des options de peinture personnalisées pour répondre à vos préférences esthétiques, tout en assurant une correspondance parfaite des couleurs avec la teinte d'origine.",
            "image": "images/peintureapres.jpg"
        },
        "Entretien Régulier": {
            "description": "L'entretien régulier de votre véhicule est essentiel pour assurer sa longévité et ses performances. Le remplacement des filtres, la vérification des freins, la rotation des pneus et plus encore. Nos services d'entretien préventif permettent de détecter et de corriger les problèmes potentiels avant qu'ils ne deviennent des réparations coûteuses.",
            "image": "images/entretien.jpg"
        },
        "Débosselage Sans Peinture": {
            "description": "Notre service de débosselage sans peinture (DSP) répare les petites bosses et les impacts sans endommager la peinture d'origine du véhicule. Cette technique innovante permet de maintenir l'intégrité de la peinture tout en éliminant les imperfections de la carrosserie. Idéale pour les petites bosses causées par la grêle ou les portes de parking.",
            "image": "images/debosselageapres.jpg"
        },
        "Polissage et Lustrage": {
            "description": "Nos services de polissage et de lustrage redonnent à votre véhicule un aspect neuf et brillant. Le polissage élimine les rayures superficielles et les imperfections de la peinture, tandis que le lustrage applique une couche protectrice pour un éclat durable. Nous utilisons des produits de haute qualité pour garantir un résultat optimal.",
            "image": "images/lustrage1.jpg"
        },
        "Remplacement de Vitres": {
            "description": "Nous effectuons le remplacement de tous les vitrages de votre véhicule de manière rapide et efficace, en utilisant des matériaux de haute qualité. Que ce soit pour un pare-brise fissuré, une vitre latérale endommagée ou une lunette arrière brisée, nous assurons un service professionnel pour votre sécurité et votre confort.",
            "image": "images/parebrise2.jpg"
        },
        "Changement de Pneus": {
            "description": "Notre service de changement de pneus comprend le montage, l'équilibrage, le remplacement des valves et l'alignement des roues pour garantir une conduite sûre et confortable. Nous offrons une large gamme de pneus adaptés à tous les types de véhicules et aux différentes conditions de conduite.",
            "image": "images/roue22.jpeg"
        },
        "Rénovation Phare": {
            "description": "La rénovation des optiques de phare permet de retrouver la transparence d'origine et d'améliorer la visibilité nocturne. Nos techniciens utilisent des produits et des techniques spécialisés pour éliminer l'opacité et les rayures des phares, assurant ainsi un éclairage optimal et une apparence comme neuve.",
            "image": "images/renovation phare 2.jpg"
        },
        "Entretien Climatisation": {
            "description": "L'entretien de la climatisation comprend le changement du filtre habitacle, la recharge du gaz réfrigérant et la vérification du bon fonctionnement du système. Ces opérations garantissent un confort optimal dans votre véhicule et prolongent la durée de vie de votre climatisation. Un système de climatisation bien entretenu assure un air frais et pur à l'intérieur de votre voiture.",
            "image": "images/climatisation 2.jpg"
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
