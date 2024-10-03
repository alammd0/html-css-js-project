document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.getElementById('navBar');
    const toggleIcon = document.getElementById('nav-toggle-icon');

    toggleIcon.addEventListener('click', () => {
        navBar.classList.toggle('active'); // Toggle the active class
    });
});
