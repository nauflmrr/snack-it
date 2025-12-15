// DATA PRODUK LENGKAP DENGAN SEMUA UKURAN
const allProducts = [
    // KERIPIK
    { id: 1, name: "Keripik Kentang", category: "Keripik", description: "Keripik kentang renyah dengan rasa asin gurih alami.", image: "keripik-kentang.jpg", sizes: [{ size: "Medium", price: 7000 }, { size: "Large", price: 12000 }] },
    { id: 2, name: "Keripik Singkong", category: "Keripik", description: "Keripik singkong balado dengan paduan pedas manis.", image: "keripik-singkong.jpg", sizes: [{ size: "Medium", price: 8000 }, { size: "Large", price: 13500 }] },
    { id: 3, name: "Keripik Ubi Ungu", category: "Keripik", description: "Keripik ubi ungu dengan rasa manis alami dan renyah.", image: "keripik-ubi-ungu.jpg", sizes: [{ size: "Medium", price: 8500 }, { size: "Large", price: 13000 }] },
    { id: 5, name: "Keripik Pisang", category: "Keripik", description: "Keripik pisang manis garing, cocok untuk camilan sehat.", image: "keripik-pisang.jpg", sizes: [{ size: "Medium", price: 8500 }, { size: "Large", price: 14000 }] },
    { id: 16, name: "Keripik Jagung", category: "Keripik", description: "Keripik jagung dengan rasa gurih khas jagung manis.", image: "keripik-jagung.jpg", sizes: [{ size: "Medium", price: 7000 }, { size: "Large", price: 13000 }] },
    { id: 29, name: "Keripik Kaca", category: "Keripik", description: "Keripik tipis transparan dengan tekstur sangat renyah.", image: "keripik-kaca.jpg", sizes: [{ size: "Large", price: 12000 }, { size: "Jumbo", price: 23000 }] },
    
    // KACANG
    { id: 6, name: "Kacang Atom", category: "Kacang", description: "Kacang atom renyah berbalut tepung dengan rasa gurih.", image: "kacang-atom.jpg", sizes: [{ size: "Large", price: 6500 }, { size: "Jumbo", price: 12000 }] },
    { id: 7, name: "Kacang Bawang", category: "Kacang", description: "Kacang tanah goreng dengan taburan bawang putih krispi.", image: "kacang-bawang.jpg", sizes: [{ size: "Large", price: 12000 }, { size: "Jumbo", price: 18000 }] },
    { id: 8, name: "Kacang Mede", category: "Kacang", description: "Kacang mede panggang asin, premium quality.", image: "kacang-mede.jpg", sizes: [{ size: "Large", price: 14000 }, { size: "Premium", price: 25000 }] },
    { id: 9, name: "Kuaci", category: "Kacang", description: "Kuaci bunga matahari, cocok untuk ngemil santai.", image: "kuaci.jpg", sizes: [{ size: "Medium", price: 7000 }, { size: "Large", price: 12500 }] },
    { id: 25, name: "Kacang Polong", category: "Kacang", description: "Kacang polong goreng renyah dengan kulit krispi.", image: "kacang-polong.jpg", sizes: [{ size: "Large", price: 12000 }, { size: "Jumbo", price: 23000 }] },
    
    // BISKUIT & WAFER
    { id: 10, name: "Astor", category: "Biskuit & Wafer", description: "Biskuit Astor dengan beragam pilihan rasa.", image: "astor.jpg", sizes: [{ size: "Medium", price: 6000 }, { size: "Large", price: 11000 }] },
    { id: 11, name: "Wafer Cokelat", category: "Biskuit & Wafer", description: "Wafer lapis cokelat lembut dengan rasa manis pas.", image: "wafer-cokelat.jpg", sizes: [{ size: "Large", price: 12000 }, { size: "Family", price: 22000 }] },
    { id: 12, name: "Wafer Keju", category: "Biskuit & Wafer", description: "Wafer dengan isian krim keju gurih.", image: "wafer-keju.jpg", sizes: [{ size: "Medium", price: 8000 }, { size: "Large", price: 12000 }] },
    { id: 13, name: "Biscuit Regal", category: "Biskuit & Wafer", description: "Biskuit marie susu klasik yang selalu enak.", image: "biscuit-regal.jpg", sizes: [{ size: "Medium", price: 6000 }, { size: "Large", price: 11500 }] },
    { id: 14, name: "Biscuit Kelapa", category: "Biskuit & Wafer", description: "Biskuit dengan taburan kelapa sangrai wangi.", image: "biscuit-kelapa.jpg", sizes: [{ size: "Large", price: 12000 }, { size: "Family", price: 23000 }] },
    { id: 15, name: "Biscuit Sandwich", category: "Biskuit & Wafer", description: "Biskuit sandwich dengan isian krim vanila.", image: "biscuit-sandwich.jpg", sizes: [{ size: "Medium", price: 8000 }, { size: "Large", price: 14500 }] },
    
    // KERUPUK
    { id: 4, name: "Kerupuk Seblak", category: "Kerupuk", description: "Kerupuk pedas khas seblak Bandung.", image: "kerupuk-seblak.jpg", sizes: [{ size: "Medium", price: 8000 }, { size: "Large", price: 12500 }] },
    { id: 30, name: "Kerupuk Kulit", category: "Kerupuk", description: "Kerupuk kulit sapi asli dengan tekstur khas.", image: "kerupuk-kulit.jpg", sizes: [{ size: "Medium", price: 9000 }, { size: "Large", price: 17000 }] },
    
    // SNACK LAINNYA
    { id: 17, name: "Popcorn Manis", category: "Snack Lainnya", description: "Popcorn caramel dengan rasa manis seperti madu.", image: "popcorn-manis.jpg", sizes: [{ size: "Large", price: 12000 }, { size: "Jumbo", price: 22000 }] },
    { id: 18, name: "Popcorn Asin", category: "Snack Lainnya", description: "Popcorn gurih dengan taburan garam halus.", image: "popcorn-asin.jpg", sizes: [{ size: "Medium", price: 6000 }, { size: "Large", price: 11500 }] },
    { id: 19, name: "Snack Jagung", category: "Snack Lainnya", description: "Snack berbahan dasar jagung dengan bentuk menarik.", image: "snack-jagung.jpg", sizes: [{ size: "Large", price: 12000 }, { size: "Family", price: 23000 }] },
    { id: 20, name: "Snack Keju Puff", category: "Snack Lainnya", description: "Snack puff dengan rasa keju yang gurih.", image: "snack-keju-puff.jpg", sizes: [{ size: "Medium", price: 8000 }, { size: "Large", price: 14500 }] },
    { id: 21, name: "Chiki Ball", category: "Snack Lainnya", description: "Snack bola-bola dengan rasa keju yang gurih.", image: "chiki-ball.jpg", sizes: [{ size: "Medium", price: 12000 }, { size: "Large", price: 22000 }] },
    { id: 22, name: "Makaroni Asin", category: "Snack Lainnya", description: "Makaroni goreng dengan rasa asin gurih.", image: "makaroni-asin.jpg", sizes: [{ size: "Medium", price: 6000 }, { size: "Large", price: 11500 }] },
    { id: 23, name: "Mie Lidi", category: "Snack Lainnya", description: "Mie lidi renyah dengan bumbu khas Indonesia.", image: "mie-lidi.jpg", sizes: [{ size: "Large", price: 10000 }, { size: "Jumbo", price: 19000 }] },
    { id: 24, name: "Makaroni Balado", category: "Snack Lainnya", description: "Makaroni pedas dengan bumbu balado khas Padang.", image: "makaroni-balado.jpg", sizes: [{ size: "Medium", price: 9000 }, { size: "Large", price: 12000 }] },
    { id: 26, name: "Kuping Gajah", category: "Snack Lainnya", description: "Snack renyah berbentuk kuping gajah rasa bawang.", image: "kuping-gajah.jpg", sizes: [{ size: "Medium", price: 7000 }, { size: "Large", price: 13500 }] },
    { id: 27, name: "Cheese Stick", category: "Snack Lainnya", description: "Stik keju dengan rasa cheesy yang kuat dan gurih.", image: "cheese-stick.jpg", sizes: [{ size: "Large", price: 14000 }, { size: "Premium", price: 26000 }] },
    { id: 28, name: "Basreng", category: "Snack Lainnya", description: "Bakso goreng pedas, snack viral kekinian.", image: "basreng.jpg", sizes: [{ size: "Medium", price: 8000 }, { size: "Large", price: 15000 }] }
];

