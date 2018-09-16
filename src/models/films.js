const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Films = function () {
  this.films = [];
  this.titleData = [];
};

Films.prototype.bindEvents = function () {
  const requestHelper = new RequestHelper('https://ghibliapi.herokuapp.com/films');
  requestHelper.get((data) => {
    this.films = data;
    PubSub.publish('Films:all-film-data', this.films);

    const titleList = this.filmNames(this.films);
    PubSub.publish('Films:title-list', titleList);
});
  PubSub.subscribe('SelectView:selected', (evt) => {
    const titleData = this.films.filter(f => f.title === evt.detail);
    PubSub.publish('Films:film-data', titleData);
  });
};

Films.prototype.filmNames = function (data) {
  return data.map(f => f.title)
    .filter((title, index, titles) => titles.indexOf(title) === index);
};

module.exports = Films;
