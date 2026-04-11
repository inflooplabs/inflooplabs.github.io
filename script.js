document.addEventListener("DOMContentLoaded", () => {
        const nav = document.querySelector("nav");
        const isDark = document.body.classList.contains("dark");
        window.addEventListener("scroll", () => {
                if (window.scrollY > 50) {
                        if (isDark) {
                                nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                        }
                        else {
                                nav.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                        }
                }
                else {
                        if (isDark) {
                                nav.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                        }
                        else {
                                nav.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                        }
                }
        });
});
