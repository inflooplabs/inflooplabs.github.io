/*
        script.js
        inflooplabs.github.io

        Created by Vihaan on 2026-04-11.
*/
document.addEventListener("DOMContentLoaded", () => {
        const mobileMenuButton = document.querySelector(".mobile-menu-button");
        const navLinks = document.querySelector(".nav-links");
        if (mobileMenuButton) {
                mobileMenuButton.addEventListener("click", () => {
                        mobileMenuButton.classList.toggle("active");
                        navLinks.classList.toggle("active");
                        if (navLinks.classList.contains("active")) {
                                document.body.style.overflow = "hidden";
                        }
                        else {
                                document.body.style.overflow = "auto";
                        }
                });
        }
});
