document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-container img');

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const currentSrc = image.src;
            const originalSrc = image.getAttribute('data-original-src') || currentSrc;
            const altSrc = image.getAttribute('data-alt-src');

            if (image.classList.contains('active')) {
                image.src = originalSrc;
                image.classList.remove('active');
            } else {
                image.setAttribute('data-original-src', currentSrc);
                image.src = altSrc;
                image.classList.add('active');
            }
        });
    });
});