// VARIABEL GLOBAL
let cart = JSON.parse(localStorage.getItem('snackit_cart')) || [];
let currentFilter = 'all';
const WHATSAPP_NUMBER = "+6285817711482"; // NOMOR YANG BENAR

// CHAT BOT ELEMENTS
const chatBotElements = {
    chatBotModal: null,
    chatMessages: null,
    chatInput: null,
    sendChatBtn: null,
    closeChatBtn: null,
    startChatBtn: null
};

// ELEMEN DOM
const domElements = {
    productsContainer: document.getElementById('productsContainer'),
    categoriesContainer: document.getElementById('categoriesContainer'),
    cartItemsContainer: document.getElementById('cartItemsContainer'),
    cartCount: document.getElementById('cartCount'),
    cartTotalPrice: document.getElementById('cartTotalPrice'),
    cartSidebar: document.getElementById('cartSidebar'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartToggle: document.getElementById('cartToggle'),
    closeCart: document.getElementById('closeCart'),
    clearCartBtn: document.getElementById('clearCartBtn'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.querySelector('.nav-menu'),
    filterButtonsContainer: document.querySelector('.filter-controls'),
    contactForm: document.getElementById('contactForm')
};

// FUNGSI UNTUK CEK GAMBAR
function checkImageExists(imageUrl, callback) {
    const img = new Image();
    img.onload = function() {
        callback(true);
    };
    img.onerror = function() {
        callback(false);
    };
    img.src = imageUrl;
}

// INISIALISASI APLIKASI
function initApp() {
    displayCategories();
    displayProducts(allProducts);
    setupFilterButtons();
    updateCartUI();
    setupEventListeners();
    setupContactForm();
    setupChatBot(); // CHAT BOT DITAMBAHKAN
    setCurrentYear();
}

// TAMPILKAN PRODUK - VERSI SIMPLE YANG PASTI BERHASIL
function displayProducts(products) {
    domElements.productsContainer.innerHTML = '';
    
    if (products.length === 0) {
        domElements.productsContainer.innerHTML = '<p class="no-products">Tidak ada produk dalam kategori ini.</p>';
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let sizeButtons = '';
        product.sizes.forEach((sizeOption, index) => {
            const activeClass = index === 0 ? 'active' : '';
            sizeButtons += `
                <button class="size-btn ${activeClass}" 
                        data-size="${sizeOption.size}" 
                        data-price="${sizeOption.price}">
                    ${sizeOption.size} - Rp ${sizeOption.price.toLocaleString('id-ID')}
                </button>
            `;
        });
        
        // CARA 1: Gunakan path relatif sederhana
        const imagePath = `images/${product.image}`;
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${imagePath}" 
                     alt="${product.name}" 
                     class="product-img"
                     loading="lazy"
                     onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<div style=\"width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f8f9fa;color:#8a8d9b;font-size:3rem\">${product.icon || '📦'}</div>'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-category">${product.category}</span>
                <p class="product-description">${product.description}</p>
                
                <div class="size-selection">
                    <span class="size-label">Pilih Ukuran:</span>
                    <div class="size-options">${sizeButtons}</div>
                </div>
                
                <div class="product-price" id="price-${product.id}">
                    Rp ${product.sizes[0].price.toLocaleString('id-ID')}
                </div>
                
                <button class="btn-add-to-cart" data-id="${product.id}">
                    <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
                </button>
                
                <button class="btn-chat-product" data-id="${product.id}" data-name="${product.name}">
                    <i class="fas fa-comment"></i> Tanya Produk
                </button>
            </div>
        `;
        
        domElements.productsContainer.appendChild(productCard);
        
        // Event listener untuk pilihan ukuran
        const sizeBtns = productCard.querySelectorAll('.size-btn');
        sizeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                sizeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const price = btn.getAttribute('data-price');
                productCard.querySelector(`#price-${product.id}`).textContent = 
                    `Rp ${parseInt(price).toLocaleString('id-ID')}`;
            });
        });
        
        // Event listener untuk tombol tambah ke keranjang
        const addToCartBtn = productCard.querySelector('.btn-add-to-cart');
        addToCartBtn.addEventListener('click', () => {
            const selectedSizeBtn = productCard.querySelector('.size-btn.active');
            const selectedSize = selectedSizeBtn.getAttribute('data-size');
            const selectedPrice = parseInt(selectedSizeBtn.getAttribute('data-price'));
            
            addToCart(product.id, selectedSize, selectedPrice, product.image);
        });
        
        // Event listener untuk tombol chat produk
        const chatProductBtn = productCard.querySelector('.btn-chat-product');
        chatProductBtn.addEventListener('click', () => {
            openChatBot();
            // Auto-kirim pertanyaan tentang produk
            setTimeout(() => {
                sendBotMessage(`Saya tertarik dengan ${product.name}. Bisa beri info lebih detail?`);
            }, 500);
        });
    });
}

