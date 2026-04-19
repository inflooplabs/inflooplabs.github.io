/*
    script.js
    inflooplabs.github.io

    Created by Vihaan on 2026-04-11.
*/

document.addEventListener("DOMContentLoaded", () => {
        const isDark = document.body.classList.contains("dark");
        const nav = document.querySelector("nav");
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
