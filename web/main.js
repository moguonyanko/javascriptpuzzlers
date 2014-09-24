(function (win, doc) {
	"use strict";

	var jspzl = {
		appendRunner: function (ele, func, opt_action) {
			ele.addEventListener(opt_action || "click", func, false);
		}
	};

	win.jspzl = jspzl;

}(window, document));
