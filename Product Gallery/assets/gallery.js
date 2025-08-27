document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-slider', {
    // Optional parameters
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
      enabled: true,
    },

    // Enabled autoplay mode
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false,
      clickable: true,
    },

    // If we need navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1.13,
        spaceBetween: 7,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  // --- Desktop Thumbnail Gallery Logic (No changes needed here) ---

  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.thumbnail-img');

  // Create an array of image URLs from the thumbnail data attributes
  const images = Array.from(thumbnails).map((thumb) => thumb.dataset.full);

  let currentIndex = 0;

  // Thumbnail click functionality
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      currentIndex = index;
      updateGallery();
    });
  });

  // Previous image
  function previousImage() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateGallery();
  }

  // Next image
  function nextImage() {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateGallery();
  }

  // Update gallery display
  function updateGallery() {
    if (mainImage && images[currentIndex]) {
      mainImage.src = images[currentIndex];
    }
    thumbnails.forEach((thumb, index) => {
      thumb.classList.toggle('active', index === currentIndex);
    });
  }

  // Make functions available to the `onclick` attributes in the HTML
  window.previousImage = previousImage;
  window.nextImage = nextImage;
});
