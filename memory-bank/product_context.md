# Product Context - Offshore Marine Website

## Project Overview
- A modern, sleek recreation of offshoresmarine.com
- Focus on maritime and offshore services in the oil and gas industry
- Blue color scheme to maintain industry association
- Using XIKOMBA website images as visual inspiration while adapting content language from offshoresmarine.com

## Implementation Status
- Complete website structure has been created
- All main pages have been implemented with sleek, modern design
- Responsive design accommodates all device sizes
- Placeholder system implemented for easy development
- Local development server configured
- Image asset paths standardized (SVG format)
- Logo and flag icons properly implemented
- Partner images replaced with placeholders
- Python HTTP server running on port 8000
- Browser preview configured for client review
- FireCrawl MCP server integrated for enhanced development capabilities

## Development Phases

### Phase 1: Front-End Development (Current Phase)
- **Purpose**: Create a complete, visually appealing front-end for client review and approval
- **Focus Areas**:
  - User interface design and implementation
  - Content creation and organization
  - Responsive design across all devices
  - Multi-language implementation
  - Interactive UI elements with client-side functionality
- **Deliverables**:
  - Fully functional static website
  - Completed visual assets and content
  - Form UI with front-end validation
  - Simulated interactive elements

### Phase 2: Back-End Implementation (Future Phase)
- **Purpose**: Add server-side functionality after client approval of front-end design
- **Focus Areas**:
  - Server infrastructure setup
  - Form submission processing
  - Email integration
  - Security implementation (including DDoS protection)
  - Analytics and monitoring
- **Deliverables**:
  - Functional contact forms with email delivery
  - Server-side validation and security
  - Production deployment with CDN integration
  - Performance optimization

## Target Audience
- Maritime industry professionals
- Oil and gas companies in Angola and international markets
- Offshore operations managers and procurement specialists
- Potential clients seeking offshore marine services and support

## User Experience Goals
- Clean, modern interface that is easy to navigate
- Mobile-responsive design for access across all devices
- Clear presentation of services and company information
- Straightforward contact mechanism with location information
- Multilingual support (English, Portuguese, French)
- Fast loading times and smooth performance

## Implemented Features
- Home page with hero banner showcasing maritime imagery and value proposition
- About Us section detailing company history, mission, vision, and values
- Services pages with comprehensive details on maritime offerings
- Products section displaying maritime equipment and supplies catalog
- Contact page with form and detailed location information
- Partners section highlighting strategic alliances
- Social media integration in footer
- Multi-location presentation showing Angola presence
- Consistent header and footer across all pages

## Content Focus
- Emphasis on offshore oil and gas industry terminology
- Maritime services for the Angolan market
- Compliance with international maritime standards
- Expertise in vessel chartering and fleet management
- Strategic planning and operational management services
- References to Angola-specific locations (Luanda, Lobito, Namibe, etc.)

## Design Language
- Modern, professional aesthetic with blue color scheme
- Clean typography with clear hierarchy
- Ample white space for readability
- Card-based content presentation
- Consistent iconography
- High-quality maritime imagery
- SVG format used for scalable visual elements
- Placeholder system for consistent development
- Standardized component dimensions across pages
- Consistent header and footer styling

## Website Design Style Guide

### Typography
- **Primary Font: Montserrat** - A clean modern sans-serif font used for body text and general content
  - Regular (400) weight for body text
  - Medium (500) weight for subheadings
  - Bold (600/700) weight for emphasis and headlines
  - Font sizes: 1rem base, 2.5rem for main headings, 1.5rem for subheadings
  - Characteristics: Clean, modern, highly legible sans-serif with balanced proportions

- **Secondary Font: Barlow Condensed** - A condensed sans-serif font used for headings, buttons, navigation, and call-to-action elements
  - Medium (500) and Semibold (600) weights for most headings
  - Bold (700) weight for primary headings
  - Applied with uppercase text transform and positive letter spacing (0.01-0.03em)
  - Characteristics: Low-contrast, grotesk-style condensed typeface that adds a technical, industrial character

### Color Palette
- **Primary Blue (#0a4a7a)** - Main brand color used for headers, key elements
- **Secondary Blue (#1c6ea4)** - Supporting blue for hover states and gradients
- **Accent Blue (#003057)** - Dark blue for footer, button hovers
- **Light Blue (#e1f5fe)** - Very light blue for backgrounds and hover effects
- **White (#ffffff)** - Used for text on dark backgrounds and card backgrounds
- **Light Gray (#f8f9fa)** - Used for section backgrounds
- **Dark Gray (#333333)** - Used for main text color
- **Text Gray (#6c757d)** - Used for secondary text

### Design Approach
- **Minimalist Design Philosophy**:
  - Clean, uncluttered layouts with ample whitespace
  - Reduced visual complexity for improved readability
  - Focus on content hierarchy and information architecture
  - Subtle visual elements that don't distract from content
  - Consistency in spacing and component design

### Spacing System
- **Standardized Spacing Variables**:
  - --spacing-xs: 0.5rem (8px) - Minimal spacing between close elements
  - --spacing-sm: 1rem (16px) - Standard spacing for related elements
  - --spacing-md: 2rem (32px) - Medium spacing for section content
  - --spacing-lg: 3rem (48px) - Large spacing for section divisions
  - --spacing-xl: 5rem (80px) - Extra large spacing for major sections

### Components & Elements
- **Buttons**:
  - Primary: Blue background with white text
  - Secondary: White background with blue text
  - 4px border radius
  - 10px vertical, 25px horizontal padding
  - Barlow Condensed font at 500 weight with uppercase text transform
  - Subtle hover effects with color transitions

- **Cards**:
  - White backgrounds
  - 4px border radius (reduced from 8px for minimalist appearance)
  - Subtle shadow hierarchy: 
    - --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05) - Default state
    - --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1) - Hover/active state
    - --shadow-lg: 0 8px 15px rgba(0, 0, 0, 0.1) - Elevated elements
  - Increased padding (var(--spacing-lg))
  - Minimal transition effects on hover (reduced Y-offset)

- **Navigation**:
  - Barlow Condensed font at 500 weight with uppercase text transform
  - Primary blue background
  - White text with light blue hover state
  - 15px vertical padding

- **Icons**:
  - Font Awesome library
  - Consistent sizing (sizes in rem units)
  - Primary blue color for standard state

- **Imagery**:
  - Maritime-themed high-quality photos
  - Overlay gradients for text readability
  - Consistent aspect ratios

### Spacing & Layout
- Bootstrap 5 grid system
- Consistent section padding (80px vertical for main sections)
- 30px component margin and padding
- Proper whitespace between text elements (1.6 line height)
- Responsive breakpoints at industry standards (992px, 768px, etc.)

### Responsive Behavior
- Mobile-first approach
- Stacked layouts on small screens
- Font size reduction on mobile (0.9x scale)
- Preserved whitespace for readability
- Collapsible navigation on small screens

> **Note:** Always reference this style guide when making design decisions. The typography choices of Montserrat and Barlow Condensed are fundamental to the brand identity and should be consistently applied across all pages and elements.
