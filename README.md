# Tchokos SARL — Prototype E-Commerce
**Réalisé par Elie NJINE · Développeur Web Full-Stack**

---

## 📁 Structure du projet

```
tchokos/
├── index.html              ← Page d'accueil
├── css/
│   └── style.css           ← Tous les styles
├── js/
│   ├── products.js         ← Base de données produits + catégories
│   ├── cart.js             ← Gestion du panier (localStorage)
│   └── components.js       ← Navbar et Footer partagés
├── images/
│   ├── logo.jpg            ← Logo Tchokos
│   └── [produits].jpg      ← Photos des produits
└── pages/
    ├── catalogue.html      ← Catalogue avec filtres
    ├── product.html        ← Fiche produit détaillée
    ├── cart.html           ← Panier
    └── contact.html        ← Page contact / formulaire
```

---

## 🚀 Lancer le site localement

1. Extraire le dossier ZIP
2. Ouvrir `index.html` dans votre navigateur

> ⚠️ Pour que le panier (localStorage) fonctionne correctement,
> lancez avec un serveur local si possible :
> ```
> # Python
> python -m http.server 8080
> # Node.js
> npx serve .
> ```
> Puis ouvrir http://localhost:8080

---

## ➕ Ajouter un produit

Ouvrir `js/products.js` et copier un objet existant dans le tableau `PRODUCTS` :

```js
{
  id: 19,                          // Numéro unique (incrémenter)
  name: 'Nom du produit',
  cat: 'chaussures-femme',         // ID de catégorie (voir CATEGORIES)
  subcat: 'Sandales',              // Sous-catégorie
  price: 12000,                    // Prix en FCFA (nombre entier)
  badge: 'Nouveau',                // Badge : 'Nouveau', 'Promo', 'Tendance', '' pour rien
  badgeType: 'badge-red',          // 'badge-red', 'badge-gold', 'badge-dark'
  image: '../images/mon-image.jpg',// Chemin vers l'image (placer dans /images/)
  sizes: ['36','37','38','39'],    // Tableau de pointures, [] si pas applicable
  description: 'Description...',
  inStock: true,
},
```

---

## ➕ Ajouter une catégorie

Dans `js/products.js`, ajouter dans le tableau `CATEGORIES` :

```js
{ id: 'maroquinerie', label: 'Maroquinerie', subcats: ['Ceintures', 'Portefeuilles'] },
```

Puis ajouter des produits avec `cat: 'maroquinerie'`.

---

## 🖼️ Ajouter des images

Placer les images dans le dossier `images/` et référencer le chemin dans `products.js` :
- Depuis `pages/` : `../images/mon-image.jpg`
- Depuis `index.html` : `images/mon-image.jpg`

---

## 📱 Commande WhatsApp

Le numéro WhatsApp est configuré dans :
- `pages/product.html` → ligne `wa.me/237600000000`
- `pages/cart.html` → ligne `wa.me/237600000000`
- `pages/contact.html` → ligne `wa.me/237600000000`

**Remplacer `237600000000` par le vrai numéro Tchokos.**

---

*Prototype développé à des fins de démonstration commerciale.*
*Contact : elie-njine.online*
