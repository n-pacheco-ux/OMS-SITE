// Lazy loading implementation for Offshore Marine Website
document.addEventListener('DOMContentLoaded', function() {
    // Options for the Intersection Observer
    const options = {
        root: null, // use viewport as root
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    // Handler for when elements enter the viewport
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Replace src with data-src
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                // Replace srcset with data-srcset (for responsive images)
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                    img.removeAttribute('data-srcset');
                }
                
                // Add loaded class for potential animations
                img.classList.add('loaded');
                
                // Stop observing the element once loaded
                observer.unobserve(img);
            }
        });
    };

    // Create the observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Find all images with data-src attribute and observe them
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        observer.observe(img);
    });

    // Add a placeholder style for images before they load
    const style = document.createElement('style');
    style.textContent = `
        img[data-src] {
            opacity: 0;
            transition: opacity 0.3s ease-in;
        }
        img.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    console.log('Lazy loading initialized for ' + lazyImages.length + ' images');
});
