const RequestHelper = require('./helpers/request_helper.js');
const PubSub = require('./helpers/pub_sub.js');
const Films = require('./models/films.js');
const FilmListView = require('./views/film_list_view.js');
const FilmView = require('./views/film_view.js');
const SelectView = require('./views/film_select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#dropdown');
  const dropdown = new SelectView(selectElement);

  dropdown.bindEvents();

  const section = document.querySelector('.film_list');
  const films = new Films();
  films.bindEvents();

  const filmListView = new FilmListView(section);
  filmListView.bindEvents();
  filmListView.filmSelect();

})
