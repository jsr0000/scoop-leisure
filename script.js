// document.addEventListener('DOMContentLoaded', function () {
//     // Basic navigation toggle for mobile
//     document.querySelector('.nav-toggle').addEventListener('click', function () {
//         document.querySelector('nav').classList.toggle('active');
//     });

//     // Close menu when clicking a link on mobile
//     document.querySelectorAll('nav a').forEach(link => {
//         link.addEventListener('click', function () {
//             document.querySelector('nav').classList.remove('active');
//         });
//     });

//     // Smooth scroll for navigation links and specific buttons with adjusted offset
//     document.querySelectorAll('nav a, .btn').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href');
//             const targetElement = document.querySelector(targetId);

//             // Calculate the offset position with an additional adjustment
//             const headerOffset = document.querySelector('header').offsetHeight;
//             const additionalOffset = 30; // Adjust this value as needed
//             const elementPosition = targetElement.getBoundingClientRect().top;
//             const offsetPosition = elementPosition - headerOffset + additionalOffset;

//             // Scroll to the calculated position
//             window.scrollBy({
//                 top: offsetPosition,
//                 behavior: 'smooth'
//             });
//         });
//     });
// });