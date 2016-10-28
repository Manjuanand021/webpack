webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* global document */
	"use strict";
	var angular = __webpack_require__(1);
	var appElement = document.querySelector('body');
	angular.bootstrap(appElement, [
	  __webpack_require__(2).name
	], { strictDi: true });


/***/ },

/***/ 2:
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
	
	__webpack_require__(23)(ngModule);
	
	module.exports = ngModule;


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(24);
	function TimeEntryFormDirective() {
	  return {
	    restrict: 'E',
	    scope: {
	      date: '='
	    },
	    template: __webpack_require__(26),
	    bindToController: true,
	    controllerAs: 'vm',
	    /* @ngInject */
	    controller: ["timeLogger", "momentFilter", "$rootScope", function(timeLogger, momentFilter, $rootScope) {
	      var vm = this;
	      function createBlankEntry() {
	        return {
	          date: vm.date.format('YYYY-MM-DD'),
	          time: momentFilter(new Date(), 'H:mm'),
	          category: '',
	          description: ''
	        };
	      }
	      vm.newEntry = createBlankEntry();
	      vm.addTimeEntry = function() {
	        timeLogger.addTimeEntry(vm.newEntry)
	          .then(function(newEntry) {
	            $rootScope.$broadcast('newEntry', newEntry);
	            vm.newEntry = createBlankEntry();
	          });
	      };
	    }]
	  };
	}
	
	module.exports = function(ngModule) {
	  ngModule.directive('timeEntryForm', TimeEntryFormDirective);
	};


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./time-entry-form-style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./time-entry-form-style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".time-entry-form {\n  background: #bada55;\n  padding: 1em;\n}\n\n.time-entry-form__time, .time-entry-form__category, .time-entry-form__description, .time-entry-form__submit {\n  font-size: 1.5em;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 26:
/***/ function(module, exports) {

	module.exports = "<form class=\"time-entry-form\" ng-submit=\"vm.addTimeEntry()\" name=\"addTimeEntry\" novalidate>\n  <input type=\"text\" ng-model=\"vm.newEntry.time\" class=\"time-entry-form__time\" required pattern=\"^(1?[0-9]|2[0-3]):[0-5][0-9]$\" placeholder=\"hh:mm\" maxlength=\"5\">\n  <input type=\"text\" ng-model=\"vm.newEntry.category\" class=\"time-entry-form__category\" placeholder=\"category\">\n  <input type=\"text\" ng-model=\"vm.newEntry.description\" class=\"time-entry-form__description\" required placeholder=\"description\">\n  <button type=\"submit\" class=\"time-entry-form__submit\" ng-disabled=\"addTimeEntry.$invalid\">Add</button>\n</form>\n"

/***/ }

});
//# sourceMappingURL=time-logger.js.map