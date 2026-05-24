document.addEventListener('DOMContentLoaded', () => {
    // Dynamic latency counter
    const latencyEl = document.getElementById('latency-counter');
    if (latencyEl) {
        setInterval(() => {
            const min = 8;
            const max = 15;
            const currentLatency = Math.floor(Math.random() * (max - min + 1) + min);
            latencyEl.textContent = `${currentLatency}ms`;
            
            // Add a slight flicker effect occasionally
            if (Math.random() > 0.8) {
                latencyEl.style.opacity = 0.5;
                setTimeout(() => {
                    latencyEl.style.opacity = 1;
                }, 100);
            }
        }, 2000);
    }

    // Parallax effect on main panel
    const heroSection = document.querySelector('.hero');
    const mainPanel = document.querySelector('.main-panel');
    
    if (heroSection && mainPanel) {
        heroSection.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
            
            mainPanel.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            mainPanel.style.transform = `perspective(1000px) rotateY(-5deg) rotateX(5deg)`;
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Futuristic Typewriter effect for headers on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const featureCards = document.querySelectorAll('.hud-panel');
    featureCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
    });
});
