/**
 * SaaS Product Pricing Cards Component - Client Script
 * Implements accessible billing toggle, dynamic data-attribute price updates,
 * and ARIA state synchronization with Vanilla JavaScript.
 */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Select DOM Elements
  const monthlyBtn = document.getElementById('billing-monthly');
  const yearlyBtn = document.getElementById('billing-yearly');
  const pricingCards = document.querySelectorAll('.pricing-card');

  // Defensive check: ensure critical elements exist
  if (!monthlyBtn || !yearlyBtn || pricingCards.length === 0) {
    return;
  }

  const toggleButtons = [monthlyBtn, yearlyBtn];

  /**
   * Updates the UI to reflect the selected billing mode ('monthly' or 'yearly')
   * @param {'monthly' | 'yearly'} billingMode
   */
  function switchBilling(billingMode) {
    const isMonthly = billingMode === 'monthly';
    const isYearly = billingMode === 'yearly';

    // 1. Update aria-pressed and active CSS class on toggle buttons
    monthlyBtn.classList.toggle('active', isMonthly);
    monthlyBtn.setAttribute('aria-pressed', isMonthly ? 'true' : 'false');

    yearlyBtn.classList.toggle('active', isYearly);
    yearlyBtn.setAttribute('aria-pressed', isYearly ? 'true' : 'false');

    // 2. Determine target billing unit string
    const unitLabel = isYearly ? 'per year' : 'per month';

    // 3. Dynamically update price figures and billing units across all cards
    pricingCards.forEach((card) => {
      const priceElement = card.querySelector('.price');
      const unitElement = card.querySelector('.unit');

      if (priceElement && priceElement.dataset[billingMode] !== undefined) {
        // Read strictly from dataset.monthly or dataset.yearly
        const newPrice = priceElement.dataset[billingMode];

        // Add subtle animation hook
        priceElement.classList.add('updating');

        setTimeout(() => {
          priceElement.textContent = newPrice;
          priceElement.classList.remove('updating');
        }, 80);
      }

      if (unitElement) {
        unitElement.textContent = unitLabel;
      }
    });
  }

  // Event Listeners for Toggle Buttons (Click & Keyboard activation)
  monthlyBtn.addEventListener('click', () => {
    switchBilling('monthly');
  });

  yearlyBtn.addEventListener('click', () => {
    switchBilling('yearly');
  });

  // Enhanced Keyboard Navigation: Arrow Left/Right to cycle between options
  toggleButtons.forEach((btn, index) => {
    btn.addEventListener('keydown', (event) => {
      let targetBtn = null;

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        targetBtn = toggleButtons[(index + 1) % toggleButtons.length];
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        targetBtn = toggleButtons[(index - 1 + toggleButtons.length) % toggleButtons.length];
      }

      if (targetBtn) {
        targetBtn.focus();
        const targetMode = targetBtn.dataset.billing;
        if (targetMode) {
          switchBilling(targetMode);
        }
      }
    });
  });

  // Clean initialization of default state on page load
  switchBilling('monthly');
});
