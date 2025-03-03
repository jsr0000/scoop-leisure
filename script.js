let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "flex";  
    setTimeout(showSlides, 5000); // Change slide every 3 seconds
}

function changeSlide(n) {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    
    slideIndex += n;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    
    slides[slideIndex].style.display = "flex";
}
