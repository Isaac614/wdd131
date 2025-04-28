const themeSelector = document.querySelector("select");

themeSelector.addEventListener("change", changeTheme);

function changeTheme() {
    const logo = document.getElementById("byui-logo");
    // const body = document.getElementsByTagName("body");
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
        logo.src = "images/byui-logo-dark.png";

    } else if (themeSelector.value === "light") {
        document.body.classList.remove("dark");
        logo.src = "images/byui-logo.webp";
    }
}