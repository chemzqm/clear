var classes = require('classes');
var cssAnimEventTypes = require('css-animation-event-types');

module.exports = function (el, fn) {
  classes(el).add('fade-out-left');
  var cb = function () {
    el.parentNode.removeChild(el);
    if (fn) fn();
  }
  if (cssAnimEventTypes.start) {
    el.addEventListener(cssAnimEventTypes.end, cb, false);
  } else {
    setTimeout(cb, 2000);
  }
}
