// Toggle- DarkMode
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }
  document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", toggleMode);
});
