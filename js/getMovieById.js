// функция обращения к конкретному фильму
function getMovieById(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        showMovieById(data);
      });
  }