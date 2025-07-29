// Utility Functions
const utils = {
    // Debounce function to limit function calls
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function to limit function calls
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Smooth scroll to element
    scrollToElement: (element, offset = 0) => {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// DOM Elements
const elements = {
    navbar: document.getElementById('navbar'),
    navToggle: document.getElementById('nav-toggle'),
    navMenu: document.getElementById('nav-menu'),
    navLinks: document.querySelectorAll('.nav-link'),
    themeToggle: document.getElementById('theme-toggle'),
    typewriter: document.getElementById('typewriter'),
    contactForm: document.getElementById('contact-form'),
    submitBtn: document.getElementById('submit-btn'),
    formMessage: document.getElementById('form-message'),
    scrollToTop: document.getElementById('scroll-to-top'),
    sections: document.querySelectorAll('section[id]')
};

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.bindEvents();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        const icon = elements.themeToggle.querySelector('i');
        icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
        
        // Add transition class for smooth theme change
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    bindEvents() {
        elements.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.isMenuOpen = false;
        this.activeSection = 'home';
        this.init();
    }

    init() {
        this.bindEvents();
        this.handleScroll();
    }

    toggleMobileMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        elements.navToggle.classList.toggle('active', this.isMenuOpen);
        elements.navMenu.classList.toggle('active', this.isMenuOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }

    closeMobileMenu() {
        this.isMenuOpen = false;
        elements.navToggle.classList.remove('active');
        elements.navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    updateActiveNav() {
        let currentSection = 'home';
        
        elements.sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const navbarHeight = elements.navbar.offsetHeight;
            
            if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
                currentSection = section.id;
            }
        });

        if (currentSection !== this.activeSection) {
            this.activeSection = currentSection;
            
            elements.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    handleScroll() {
        const scrolled = window.scrollY > 50;
        elements.navbar.classList.toggle('scrolled', scrolled);
        this.updateActiveNav();
    }

    bindEvents() {
        // Mobile menu toggle
        elements.navToggle.addEventListener('click', () => this.toggleMobileMenu());

        // Navigation links
        elements.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    utils.scrollToElement(targetElement, elements.navbar.offsetHeight);
                    this.closeMobileMenu();
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && !elements.navMenu.contains(e.target) && !elements.navToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Handle scroll events
        window.addEventListener('scroll', utils.throttle(() => this.handleScroll(), 16));

        // Handle resize events
        window.addEventListener('resize', utils.debounce(() => {
            if (window.innerWidth > 768 && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        }, 250));
    }
}

// Typewriter Effect
class TypewriterEffect {
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        this.currentWordIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        
        this.options = {
            typeSpeed: options.typeSpeed || 150,
            deleteSpeed: options.deleteSpeed || 100,
            pauseTime: options.pauseTime || 2000,
            loop: options.loop !== false
        };
        
        this.init();
    }

    init() {
        if (this.element && this.words.length > 0) {
            this.type();
        }
    }

    type() {
        const currentWord = this.words[this.currentWordIndex];
        
        if (this.isDeleting) {
            // Remove character
            this.element.textContent = currentWord.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            
            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
                setTimeout(() => this.type(), 500);
                return;
            }
            
            setTimeout(() => this.type(), this.options.deleteSpeed);
        } else {
            // Add character
            this.element.textContent = currentWord.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            
            if (this.currentCharIndex === currentWord.length) {
                if (this.options.loop) {
                    setTimeout(() => {
                        this.isDeleting = true;
                        this.type();
                    }, this.options.pauseTime);
                }
                return;
            }
            
            setTimeout(() => this.type(), this.options.typeSpeed);
        }
    }
}

// Form Validation
class FormValidator {
    constructor(form) {
        this.form = form;
        this.errors = {};
        this.init();
    }

