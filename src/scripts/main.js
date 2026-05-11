'use strict';

const form = document.querySelector('#form');
const fadeElements = document.querySelectorAll('.fade-in');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15,
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  window.alert('Thank you! The form has been successfully submitted!');

  form.reset();
});

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach((element) => {
  fadeObserver.observe(element);
});
