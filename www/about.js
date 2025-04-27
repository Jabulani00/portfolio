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
    
    // Improved animated background particles
    const section = document.querySelector('.hero-section');
    
    // Create more particles for a richer effect
    for(let i = 0; i < 75; i++) {
        createParticle();
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Enhanced random position with depth
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const depth = Math.random();
        
        // Variable size based on depth
        const size = Math.random() * 8 + (depth * 4);
        
        // Enhanced color palette with opacity
        const colors = [
            'rgba(52, 152, 219, 0.8)',  // primary blue
            'rgba(46, 204, 113, 0.8)',  // secondary green
            'rgba(231, 76, 60, 0.6)',   // accent red
            'rgba(243, 156, 18, 0.7)',  // highlight orange
            'rgba(155, 89, 182, 0.6)'   // purple
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Variable animation duration and delay
        const duration = Math.random() * 25 + 15;
        const delay = Math.random() * -20;
        
        // Enhanced particle styles
        particle.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            filter: blur(${(1 - depth) * 2}px);
            opacity: ${0.3 + (depth * 0.5)};
            pointer-events: none;
            transform: translate3d(0, 0, ${depth * 100}px);
            animation: float ${duration}s ${delay}s infinite ease-in-out;
        `;
        
        section.appendChild(particle);
    }
    
    // Enhanced animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translate3d(0, 0, 0) rotate(0deg);
                opacity: 0;
            }
            25% {
                transform: translate3d(100px, -50px, 50px) rotate(90deg);
                opacity: 0.5;
            }
            50% {
                transform: translate3d(200px, 0px, 100px) rotate(180deg);
                opacity: 0.3;
            }
            75% {
                transform: translate3d(100px, 50px, 50px) rotate(270deg);
                opacity: 0.5;
            }
            100% {
                transform: translate3d(0, 0, 0) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});