
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// JCS DE JAVIER

// const carousel = document.getElementById('carousel');
// const modal = document.getElementById('modal');
// const modalTitle = document.getElementById('modalTitle');
// const modalDesc = document.getElementById('modalDesc');
// const modalImg = document.getElementById('modalImg');
// const closeBtn = document.getElementById('closeBtn');

// Cambia esta URL por la de tu API real o JSON externo
// const API_URL = 'https://tu-api.com/imagenes';

// fetch(API_URL)
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(item => {
//       const div = document.createElement('div');
//       div.className = 'carousel-item';
//       const img = document.createElement('img');
//       img.src = item.image;
//       img.alt = item.title;

//       Hover con JS
//       img.addEventListener('mouseenter', () => {
//         img.style.transform = 'scale(1.1)';
//       });
//       img.addEventListener('mouseleave', () => {
//         img.style.transform = 'scale(1)';
//       });

//       Click para mostrar modal
//       img.addEventListener('click', () => {
//         modal.style.display = 'flex';
//         modalTitle.textContent = item.title;
//         modalDesc.textContent = item.description;
//         modalImg.src = item.image;
//       });

//       div.appendChild(img);
//       carousel.appendChild(div);
//     });
//   })
//   .catch(error => {
//     console.error('Error al cargar la API:', error);
//   });

// closeBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// window.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     modal.style.display = 'none';
//   }
// });

// JCS DE JAVIER
