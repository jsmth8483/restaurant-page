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
    homeLink;
    tapListLink;
    scheduleLink;

    loadNav() {
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');

        const homeLi = document.createElement('li'); 
        const homeLink = document.createElement('a')
        homeLink.textContent = 'Home';
        homeLink.href = '#'
        homeLink.id = 'nav-home';
        homeLi.appendChild(homeLink);
        ul.appendChild(homeLi)
        this.homeLink = homeLink;

        const tapListLi = document.createElement('li'); 
        const tapListLink = document.createElement('a');
        tapListLink.textContent = 'Tap List';
        tapListLink.href = '#'
        tapListLink.id = 'nav-tap-list';
        tapListLi.appendChild(tapListLink);
        ul.appendChild(tapListLi);
        this.tapListLink = tapListLink;
        
        const scheduleLi = document.createElement('li'); 
        const scheduleLink = document.createElement('a');
        scheduleLink.textContent = 'Schedule a Tour';
        scheduleLink.href = '#'
        scheduleLink.id = 'nav-schedule';
        scheduleLi.appendChild(scheduleLink);
        ul.appendChild(scheduleLi);
        this.scheduleLink = scheduleLink;

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
        // const tapListHeading = document.createElement('h3');
        // tapListHeading.textContent = 'Tap List';
        
        const tapListContainer = document.createElement('div');
        tapListContainer.classList.add('taplist-container');
        taps.forEach((item) => {
            let tapCard = new _components__WEBPACK_IMPORTED_MODULE_0__.TapCard(item.name, item.brewer, item.abv, item.origin, item.description);
            tapListContainer.appendChild(tapCard.createTapCard());
        })   

        //tapList.appendChild(tapListHeading);
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts */ "./src/layouts/index.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages */ "./src/pages/index.js");






function loadHomePage() {
    const content = document.querySelector('#content')
    content.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_1__.homeBanner.loadHomeBanner());
    const main = document.createElement('main');
    main.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_1__.tapList.createTapList())
    content.appendChild(main);
    _components__WEBPACK_IMPORTED_MODULE_0__.nav.tapListLink.addEventListener('click', () => {
        clearContent();
        (0,_pages__WEBPACK_IMPORTED_MODULE_2__.loadTapListPage)();
    })
}

function clearContent() {
    const contentToClear = document.querySelector('#content');
    document.body.removeChild(contentToClear);
    const contentToCreate = document.createElement('div');
    contentToCreate.id = 'content';
    document.body.appendChild(contentToCreate)
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages */ "./src/pages/index.js");






function loadTapListPage() {
    const content = document.querySelector('#content');
    content.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_0__.tapListBanner.loadTapListBanner());
    const main = document.createElement('main');
    main.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_0__.tapList.createTapList())
    content.appendChild(main);

    _components__WEBPACK_IMPORTED_MODULE_1__.nav.homeLink.addEventListener('click', () => {
        clearContent();
        (0,_pages__WEBPACK_IMPORTED_MODULE_2__.loadHomePage)();
    })
}

