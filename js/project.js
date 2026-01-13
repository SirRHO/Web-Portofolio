const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');

// Ambil semua link gambar di carousel
const carouselLinks = document.querySelectorAll('#projectCarousel a');

carouselLinks.forEach(link => {
link.addEventListener('click', function() {
    lightboxImage.src = this.href; // set image modal sesuai yang diklik
});
});

window.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.project-detail-content');
    const body = document.querySelector('body');

    setTimeout(() => {
        content.classList.add('visible');
        body.classList.add('visible-all');

        // Setelah animasi selesai (0.8s sesuai CSS)
        setTimeout(() => {
            content.style.overflow = 'visible';
        }, 800);
    }, 100);
});

const imageModal = document.getElementById('imageModal');

    imageModal.addEventListener('show.bs.modal', function (event) {
        const trigger = event.relatedTarget;
        const imgSrc = trigger.getAttribute('data-img');
        const modalImage = imageModal.querySelector('#modalImage');

        modalImage.src = imgSrc;
    });



