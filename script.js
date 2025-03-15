document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });a
    });

    // Theme Toggle
    const body = document.body;
    const toggleTheme = document.createElement("button");
    toggleTheme.textContent = "Toggle Theme";
    toggleTheme.style.position = "fixed";
    toggleTheme.style.top = "10px";
    toggleTheme.style.right = "10px";
    toggleTheme.style.padding = "10px 15px";
    toggleTheme.style.border = "none";
    toggleTheme.style.cursor = "pointer";
    toggleTheme.style.background = "#ff4b2b";
    toggleTheme.style.color = "white";
    toggleTheme.style.borderRadius = "5px";
    document.body.appendChild(toggleTheme);

    toggleTheme.addEventListener("click", () => {
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            body.style.backgroundColor = "#121212";
            body.style.color = "#eee";
        } else {
            body.classList.add("dark");
            body.style.backgroundColor = "#eee";
            body.style.color = "#121212";
        }
    });
});
