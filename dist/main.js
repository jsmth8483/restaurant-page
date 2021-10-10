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

/***/ "./src/layouts/homeBanner.js":
/*!***********************************!*\
  !*** ./src/layouts/homeBanner.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeBanner": () => (/* binding */ homeBanner)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ "./src/components/index.js");

class HomeBanner {

    loadHomeBanner() {
        const bannerContainer = document.createElement('div');
        bannerContainer.classList.add('home-banner-container');
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

let homeBanner = new HomeBanner();

/***/ }),

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeBanner": () => (/* reexport safe */ _homeBanner__WEBPACK_IMPORTED_MODULE_0__.homeBanner),
/* harmony export */   "tapList": () => (/* reexport safe */ _tapList__WEBPACK_IMPORTED_MODULE_1__.tapList),
/* harmony export */   "tapListBanner": () => (/* reexport safe */ _tapListBanner__WEBPACK_IMPORTED_MODULE_2__.tapListBanner)
/* harmony export */ });
/* harmony import */ var _homeBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeBanner */ "./src/layouts/homeBanner.js");
/* harmony import */ var _tapList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tapList */ "./src/layouts/tapList.js");
/* harmony import */ var _tapListBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tapListBanner */ "./src/layouts/tapListBanner.js");




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

/***/ "./src/layouts/tapListBanner.js":
/*!**************************************!*\
  !*** ./src/layouts/tapListBanner.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tapListBanner": () => (/* binding */ tapListBanner)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ "./src/components/index.js");


class TapListBanner {
    loadTapListBanner() {
        const bannerContainer = document.createElement('div');
        bannerContainer.classList.add('tap-list-banner-container');
        const header = document.createElement('header');
        header.appendChild(_components__WEBPACK_IMPORTED_MODULE_0__.nav.loadNav());
        bannerContainer.appendChild(header);

        const banner = document.createElement('div');
        banner.classList.add('banner');
        const bannerText = document.createElement('div');
        bannerText.classList.add('banner-text');
        const bannerH1 = document.createElement('h1');
        bannerH1.classList.add('banner-heading');
        bannerH1.textContent = 'Tap List';

        bannerText.appendChild(bannerH1);

        banner.appendChild(bannerText);
        bannerContainer.appendChild(banner);
        
        return bannerContainer;
    }
}

let tapListBanner = new TapListBanner();

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts */ "./src/layouts/index.js");



function loadHomePage() {
    const content = document.querySelector('#content')
    content.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_0__.homeBanner.loadHomeBanner());
    const main = document.createElement('main');
    main.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_0__.tapList.createTapList())
    content.appendChild(main);
}

 


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* reexport safe */ _homePage__WEBPACK_IMPORTED_MODULE_0__.loadHomePage),
/* harmony export */   "loadTapListPage": () => (/* reexport safe */ _tapListPage__WEBPACK_IMPORTED_MODULE_1__.loadTapListPage)
/* harmony export */ });
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/pages/homePage.js");
/* harmony import */ var _tapListPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tapListPage */ "./src/pages/tapListPage.js");



/***/ }),

/***/ "./src/pages/tapListPage.js":
/*!**********************************!*\
  !*** ./src/pages/tapListPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadTapListPage": () => (/* binding */ loadTapListPage)
/* harmony export */ });
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts */ "./src/layouts/index.js");


function loadTapListPage() {
        const content = document.querySelector('#content');
        content.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_0__.tapListBanner.loadTapListBanner());
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
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./src/pages/index.js");


