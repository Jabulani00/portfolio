// Add this JavaScript to your page for animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Role title animation
    const roles = document.querySelectorAll('.role-title');
    let currentIndex = 0;
    
    function rotateRoles() {
        // Remove current class from all roles
        roles.forEach(role => {
            role.classList.remove('current');
        });
        
        // Add current class to next role
        roles[currentIndex].classList.add('current');
        
        // Increment index and reset if needed
        currentIndex = (currentIndex + 1) % roles.length;
    }
    
    // Set initial state
    rotateRoles();
    
    // Rotate roles every 3 seconds
    setInterval(rotateRoles, 3000);
    
    // 3D tilt effect for profile image
    const profileWrapper = document.querySelector('.profile-image-wrapper');
    
    profileWrapper.addEventListener('mousemove', function(e) {
        const boundingRect = this.getBoundingClientRect();
        const mouseX = e.clientX - boundingRect.left;
        const mouseY = e.clientY - boundingRect.top;
        
        const xRotation = ((mouseY / boundingRect.height) - 0.5) * -10;
        const yRotation = ((mouseX / boundingRect.width) - 0.5) * 10;
        
        this.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
    
    profileWrapper.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animated background particles (optional, can be resource-intensive)
    const section = document.querySelector('.hero-section');
    
    // Create particles
    for(let i = 0; i < 50; i++) {
        createParticle();
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 1;
        
        // Random color
        const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Set styles
        particle.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: ${color};
            border-radius: 50%;
            opacity: 0.5;
            pointer-events: none;
            animation: float ${duration}s infinite linear;
        `;
        
        section.appendChild(particle);
    }
    
    // Add animation keyframes to document
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                transform: translateY(-100px) translateX(100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});