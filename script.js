// Product Data
const products = [
    {
        id: 1,
        title: 'Classic Leather Jacket',
        category: 'Women',
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.5,
        reviews: 128,
        badge: 'Sale',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500'
    },
    {
        id: 2,
        title: 'Minimalist Watch',
        category: 'Accessories',
        price: 189.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 94,
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500'
    },
    {
        id: 3,
        title: 'Designer Sunglasses',
        category: 'Accessories',
        price: 159.99,
        originalPrice: 199.99,
        rating: 4.6,
        reviews: 76,
        badge: 'Sale',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500'
    },
    {
        id: 4,
        title: 'Casual Cotton Shirt',
        category: 'Men',
        price: 79.99,
        originalPrice: null,
        rating: 4.3,
        reviews: 156,
        badge: null,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500'
    },
    {
        id: 5,
        title: 'Elegant Evening Dress',
        category: 'Women',
        price: 249.99,
        originalPrice: 329.99,
        rating: 4.9,
        reviews: 203,
        badge: 'Sale',
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500'
    },
    {
        id: 6,
        title: 'Premium Denim Jeans',
        category: 'Men',
        price: 129.99,
        originalPrice: null,
        rating: 4.4,
        reviews: 89,
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500'
    },
    {
        id: 7,
        title: 'Luxury Handbag',
        category: 'Accessories',
        price: 399.99,
        originalPrice: 499.99,
        rating: 4.7,
        reviews: 145,
        badge: 'Sale',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500'
    },
    {
        id: 8,
        title: 'Sports Sneakers',
        category: 'Men',
        price: 149.99,
        originalPrice: null,
        rating: 4.5,
        reviews: 234,
        badge: null,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500'
    },
    {
        id: 9,
        title: 'Silk Scarf',
        category: 'Accessories',
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.6,
        reviews: 67,
        badge: 'Sale',
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500'
    },
    {
        id: 10,
        title: 'Summer Blouse',
        category: 'Women',
        price: 69.99,
        originalPrice: null,
        rating: 4.4,
        reviews: 112,
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500'
    },
    {
        id: 11,
        title: 'Formal Blazer',
        category: 'Men',
        price: 279.99,
        originalPrice: 349.99,
        rating: 4.8,
        reviews: 98,
        badge: 'Sale',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500'
    },
    {
        id: 12,
        title: 'Leather Wallet',
        category: 'Accessories',
        price: 59.99,
        originalPrice: null,
        rating: 4.5,
        reviews: 189,
        badge: null,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500'
    }
];

// Shopping Cart
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartBtn = document.querySelector('.cart-btn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartCount = document.querySelector('.cart-count');
const cartItems = document.getElementById('cartItems');
const newsletterForm = document.getElementById('newsletterForm');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Initialize
let currentFilter = 'all';
let displayedProducts = 8;

// Render Products
function renderProducts(filter = 'all', limit = null) {
    let filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category.toLowerCase() === filter.toLowerCase());
    
    if (limit) {
        filteredProducts = filteredProducts.slice(0, limit);
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category.toLowerCase()}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/400x500?text=${encodeURIComponent(product.title)}'">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <button class="action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </button>
                    <button class="action-btn" onclick="addToWishlist(${product.id})" title="Add to Wishlist">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button class="action-btn" onclick="quickView(${product.id})" title="Quick View">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-rating">
                    <div class="stars">${renderStars(product.rating)}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Stars
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '★';
    }
    if (hasHalfStar) {
        starsHTML += '☆';
    }
    while (starsHTML.length < 5) {
        starsHTML += '☆';
    }
    
    return starsHTML;
}

// Filter Products
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderProducts(currentFilter, displayedProducts);
    });
});

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    showNotification('Product added to cart!');
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

// Update Cart UI
function updateCart() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/80?text=Product'">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.querySelector('.total-amount').textContent = `$${total.toFixed(2)}`;
}

// Toggle Cart
function toggleCart() {
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
}

cartBtn.addEventListener('click', toggleCart);
closeCart.addEventListener('click', toggleCart);
overlay.addEventListener('click', toggleCart);

// Add to Wishlist
function addToWishlist(productId) {
    showNotification('Product added to wishlist!');
}

// Quick View
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    showNotification(`Quick view for ${product.title}`);
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Newsletter Form
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    showNotification('Thank you for subscribing!');
    e.target.reset();
});

// Load More Products
document.getElementById('loadMoreBtn').addEventListener('click', () => {
    displayedProducts += 4;
    renderProducts(currentFilter, displayedProducts);
    
    if (displayedProducts >= products.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
    }
});

// Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @media (max-width: 992px) {
        .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transform: translateY(-100%);
            opacity: 0;
            transition: var(--transition);
        }
        
        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Initialize page
renderProducts('all', displayedProducts);

// Image Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.animation = 'fadeIn 0.5s ease-out';
        });
    });
});

// Search Functionality (Basic)
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    const searchTerm = prompt('Search for products:');
    if (searchTerm) {
        const results = products.filter(p => 
            p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        if (results.length > 0) {
            productsGrid.innerHTML = results.map(product => `
                <div class="product-card" data-category="${product.category.toLowerCase()}">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/400x500?text=${encodeURIComponent(product.title)}'">
                        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                        <div class="product-actions">
                            <button class="action-btn" onclick="addToCart(${product.id})">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-price">
                            <span class="price-current">$${product.price.toFixed(2)}</span>
                            ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                        </div>
                    </div>
                </div>
            `).join('');
            showNotification(`Found ${results.length} products`);
        } else {
            showNotification('No products found');
        }
    }
});

// Expose functions globally for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.addToWishlist = addToWishlist;
window.quickView = quickView;
