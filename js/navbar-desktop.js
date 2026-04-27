window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav-dsk");
    const trigger = document.getElementById("nav-dsk-appear");

    const triggerTop = trigger.getBoundingClientRect().top;

    if (triggerTop <= 0) {
        navbar.classList.add("init-animation");
        navbar.classList.add("is-sticky");
    } else {
        navbar.classList.remove("is-sticky");
    }
});