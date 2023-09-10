// Sombra do cabeçalho ao rolar a página
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0 && window.scrollY < window.innerHeight - 60) {
        header.classList.add("header-shadow");
        header.style.position = "sticky";
        document.body.style.marginTop = "0";
    } else if (window.scrollY > window.innerHeight - 60) {
        header.style.position = "fixed";
        document.body.style.marginTop = "60px";
    } else {
        header.classList.remove("header-shadow");
        header.style.position = "sticky";
        document.body.style.marginTop = "0";
    }
});

// Animação para aparecer as sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-section");
        } else {
            entry.target.classList.remove("animate-section");
        }
    });
}, {
    rootMargin: "0px",
    threshold: 0.2
})

sections.forEach(section => observer.observe(section));
