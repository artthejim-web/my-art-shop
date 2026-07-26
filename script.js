// Gallery data
const galleryItems = [
    {
        title: "Uliza Kiatu",
        medium: "Charcoal & Graphite",
        size: "A3 (28 x 28 cm)",
        price: "KSh. 3,000",
        image: "1784988175244.tuxpi.jpg"
    },
    {
        title: "Eminem",
        medium: "Charcoal & Graphite",
        size: "A3 (29.7 x 42 cm)",
        price: "KSh. 5,600",
        image: "artwork1.jpg.jpg"
    },
    {
        title: "SHE",
        medium: "Charcoal, Graphite & Colored Pencils",
        size: "A3 (29.7 x 42 cm)",
        price: "KSh. 5,600",
        image: "artwork2.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Colored Pencils",
        size: "A4 (21 x 29.7 cm)",
        price: "KSh. 3,000",
        image: "artwork3.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Colored Pencils",
        size: "A5 (20 x 20 cm)",
        price: "KSh. 3,000",
        image: "artwork4.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Graphite",
        size: "A3 (29.7 x 42 cm)",
        price: "KSh. 5,600",
        image: "artwork5.jpg.jpg"
    },
    {
        title: "Eccedentesiast",
        medium: "Charcoal, Graphite & Pastels",
        size: "A3 (29.7 x 42 cm)",
        price: "KSh. 5,600",
        image: "artwork6.jpg.jpg"
    },
     {
        title: "Slim Shady",
        medium: "Charcoal, Graphite & Pastels",
        size: "A3 (21 x 29.7 cm)",
        price: "KSh. 3,000",
        image: "1783017867133.tuxpi.jpg"
    },
    {
        title: "Bloom in Silence",
        medium: "Charcoal, Graphite & Colored Pencils",
        size: "A3 (29.7 x 42 cm)",
        price: "KSh. 5,600",
        image: "artwork7.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Graphite",
        size: "A4 (21 x 29.7 cm)",
        price: "KSh. 3,000",
        image: "artwork8.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Pastels",
        size: "A4 (21 x 29.7 cm)",
        price: "KSh. 3,000",
        image: "artwork9.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal, Pastels & Watercolors",
        size: "A2 (50 x 60 cm)",
        price: "KSh. 7,500",
        image: "artwork10.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Pastels",
        size: "A3 (29.7 x 42 cm)",
        price: "KSh. 5,600",
        image: "artwork11.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Pastels",
        size: "A4 (21 x 29.7 cm)",
        price: "KSh. 3,000",
        image: "artwork12.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Mixed Media",
        size: "A3 (29.7 x 42 cm)",
        price: "KSh. 5,600",
        image: "artwork13.jpg.jpg"
    },
    {
        title: "The Boy Who Dreamt",
        medium: "Mixed Media",
        size: "A2 (60 x 74 cm)",
        price: "KSh. 7,500",
        image: "1782860311019.tuxpi.jpg"
    },
     {
        title: "The Radiant Child",
        medium: "Mixed Media",
        size: "A2 (50 x 70 cm)",
        price: "KSh. 7,500",
        image: "1783253093803.tuxpi.jpg"
    },
     {
        title: "Untitled",
        medium: "Mixed Media",
        size: "A2 (50 x 70 cm)",
        price: "KSh. 7,500",
        image: "1783436581929.tuxpi.jpg"
     },
      {
        title: "CR7",
        medium: "Mixed Media",
        size: "A2 (50 x 70 cm)",
        price: "KSh. 7,500",
        image: "1783757506499.tuxpi.jpg"
     }
];

let currentArtworkIndex = 0;
let currentGallery = 'gallery'; // tracks which one is open

// Load gallery items
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.onclick = function() {
            openLightbox(index, 'gallery');
        };
        galleryItem.innerHTML = `
            <div class="gallery-item-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="gallery-item-info">
                <h3>${item.title}</h3>
                <div class="gallery-item-details">
                    <p><strong>Medium:</strong> ${item.medium}</p>
                    <p><strong>Size:</strong> ${item.size}</p>
                    <p class="price">${item.price}</p>
                </div>
                <button class="order-button" onclick="event.stopPropagation()">
                    <i class="fab fa-whatsapp"></i> Order via WhatsApp
                </button>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Load sale items
function loadSale() {
    const saleGrid = document.getElementById('saleGrid');
    const countEl = document.getElementById('saleCount');
    if (!saleGrid) return;

    countEl.textContent = `${cinematicPrints.length} prints`;

    cinematicPrints.forEach((item, index) => {
        const msg = encodeURIComponent(`Hi Jim! I'm interested in "${item.title}" - ${item.size} for ${item.price}`);
        const waLink = `https://wa.me/254103142621?text=${msg}`;
        const card = document.createElement('div');
        card.className = 'sale-card';
        card.onclick = function() { openLightbox(index, 'sale'); };
        card.innerHTML = `
            <span class="sale-discount-tag">30% OFF</span>
            <img class="sale-card-image" src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="sale-card-info">
                <h3>${item.title}</h3>
                <p class="meta">${item.medium} · ${item.size}</p>
                <div class="sale-price-row">
                    <span class="sale-price-now">${item.price}</span>
                    <span class="sale-price-was">${item.originalPrice}</span>
                </div>
                <a href="${waLink}" target="_blank" class="sale-order-btn" onclick="event.stopPropagation()">
                    <i class="fab fa-whatsapp"></i> Order via WhatsApp
                </a>
            </div>
        `;
        saleGrid.appendChild(card);
    });
}

// UPDATED LIGHTBOX FUNCTIONS
function openLightbox(index, galleryType) {
    currentArtworkIndex = index;
    currentGallery = galleryType;
    displayArtwork(index);
    document.getElementById('lightboxModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function displayArtwork(index) {
    const items = currentGallery === 'gallery' ? galleryItems : cinematicPrints;
    const item = items[index];
    
    document.getElementById('lightboxImage').src = item.image;
    document.getElementById('lightboxImage').alt = item.title;
    document.getElementById('lightboxTitle').textContent = item.title;
    document.getElementById('lightboxMedium').textContent = item.medium;
    document.getElementById('lightboxSize').textContent = item.size;
    document.getElementById('lightboxPrice').textContent = item.price;
    document.getElementById('artworkCounter').textContent = `${index + 1} of ${items.length}`;
    
    const orderBtn = document.getElementById('lightboxOrderBtn');
    orderBtn.href = `https://wa.me/254103142621?text=Hi%20Jim%2C%20I%27m%20interested%20in%20%22${encodeURIComponent(item.title)}%22%20-%20${item.price}`;
}

function changeArtwork(n) {
    const items = currentGallery === 'gallery' ? galleryItems : cinematicPrints;
    currentArtworkIndex += n;
    if (currentArtworkIndex >= items.length) currentArtworkIndex = 0;
    if (currentArtworkIndex < 0) currentArtworkIndex = items.length - 1;
    displayArtwork(currentArtworkIndex);
}

function closeLightbox() {
    document.getElementById('lightboxModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('lightboxModal');
    if (event.target == modal) {
        closeLightbox();
    }
};

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('lightboxModal');
    if (modal.classList.contains('active')) {
        if (event.key === 'ArrowLeft') changeArtwork(-1);
        else if (event.key === 'ArrowRight') changeArtwork(1);
        else if (event.key === 'Escape') closeLightbox();
    }
});

// On page load
document.addEventListener('DOMContentLoaded', function() {
    loadGallery(); // runs on gallery.html
    loadSale();    // runs on sale.html
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
    }
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('open');
        });
    });
});
