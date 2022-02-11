// получение нужных элементов страницы
const body = document.querySelector("body");
const moviesContainer = document.querySelector(".movie-list");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const deleteSearchBtn = document.querySelector(".delete-query");
const genreList = document.querySelector(".genre-list");
const backdrop = document.querySelector(".backdrop");
const modalContainer = document.querySelector(".modal-container");
const modalWindow = document.querySelector(".modal");
const modalOverviewContainer = document.querySelector(".modal-overview-container");
const pagination = document.querySelector('.pagination')
const prvsPage = document.querySelector("#prev");
const crntPage = document.querySelector("#current");
const nxtPage = document.querySelector("#next");

// ключевая API информация The Movie Database
const API_KEY = "5d3faae6bdf27d6ad967dd7060912758";
const BASE_URL = "https://api.themoviedb.org/3";
const POSTER_URL = "https://image.tmdb.org/t/p/w500";

// базовые переменные для пагинации
let currentPage = 1;
let nextPage = 2;
let previousPage = 3;
let lastUrl = '';
let totalPages = 100;
