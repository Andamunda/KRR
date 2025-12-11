window.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("body-main-dark");
    } else {
        document.body.classList.remove("body-main-dark");
    }
});