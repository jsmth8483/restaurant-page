/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TapCard": () => (/* reexport safe */ _tapCard__WEBPACK_IMPORTED_MODULE_0__.TapCard),
/* harmony export */   "nav": () => (/* reexport safe */ _nav__WEBPACK_IMPORTED_MODULE_1__.nav)
/* harmony export */ });
/* harmony import */ var _tapCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tapCard */ "./src/components/tapCard.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/components/nav.js");



/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });

class Nav {
    loadNav() {
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');

        const homeLi = document.createElement('li'); 
        const homeLink = document.createElement('a')
        homeLink.textContent = 'Home';
        homeLink.href = '#'
        homeLi.appendChild(homeLink);
        ul.appendChild(homeLi)

        const tapListLi = document.createElement('li'); 
        const tapListLink = document.createElement('a');
        tapListLink.textContent = 'Tap List';
        tapListLink.href = '#'
        tapListLi.appendChild(tapListLink);
        ul.appendChild(tapListLi);
        
        const scheduleLi = document.createElement('li'); 
        const scheduleLink = document.createElement('a');
        scheduleLink.textContent = 'Schedule a Tour';
        scheduleLink.href = '#'
        scheduleLi.appendChild(scheduleLink);
        ul.appendChild(scheduleLi);

        nav.appendChild(ul);
        return nav;
    }
}

let nav = new Nav();


{/* <nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tap List</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Schedule A Tour</a></li>
    </ul>
</nav> */}

/***/ }),

/***/ "./src/components/tapCard.js":
/*!***********************************!*\
  !*** ./src/components/tapCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TapCard": () => (/* binding */ TapCard)
/* harmony export */ });
/* harmony import */ var _beer_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../beer.png */ "./src/beer.png");


class TapCard {
    constructor(name, brewer, abv, origin, description) {
        this.name = name;
        this.brewer = brewer;
        this.abv = abv;
        this.origin = origin;
        this.description = description;
    }

    createTapCard() {
        const card = document.createElement('div');
        card.classList.add('tap-card');
        const image = new Image();
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('tap-card-details');

        // Create element for image
        image.src = _beer_png__WEBPACK_IMPORTED_MODULE_0__;
        card.appendChild(image);

        // Create element for tap name header
        const nameHeader = document.createElement('h4');
        nameHeader.textContent = this.name;
        detailsDiv.appendChild(nameHeader);

        // Create elements for tapInfo
        const tapInfo = document.createElement('div');
        const abvSpan = document.createElement('span');
        const brewerSpan = document.createElement('span');
        const originSpan = document.createElement('span');
        abvSpan.textContent = `${this.abv}% ABV`;
        brewerSpan.textContent = this.brewer;
        originSpan.textContent = this.origin;
        tapInfo.appendChild(abvSpan);
        tapInfo.appendChild(brewerSpan);
        tapInfo.appendChild(originSpan);
        detailsDiv.appendChild(tapInfo);

        //Create element for description
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = this.description;
        detailsDiv.appendChild(descriptionParagraph);

        card.appendChild(detailsDiv);

        return card;
    }
}




/***/ }),

/***/ "./src/layouts/homeBannerContainer.js":
/*!********************************************!*\
  !*** ./src/layouts/homeBannerContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeBannerContainer": () => (/* binding */ homeBannerContainer)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ "./src/components/index.js");

class HomeBannerContainer {

    loadHomeBannerContainer() {
        const bannerContainer = document.createElement('div');
        bannerContainer.classList.add('banner-container');
        const header = document.createElement('header');
        header.appendChild(_components__WEBPACK_IMPORTED_MODULE_0__.nav.loadNav());
        bannerContainer.appendChild(header);

        const banner = document.createElement('div');
        banner.classList.add('banner');
        const bannerText = document.createElement('div');
        bannerText.classList.add('banner-text');
        const bannerH1 = document.createElement('h1');
        bannerH1.classList.add('banner-heading');
        bannerH1.textContent = 'Battleground Brewing';
        const bannerH2 = document.createElement('h2');
        bannerH2.classList.add('banner-tagline');
        bannerH2.textContent = 'Beer worth fighting for.';
        const bannerBtn = document.createElement('button');
        bannerBtn.textContent = 'View Tap List';

        bannerText.appendChild(bannerH1);
        bannerText.appendChild(bannerH2);
        bannerText.appendChild(bannerBtn);

        banner.appendChild(bannerText);
        bannerContainer.appendChild(banner);
        
        return bannerContainer;
    }
}

let homeBannerContainer = new HomeBannerContainer();

