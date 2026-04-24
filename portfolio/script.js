// ==================== SMOOTH SCROLLING ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            closeMenu();
        }
    });
});

// ==================== MOBILE MENU TOGGLE ==================== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    hamburger.classList.toggle('active');
});

function closeMenu() {
    navMenu?.classList.remove('active');
    hamburger?.classList.remove('active');
}

// ==================== SCROLL ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all scroll-reveal elements
document.querySelectorAll('.skill-card, .service-card, .project-card, .stat-card').forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
});

// ==================== NAVBAR SCROLL EFFECT ==================== 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar?.style.background = 'rgba(11, 15, 25, 0.9)';
        navbar?.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar?.style.background = 'rgba(11, 15, 25, 0.7)';
        navbar?.style.boxShadow = 'none';
    }
});

// ==================== FORM SUBMISSION ==================== 
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Validate form
    if (!email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Get the submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    try {
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // NOTE: This is a client-side email simulation
        // In production, you would send this to your backend/email service
        // Example options:
        // 1. Send to FormSubmit.co (free service)
        // 2. Connect to your own backend API
        // 3. Use EmailJS library

        // Simulate API call (replace with actual backend endpoint)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

        // Reset form
        contactForm.reset();

    } catch (error) {
        console.error('Error:', error);
        showNotification('Failed to send message. Please try again.', 'error');
    } finally {
        // Restore button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// ==================== NOTIFICATION SYSTEM ==================== 
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'rgba(34, 211, 238, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
        border: 1px solid ${type === 'success' ? 'rgba(34, 211, 238, 0.5)' : 'rgba(239, 68, 68, 0.5)'};
        color: ${type === 'success' ? '#22D3EE' : '#EF4444'};
        border-radius: 10px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;

    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add slide animations to stylesheet
if (!document.querySelector('style[data-notification]')) {
    const style = document.createElement('style');
    style.setAttribute('data-notification', 'true');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(30px);
            }
        }
    `;
    document.head.appendChild(style);
}

// ==================== CURSOR EFFECT (OPTIONAL) ==================== 
// Uncomment if you want a custom cursor effect
/*
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});
*/

// ==================== PAGE LOAD ANIMATION ==================== 
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initially set opacity to 0
if (document.body.style.opacity !== '1') {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
}

// ==================== ACTIVE NAV LINK ==================== 
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== CONSOLE MESSAGE ==================== 
console.log('%cWelcome to Abdulrehman Khan\'s Portfolio!', 'color: #22D3EE; font-size: 20px; font-weight: bold;');
console.log('%cDesigned with ❤️ using modern web technologies', 'color: #7C3AED; font-size: 14px;');

// ==================== UTILITY FUNCTIONS ==================== 

/**
 * Utility: Check if an element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

/**
 * Utility: Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== INITIALIZATION ==================== 
document.addEventListener('DOMContentLoaded', () => {
    // Set initial navbar state
    navbar?.style.transition = 'all 0.3s ease';

    // Log portfolio info
    console.log('Portfolio loaded successfully');
});

// ==================== NOTES FOR CUSTOMIZATION ==================== 
/*
 * IMPORTANT CUSTOMIZATION POINTS:
 * 
 * 1. EMAIL INTEGRATION (Line 67-87):
 *    - Option A: Use FormSubmit.co (Free, no code required)
 *      Change form action to: action="https://formspree.io/f/YOUR_FORM_ID"
 *    
 *    - Option B: Use your own backend API
 *      Send POST request to your API endpoint
 *      Example:
 *      fetch('/api/contact', {
 *          method: 'POST',
 *          headers: { 'Content-Type': 'application/json' },
 *          body: JSON.stringify({ name, email, message })
 *      })
 *    
 *    - Option C: Use EmailJS library (easiest alternative)
 *      1. Sign up at emailjs.com
 *      2. Add their SDK and initialize
 *      3. Replace the fetch call with emailjs.send()
 * 
 * 2. TO ADD EMAIL FORM SUBMISSION:
 *    - Uncomment and modify the fetch call in the form submission handler
 *    - Update the endpoint URL to point to your backend/service
 *    - Test with a real email service
 * 
 * 3. MOBILE MENU ANIMATION:
 *    Add this CSS to style.css when you uncomment the hamburger functionality:
 *    
 *    .nav-menu.active {
 *        display: flex;
 *        flex-direction: column;
 *        position: fixed;
 *        left: -100%;
 *        top: 60px;
 *        flex-direction: column;
 *        background-color: var(--bg-dark);
 *        width: 100%;
 *        text-align: center;
 *        transition: 0.3s;
 *        left: 0;
 *    }
 */
