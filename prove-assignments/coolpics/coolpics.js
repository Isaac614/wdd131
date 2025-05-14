// Isaac Moore
const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav");
const navElements = document.querySelectorAll("nav a");
window.addEventListener("resize", handleResize);

menuButton.addEventListener("click", function() {
    if (nav.style.display == "none") {
        nav.style.display = "block";
        nav.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr"
        for (let i = 0; i < navElements.length; i++){
            navElements[i].style.display = "block";
            navElements[i].style.textAlign = "center";
        }
    } else {
        nav.style.display = "none";
    }
});

function handleResize() {
    if (window.innerWidth >= 1000)
    {
        nav.style.display = "grid";
        nav.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
        for (let i = 0; i < navElements.length; i++) {
            navElements[i].style.display = "block";
            navElements[i].style.textAlign = "center";
        }
        menuButton.style.display = "none";
    }
    else
    {
        for (let i = 0; i < navElements.length; i++) {
            navElements[i].style.display = "none";
        };
        menuButton.style.display = "block";
    }
}