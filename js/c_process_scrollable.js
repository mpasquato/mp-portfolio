document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".c_process__content");

    if (!sliders.length) return;

    const mediaQuery = window.matchMedia("(max-width: 575px)");

    sliders.forEach((slider) => {
        let isDown = false;
        let startX;
        let scrollLeft;
        let hasDragged = false;

        slider.addEventListener("mousedown", (e) => {
            if (!mediaQuery.matches) return;

            isDown = true;
            hasDragged = false;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;

            slider.classList.add("is-dragging");
        });

        slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("is-dragging");
        });

        slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("is-dragging");
        });

        slider.addEventListener("mousemove", (e) => {
            if (!isDown || !mediaQuery.matches) return;

            e.preventDefault();

            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5;

            if (Math.abs(x - startX) > 5) {
                hasDragged = true;
            }

            slider.scrollLeft = scrollLeft - walk;
        });

        slider.addEventListener("click", (e) => {
            if (!mediaQuery.matches) return;

            if (hasDragged) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);

        mediaQuery.addEventListener("change", (e) => {
            if (!e.matches) {
                isDown = false;
                hasDragged = false;
                slider.classList.remove("is-dragging");
            }
        });
    });
});