$( document ).ready(function() {
	$('#cardframe').mixItUp();

// Button Group

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pathLength = 68 * 2 + 200;

var BtnGroup = function () {
  function BtnGroup(group) {
    var _this = this;

    _classCallCheck(this, BtnGroup);

    this.group = group;
    this.buttons = Array.prototype.slice.call(this.group.querySelectorAll('.btn'));
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('viewbox', '-1 -1 ' + (160 * this.buttons.length + 2) + ' 42');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.currentPath = 'M -80, 40';
    this.currentIndex = -1;
    this.activateIndex(this.buttons.indexOf(this.group.querySelector('.active')));
    this.group.appendChild(this.svg);
    this.svg.appendChild(this.path);
    this.refreshPath();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var button = _step.value;

        button.addEventListener('click', function (e) {
          return _this.onClick(e);
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  _createClass(BtnGroup, [{
    key: 'onClick',
    value: function onClick(e) {
      var index = this.buttons.indexOf(e.srcElement || e.target);
      this.activateIndex(index);
    }
  }, {
    key: 'refreshPath',
    value: function refreshPath() {
      this.path.setAttributeNS(null, 'd', this.currentPath);
      this.path.style.strokeDashoffset = (-this.path.getTotalLength() + pathLength) * 0.9965;
    }
  }, {
    key: 'center',
    value: function center(index) {
      return index * 160 + 80;
    }
  }, {
    key: 'removeClass',
    value: function removeClass(str) {
      if (this.buttons[this.currentIndex]) {
        this.buttons[this.currentIndex].classList.remove(str);
      }
    }
  }, {
    key: 'addClass',
    value: function addClass(str) {
      if (this.buttons[this.currentIndex]) {
        this.buttons[this.currentIndex].classList.add(str);
      }
    }
  }, {
    key: 'activateIndex',
    value: function activateIndex(index) {
      var lastCenter = this.center(this.currentIndex);
      var nextCenter = this.center(index);
      var offset = index < this.currentIndex ? -50 : 50;
      var curve = index < this.currentIndex ? -30 : 30;
      this.currentPath += '\n      L ' + (lastCenter + offset) + ', 40\n      C ' + (lastCenter + offset + curve) + ', 40\n        ' + (lastCenter + offset + curve) + ',  0\n        ' + (lastCenter + offset) + ',  0\n      L ' + (lastCenter - offset) + ',  0\n      C ' + (lastCenter - offset - curve) + ',  0\n        ' + (lastCenter - offset - curve) + ', 40\n        ' + (lastCenter - offset) + ', 40\n      L ' + (nextCenter + offset) + ', 40\n      C ' + (nextCenter + offset + curve) + ', 40\n        ' + (nextCenter + offset + curve) + ',  0\n        ' + (nextCenter + offset) + ',  0\n      L ' + (nextCenter - offset) + ',  0\n      C ' + (nextCenter - offset - curve) + ',  0\n        ' + (nextCenter - offset - curve) + ', 40\n        ' + (nextCenter - offset) + ', 40\n      L ' + nextCenter + ', 40\n    ';
      this.removeClass('active');
      this.currentIndex = index;
      this.addClass('active');
      this.refreshPath();
    }
  }]);

  return BtnGroup;
}();

;

var groups = Array.prototype.slice.call(document.querySelectorAll('.btn-group'));
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = groups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var group = _step2.value;

    console.log(new BtnGroup(group));
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

});