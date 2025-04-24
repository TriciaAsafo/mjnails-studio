// Booking form submission handler
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  
  // Simple validation
  if (!name || !email || !service || !date || !time) {
    alert('Please fill in all required fields');
    return;
  }
  
  // In a real application, you would send this data to a server
  console.log('Booking submitted:', { name, email, service, date, time });
  
  // Show confirmation message
  alert(`Thank you, ${name}! Your ${service} appointment is booked for ${date} at ${time}. A confirmation has been sent to ${email}.`);
  
  // Reset form
  this.reset();
});

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

// Gallery image click handler (could be expanded for a lightbox)
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function() {
    // In a real application, you might open a lightbox here
    console.log('Gallery image clicked:', this.querySelector('img').alt);
  });
});