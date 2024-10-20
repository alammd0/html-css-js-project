document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.getElementById('navBar');
    const toggleIcon = document.getElementById('nav-toggle-icon');

    toggleIcon.addEventListener('click', () => {
        navBar.classList.toggle('active'); // Toggle the active class
    });
});


function selectAndchange(element, contentId) {
    // remove all active classes
    document.querySelectorAll('.tech-item').forEach(item => {
        item.classList.remove('active');
    })

    // then add the new class on selected element 
    element.classList.add('active');

    // remove all active classes from content_item
    document.querySelectorAll('.tech_content_item').forEach(item => {
        item.classList.remove('active');
    })

    // add the new class on selected element
    document.getElementById(contentId).classList.add('active');
}


let btns = document.querySelectorAll(".accordion-title");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const btnSibling = btn.nextElementSibling;

        // First, close all open sections
        btns.forEach((otherBtn) => {
            if (otherBtn !== btn) {
                otherBtn.classList.remove('active');
                otherBtn.nextElementSibling.style.display = 'none';
            }
        });

        btn.classList.toggle('active');

        if (btn.classList.contains('active')) {
            btnSibling.style.display = 'block';
        } else {
            btnSibling.style.display = 'none';
        }

        btn.classList.remove('active');

    })
})