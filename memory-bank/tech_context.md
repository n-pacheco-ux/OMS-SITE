# Technical Context - Offshore Marine Website

## Technology Stack
- HTML5
- CSS3 (with modern features like Flexbox and Grid)
- JavaScript (ES6+)
- Bootstrap 5 (for responsive design framework)
- Font Awesome 6.0.0 (for icons)
- jQuery 3.6.0 (for DOM manipulation)

## Development Environment
- Visual Studio Code for development
- Python's built-in HTTP server for local testing (python -m http.server)
- Browser preview for client review
- FireCrawl MCP server for enhanced development capabilities

## Technical Constraints
- Must maintain fast loading times despite high-quality images
- Compatible with modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design is essential
- Blue color scheme as per client requirement

## Phase-Based Technical Implementation

### Phase 1: Front-End Focus (Current Phase)
- Static site implementation with HTML, CSS, and client-side JavaScript
- Form validation handled through JavaScript (no server-side processing)
- Simulated form submission for demonstration purposes
- Language switching through client-side JavaScript and localStorage
- All interactive elements implemented with front-end functionality only

### Phase 2: Back-End Integration (Future Phase)
- **Server Infrastructure**:
  - Production web server setup (likely Node.js or similar)
  - Database integration for contact form submissions
  - CDN configuration for assets delivery
  - Rate limiting for API endpoints

- **Security Implementation**:
  - DDoS protection through CDN and server configuration
  - Input sanitization for all form submissions
  - HTTPS enforcement
  - Security headers implementation
  - Cross-site request forgery (CSRF) protection

- **Integration Points**:
  - Contact form submissions → Email delivery system
  - Google Analytics or similar for visitor tracking
  - Server-side rendering options for improved SEO
  - Scheduled backups and maintenance routines

## Dependencies
- Bootstrap 5.3.0 (CDN linked)
- Font Awesome 6.0.0 (CDN linked)
- jQuery 3.6.0 (CDN linked)
- Google Fonts (Poppins and Roboto via CSS import)

## System Architecture
- Static website with HTML, CSS, and JavaScript
- Contact form with client-side form validation
- Placeholder image script for development
- CSS variables for theming and consistent styling

## File Structure
```
offshore-marine-website/
├── index.html
├── about.html
├── services.html
├── products.html
├── partners.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── language.js
├── images/
│   ├── logo.svg
│   └── placeholder.js
├── assets/
│   ├── icons/
│   │   ├── flag-en.svg
│   │   ├── flag-pt.svg
│   │   └── flag-fr.svg
│   └── fonts/
└── memory-bank/
    ├── product_context.md
    ├── tech_context.md
    └── progress.md
```

## Key Technical Decisions
- Use of CSS variables for color scheme and theming
- Implementation of responsive design using Bootstrap 5
- Placeholder.js script for image generation during development
- Client-side form validation using JavaScript
- SVG icons for language selection and logo
- Semantic HTML structure for accessibility and SEO

