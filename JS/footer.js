class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <div class="quick-links">
                            <a href="../html/about.html">About</a>
                            <a href="../html/projects.html">Projects</a>
                            <a href="../html/mysaas.html">SaaS Platforms</a>
                            <a href="../html/expertise.html">Tech Expertise</a>
                            <a href="../html/pricing.html">Services</a>
                            <a href="../html/contact.html">Contact</a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h4>Professional Info</h4>
                        <p><i class="fas fa-envelope"></i> jabula7@outlook.com</p>
                        <p><i class="fas fa-map-marker-alt"></i> Durban, South Africa</p>
                        <p><i class="fas fa-briefcase"></i> Freelance Developer</p>
                    </div>
                    <div class="footer-section">
                        <h4>Connect</h4>
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
                            <a onclick="window.location.href='../html/login.html'" target="_blank">
                                <i class="fas fa-briefcase"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="contact-details">
                    <p>📍 Based in South Africa | Open to Remote & Hybrid Opportunities</p>
                    <p>📞 Available for Freelance & Full-Time Projects</p>
                    <p>© 2025 Jabulani Gwala - Software Development Services</p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);
