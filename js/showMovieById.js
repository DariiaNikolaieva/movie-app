//  отрисовка фильмов по названию
function showMovieById(movie) {
  const { poster_path, title, vote_average, overview } = movie;
  const movieDescription = document.createElement("div");
  modalOverviewContainer.appendChild(movieDescription);
  movieDescription.classList.add("movie-description");
  movieDescription.innerHTML = `<div class="image-title-container">
  <img class="movie-poster-modal" src="${poster_path ?
    (POSTER_URL + poster_path) : "https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
  }" alt="${title}"> 
  <div class="title-vote-container">
  <p class="movie-title">${title}</p>
  <div class="vote-circle">
  <p class="movie-rating">${vote_average}</p>
  </div>
  </div>
  </div>
  <p class="movie-overview">${overview}</p>
  <a href="https://www.youtube.com/results?search_query=official+trailer+${title}" target="_blank" class="trailer-btn">Find trailer on Youtube</a>`;

  const voteCircle = document.querySelector(".vote-circle");
  getVoteColor(vote_average);

  // функция цвета круга рейтинга
  function getVoteColor(vote) {
    if (vote >= 8) {
      voteCircle.classList.add("green");
    } else if (vote < 8 && vote >= 5) {
      voteCircle.classList.add("orange");
    } else {
      voteCircle.classList.add("red");
    }
  }
}