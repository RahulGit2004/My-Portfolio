function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hambugur-icon"); // Corrected class name
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themeToggleDesktop = document.getElementById("theme-toggle");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");


// functionality for the dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  
    if (document.body.classList.contains("dark-mode")) {
      themeToggleDesktop.innerText = "Light Mode";  
      themeToggleMobile.innerText = "Light Mode";
    } else {
      themeToggleDesktop.innerText = "Dark Mode";  
      themeToggleMobile.innerText = "Dark Mode";
    }
  }

themeToggleDesktop.addEventListener("click", toggleDarkMode);
themeToggleMobile.addEventListener("click", toggleDarkMode);
