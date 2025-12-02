const hero = document.querySelector(".hero");
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        const text = link.textContent.trim().toLowerCase();

        hero.className = "hero";
        hero.classList.add(`hero-${text}`);
    });

    link.addEventListener("mouseleave", () => {
        hero.className = "hero";
    });
});