{/* <div class="banner-container">
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Tap List</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Schedule A Tour</a></li>
            </ul>
        </nav>
    </header>
    <div class="banner">
        <div class="banner-text">
            <h1 class="banner-heading">Battleground Brewing</h1>
            <h2 class="banner-tagline">Beer worth fighting for.</h2>
            <button>View Tap List</button>
        </div>
    </div>
</div> */}

/***/ }),

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeBannerContainer": () => (/* reexport safe */ _homeBannerContainer__WEBPACK_IMPORTED_MODULE_0__.homeBannerContainer),
/* harmony export */   "tapList": () => (/* reexport safe */ _tapList__WEBPACK_IMPORTED_MODULE_1__.tapList)
/* harmony export */ });
/* harmony import */ var _homeBannerContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeBannerContainer */ "./src/layouts/homeBannerContainer.js");
/* harmony import */ var _tapList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tapList */ "./src/layouts/tapList.js");



/***/ }),

/***/ "./src/layouts/tapList.js":
/*!********************************!*\
  !*** ./src/layouts/tapList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tapList": () => (/* binding */ tapList)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ "./src/components/index.js");


const taps = [
    {
        name: 'Manny\'s Pale Ale', 
        brewer: 'Georgetown Brewery', 
        abv: '5', 
        origin: 'Seattle, WA', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        name: 'Manny\'s Pale Ale', 
        brewer: 'Georgetown Brewery', 
        abv: '5', 
        origin: 'Seattle, WA', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        name: 'Manny\'s Pale Ale', 
        brewer: 'Georgetown Brewery', 
        abv: '5', 
        origin: 'Seattle, WA', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
]

class TapList {
    createTapList() {
        const tapList = document.createElement('div');
        const tapListHeading = document.createElement('h3');
        tapListHeading.textContent = 'Tap List';
        
        const tapListContainer = document.createElement('div');
        tapListContainer.classList.add('taplist-container');
        taps.forEach((item) => {
            let tapCard = new _components__WEBPACK_IMPORTED_MODULE_0__.TapCard(item.name, item.brewer, item.abv, item.origin, item.description);
            tapListContainer.appendChild(tapCard.createTapCard());
        })   

        tapList.appendChild(tapListHeading);
        tapList.appendChild(tapListContainer);
        return tapList;
    }
}


let tapList = new TapList();

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts */ "./src/layouts/index.js");



function loadHomePage() {
    const content = document.querySelector('#content')
    content.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_0__.homeBannerContainer.loadHomeBannerContainer());
    const main = document.createElement('main');
    main.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_0__.tapList.createTapList())
    content.appendChild(main);
}

 


/***/ }),

