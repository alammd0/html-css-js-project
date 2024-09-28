// acces the toogle btn 

let toggle_btn = document.getElementById("toggle-btn");

toggle_btn.addEventListener("click", function(err){

    err.preventDefault();

    const toggle_menu = document.getElementById("toggle-menu");

    toggle_menu.classList.toggle("active");

})

document.addEventListener("DOMContentLoaded", function() {
    const lazyElements = document.querySelectorAll('.lazy-show');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 200); 
                
                observer.unobserve(entry.target);  
            }
        });
    }, { threshold: 0.1 });

    lazyElements.forEach(el => {
        observer.observe(el);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const lazyElementsLeft = document.querySelectorAll('.lazy-show-left');
    const lazyElementsRight = document.querySelectorAll('.lazy-show-right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    lazyElementsLeft.forEach(el => {
        observer.observe(el);
    });

    lazyElementsRight.forEach(el => {
        observer.observe(el);
    });
});

