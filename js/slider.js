// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let autoSlideInterval;

// Function to show a specific slide
function showSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Add active class to current slide and dot
  slides[index].classList.add('active');
  dots[index].classList.add('active');

  currentSlide = index;
}

// Function to go to next slide
function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
  resetAutoSlide();
}

// Function to start auto slide
function startAutoSlide() {
  const currentSlideElement = slides[currentSlide];
  const video = currentSlideElement.querySelector('video');

  // Set different timing for video vs images
  const delay = video ? 16000 : 5000; // 16 seconds for video, 5 seconds for images

  autoSlideInterval = setTimeout(() => {
    nextSlide();
  }, delay);
}

// Function to reset auto slide timer
function resetAutoSlide() {
  clearTimeout(autoSlideInterval);
  startAutoSlide();
}

// Add click event to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    resetAutoSlide();
  });
});

// Start auto slide on page load
startAutoSlide();
