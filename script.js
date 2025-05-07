// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  for (let link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Contact form submission handler
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Simple form validation
      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      if (name && email && message) {
        alert('Thank you for your message. We will get back to you shortly.');
        form.reset();
      } else {
        alert('Please fill in all fields before submitting the form.');
      }
    });
  }
});
