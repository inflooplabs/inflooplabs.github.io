/*
        script.js
        inflooplabs.github.io

        Created by Vihaan on 2026-04-11.
*/
document.addEventListener("DOMContentLoaded", () => {
        const isDark = document.body.classList.contains("dark");
        const nav = document.querySelector("nav");
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
