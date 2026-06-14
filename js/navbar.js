/* Desktop animation */

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav-dsk");
    const trigger = document.getElementById("nav-appear");

    const triggerTop = trigger.getBoundingClientRect().top;

    if (triggerTop <= 0) {
        navbar.classList.add("init-animation");
        navbar.classList.add("is-sticky");
    } else {
        navbar.classList.remove("is-sticky");
    }
});



/* Mobile animation */

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav-mob");
    const trigger = document.getElementById("nav-appear");

    const triggerTop = trigger.getBoundingClientRect().top;
    console.log("triggerTop:", triggerTop);

    if (triggerTop <= 0) {
        console.log("ADD");
        navbar.classList.add("init-animation");
        navbar.classList.add("is-sticky");
    } else {
        console.log("REMOVE");
        navbar.classList.remove("is-sticky");
    }
});