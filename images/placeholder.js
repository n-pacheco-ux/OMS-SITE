// This file creates base64-encoded placeholder images for initial development
// These can be replaced with actual images later

function createPlaceholderImage(width, height, bgColor, textColor, text) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Fill background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    
    // Add text
    ctx.fillStyle = textColor;
    ctx.font = `${Math.round(height/10)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width/2, height/2);
    
    return canvas.toDataURL('image/jpeg', 0.8);
}

// Placeholder script disabled - real images are now being used
/*
document.addEventListener('DOMContentLoaded', function() {
    // Hero background
    const heroBg = document.querySelector('.hero-section');
    if (heroBg) {
        heroBg.style.backgroundImage = `url(${createPlaceholderImage(1200, 600, '#0a4a7a', '#ffffff', 'Hero Background')})`;
    }
    
    // Placeholder for main images
    const placeholderImages = document.querySelectorAll('img[src^="images/"]');
    placeholderImages.forEach(img => {
        if (!img.src.includes('logo')) {
            const size = img.classList.contains('img-fluid') ? [600, 400] : [300, 200];
            img.src = createPlaceholderImage(size[0], size[1], '#1c6ea4', '#ffffff', img.alt || 'Placeholder');
        }
    });
});
*/
