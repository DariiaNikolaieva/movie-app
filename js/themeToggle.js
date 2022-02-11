//  переключатель темы
const lightThemeElems = document.querySelectorAll([
  ".body",
  ".header",
  ".logo-icon",
  ".search-input",
  ".theme-switch-toggle",
  ".genre-item",
  ".movie-item",
  ".page-item",
  ".backdrop",
  ".modal",
]);
const toggleBtn = document.querySelector(".theme-switch-toggle");
const bodyLightTheme = document.querySelector(".body");

function toggleTheme() {
  lightThemeElems.forEach((elem) => elem.classList.toggle("light-theme"));
  if (bodyLightTheme.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

toggleBtn.addEventListener("click", toggleTheme);
