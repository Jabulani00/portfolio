class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Top contact/social bar -->
        <div class="top-bar">
            <div class="container">
                <div class="top-bar-content">
                    <div class="top-bar-contact">
                        <a href="mailto:jabula7@outlook.com" class="top-bar-link">
                            <i class="bi bi-envelope-fill"></i>
                            <span class="d-none d-md-inline">jabula7@outlook.com</span>
                        </a>
                    </div>
                    <div class="top-bar-socials">
                        <a href="https://www.linkedin.com/in/jabulani-m-gwala-b89439215" class="top-bar-icon" target="_blank" aria-label="LinkedIn">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/jabu.gwala?igsh=czZyeGxqcTY1MHpl" class="top-bar-icon" target="_blank" aria-label="Instagram">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="https://github.com/Jabulani00" class="top-bar-icon" target="_blank" aria-label="GitHub">
                            <i class="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main navigation bar -->
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="../index.html">
                    <img src="assests/logo.png" alt="JG Logo" class="brand-logo" width="40" height="40">
                    <span class="brand-full">Jabulani Gwala</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <button class="mobile-close-btn" aria-label="Close menu">
                        <i class="bi bi-x-lg"></i>
                    </button>
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="mysaas.html">SaaS</a></li>
                        <li class="nav-item"><a class="nav-link" href="expertise.html">Skills</a></li>
                        <li class="nav-item"><a class="nav-link" href="pricing.html">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                    </ul>
                    <div class="nav-contact-container">
                        <a class="nav-link contact-link" href="quote.html">Get a Quote</a>
                    </div>
                </div>
            </div>
        </nav>
        `;

        // Add active class to nav links based on current page
        window.addEventListener('DOMContentLoaded', () => {
            const currentPage = window.location.pathname;
            const navLinks = this.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                const linkPath = link.getAttribute('href');
                if (currentPage.endsWith(linkPath) || 
                    (currentPage.endsWith('/') && linkPath.endsWith('index.html'))) {
                    link.classList.add('active');
                }
            });
        });

        // Add animation timing for menu items
        const navItems = this.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            item.style.setProperty('--item-number', index);
        });

        // Handle mobile menu open/close animation
        const navbarToggler = this.querySelector('.navbar-toggler');
        const navbarCollapse = this.querySelector('.navbar-collapse');

        navbarToggler?.addEventListener('click', () => {
            if (!navbarCollapse.classList.contains('show')) {
                navbarCollapse.style.right = '0';
            }
        });

        const closeBtn = this.querySelector('.mobile-close-btn');
        closeBtn?.addEventListener('click', () => {
            const collapse = this.querySelector('.navbar-collapse');
            collapse.classList.remove('show');
            collapse.style.right = '-100%';
        });
    }
}

customElements.define('header-component', HeaderComponent);