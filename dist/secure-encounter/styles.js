(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\");\n/**\n * Global Reset of all HTML Elements\n *\n * Resetting all of our HTML Elements ensures a smoother\n * visual transition between browsers. If you don't believe me,\n * try temporarily commenting out this block of code, then go\n * and look at Mozilla versus Safari, both good browsers with\n * a good implementation of CSS. The thing is, all browser CSS\n * defaults are different and at the end of the day if visual\n * consistency is what we're shooting for, then we need to\n * make sure we're resetting all spacing elements.\n *\n */\nhtml, body {\n  border: 0;\n  font-family: 'Open Sans', sans-serif;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n  height: 100%; }\ndiv, span, object, iframe, img, table, caption, thead, tbody,\ntfoot, tr, tr, td, article, aside, canvas, details, figure, hgroup, menu,\nnav, footer, header, section, summary, mark, audio, video {\n  border: 0;\n  margin: 0;\n  padding: 0; }\nh1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, address, cit, code,\ndel, dfn, em, ins, q, samp, small, strong, sub, sup, b, i, hr, dl, dt, dd,\nol, ul, li, fieldset, legend, label {\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  margin: 0;\n  padding: 0; }\narticle, aside, canvas, figure, figure img, figcaption, hgroup,\nfooter, header, nav, section, audio, video {\n  display: block; }\ntable {\n  border-collapse: separate;\n  border-spacing: 0; }\ntable caption, table th, table td {\n    text-align: left;\n    vertical-align: middle; }\na img {\n  border: 0; }\n:focus {\n  outline: 0; }\napp-root {\n  height: 100%; }\napp-header {\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9FOlxcV0VCXFxUZXN0X3Rhc2tzXFxzZWN1cmUtZW5jb3VudGVyL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQVk7QUFFWjs7Ozs7Ozs7Ozs7O0VDV0U7QURFRDtFQUNDLFNBQVM7RUFDVCxvQ0FBb0M7RUFDckMsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDUixVQUFVO0VBQ1YsWUFBWSxFQUFBO0FBR2Q7OztFQUdFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVSxFQUFBO0FBR1o7OztFQUdFLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7QUFHWjs7RUFFQyxjQUFjLEVBQUE7QUFHZjtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTtBQUZuQjtJQUlJLGdCQUFnQjtJQUNoQixzQkFBc0IsRUFBQTtBQUkxQjtFQUNFLFNBQVMsRUFBQTtBQUdYO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcblxuLyoqXG4gKiBHbG9iYWwgUmVzZXQgb2YgYWxsIEhUTUwgRWxlbWVudHNcbiAqXG4gKiBSZXNldHRpbmcgYWxsIG9mIG91ciBIVE1MIEVsZW1lbnRzIGVuc3VyZXMgYSBzbW9vdGhlclxuICogdmlzdWFsIHRyYW5zaXRpb24gYmV0d2VlbiBicm93c2Vycy4gSWYgeW91IGRvbid0IGJlbGlldmUgbWUsXG4gKiB0cnkgdGVtcG9yYXJpbHkgY29tbWVudGluZyBvdXQgdGhpcyBibG9jayBvZiBjb2RlLCB0aGVuIGdvXG4gKiBhbmQgbG9vayBhdCBNb3ppbGxhIHZlcnN1cyBTYWZhcmksIGJvdGggZ29vZCBicm93c2VycyB3aXRoXG4gKiBhIGdvb2QgaW1wbGVtZW50YXRpb24gb2YgQ1NTLiBUaGUgdGhpbmcgaXMsIGFsbCBicm93c2VyIENTU1xuICogZGVmYXVsdHMgYXJlIGRpZmZlcmVudCBhbmQgYXQgdGhlIGVuZCBvZiB0aGUgZGF5IGlmIHZpc3VhbFxuICogY29uc2lzdGVuY3kgaXMgd2hhdCB3ZSdyZSBzaG9vdGluZyBmb3IsIHRoZW4gd2UgbmVlZCB0b1xuICogbWFrZSBzdXJlIHdlJ3JlIHJlc2V0dGluZyBhbGwgc3BhY2luZyBlbGVtZW50cy5cbiAqXG4gKi9cbiBodG1sLCBib2R5IHtcbiAgYm9yZGVyOiAwO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG5cdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5kaXYsIHNwYW4sIG9iamVjdCwgaWZyYW1lLCBpbWcsIHRhYmxlLCBjYXB0aW9uLCB0aGVhZCwgdGJvZHksXG50Zm9vdCwgdHIsIHRyLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZmlndXJlLCBoZ3JvdXAsIG1lbnUsXG5uYXYsIGZvb3RlciwgaGVhZGVyLCBzZWN0aW9uLCBzdW1tYXJ5LCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhZGRyZXNzLCBjaXQsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGlucywgcSwgc2FtcCwgc21hbGwsIHN0cm9uZywgc3ViLCBzdXAsIGIsIGksIGhyLCBkbCwgZHQsIGRkLFxub2wsIHVsLCBsaSwgZmllbGRzZXQsIGxlZ2VuZCwgbGFiZWwge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGZpZ3VyZSwgZmlndXJlIGltZywgZmlnY2FwdGlvbiwgaGdyb3VwLFxuZm9vdGVyLCBoZWFkZXIsIG5hdiwgc2VjdGlvbiwgYXVkaW8sIHZpZGVvIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGNhcHRpb24sIHRoLCB0ZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5cbmEgaW1nIHtcbiAgYm9yZGVyOiAwO1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG5hcHAtcm9vdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYXBwLWhlYWRlciB7XG4gIHotaW5kZXg6IDE7XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuLyoqXG4gKiBHbG9iYWwgUmVzZXQgb2YgYWxsIEhUTUwgRWxlbWVudHNcbiAqXG4gKiBSZXNldHRpbmcgYWxsIG9mIG91ciBIVE1MIEVsZW1lbnRzIGVuc3VyZXMgYSBzbW9vdGhlclxuICogdmlzdWFsIHRyYW5zaXRpb24gYmV0d2VlbiBicm93c2Vycy4gSWYgeW91IGRvbid0IGJlbGlldmUgbWUsXG4gKiB0cnkgdGVtcG9yYXJpbHkgY29tbWVudGluZyBvdXQgdGhpcyBibG9jayBvZiBjb2RlLCB0aGVuIGdvXG4gKiBhbmQgbG9vayBhdCBNb3ppbGxhIHZlcnN1cyBTYWZhcmksIGJvdGggZ29vZCBicm93c2VycyB3aXRoXG4gKiBhIGdvb2QgaW1wbGVtZW50YXRpb24gb2YgQ1NTLiBUaGUgdGhpbmcgaXMsIGFsbCBicm93c2VyIENTU1xuICogZGVmYXVsdHMgYXJlIGRpZmZlcmVudCBhbmQgYXQgdGhlIGVuZCBvZiB0aGUgZGF5IGlmIHZpc3VhbFxuICogY29uc2lzdGVuY3kgaXMgd2hhdCB3ZSdyZSBzaG9vdGluZyBmb3IsIHRoZW4gd2UgbmVlZCB0b1xuICogbWFrZSBzdXJlIHdlJ3JlIHJlc2V0dGluZyBhbGwgc3BhY2luZyBlbGVtZW50cy5cbiAqXG4gKi9cbmh0bWwsIGJvZHkge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuZGl2LCBzcGFuLCBvYmplY3QsIGlmcmFtZSwgaW1nLCB0YWJsZSwgY2FwdGlvbiwgdGhlYWQsIHRib2R5LFxudGZvb3QsIHRyLCB0ciwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGZpZ3VyZSwgaGdyb3VwLCBtZW51LFxubmF2LCBmb290ZXIsIGhlYWRlciwgc2VjdGlvbiwgc3VtbWFyeSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhZGRyZXNzLCBjaXQsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGlucywgcSwgc2FtcCwgc21hbGwsIHN0cm9uZywgc3ViLCBzdXAsIGIsIGksIGhyLCBkbCwgZHQsIGRkLFxub2wsIHVsLCBsaSwgZmllbGRzZXQsIGxlZ2VuZCwgbGFiZWwge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZmlndXJlLCBmaWd1cmUgaW1nLCBmaWdjYXB0aW9uLCBoZ3JvdXAsXG5mb290ZXIsIGhlYWRlciwgbmF2LCBzZWN0aW9uLCBhdWRpbywgdmlkZW8ge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XG4gIHRhYmxlIGNhcHRpb24sIHRhYmxlIHRoLCB0YWJsZSB0ZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbmEgaW1nIHtcbiAgYm9yZGVyOiAwOyB9XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7IH1cblxuYXBwLXJvb3Qge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuYXBwLWhlYWRlciB7XG4gIHotaW5kZXg6IDE7IH1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\WEB\Test_tasks\secure-encounter\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map