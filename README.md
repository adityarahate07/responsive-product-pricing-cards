# Responsive Product Pricing Cards

![GitHub Pages](https://img.shields.io/badge/deployed-GitHub%20Pages-4f46e5)
![HTML](https://img.shields.io/badge/HTML-5-e34f26)
![CSS](https://img.shields.io/badge/CSS-3-1572b6)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-f7df1e)
![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA%20Compliant-166534)

A modern, accessible, and responsive SaaS Product Pricing Cards Component with an interactive Monthly/Yearly billing toggle. Built strictly with semantic HTML5, CSS Grid, and pure Vanilla JavaScript (zero external dependencies).

---

## 🌐 Live Demo

This project is deployed automatically to GitHub Pages:

👉 **[https://adityarahate07.github.io/responsive-product-pricing-cards/](https://adityarahate07.github.io/responsive-product-pricing-cards/)**

---

## ✨ Features

- **Semantic HTML5 Markup**: Built using `<section>`, `<article>`, `<header>`, `<h2>`, `<h3>`, and `<ul>` list elements.
- **Interactive Billing Toggle**: Real `<button>` elements with dynamic `aria-pressed="true|false"` state synchronization.
- **Save 20% Discount Badge**: Highlights yearly savings with high-contrast emerald badge styling.
- **Single Source of Truth for Prices**: All prices are stored in `data-monthly` and `data-yearly` HTML attributes. JavaScript never hardcodes price values.
- **CSS Grid Layout**: Clean 3-column desktop layout (`repeat(3, 1fr)`) with elegant card lift hover transitions (`translateY(-6px)`).
- **Pro Plan Highlight ("Most Popular")**: Styled with an accent indigo border, distinct pill ribbon badge, and desktop elevation.
- **Mobile-First Responsive Reordering**: Below `800px`, cards stack vertically (`1fr`) with `order: -1` on the Pro card so the most popular plan appears first.
- **Reduced Motion Support**: Full `@media (prefers-reduced-motion: reduce)` support disables transitions and transforms for users who prefer reduced motion.
- **WCAG 2.1 Contrast & Accessibility**: Meets and exceeds WCAG AA (4.5:1+) requirements across all text, buttons, and badges. Full keyboard navigation with visible `:focus-visible` outlines.

---

## 💳 Pricing Plans Matrix

| Plan | Monthly Billing | Yearly Billing (Save 20%) | Target Audience | Key Inclusions |
| :--- | :--- | :--- | :--- | :--- |
| **Starter** | **₹499** / mo | **₹4,790** / yr | Creators & Side Projects | 3 projects, 5 GB storage, basic analytics |
| **Pro** *(Popular)* | **₹999** / mo | **₹9,590** / yr | Growing Pros & Teams | Unlimited projects, 100 GB, 24/7 priority support |
| **Team** | **₹2,499** / mo | **₹23,990** / yr | Scaling Organizations | Unlimited seats, 1 TB, Dedicated CSM, SSO / SLA |

---

## 📁 Project Structure

```text
.
├── index.html     # Semantic markup, ARIA roles, data-attribute pricing
├── style.css      # CSS Grid, modern SaaS styling, transitions, a11y focus
├── app.js         # Vanilla JS toggle logic, dynamic dataset pricing, keyboard navigation
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages automatic deployment workflow
└── README.md      # Comprehensive project documentation
```

---

## 🚀 Run Locally

No build tools or package installations required.

### Option 1: Open Directly in Browser
Double-click `index.html` or open it with your browser of choice.

### Option 2: Start a Local Server
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## ♿ Accessibility (A11y) Features

1. **Screen Reader Support**:
   - `aria-pressed="true|false"` dynamically reflects active billing selection.
   - Container has `role="group"` and `aria-label="Billing frequency options"`.
   - Cards are tied to headings using `aria-labelledby="plan-pro-title"`.
   - Feature checkmark SVG icons have `aria-hidden="true"`.
2. **Keyboard Navigation**:
   - Native `<button>` elements allow standard activation via `Enter` or `Space`.
   - Enhanced arrow key support (`ArrowLeft` / `ArrowRight`) enables cycling between toggle options.
   - High-contrast `:focus-visible` focus ring (`3px solid #4f46e5; outline-offset: 3px`).
3. **Color Contrast Compliance**:
   - Primary Headings (`#0f172a` on white): **16.2:1** (WCAG AAA).
   - Secondary Text (`#334155` on white): **9.5:1** (WCAG AAA).
   - Primary CTA Button (`#ffffff` on `#4f46e5`): **5.9:1** (WCAG AA).
   - Discount Badge (`#166534` on `#dcfce7`): **7.2:1** (WCAG AAA).

---

## 🛠️ How to Customize Prices

To update prices, modify the `data-monthly` and `data-yearly` attributes in `index.html`:

```html
<div class="price-figure">
  <span class="currency-symbol">₹</span>
  <span class="price" data-monthly="699" data-yearly="6,990">699</span>
</div>
<span class="unit">per month</span>
```

No JavaScript changes are needed—`app.js` reads these attributes automatically.

---

## 🚀 Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that deploys to GitHub Pages on every push to `main`.

To enable GitHub Pages in your repository:
1. Go to **Settings** > **Pages** in your GitHub repository.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