// TAMPILKAN KATEGORI
function displayCategories() {
    const categories = [...new Set(allProducts.map(p => p.category))];
    const iconMap = {
        'Keripik': '🥔',
        'Kacang': '🥜',
        'Biskuit & Wafer': '🍪',
        'Kerupuk': '🌶️',
        'Snack Lainnya': '🍿'
    };
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.setAttribute('data-category', category);
        categoryCard.innerHTML = `
            <div class="category-icon">
                ${iconMap[category] || '📦'}
            </div>
            <h4 class="category-name">${category}</h4>
        `;
        domElements.categoriesContainer.appendChild(categoryCard);
        
        categoryCard.addEventListener('click', () => {
            filterProductsByCategory(category);
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
            });
            currentFilter = category;
        });
    });
}

// SETUP FILTER PRODUK
function setupFilterButtons() {
    const categories = ['all', ...new Set(allProducts.map(p => p.category))];
    
    categories.forEach(cat => {
        const button = document.createElement('button');
        button.className = `filter-btn ${cat === 'all' ? 'active' : ''}`;
        button.setAttribute('data-filter', cat);
        button.textContent = cat === 'all' ? 'Semua' : cat;
        domElements.filterButtonsContainer.appendChild(button);
        
        button.addEventListener('click', () => {
            currentFilter = cat;
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            if (cat === 'all') {
                displayProducts(allProducts);
            } else {
                const filtered = allProducts.filter(p => p.category === cat);
                displayProducts(filtered);
            }
        });
    });
}

