// функция отрисовки фильмов
function showMovies(movies) {
  moviesContainer.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, id } = movie;
    const movieItem = document.createElement("li");
    movieItem.id = id;
    moviesContainer.appendChild(movieItem);
    movieItem.classList.add("movie-item");
    movieItem.innerHTML = `<img class="movie-poster" src="${poster_path ?
      (POSTER_URL + poster_path) : "https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
    }" alt="${title}">`;
  });
  createModal();
}