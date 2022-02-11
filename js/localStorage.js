function getLocalStorageTheme() {
    if (localStorage.getItem("theme") === "light") {
        lightThemeElems.forEach((elem) => elem.classList.add("light-theme"));
        toggleBtn.checked = true;
    } else {
        lightThemeElems.forEach((elem) => elem.classList.remove("light-theme"));
        toggleBtn.checked = false;
    }
  }

window.addEventListener("load", getLocalStorageTheme);