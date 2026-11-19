# Responsive SaaS Product Pricing Cards

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-22C55E?style=for-the-badge)

A modern, responsive SaaS pricing section featuring three plans, monthly and yearly billing, keyboard support, and accessible interactive states. The project is built with semantic HTML, CSS Grid, and vanilla JavaScript without external dependencies.

## Live Demo

[View the website](https://adityarahate07.github.io/responsive-product-pricing-cards/)

## Features

- Three responsive pricing plans
- Monthly and yearly billing toggle
- Dynamic price and billing-period updates
- Highlighted "Most Popular" Pro plan
- CSS Grid desktop layout and mobile stacking
- Hover and card elevation effects
- Keyboard navigation with arrow keys
- Accessible ARIA pressed states and labels
- Visible focus indicators
- Reduced-motion support
- Zero external libraries or build tools

## Pricing Plans

| Plan | Monthly | Yearly |
|---|---:|---:|
| Starter | ₹499 / month | ₹4,790 / year |
| Pro | ₹999 / month | ₹9,590 / year |
| Team | ₹2,499 / month | ₹23,990 / year |

The Pro plan is presented as the recommended plan.

## Project Structure

```text
.
├── index.html
├── style.css
├── app.js
└── README.md
```

## Run Locally

No installation or build step is required.

Open `index.html` directly in a browser, or start a local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Customize

Update the price values in `index.html` using the existing data attributes:

```html
<span
  class="price"
  data-monthly="499"
  data-yearly="4,790"
>499</span>
```

Update card content, colors, spacing, and responsive behavior in `index.html`, `style.css`, and `app.js`.

## Accessibility

- Semantic pricing and page structure
- Native buttons for billing controls
- `aria-pressed` updates for active billing mode
- Keyboard activation and arrow-key navigation
- `aria-labelledby` connections between cards and headings
- High-contrast text and visible focus states
- `prefers-reduced-motion` support

## Author

**Aditya Rahate**

- GitHub: [adityarahate07](https://github.com/adityarahate07)
- LinkedIn: [Aditya Rahate](https://www.linkedin.com/in/aditya-rahate-a10209330/)
- Email: [rahateaditya07@gmail.com](mailto:rahateaditya07@gmail.com)
