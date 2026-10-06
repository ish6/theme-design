import './styles.css';

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});
