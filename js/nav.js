const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#header-navigation");

function setNavigationOpen(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    navigation.classList.toggle("is-open", isOpen);
}

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setNavigationOpen(!isOpen);
});