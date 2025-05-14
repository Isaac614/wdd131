// Isaac Moore
const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav");
const navElements = document.querySelectorAll("nav a");
window.addEventListener("resize", handleResize);

const modal = document.createElement("dialog");
modal.innerHTML = "<img><button class = 'close-viewer'>X</button>";
modal.style.width = "90%";
modal.style.height = "90%";
modal.style.backgroundColor = "rgba(0, 0, 0, .6)";
modal.style.margin = "auto auto";
const closeButton = modal.querySelector(".close-viewer");
document.body.appendChild(modal);

const gallery = document.getElementById("gallery");

gallery.addEventListener("click", viewLarger);
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
})


function viewLarger(event) {
    const clickedImg = event.target.closest("img");
    const smallImgSrc = new URL(clickedImg.src).pathname;
    const filename = smallImgSrc.substring(smallImgSrc.lastIndexOf("/") + 1);
    const baseName = filename.split('-')[0];
    const largeImgSrc = "images/" + baseName + "-full.jpeg";
    modal.innerHTML = `<img src="${largeImgSrc}" alt="${clickedImg.alt}"><button class="close-viewer">X</button>`;
    const closeButton = modal.querySelector(".close-viewer");
    closeButton.style.position = "absolute";
    closeButton.style.right = "3%";
    closeButton.style.top = "3%";
    modal.showModal();
    closeButton.addEventListener("click", function() {
        modal.close();
    })
}

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
