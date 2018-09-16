const PubSub = require('../helpers/pub_sub.js');
const FilmView = require('./film_view.js');

const FilmListView = function (container) {
  this.container = container;
}

FilmListView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:all-film-data', (evt) => {
    this.render(evt.detail);
  });
};

FilmListView.prototype.filmSelect = function () {
  PubSub.subscribe('Films:film-data', (evt) => {
    this.render(evt.detail);
  });
};

FilmListView.prototype.render = function (data) {
  this.container.innerHTML = '';
  data.forEach((m) => {
    const filmView = new FilmView(this.container, m);
    filmView.render();
  });
};
module.exports = FilmListView;
