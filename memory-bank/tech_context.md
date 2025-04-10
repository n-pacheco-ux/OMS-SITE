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

## Performance Optimization Techniques
- **Lazy Loading Implementation**: 
  - Created dedicated `lazy-load.js` script that watches for images entering viewport
  - Uses IntersectionObserver API for modern performance
  - Replaces data-src attributes with src when images come into view
  - Implemented across all HTML pages to enhance loading speed

- **CSS Architecture**:
  - Base styling in `style.css` with core theme variables (colors, typography, spacing)
  - Enhancement layer in `refinements.css` for design improvements and consistency
  - Use of CSS variables for maintainable color themes
  - Explicit color values (#e1f5fe) used where CSS variable inheritance caused inconsistencies

- **JavaScript Modularity**:
  - `main.js`: Core functionality including navbar, animations, and form validation
  - `language.js`: Multi-language implementation using data-i18n attributes
  - `lazy-load.js`: Image optimization and performance enhancement
  - `cache-buster.js`: Previously used to prevent browser caching issues during development (now disabled for production)

## Phase-Based Technical Implementation

### Phase 1: Front-End Focus (Current Phase - Complete)
- Static site implementation with HTML, CSS, and client-side JavaScript
- Basic form structure with minimal client-side validation
- Language switching through client-side JavaScript and localStorage
- Image optimization with lazy loading
- Responsive design across all device sizes
- Standardized UI components with consistent styling

### Phase 2: Back-End Integration & UI/UX Enhancement (Future Phase)

- **Recommended UI/UX Enhancement Technologies**:
  - **React.js Integration**: 
    - Convert static pages to React components for more dynamic interactions
    - Implement smooth page transitions without full page reloads
    - Create reusable components for consistent UI elements
  
  - **Animation Libraries**:
    - GSAP (GreenSock Animation Platform) for advanced animations and scroll-triggered effects
    - Motion One for lightweight performant animations
    - Lottie for complex vector animations that enhance visual storytelling

  - **Progressive Web App (PWA) Features**:
    - Service workers for offline functionality
    - Add to home screen capability
    - Push notifications for updates

  - **Modern CSS Frameworks**:
    - Tailwind CSS for utility-first styling that complements Bootstrap
    - CSS Modules or Styled Components if transitioning to React
    - CSS Custom Properties for more advanced theming capabilities

  - **UI Component Libraries**:
    - Material UI or Chakra UI if moving to React
    - Advanced form components with superior validation UX
    - Accessible UI components that follow WCAG guidelines

  - **Advanced Form UX**:
    - React Hook Form for efficient form handling
    - Formik + Yup for robust validation with improved user feedback
    - Multi-step form processes with progress indicators

- **Server Infrastructure**:
  - Production web server setup (Node.js with Express)
  - Database integration for contact form submissions (MongoDB or PostgreSQL)
  - CDN configuration for assets delivery (Cloudflare or AWS CloudFront)
  - Rate limiting for API endpoints
  - Advanced contact form with validation and email integration

- **Security Implementation**:
  - DDoS protection through CDN and server configuration
  - Input sanitization for all form submissions
  - HTTPS enforcement
  - Security headers implementation
  - Cross-site request forgery (CSRF) protection

- **Integration Points**:
  - Contact form submissions → Email delivery system (SendGrid or AWS SES)
  - Google Analytics 4 with enhanced ecommerce tracking
  - Server-side rendering options for improved SEO
  - Scheduled backups and maintenance routines

## Advanced UI/UX Technical Recommendations

### Modern Interaction Patterns

- **Micro-interactions**: Small, subtle animations that provide feedback for user actions
  - Tools: Framer Motion, React Spring
  - Benefits: Increases engagement, provides visual confirmation of actions

- **Skeleton Screens**: Replace traditional loading spinners with content placeholders
  - Implementation: CSS animations or dedicated libraries like react-loading-skeleton
  - Benefits: Perceived performance improvement, reduced user frustration

- **Contextual Help Systems**:
  - Implementation: Tooltips, inline hints, guided tours using libraries like Shepherd.js
  - Benefits: Improves user onboarding, reduces learning curve

### Performance Optimization 2.0

- **Module Bundling & Code Splitting**:
  - Tools: Webpack, Rollup, or Vite
  - Benefits: Faster initial load times by only loading necessary code

- **Image Optimization Pipeline**:
  - Integrate with image CDNs like Cloudinary or Imgix
  - Automatic WebP/AVIF conversion for modern browsers
  - Responsive images with srcset and sizes attributes

- **Resource Hints**:
  - Implement preload, prefetch, and preconnect for critical resources
  - Benefits: Faster perceived performance through optimized resource loading

### Interactive Elements

- **Dynamic Maps Integration**:
  - Tools: Mapbox or Google Maps with custom styling
  - Features: Interactive vessel tracking, service areas visualization

- **Chat & Support System**:
  - Options: Custom widget or integration with Intercom, Drift, etc.
  - Features: Automated responses for common questions, live chat during business hours

- **Personalization Engine**:
  - Implementation: Browser storage or account-based preferences
  - Features: Remember language preference, visited services, location-based content

### Technical Debt Prevention

- **Testing Infrastructure**:
  - Unit tests with Jest
  - E2E testing with Cypress
  - Accessibility testing with axe-core

- **Component Documentation**:
  - Storybook for UI component documentation
  - Comprehensive API documentation for backend services

- **Monitoring & Analytics**:
  - Performance monitoring with Lighthouse CI
  - Error tracking with Sentry or LogRocket
  - User behavior analytics with Hotjar

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

## Recent Technical Updates (April 10, 2025)
- Disabled cache-buster.js functionality across all pages as part of Phase 2 preparation (April 10, 2025)
- Removed version parameters from all CSS file references to simplify resource paths (April 10, 2025)
- Fixed image filename references to use proper naming conventions (dashes vs. underscores) (April 9, 2025)
- Created cache-buster.js to help with browser caching issues (April 9, 2025) - now disabled
- Fixed translation system issue with partners page (April 9, 2025)
- Fixed all image path references from PNG to SVG
- Standardized image handling across all pages
- Implemented placeholder elements for partner logos
- Fixed 404 console errors related to missing assets
- Set up development preview using browser_preview tool
- Integrated FireCrawl MCP for enhanced functionality
- Configured MCP server with appropriate API keys
