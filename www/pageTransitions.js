class PageTransitionManager {
    constructor() {
        this.overlay = this.createOverlay();
        this.logoContainer = this.createLogoContainer();
        this.particlesContainer = this.createParticlesContainer();
        this.overlay.appendChild(this.particlesContainer);
        this.overlay.appendChild(this.logoContainer);
        document.body.appendChild(this.overlay);
        this.initializeTransitions();
        this.currentPage = window.location.pathname;
        this.particles = [];
    }

    createOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'page-transition-overlay';
        return overlay;
    }

    createLogoContainer() {
        const logo = document.createElement('div');
        logo.className = 'logo-container';
        logo.innerHTML = '<span class="gradient-text">Jabulai Gwala</span>';
        return logo;
    }

    createParticlesContainer() {
        const container = document.createElement('div');
        container.className = 'particles-container';
        return container;
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Determine if particle should be at bottom
        const isBottomParticle = Math.random() < 0.4;
        let startX, startY, endX, endY;
        
        if (isBottomParticle) {
            startX = Math.random() * window.innerWidth;
            startY = window.innerHeight + 10;
            endX = startX + (Math.random() - 0.5) * 100;
            endY = window.innerHeight - Math.random() * 100;
        } else {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 200;
            startX = Math.cos(angle) * radius;
            startY = Math.sin(angle) * radius;
            endX = (Math.random() - 0.5) * 60;
            endY = (Math.random() - 0.5) * 60;
        }
        
        particle.style.setProperty('--starting-x', `${startX}px`);
        particle.style.setProperty('--starting-y', `${startY}px`);
        particle.style.setProperty('--ending-x', `${endX}px`);
        particle.style.setProperty('--ending-y', `${endY}px`);
        
        return particle;
    }

    initializeTransitions() {
        document.addEventListener('DOMContentLoaded', () => {
            this.animateOut();
        });

        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.href && !link.target && !link.hasAttribute('download')) {
                e.preventDefault();
                this.navigateToPage(link.href);
            }
        });
    }

    async animateIn() {
        this.overlay.style.display = 'flex';
        this.createParticles();
        this.logoContainer.style.animation = 'logoFadeIn 0.8s forwards';
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    async animateOut() {
        this.logoContainer.style.animation = 'logoFadeOut 0.8s forwards';
        await new Promise(resolve => setTimeout(resolve, 800));
        this.particles.forEach(p => p.remove());
        this.particles = [];
        this.overlay.style.display = 'none';
    }

    createParticles() {
        for (let i = 0; i < 100; i++) {
            const particle = this.createParticle();
            this.particlesContainer.appendChild(particle);
            particle.style.animation = `particleAnimation ${Math.random() * 2 + 1}s cubic-bezier(0.4, 0, 0.2, 1) infinite`;
            this.particles.push(particle);
        }
    }

    async navigateToPage(url) {
        await this.animateIn();
        window.location.href = url;
    }
}

const pageTransition = new PageTransitionManager();