# Changelog

All notable changes to **The Goodlife Bakery** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [2.0.0] - 2026-10-27

### Added
* **Multi-Page Website Structure**:
  * Added `pages/about.html` highlighting bakery background, mission, and vision statements.
  * Added `pages/services.html` showcasing product cards with pricing and details.
  * Added `pages/enquiry.html` with an interactive custom order and catering request form.
  * Added `pages/contactus.html` featuring opening hours, postal/physical addresses, embedded Google Maps, and contact form.
* **JavaScript Interactivity (`javascript/`)**:
  * `main.js`: Automated active navigation highlighting and smooth scrolling for anchor links.
  * `lightbox.js`: Dynamic image lightbox modal supporting click-to-enlarge views, keyboard escape dismissal, and overlay close behavior.
  * `search.js`: Live site-wide search with autocomplete dropdown indexing both static site pages and active DOM content.
  * `validation.js`: Client-side form validation with regex pattern checks for emails, South African mobile numbers, and dynamic error messages.
* **EmailJS Integration**:
  * Direct form submission handling on `contactus.html` and `enquiry.html` using the EmailJS Browser SDK.
  * Real-time submission status feedback and form resets upon successful transmission.
* **Enhanced Visual Styling (`css/style.css`)**:
  * Brand color palette with CSS custom properties (`:root`).
  * Social link icons with custom inline SVG brand logos (Facebook, Instagram, X/Twitter, YouTube).
  * Responsive navigation, product grids, and form UI styling.

### Changed
* Updated root `index.html` navigation links to map seamlessly to subpages in `pages/`.
* Expanded CSS layout rules to support multi-column footers, product card grids, and interactive search dropdowns.

---

## [1.0.0] - 2026-09-15

### Added
* Initial submission release for the WEDE5020 Part 2 assessment.
* Standardized project folder hierarchy with dedicated `css/` and `images/` directories.
* Integrated primary media assets including `images/Artisan bread.png`.
* Created core stylesheet (`css/style.css`) managing visual layout, color schemes, and site typography.
* Created main landing page (`index.html`) using semantic HTML5 elements.
* Added complete project documentation (`README.md` and `CHANGELOG.md`).

### Changed
* Optimized asset paths across HTML and CSS files for consistent folder mapping.
* Refined CSS rules to ensure proper page layout and cross-browser presentation.