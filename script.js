const navbar = document.getElementById("navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

function handleScroll(){
    // Change navbar appearance when the page is scrolled past 50px.
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    updateActiveLink();
}

function updateActiveLink(){
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const link = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if(link){
            if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight){
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
}

window.addEventListener("scroll", handleScroll, { passive: true });

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("show-menu");
    });
});

window.addEventListener("load", handleScroll);