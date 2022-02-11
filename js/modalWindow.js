// функция для создания слушателя для взаимодействия с модальным окном
function createModal() {
    const movieItems = document.querySelectorAll(".movie-item");
    movieItems.forEach(function (el) {
      el.addEventListener("click", showModal);
    });
  }
  
  //  открыть модальное окно
  function showModal(evt) {
    modalContainer.classList.remove("hide");
    backdrop.classList.remove("hide");
    getMovieById(evt.currentTarget.id);
    document.body.style.overflow = "hidden";
  }
  
  // закрыть модальное окно
  function closeModal() {
      modalOverviewContainer.innerHTML = "";
    modalContainer.classList.add("hide");
    backdrop.classList.add("hide");
    document.body.style.overflow = ""; 
  }
  
  // закрыть модальное окно по кнопке "закрыть", по клику на бэкграунд или по Esc
  backdrop.addEventListener("click", closeModal);
  document.querySelector(".modal-close").addEventListener("click", closeModal);
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closeModal();
    }
  });