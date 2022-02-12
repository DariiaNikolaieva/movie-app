// функция обращения к конкретному фильму
async function getMovieById(id) {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  showMovieById(data);
}
