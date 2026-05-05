/**
 * TCHOKOS SARL — components.js
 * Injecte la navbar et le footer dans chaque page
 * Appeler injectComponents(activePage) dans chaque page HTML
 */

function injectComponents(activePage) {
  injectNavbar(activePage);
  injectFooter();
  injectToast();
}

function injectNavbar(activePage) {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  // Determine relative path prefix based on page location
  const isSubpage = window.location.pathname.includes('/pages/');
  const prefix = isSubpage ? '../' : '';

  nav.innerHTML = `
    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand" href="${prefix}index.html">
          <img src="${prefix}images/logo.jpg" alt="Tchokos SARL">
          <div class="brand-name">Tchokos <span>SARL</span></div>
        </a>

        <ul class="navbar-menu">
          <li><a href="${prefix}index.html" class="${activePage === 'home' ? 'active' : ''}">Accueil</a></li>
          <li><a href="${prefix}pages/catalogue.html" class="${activePage === 'catalogue' ? 'active' : ''}">Catalogue</a></li>
          <li><a href="${prefix}pages/contact.html" class="${activePage === 'contact' ? 'active' : ''}">Contact</a></li>
        </ul>

        <div class="navbar-right">
          <a href="${prefix}pages/cart.html" class="cart-btn">
            🛒 Panier <span class="cart-badge">0</span>
          </a>
          <button class="hamburger" onclick="toggleMobile()" aria-label="Menu">☰</button>
        </div>
      </div>

      <div class="mobile-menu" id="mobileMenu" style="display:none">
        <a href="${prefix}index.html">Accueil</a>
        <a href="${prefix}pages/catalogue.html">Catalogue</a>
        <a href="${prefix}pages/contact.html">Contact</a>
        <a href="${prefix}pages/cart.html">🛒 Panier</a>
      </div>
    </nav>
  `;
}

function injectFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  const isSubpage = window.location.pathname.includes('/pages/');
  const prefix = isSubpage ? '../' : '';

  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${prefix}images/logo.jpg" alt="Tchokos SARL">
            <div class="brand-name">Tchokos SARL</div>
            <p>The Best, Made in Africa. Chaussures, textiles, accessoires et électroménager de qualité, disponibles en gros et au détail depuis Douala.</p>
          </div>
          <div class="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="${prefix}index.html">Accueil</a></li>
              <li><a href="${prefix}pages/catalogue.html">Catalogue</a></li>
              <li><a href="${prefix}pages/contact.html">Contact</a></li>
              <li><a href="${prefix}pages/cart.html">Mon Panier</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>📍 Akwa, Douala</li>
              <li>📞 +237 6XX XXX XXX</li>
              <li>🕐 Lun–Sam : 8h–20h</li>
              <li>📦 Livraison nationale</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 <span>Tchokos SARL</span> — The Best, Made in Africa 🇨🇲</p>
          <p>Site réalisé par <span>Elie NJINE</span> · Développeur Web Full-Stack</p>
        </div>
      </div>
    </footer>
  `;
}

function injectToast() {
  if (!document.getElementById('toast')) {
    const t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
}

function toggleMobile() {
  const m = document.getElementById('mobileMenu');
  if (m) m.style.display = m.style.display === 'none' ? 'block' : 'none';
}

/** Corrige le chemin d'image selon la position de la page (racine vs /pages/) */
function resolveImg(path) {
  const isSubpage = window.location.pathname.includes('/pages/');
  return isSubpage ? path : path.replace('../images/', 'images/');
}
