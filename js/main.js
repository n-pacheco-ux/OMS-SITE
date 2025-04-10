// Main JavaScript file for Offshore Marine Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any components that need JavaScript
    initNavbarScroll();
    initScrollAnimation();
    
    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});

// Change navbar background on scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
}

// Simple scroll animation for elements
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Contact form validation
function validateForm(event) {
    let valid = true;
    const form = event.target;
    
    // Get form fields
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');
    const message = form.querySelector('#message');
    
    // Reset error states
    clearErrors(form);
    
    // Validate name
    if (!name.value.trim()) {
        showError(name, 'Please enter your name');
        valid = false;
    }
    
    // Validate email
    if (!email.value.trim()) {
        showError(email, 'Please enter your email');
        valid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        valid = false;
    }
    
    // Validate message
    if (!message.value.trim()) {
        showError(message, 'Please enter your message');
        valid = false;
    }
    
    // Prevent form submission if not valid
    if (!valid) {
        event.preventDefault();
    }
}

// Helper function to display error messages
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('has-error');
    
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message text-danger mt-2';
    errorElement.textContent = message;
    
    formGroup.appendChild(errorElement);
}

// Helper function to clear all error messages
function clearErrors(form) {
    const errorMessages = form.querySelectorAll('.error-message');
    const errorFields = form.querySelectorAll('.has-error');
    
    errorMessages.forEach(element => element.remove());
    errorFields.forEach(element => element.classList.remove('has-error'));
}

// Helper function to validate email format
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

// Services carousel initialization (if present on page)
const servicesCarousel = document.querySelector('.services-carousel');
if (servicesCarousel) {
    // This could be initialized with a library like Swiper.js
    // For now we'll use a simple implementation
    const slides = servicesCarousel.querySelectorAll('.carousel-slide');
    const nextBtn = servicesCarousel.querySelector('.carousel-next');
    const prevBtn = servicesCarousel.querySelector('.carousel-prev');
    
    let currentSlide = 0;
    
    // Show initial slide
    showSlide(currentSlide);
    
    // Next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    }
    
    // Previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
    }
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }
}
