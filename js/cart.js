/* =========================================================
   LUNELLE CAFÉ - PRODUCT CATALOG & LOCALSTORAGE CART
   ========================================================= */

// Consistent localStorage key for LUNELLE Café
const CART_STORAGE_KEY = "lunelleCart";

// Complete 27-Product Array (Editable Sample Prices in IDR & Image Paths in images/)
const LUNELLE_PRODUCTS = [
  // CATEGORY 1: STRAWBERRY SERIES (4 items)
  {
    id: "str-1",
    name: "Rosy Strawberry Latte",
    category: "Strawberry Series",
    price: 34000,
    description: "Fresh crushed strawberries swirled with chilled velvety milk and a delicate hint of rose cream.",
    emoji: "🍓🥛",
    imageFile: "images/rosy-strawberry-latte.jpg",
    isSignature: false
  },
  {
    id: "str-2",
    name: "Strawberry Blush Frappe",
    category: "Strawberry Series",
    price: 38000,
    description: "Creamy ice-blended strawberry milk topped with whipped vanilla cloud and dried berry crumbs.",
    emoji: "🍓🍨",
    imageFile: "images/strawberry-blush-frappe.jpg",
    isSignature: false
  },
  {
    id: "str-3",
    name: "Berry After Hours",
    category: "Strawberry Series",
    price: 35000,
    description: "Sparkling ruby strawberry infusion with a splash of honey lemon and fresh mint leaves.",
    emoji: "🍓🍋",
    imageFile: "images/berry-after-hours.jpg",
    isSignature: false
  },
  {
    id: "str-4",
    name: "Strawberry Cloud Nine",
    category: "Strawberry Series",
    price: 37000,
    description: "Sweet strawberry milk crowned with airy salted strawberry cream foam.",
    emoji: "🍓☁️",
    imageFile: "images/strawberry-cloud-nine.jpg",
    isSignature: false
  },

  // CATEGORY 2: MATCHA SERIES (4 items)
  {
    id: "mat-1",
    name: "Little Matcha Moment",
    category: "Matcha Series",
    price: 33000,
    description: "Classic ceremonial Uji matcha whisked smooth over fresh chilled milk with light cane sweetness.",
    emoji: "🍵🥛",
    imageFile: "images/little-matcha-moment.jpg",
    isSignature: false
  },
  {
    id: "mat-2",
    name: "Blushberry Matcha",
    category: "Matcha Series",
    price: 38000,
    description: "House signature layered with sweet homemade strawberry compote, fresh milk, and ceremonial matcha.",
    emoji: "🍓🍵",
    imageFile: "images/blushberry-matcha.jpg",
    isSignature: true
  },
  {
    id: "mat-3",
    name: "Purple Daydream",
    category: "Matcha Series",
    price: 39000,
    description: "Velvety taro milk base topped with earthy green matcha foam for a dreamy pastel contrast.",
    emoji: "🍠🍵",
    imageFile: "images/purple-daydream.jpg",
    isSignature: false
  },
  {
    id: "mat-4",
    name: "Matcha Cloud Crush",
    category: "Matcha Series",
    price: 37000,
    description: "Iced oat matcha latte finished with sweet vanilla mascarpone cloud cream.",
    emoji: "🍵☁️",
    imageFile: "images/matcha-cloud-crush.jpg",
    isSignature: false
  },

  // CATEGORY 3: MILKY FRUIT SERIES (4 items)
  {
    id: "mil-1",
    name: "Avocado Milk Hug",
    category: "Milky Fruit Series",
    price: 35000,
    description: "Rich blended butter avocado with creamy fresh milk and a gentle drizzle of palm sugar.",
    emoji: "🥑🥛",
    imageFile: "images/avocado-milk-hug.jpg",
    isSignature: false
  },
  {
    id: "mil-2",
    name: "Banana Milk Diary",
    category: "Milky Fruit Series",
    price: 32000,
    description: "Korean-inspired sweet honey banana milk that tastes like comfort in a bottle.",
    emoji: "🍌🥛",
    imageFile: "images/banana-milk-diary.jpg",
    isSignature: false
  },
  {
    id: "mil-3",
    name: "Blueberry Milk Dream",
    category: "Milky Fruit Series",
    price: 35000,
    description: "House-cooked wild blueberry compote swirled into cold creamy milk.",
    emoji: "🫐🥛",
    imageFile: "images/bluberry-milk-dream.jpg",
    isSignature: false
  },
  {
    id: "mil-4",
    name: "Golden Mango Daydream",
    category: "Milky Fruit Series",
    price: 35000,
    description: "Sun-ripened sweet mango puree layered with silky milk and chewy coconut jelly.",
    emoji: "🥭🥛",
    imageFile: "images/golden-mango-daydream.jpg",
    isSignature: false
  },

  // CATEGORY 4: MILKSHAKE SERIES (4 items)
  {
    id: "shk-1",
    name: "Cookies & Cream Crush",
    category: "Milkshake Series",
    price: 36000,
    description: "Vanilla bean ice cream blended with crunchy dark chocolate sandwich cookies.",
    emoji: "🍪🥤",
    imageFile: "images/cookies-cream-crush.jpg",
    isSignature: false
  },
  {
    id: "shk-2",
    name: "Choco Milo Hug",
    category: "Milkshake Series",
    price: 35000,
    description: "Nostalgic malted chocolate milkshake topped with crunchy Milo powder.",
    emoji: "🍫🥤",
    imageFile: "images/choco-milo-hug.jpg",
    isSignature: false
  },
  {
    id: "shk-3",
    name: "Vanilla Sweetheart",
    category: "Milkshake Series",
    price: 33000,
    description: "Classic Madagascan vanilla milkshake topped with whipped cream and a pink cherry.",
    emoji: "🍒🍨",
    imageFile: "images/vanilla-sweetheart.jpg",
    isSignature: false
  },
  {
    id: "shk-4",
    name: "Midnight Chocolate",
    category: "Milkshake Series",
    price: 37000,
    description: "Deep Belgian dark cocoa milkshake for cozy rainy afternoons and late-night readers.",
    emoji: "🍫✨",
    imageFile: "images/midnight-chocolate.jpg",
    isSignature: false
  },

  // CATEGORY 5: COFFEE COLLECTION (5 items)
  {
    id: "cof-1",
    name: "Slow Morning Americano",
    category: "Coffee Collection",
    price: 26000,
    description: "Smooth double-shot Arabica espresso over purified water, served hot or iced.",
    emoji: "☕💧",
    imageFile: "images/slow-morning-americano.jpg",
    isSignature: false
  },
  {
    id: "cof-2",
    name: "Golden Hour Latte",
    category: "Coffee Collection",
    price: 32000,
    description: "Velvety steamed milk poured over fragrant espresso with a touch of warm honey.",
    emoji: "☕🍯",
    imageFile: "images/golden-hour-latte.jpg",
    isSignature: false
  },
  {
    id: "cof-3",
    name: "Cozy Little Latte",
    category: "Coffee Collection",
    price: 31000,
    description: "Balanced signature café latte with silky microfoam art for study sessions.",
    emoji: "☕🤍",
    imageFile: "images/cozy-little-latte.jpg",
    isSignature: false
  },
  {
    id: "cof-4",
    name: "Butterscotch Cloud",
    category: "Coffee Collection",
    price: 36000,
    description: "Iced caramel-butterscotch espresso topped with sweet sea-salt cream cloud.",
    emoji: "🍮☕",
    imageFile: "images/butterscotch-cloud.jpg",
    isSignature: false
  },
  {
    id: "cof-5",
    name: "Brown Sugar Daydream",
    category: "Coffee Collection",
    price: 34000,
    description: "House palm-sugar espresso latte with creamy milk and caramelized aroma.",
    emoji: "🧋☕",
    imageFile: "images/brown-sugar-daydream.jpg",
    isSignature: false
  },

  // CATEGORY 6: BAKERY & SWEET TREATS (10 items)
  {
    id: "bak-1",
    name: "Blueberry Morning Muffin",
    category: "Bakery & Sweet Treats",
    price: 25000,
    description: "Soft buttery muffin bursting with juicy blueberries and a delicate sugar crumble.",
    emoji: "🫐🧁",
    imageFile: "images/bluberry-morning-muffin.jpg",
    isSignature: false
  },
  {
    id: "bak-2",
    name: "Strawberry Love Cake",
    category: "Bakery & Sweet Treats",
    price: 36000,
    description: "Fluffy pastel vanilla sponge layered with whipped mascarpone and fresh strawberries.",
    emoji: "🍰🍓",
    imageFile: "images/strawberry-love-cake.jpg",
    isSignature: false
  },
  {
    id: "bak-3",
    name: "Dubai Berry Bliss",
    category: "Bakery & Sweet Treats",
    price: 42000,
    description: "Crisp kataifi pistachio cream pastry paired with fresh strawberries and milk chocolate.",
    emoji: "🍓🍫",
    imageFile: "images/dubai-berry-bliss.jpg",
    isSignature: false
  },
  {
    id: "bak-4",
    name: "Cinnamon Sunday Roll",
    category: "Bakery & Sweet Treats",
    price: 28000,
    description: "Warm brioche swirl baked with Ceylon cinnamon and glazed with vanilla cream cheese.",
    emoji: "🥐🍯",
    imageFile: "images/cinnamon-sunday-roll.jpg",
    isSignature: false
  },
  {
    id: "bak-5",
    name: "Sugar Cloud Donut",
    category: "Bakery & Sweet Treats",
    price: 22000,
    description: "Pillow-soft brioche ring dusted in fine snow sugar and vanilla bean glaze.",
    emoji: "🍩☁️",
    imageFile: "images/sugar-cloud-donut.jpg",
    isSignature: false
  },
  {
    id: "bak-6",
    name: "Almond Sugar Cloud",
    category: "Bakery & Sweet Treats",
    price: 30000,
    description: "Pillow-soft brioche ring filled with sweet almond frangipane and toasted almond flakes.",
    emoji: "🥐🌰",
    imageFile: "images/almond-sugar-donut.jpg",
    isSignature: false
  },
  {
    id: "bak-7",
    name: "Matcha Berry Cream Bagel",
    category: "Bakery & Sweet Treats",
    price: 32000,
    description: "Chewy toasted bagel filled with whipped matcha cream cheese and sweet strawberry jam.",
    emoji: "🥯🍓",
    imageFile: "images/matcha-berry-bagel.jpg",
    isSignature: false
  },
  {
    id: "bak-8",
    name: "Golden Butter Croissant",
    category: "Bakery & Sweet Treats",
    price: 26000,
    description: "27-layer flaky French butter croissant baked golden every single morning.",
    emoji: "🥐✨",
    imageFile: "images/golden-butter-croissant.jpg",
    isSignature: false
  },
  {
    id: "bak-9",
    name: "Vanilla Cloud Puff",
    category: "Bakery & Sweet Treats",
    price: 24000,
    description: "Crisp choux pastry filled to order with cold Madagascan vanilla diplomat cream.",
    emoji: "🧁🍦",
    imageFile: "images/vanilla-cloud-puff.jpg",
    isSignature: false
  },
  {
    id: "bak-10",
    name: "Double Choco Dream Puff",
    category: "Bakery & Sweet Treats",
    price: 26000,
    description: "Cocoa craquelin choux puff overflowing with rich dark chocolate pastry cream.",
    emoji: "🧁🍫",
    imageFile: "images/double-choco-puff.jpg",
    isSignature: false
  }
];

