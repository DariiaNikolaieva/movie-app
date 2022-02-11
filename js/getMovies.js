// функция получения фильмов, работа с пагинацией, плавный скролл
function getMovies(url) {
  lastUrl = url;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.results.length !== 0) {
        showMovies(data.results);
        currentPage = data.page;
        nextPage = currentPage + 1;
        previousPage = currentPage - 1;
        totalPages = data.total_pages;

        crntPage.innerText = currentPage;

        if (currentPage <= 1) {
          prvsPage.classList.add("disabled");
          nxtPage.classList.remove("disabled");
        } else if (currentPage === totalPages) {
          prvsPage.classList.remove("disabled");
          nxtPage.classList.add("disabled");
        } else {
          prvsPage.classList.remove("disabled");
          nxtPage.classList.remove("disabled");
        }

        if(totalPages === 1) {
          prvsPage.classList.add("disabled");
          nxtPage.classList.add("disabled");
        }

        body.scrollIntoView({ behavior: "smooth" });
      } else {
        moviesContainer.innerHTML = `<li class="no-results"><h2>No results found</h2></li>`;
        pagination.style.display = 'none';
      }
    });
}

// вызов функции получения популярных фильмов при загрузке страницы
getMovies(
  `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
);
