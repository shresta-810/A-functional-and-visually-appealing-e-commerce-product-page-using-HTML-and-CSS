let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[slideIndex].style.display = 'none';
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds