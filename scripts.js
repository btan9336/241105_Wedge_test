// JavaScript to handle sliding functionality
function nextSlide(button) {
  const container = button.parentElement.querySelector('.image-slider');
  const images = container.querySelectorAll('img');
  let currentIndex = parseInt(container.dataset.currentIndex) || 0;

  currentIndex = (currentIndex + 1) % images.length;
  container.style.transform = `translateX(-${currentIndex * 100}%)`;
  container.dataset.currentIndex = currentIndex;
}

function prevSlide(button) {
  const container = button.parentElement.querySelector('.image-slider');
  const images = container.querySelectorAll('img');
  let currentIndex = parseInt(container.dataset.currentIndex) || 0;

  currentIndex = (currentIndex - 1 + images.length) % images.length;
  container.style.transform = `translateX(-${currentIndex * 100}%)`;
  container.dataset.currentIndex = currentIndex;
}

function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const sandwichIcon = document.querySelector('.menu-icon');

  if (navMenu.classList.contains('show')) {
    // Collapse the menu from left to right
    navMenu.classList.remove('show');
    navMenu.classList.add('hide-right');
    sandwichIcon.classList.remove('active'); // Optional: reset sandwich icon animation or style
  } else {
    // Expand the menu from right to left
    navMenu.classList.remove('hide-right');
    navMenu.classList.add('show');
    sandwichIcon.classList.add('active'); // Optional: animate sandwich icon or change style
  }
}