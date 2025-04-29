emailjs.init('Cw2aq8p5R5YuEY_1q'); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID

// Basic navigation toggle for mobile
document.querySelector('.nav-toggle').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
});

// Close menu when clicking a link on mobile
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('nav').classList.remove('active');
    });
});

// Form submission (prevent default for demo)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send("service_tcsvj9d", "template_iqw4r79", formData)
        .then(function (response) {
            alert('Thank you for your message! We will get back to you soon.');
            document.querySelector('form').reset();
        }, function (error) {
            alert('Oops! Something went wrong. Please try again later.');
        });
});

// Smooth scroll for navigation links and specific buttons with adjusted offset
document.querySelectorAll('nav a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Calculate the offset position with an additional adjustment
        const headerOffset = document.querySelector('header').offsetHeight;
        const additionalOffset = 30; // Adjust this value as needed
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset + additionalOffset;

        // Scroll to the calculated position
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});