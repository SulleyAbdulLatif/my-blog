'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
// Function to toggle theme
function toggleTheme() {
  // Toggle `light-theme` & `dark-theme` class from `body`
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  // Loop through all theme buttons
  for (let i = 0; i < themeBtn.length; i++) {
    // Toggle `light` & `dark` classes for theme buttons
    themeBtn[i].classList.toggle('light');
    themeBtn[i].classList.toggle('dark');
  }

  // Save theme preference to local storage
  const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
}

// Add click event listener to each theme button
for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', toggleTheme);
}

// Check for stored theme preference when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light') {
    toggleTheme(); // Toggle theme to light
  }
});
