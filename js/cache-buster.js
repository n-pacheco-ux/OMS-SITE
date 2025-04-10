document.addEventListener('DOMContentLoaded', function() {
    // Add timestamp to image sources for cache busting
    const timestamp = new Date().getTime();
    const images = document.querySelectorAll('img');
    
    images.forEach(function(img) {
        if (img.src.indexOf('?') === -1) {
            img.src = img.src + '?v=' + timestamp;
        } else {
            img.src = img.src.split('?')[0] + '?v=' + timestamp;
        }
    });
    
    // Also handle background images with inline styles
    const elementsWithBgImage = document.querySelectorAll('[style*="background-image"]');
    elementsWithBgImage.forEach(function(el) {
        const style = el.getAttribute('style');
        // Extract the URL
        const match = style.match(/url\(['"]?([^'"]+)['"]?\)/);
        if (match && match[1]) {
            const url = match[1];
            const newUrl = url.indexOf('?') === -1 ? 
                url + '?v=' + timestamp : 
                url.split('?')[0] + '?v=' + timestamp;
            
            // Replace the old URL with the new one
            const newStyle = style.replace(url, newUrl);
            el.setAttribute('style', newStyle);
        }
    });
});