(0,_pages__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();

function clearContent() {
    const content = document.querySelector('#content');
    document.body.removeChild(content);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUV4RCxvREFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL3RhcENhcmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xheW91dHMvaG9tZUJhbm5lci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy90YXBMaXN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYXlvdXRzL3RhcExpc3RCYW5uZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvdGFwTGlzdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBUYXBDYXJkIH0gZnJvbSAnLi90YXBDYXJkJztcbmV4cG9ydCB7IG5hdiB9IGZyb20gJy4vbmF2JzsiLCJcbmNsYXNzIE5hdiB7XG4gICAgbG9hZE5hdigpIHtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgICBjb25zdCBob21lTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyBcbiAgICAgICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgICAgIGhvbWVMaW5rLmhyZWYgPSAnIydcbiAgICAgICAgaG9tZUxpLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoaG9tZUxpKVxuXG4gICAgICAgIGNvbnN0IHRhcExpc3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IFxuICAgICAgICBjb25zdCB0YXBMaXN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgdGFwTGlzdExpbmsudGV4dENvbnRlbnQgPSAnVGFwIExpc3QnO1xuICAgICAgICB0YXBMaXN0TGluay5ocmVmID0gJyMnXG4gICAgICAgIHRhcExpc3RMaS5hcHBlbmRDaGlsZCh0YXBMaXN0TGluayk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKHRhcExpc3RMaSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzY2hlZHVsZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgc2NoZWR1bGVMaW5rLnRleHRDb250ZW50ID0gJ1NjaGVkdWxlIGEgVG91cic7XG4gICAgICAgIHNjaGVkdWxlTGluay5ocmVmID0gJyMnXG4gICAgICAgIHNjaGVkdWxlTGkuYXBwZW5kQ2hpbGQoc2NoZWR1bGVMaW5rKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoc2NoZWR1bGVMaSk7XG5cbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgcmV0dXJuIG5hdjtcbiAgICB9XG5cbiAgICBcbn1cblxuZXhwb3J0IGxldCBuYXYgPSBuZXcgTmF2KCk7XG5cblxuey8qIDxuYXY+XG4gICAgPHVsPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlRhcCBMaXN0PC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFib3V0IFVzPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNjaGVkdWxlIEEgVG91cjwvYT48L2xpPlxuICAgIDwvdWw+XG48L25hdj4gKi99IiwiaW1wb3J0IHRhcEltZyBmcm9tICcuLi9iZWVyLnBuZyc7XG5cbmNsYXNzIFRhcENhcmQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGJyZXdlciwgYWJ2LCBvcmlnaW4sIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYnJld2VyID0gYnJld2VyO1xuICAgICAgICB0aGlzLmFidiA9IGFidjtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBvcmlnaW47XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBjcmVhdGVUYXBDYXJkKCkge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgndGFwLWNhcmQnKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ3RhcC1jYXJkLWRldGFpbHMnKTtcblxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudCBmb3IgaW1hZ2VcbiAgICAgICAgaW1hZ2Uuc3JjID0gdGFwSW1nO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudCBmb3IgdGFwIG5hbWUgaGVhZGVyXG4gICAgICAgIGNvbnN0IG5hbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBuYW1lSGVhZGVyLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKG5hbWVIZWFkZXIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50cyBmb3IgdGFwSW5mb1xuICAgICAgICBjb25zdCB0YXBJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFidlNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGJyZXdlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IG9yaWdpblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGFidlNwYW4udGV4dENvbnRlbnQgPSBgJHt0aGlzLmFidn0lIEFCVmA7XG4gICAgICAgIGJyZXdlclNwYW4udGV4dENvbnRlbnQgPSB0aGlzLmJyZXdlcjtcbiAgICAgICAgb3JpZ2luU3Bhbi50ZXh0Q29udGVudCA9IHRoaXMub3JpZ2luO1xuICAgICAgICB0YXBJbmZvLmFwcGVuZENoaWxkKGFidlNwYW4pO1xuICAgICAgICB0YXBJbmZvLmFwcGVuZENoaWxkKGJyZXdlclNwYW4pO1xuICAgICAgICB0YXBJbmZvLmFwcGVuZENoaWxkKG9yaWdpblNwYW4pO1xuICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKHRhcEluZm8pO1xuXG4gICAgICAgIC8vQ3JlYXRlIGVsZW1lbnQgZm9yIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhZ3JhcGgpO1xuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XG5cbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUYXBDYXJkIH07XG4iLCJpbXBvcnQgeyBuYXYgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmNsYXNzIEhvbWVCYW5uZXIge1xuXG4gICAgbG9hZEhvbWVCYW5uZXIoKSB7XG4gICAgICAgIGNvbnN0IGJhbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYW5uZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1iYW5uZXItY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2LmxvYWROYXYoKSk7XG4gICAgICAgIGJhbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG4gICAgICAgIGNvbnN0IGJhbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFubmVyVGV4dC5jbGFzc0xpc3QuYWRkKCdiYW5uZXItdGV4dCcpO1xuICAgICAgICBjb25zdCBiYW5uZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGJhbm5lckgxLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1oZWFkaW5nJyk7XG4gICAgICAgIGJhbm5lckgxLnRleHRDb250ZW50ID0gJ0JhdHRsZWdyb3VuZCBCcmV3aW5nJztcbiAgICAgICAgY29uc3QgYmFubmVySDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBiYW5uZXJIMi5jbGFzc0xpc3QuYWRkKCdiYW5uZXItdGFnbGluZScpO1xuICAgICAgICBiYW5uZXJIMi50ZXh0Q29udGVudCA9ICdCZWVyIHdvcnRoIGZpZ2h0aW5nIGZvci4nO1xuICAgICAgICBjb25zdCBiYW5uZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYmFubmVyQnRuLnRleHRDb250ZW50ID0gJ1ZpZXcgVGFwIExpc3QnO1xuXG4gICAgICAgIGJhbm5lclRleHQuYXBwZW5kQ2hpbGQoYmFubmVySDEpO1xuICAgICAgICBiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGJhbm5lckgyKTtcbiAgICAgICAgYmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJCdG4pO1xuXG4gICAgICAgIGJhbm5lci5hcHBlbmRDaGlsZChiYW5uZXJUZXh0KTtcbiAgICAgICAgYmFubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhbm5lcik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYmFubmVyQ29udGFpbmVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGxldCBob21lQmFubmVyID0gbmV3IEhvbWVCYW5uZXIoKTsiLCJleHBvcnQgeyBob21lQmFubmVyIH0gZnJvbSAnLi9ob21lQmFubmVyJztcbmV4cG9ydCB7IHRhcExpc3QgfSBmcm9tICcuL3RhcExpc3QnO1xuZXhwb3J0IHsgdGFwTGlzdEJhbm5lciB9IGZyb20gJy4vdGFwTGlzdEJhbm5lcic7IiwiaW1wb3J0IHsgVGFwQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5jb25zdCB0YXBzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ01hbm55XFwncyBQYWxlIEFsZScsIFxuICAgICAgICBicmV3ZXI6ICdHZW9yZ2V0b3duIEJyZXdlcnknLCBcbiAgICAgICAgYWJ2OiAnNScsIFxuICAgICAgICBvcmlnaW46ICdTZWF0dGxlLCBXQScsIFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWFubnlcXCdzIFBhbGUgQWxlJywgXG4gICAgICAgIGJyZXdlcjogJ0dlb3JnZXRvd24gQnJld2VyeScsIFxuICAgICAgICBhYnY6ICc1JywgXG4gICAgICAgIG9yaWdpbjogJ1NlYXR0bGUsIFdBJywgXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNYW5ueVxcJ3MgUGFsZSBBbGUnLCBcbiAgICAgICAgYnJld2VyOiAnR2VvcmdldG93biBCcmV3ZXJ5JywgXG4gICAgICAgIGFidjogJzUnLCBcbiAgICAgICAgb3JpZ2luOiAnU2VhdHRsZSwgV0EnLCBcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LidcbiAgICB9LFxuXVxuXG5jbGFzcyBUYXBMaXN0IHtcbiAgICBjcmVhdGVUYXBMaXN0KCkge1xuICAgICAgICBjb25zdCB0YXBMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhcExpc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGFwTGlzdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnVGFwIExpc3QnO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFwTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXBMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhcGxpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIHRhcHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcENhcmQgPSBuZXcgVGFwQ2FyZChpdGVtLm5hbWUsIGl0ZW0uYnJld2VyLCBpdGVtLmFidiwgaXRlbS5vcmlnaW4sIGl0ZW0uZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdGFwTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXBDYXJkLmNyZWF0ZVRhcENhcmQoKSk7XG4gICAgICAgIH0pICAgXG5cbiAgICAgICAgdGFwTGlzdC5hcHBlbmRDaGlsZCh0YXBMaXN0SGVhZGluZyk7XG4gICAgICAgIHRhcExpc3QuYXBwZW5kQ2hpbGQodGFwTGlzdENvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiB0YXBMaXN0O1xuICAgIH1cbn1cblxuXG5leHBvcnQgbGV0IHRhcExpc3QgPSBuZXcgVGFwTGlzdCgpOyIsImltcG9ydCB7IG5hdiB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5jbGFzcyBUYXBMaXN0QmFubmVyIHtcbiAgICBsb2FkVGFwTGlzdEJhbm5lcigpIHtcbiAgICAgICAgY29uc3QgYmFubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhbm5lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXAtbGlzdC1iYW5uZXItY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2LmxvYWROYXYoKSk7XG4gICAgICAgIGJhbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG4gICAgICAgIGNvbnN0IGJhbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFubmVyVGV4dC5jbGFzc0xpc3QuYWRkKCdiYW5uZXItdGV4dCcpO1xuICAgICAgICBjb25zdCBiYW5uZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGJhbm5lckgxLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1oZWFkaW5nJyk7XG4gICAgICAgIGJhbm5lckgxLnRleHRDb250ZW50ID0gJ1RhcCBMaXN0JztcblxuICAgICAgICBiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGJhbm5lckgxKTtcblxuICAgICAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVyVGV4dCk7XG4gICAgICAgIGJhbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChiYW5uZXIpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJhbm5lckNvbnRhaW5lcjtcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgdGFwTGlzdEJhbm5lciA9IG5ldyBUYXBMaXN0QmFubmVyKCk7IiwiaW1wb3J0IHsgdGFwTGlzdCB9IGZyb20gJy4uL2xheW91dHMnO1xuaW1wb3J0IHsgaG9tZUJhbm5lciB9IGZyb20gJy4uL2xheW91dHMnO1xuXG5mdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVCYW5uZXIubG9hZEhvbWVCYW5uZXIoKSk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhcExpc3QuY3JlYXRlVGFwTGlzdCgpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCB7XG4gICAgbG9hZEhvbWVQYWdlXG59IFxuIiwiZXhwb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSAnLi9ob21lUGFnZSc7XG5leHBvcnQgeyBsb2FkVGFwTGlzdFBhZ2UgfSBmcm9tICcuL3RhcExpc3RQYWdlJzsiLCJpbXBvcnQgeyB0YXBMaXN0LCB0YXBMaXN0QmFubmVyIH0gZnJvbSBcIi4uL2xheW91dHNcIjtcblxuZnVuY3Rpb24gbG9hZFRhcExpc3RQYWdlKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXBMaXN0QmFubmVyLmxvYWRUYXBMaXN0QmFubmVyKCkpO1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRhcExpc3QuY3JlYXRlVGFwTGlzdCgpKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIH1cblxuXG5leHBvcnQgeyBsb2FkVGFwTGlzdFBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBsb2FkSG9tZVBhZ2UsIGxvYWRUYXBMaXN0UGFnZSB9IGZyb20gJy4vcGFnZXMnO1xuXG5sb2FkSG9tZVBhZ2UoKTtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9