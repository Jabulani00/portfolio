class PageTransitionManager {
    constructor() {
        this.overlay = this.createOverlay();
        document.body.appendChild(this.overlay);
        this.initializeTransitions();
        this.currentPage = window.location.pathname;
    }

    createOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'page-transition-overlay';
        return overlay;
    }

    initializeTransitions() {
        document.addEventListener('DOMContentLoaded', () => {
            this.overlay.classList.add('slide-out');
        });

        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.href && !link.target && !link.hasAttribute('download')) {
                e.preventDefault();
                const direction = this.getTransitionDirection(link.href);
                this.navigateToPage(link.href, direction);
            }
        });
    }

    getTransitionDirection(newUrl) {
        const currentPath = this.currentPage;
        const newPath = new URL(newUrl).pathname;
        
        const pages = ['index.html', 'about.html', 'projects.html', 'mysaas.html', 'expertise.html', 'pricing.html', 'contact.html'];
        const currentIndex = pages.findIndex(page => currentPath.includes(page));
        const newIndex = pages.findIndex(page => newPath.includes(page));
        
        return newIndex > currentIndex ? 'slide-left' : 'slide-right';
    }

    async navigateToPage(url, direction) {
        this.overlay.className = 'page-transition-overlay';
        this.overlay.classList.add(direction);
        await new Promise(resolve => setTimeout(resolve, 500));
        window.location.href = url;
    }
}

const pageTransition = new PageTransitionManager();