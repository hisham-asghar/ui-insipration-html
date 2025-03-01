// Smooth Scroll
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  });
});

// Form Validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  const name = form.querySelector('#name');
  const email = form.querySelector('#email');
  const message = form.querySelector('#message');
  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    alert('All fields are required!');
  }
});

// Interactive Project Filters
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    projects.forEach(project => {
      if (project.classList.contains(category) || category === 'all') {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});