const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

let selectedGenres = [];

// отрисовка списка жанров и сортировка по жанрам
function createGenreItems() {
  genreList.innerHTML = "";
  genres.forEach((genre) => {
    const genreItem = document.createElement("li");
    genreItem.classList.add("genre-item");
    genreItem.id = genre.id;
    genreItem.innerText = genre.name;

    genreItem.addEventListener("click", () => {
      if (selectedGenres.length === 0) {
        selectedGenres.push(genre.id);
      } else {
        if (selectedGenres.includes(genre.id)) {
          selectedGenres.forEach((id, index) => {
            if (id === genre.id) {
              selectedGenres.splice(index, 1);
            }
          });
        } else {
          selectedGenres.push(genre.id);
        }
      }
      const genresUrl = encodeURI(selectedGenres.join(","));
      getMovies(
        `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&with_genres=${genresUrl}`
      );
      styleSelectedGenres();
    });
    genreList.appendChild(genreItem);
  });
}

// изменение стилей активных элементов списка жанров
function styleSelectedGenres() {
  const genreItems = document.querySelectorAll('.genre-item');
  genreItems.forEach(item => {
    item.classList.remove('selected-genres');
  })
  clearSelectedGenres();
  if (selectedGenres.length !== 0) {
    selectedGenres.forEach((id) => {
      const styledElements = document.getElementById(id);
      styledElements.classList.add('selected-genres');
    });
  }
}

// создание кнопки сброса фильтра по жанрам
function clearSelectedGenres() {
  const clear = document.querySelector('#clear-btn');
  if (clear) {
    clear.classList.add('selected-genres');
  } else {
    const clearBtn = document.createElement('li');
    clearBtn.classList.add('genre-item', 'clear-btn');
    clearBtn.id = 'clear-btn';
    clearBtn.innerText = 'CLEAR FILTERS';
    clearBtn.addEventListener('click', () => {
      selectedGenres = [];
      createGenreItems();
      getMovies(
        `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
      );
    })
    genreList.appendChild(clearBtn);
  }
}

createGenreItems();
