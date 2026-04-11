navMobileButtonOpen.addEventListener("click", toggleOpen);
navMobileButtonClose.addEventListener("click", toggleClose);
navMobileLinks.forEach(function (link) {
    link.addEventListener("click", toggleClose);
});

navMobileButtonOpen.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        toggleOpen();
    }
});

navMobileButtonClose.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        toggleClose();
    }
});

function toggleOpen() {
    navMobileWrapper.classList.toggle("nav-mobile-wrapper-toggle");
    navMobileContent.classList.toggle("nav-mobile-content-toggle");
    navMobile.classList.toggle("nav-mobile-toggle");
    navMobileLogo.style.display = "none";
    navMobileButtonOpen.style.display = "none";
    navMobileButtonClose.style.display = "block";
    document.body.style.overflow = 'hidden';
};

function toggleClose() {
    navMobileWrapper.classList.toggle("nav-mobile-wrapper-toggle");
    navMobileContent.classList.toggle("nav-mobile-content-toggle");
    navMobile.classList.toggle("nav-mobile-toggle");
    navMobileLogo.style.display = "block";
    navMobileButtonOpen.style.display = "block";
    navMobileButtonClose.style.display = "none";
    document.body.style.overflow = '';
};