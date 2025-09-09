document.addEventListener("DOMContentLoaded", () => {
    
    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Typing Effect for Hero Title ---
    const heroTitleElement = document.querySelector('.typing-text');
    const heroContentElement = document.querySelector('.hero-content');
    const textToType = 'Akhil Etikala';

    if (heroTitleElement && heroContentElement) {
        let i = 0;
        
        function typeWriter() {
            if (i < textToType.length) {
                heroTitleElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        // Trigger hero animations and typing after a short delay
        setTimeout(() => {
            heroContentElement.classList.add('animate__animated', 'animate__fadeInUp');
            typeWriter();
        }, 500); // 500ms delay to ensure DOM is ready
    }

    // --- Fade-in-up effect on scroll using Intersection Observer ---
    const sections = document.querySelectorAll('section:not(#hero)');
    
    const observerOptions = {
        root: null,
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('animate__animated');
        observer.observe(section);
    });

    // --- Dynamic Navbar Background on Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.8)'; // Darker background
        } else {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.6)'; // Lighter transparent background
        }
    });
});