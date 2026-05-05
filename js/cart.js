/**
 * TCHOKOS SARL — cart.js
 * Gestion du panier (localStorage)
 */

const CART_KEY = 'tchokos_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId, size) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();
  const key = `${productId}-${size || 'unique'}`;
  const existing = cart.find(i => i.key === key);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      id: product.id,
      name: product.name,
      subcat: product.subcat,
      price: product.price,
      image: product.image,
      size: size || null,
      qty: 1,
    });
  }
  saveCart(cart);
  updateCartBadges();
  showToast(`✓ ${product.name} ajouté au panier`);
}

function removeFromCart(key) {
  const cart = getCart().filter(i => i.key !== key);
  saveCart(cart);
  updateCartBadges();
}

function updateQty(key, delta) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function clearCart() {
  saveCart([]);
  updateCartBadges();
}

function updateCartBadges() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count === 0 ? 'none' : 'inline-flex';
  });
}

/* ── Toast notification ─────────────────────────────────── */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-icon">🛒</span> ${message}`;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* Init badges on every page load */
document.addEventListener('DOMContentLoaded', updateCartBadges);
