// Run on loading and on resize
window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);

// Check viewport width; if necessary, toggle nav bar visibility
function checkWidth() {
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth >= (768)) 
    {
        navDesktop.style.display = "block";
        navMobile.style.display = "none";
    } 
    else
    {
        navDesktop.style.display = "none";
        navMobile.style.display = "block";
    }
}