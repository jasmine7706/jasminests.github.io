// Search Box
let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
};

// Menu (responsive)
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  search.classList.remove("active");
};

// Sticky Navbar
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

/*========== scroll reveal ==========*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 50,
});

ScrollReveal().reveal(
  ".navbar, .home-img img, .header-icon i, .logo img, .about-img, .about-text",
  {
    origin: "top",
  }
);

ScrollReveal().reveal(
  ".home-text a, .products-container, .footer-box, .btn-home, .about-text, .about-img",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(
  ".home-text, .home-text p, .about-img, .about-text, .heading, .doctor-container",
  {
    origin: "left",
  }
);

ScrollReveal().reveal(".about-text, .about-img img,", {
  origin: "right",
});
