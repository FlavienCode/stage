document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.service').forEach(service => {
        service.addEventListener('click', () => {
            const serviceName = service.getAttribute('data-service');
            modalTitle.innerText = serviceName;
            modalDescription.innerText = `Détails supplémentaires sur ${serviceName}...`; // Vous pouvez personnaliser cela avec plus de détails spécifiques
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
