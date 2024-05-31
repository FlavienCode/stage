document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage1 = document.getElementById("modalImage1");
    const modalImage2 = document.getElementById("modalImage2");
    const modalImage3 = document.getElementById("modalImage3");
    const modalDescription = document.getElementById("modalDescription");
    const span = document.getElementsByClassName("close")[0];

    const serviceDetails = {
        "Réparation de Carrosserie": {
            "description": "Nos services de réparation de carrosserie couvrent tous les aspects, de la réparation des dommages mineurs aux restaurations complètes après un accident. Nous utilisons des techniques de pointe pour garantir que votre véhicule retrouve son état d'origine.",
            "images": ["images/Carroserie1.jpg", "images/Carroserie2.jpg", "images/Carroserie3.jpg"]
        },
        "Peinture Automobile": {
            "description": "Nous proposons des services de peinture automobile de haute qualité, utilisant des produits et des techniques de pointe pour assurer une finition durable et brillante. Que ce soit pour une retouche ou une peinture complète, votre véhicule sera entre de bonnes mains.",
            "images": ["images/painter1.jpg", "images/painter2.jpg", "images/painter3.jpg"]
        },
        "Entretien Régulier": {
            "description": "L'entretien régulier de votre véhicule est essentiel pour assurer sa longévité et ses performances. Nous proposons des forfaits d'entretien qui incluent les vidanges, le remplacement des filtres, la vérification des freins, et plus encore.",
            "images": ["images/entretien1.jpg", "images/entretien2.jpg", "images/entretien3.jpg"]
        },
        // Ajoutez les détails pour les autres services ici
    };

    document.querySelectorAll('.service').forEach(service => {
        service.addEventListener('click', () => {
            const serviceName = service.getAttribute('data-service');
            const details = serviceDetails[serviceName];
            modalTitle.innerText = serviceName;
            modalImage1.src = details.images[0];
            modalImage2.src = details.images[1];
            modalImage3.src = details.images[2];
            modalDescription.innerText = details.description;
            modal.style.display = "block";
            // Code pour afficher le premier slide
            showSlides(1);
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

    // Carousel script
    let slideIndex = 1;

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("carousel-slide");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    // Show first slide initially
    showSlides(slideIndex);

    // Next/previous controls
    document.querySelector('.next').addEventListener('click', () => {
        showSlides(slideIndex += 1);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        showSlides(slideIndex -= 1);
    });
});


    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Logique pour envoyer les données du formulaire à un serveur (via fetch/AJAX)
        alert(`Merci ${name}, nous avons bien reçu votre message !`);
        modal.style.display = "none";
    });