## Design Patterns
- Component-based design for reusable elements (header, footer, cards)
- Mobile-first responsive design (Bootstrap's grid system)
- CSS namespacing to avoid style conflicts
- Event delegation for interactive elements
- Modular JavaScript for maintainability

## Implementation Details
- Color palette defined in CSS variables for easy theming
- Navigation responsive breakpoints at 992px (large) and 768px (medium)
- Form validation using custom JavaScript (no server-side validation yet)
- Placeholder images generated on-the-fly during development
- Footer consistent across all pages for unified user experience
- SVG format used for logo and language flags
- Placeholder script implemented for partner logos and other imagery
- Local development server using Python's built-in HTTP server

## Multi-Language Implementation

### Overview
The website implements a multi-language system supporting English, Portuguese, and French. This functionality is crucial to understand as it affects content updates throughout the site.

### Implementation Details
- **Translation Storage**: All translations are stored in `js/language.js` in a nested object structure
- **HTML Integration**: Elements that need translation have `data-i18n` attributes with keys matching entries in the language.js file
- **Language Switching**: Flag icons trigger language changes via click events
- **Language Selection**: The following language flags are implemented:
  - English: flag-en.svg
  - Portuguese: flag-pt.svg
  - French: flag-fr.svg
- **User Preference**: Language selection is stored in localStorage using the 'language' key

### IMPORTANT: How Content Is Displayed
- **Elements with `data-i18n` attributes ALWAYS display content from the language.js file, NOT from the HTML**
- **When updating content for elements with `data-i18n` attributes, both the HTML and the corresponding translation entries in language.js MUST be updated**
- **Updates to HTML alone for elements with `data-i18n` attributes will not be visible to users**

### Translation File Structure
```javascript
const translations = {
    "en": {
        "key1": "English content",
        "key2": "More English content",
        // More translation keys
    },
    "pt": {
        "key1": "Portuguese content",
        "key2": "More Portuguese content",
        // More translation keys
    },
    "fr": {
        "key1": "French content",
        "key2": "More French content",
        // More translation keys
    }
};
```

### Content Update Procedure
1. Identify elements that need content updates
2. Check if they have `data-i18n` attributes
3. If they do have `data-i18n` attributes:
   - Update the HTML content (this won't be visible but maintains code readability)
   - Update the corresponding entries in language.js for all supported languages
4. If they don't have `data-i18n` attributes:
   - Simply update the HTML content

## Image Asset Management

### Image Naming Conventions
- **IMPORTANT**: All engineer and staff images use dashes, not underscores (e.g., `engineer-male.jpg`, not `engineer_male.jpg`)
- Partner logos are stored as JPG files in ALL CAPS (e.g., `SONANGOL.jpg`, `WILHELMSEN.jpg`)
- Product and shipping images use title case with spaces (e.g., `Cargo ship side.jpg`, `Office building.jpg`)
- Company logo is maintained in PNG format (`Logo_OMS_retina_w-01.png`) for favicon and brand consistency
- Background images for headers are referenced directly in the HTML with inline style attributes

### Image File Paths
The project uses the following important images:

- Engineer images:
  - `images/engineer-male.jpg` - Used on index page in expertise section
  - `images/engineer-female.jpg` - Used as background in services page header

- Location/Building images:
  - `images/Office building.jpg` - Used on about page
  - `images/Cargo ship side.jpg` - Used as background in products page header

- Oil Rig images:
  - `images/oil-rig-1.jpg` - Used in services page for Ship Agency Services
  - `images/oil-rig-2.jpg` - Used in services page for Freight & Forwarding Services

- Connection images:
  - `images/Connection.jpg` - Used as background in contact page header
  - `images/Handshake.jpg` - Used as background in partners page header

- Partner logos:
  - `images/SONANGOL.jpg` - Main partner logo
  - `images/WILHELMSEN.jpg` - Main partner logo
  - `images/YOKOHAMA.jpg` - Featured partner
  - `images/ENOC.jpg` - Featured partner
  - `images/COMET.jpg` - Additional partner
  - `images/TECNOSUB.jpg` - Additional partner

### Common Image Troubleshooting
1. Check for filename case sensitivity issues - all filenames must match exactly, including case
2. Verify that image paths use dashes (`-`) for engineer images, not underscores (`_`)
3. When adding new images, use the cache-buster.js script to avoid browser caching issues
4. For background images in inline styles, ensure URLs are enclosed properly: `url('images/filename.png')`
5. When browser caching issues persist, try adding `?v=timestamp` query parameters to force a refresh

## Recent Technical Updates (April 9, 2025)
- Fixed image filename references to use proper naming conventions (dashes vs. underscores) (April 9, 2025)
- Created cache-buster.js to help with browser caching issues (April 9, 2025)
- Fixed translation system issue with partners page (April 9, 2025)
- Fixed all image path references from PNG to SVG
- Standardized image handling across all pages
- Implemented placeholder elements for partner logos
- Fixed 404 console errors related to missing assets
- Set up development preview using browser_preview tool
- Integrated FireCrawl MCP for enhanced functionality
- Configured MCP server with appropriate API keys
