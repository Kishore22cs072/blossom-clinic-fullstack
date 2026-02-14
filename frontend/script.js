// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close mobile menu if open
    navLinks.classList.remove('active');
  });
});

// Optional: Form submission alert (replace with real backend later)
document.getElementById('appointment-form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your appointment request has been sent. We will contact you soon.');
  e.target.reset();
});

const API_URI = "https://blossom-clinic-fullstack.onrender.com";


// You can later add dynamic blog loading from backend like in previous example
