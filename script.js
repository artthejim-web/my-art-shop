// Gallery data
const galleryItems = [
    {
        title: "Eminem",
        medium: "Charcoal & Graphite",
        size: "A3 (297 x 420 mm)",
        image: "artwork1.jpg.jpg"
    },
    {
        title: "SHE",
        medium: "Charcoal, Graphite & Colored Pencils",
        size: "A3 (297 x 420 mm)",
        image: "artwork2.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Colored Pencils",
        size: "A4 (210 x 297 mm)",
        image: "artwork3.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Colored Pencils",
        size: "A5 (200 x 200 mm)",
        image: "artwork4.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Graphite",
        size: "A3 (297 x 420 mm)",
        image: "artwork5.jpg.jpg"
    },
    {
        title: "Eccedentesiast",
        medium: "Charcoal, Graphite & Pastels",
        size: "A3 (297 x 420 mm)",
        image: "artwork6.jpg.jpg"
    },
    {
        title: "Bloom in Silence",
        medium: "Charcoal, Graphite & Colored Pencils",
        size: "A3 (297 x 420 mm)",
        image: "artwork7.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Graphite",
        size: "A4 (210 x 297 mm)",
        image: "artwork8.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Pastels",
        size: "A4 (210 x 297 mm)",
        image: "artwork9.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal, Pastels & Watercolors",
        size: "A2 (500 x 600 mm)",
        image: "artwork10.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Pastels",
        size: "A3 (297 x 420 mm)",
        image: "artwork11.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Charcoal & Pastels",
        size: "A4 (210 x 297 mm)",
        image: "artwork12.jpg.jpg"
    },
    {
        title: "Untitled",
        medium: "Mixed Media",
        size: "A3 (297 x 420 mm)",
        image: "artwork13.jpg.jpg"
    }
];

let slideIndex = 1;

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
                </div>
                <a href="https://wa.me/254103142621?text=Hi%20Jim%2C%20I%27m%20interested%20in%20%22${encodeURIComponent(item.title)}%22" target="_blank" class="order-button">
                    <i class="fab fa-whatsapp"></i> Order via WhatsApp
                </a>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Slideshow functions
function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');
    
    if (slides.length === 0) return; // Only run on home page
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('fade');
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('fade');
    dots[slideIndex - 1].classList.add('active');
}

// Auto-advance slideshow every 5 seconds
function autoSlide() {
    const slides = document.getElementsByClassName('slide');
    if (slides.length > 0) {
        slideIndex++;
        showSlide(slideIndex);
        setTimeout(autoSlide, 5000);
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    loadGallery();
    showSlide(slideIndex);
    autoSlide();
    
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
