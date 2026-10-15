/**
 * lightbox.js - Interactive image modal viewer for product/service images
 * The GoodLife Bakery
 */

document.addEventListener('DOMContentLoaded', () => {
    // Create Lightbox Modal Structure Dynamically
    const lightboxModal = document.createElement('div');
    lightboxModal.id = 'lightboxModal';
    lightboxModal.className = 'lightbox-modal';
    lightboxModal.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" id="lightboxImg" alt="Enlarged View">
        <div class="lightbox-caption" id="lightboxCaption"></div>
    `;
    document.body.appendChild(lightboxModal);

    // Inject corresponding basic styles for the lightbox dynamically
    const styleTag = document.createElement('style');
    styleTag.textContent = `
        .lightbox-modal {
            display: none;
            position: fixed;
            z-index: 9999;
            padding-top: 60px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.9);
        }
        .lightbox-content {
            margin: auto;
            display: block;
            max-width: 80%;
            max-height: 80vh;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        }
        .lightbox-caption {
            margin: 15px auto;
            text-align: center;
            color: #fff;
            font-size: 1.1rem;
            font-family: inherit;
        }
        .lightbox-close {
            position: absolute;
            top: 30px;
            right: 45px;
            color: #f1f1f1;
            font-size: 40px;
            font-weight: bold;
            transition: 0.3s;
            cursor: pointer;
        }
        .lightbox-close:hover,
        .lightbox-close:focus {
            color: #bbb;
            text-decoration: none;
        }
        .product-card img, .service-image {
            cursor: pointer;
            transition: transform 0.2s ease;
        }
        .product-card img:hover, .service-image:hover {
            transform: scale(1.02);
        }
    `;
    document.head.appendChild(styleTag);

    const modalImg = document.getElementById('lightboxImg');
    const modalCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.querySelector('.lightbox-close');

    // Attach click event to all product and service images
    const galleryImages = document.querySelectorAll('.product-card img, .service-image');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxModal.style.display = 'block';
            modalImg.src = img.src;
            
            // Extract title/caption from adjacent heading if available
            const card = img.closest('.product-card, .service-card');
            const title = card ? card.querySelector('h3').textContent : img.alt;
            modalCaption.textContent = title;
        });
    });

    // Close Modal via 'X' button
    closeBtn.addEventListener('click', () => {
        lightboxModal.style.display = 'none';
    });

    // Close Modal when clicking outside the image
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            lightboxModal.style.display = 'none';
        }
    });

    // Close Modal via Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal.style.display === 'block') {
            lightboxModal.style.display = 'none';
        }
    });
});