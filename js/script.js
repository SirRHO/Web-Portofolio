const wrapper = document.querySelector('.content-wrapper');
const navbarHeight = 70; // samakan dengan CSS

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (!target) return;

        const targetPosition =
            target.offsetTop - wrapper.offsetTop - navbarHeight;

        wrapper.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.collapse-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active'); // Untuk rotate icon
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

function showText(type, button) {
    const textA = document.getElementById('text-a');
    const textB = document.getElementById('text-b');
    const textC = document.getElementById('text-c');

    // sembunyikan semua
    textA.classList.add('d-none');
    textB.classList.add('d-none');
    textC.classList.add('d-none');

    // hapus animasi visible dari semua
    textA.classList.remove('visible');
    textB.classList.remove('visible');
    textC.classList.remove('visible');

    // reset tombol active
    document.querySelectorAll('.custom-btn').forEach(btn => btn.classList.remove('active'));

    // tampilkan div sesuai type
    if (type === 'a') {
        textA.classList.remove('d-none');
        textA.classList.add('visible');
    } else if (type === 'b') {
        textB.classList.remove('d-none');
        textB.classList.add('visible');
    } else if (type === 'c') {
        textC.classList.remove('d-none');
        textC.classList.add('visible');
    }

    // set tombol yang diklik aktif
    button.classList.add('active');
}

// Animasi awal page
window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.content-wrapper');
    wrapper.classList.add('visible'); // animasi section

    // tampilkan default Project
    const projects = document.getElementById('text-a');
    projects.classList.remove('d-none');
    projects.classList.add('visible');
    document.querySelector('.custom-btn').classList.add('active');
});

document.querySelectorAll('[data-bs-target="#imageModal"]').forEach(img => {
    img.addEventListener('click', function () {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = this.getAttribute('data-img');
    });
});




