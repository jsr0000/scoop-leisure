let slideIndex = 0;
let timeoutId = null;

showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Add active class to current slide
    slides[slideIndex - 1].classList.add("active");

    // Clear existing timeout and set new one
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(showSlides, 5000);
}

function changeSlide(n) {
    let slides = document.querySelectorAll(".slide");

    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slideIndex += n;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    // Add active class to new slide
    slides[slideIndex].classList.add("active");

    // Reset the timer
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(showSlides, 5000);
}
