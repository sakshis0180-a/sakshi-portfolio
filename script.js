// =========================================================
// SAKSHI SINGH PORTFOLIO - ADVANCED JAVASCRIPT
// =========================================================


// =========================================================
// PAGE LOAD
// =========================================================

window.addEventListener("load", function () {

    console.log("Welcome to Sakshi Singh's Portfolio!");

});


// =========================================================
// TYPING EFFECT
// =========================================================

const description = document.querySelector(".hero-description");

if (description) {

    const text = description.textContent.trim();

    description.textContent = "";

    let index = 0;

    function typeText() {

        if (index < text.length) {

            description.textContent += text.charAt(index);

            index++;

            setTimeout(typeText, 28);

        }

    }

    setTimeout(typeText, 700);
}


// =========================================================
// NAVBAR LINKS
// =========================================================

const navLinks = document.querySelectorAll("nav a");


// Click active effect

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// =========================================================
// ACTIVE NAVBAR ON SCROLL
// =========================================================

const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {

    let currentSection = "";

    const scrollPosition = window.scrollY + 180;

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .education-card, .contact-info, section h2, .section-tag"
);

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =========================================================
// PROJECT CARD SELECTION
// =========================================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("click", function (event) {

        // Don't select card when clicking actual links
        if (event.target.closest("a")) {

            return;

        }

        projectCards.forEach(function (item) {

            item.classList.remove("selected");

        });

        this.classList.add("selected");

    });

});


// =========================================================
// SUBTLE MOUSE MOVEMENT ON PROJECT CARDS
// =========================================================

projectCards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2;

        const rotateY = ((x - centerX) / centerX) * 2;

        card.style.transform =
            `translateY(-10px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", function () {

        card.style.transform = "";

    });

});


// =========================================================
// SKILL CARD MOUSE EFFECT
// =========================================================

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);

        card.style.setProperty("--mouse-y", `${y}px`);

    });

});


// =========================================================
// CONTACT BUTTON MESSAGE
// =========================================================

const contactButton = document.querySelector(
    '.hero-buttons a[href="#contact"]'
);

if (contactButton) {

    contactButton.addEventListener("click", function () {

        console.log("Contact section opened.");

    });

}


// =========================================================
// BACK TO TOP
// =========================================================

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 450) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

}


// =========================================================
// SMOOTH PAGE TOP WHEN LOADING
// =========================================================

window.addEventListener("load", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================================
// PREVENT JS ERRORS FROM BROKEN IMAGE
// =========================================================

const profileImage = document.querySelector(".profile-img");

if (profileImage) {

    profileImage.addEventListener("error", function () {

        console.log("Profile image could not be loaded.");

    });

}


// =========================================================
// SMALL SCREEN CHECK
// =========================================================

function handleResponsiveEffects() {

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {

        projectCards.forEach(function (card) {

            card.style.transform = "";

        });

    }

}

window.addEventListener("resize", handleResponsiveEffects);


// =========================================================
// INITIAL NAVBAR STATE
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    updateActiveNav();

});