// Format number into Indonesian Rupiah (e.g., IDR 38.000)
function formatIDR(amount) {
  return "IDR " + amount.toLocaleString("id-ID");
}

// Retrieve cart array from localStorage
function getCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error reading cart from localStorage:", error);
    return [];
  }
}

// Save cart array to localStorage and refresh UI badges across tabs
function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateNavCartBadge();
  renderCartSidebar();
}

// Update Navbar cart counter across ALL 5 pages
function updateNavCartBadge() {
  const badge = document.getElementById("navCartCount");
  if (!badge) return;
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalQty;
}

// Add product by ID to cart
function addToCart(productId) {
  const product = LUNELLE_PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  saveCart(cart);
}

// Helper used on index.html to add item and show a cute toast notification
function addToCartFromHome(productId) {
  addToCart(productId);
  const product = LUNELLE_PRODUCTS.find((p) => p.id === productId);
  const toastEl = document.getElementById("homeCartToast");
  const toastMsg = document.getElementById("homeToastMessage");

  if (toastEl && toastMsg && product) {
    toastMsg.textContent = `🎀 Added "${product.name}" to your LUNELLE cart!`;
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
}

// Increase or decrease quantity in cart
function updateCartQuantity(productId, delta) {
  let cart = getCart();
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry.id !== productId);
  }
  saveCart(cart);
}

