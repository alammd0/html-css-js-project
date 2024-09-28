const hamburger = document.getElementById('hamburger') ;

const nav_conten = document.getElementById('navconten');

hamburger.addEventListener('click', () => {
    nav_conten.classList.toggle('active');
})