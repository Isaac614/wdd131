// This was written by chatgpt
const logo = document.getElementById("byui-logo");

logo.addEventListener("click", () => {
  logo.classList.add("spin");
  setTimeout(() => logo.classList.remove("spin"), 1000);
});