// Remove product completely from cart
function removeFromCart(productId) {
  const cart = getCart().filter((entry) => entry.id !== productId);
  saveCart(cart);
}

// Render product cards on menu.html based on selected category
function renderMenuProducts(selectedCategory = "All") {
  const grid = document.getElementById("menuProductGrid");
  if (!grid) return;

  const filtered =
    selectedCategory === "All"
      ? LUNELLE_PRODUCTS
      : LUNELLE_PRODUCTS.filter((p) => p.category === selectedCategory);

  const titleEl = document.getElementById("activeCategoryTitle");
  const countEl = document.getElementById("productCountLabel");
  if (titleEl) {
    titleEl.textContent = selectedCategory === "All" ? "All Menu Items" : selectedCategory;
  }
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} item${filtered.length > 1 ? "s" : ""}`;
  }

  grid.innerHTML = filtered
    .map(
      (product) => `
      <div class="col">
        <div class="card card-lunelle h-100 ${product.isSignature ? "border-2" : ""}" style="${product.isSignature ? "border-color: var(--coffee-brown) !important;" : ""}">
          <div class="position-relative">
            <img src="${product.imageFile}" class="card-img-top" alt="${product.name}" style="height: 220px; object-fit: cover; background-color: var(--baby-pink);">
            ${
              product.isSignature
                ? `<span class="signature-badge position-absolute top-0 start-0 m-3">★ Signature Drink</span>`
                : ""
            }
          </div>
          <div class="card-body d-flex flex-column">
            <small class="text-coffee mb-1">${product.category}</small>
            <h3 class="h5 card-title">${product.name}</h3>
            <p class="card-text small text-muted flex-grow-1">${product.description}</p>
            <div class="d-flex align-items-center justify-content-between mt-3 pt-2 border-top">
              <span class="fw-semibold text-dark-brown">${formatIDR(product.price)}</span>
              <button type="button" class="btn btn-sm btn-lunelle-primary" onclick="addToCart('${product.id}')">
                <i class="bi bi-bag-plus me-1"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Render Shopping Cart sidebar on menu.html
