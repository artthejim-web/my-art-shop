// Gallery data
// To mark a piece as sold, just add `sold: true` to its object below.
// Leaving `sold` off (or setting it to false) keeps the piece available for order.
const galleryItems = [
    {
        title: "Kung Lao",
        medium: "Colored Pencils",
        size: "A4 (20 x 20 cm)",
        price: "KSh. 3,500",
        image: "KUNG LAO.tuxpi.jpg"
    },
      {
        title: "NIKLAUS",
        medium: "White Pastels",
        size: "A4 (21 x 29.7 cm)",
        price: "KSh. 3,000",
        image: "Niklaus.tuxpi.jpg"
      },
    {
        title: "Uliza Kiatu",
        medium: "Charcoal & Graphite",
        size: "A3 (28 x 28 cm)",
        price: "KSh. 3,000",
        image: "1784988175244.tuxpi.jpg",
        sold: true
    },
    {
        title: "Eminem",
        medium: "Charcoal & Graphite",
        size: "A3 (29.7 x 42 cm)",
        price: "KSh. 5,600",
        image: "artwork1.jpg.jpg",
        sold: true
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
        image: "artwork12.jpg.jpg",
        sold: true
    },
    {
        title: "Untitled",
        medium: "Mixed Media",
        size: "A3 (29.7 x 42 cm)",
        price: "KSh. 5,600",
        image: "artwork13.jpg.jpg",
        sold: true
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

// Load gallery items (runs on gallery.html only)
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.onclick = function() {
            openLightbox(index);
        };

        const soldBadge = item.sold
            ? '<span style="position:absolute;top:14px;left:14px;background:#e63946;color:#fff;font-size:0.7rem;font-weight:800;letter-spacing:0.08em;padding:4px 10px;border-radius:2px;text-transform:uppercase;z-index:2;">Sold</span>'
            : '';
        const imageStyle = item.sold ? 'filter:grayscale(70%);opacity:0.65;' : '';
        const priceHTML = item.sold
            ? `<p class="price" style="text-decoration:line-through;opacity:0.6;">${item.price}</p>`
            : `<p class="price">${item.price}</p>`;
        const buttonHTML = item.sold
            ? `<button class="order-button" disabled style="opacity:0.5;cursor:not-allowed;background:#555;">Sold Out</button>`
            : `<button class="order-button" onclick="event.stopPropagation()">
                    <i class="fab fa-whatsapp"></i> Order via WhatsApp
                </button>`;

        galleryItem.innerHTML = `
            <div class="gallery-item-image" style="position:relative;">
                ${soldBadge}
                <img src="${item.image}" alt="${item.title}" loading="lazy" style="${imageStyle}">
            </div>
            <div class="gallery-item-info">
                <h3>${item.title}</h3>
                <div class="gallery-item-details">
                    <p><strong>Medium:</strong> ${item.medium}</p>
                    <p><strong>Size:</strong> ${item.size}</p>
                    ${priceHTML}
                </div>
                ${buttonHTML}
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Lightbox functions (used by the main gallery page)
function openLightbox(index) {
    currentArtworkIndex = index;
    displayArtwork(index);
    document.getElementById('lightboxModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function displayArtwork(index) {
    const item = galleryItems[index];

    document.getElementById('lightboxImage').src = item.image;
    document.getElementById('lightboxImage').alt = item.title;
    document.getElementById('lightboxTitle').textContent = item.title;
    document.getElementById('lightboxMedium').textContent = item.medium;
    document.getElementById('lightboxSize').textContent = item.size;
    document.getElementById('lightboxPrice').textContent = item.sold ? `${item.price} — SOLD` : item.price;
    document.getElementById('artworkCounter').textContent = `${index + 1} of ${galleryItems.length}`;

    const orderBtn = document.getElementById('lightboxOrderBtn');

    // Create (once) a "sold" message that sits where the order button normally is
    let soldMsg = document.getElementById('lightboxSoldMsg');
    if (!soldMsg) {
        soldMsg = document.createElement('p');
        soldMsg.id = 'lightboxSoldMsg';
        soldMsg.style.cssText = 'color:#e63946;font-weight:700;letter-spacing:0.05em;margin-top:14px;';
        soldMsg.textContent = 'This piece has been sold';
        orderBtn.insertAdjacentElement('afterend', soldMsg);
    }

    if (item.sold) {
        orderBtn.style.display = 'none';
        soldMsg.style.display = 'block';
    } else {
        orderBtn.style.display = '';
        soldMsg.style.display = 'none';
        orderBtn.href = `https://wa.me/254103142621?text=Hi%20Jim%2C%20I%27m%20interested%20in%20%22${encodeURIComponent(item.title)}%22%20-%20${item.price}`;
    }
}

function changeArtwork(n) {
    currentArtworkIndex += n;
    if (currentArtworkIndex >= galleryItems.length) currentArtworkIndex = 0;
    if (currentArtworkIndex < 0) currentArtworkIndex = galleryItems.length - 1;
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
    loadGallery(); // runs on gallery.html (sale.html builds its own cards/lightbox)

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
