// ===== PORTFOLIO JAVASCRIPT =====


// ===== PAGE LOAD =====

window.addEventListener("load", function () {
    console.log("Welcome to Sakshi Singh's Portfolio!");
});


// ===== TYPING EFFECT =====

const description = document.querySelector(".hero-description");

if (description) {

    const text = description.textContent;

    description.textContent = "";

    let index = 0;

    function typeText() {

        if (index < text.length) {
            description.textContent += text.charAt(index);
            index++;

            setTimeout(typeText, 35);
        }
    }

    typeText();
}


// ===== NAVIGATION ACTIVE LINK =====

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ===== PROJECT CARD INTERACTION =====

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("click", function () {

        projectCards.forEach(function (item) {
            item.classList.remove("selected");
        });

        this.classList.add("selected");

    });

});


// ===== CONTACT MESSAGE =====

const contactButton = document.querySelector('a[href="#contact"]');

if (contactButton) {

    contactButton.addEventListener("click", function () {
        console.log("Contact section opened.");
    });

}