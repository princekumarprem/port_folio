/* CLOCK */

setInterval(() => {

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6;
    const hourDeg = hours * 30;

    document.querySelector(".second").style.transform =
        `translate(-50%, -100%) rotate(${secondDeg}deg)`;

    document.querySelector(".minute").style.transform =
        `translate(-50%, -100%) rotate(${minuteDeg}deg)`;

    document.querySelector(".hour").style.transform =
        `translate(-50%, -100%) rotate(${hourDeg}deg)`;

}, 1000);



/* TYPING EFFECT */

const text = ["Java Developer", "Web Developer", "Android Developer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

    }

    setTimeout(type, 200);

}

type();



/* NAVBAR ACTIVE UNDERLINE */

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", function () {

        navItems.forEach(link => link.classList.remove("active"));

        this.classList.add("active");

    });

});