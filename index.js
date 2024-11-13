// JavaScript for basic interactivity
document.addEventListener('DOMContentLoaded', function () {
    const subscribeForm = document.querySelector('.subscribe-form');
    subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        this.reset();
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

/* loading animations */
window.addEventListener('load', function () {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500); // Adjust the delay as needed
});

// Show loading screen on page refresh
window.addEventListener('beforeunload', function () {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.classList.remove('hidden');
});