/***/ "./src/beer.png":
/*!**********************!*\
  !*** ./src/beer.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eff00f555016b650eb99.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");


(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0NwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87OztBQUdQLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUNpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isc0NBQU07QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7O0FDbkRpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvREFBVztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RENEQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcEI7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFPO0FBQ3JDO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTzs7Ozs7Ozs7Ozs7Ozs7O0FDOUM4QjtBQUNZOztBQUVqRDtBQUNBO0FBQ0Esd0JBQXdCLGlGQUEyQztBQUNuRTtBQUNBLHFCQUFxQiwyREFBcUI7QUFDMUM7QUFDQTs7QUFJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZjRDOztBQUU1Qyx5REFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL3RhcENhcmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xheW91dHMvaG9tZUJhbm5lckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy90YXBMaXN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgVGFwQ2FyZCB9IGZyb20gJy4vdGFwQ2FyZCc7XG5leHBvcnQgeyBuYXYgfSBmcm9tICcuL25hdic7IiwiXG5jbGFzcyBOYXYge1xuICAgIGxvYWROYXYoKSB7XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgICAgY29uc3QgaG9tZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgXG4gICAgICAgIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICBob21lTGluay5ocmVmID0gJyMnXG4gICAgICAgIGhvbWVMaS5hcHBlbmRDaGlsZChob21lTGluayk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGhvbWVMaSlcblxuICAgICAgICBjb25zdCB0YXBMaXN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyBcbiAgICAgICAgY29uc3QgdGFwTGlzdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHRhcExpc3RMaW5rLnRleHRDb250ZW50ID0gJ1RhcCBMaXN0JztcbiAgICAgICAgdGFwTGlzdExpbmsuaHJlZiA9ICcjJ1xuICAgICAgICB0YXBMaXN0TGkuYXBwZW5kQ2hpbGQodGFwTGlzdExpbmspO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZCh0YXBMaXN0TGkpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IFxuICAgICAgICBjb25zdCBzY2hlZHVsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHNjaGVkdWxlTGluay50ZXh0Q29udGVudCA9ICdTY2hlZHVsZSBhIFRvdXInO1xuICAgICAgICBzY2hlZHVsZUxpbmsuaHJlZiA9ICcjJ1xuICAgICAgICBzY2hlZHVsZUxpLmFwcGVuZENoaWxkKHNjaGVkdWxlTGluayk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKHNjaGVkdWxlTGkpO1xuXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIHJldHVybiBuYXY7XG4gICAgfVxufVxuXG5leHBvcnQgbGV0IG5hdiA9IG5ldyBOYXYoKTtcblxuXG57LyogPG5hdj5cbiAgICA8dWw+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+VGFwIExpc3Q8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWJvdXQgVXM8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2NoZWR1bGUgQSBUb3VyPC9hPjwvbGk+XG4gICAgPC91bD5cbjwvbmF2PiAqL30iLCJpbXBvcnQgdGFwSW1nIGZyb20gJy4uL2JlZXIucG5nJztcblxuY2xhc3MgVGFwQ2FyZCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgYnJld2VyLCBhYnYsIG9yaWdpbiwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5icmV3ZXIgPSBicmV3ZXI7XG4gICAgICAgIHRoaXMuYWJ2ID0gYWJ2O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhcENhcmQoKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd0YXAtY2FyZCcpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgndGFwLWNhcmQtZGV0YWlscycpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50IGZvciBpbWFnZVxuICAgICAgICBpbWFnZS5zcmMgPSB0YXBJbWc7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50IGZvciB0YXAgbmFtZSBoZWFkZXJcbiAgICAgICAgY29uc3QgbmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIG5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQobmFtZUhlYWRlcik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRzIGZvciB0YXBJbmZvXG4gICAgICAgIGNvbnN0IHRhcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWJ2U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgYnJld2VyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgYWJ2U3Bhbi50ZXh0Q29udGVudCA9IGAke3RoaXMuYWJ2fSUgQUJWYDtcbiAgICAgICAgYnJld2VyU3Bhbi50ZXh0Q29udGVudCA9IHRoaXMuYnJld2VyO1xuICAgICAgICBvcmlnaW5TcGFuLnRleHRDb250ZW50ID0gdGhpcy5vcmlnaW47XG4gICAgICAgIHRhcEluZm8uYXBwZW5kQ2hpbGQoYWJ2U3Bhbik7XG4gICAgICAgIHRhcEluZm8uYXBwZW5kQ2hpbGQoYnJld2VyU3Bhbik7XG4gICAgICAgIHRhcEluZm8uYXBwZW5kQ2hpbGQob3JpZ2luU3Bhbik7XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQodGFwSW5mbyk7XG5cbiAgICAgICAgLy9DcmVhdGUgZWxlbWVudCBmb3IgZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmFncmFwaCk7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcblxuICAgICAgICByZXR1cm4gY2FyZDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRhcENhcmQgfTtcbiIsImltcG9ydCB7IG5hdiB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuY2xhc3MgSG9tZUJhbm5lckNvbnRhaW5lciB7XG5cbiAgICBsb2FkSG9tZUJhbm5lckNvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgYmFubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhbm5lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXItY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2LmxvYWROYXYoKSk7XG4gICAgICAgIGJhbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG4gICAgICAgIGNvbnN0IGJhbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFubmVyVGV4dC5jbGFzc0xpc3QuYWRkKCdiYW5uZXItdGV4dCcpO1xuICAgICAgICBjb25zdCBiYW5uZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGJhbm5lckgxLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1oZWFkaW5nJyk7XG4gICAgICAgIGJhbm5lckgxLnRleHRDb250ZW50ID0gJ0JhdHRsZWdyb3VuZCBCcmV3aW5nJztcbiAgICAgICAgY29uc3QgYmFubmVySDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBiYW5uZXJIMi5jbGFzc0xpc3QuYWRkKCdiYW5uZXItdGFnbGluZScpO1xuICAgICAgICBiYW5uZXJIMi50ZXh0Q29udGVudCA9ICdCZWVyIHdvcnRoIGZpZ2h0aW5nIGZvci4nO1xuICAgICAgICBjb25zdCBiYW5uZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYmFubmVyQnRuLnRleHRDb250ZW50ID0gJ1ZpZXcgVGFwIExpc3QnO1xuXG4gICAgICAgIGJhbm5lclRleHQuYXBwZW5kQ2hpbGQoYmFubmVySDEpO1xuICAgICAgICBiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGJhbm5lckgyKTtcbiAgICAgICAgYmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJCdG4pO1xuXG4gICAgICAgIGJhbm5lci5hcHBlbmRDaGlsZChiYW5uZXJUZXh0KTtcbiAgICAgICAgYmFubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhbm5lcik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYmFubmVyQ29udGFpbmVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGxldCBob21lQmFubmVyQ29udGFpbmVyID0gbmV3IEhvbWVCYW5uZXJDb250YWluZXIoKTtcblxuey8qIDxkaXYgY2xhc3M9XCJiYW5uZXItY29udGFpbmVyXCI+XG4gICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+VGFwIExpc3Q8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BYm91dCBVczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNjaGVkdWxlIEEgVG91cjwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFubmVyLXRleHRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cImJhbm5lci1oZWFkaW5nXCI+QmF0dGxlZ3JvdW5kIEJyZXdpbmc8L2gxPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiYmFubmVyLXRhZ2xpbmVcIj5CZWVyIHdvcnRoIGZpZ2h0aW5nIGZvci48L2gyPlxuICAgICAgICAgICAgPGJ1dHRvbj5WaWV3IFRhcCBMaXN0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+ICovfSIsImV4cG9ydCB7IGhvbWVCYW5uZXJDb250YWluZXIgfSBmcm9tICcuL2hvbWVCYW5uZXJDb250YWluZXInO1xuZXhwb3J0IHsgdGFwTGlzdCB9IGZyb20gJy4vdGFwTGlzdCc7IiwiaW1wb3J0IHsgVGFwQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5jb25zdCB0YXBzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ01hbm55XFwncyBQYWxlIEFsZScsIFxuICAgICAgICBicmV3ZXI6ICdHZW9yZ2V0b3duIEJyZXdlcnknLCBcbiAgICAgICAgYWJ2OiAnNScsIFxuICAgICAgICBvcmlnaW46ICdTZWF0dGxlLCBXQScsIFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWFubnlcXCdzIFBhbGUgQWxlJywgXG4gICAgICAgIGJyZXdlcjogJ0dlb3JnZXRvd24gQnJld2VyeScsIFxuICAgICAgICBhYnY6ICc1JywgXG4gICAgICAgIG9yaWdpbjogJ1NlYXR0bGUsIFdBJywgXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNYW5ueVxcJ3MgUGFsZSBBbGUnLCBcbiAgICAgICAgYnJld2VyOiAnR2VvcmdldG93biBCcmV3ZXJ5JywgXG4gICAgICAgIGFidjogJzUnLCBcbiAgICAgICAgb3JpZ2luOiAnU2VhdHRsZSwgV0EnLCBcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LidcbiAgICB9LFxuXVxuXG5jbGFzcyBUYXBMaXN0IHtcbiAgICBjcmVhdGVUYXBMaXN0KCkge1xuICAgICAgICBjb25zdCB0YXBMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhcExpc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGFwTGlzdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnVGFwIExpc3QnO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFwTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXBMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhcGxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIHRhcHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcENhcmQgPSBuZXcgVGFwQ2FyZChpdGVtLm5hbWUsIGl0ZW0uYnJld2VyLCBpdGVtLmFidiwgaXRlbS5vcmlnaW4sIGl0ZW0uZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdGFwTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXBDYXJkLmNyZWF0ZVRhcENhcmQoKSk7XG4gICAgICAgIH0pICAgXG5cbiAgICAgICAgdGFwTGlzdC5hcHBlbmRDaGlsZCh0YXBMaXN0SGVhZGluZyk7XG4gICAgICAgIHRhcExpc3QuYXBwZW5kQ2hpbGQodGFwTGlzdENvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiB0YXBMaXN0O1xuICAgIH1cbn1cblxuXG5leHBvcnQgbGV0IHRhcExpc3QgPSBuZXcgVGFwTGlzdCgpOyIsImltcG9ydCB7IHRhcExpc3QgfSBmcm9tICcuLi9sYXlvdXRzJztcbmltcG9ydCB7IGhvbWVCYW5uZXJDb250YWluZXIgfSBmcm9tICcuLi9sYXlvdXRzJztcblxuZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lQmFubmVyQ29udGFpbmVyLmxvYWRIb21lQmFubmVyQ29udGFpbmVyKCkpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXBMaXN0LmNyZWF0ZVRhcExpc3QoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQge1xuICAgIGxvYWRIb21lUGFnZVxufSBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gJy4vcGFnZXMvaG9tZSc7XG5cbmxvYWRIb21lUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==