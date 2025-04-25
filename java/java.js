// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Gallery image click handler
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function() {
    console.log('Gallery image clicked:', this.querySelector('img').alt);
  });
});