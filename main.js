// Basic interactivity: mobile nav, year, and lightweight form handling
document.addEventListener('DOMContentLoaded', function () {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const primaryMenu = document.getElementById('primaryMenu');
  if (navToggle && primaryMenu) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      primaryMenu.classList.toggle('show');
    });
    // close nav on link click (mobile)
    primaryMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      primaryMenu.classList.remove('show');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Contact form: show a friendly confirmation without page reload when using Formspree
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      // Let the form submit normally if action is configured.
      // If you'd like AJAX submission, we can enable it — tell me and I'll add it.
      // For now, show a simple confirmation when the user submits (UI feedback).
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }
      // Note: Formspree will redirect or show success based on your Formspree settings.
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send message';
        }
      }, 3000);
    });
  }
});