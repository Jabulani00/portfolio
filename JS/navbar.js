class NavbarComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
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
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="../index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="../html/about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="../html/projects.html">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="../html/mysaas.html">SaaS</a></li>
                        <li class="nav-item"><a class="nav-link" href="../html/expertise.html">Skills</a></li>
                        <li class="nav-item"><a class="nav-link" href="../html/pricing.html">Services</a></li>
                        <li class="nav-item"><a class="nav-link contact-link" href="../html/contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        `;

        // Add scroll event listener
        document.addEventListener('DOMContentLoaded', () => {
            const navbar = this.querySelector('.navbar');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Add active class to nav links based on current section
            const navLinks = this.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('section');

            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 60) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').slice(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
        });
    }
}

customElements.define('navbar-component', NavbarComponent);
