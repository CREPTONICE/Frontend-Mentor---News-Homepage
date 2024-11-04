const OpenMenu = document.getElementById("menu");
const TheMenu = document.querySelector(".nav_links_side");
const closemenu = document.getElementById("menu-close");

function openMenu() {
  TheMenu.style.display = "flex";
  OpenMenu.classList.add("rotate");
  TheMenu.classList.add("trol");
  setTimeout(() => {
    OpenMenu.classList.remove("rotate");
  }, 300);
}

function closeMenu() {
  // Remove the opening animation class
  TheMenu.classList.remove("trol");

  // Add the closing animation class
  TheMenu.classList.add("trolled");

  // Wait for the animation to complete before hiding the element
  setTimeout(() => {
    TheMenu.style.display = "none";
  }, 1100); // 1200ms matches the duration of the 'trolled' animation
}
