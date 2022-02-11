// встраивание и поиск трейлера в Youtube
function showTrailer(trailer) {
    const trailerBox = document.createElement('div');
    trailerBox.innerHTML = `<iframe id="trailer" type="text/html" width="640" height="360"
    src="http://www.youtube.com/embed/${trailer}?enablejsapi=1&origin=http://example.com"
    frameborder="0"></iframe>`
    modalOverviewContainer.appendChild(trailerBox);
}
