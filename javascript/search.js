document.addEventListener('DOMContentLoaded', () => {
    // Detect whether we are in the root directory or inside the 'pages/' folder
    const isInPages = window.location.pathname.includes('/pages/');
    const p = isInPages ? '../' : './';

    // Comprehensive site-wide search index
    const siteIndex = [
        { title: "Home", url: p + "index.html", category: "Page", snippet: "Welcome to The GoodLife Bakery in Gqeberha." },
        { title: "About Us", url: p + "pages/about.html", category: "Page", snippet: "Established in 2021, our story, mission, and vision." },
        { title: "Services & Menu", url: p + "pages/services.html", category: "Page", snippet: "Browse our artisan breads, cakes, and coffee." },
        { title: "Enquiry / Custom Orders", url: p + "pages/enquiry.html", category: "Page", snippet: "Custom birthday/celebration cakes, wedding cakes, and event catering." },
        { title: "Contact Us", url: p + "pages/contactus.html", category: "Page", snippet: "Get in touch, view our address in Walmer, Gqeberha, and operating hours." },
        { title: "Traditional Sourdough", url: p + "index.html", category: "Product", snippet: "Naturally fermented for 24 hours for rich flavor." },
        { title: "Butter Croissants", url: p + "pages/services.html", category: "Product", snippet: "Made fresh every morning using French butter layering techniques." },
        { title: "Personalised Cakes", url: p + "pages/services.html", category: "Product", snippet: "Create your own custom cakes tailored to your needs." },
        { title: "Freshly Baked Artisan Bread", url: p + "pages/services.html", category: "Product", snippet: "Handcrafted artisan bread for R28.00 only." },
        { title: "Artisan Coffee", url: p + "index.html", category: "Feature", snippet: "Paired perfectly with freshly roasted premium espresso beans." }
    ];

    // Automatically scrape headings and text snippets from the currently open page content
    const pageMain = document.querySelector('main');
    if (pageMain) {
        const currentUrl = window.location.href;
        const pageTitleElement = document.querySelector('title');
        const pageTitle = pageTitleElement ? pageTitleElement.innerText : "Current Page";

        // Grab headings and main paragraphs to include in live search
        const contentElements = pageMain.querySelectorAll('h1, h2, h3, h4, p, .service-card, .info-card');
        contentElements.forEach(el => {
            const text = el.innerText.trim();
            if (text.length > 5 && text.length < 150) {
                siteIndex.push({
                    title: pageTitle + " Content",
                    url: currentUrl,
                    category: "On This Page",
                    snippet: text
                });
            }
        });
    }

    const searchInput = document.getElementById('site-search');
    const searchBtn = document.getElementById('search-btn');

    if (!searchInput) return;

    // Create or locate the results dropdown container
    let dropdown = document.getElementById('search-results-dropdown');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'search-results-dropdown';
        dropdown.className = 'search-dropdown';
        searchInput.parentNode.style.position = 'relative';
        searchInput.parentNode.appendChild(dropdown);
    }

    let currentMatches = [];

    function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query.length === 0) {
            dropdown.style.display = 'none';
            dropdown.innerHTML = '';
            currentMatches = [];
            return;
        }

        // Filter index items matching title, snippet, or category
        currentMatches = siteIndex.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.snippet.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );

        // Remove duplicate entries pointing to the exact same URL + snippet combination
        currentMatches = currentMatches.filter((v, i, a) => a.findIndex(t => (t.url === v.url && t.snippet === v.snippet)) === i);

        if (currentMatches.length > 0) {
            dropdown.innerHTML = currentMatches.map(item => `
                <a href="${item.url}" class="search-result-item">
                    <span class="search-category">${item.category}</span>
                    <strong>${item.title}</strong>
                    <p>${item.snippet}</p>
                </a>
            `).join('');
            dropdown.style.display = 'block';
        } else {
            dropdown.innerHTML = `<div class="search-no-results">No results found for "${query}"</div>`;
            dropdown.style.display = 'block';
        }
    }

    function handleEnterOrSubmit() {
        handleSearch();
        // If user presses enter and there are valid results, navigate to the first match automatically
        if (currentMatches.length > 0) {
            window.location.href = currentMatches[0].url;
        }
    }

    // Trigger search live on typing
    searchInput.addEventListener('input', handleSearch);

    // Trigger search or jump to top result when clicking the search button
    if (searchBtn) {
        searchBtn.addEventListener('click', handleEnterOrSubmit);
    }

    // Trigger feedback/navigation when pressing the Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleEnterOrSubmit();
        }
    });

    // Hide dropdown when clicking outside the search container
    document.addEventListener('click', (e) => {
        if (!searchInput.parentNode.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
});