// FILTER PRODUK BERDASARKAN KATEGORI
function filterProductsByCategory(category) {
    if (category === 'all') {
        displayProducts(allProducts);
    } else {
        const filtered = allProducts.filter(p => p.category === category);
        displayProducts(filtered);
    }
    currentFilter = category;
}

// TAMBAH KE KERANJANG
function addToCart(productId, size, price, image) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const cartItemId = `${productId}-${size}`;
    const existingItem = cart.find(item => item.id === cartItemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: cartItemId,
            productId: product.id,
            name: product.name,
            size: size,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveCartToLocalStorage();
    showNotification(`${product.name} (${size}) ditambahkan ke keranjang!`);
}

// HAPUS DARI KERANJANG
function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    updateCartUI();
    saveCartToLocalStorage();
}

// UPDATE KUANTITAS ITEM KERANJANG
function updateCartItemQuantity(cartItemId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(cartItemId);
        return;
    }
    
    const item = cart.find(item => item.id === cartItemId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
        saveCartToLocalStorage();
    }
}

// UPDATE TAMPILAN KERANJANG
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    domElements.cartCount.textContent = totalItems;
    
    domElements.cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        domElements.cartItemsContainer.innerHTML = '<p class="cart-empty-message">Keranjang belanja kamu masih kosong.</p>';
        domElements.cartTotalPrice.textContent = 'Rp 0';
        return;
    }
    
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        // Cek jika ukuran besar untuk tambahkan badge
        const isLargeSize = ['Jumbo', 'Family', 'Premium', 'Large'].some(size => 
            item.size.includes(size) && !item.size.includes('Medium')
        );
        const sizeBadge = isLargeSize ? '<span class="cart-item-large-badge">BESAR</span>' : '';
        
        // GAMBAR DI KERANJANG - VERSI SIMPLE
        const cartImagePath = `images/${item.image}`;
        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${cartImagePath}" 
                     alt="${item.name}"
                     onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<div style=\"width:60px;height:60px;display:flex;align-items:center;justify-content:center;background:#f8f9fa;color:#8a8d9b;font-size:1.5rem\'>📦</div>'">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-size">Ukuran: ${item.size} ${sizeBadge}</div>
                <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
            </div>
            <div class="cart-item-controls">
                <button class="btn-qty btn-decrease" data-id="${item.id}">-</button>
                <span class="cart-item-qty">${item.quantity}</span>
                <button class="btn-qty btn-increase" data-id="${item.id}">+</button>
                <button class="btn-remove-item" data-id="${item.id}" title="Hapus">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        domElements.cartItemsContainer.appendChild(cartItem);
    });
    
    domElements.cartTotalPrice.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    
    // Event listener untuk kontrol kuantitas
    document.querySelectorAll('.btn-decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const item = cart.find(item => item.id === id);
            if (item) updateCartItemQuantity(id, item.quantity - 1);
        });
    });
    
    document.querySelectorAll('.btn-increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const item = cart.find(item => item.id === id);
            if (item) updateCartItemQuantity(id, item.quantity + 1);
        });
    });
    
    document.querySelectorAll('.btn-remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            removeFromCart(id);
        });
    });
}

