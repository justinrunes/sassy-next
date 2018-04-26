module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/justinrunes/Sites/sassy-next/src/components/Header/Header.js";



var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "nav",
    { className: "navbar navbar-expand navbar-dark bg-dark", __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { className: "navbar-brand", href: "#", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        "Sassy Next"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "collapse navbar-collapse", __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/HomeLayout/HomeLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header_Header__ = __webpack_require__("./components/Header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
var _jsxFileName = '/Users/justinrunes/Sites/sassy-next/src/components/HomeLayout/HomeLayout.js';






var HomeLayout = function HomeLayout(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
            className: 'jsx-1586328328',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header_Header__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        }),
        props.children,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '1586328328',
            css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0hvbWVMYXlvdXQvSG9tZUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVb0IiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvSG9tZUxheW91dC9Ib21lTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdXN0aW5ydW5lcy9TaXRlcy9zYXNzeS1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEhvbWVMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICBcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUxheW91dDsiXX0= */\n/*@ sourceURL=src/components/HomeLayout/HomeLayout.js */'
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (HomeLayout);

/***/ }),

/***/ "./components/ThreeBlockHero/ThreeBlockHero.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss__ = __webpack_require__("./components/ThreeBlockHero/ThreeBlockHero.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss__);
var _jsxFileName = "/Users/justinrunes/Sites/sassy-next/src/components/ThreeBlockHero/ThreeBlockHero.js";



var ThreeBlockHero = function ThreeBlockHero() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "section section--grey", __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "container", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "three-block-hero three-block-hero--custom", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "left", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "top", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h1",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 10
                                }
                            },
                            "Lorem ipsum dolor sit."
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "p",
                            { className: "body", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 11
                                }
                            },
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos accusantium assumenda quas eum quia alias, asperiores iste officiis nesciunt cupiditate beatae reprehenderit possimus. Nostrum ipsum eaque officia tempore, distinctio corporis?"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "a",
                            { className: "button button--primary", href: "#", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                }
                            },
                            "Lorem, ipsum dolor"
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "bottom", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "subtitle", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 15
                                }
                            },
                            "Lorem ipsum dolor sit amet."
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "rt", title: "A child with XLH", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "top", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h1",
                            { className: "block__title", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 20
                                }
                            },
                            "Lorem ipsum dolor sit."
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "a",
                            { className: "button button--primary", href: "#", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                }
                            },
                            "Lorem, ipsum dolor"
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "bottom", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "subtitle", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
                                }
                            },
                            "Lorem ipsum dolor sit amet."
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "rb", title: "An adult female with XLH", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "top", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h1",
                            { className: "block__title", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 29
                                }
                            },
                            "Lorem ipsum dolor sit."
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "a",
                            { className: "button button--primary", href: "#", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 30
                                }
                            },
                            "Lorem, ipsum dolor"
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "bottom", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 32
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "subtitle", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 33
                                }
                            },
                            "Lorem ipsum dolor sit amet."
                        )
                    )
                )
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (ThreeBlockHero);

/***/ }),

