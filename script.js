const menu = document.querySelector(".menu");
const toggle = document.getElementById("Toggle");
const menuLinks = document.querySelectorAll(".menu a"); // all <a> inside menu

// Toggle button open/close
toggle.addEventListener("click", function () {
  menu.classList.toggle("Show_Menu");
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener("click", function () {
    menu.classList.remove("Show_Menu");
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