// SIMPAN KERANJANG KE LOCAL STORAGE
function saveCartToLocalStorage() {
    localStorage.setItem('snackit_cart', JSON.stringify(cart));
}

// KOSONGKAN KERANJANG
function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Apakah Anda yakin ingin mengosongkan keranjang belanja?')) {
        cart = [];
        updateCartUI();
        saveCartToLocalStorage();
        showNotification('Keranjang telah dikosongkan.');
    }
}

// CHECKOUT VIA WHATSAPP - YANG SUDAH DIPERBAIKI
function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        alert('Keranjang belanja kosong. Tambah produk terlebih dahulu.');
        return;
    }
    
    let message = `Halo Naufl SnackIt! Saya ingin memesan:\n\n`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} (${item.size}) x${item.quantity} = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n`;
    });
    
    message += `\n*Total: ${domElements.cartTotalPrice.textContent}*\n\n`;
    message += `Nama: [Isi nama Anda]\n`;
    message += `Alamat: [Isi alamat lengkap]\n`;
    message += `No. WhatsApp: [Isi nomor WhatsApp]\n\n`;
    message += `Metode Pembayaran: [Transfer/COD]\n`;
    message += `Catatan: [Opsional - pesan khusus untuk penjual]`;
    
    // LINK WHATSAPP YANG BENAR - PERBAIKAN DI SINI
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    // Kosongkan keranjang setelah checkout
    cart = [];
    updateCartUI();
    saveCartToLocalStorage();
}

// SETUP EVENT LISTENERS
function setupEventListeners() {
    // Toggle keranjang
    domElements.cartToggle.addEventListener('click', () => {
        domElements.cartSidebar.classList.add('active');
        domElements.cartOverlay.classList.add('active');
    });
    
    domElements.closeCart.addEventListener('click', closeCartSidebar);
    domElements.cartOverlay.addEventListener('click', closeCartSidebar);
    
    // Tombol keranjang
    domElements.clearCartBtn.addEventListener('click', clearCart);
    domElements.checkoutBtn.addEventListener('click', checkoutViaWhatsApp);
    
    // Toggle menu mobile
    domElements.menuToggle.addEventListener('click', () => {
        domElements.navMenu.classList.toggle('active');
    });
    
    // Tutup menu mobile saat klik link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            domElements.navMenu.classList.remove('active');
        });
    });
    
    // Tambah tombol chat di header
    const chatHeaderBtn = document.createElement('button');
    chatHeaderBtn.className = 'btn-chat-header';
    chatHeaderBtn.innerHTML = '<i class="fas fa-comment"></i> Tanya';
    chatHeaderBtn.addEventListener('click', openChatBot);
    
    // Tambah ke header jika ada
    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
        headerActions.appendChild(chatHeaderBtn);
    }
}

// TUTUP SIDEBAR KERANJANG
function closeCartSidebar() {
    domElements.cartSidebar.classList.remove('active');
    domElements.cartOverlay.classList.remove('active');
}

// SETUP FORM KONTAK
function setupContactForm() {
    if (domElements.contactForm) {
        domElements.contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const phone = document.getElementById('contactPhone').value;
            const message = document.getElementById('contactMessage').value;
            
            const whatsappMessage = `Halo Naufl SnackIt!\n\n*INQUIRY / PERTANYAAN*\n\nNama: ${name}\nEmail: ${email}\nNomor WhatsApp: ${phone}\n\nPesan:\n${message}\n\n_Lokasi: Pamulang, Tangerang Selatan_`;
            
            const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');
            
            showNotification(`Pesan dari ${name} akan dikirim via WhatsApp!`);
            this.reset();
        });
    }
}

// ========== CHAT BOT FUNCTIONS ==========

// SETUP CHAT BOT
function setupChatBot() {
    // Buat modal chat bot
    const chatBotHTML = `
        <div class="chat-bot-modal" id="chatBotModal">
            <div class="chat-header">
                <div class="chat-title">
                    <i class="fas fa-robot"></i>
                    <h3>SnackIt Assistant</h3>
                </div>
                <button class="btn-close-chat" id="closeChatBtn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="chat-messages" id="chatMessages">
                <!-- Pesan akan dimasukkan di sini -->
            </div>
            
            <div class="chat-quick-questions">
                <button class="quick-question" data-question="Ada promo hari ini?">💎 Ada promo?</button>
                <button class="quick-question" data-question="Bisa COD di daerah Pamulang?">🚚 COD Pamulang?</button>
                <button class="quick-question" data-question="Berapa estimasi pengiriman?">⏱️ Estimasi kirim?</button>
                <button class="quick-question" data-question="Saya mau pesan via WhatsApp">💬 Pesan via WA</button>
            </div>
            
            <div class="chat-input-area">
                <input type="text" 
                       id="chatInput" 
                       placeholder="Ketik pertanyaan Anda..."
                       maxlength="200">
                <button id="sendChatBtn">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
        
        <button class="chat-bot-toggle" id="startChatBtn">
            <i class="fas fa-comment-dots"></i>
            <span class="chat-notification">💬</span>
        </button>
    `;
    
    // Tambahkan ke body
    document.body.insertAdjacentHTML('beforeend', chatBotHTML);
    
    // Inisialisasi elemen chat bot
    chatBotElements.chatBotModal = document.getElementById('chatBotModal');
    chatBotElements.chatMessages = document.getElementById('chatMessages');
    chatBotElements.chatInput = document.getElementById('chatInput');
    chatBotElements.sendChatBtn = document.getElementById('sendChatBtn');
    chatBotElements.closeChatBtn = document.getElementById('closeChatBtn');
    chatBotElements.startChatBtn = document.getElementById('startChatBtn');
    
    // Setup event listeners chat bot
    setupChatBotListeners();
    
    // Tambahkan pesan selamat datang
    addChatMessage('bot', 'Hai! 👋 Saya SnackIt Assistant, siap membantu Anda!');
    addChatMessage('bot', 'Anda bisa: 1️⃣ Tanya produk 2️⃣ Cek promo 3️⃣ Tanya ongkir 4️⃣ Langsung pesan');
}

// SETUP EVENT LISTENERS CHAT BOT
function setupChatBotListeners() {
    // Toggle chat bot
    chatBotElements.startChatBtn.addEventListener('click', openChatBot);
    chatBotElements.closeChatBtn.addEventListener('click', closeChatBot);
    
    // Kirim pesan
    chatBotElements.sendChatBtn.addEventListener('click', sendUserMessage);
    chatBotElements.chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendUserMessage();
    });
    
    // Quick questions
    document.querySelectorAll('.quick-question').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const question = e.target.getAttribute('data-question');
            sendBotMessage(question);
        });
    });
    
    // Klik di luar modal untuk tutup
    document.addEventListener('click', (e) => {
        if (e.target === chatBotElements.chatBotModal) {
            closeChatBot();
        }
    });
}

// BUKA CHAT BOT
function openChatBot() {
    chatBotElements.chatBotModal.classList.add('active');
    chatBotElements.startChatBtn.classList.add('active');
    chatBotElements.chatInput.focus();
}

// TUTUP CHAT BOT
function closeChatBot() {
    chatBotElements.chatBotModal.classList.remove('active');
    chatBotElements.startChatBtn.classList.remove('active');
}

// TAMBAHKAN PESAN KE CHAT
function addChatMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <div class="message-content">
            ${message}
        </div>
        <div class="message-time">${time}</div>
    `;
    
    chatBotElements.chatMessages.appendChild(messageDiv);
    chatBotElements.chatMessages.scrollTop = chatBotElements.chatMessages.scrollHeight;
}

