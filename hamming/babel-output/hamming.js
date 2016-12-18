"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hamming = (function () {
  function Hamming() {
    _classCallCheck(this, Hamming);
  }

  _createClass(Hamming, [{
    key: "compute",
    value: function compute(strandA, strandB) {
      // if(strandA !== strandB) throw new Error('DNA strands must be of equal length.');
      return countDiff(strandA, strandB);
    }
  }]);

  return Hamming;
})();

exports["default"] = Hamming;

var zip = function zip(array, zipArray) {
  var zippedArray = [];

  for (var i = 0; i < array.length; i++) {
    zippedArray.push([array[i], zipArray[i]]);
  }

  return zippedArray;
};

var countDiff = function countDiff(a, b) {
  var array = zip(a, b);
  var diff = 0;

  for (var i = 0; i < array.length; i++) {
    diff = array[i][0] !== array[i][1] ? diff += 1 : diff;
  }

  return diff;
};

function Error(message) {
  this.message = message;
}
module.exports = exports["default"];