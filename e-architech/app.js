// acces the toogle btn 

let toggle_btn = document.getElementById("toggle-btn");

toggle_btn.addEventListener("click", function(err){

    err.preventDefault();

    const toggle_menu = document.getElementById("toggle-menu");

    toggle_menu.classList.toggle("active");

})