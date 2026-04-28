// 🔥 Active link highlight
let links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    if (window.location.pathname.includes(link.getAttribute("href"))) {
        link.classList.add("active");
    }
});

// 🔥 Hamburger toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// 🔥 AUTO CLOSE MENU (👉 yahi add karna tha)
links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});