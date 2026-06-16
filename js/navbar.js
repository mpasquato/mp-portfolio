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



/* Mobile Navigation*/

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('sidebar-active');
    const menu = document.querySelector('.nav-mob__menu-expanded');

    document.querySelectorAll('.nav-mob__navigation-container a')
        .forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const href = link.href; // absolute URL

                const onTransitionEnd = (event) => {
                    // Only react to the transition on the menu itself
                    if (event.target !== menu) return;

                    menu.removeEventListener('transitionend', onTransitionEnd);

                    window.location.href = href;
                };

                menu.addEventListener('transitionend', onTransitionEnd);

                // Trigger the menu close animation
                checkbox.checked = false;
            });
        });
});



/* Mobile animation */

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav-mob");
    const trigger = document.getElementById("nav-appear");

    const triggerTop = trigger.getBoundingClientRect().top;
    console.log("triggerTop:", triggerTop);

    if (triggerTop <= 0) {
        navbar.classList.add("init-animation");
        navbar.classList.add("is-sticky");
    } else {
        navbar.classList.remove("is-sticky");
    }
});