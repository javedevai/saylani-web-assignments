// Mobile menu toggle
const menuBtn = document.querySelector('.lg\\:hidden');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    alert('Mobile menu would open here');
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Offer cards click
document.querySelectorAll('.cursor-pointer').forEach(card => {
  card.addEventListener('click', () => {
    console.log('Offer clicked');
  });
});