function renderCartSidebar() {
  const container = document.getElementById("cartItemsContainer");
  const emptyState = document.getElementById("emptyCartState");
  const summaryBox = document.getElementById("cartSummaryBox");
  const clearBtn = document.getElementById("clearCartBtn");

  if (!container || !emptyState || !summaryBox) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = "";
    emptyState.style.display = "block";
    summaryBox.style.display = "none";
    if (clearBtn) clearBtn.style.display = "none";
    return;
  }

  emptyState.style.display = "none";
  summaryBox.style.display = "block";
  if (clearBtn) clearBtn.style.display = "inline-block";

  let totalItems = 0;
  let subtotal = 0;

  container.innerHTML = cart
    .map((entry) => {
      const product = LUNELLE_PRODUCTS.find((p) => p.id === entry.id);
      if (!product) return "";

      const itemTotal = product.price * entry.quantity;
      totalItems += entry.quantity;
      subtotal += itemTotal;

      return `
        <div class="p-3 rounded-4 bg-baby-pink d-flex justify-content-between align-items-center gap-2">
          <div class="flex-grow-1">
            <h4 class="h6 mb-1">${product.emoji} ${product.name}</h4>
            <small class="text-coffee d-block">${formatIDR(product.price)} each</small>
            <strong class="small text-dark-brown">${formatIDR(itemTotal)}</strong>
          </div>
          <div class="d-flex align-items-center gap-1">
            <button type="button" class="btn btn-sm btn-light rounded-circle border" aria-label="Decrease quantity" onclick="updateCartQuantity('${product.id}', -1)">-</button>
            <span class="px-2 fw-semibold small">${entry.quantity}</span>
            <button type="button" class="btn btn-sm btn-light rounded-circle border" aria-label="Increase quantity" onclick="updateCartQuantity('${product.id}', 1)">+</button>
            <button type="button" class="btn btn-sm text-danger ms-1" aria-label="Remove item" onclick="removeFromCart('${product.id}')">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  document.getElementById("cartTotalItems").textContent = totalItems;
  document.getElementById("cartSubtotal").textContent = formatIDR(subtotal);
  document.getElementById("cartGrandTotal").textContent = formatIDR(subtotal);
}

// Keep cart badge synchronized across multiple browser tabs in real time
window.addEventListener("storage", function (event) {
  if (event.key === CART_STORAGE_KEY) {
    updateNavCartBadge();
    renderCartSidebar();
  }
});

// Initialize Menu & Cart interactions when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  updateNavCartBadge();
  renderMenuProducts("All");
  renderCartSidebar();

  // Category filter button clicks
  const filterButtons = document.querySelectorAll("#categoryFilterBar button");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterButtons.forEach((b) => {
        b.classList.remove("btn-lunelle-primary", "active");
        b.classList.add("btn-lunelle-outline");
      });
      this.classList.remove("btn-lunelle-outline");
      this.classList.add("btn-lunelle-primary", "active");

      const category = this.getAttribute("data-category");
      renderMenuProducts(category);
    });
  });

  // Clear entire cart button
  const clearCartBtn = document.getElementById("clearCartBtn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", function () {
      saveCart([]);
    });
  }

  // Checkout Simulation button
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      const cart = getCart();
      if (cart.length === 0) return;

      let totalAmount = 0;
      const lines = cart
        .map((entry) => {
          const product = LUNELLE_PRODUCTS.find((p) => p.id === entry.id);
          if (!product) return "";
          const linePrice = product.price * entry.quantity;
          totalAmount += linePrice;
          return `<div>• ${product.emoji} ${product.name} (x${entry.quantity}) — <strong>${formatIDR(linePrice)}</strong></div>`;
        })
        .join("");

      const orderCode = "LNL-ORD-" + Math.floor(1000 + Math.random() * 9000);
      const receiptEl = document.getElementById("checkoutReceiptDetails");
      if (receiptEl) {
        receiptEl.innerHTML = `
          <div class="mb-2"><strong>Order Reference:</strong> ${orderCode}</div>
          ${lines}
          <hr class="my-2">
          <div class="d-flex justify-content-between">
            <span>Total Paid (Simulation):</span>
            <strong>${formatIDR(totalAmount)}</strong>
          </div>
        `;
      }

      // Clear cart after checkout simulation and show modal
      saveCart([]);
      const modalEl = document.getElementById("checkoutModal");
      if (modalEl) {
        const checkoutModal = new bootstrap.Modal(modalEl);
        checkoutModal.show();
      }
    });
  }
});