# The Goodlife Bakery – Full-Stack Web Application

This repository contains the complete responsive web application for **The Goodlife Bakery**, built as part of the WEDE5020 assessment. The platform features an interactive multi-page frontend built with HTML5, custom CSS3, modular JavaScript, client-side form validation, dynamic image lightboxes, site-wide search, and EmailJS backend integration.

---

## Repository Structure

```text
THOMAS-MAART-WEDE5020/
├── css/
│   └── style.css            # Centralized stylesheet (branding, layouts, search, forms, footer)
├── images/                  # Product imagery, logos, and visual assets
│   ├── Artisan bread.png
│   ├── Butter Croissants.png
│   ├── Personalised Cakes.png
│   ├── Traditional Sourdough.png
│   └── logo 1.png
├── javascript/              # Modular JavaScript files
│   ├── lightbox.js          # Interactive image modal viewer
│   ├── main.js              # Active nav highlighting and smooth scrolling
│   ├── search.js            # Live site search index and dropdown parser
│   └── validation.js        # Form validation and South African phone/email regex checks
├── pages/                   # Multi-page HTML views
│   ├── about.html           # Bakery story, mission, and vision
│   ├── contactus.html       # Location details, Google Maps embed, opening hours & contact form
│   ├── enquiry.html         # Custom order & catering quote request form
│   └── services.html        # Bakery service and product offerings menu
├── index.html               # Main landing page & hero banner
├── README.md                # Project overview and instructions
└── CHANGELOG.md             # Version history and detailed feature logs

Key Features & Functionality
Responsive Multi-Page Layout: Fully accessible layout optimized across desktop, tablet, and mobile breakpoints using CSS Grid and Flexbox.

Client-Side Form Validation: Dynamic error handling for user inputs using regex matching for South African phone numbers (+27 / 0...) and standard email addresses.

EmailJS Integration: Real-time email delivery directly from contactus.html and enquiry.html with live status messages (Sending..., success/failure notifications).

Live Site-Wide Search: Instant search functionality indexing static site paths and dynamically parsing headings and content from the active DOM.

Interactive Image Lightbox: Modal window that opens high-resolution views of product/service cards on click, supporting keyboard (ESC) and backdrop dismissal.

Accessible Navigation & Footers: Automatic link highlighting (.active), social media links with SVG icons, and standard contact details.

Getting Started
Prerequisites
Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).

Code editor (e.g., Visual Studio Code).

Running the Project
Clone or Extract the project repository to your desired folder.

Open in Visual Studio Code:

Go to File > Open Folder... and select the project root directory.

Launch the Site:

Open index.html directly in your browser, or

Use the Live Server extension in VS Code by right-clicking index.html and selecting Open with Live Server.

Tech Stack & Dependencies
HTML5: Semantic layout and document structure.

CSS3: Custom design system using CSS variables, Flexbox, CSS Grid, and media queries.

JavaScript (ES6+): Vanilla DOM manipulation, dynamic component creation, and validation logic.

EmailJS Browser SDK (v4): Asynchronous REST client-side contact form dispatch.

Figma & draw.io: UI/UX wireframing, layout architecture, and prototyping.

Author
Student Name: Thomas Maart

Module: WEDE5020 – Web Development 1

References
Afrihost, 2026. Linux Web Hosting Plans & Domain Registration. [Online] Available at: https://www.afrihost.com [Accessed 07 August 2026].

EmailJS, 2026. EmailJS Documentation and SDK Reference. [Online] Available at: https://www.emailjs.com/docs/ [Accessed 15 October 2026].

W3Schools, 2026. HTML5, CSS3, and JavaScript Guides. [Online] Available at: https://www.w3schools.com/ [Accessed 05 August 2026].