/***/ "./components/ThreeBlockHero/ThreeBlockHero.scss":
/***/ (function(module, exports) {

throw new Error("Module build failed: \n    @include desktop-up {\n            ^\n      No mixin named desktop-up\n      in /Users/justinrunes/Sites/sassy-next/src/components/ThreeBlockHero/ThreeBlockHero.scss (line 3, column 14)");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_main_scss__ = __webpack_require__("./styles/main.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HomeLayout_HomeLayout__ = __webpack_require__("./components/HomeLayout/HomeLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ThreeBlockHero_ThreeBlockHero__ = __webpack_require__("./components/ThreeBlockHero/ThreeBlockHero.js");
var _jsxFileName = '/Users/justinrunes/Sites/sassy-next/src/pages/index.js';





var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__components_HomeLayout_HomeLayout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Head,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        'Sassy Next'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/_next/static/style.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ThreeBlockHero_ThreeBlockHero__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/main.scss":
/***/ (function(module, exports) {

module.exports = {
	"play-button": "_26ERZYbJykQxcs8MNPHwem",
	"section": "_3nsfd7i5CmsicVUkGRLsQu",
	"block": "_3tlY3gT5AtW77aE_CHuEg_",
	"two-column": "_1-ErUTHHwek0XPQDkapX9",
	"three-column": "etORn1VdKaL2ztmf5GSWP",
	"container": "zxceq92bsJcxP1yp7rNfm",
	"container--small": "blbyBZ6BNFbLrqpMK1xaT",
	"align-start": "_3lt6eXeUcZQJjlTxLZe-s6",
	"align-center": "_30WVhgOPJYjVYGPaSIHfrv",
	"align-end": "_1uBWQX_uTjU7aKEsv9Q64X",
	"justify-start": "_3u6pbOeYv2d7Vq4X1bjsxR",
	"justify-center": "hhN0m8pm21sgUNlOtpCUY",
	"justify-end": "Kx4DuePQVZgPWuguZ9Ljw",
	"border-small": "_3ehEgFA8DXk3e7aK8mt5oX",
	"border-medium": "_3HDs3kATlwPV3oFChUJ76Q",
	"desktop-hide": "zPghnOogORfKy1Z6LU5EU",
	"mobile-hide": "_3nXhYCwjxyONwvIUi81yrG",
	"text-left": "_1ihKUHl9NUoFg-qUDB1q1c",
	"text-center": "_3rRkNDeH-l20YZyoIh6Dzz",
	"text-right": "_2tX0lMFrSrYJ7e9Mu3THl5",
	"color-white": "_1NEizMODkeDuk_8WtvTPym",
	"height-small": "_15a7ZUzb4UjTLKxjBv1oJq",
	"max-width-small": "_2nYDFt6wN5-lp2PT-V98TJ",
	"max-width--medium": "_24EffM8MHAmWevBVXfHBYT",
	"box-shadow": "_2zyU_Kq_lh3kLypEAjQfl",
	"padding--small": "N8MQ260ANKkvw9VPYPAnU",
	"padding--medium": "_1FHCHxUVjizqgnQGvLL-CW",
	"padding--large": "pLYRHtcHZHRAepbEsFIhN",
	"padding-top--small": "_75kp3WtPo1gdLDZA6Y19o",
	"padding-top--medium": "_3fLfr_tEBBC6hPFVAa0tGU",
	"padding-top--large": "_1dysSj30QzmsUuaoq2g5Bd",
	"padding-top--xlarge": "_3Jj7j1gPLuwoTkAysPjlEM",
	"padding-bottom--xsmall": "_3sQlhm1QOzfSGsFgPYx5J0",
	"padding-bottom--small": "_28cJSpb3yhVlFtF0Y3lPjb",
	"padding-bottom--medium": "_1tS4tjtwL1ocbgg58nWWci",
	"padding-bottom--large": "_1a5A9UBPdM86XS2FAjHgN-",
	"padding-bottom--xlarge": "_2c_eM6WJYOLWefyejS-p9V",
	"link": "_2HrhNrHtkafhJnLgL-NFOZ",
	"link--large": "_5N8djWBjxR78OG81VHhX9",
	"link--full": "jR24krdluhOfMOsTg1gaL",
	"link--white": "_24OzJtRChEkhJZGDGMumES",
	"button": "_2RF9294bBZz5-Z2ozXX1bY",
	"button--primary": "DonMg9mgMoQ2T5LVJsQmB",
	"arrow": "H17MvP2i1PkcVL5asTU9h",
	"section--grey": "_148gIwIFSXdb68LruEm7Pq",
	"block--large": "T771T6WkFaJKwax_mVyLu",
	"block--title-graphic": "_1x2A79CTkWuxTVu5rP-drw",
	"latest-news": "_2jBZmjK8KtaaSdvmhlIvgy"
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map