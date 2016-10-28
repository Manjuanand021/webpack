webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* global document */
	"use strict";
	var angular = __webpack_require__(1);
	var appElement = document.querySelector('body');
	angular.bootstrap(appElement, [
	  __webpack_require__(27).name
	], { strictDi: true });


/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var moment = __webpack_require__(3);
	var ngModule = angular.module('time-logger', [__webpack_require__(4)]);
	
	ngModule.config(["$routeProvider", function($routeProvider) {
	  $routeProvider.when('/:date', {
	    template: '<time-logger></time-logger>'
	  });
	  $routeProvider.otherwise('/' + moment().format('YYYY-MM-DD'));
	}]);
	
	__webpack_require__(5)(ngModule);
	__webpack_require__(6)(ngModule);
	
	__webpack_require__(9)(ngModule);
	__webpack_require__(15)(ngModule);
	__webpack_require__(19)(ngModule);
	
	__webpack_require__(28)(ngModule);
	
	module.exports = ngModule;


/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(29);
	function TimeEntrySmartDirective() {
	  return {
	    restrict: 'E',
	    scope: {
	      date: '='
	    },
	    template: __webpack_require__(31),
	    bindToController: true,
	    controllerAs: 'vm',
	    /* @ngInject */
	    controller: ["timeLogger", "momentFilter", "$rootScope", function(timeLogger, momentFilter, $rootScope) {
	      var vm = this;
	      vm.entryPattern = /^(((1?[0-9]|2[0-3]):[0-5][0-9])\s+)?(#(.*?)\s+)?(.*?)\s*$/;
	      vm.entryText = '';
	      vm.addTimeEntry = function() {
	        var matches = vm.entryPattern.exec(vm.entryText);
	        var timeEntry = {
	          date: vm.date.format('YYYY-MM-DD'),
	          time: matches[2] || momentFilter(new Date(), 'H:mm'),
	          category: matches[5],
	          description: matches[6]
	        };
	        timeLogger.addTimeEntry(timeEntry)
	          .then(function(newEntry) {
	            $rootScope.$broadcast('newEntry', newEntry);
	            vm.entryText = '';
	          });
	      };
	    }]
	  };
	}
	
	module.exports = function(ngModule) {
	  // NOTE: named the same as the old directive since we're using it in the same place
	  ngModule.directive('timeEntryForm', TimeEntrySmartDirective);
	};


/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./time-entry-smart-style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./time-entry-smart-style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".time-entry-smart {\n  background: #bada55;\n  padding: 1em;\n}\n\n.time-entry-smart__entry {\n  font-size: 1.5em;\n}\n\n.time-entry-smart__entry.ng-valid {\n  border-color: green;\n}\n\n.time-entry-smart .valid:after {\n  content: \"\\1F44D\";\n}\n\n.time-entry-smart__entry.ng-invalid {\n  border-color: red;\n}\n\n.time-entry-smart .invalid:after {\n  content: \"\\1F44E\";\n}\n", ""]);
	
	// exports


/***/ },

/***/ 31:
/***/ function(module, exports) {

	module.exports = "<form class=\"time-entry-smart\" ng-submit=\"addTimeEntry.$valid && vm.addTimeEntry()\" name=\"addTimeEntry\" novalidate>\n  <input type=\"text\" ng-model=\"vm.entryText\" class=\"time-entry-smart__entry\" required ng-pattern=\"vm.entryPattern\"/>\n  <span ng-class=\"{ valid: addTimeEntry.$valid, invalid: addTimeEntry.$invalid }\"></span>\n  <div><em>hh:mm? #category? description</em></div>\n</form>\n"

/***/ }

});
//# sourceMappingURL=time-logger-2.js.map