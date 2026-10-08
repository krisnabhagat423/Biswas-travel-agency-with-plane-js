document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  const yearNode = document.querySelector('#year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
});
