// Gallery data
const galleryItems = [
    {
        title: "Eminem",
        medium: "Charcoal & Graphite",
        size: "A3 (297 x 420 mm)",
        price: "KSh. 5,600",
        image: "artwork1.jpg.jpg"
    },
    {
        title: "SHE",
        medium: "Charcoal, Graphite & Colored Pencils",
        size: "A3 (297 x 420 mm)",
        price: "KSh. 5,600",
        image: "artwork2.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Colored Pencils",
        size: "A4 (210 x 297 mm)",
        price: "KSh. 3,000",
        image: "artwork3.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Colored Pencils",
        size: "A5 (200 x 200 mm)",
        price: "KSh. 3,000",
        image: "artwork4.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Graphite",
        size: "A3 (297 x 420 mm)",
        price: "KSh. 5,600",
        image: "artwork5.jpg.jpg"
    },
    {
        title: "Eccedentesiast",
        medium: "Charcoal, Graphite & Pastels",
        size: "A3 (297 x 420 mm)",
        price: "KSh. 5,600",
        image: "artwork6.jpg.jpg"
    },
    {
        title: "Bloom in Silence",
        medium: "Charcoal, Graphite & Colored Pencils",
        size: "A3 (297 x 420 mm)",
        price: "KSh. 5,600",
        image: "artwork7.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Graphite",
        size: "A4 (210 x 297 mm)",
        price: "KSh. 3,000",
        image: "artwork8.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Pastels",
        size: "A4 (210 x 297 mm)",
        price: "KSh. 3,000",
        image: "artwork9.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal, Pastels & Watercolors",
        size: "A2 (500 x 600 mm)",
        price: "KSh. 15,000",
        image: "artwork10.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Pastels",
        size: "A3 (297 x 420 mm)",
        price: "KSh. 5,600",
        image: "artwork11.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Pastels",
        size: "A4 (210 x 297 mm)",
        price: "KSh. 3,000",
        image: "artwork12.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Mixed Media",
        size: "A3 (297 x 420 mm)",
        price: "KSh. 5,600",
        image: "artwork13.jpg.jpg"
    }
];

// Load gallery items
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return; // Only run on gallery page
    
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="gallery-item-info">
                <h3>${item.title}</h3>
                <div class="gallery-item-details">
                    <p><strong>Medium:</strong> ${item.medium}</p>
                    <p><strong>Size:</strong> ${item.size}</p>
                    <p class="price"><strong>Price:</strong> ${item.price}</p>
                </div>
                <a href="https://wa.me/254103142621?text=Hi%20Jim%2C%20I%27m%20interested%20in%20%22${encodeURIComponent(item.title)}%22%20-%20${item.price}" target="_blank" class="order-button">
                    <i class="fab fa-whatsapp"></i> Order via WhatsApp
                </a>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    loadGallery();
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.style.display = 'none';
            }
        });
    });
});
