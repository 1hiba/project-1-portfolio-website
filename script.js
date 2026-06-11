const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/* Cursor hover states */

const hoverItems = document.querySelectorAll(
    "a, button, .project-image, .skills span, .logo"
);

hoverItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
    });

    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((el) => {
    revealObserver.observe(el);
});

/* =========================
   BACKGROUND WORD CHANGE
   (DESIGN → BUILD → LEAD)
========================= */

const bgWord = document.getElementById("bgWord");

const words = ["DESIGN", "BUILD", "LEAD"];

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const progress = scrollY / maxScroll;

    if (progress < 0.33) {
        bgWord.textContent = words[0];
    } else if (progress < 0.66) {
        bgWord.textContent = words[1];
    } else {
        bgWord.textContent = words[2];
    }
});

/* =========================
   HERO PARALLAX IMAGE
========================= */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {
    const y = window.scrollY;

    heroImage.style.transform =
        `translateY(${y * 0.05}px) rotate(-2deg)`;
});

/* =========================
   PROJECT IMAGE PARALLAX
========================= */

const projectImages = document.querySelectorAll(".project-image img");

window.addEventListener("scroll", () => {
    projectImages.forEach((img) => {
        const rect = img.getBoundingClientRect();

        const offset = rect.top * 0.03;

        img.style.transform =
            `translateY(${offset}px) scale(1.02)`;
    });
});

/* =========================
   MARQUEE SPEED CONTROL
   (slight dynamic movement feel)
========================= */

const marquee = document.querySelector(".marquee-content");

window.addEventListener("scroll", () => {
    let speed = 18 - (window.scrollY * 0.01);

    if (speed < 10) speed = 10;

    marquee.style.animationDuration = `${speed}s`;
});

/* =========================
   CONTACT FORM
========================= */

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const button = form.querySelector("button");

    button.textContent = "Message Sent ✓";
    button.style.background = "#00C853";

    setTimeout(() => {
        button.textContent = "Send Message";
        button.style.background = "#00E676";
        form.reset();
    }, 2000);
});

/* =========================
   NAV ACTIVE STATE
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const top = section.offsetTop - 200;
        const height = section.offsetHeight;

        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

/* =========================
   EASTER EGG (LOGO CLICK)
========================= */

const logo = document.querySelector(".logo");

let clicks = 0;

logo.addEventListener("click", () => {
    clicks++;

    if (clicks === 5) {
        bgWord.textContent = "INSPIRE";

        setTimeout(() => {
            bgWord.textContent = "DESIGN";
        }, 2000);

        clicks = 0;
    }
});