// KIRIM PESAN USER
function sendUserMessage() {
    const message = chatBotElements.chatInput.value.trim();
    if (!message) return;
    
    // Tambah pesan user
    addChatMessage('user', message);
    chatBotElements.chatInput.value = '';
    
    // Simulasikan typing
    setTimeout(() => {
        // Tanggapi pesan user
        handleBotResponse(message);
    }, 1000);
}

// KIRIM PESAN BOT (untuk quick actions)
function sendBotMessage(message) {
    chatBotElements.chatInput.value = message;
    sendUserMessage();
}

// HANDLE RESPONSE BOT
function handleBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    let response = '';
    
    // Auto-response berdasarkan keyword
    if (message.includes('halo') || message.includes('hai') || message.includes('hi')) {
        response = 'Halo juga! 😊 Ada yang bisa saya bantu?';
    } 
    else if (message.includes('promo') || message.includes('diskon') || message.includes('murah')) {
        response = '🎉 *PROMO HARI INI:*\n- Beli 3 gratis 1 untuk Keripik\n- Free ongkir min. belanja Rp 50.000\n- Cashback 10% untuk pembayaran via QRIS\n\nCek produk promo di halaman utama!';
    }
    else if (message.includes('ongkir') || message.includes('biaya kirim') || message.includes('kirim')) {
        response = '🚚 *ONGKIR PAMULANG & SEKITAR:*\n- Dalam kelurahan: Rp 5.000\n- Dalam kecamatan: Rp 8.000\n- Luar kecamatan: Rp 12.000-15.000\n\nCOD tersedia untuk min. belanja Rp 30.000';
    }
    else if (message.includes('pesan') || message.includes('order') || message.includes('beli')) {
        response = '🛒 Untuk memesan:\n1. Tambah produk ke keranjang\n2. Klik "Checkout" di keranjang\n3. Isi data pengiriman\n4. Pesan langsung ke WhatsApp kami\n\nAtau klik tombol "Pesan via WhatsApp" di bawah!';
        // Tambah tombol aksi
        setTimeout(() => {
            addActionButtons();
        }, 500);
    }
    else if (message.includes('wa') || message.includes('whatsapp') || message.includes('chat')) {
        response = '📱 *WhatsApp SnackIt:*\nKlik tombol di bawah untuk langsung chat admin:\n\n📍 Lokasi: Pamulang, Tangerang Selatan\n⏰ Buka: 08:00 - 21:00 WIB';
        // Tambah tombol WhatsApp
        setTimeout(() => {
            addWhatsAppButton();
        }, 500);
    }
    else if (message.includes('stok') || message.includes('ready') || message.includes('ada')) {
        response = '📦 Semua produk READY STOCK! 🎉\n\nKecuali produk dengan label "Pre-order" (butuh 1-2 hari).\nStok diupdate real-time, jadi langsung saja pesan!';
    }
    else if (message.includes('alamat') || message.includes('lokasi') || message.includes('tempat')) {
        response = '🏪 *ALAMAT SNAKIT:*\nJl. Contoh No. 123, Pamulang\nTangerang Selatan, Banten 15417\n\n📍 *Google Maps:* https://maps.app.goo.gl/xxx\n\nBuka setiap hari 08:00-21:00 WIB';
    }
    else if (message.includes('pembayaran') || message.includes('bayar') || message.includes('transfer')) {
        response = '💳 *METODE PEMBAYARAN:*\n1. Transfer Bank (BCA, BRI, Mandiri)\n2. E-Wallet (GoPay, OVO, DANA)\n3. QRIS (Semua e-wallet)\n4. COD (min. Rp 30.000)\n\nKonfirmasi pembayaran via WhatsApp ya!';
    }
    else {
        response = 'Maaf, saya belum paham pertanyaan Anda 😅\n\nCoba tanya tentang:\n• Promo hari ini\n• Ongkir ke alamat Anda\n• Cara pesan\n• Stok produk\n• Alamat toko\n\nAtau langsung chat admin via WhatsApp ya!';
    }
    
    // Tambah delay typing
    setTimeout(() => {
        addChatMessage('bot', response);
    }, 800);
}

