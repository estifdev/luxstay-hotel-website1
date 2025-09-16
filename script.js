const menu = document.querySelector(".menu");
const toggle = document.getElementById("Toggle");
const menuLinks = document.querySelectorAll(".menu li a");

// Toggle open/close on click
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});






const Navbar = document.querySelector('.Navbar')
window.addEventListener('scroll' , function () {
    var scroll = window.scrollY;
    if (scroll > 100) {
        Navbar.classList.add('sticky');
    }
    else {
        Navbar.classList.remove("sticky")
    }
})




