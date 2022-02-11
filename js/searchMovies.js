// функция поиска фильмов по названию
function searchMovies(evt) {
  evt.preventDefault();
  const query = searchInput.value;
  selectedGenres = [];
  styleSelectedGenres();
  document.querySelector("#clear-btn").remove();
  if (query) {
    console.log(
      getMovies(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    );
  } else {
    getMovies(
      `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
    );
  }
}

// слушатели событий
searchForm.addEventListener("submit", searchMovies);
deleteSearchBtn.style.display = "none";
searchInput.addEventListener("input", (evt) => {
 if (evt.target.value) {
    deleteSearchBtn.style.display = "block";
  }
});
deleteSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  deleteSearchBtn.style.display = "none";
})