function clearContent() {
    const contentToClear = document.querySelector('#content');
    document.body.removeChild(contentToClear);
    const contentToCreate = document.createElement('div');
    contentToCreate.id = 'content';
    document.body.appendChild(contentToCreate)
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/components/index.js");



(0,_pages__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();

// nav.homeLink.addEventListener('click', () => {
//     clearContent();
//     loadHomePage();
// })

// nav.tapListLink.addEventListener('click', () => {
//     //clearContent();
//     loadTapListPage();
// })


// function clearContent() {
//     const contentToClear = document.querySelector('#content');
//     document.body.removeChild(contentToClear);
//     const contentToCreate = document.createElement('div');
//     contentToCreate.id = 'content';
//     document.body.appendChild(contentToCreate)
// }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZndEO0FBQ3JCOztBQUVuQyxvREFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvdGFwQ2FyZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy9ob21lQmFubmVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYXlvdXRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYXlvdXRzL3RhcExpc3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xheW91dHMvdGFwTGlzdEJhbm5lci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy90YXBMaXN0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IFRhcENhcmQgfSBmcm9tICcuL3RhcENhcmQnO1xuZXhwb3J0IHsgbmF2IH0gZnJvbSAnLi9uYXYnOyIsIlxuY2xhc3MgTmF2IHtcbiAgICBob21lTGluaztcbiAgICB0YXBMaXN0TGluaztcbiAgICBzY2hlZHVsZUxpbms7XG5cbiAgICBsb2FkTmF2KCkge1xuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICAgIGNvbnN0IGhvbWVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IFxuICAgICAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBob21lTGluay50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICAgICAgaG9tZUxpbmsuaHJlZiA9ICcjJ1xuICAgICAgICBob21lTGluay5pZCA9ICduYXYtaG9tZSc7XG4gICAgICAgIGhvbWVMaS5hcHBlbmRDaGlsZChob21lTGluayk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGhvbWVMaSlcbiAgICAgICAgdGhpcy5ob21lTGluayA9IGhvbWVMaW5rO1xuXG4gICAgICAgIGNvbnN0IHRhcExpc3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IFxuICAgICAgICBjb25zdCB0YXBMaXN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgdGFwTGlzdExpbmsudGV4dENvbnRlbnQgPSAnVGFwIExpc3QnO1xuICAgICAgICB0YXBMaXN0TGluay5ocmVmID0gJyMnXG4gICAgICAgIHRhcExpc3RMaW5rLmlkID0gJ25hdi10YXAtbGlzdCc7XG4gICAgICAgIHRhcExpc3RMaS5hcHBlbmRDaGlsZCh0YXBMaXN0TGluayk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKHRhcExpc3RMaSk7XG4gICAgICAgIHRoaXMudGFwTGlzdExpbmsgPSB0YXBMaXN0TGluaztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyBcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBzY2hlZHVsZUxpbmsudGV4dENvbnRlbnQgPSAnU2NoZWR1bGUgYSBUb3VyJztcbiAgICAgICAgc2NoZWR1bGVMaW5rLmhyZWYgPSAnIydcbiAgICAgICAgc2NoZWR1bGVMaW5rLmlkID0gJ25hdi1zY2hlZHVsZSc7XG4gICAgICAgIHNjaGVkdWxlTGkuYXBwZW5kQ2hpbGQoc2NoZWR1bGVMaW5rKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoc2NoZWR1bGVMaSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVMaW5rID0gc2NoZWR1bGVMaW5rO1xuXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIHJldHVybiBuYXY7XG4gICAgfVxuXG4gICAgXG59XG5cbmV4cG9ydCBsZXQgbmF2ID0gbmV3IE5hdigpO1xuXG5cbnsvKiA8bmF2PlxuICAgIDx1bD5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5UYXAgTGlzdDwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BYm91dCBVczwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TY2hlZHVsZSBBIFRvdXI8L2E+PC9saT5cbiAgICA8L3VsPlxuPC9uYXY+ICovfSIsImltcG9ydCB0YXBJbWcgZnJvbSAnLi4vYmVlci5wbmcnO1xuXG5jbGFzcyBUYXBDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBicmV3ZXIsIGFidiwgb3JpZ2luLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJyZXdlciA9IGJyZXdlcjtcbiAgICAgICAgdGhpcy5hYnYgPSBhYnY7XG4gICAgICAgIHRoaXMub3JpZ2luID0gb3JpZ2luO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgY3JlYXRlVGFwQ2FyZCgpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3RhcC1jYXJkJyk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNvbnN0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXAtY2FyZC1kZXRhaWxzJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnQgZm9yIGltYWdlXG4gICAgICAgIGltYWdlLnNyYyA9IHRhcEltZztcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnQgZm9yIHRhcCBuYW1lIGhlYWRlclxuICAgICAgICBjb25zdCBuYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgbmFtZUhlYWRlci50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChuYW1lSGVhZGVyKTtcblxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudHMgZm9yIHRhcEluZm9cbiAgICAgICAgY29uc3QgdGFwSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhYnZTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBicmV3ZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBvcmlnaW5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBhYnZTcGFuLnRleHRDb250ZW50ID0gYCR7dGhpcy5hYnZ9JSBBQlZgO1xuICAgICAgICBicmV3ZXJTcGFuLnRleHRDb250ZW50ID0gdGhpcy5icmV3ZXI7XG4gICAgICAgIG9yaWdpblNwYW4udGV4dENvbnRlbnQgPSB0aGlzLm9yaWdpbjtcbiAgICAgICAgdGFwSW5mby5hcHBlbmRDaGlsZChhYnZTcGFuKTtcbiAgICAgICAgdGFwSW5mby5hcHBlbmRDaGlsZChicmV3ZXJTcGFuKTtcbiAgICAgICAgdGFwSW5mby5hcHBlbmRDaGlsZChvcmlnaW5TcGFuKTtcbiAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZCh0YXBJbmZvKTtcblxuICAgICAgICAvL0NyZWF0ZSBlbGVtZW50IGZvciBkZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb25QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYWdyYXBoKTtcblxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRldGFpbHNEaXYpO1xuXG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGFwQ2FyZCB9O1xuIiwiaW1wb3J0IHsgbmF2IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmNsYXNzIEhvbWVCYW5uZXIge1xuICAgIGxvYWRIb21lQmFubmVyKCkge1xuICAgICAgICBjb25zdCBiYW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFubmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYmFubmVyLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdi5sb2FkTmF2KCkpO1xuICAgICAgICBiYW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicpO1xuICAgICAgICBjb25zdCBiYW5uZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhbm5lclRleHQuY2xhc3NMaXN0LmFkZCgnYmFubmVyLXRleHQnKTtcbiAgICAgICAgY29uc3QgYmFubmVySDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBiYW5uZXJIMS5jbGFzc0xpc3QuYWRkKCdiYW5uZXItaGVhZGluZycpO1xuICAgICAgICBiYW5uZXJIMS50ZXh0Q29udGVudCA9ICdCYXR0bGVncm91bmQgQnJld2luZyc7XG4gICAgICAgIGNvbnN0IGJhbm5lckgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgYmFubmVySDIuY2xhc3NMaXN0LmFkZCgnYmFubmVyLXRhZ2xpbmUnKTtcbiAgICAgICAgYmFubmVySDIudGV4dENvbnRlbnQgPSAnQmVlciB3b3J0aCBmaWdodGluZyBmb3IuJztcbiAgICAgICAgY29uc3QgYmFubmVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJhbm5lckJ0bi50ZXh0Q29udGVudCA9ICdWaWV3IFRhcCBMaXN0JztcblxuICAgICAgICBiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGJhbm5lckgxKTtcbiAgICAgICAgYmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJIMik7XG4gICAgICAgIGJhbm5lclRleHQuYXBwZW5kQ2hpbGQoYmFubmVyQnRuKTtcblxuICAgICAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVyVGV4dCk7XG4gICAgICAgIGJhbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChiYW5uZXIpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJhbm5lckNvbnRhaW5lcjtcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgaG9tZUJhbm5lciA9IG5ldyBIb21lQmFubmVyKCk7IiwiZXhwb3J0IHsgaG9tZUJhbm5lciB9IGZyb20gJy4vaG9tZUJhbm5lcic7XG5leHBvcnQgeyB0YXBMaXN0IH0gZnJvbSAnLi90YXBMaXN0JztcbmV4cG9ydCB7IHRhcExpc3RCYW5uZXIgfSBmcm9tICcuL3RhcExpc3RCYW5uZXInOyIsImltcG9ydCB7IFRhcENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuY29uc3QgdGFwcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNYW5ueVxcJ3MgUGFsZSBBbGUnLCBcbiAgICAgICAgYnJld2VyOiAnR2VvcmdldG93biBCcmV3ZXJ5JywgXG4gICAgICAgIGFidjogJzUnLCBcbiAgICAgICAgb3JpZ2luOiAnU2VhdHRsZSwgV0EnLCBcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01hbm55XFwncyBQYWxlIEFsZScsIFxuICAgICAgICBicmV3ZXI6ICdHZW9yZ2V0b3duIEJyZXdlcnknLCBcbiAgICAgICAgYWJ2OiAnNScsIFxuICAgICAgICBvcmlnaW46ICdTZWF0dGxlLCBXQScsIFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWFubnlcXCdzIFBhbGUgQWxlJywgXG4gICAgICAgIGJyZXdlcjogJ0dlb3JnZXRvd24gQnJld2VyeScsIFxuICAgICAgICBhYnY6ICc1JywgXG4gICAgICAgIG9yaWdpbjogJ1NlYXR0bGUsIFdBJywgXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nXG4gICAgfSxcbl1cblxuY2xhc3MgVGFwTGlzdCB7XG4gICAgY3JlYXRlVGFwTGlzdCgpIHtcbiAgICAgICAgY29uc3QgdGFwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBjb25zdCB0YXBMaXN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIC8vIHRhcExpc3RIZWFkaW5nLnRleHRDb250ZW50ID0gJ1RhcCBMaXN0JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhcExpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFwTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXBsaXN0LWNvbnRhaW5lcicpO1xuICAgICAgICB0YXBzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCB0YXBDYXJkID0gbmV3IFRhcENhcmQoaXRlbS5uYW1lLCBpdGVtLmJyZXdlciwgaXRlbS5hYnYsIGl0ZW0ub3JpZ2luLCBpdGVtLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHRhcExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFwQ2FyZC5jcmVhdGVUYXBDYXJkKCkpO1xuICAgICAgICB9KSAgIFxuXG4gICAgICAgIC8vdGFwTGlzdC5hcHBlbmRDaGlsZCh0YXBMaXN0SGVhZGluZyk7XG4gICAgICAgIHRhcExpc3QuYXBwZW5kQ2hpbGQodGFwTGlzdENvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiB0YXBMaXN0O1xuICAgIH1cbn1cblxuXG5leHBvcnQgbGV0IHRhcExpc3QgPSBuZXcgVGFwTGlzdCgpOyIsImltcG9ydCB7IG5hdiB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5jbGFzcyBUYXBMaXN0QmFubmVyIHtcbiAgICBsb2FkVGFwTGlzdEJhbm5lcigpIHtcbiAgICAgICAgY29uc3QgYmFubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhbm5lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXAtbGlzdC1iYW5uZXItY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2LmxvYWROYXYoKSk7XG4gICAgICAgIGJhbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG4gICAgICAgIGNvbnN0IGJhbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFubmVyVGV4dC5jbGFzc0xpc3QuYWRkKCdiYW5uZXItdGV4dCcpO1xuICAgICAgICBjb25zdCBiYW5uZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGJhbm5lckgxLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1oZWFkaW5nJyk7XG4gICAgICAgIGJhbm5lckgxLnRleHRDb250ZW50ID0gJ1RhcCBMaXN0JztcblxuICAgICAgICBiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGJhbm5lckgxKTtcblxuICAgICAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVyVGV4dCk7XG4gICAgICAgIGJhbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChiYW5uZXIpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJhbm5lckNvbnRhaW5lcjtcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgdGFwTGlzdEJhbm5lciA9IG5ldyBUYXBMaXN0QmFubmVyKCk7IiwiaW1wb3J0IHsgbmF2IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0YXBMaXN0IH0gZnJvbSAnLi4vbGF5b3V0cyc7XG5pbXBvcnQgeyBob21lQmFubmVyIH0gZnJvbSAnLi4vbGF5b3V0cyc7XG5pbXBvcnQgeyBsb2FkVGFwTGlzdFBhZ2UgfSBmcm9tICcuLi9wYWdlcyc7XG5cblxuZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lQmFubmVyLmxvYWRIb21lQmFubmVyKCkpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXBMaXN0LmNyZWF0ZVRhcExpc3QoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIG5hdi50YXBMaXN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGxvYWRUYXBMaXN0UGFnZSgpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50VG9DbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250ZW50VG9DbGVhcik7XG4gICAgY29uc3QgY29udGVudFRvQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudFRvQ3JlYXRlLmlkID0gJ2NvbnRlbnQnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudFRvQ3JlYXRlKVxufVxuXG5leHBvcnQge1xuICAgIGxvYWRIb21lUGFnZVxufSBcbiIsImV4cG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gJy4vaG9tZVBhZ2UnO1xuZXhwb3J0IHsgbG9hZFRhcExpc3RQYWdlIH0gZnJvbSAnLi90YXBMaXN0UGFnZSc7IiwiaW1wb3J0IHsgdGFwTGlzdCwgdGFwTGlzdEJhbm5lciB9IGZyb20gXCIuLi9sYXlvdXRzXCI7XG5pbXBvcnQgeyBuYXYgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzJztcblxuXG5cbmZ1bmN0aW9uIGxvYWRUYXBMaXN0UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhcExpc3RCYW5uZXIubG9hZFRhcExpc3RCYW5uZXIoKSk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhcExpc3QuY3JlYXRlVGFwTGlzdCgpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBuYXYuaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBsb2FkSG9tZVBhZ2UoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudFRvQ2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudFRvQ2xlYXIpO1xuICAgIGNvbnN0IGNvbnRlbnRUb0NyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRUb0NyZWF0ZS5pZCA9ICdjb250ZW50JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRUb0NyZWF0ZSlcbn1cblxuZXhwb3J0IHsgbG9hZFRhcExpc3RQYWdlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgbG9hZEhvbWVQYWdlLCBsb2FkVGFwTGlzdFBhZ2UgfSBmcm9tICcuL3BhZ2VzJztcbmltcG9ydCB7IG5hdiB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmxvYWRIb21lUGFnZSgpO1xuXG4vLyBuYXYuaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgY2xlYXJDb250ZW50KCk7XG4vLyAgICAgbG9hZEhvbWVQYWdlKCk7XG4vLyB9KVxuXG4vLyBuYXYudGFwTGlzdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgLy9jbGVhckNvbnRlbnQoKTtcbi8vICAgICBsb2FkVGFwTGlzdFBhZ2UoKTtcbi8vIH0pXG5cblxuLy8gZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuLy8gICAgIGNvbnN0IGNvbnRlbnRUb0NsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbi8vICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRlbnRUb0NsZWFyKTtcbi8vICAgICBjb25zdCBjb250ZW50VG9DcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb250ZW50VG9DcmVhdGUuaWQgPSAnY29udGVudCc7XG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50VG9DcmVhdGUpXG4vLyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9