document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
      navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    });
  });

  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }