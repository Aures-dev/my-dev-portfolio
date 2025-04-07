// Scripts


// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
    });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert('Merci pour votre message ! Je vous répondrai dès que possible.');
    contactForm.reset();
});

// Custom cursor effect
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a, button, .clickable');

let posX = 0, posY = 0;
let mouseX = 0, mouseY = 0;

// Smoothing factor (0 < speed < 1)
const speed = 0.1;

function animate() {
    // Calculate distance from cursor to mouse
    let distX = mouseX - posX;
    let distY = mouseY - posY;

    // Ease out the movement
    posX += distX * speed;
    posY += distY * speed;

    // Apply transforms
    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
    cursorFollower.style.left = `${posX}px`;
    cursorFollower.style.top = `${posY}px`;

    requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');

        // Special effect for different link types
        if (link.classList.contains('cta')) {
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(2.5)';
            cursorFollower.style.opacity = '0.2';
        }
    });

    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.opacity = '0.3';
    });
});

// Start animation
animate();

// Dark/Light mode toggle
const toggle = document.getElementById('toggle');
const toggleMobile = document.getElementById('toggle-mobile');
const body = document.body;

// Check for saved user preference, if any, on load of the website
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    toggle.checked = true;
    toggleMobile.checked = true;
    document.querySelector('.fa-moon').classList.add('hidden');
    document.querySelector('.fa-sun').classList.remove('hidden');
}

// Toggle desktop
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        document.querySelector('.fa-moon').classList.add('hidden');
        document.querySelector('.fa-sun').classList.remove('hidden');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        document.querySelector('.fa-moon').classList.remove('hidden');
        document.querySelector('.fa-sun').classList.add('hidden');
    }
});

// Toggle mobile
toggleMobile.addEventListener('change', () => {
    if (toggleMobile.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        toggle.checked = true;
        document.querySelector('.fa-moon').classList.add('hidden');
        document.querySelector('.fa-sun').classList.remove('hidden');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        toggle.checked = false;
        document.querySelector('.fa-moon').classList.remove('hidden');
        document.querySelector('.fa-sun').classList.add('hidden');
    }
});

// Typing animation
const professions = [
    "Développeur Fullstack",
    "Spécialiste React",
    "Passionné de Node.js",
    "Designer d'interfaces",
    "Solutionneur de problèmes"
];

let currentProfession = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function typeProfession() {
    const typingElement = document.querySelector('.typing-animation');
    const currentText = professions[currentProfession];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            currentProfession = (currentProfession + 1) % professions.length;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex === currentText.length + 1) {
            isEnd = true;
            isDeleting = true;
        }
    }

    const speed = isDeleting ? 50 : isEnd ? 200 : 100;
    setTimeout(typeProfession, speed);
}

// Démarrer l'animation
typeProfession();

// Flip card functionality
document.querySelectorAll('.project-card').forEach(card => {
    const frontButton = card.querySelector('.project-front ');
    const backButton = card.querySelector('.project-back button');

    frontButton.addEventListener('click', () => {
        card.classList.add('flipped');
    });

    backButton.addEventListener('click', () => {
        card.classList.remove('flipped');
    });
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('.section');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Start typing animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        typeWriter();
        heroObserver.unobserve(entries[0].target);
    }
}, { threshold: 0.5 });

heroObserver.observe(document.getElementById('home'));

// Visibilité de la navbar en fonction du scroll
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('scrolled-up');
        navbar.classList.remove('scrolled-down');
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('scrolled-down')) {
        navbar.classList.remove('scrolled-up');
        navbar.classList.add('scrolled-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scrolled-down')) {
        navbar.classList.remove('scrolled-down');
        navbar.classList.add('scrolled-up');
    }

    lastScroll = currentScroll;
});