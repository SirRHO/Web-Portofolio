// Smooth scroll pakai wrapper
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

// Collapse button
document.querySelectorAll('.collapse-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const content = btn.nextElementSibling;
        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});

// Switch text project
function showText(type, button) {
    const textA = document.getElementById('text-a');
    const textB = document.getElementById('text-b');
    const textC = document.getElementById('text-c');

    [textA, textB, textC].forEach(el => {
        el.classList.add('d-none');
        el.classList.remove('visible');
    });

    document.querySelectorAll('.custom-btn')
        .forEach(btn => btn.classList.remove('active'));

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

    button.classList.add('active');
}

// Animasi awal page + default project
window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.content-wrapper');
    const navbar = document.querySelector('.navbar');

    if (wrapper) wrapper.classList.add('visible');

    const projects = document.getElementById('text-a');
    if (projects) {
        projects.classList.remove('d-none');
        projects.classList.add('visible');
    }

    const firstBtn = document.querySelector('.custom-btn');
    if (firstBtn) firstBtn.classList.add('active');

    // === NAVBAR SCROLL FIX ===
    if (!wrapper || !navbar) return;

    wrapper.addEventListener('scroll', () => {
        if (wrapper.scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Modal image
document.querySelectorAll('[data-bs-target="#imageModal"]').forEach(img => {
    img.addEventListener('click', function () {
        const modalImage = document.getElementById('modalImage');
        if (modalImage) {
            modalImage.src = this.getAttribute('data-img');
        }
    });
});
