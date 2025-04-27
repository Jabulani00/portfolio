class WhatsAppButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const message = encodeURIComponent("Hi Jabulani! I'm interested in discussing a potential project with you.");
        
        this.innerHTML = `
            <div class="whatsapp-button" data-tooltip="Click here to chat!">
                <a href="https://wa.me/27766573608?text=${message}" target="_blank" class="whatsapp-link" aria-label="Chat on WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                    <span class="chat-text">Let's Chat</span>
                </a>
            </div>
            <style>
                .whatsapp-button {
                    position: fixed;
                    bottom: 25px;
                    right: 25px;
                    z-index: 1000;
                }

                .whatsapp-button[data-tooltip]:before {
                    content: attr(data-tooltip);
                    position: absolute;
                    bottom: 100%;
                    right: 0;
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 14px;
                    white-space: nowrap;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease, visibility 0.3s ease;
                    margin-bottom: 10px;
                }

                .whatsapp-button:hover[data-tooltip]:before {
                    opacity: 1;
                    visibility: visible;
                }

                .whatsapp-link {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background-color: #25D366;
                    color: white;
                    text-decoration: none;
                    padding: 12px 20px;
                    border-radius: 30px;
                    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
                    transition: all 0.3s ease;
                }

                .whatsapp-link:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
                    background-color: #22c35e;
                }

                .whatsapp-link i {
                    font-size: 24px;
                    color: white;
                }

                .chat-text {
                    font-size: 16px;
                    font-weight: 500;
                    color: white;
                }

                @media (max-width: 768px) {
                    .whatsapp-button {
                        bottom: 20px;
                        right: 20px;
                    }

                    .whatsapp-link {
                        padding: 10px 16px;
                    }

                    .chat-text {
                        display: none;
                    }

                    .whatsapp-link i {
                        font-size: 28px;
                    }
                }
            </style>
        `;
    }
}

customElements.define('whatsapp-button', WhatsAppButton);