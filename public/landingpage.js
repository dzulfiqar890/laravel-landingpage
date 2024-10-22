alert('Welcome To My Website');
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.style.display = navbar.style.display === "none" ? "block" : "none";
});