    init() {
        this.bindEvents();
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Clear previous error
        this.clearFieldError(field);

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = `${this.getFieldLabel(field)} is required.`;
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            }
        }

        // Name validation
        if (fieldName === 'name' && value) {
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters long.';
            }
        }

        // Message validation
        if (fieldName === 'message' && value) {
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'Message must be at least 10 characters long.';
            }
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
            this.errors[fieldName] = errorMessage;
        } else {
            delete this.errors[fieldName];
        }

        return isValid;
    }

    validateForm() {
        const fields = this.form.querySelectorAll('input[required], textarea[required], input[type="email"]');
        let isFormValid = true;

        fields.forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    showFieldError(field, message) {
        const errorElement = document.getElementById(`${field.name}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        field.classList.add('error');
    }

    clearFieldError(field) {
        const errorElement = document.getElementById(`${field.name}-error`);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
        field.classList.remove('error');
    }

    getFieldLabel(field) {
        const label = this.form.querySelector(`label[for="${field.id}"]`);
        return label ? label.textContent : field.name;
    }

    bindEvents() {
        // Real-time validation
        const fields = this.form.querySelectorAll('input, textarea');
        fields.forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('input', utils.debounce(() => {
                if (field.classList.contains('error')) {
                    this.validateField(field);
                }
            }, 300));
        });
    }
}

// Contact Form Manager
class ContactFormManager {
    constructor() {
        this.validator = new FormValidator(elements.contactForm);
        this.isSubmitting = false;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    async submitForm(formData) {
        try {
            const response = await fetch(elements.contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
                elements.contactForm.reset();
                this.validator.errors = {};
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage('Sorry, there was an error sending your message. Please try again or contact me directly.', 'error');
        }
    }

    showMessage(message, type) {
        elements.formMessage.textContent = message;
        elements.formMessage.className = `form-message ${type}`;
        elements.formMessage.style.display = 'block';
        
        setTimeout(() => {
            elements.formMessage.style.display = 'none';
        }, 5000);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.isSubmitting) return;
        
        if (!this.validator.validateForm()) {
            this.showMessage('Please fix the errors above and try again.', 'error');
            return;
        }

        this.isSubmitting = true;
        const originalText = elements.submitBtn.querySelector('.btn-text').textContent;
        
        // Show loading state
        elements.submitBtn.disabled = true;
        elements.submitBtn.querySelector('.btn-text').textContent = 'Sending...';
        elements.submitBtn.querySelector('.btn-icon').innerHTML = '<div class="loading"></div>';

        const formData = new FormData(elements.contactForm);
        
        this.submitForm(formData).finally(() => {
            this.isSubmitting = false;
            elements.submitBtn.disabled = false;
            elements.submitBtn.querySelector('.btn-text').textContent = originalText;
            elements.submitBtn.querySelector('.btn-icon').innerHTML = '<i class="fas fa-paper-plane"></i>';
        });
    }

    bindEvents() {
        elements.contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }
}

// Scroll to Top Manager
class ScrollToTopManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.handleScroll();
    }

    handleScroll() {
        const scrolled = window.scrollY > 300;
        elements.scrollToTop.classList.toggle('visible', scrolled);
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    bindEvents() {
        elements.scrollToTop.addEventListener('click', () => this.scrollToTop());
        window.addEventListener('scroll', utils.throttle(() => this.handleScroll(), 100));
    }
}

// Animation Observer
class AnimationObserver {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.createObserver();
            this.observeElements();
        }
    }

    createObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);
    }

    observeElements() {
        const elementsToAnimate = document.querySelectorAll('.project-card, .skill-item, .contact-info, .about-description');
        elementsToAnimate.forEach(el => {
            if (this.observer) {
                this.observer.observe(el);
            }
        });
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        this.monitorPageLoad();
        this.preloadImages();
    }

    monitorPageLoad() {
        window.addEventListener('load', () => {
            // Log performance metrics
            if ('performance' in window) {
                const navigation = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart, 'ms');
            }
        });
    }

    preloadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.src; // Trigger load
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }
}

// Main Application
class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        try {
            // Initialize core components
            this.themeManager = new ThemeManager();
            this.navigationManager = new NavigationManager();
            this.scrollToTopManager = new ScrollToTopManager();
            this.animationObserver = new AnimationObserver();
            this.performanceMonitor = new PerformanceMonitor();

            // Initialize typewriter effect
            if (elements.typewriter) {
                this.typewriter = new TypewriterEffect(elements.typewriter, [
                    'Frontend Developer',
                    'UI/UX Designer', 
                    'Web Developer',
                    'Creative Coder'
                ]);
            }

            // Initialize contact form
            if (elements.contactForm) {
                this.contactFormManager = new ContactFormManager();
            }

            // Add additional event listeners
            this.bindGlobalEvents();

            console.log('Portfolio website initialized successfully');
        } catch (error) {
            console.error('Error initializing portfolio:', error);
        }
    }

    bindGlobalEvents() {
        // Handle keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navigationManager.isMenuOpen) {
                this.navigationManager.closeMobileMenu();
            }
        });

        // Handle focus management for accessibility
        document.addEventListener('focusin', (e) => {
            if (e.target.matches('a, button')) {
                e.target.style.outline = '2px solid var(--primary-color)';
            }
        });

        document.addEventListener('focusout', (e) => {
            if (e.target.matches('a, button')) {
                e.target.style.outline = '';
            }
        });

        // Handle print events
        window.addEventListener('beforeprint', () => {
            document.body.classList.add('printing');
        });

        window.addEventListener('afterprint', () => {
            document.body.classList.remove('printing');
        });
    }
}

// Initialize the application
const portfolio = new Portfolio();

// Export for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Portfolio,
        ThemeManager,
        NavigationManager,
        TypewriterEffect,
        FormValidator,
        ContactFormManager,
        utils
    };
}
