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
                    <span class="brand-text">JG</span>
                    <span class="brand-full">Jabulani Gwala</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto">
        <li class="nav-item"><a class="nav-link" href="../index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="../html/about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="../html/projects.html">Projects</a></li>
        <li class="nav-item"><a class="nav-link" href="../html/mysaas.html">SaaS</a></li>
        <li class="nav-item"><a class="nav-link" href="../html/expertise.html">Skills</a></li>
        <li class="nav-item"><a class="nav-link" href="../html/pricing.html">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="../html/pricing.html">Contact</a></li>
    </ul>
    <div class="nav-contact-container">
        <a class="nav-link contact-link" href="../html/qoute.html">Get a Quote</a>
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
    }
}

customElements.define('header-component', HeaderComponent);