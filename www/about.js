// Enhanced Expandable Bio Side Panel
document.addEventListener('DOMContentLoaded', function() {
    
    // Create the bio side panel
    const bioPanel = document.createElement('div');
    bioPanel.className = 'jg-bio-panel';
    bioPanel.innerHTML = `
        <div class="jg-bio-trigger">
            <div class="jg-profile-mini">
                <img src="assests/_DSC0052.JPG" alt="Jabulani Gwala" />
            </div>
            <div class="jg-trigger-text">
                <span class="jg-name">Jabulani</span>
                <span class="jg-role">Full Stack Dev</span>
            </div>
            <div class="jg-expand-icon">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
        
        <div class="jg-bio-expanded">
            <div class="jg-bio-header">
                <div class="jg-profile-image">
                    <img src="assests/_DSC0052.JPG" alt="Jabulani Gwala" />
                </div>
                <div class="jg-status-badge">
                    <span class="jg-status-dot"></span>
                    Available for Projects
                </div>
            </div>
            
            <div class="jg-bio-content">
                <h1 class="jg-bio-title">Jabulani Gwala</h1>
                <h2 class="jg-bio-subtitle">Full Stack Developer</h2>
                
                <div class="jg-bio-description">
                    <p>
                        <span class="jg-highlight">Full Stack Developer</span> crafting digital solutions that make a difference.
                    </p>
                    
                    <p>
                        <i class="fas fa-map-marker-alt"></i> Based in Durban, South Africa
                    </p>
                </div>
                
                <div class="jg-social-links">
                    <a href="https://www.linkedin.com/in/jabulani-m-gwala-b89439215" class="jg-social-link" title="LinkedIn" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Jabulani00" class="jg-social-link" title="GitHub" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/jabu.gwala?igsh=czZyeGxqcTY1MHpl" class="jg-social-link" title="Instagram" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:jabula7@gmail.com" class="jg-social-link" title="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/27785775316" class="jg-social-link" title="WhatsApp" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
                
                <div class="jg-cta-section">
                    <button class="jg-cta-button" id="createProjectBtn">
                        <i class="fas fa-plus"></i>
                        Create a Project With Me
                    </button>
                </div>
            </div>
            
            <div class="jg-close-btn" id="closeBioPanel">
                <i class="fas fa-times"></i>
            </div>
        </div>
    `;
    
    // Add CSS styles
    const style = document.createElement('style');
    style.textContent = `
        .jg-bio-panel {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            z-index: 1000;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .jg-bio-panel .jg-bio-trigger {
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 30px 0 0 30px;
            padding: 15px 25px 15px 15px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
            border-right: none;
        }
        
        .jg-bio-panel .jg-bio-trigger:hover {
            background: rgba(255, 255, 255, 0.12);
            transform: translateX(-8px);
            box-shadow: 0 16px 50px rgba(0, 0, 0, 0.2);
        }
        
        .jg-bio-panel .jg-profile-mini {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 15px;
            border: 2px solid rgba(255, 255, 255, 0.25);
            transition: all 0.3s ease;
        }
        
        .jg-bio-panel .jg-bio-trigger:hover .jg-profile-mini {
            border-color: rgba(52, 152, 219, 0.5);
        }
        
        .jg-bio-panel .jg-profile-mini img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .jg-bio-panel .jg-trigger-text {
            display: flex;
            flex-direction: column;
            margin-right: 15px;
        }
        
        .jg-bio-panel .jg-trigger-text .jg-name {
            font-size: 15px;
            font-weight: 700;
            color: white;
            line-height: 1.2;
            letter-spacing: 0.3px;
        }
        
        .jg-bio-panel .jg-trigger-text .jg-role {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.75);
            font-weight: 500;
        }
        
        .jg-bio-panel .jg-expand-icon {
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .jg-bio-panel .jg-bio-expanded {
            position: absolute;
            top: 0;
            right: 100%;
            width: 320px;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(35px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 25px;
            padding: 25px;
            opacity: 0;
            visibility: hidden;
            transform: translateX(30px) scale(0.95);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
            overflow: hidden;
        }
        
        .jg-bio-panel.jg-expanded .jg-bio-expanded {
            opacity: 1;
            visibility: visible;
            transform: translateX(0) scale(1);
        }
        
        .jg-bio-panel.jg-expanded .jg-expand-icon {
            transform: rotate(180deg);
        }
        
        .jg-bio-panel .jg-bio-header {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .jg-bio-panel .jg-bio-expanded .jg-profile-image {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 15px;
            border: 3px solid rgba(255, 255, 255, 0.25);
            position: relative;
        }
        
        .jg-bio-panel .jg-bio-expanded .jg-profile-image::before {
            content: '';
            position: absolute;
            inset: -3px;
            background: linear-gradient(135deg, #3498db, #2ecc71);
            border-radius: 50%;
            z-index: -1;
            opacity: 0.7;
        }
        
        .jg-bio-panel .jg-bio-expanded .jg-profile-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .jg-bio-panel .jg-status-badge {
            display: inline-flex;
            align-items: center;
            background: rgba(46, 204, 113, 0.15);
            color: #2ecc71;
            padding: 8px 16px;
            border-radius: 25px;
            font-size: 12px;
            font-weight: 600;
            border: 1px solid rgba(46, 204, 113, 0.3);
            backdrop-filter: blur(10px);
        }
        
        .jg-bio-panel .jg-status-dot {
            width: 10px;
            height: 10px;
            background: #2ecc71;
            border-radius: 50%;
            margin-right: 8px;
            animation: jg-pulse 2s infinite;
        }
        
        @keyframes jg-pulse {
            0% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.8); }
            70% { box-shadow: 0 0 0 12px rgba(46, 204, 113, 0); }
            100% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0); }
        }
        
        .jg-bio-panel .jg-bio-title {
            font-size: 22px;
            font-weight: 800;
            color: white;
            margin: 15px 0 5px 0;
            text-align: center;
            letter-spacing: 0.5px;
        }
        
        .jg-bio-panel .jg-bio-subtitle {
            font-size: 15px;
            color: rgba(255, 255, 255, 0.85);
            margin-bottom: 15px;
            text-align: center;
            font-weight: 500;
        }
        
        .jg-bio-panel .jg-bio-description {
            margin-bottom: 18px;
        }
        
        .jg-bio-panel .jg-bio-description p {
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.6;
            margin-bottom: 10px;
            font-size: 14px;
            font-weight: 400;
        }
        
        .jg-bio-panel .jg-highlight {
            color: #3498db;
            font-weight: 700;
        }
        
        .jg-bio-panel .jg-social-links {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 18px;
        }
        
        .jg-bio-panel .jg-social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 50%;
            color: white;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
            font-size: 14px;
        }
        
        .jg-bio-panel .jg-social-link:hover {
            background: rgba(52, 152, 219, 0.2);
            border-color: #3498db;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
        }
        
        .jg-bio-panel .jg-cta-section {
            text-align: center;
        }
        
        .jg-bio-panel .jg-cta-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #3498db, #2ecc71);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
            letter-spacing: 0.3px;
        }
        
        .jg-bio-panel .jg-cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(52, 152, 219, 0.4);
            background: linear-gradient(135deg, #2980b9, #27ae60);
        }
        
        .jg-bio-panel .jg-close-btn {
            position: absolute;
            top: 18px;
            right: 18px;
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 50%;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
            backdrop-filter: blur(10px);
        }
        
        .jg-bio-panel .jg-close-btn:hover {
            background: rgba(231, 76, 60, 0.2);
            border-color: #e74c3c;
            transform: scale(1.05);
        }
        
        /* Removed scrollbar styles */
        
        @media (max-width: 768px) {
            .jg-bio-panel .jg-bio-expanded {
                width: 300px;
                padding: 20px;
            }
            
            .jg-bio-panel .jg-bio-trigger {
                padding: 12px 20px 12px 12px;
            }
            
            .jg-bio-panel .jg-profile-mini {
                width: 40px;
                height: 40px;
            }
            
            .jg-bio-panel .jg-trigger-text .jg-name {
                font-size: 14px;
            }
            
            .jg-bio-panel .jg-trigger-text .jg-role {
                font-size: 11px;
            }
            
            .jg-bio-panel .jg-bio-title {
                font-size: 20px;
            }
            
            .jg-bio-panel .jg-bio-subtitle {
                font-size: 14px;
            }
        }
        
        @media (max-width: 480px) {
            .jg-bio-panel .jg-bio-expanded {
                width: 280px;
                padding: 18px;
            }
        }
    `;
    
    // Append styles and panel to document
    document.head.appendChild(style);
    document.body.appendChild(bioPanel);
    
    // Add event listeners
    const trigger = bioPanel.querySelector('.jg-bio-trigger');
    const closeBtn = bioPanel.querySelector('#closeBioPanel');
    const createProjectBtn = bioPanel.querySelector('#createProjectBtn');
    
    // Toggle panel
    trigger.addEventListener('click', function() {
        bioPanel.classList.toggle('jg-expanded');
    });
    
    // Close panel
    closeBtn.addEventListener('click', function() {
        bioPanel.classList.remove('jg-expanded');
    });
    
    // Navigate to quote page
    createProjectBtn.addEventListener('click', function() {
        window.location.href = 'quote.html';
    });
    
    // Close panel when clicking outside
    document.addEventListener('click', function(e) {
        if (!bioPanel.contains(e.target) && bioPanel.classList.contains('jg-expanded')) {
            bioPanel.classList.remove('jg-expanded');
        }
    });
    
    // Prevent closing when clicking inside the panel
    bioPanel.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});