let hamburgerOpen = false;

const hamburgerButton = document.getElementById("hamburger");
hamburgerButton.addEventListener("click", toggleHamburgerMenu);
const NavMobile = document.getElementById("NavMobile");

function toggleHamburgerMenu() {
    hamburgerOpen = !hamburgerOpen;
    if (hamburgerOpen) {
        NavMobile.style.display = "grid";
    } else {
        NavMobile.style.display = "none";
    }
}
