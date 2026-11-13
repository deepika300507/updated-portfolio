// Navbar active link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollPosition >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    // Highlight contact when scrolled to the very bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = "contact";
    }

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
