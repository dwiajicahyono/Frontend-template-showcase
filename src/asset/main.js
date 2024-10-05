

// Responsive
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
});

// // scroll to top
// document.addEventListener("DOMContentLoaded", function () {
//     const scrollToTargets = document.querySelectorAll('.scroll-to-target');
//     const scrollTopButton = document.getElementById('scroll-top-button');
//     const navbar = document.querySelector('nav');

//     scrollToTargets.forEach(function (element) {
//         element.addEventListener('click', function () {
//             const target = document.querySelector(this.getAttribute('data-target'));
//             if (target) {
//                 window.scrollTo({
//                     top: target.offsetTop,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     window.addEventListener('scroll', function () {
//         if (window.scrollY > 100) { // Adjust this value as needed
//             scrollTopButton.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
//             scrollTopButton.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
//         } else {
//             scrollTopButton.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
//             scrollTopButton.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
//         }

//         // Hide button when navbar is visible (adjust the offset value as needed)
//         const navbarRect = navbar.getBoundingClientRect();
//         if (navbarRect.top < window.innerHeight && navbarRect.bottom >= 0) {
//             scrollTopButton.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
//             scrollTopButton.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
//         }
//     });
// });

