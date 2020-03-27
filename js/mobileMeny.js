let hamburgerOpen = false;

const hamburgerButton = document.getElementById("hamburger");
hamburgerButton.addEventListener("click", toggleHamburgerMenu);
const NavBarMobile = document.getElementById("NavBarMobile");

function toggleHamburgerMenu() {
    hamburgerOpen = !hamburgerOpen;
    if (hamburgerOpen) {
        NavBarMobile.style.display = "grid";
    } else {
        NavBarMobile.style.display = "none";
    }
}
