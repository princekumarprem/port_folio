// 🔥 Active link highlight
let links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// 🔥 Hamburger toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});