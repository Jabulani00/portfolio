class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-wave"></div>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section brand-section">
                        <div class="logo">JG</div>
                        <p class="brand-desc">Crafting innovative digital solutions with passion and precision.</p>
                        <div class="social-icons">
                            <a href="mailto:jabula7@outlook.com" title="Send Email">
                                <i class="fas fa-envelope"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jabulani-m-gwala-b89439215" target="_blank" title="LinkedIn">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Jabulani00" target="_blank" title="GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="login.html" class="portal-link">
                                <i class="fas fa-briefcase"></i>
                            </a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h4>Navigation</h4>
                        <div class="two-column-links">
                            <a href="about.html">About</a>
                            <a href="projects.html">Projects</a>
                            <a href="mysaas.html">SaaS</a>
                            <a href="expertise.html">Skills</a>
                            <a href="pricing.html">Services</a>
                            <a href="contact.html">Contact</a>
                        </div>
                    </div>
                    <div class="footer-section contact-section">
                        <h4>Contact Info</h4>
                        <div class="contact-grid">
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <span>jabula7@outlook.com</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Durban, South Africa</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-clock"></i>
                                <span>Available for Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p class="availability">📍 Based in South Africa | Remote & Hybrid</p>
                    <p class="copyright">© ${new Date().getFullYear()} Jabulani Gwala • All Rights Reserved</p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);