// TAMBAH TOMBOL AKSI DI CHAT
function addActionButtons() {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'chat-action-buttons';
    
    buttonContainer.innerHTML = `
        <button class="chat-action-btn" id="btnViewCart">
            <i class="fas fa-shopping-cart"></i> Lihat Keranjang
        </button>
        <button class="chat-action-btn" id="btnCheckout">
            <i class="fas fa-whatsapp"></i> Pesan Sekarang
        </button>
        <button class="chat-action-btn" id="btnClearCart">
            <i class="fas fa-trash"></i> Kosongkan Keranjang
        </button>
    `;
    
    chatBotElements.chatMessages.appendChild(buttonContainer);
    
    // Event listeners untuk tombol aksi
    document.getElementById('btnViewCart').addEventListener('click', () => {
        closeChatBot();
        domElements.cartSidebar.classList.add('active');
        domElements.cartOverlay.classList.add('active');
        addChatMessage('bot', 'Membuka keranjang belanja...');
    });
    
    document.getElementById('btnCheckout').addEventListener('click', () => {
        checkoutViaWhatsApp();
        addChatMessage('bot', 'Membuka WhatsApp untuk pemesanan...');
    });
    
    document.getElementById('btnClearCart').addEventListener('click', () => {
        clearCart();
        addChatMessage('bot', 'Keranjang sudah dikosongkan!');
    });
}

// TAMBAH TOMBOL WHATSAPP DI CHAT
function addWhatsAppButton() {
    const waButton = document.createElement('a');
    waButton.className = 'chat-whatsapp-btn';
    waButton.href = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;
    waButton.target = '_blank';
    waButton.innerHTML = `
        <i class="fab fa-whatsapp"></i>
        Chat Admin via WhatsApp
    `;
    
    chatBotElements.chatMessages.appendChild(waButton);
}
// ========== END CHAT BOT ==========

// NOTIFIKASI
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// SET TAHUN SEKARANG DI FOOTER
function setCurrentYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// JALANKAN APLIKASI SAAT DOKUMEN LOAD
document.addEventListener('DOMContentLoaded', initApp);
