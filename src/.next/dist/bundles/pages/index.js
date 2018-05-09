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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header_Header__ = __webpack_require__("./components/Header/Header.js");
var _jsxFileName = '/Users/justinrunes/Sites/sassy-next/src/components/HomeLayout/HomeLayout.js';





var HomeLayout = function HomeLayout(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
            className: 'jsx-1586328328',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header_Header__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        }),
        props.children,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '1586328328',
            css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0hvbWVMYXlvdXQvSG9tZUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTb0IiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvSG9tZUxheW91dC9Ib21lTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdXN0aW5ydW5lcy9TaXRlcy9zYXNzeS1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlcic7XG5cbmNvbnN0IEhvbWVMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICBcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUxheW91dDsiXX0= */\n/*@ sourceURL=src/components/HomeLayout/HomeLayout.js */'
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
                { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.threeBlockHeroCustom, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.left, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.top, __source: {
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
                            { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.body, __source: {
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
                        { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.bottom, __source: {
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
                    { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.rt, title: "A child with XLH", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.top, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h1",
                            { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.blockTitle, __source: {
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
                        { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.bottom, __source: {
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
                    { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.rb, title: "An adult female with XLH", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.top, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h1",
                            { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.blockTitle, __source: {
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
                        { className: __WEBPACK_IMPORTED_MODULE_1__ThreeBlockHero_scss___default.a.bottom, __source: {
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

module.exports = {
	"play-button": "_2Wi8owS815LF9hM_ttt2hs",
	"threeBlockHeroCustom": "_1m_-dYkXTGcGyMIwC02QGY",
	"container": "_38IJHV4MI0rNmtGJssDeLY",
	"container--small": "_1b5YfafmvzqkfPBynfd3Hw",
	"align-start": "_1wBkJ6QKox6k3EY5z49zkH",
	"align-center": "_1fl4vvBfzWHvR3OvIFVu2o",
	"align-end": "_3jwrQ6RKI9YgIsix7-wtKn",
	"justify-start": "_1QMDOUXcpdqCEUkSTlhrp4",
	"justify-center": "_2muWlyPWJM1qiPtUYllmMP",
	"justify-end": "_2Nu28UsaQGk_P1SB4MsY-M",
	"border-small": "_3Vw-YzQ2EOo-bNCe2ZOPXE",
	"border-medium": "_2ZfO6fAtyP59jZqBcnOBM0",
	"desktop-hide": "WmeiSS9G4noOYAktxn7oz",
	"mobile-hide": "_1z1mFGTq0wJBsD12GrXHjE",
	"text-left": "_3IVeSDOYTmteL_DGpSefqr",
	"text-center": "_2GRWAfh0in3tT5qb2uNmp9",
	"text-right": "_1DcfNvSnfb1X-U43us-NAM",
	"color-white": "IxmKzYdxHVItNzc3jhBfj",
	"height-small": "Gl-J58uMNlJK2jJctY2jm",
	"max-width-small": "_2uJ4F_dGFIc_HpYILinvSq",
	"max-width--medium": "Kdvs-GAnMi6hbZP_bNQnv",
	"box-shadow": "_3lUD98g8sIENb6ugRiVn0k",
	"padding--small": "Lib_mYaGRq9eeZeHndl7c",
	"padding--medium": "_-7OJkUuoFLaszK5yXvp54",
	"padding--large": "KRiFPlbH8cMsGb4YN2qkQ",
	"padding-top--small": "_3-e-Rz06RqEwEUMegaW7sE",
	"padding-top--medium": "_3JPNjA7xGpxyHPigWtb1nt",
	"padding-top--large": "_3ctjuI76QD0LKvhpgbXgWw",
	"padding-top--xlarge": "_1B_oL3lggi8OfC4YYUl0gR",
	"padding-bottom--xsmall": "-dpugMFn8WmCt6CjYRYhw",
	"padding-bottom--small": "wZxna5MG3Ffw5P9tu2pni",
	"padding-bottom--medium": "mt2R5P1N0mmuDhAwD6A44",
	"padding-bottom--large": "_1vAUj8B1wzHOpA8JTCxCWx",
	"padding-bottom--xlarge": "_1JVxEU0GVAcsqVnB8u2GkV",
	"link": "_3x5Plq-hSzlW1IBptHuDuP",
	"link--large": "_3OSnKQY-Kal5KCZzyIISEP",
	"link--full": "YPg3DBIL91pMAAXBw7IVs",
	"link--white": "_2Njq2sAVSTcg_2_XbftKVh",
	"button": "_3DcnI6n5BaVnv7sqNUbL75",
	"button--primary": "_3NMT2fGDswVGGnFElqXwNi",
	"arrow": "_3ddRj8kSDUd82FVXnZmaAg",
	"top": "_31tueJ3-5XFUlM5G-a6fRd",
	"bottom": "_3PyUMHK6jaC1P4fYJFKhBl",
	"body": "_3oSLJqbPOWcxm1vOFhrnQA"
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
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
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
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