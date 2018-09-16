const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:title-list', (evt) => {
    const titleList = evt.detail;
    this.populate(titleList);
  });

  this.container.addEventListener("change", (evt) => {
    const selected = evt.target.value;
    PubSub.publish('SelectView:selected', selected);
  });
};


SelectView.prototype.populate = function (titleList) {
  titleList.forEach( (title, index) => {
    const option = document.createElement("option");
    option.textContent = title;
    option.value = title;
    this.container.appendChild(option);
  });

};

module.exports = SelectView;
