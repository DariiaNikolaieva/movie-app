//  переключатель темы
const lightThemeElems = document.querySelectorAll([
  ".body",
  ".header",
  ".logo-icon",
  ".search-input",
  ".theme-switch-toggle",
  ".genre-item",
  ".page-item",
  ".backdrop",
  ".modal",
]);
const toggleBtn = document.querySelector(".theme-switch-toggle");
const bodyLightTheme = document.querySelector(".body");

function toggleTheme() {
  lightThemeElems.forEach((elem) => elem.classList.toggle("light-theme"));
  document.querySelectorAll('.movie-item').forEach((el) => el.classList.toggle('light-theme'));
  if (bodyLightTheme.classList.contains("light-theme")) {
    // const i = document.querySelectorAll('.movie-item');
    // i.forEach((el) => el.classList.add('light-theme'));
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
    // const i = document.querySelectorAll('.movie-item');
    // i.forEach((el) => el.classList.remove('light-theme'));
  }
}

toggleBtn.addEventListener("click", toggleTheme);
