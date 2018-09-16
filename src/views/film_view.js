const createAppend = require('../helpers/create_append.js');

const FilmView = function (container, data) {
  this.container = container;
  this.film = data;
};

FilmView.prototype.render = function () {
  createAppend('h2', null, this.film.title, this.container);
  createAppend('p', null, `Released: ${this.film.release_date}`, this.container);
  createAppend('p', null, `Description: ${this.film.description}`, this.container);
  createAppend('p', null, `Director: ${this.film.director}`, this.container);
  createAppend('p', null, `Producer: ${this.film.producer}`, this.container);
  createAppend('p', null, `Rotten Tomato Score: ${this.film.rt_score}`, this.container);
};

module.exports = FilmView;
