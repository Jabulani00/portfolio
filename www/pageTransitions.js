class PageTransitionManager {
    constructor() {
        this.overlay = this.createOverlay();
        this.particlesContainer = this.createParticlesContainer();
        this.overlay.appendChild(this.particlesContainer);
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

    createParticlesContainer() {
        const container = document.createElement('div');
        container.className = 'particles-container';
        return container;
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 2; // Reduced particle size range
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight;
        const endX = startX + (Math.random() - 0.5) * 50; // Reduced movement range
        const endY = -10; // All particles move upward
        
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
        await new Promise(resolve => setTimeout(resolve, 400)); // Reduced duration
    }

    async animateOut() {
        await new Promise(resolve => setTimeout(resolve, 300)); // Reduced duration
        this.particles.forEach(p => p.remove());
        this.particles = [];
        this.overlay.style.display = 'none';
    }

    createParticles() {
        for (let i = 0; i < 50; i++) { // Reduced number of particles
            const particle = this.createParticle();
            this.particlesContainer.appendChild(particle);
            particle.style.animation = `particleAnimation ${Math.random() * 0.5 + 0.5}s ease-out`; // Faster animation
            this.particles.push(particle);
        }
    }

    async navigateToPage(url) {
        await this.animateIn();
        window.location.href = url;
    }
}

const pageTransition = new PageTransitionManager();