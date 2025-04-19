document.addEventListener('DOMContentLoaded', function() {
  // Perfume Data - Updated with 30 additional perfumes (now 38 total)
  const perfumes = [
      { id: 1, name: 'Floral Elegance', gender: 'female', price: '$75', desc: 'A delicate floral fragrance', image: 'images/perfume1.jpg' },
      { id: 2, name: 'Woody Mystique', gender: 'male', price: '$85', desc: 'Rich woody notes', image: 'images/perfume2.jpg' },
      { id: 3, name: 'Citrus Splash', gender: 'female', price: '$65', desc: 'Fresh citrus aroma', image: 'images/perfume3.jpg' },
      { id: 4, name: 'Ocean Breeze', gender: 'male', price: '$70', desc: 'Cool aquatic scent', image: 'images/perfume4.jpg' },
      { id: 5, name: 'Vanilla Dream', gender: 'female', price: '$60', desc: 'Sweet vanilla essence', image: 'images/perfume5.jpg' },
      { id: 6, name: 'Spice Route', gender: 'male', price: '$80', desc: 'Exotic spicy fragrance', image: 'images/perfume6.jpg' },
      { id: 7, name: 'Rose Petals', gender: 'female', price: '$78', desc: 'Romantic rose scent', image: 'images/perfume7.jpg' },
      { id: 8, name: 'Leather & Tobacco', gender: 'male', price: '$90', desc: 'Bold masculine aroma', image: 'images/perfume8.jpg' },
      // New perfumes added below
      { id: 9, name: 'Jasmine Serenade', gender: 'female', price: '$72', desc: 'Lush jasmine bouquet', image: 'images/perfume9.jpg' },
      { id: 10, name: 'Sandalwood Oasis', gender: 'male', price: '$88', desc: 'Warm sandalwood essence', image: 'images/perfume10.jpg' },
      { id: 11, name: 'Berry Bliss', gender: 'female', price: '$68', desc: 'Juicy berry medley', image: 'images/perfume11.jpg' },
      { id: 12, name: 'Mountain Air', gender: 'unisex', price: '$75', desc: 'Crisp alpine freshness', image: 'images/perfume12.jpg' },
      { id: 13, name: 'Coconut Paradise', gender: 'female', price: '$65', desc: 'Tropical coconut delight', image: 'images/perfume13.jpg' },
      { id: 14, name: 'Amber Night', gender: 'male', price: '$82', desc: 'Deep amber allure', image: 'images/perfume14.jpg' },
      { id: 15, name: 'Lavender Fields', gender: 'unisex', price: '$70', desc: 'Calming lavender waves', image: 'images/perfume15.jpg' },
      { id: 16, name: 'Black Orchid', gender: 'female', price: '$95', desc: 'Mysterious floral oriental', image: 'images/perfume16.jpg' },
      { id: 17, name: 'Mahogany Teak', gender: 'male', price: '$85', desc: 'Luxurious woody scent', image: 'images/perfume17.jpg' },
      { id: 18, name: 'Peony Charm', gender: 'female', price: '$78', desc: 'Elegant peony bouquet', image: 'images/perfume18.jpg' },
      { id: 19, name: 'Fresh Linen', gender: 'unisex', price: '$60', desc: 'Clean cotton freshness', image: 'images/perfume19.jpg' },
      { id: 20, name: 'Musk Magic', gender: 'unisex', price: '$80', desc: 'Sensual musk blend', image: 'images/perfume20.jpg' },
      { id: 21, name: 'Gardenia Whispers', gender: 'female', price: '$74', desc: 'Creamy gardenia notes', image: 'images/perfume21.jpg' },
      { id: 22, name: 'Cedar Supreme', gender: 'male', price: '$87', desc: 'Noble cedar aroma', image: 'images/perfume22.jpg' },
      { id: 23, name: 'Peach Nectar', gender: 'female', price: '$69', desc: 'Ripe peach sweetness', image: 'images/perfume23.jpg' },
      { id: 24, name: 'Ocean Mist', gender: 'unisex', price: '$72', desc: 'Salty sea breeze', image: 'images/perfume24.jpg' },
      { id: 25, name: 'Honeyed Fig', gender: 'female', price: '$77', desc: 'Sweet fig and honey', image: 'images/perfume25.jpg' },
      { id: 26, name: 'Black Pepper', gender: 'male', price: '$83', desc: 'Spicy pepper kick', image: 'images/perfume26.jpg' },
      { id: 27, name: 'White Tea', gender: 'unisex', price: '$65', desc: 'Subtle tea leaves', image: 'images/perfume27.jpg' },
      { id: 28, name: 'Velvet Rose', gender: 'female', price: '$89', desc: 'Luxurious rose velvet', image: 'images/perfume28.jpg' },
      { id: 29, name: 'Oud Majesty', gender: 'male', price: '$120', desc: 'Regal oud composition', image: 'images/perfume29.jpg' },
      { id: 30, name: 'Lemon Zest', gender: 'unisex', price: '$62', desc: 'Zingy lemon burst', image: 'images/perfume30.jpg' },
      { id: 31, name: 'Cherry Blossom', gender: 'female', price: '$71', desc: 'Delicate spring blossoms', image: 'images/perfume31.jpg' },
      { id: 32, name: 'Tobacco Vanille', gender: 'male', price: '$98', desc: 'Rich tobacco and vanilla', image: 'images/perfume32.jpg' },
      { id: 33, name: 'Green Apple', gender: 'unisex', price: '$67', desc: 'Crisp apple freshness', image: 'images/perfume33.jpg' },
      { id: 34, name: 'Midnight Jasmine', gender: 'female', price: '$84', desc: 'Nocturnal jasmine', image: 'images/perfume34.jpg' },
      { id: 35, name: 'Pine Forest', gender: 'male', price: '$79', desc: 'Evergreen forest scent', image: 'images/perfume35.jpg' },
      { id: 36, name: 'Sugar Lychee', gender: 'female', price: '$73', desc: 'Sweet lychee delight', image: 'images/perfume36.jpg' },
      { id: 37, name: 'Leather & Oud', gender: 'male', price: '$110', desc: 'Luxurious leather oud', image: 'images/perfume37.jpg' },
      { id: 38, name: 'Cotton Candy', gender: 'female', price: '$63', desc: 'Playful sugary sweetness', image: 'images/perfume38.jpg' }
  ];

  // DOM Elements
  const perfumeContainer = document.querySelector('.perfume-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const pageInfo = document.getElementById('page-info');
  const appointmentForm = document.getElementById('appointment-form');

  // Pagination Variables
  let currentPage = 1;
  const perfumesPerPage = 4;
  let filteredPerfumes = [...perfumes];

  // Initialize
  displayPerfumes();
  updatePaginationInfo();

  // Filter Perfumes
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          // Filter perfumes
          const filter = button.dataset.filter;
          if (filter === 'all') {
              filteredPerfumes = [...perfumes];
          } else {
              filteredPerfumes = perfumes.filter(perfume => perfume.gender === filter);
          }

          // Reset to first page and display
          currentPage = 1;
          displayPerfumes();
          updatePaginationInfo();
      });
  });

  // Pagination Controls
  prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          displayPerfumes();
          updatePaginationInfo();
      }
  });

  nextBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredPerfumes.length / perfumesPerPage);
      if (currentPage < totalPages) {
          currentPage++;
          displayPerfumes();
          updatePaginationInfo();
      }
  });

  // Display Perfumes
  function displayPerfumes() {
      perfumeContainer.innerHTML = '';

      const startIndex = (currentPage - 1) * perfumesPerPage;
      const endIndex = startIndex + perfumesPerPage;
      const perfumesToShow = filteredPerfumes.slice(startIndex, endIndex);

      perfumesToShow.forEach(perfume => {
          const perfumeCard = document.createElement('div');
          perfumeCard.className = 'perfume-card';
          perfumeCard.innerHTML = `
              <img src="${perfume.image}" alt="${perfume.name}">
              <div class="perfume-info">
                  <h3>${perfume.name}</h3>
                  <p>${perfume.desc}</p>
                  <p class="price">${perfume.price}</p>
              </div>
          `;
          perfumeContainer.appendChild(perfumeCard);
      });
  }

  // Update Pagination Info
  function updatePaginationInfo() {
      const totalPages = Math.ceil(filteredPerfumes.length / perfumesPerPage);
      pageInfo.textContent = `${currentPage}/${totalPages}`;

      // Disable buttons when appropriate
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
  }

  // Appointment Form Submission
  appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(appointmentForm);
      const appointment = {
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          service: formData.get('service'),
          datetime: formData.get('datetime'),
          requests: formData.get('requests')
      };

      // Here you would typically send this data to a server
      console.log('Appointment booked:', appointment);
      
      // Show confirmation
      alert('Your appointment has been booked successfully! We will contact you shortly to confirm.');
      
      // Reset form
      appointmentForm.reset();
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
          });
      });
  });
});