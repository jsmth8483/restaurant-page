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

/***/ "./src/layouts/about.js":
/*!******************************!*\
  !*** ./src/layouts/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
class About {
	loadAbout() {
		const aboutContainer = document.createElement('div');
		aboutContainer.classList.add('bordered');
		const aboutHeader = document.createElement('h3');
		const aboutParagraph = document.createElement('p');

		aboutHeader.textContent = 'About Us';
		aboutParagraph.textContent =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar purus sed ligula consectetur, non bibendum massa cursus. Etiam placerat mollis nisl quis eleifend. Integer ac pretium lacus. Curabitur vitae maximus metus. Vivamus ipsum neque, tempus pretium sollicitudin consectetur, egestas ut ligula. Phasellus ut efficitur nunc, at convallis nunc. Donec elementum nulla in pulvinar tempus. Aenean id neque erat. Integer ligula est, ultricies sit amet dolor pharetra, consectetur tincidunt sem. Phasellus leo velit, sagittis iaculis venenatis et, varius at urna. Praesent tortor nunc, placerat nec blandit ac, lobortis eu metus.';
		aboutContainer.appendChild(aboutHeader);
		aboutContainer.appendChild(aboutParagraph);

		aboutContainer.classList.add('about-container');

		return aboutContainer;
	}
}

let about = new About();


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
class HomeBanner {
	loadHomeBanner() {
		const bannerContainer = document.createElement('div');
		bannerContainer.classList.add('banner-container');

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
		bannerBtn.textContent = 'Schedule a Tour';

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
/* harmony export */   "tapListBanner": () => (/* reexport safe */ _tapListBanner__WEBPACK_IMPORTED_MODULE_2__.tapListBanner),
/* harmony export */   "about": () => (/* reexport safe */ _about__WEBPACK_IMPORTED_MODULE_3__.about)
/* harmony export */ });
/* harmony import */ var _homeBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeBanner */ "./src/layouts/homeBanner.js");
/* harmony import */ var _tapList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tapList */ "./src/layouts/tapList.js");
/* harmony import */ var _tapListBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tapListBanner */ "./src/layouts/tapListBanner.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/layouts/about.js");






/***/ }),

/***/ "./src/layouts/scheduleBanner.js":
/*!***************************************!*\
  !*** ./src/layouts/scheduleBanner.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleBanner": () => (/* binding */ scheduleBanner)
/* harmony export */ });
class ScheduleBanner {
	loadScheduleBanner() {
		const bannerContainer = document.createElement('div');
		bannerContainer.classList.add('banner-container');

		const banner = document.createElement('div');
		banner.classList.add('banner');
		const bannerText = document.createElement('div');
		bannerText.classList.add('banner-text');
		const bannerH1 = document.createElement('h1');
		bannerH1.classList.add('banner-heading');
		bannerH1.textContent = 'Tour The Battleground';
		const bannerH2 = document.createElement('h2');
		bannerH2.classList.add('banner-tagline');
		bannerH2.textContent = 'Brewed with valor.';

		bannerText.appendChild(bannerH1);
		bannerText.appendChild(bannerH2);

		banner.appendChild(bannerText);
		bannerContainer.appendChild(banner);

		return bannerContainer;
	}
}

let scheduleBanner = new ScheduleBanner();


/***/ }),

/***/ "./src/layouts/scheduleForm.js":
/*!*************************************!*\
  !*** ./src/layouts/scheduleForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleForm": () => (/* binding */ scheduleForm)
/* harmony export */ });
class ScheduleForm {
	loadScheduleForm() {
		const formContainer = document.createElement('div');
		formContainer.classList.add('form-container');
		formContainer.classList.add('bordered');
		const form = document.createElement('form');

		const nameLabel = document.createElement('label');
		//nameLabel.textContent = 'Name: ';
		const nameField = document.createElement('input');
		nameField.name = 'name';
		nameField.type = 'text';
		nameField.required = 'true';
		nameField.placeholder = 'Name';
		nameLabel.appendChild(nameField);

		const phoneLabel = document.createElement('label');
		//phoneLabel.textContent = 'Phone Number: ';
		const phoneField = document.createElement('input');
		phoneField.name = 'phone';
		phoneField.type = 'phone';
		phoneField.required = 'true';
		phoneField.placeholder = 'Phone';
		phoneLabel.appendChild(phoneField);

		const emailLabel = document.createElement('label');
		//emailLabel.textContent = 'Email: ';
		const emailField = document.createElement('input');
		emailField.name = 'email';
		emailField.type = 'email';
		emailField.required = 'true';
		emailField.placeholder = 'Email';
		emailLabel.appendChild(emailField);

		const datetimeLabel = document.createElement('label');
		//datetimeLabel.textContent = 'Date and Time: ';
		const datetimeField = document.createElement('input');
		datetimeField.name = 'datetime';
		datetimeField.type = 'datetime-local';
		// TODO: add min and max time

		let getDate = () => {
			var dt = new Date();
			var off = dt.getTimezoneOffset() * 60000;
			var newdt = new Date(dt - off).toISOString();
			return newdt.slice(0, 19);
		};
		datetimeField.min = getDate().split('.')[0];
		datetimeField.step = 60000;
		datetimeField.required = 'true';
		datetimeLabel.appendChild(datetimeField);

		const submitButton = document.createElement('input');
		submitButton.name = 'submit';
		submitButton.type = 'submit';
		submitButton.textContent = 'Submitt';

		form.appendChild(nameLabel);
		form.appendChild(phoneLabel);
		form.appendChild(emailLabel);
		form.appendChild(datetimeLabel);
		form.appendChild(submitButton);
		formContainer.appendChild(form);
		return formContainer;
	}
}

let scheduleForm = new ScheduleForm();


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
		name: "Manny's Pale Ale",
		brewer: 'Georgetown Brewery',
		abv: '5',
		origin: 'Seattle, WA',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		name: "Manny's Pale Ale",
		brewer: 'Georgetown Brewery',
		abv: '5',
		origin: 'Seattle, WA',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		name: "Manny's Pale Ale",
		brewer: 'Georgetown Brewery',
		abv: '5',
		origin: 'Seattle, WA',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
];

class TapList {
	createTapList() {
		const tapList = document.createElement('div');

		const tapListContainer = document.createElement('div');
		tapListContainer.classList.add('bordered');
		tapListContainer.classList.add('taplist-container');
		taps.forEach((item) => {
			let tapCard = new _components__WEBPACK_IMPORTED_MODULE_0__.TapCard(
				item.name,
				item.brewer,
				item.abv,
				item.origin,
				item.description
			);
			tapListContainer.appendChild(tapCard.createTapCard());
		});

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
		bannerContainer.classList.add('banner-container');

		const banner = document.createElement('div');
		banner.classList.add('banner');
		const bannerText = document.createElement('div');
		bannerText.classList.add('banner-text');

		const bannerH1 = document.createElement('h1');
		bannerH1.classList.add('banner-heading');
		bannerH1.textContent = 'Tap List';
		bannerText.appendChild(bannerH1);

		const bannerH2 = document.createElement('h2');
		bannerH2.classList.add('banner-tagline');
		bannerH2.textContent = 'Reload with a brew.';
		bannerText.appendChild(bannerH2);

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
	const container = document.querySelector('#container');
	container.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_0__.homeBanner.loadHomeBanner());
	const main = document.createElement('main');
	main.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_0__.about.loadAbout());
	container.appendChild(main);
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
/* harmony export */   "loadTapListPage": () => (/* reexport safe */ _tapListPage__WEBPACK_IMPORTED_MODULE_1__.loadTapListPage),
/* harmony export */   "loadScheduleTourPage": () => (/* reexport safe */ _scheduleTourPage__WEBPACK_IMPORTED_MODULE_2__.loadScheduleTourPage)
/* harmony export */ });
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/pages/homePage.js");
/* harmony import */ var _tapListPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tapListPage */ "./src/pages/tapListPage.js");
/* harmony import */ var _scheduleTourPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduleTourPage */ "./src/pages/scheduleTourPage.js");





/***/ }),

/***/ "./src/pages/scheduleTourPage.js":
/*!***************************************!*\
  !*** ./src/pages/scheduleTourPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadScheduleTourPage": () => (/* binding */ loadScheduleTourPage)
/* harmony export */ });
/* harmony import */ var _layouts_scheduleBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/scheduleBanner */ "./src/layouts/scheduleBanner.js");
/* harmony import */ var _layouts_scheduleForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/scheduleForm */ "./src/layouts/scheduleForm.js");



function loadScheduleTourPage() {
	const container = document.querySelector('#container');
	container.appendChild(_layouts_scheduleBanner__WEBPACK_IMPORTED_MODULE_0__.scheduleBanner.loadScheduleBanner());
	const main = document.createElement('main');
	main.appendChild(_layouts_scheduleForm__WEBPACK_IMPORTED_MODULE_1__.scheduleForm.loadScheduleForm());
	container.appendChild(main);
}




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
	const container = document.querySelector('#container');
	container.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_0__.tapListBanner.loadTapListBanner());
	const main = document.createElement('main');
	main.appendChild(_layouts__WEBPACK_IMPORTED_MODULE_0__.tapList.createTapList());
	container.appendChild(main);
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



const navBar = _components__WEBPACK_IMPORTED_MODULE_1__.nav.loadNav();
const contentDiv = document.querySelector('#content');
const header = document.createElement('header');
header.appendChild(navBar);
contentDiv.appendChild(header);
const container = document.createElement('div');
container.id = 'container';
contentDiv.appendChild(container);

_components__WEBPACK_IMPORTED_MODULE_1__.nav.homeLink.addEventListener('click', () => {
	clearContent();
	console.log('Home Link Clicked');
	(0,_pages__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();
});
_components__WEBPACK_IMPORTED_MODULE_1__.nav.tapListLink.addEventListener('click', () => {
	clearContent();
	console.log('Tap List Link Clicked');
	(0,_pages__WEBPACK_IMPORTED_MODULE_0__.loadTapListPage)();
});
_components__WEBPACK_IMPORTED_MODULE_1__.nav.scheduleLink.addEventListener('click', () => {
	clearContent();
	console.log('Schedule Link Clicked');
	(0,_pages__WEBPACK_IMPORTED_MODULE_0__.loadScheduleTourPage)();
});

function clearContent() {
	const contentDiv = document.querySelector('#content');
	const contentToClear = document.querySelector('#container');
	contentDiv.removeChild(contentToClear);
	const contentToCreate = document.createElement('div');
	contentToCreate.id = 'container';
	contentDiv.appendChild(contentToCreate);
}

(0,_pages__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvdGFwQ2FyZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy9ob21lQmFubmVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYXlvdXRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYXlvdXRzL3NjaGVkdWxlQmFubmVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYXlvdXRzL3NjaGVkdWxlRm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy90YXBMaXN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYXlvdXRzL3RhcExpc3RCYW5uZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvc2NoZWR1bGVUb3VyUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvdGFwTGlzdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBUYXBDYXJkIH0gZnJvbSAnLi90YXBDYXJkJztcbmV4cG9ydCB7IG5hdiB9IGZyb20gJy4vbmF2JzsiLCJcbmNsYXNzIE5hdiB7XG4gICAgaG9tZUxpbms7XG4gICAgdGFwTGlzdExpbms7XG4gICAgc2NoZWR1bGVMaW5rO1xuXG4gICAgbG9hZE5hdigpIHtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgICBjb25zdCBob21lTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyBcbiAgICAgICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgICAgIGhvbWVMaW5rLmhyZWYgPSAnIydcbiAgICAgICAgaG9tZUxpbmsuaWQgPSAnbmF2LWhvbWUnO1xuICAgICAgICBob21lTGkuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChob21lTGkpXG4gICAgICAgIHRoaXMuaG9tZUxpbmsgPSBob21lTGluaztcblxuICAgICAgICBjb25zdCB0YXBMaXN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyBcbiAgICAgICAgY29uc3QgdGFwTGlzdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHRhcExpc3RMaW5rLnRleHRDb250ZW50ID0gJ1RhcCBMaXN0JztcbiAgICAgICAgdGFwTGlzdExpbmsuaHJlZiA9ICcjJ1xuICAgICAgICB0YXBMaXN0TGluay5pZCA9ICduYXYtdGFwLWxpc3QnO1xuICAgICAgICB0YXBMaXN0TGkuYXBwZW5kQ2hpbGQodGFwTGlzdExpbmspO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZCh0YXBMaXN0TGkpO1xuICAgICAgICB0aGlzLnRhcExpc3RMaW5rID0gdGFwTGlzdExpbms7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzY2hlZHVsZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgc2NoZWR1bGVMaW5rLnRleHRDb250ZW50ID0gJ1NjaGVkdWxlIGEgVG91cic7XG4gICAgICAgIHNjaGVkdWxlTGluay5ocmVmID0gJyMnXG4gICAgICAgIHNjaGVkdWxlTGluay5pZCA9ICduYXYtc2NoZWR1bGUnO1xuICAgICAgICBzY2hlZHVsZUxpLmFwcGVuZENoaWxkKHNjaGVkdWxlTGluayk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKHNjaGVkdWxlTGkpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlTGluayA9IHNjaGVkdWxlTGluaztcblxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgICByZXR1cm4gbmF2O1xuICAgIH1cblxuICAgIFxufVxuXG5leHBvcnQgbGV0IG5hdiA9IG5ldyBOYXYoKTtcblxuXG57LyogPG5hdj5cbiAgICA8dWw+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+VGFwIExpc3Q8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWJvdXQgVXM8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2NoZWR1bGUgQSBUb3VyPC9hPjwvbGk+XG4gICAgPC91bD5cbjwvbmF2PiAqL30iLCJpbXBvcnQgdGFwSW1nIGZyb20gJy4uL2JlZXIucG5nJztcblxuY2xhc3MgVGFwQ2FyZCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgYnJld2VyLCBhYnYsIG9yaWdpbiwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5icmV3ZXIgPSBicmV3ZXI7XG4gICAgICAgIHRoaXMuYWJ2ID0gYWJ2O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhcENhcmQoKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd0YXAtY2FyZCcpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgndGFwLWNhcmQtZGV0YWlscycpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50IGZvciBpbWFnZVxuICAgICAgICBpbWFnZS5zcmMgPSB0YXBJbWc7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50IGZvciB0YXAgbmFtZSBoZWFkZXJcbiAgICAgICAgY29uc3QgbmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIG5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQobmFtZUhlYWRlcik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRzIGZvciB0YXBJbmZvXG4gICAgICAgIGNvbnN0IHRhcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWJ2U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgYnJld2VyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgYWJ2U3Bhbi50ZXh0Q29udGVudCA9IGAke3RoaXMuYWJ2fSUgQUJWYDtcbiAgICAgICAgYnJld2VyU3Bhbi50ZXh0Q29udGVudCA9IHRoaXMuYnJld2VyO1xuICAgICAgICBvcmlnaW5TcGFuLnRleHRDb250ZW50ID0gdGhpcy5vcmlnaW47XG4gICAgICAgIHRhcEluZm8uYXBwZW5kQ2hpbGQoYWJ2U3Bhbik7XG4gICAgICAgIHRhcEluZm8uYXBwZW5kQ2hpbGQoYnJld2VyU3Bhbik7XG4gICAgICAgIHRhcEluZm8uYXBwZW5kQ2hpbGQob3JpZ2luU3Bhbik7XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQodGFwSW5mbyk7XG5cbiAgICAgICAgLy9DcmVhdGUgZWxlbWVudCBmb3IgZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmFncmFwaCk7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcblxuICAgICAgICByZXR1cm4gY2FyZDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRhcENhcmQgfTtcbiIsImNsYXNzIEFib3V0IHtcblx0bG9hZEFib3V0KCkge1xuXHRcdGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9yZGVyZWQnKTtcblx0XHRjb25zdCBhYm91dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdFx0Y29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cblx0XHRhYm91dEhlYWRlci50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG5cdFx0YWJvdXRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPVxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEN1cmFiaXR1ciBwdWx2aW5hciBwdXJ1cyBzZWQgbGlndWxhIGNvbnNlY3RldHVyLCBub24gYmliZW5kdW0gbWFzc2EgY3Vyc3VzLiBFdGlhbSBwbGFjZXJhdCBtb2xsaXMgbmlzbCBxdWlzIGVsZWlmZW5kLiBJbnRlZ2VyIGFjIHByZXRpdW0gbGFjdXMuIEN1cmFiaXR1ciB2aXRhZSBtYXhpbXVzIG1ldHVzLiBWaXZhbXVzIGlwc3VtIG5lcXVlLCB0ZW1wdXMgcHJldGl1bSBzb2xsaWNpdHVkaW4gY29uc2VjdGV0dXIsIGVnZXN0YXMgdXQgbGlndWxhLiBQaGFzZWxsdXMgdXQgZWZmaWNpdHVyIG51bmMsIGF0IGNvbnZhbGxpcyBudW5jLiBEb25lYyBlbGVtZW50dW0gbnVsbGEgaW4gcHVsdmluYXIgdGVtcHVzLiBBZW5lYW4gaWQgbmVxdWUgZXJhdC4gSW50ZWdlciBsaWd1bGEgZXN0LCB1bHRyaWNpZXMgc2l0IGFtZXQgZG9sb3IgcGhhcmV0cmEsIGNvbnNlY3RldHVyIHRpbmNpZHVudCBzZW0uIFBoYXNlbGx1cyBsZW8gdmVsaXQsIHNhZ2l0dGlzIGlhY3VsaXMgdmVuZW5hdGlzIGV0LCB2YXJpdXMgYXQgdXJuYS4gUHJhZXNlbnQgdG9ydG9yIG51bmMsIHBsYWNlcmF0IG5lYyBibGFuZGl0IGFjLCBsb2JvcnRpcyBldSBtZXR1cy4nO1xuXHRcdGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0SGVhZGVyKTtcblx0XHRhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFBhcmFncmFwaCk7XG5cblx0XHRhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250YWluZXInKTtcblxuXHRcdHJldHVybiBhYm91dENvbnRhaW5lcjtcblx0fVxufVxuXG5leHBvcnQgbGV0IGFib3V0ID0gbmV3IEFib3V0KCk7XG4iLCJjbGFzcyBIb21lQmFubmVyIHtcblx0bG9hZEhvbWVCYW5uZXIoKSB7XG5cdFx0Y29uc3QgYmFubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YmFubmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1jb250YWluZXInKTtcblxuXHRcdGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGJhbm5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXInKTtcblx0XHRjb25zdCBiYW5uZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YmFubmVyVGV4dC5jbGFzc0xpc3QuYWRkKCdiYW5uZXItdGV4dCcpO1xuXHRcdGNvbnN0IGJhbm5lckgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0XHRiYW5uZXJIMS5jbGFzc0xpc3QuYWRkKCdiYW5uZXItaGVhZGluZycpO1xuXHRcdGJhbm5lckgxLnRleHRDb250ZW50ID0gJ0JhdHRsZWdyb3VuZCBCcmV3aW5nJztcblx0XHRjb25zdCBiYW5uZXJIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdFx0YmFubmVySDIuY2xhc3NMaXN0LmFkZCgnYmFubmVyLXRhZ2xpbmUnKTtcblx0XHRiYW5uZXJIMi50ZXh0Q29udGVudCA9ICdCZWVyIHdvcnRoIGZpZ2h0aW5nIGZvci4nO1xuXHRcdGNvbnN0IGJhbm5lckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGJhbm5lckJ0bi50ZXh0Q29udGVudCA9ICdTY2hlZHVsZSBhIFRvdXInO1xuXG5cdFx0YmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJIMSk7XG5cdFx0YmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJIMik7XG5cdFx0YmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJCdG4pO1xuXG5cdFx0YmFubmVyLmFwcGVuZENoaWxkKGJhbm5lclRleHQpO1xuXHRcdGJhbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChiYW5uZXIpO1xuXG5cdFx0cmV0dXJuIGJhbm5lckNvbnRhaW5lcjtcblx0fVxufVxuXG5leHBvcnQgbGV0IGhvbWVCYW5uZXIgPSBuZXcgSG9tZUJhbm5lcigpO1xuIiwiZXhwb3J0IHsgaG9tZUJhbm5lciB9IGZyb20gJy4vaG9tZUJhbm5lcic7XG5leHBvcnQgeyB0YXBMaXN0IH0gZnJvbSAnLi90YXBMaXN0JztcbmV4cG9ydCB7IHRhcExpc3RCYW5uZXIgfSBmcm9tICcuL3RhcExpc3RCYW5uZXInO1xuZXhwb3J0IHsgYWJvdXQgfSBmcm9tICcuL2Fib3V0JztcbiIsImNsYXNzIFNjaGVkdWxlQmFubmVyIHtcblx0bG9hZFNjaGVkdWxlQmFubmVyKCkge1xuXHRcdGNvbnN0IGJhbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGJhbm5lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXItY29udGFpbmVyJyk7XG5cblx0XHRjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG5cdFx0Y29uc3QgYmFubmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGJhbm5lclRleHQuY2xhc3NMaXN0LmFkZCgnYmFubmVyLXRleHQnKTtcblx0XHRjb25zdCBiYW5uZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdFx0YmFubmVySDEuY2xhc3NMaXN0LmFkZCgnYmFubmVyLWhlYWRpbmcnKTtcblx0XHRiYW5uZXJIMS50ZXh0Q29udGVudCA9ICdUb3VyIFRoZSBCYXR0bGVncm91bmQnO1xuXHRcdGNvbnN0IGJhbm5lckgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0XHRiYW5uZXJIMi5jbGFzc0xpc3QuYWRkKCdiYW5uZXItdGFnbGluZScpO1xuXHRcdGJhbm5lckgyLnRleHRDb250ZW50ID0gJ0JyZXdlZCB3aXRoIHZhbG9yLic7XG5cblx0XHRiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGJhbm5lckgxKTtcblx0XHRiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGJhbm5lckgyKTtcblxuXHRcdGJhbm5lci5hcHBlbmRDaGlsZChiYW5uZXJUZXh0KTtcblx0XHRiYW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVyKTtcblxuXHRcdHJldHVybiBiYW5uZXJDb250YWluZXI7XG5cdH1cbn1cblxuZXhwb3J0IGxldCBzY2hlZHVsZUJhbm5lciA9IG5ldyBTY2hlZHVsZUJhbm5lcigpO1xuIiwiY2xhc3MgU2NoZWR1bGVGb3JtIHtcblx0bG9hZFNjaGVkdWxlRm9ybSgpIHtcblx0XHRjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0Zm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuXHRcdGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9yZGVyZWQnKTtcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG5cdFx0Y29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0XHQvL25hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lOiAnO1xuXHRcdGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0bmFtZUZpZWxkLm5hbWUgPSAnbmFtZSc7XG5cdFx0bmFtZUZpZWxkLnR5cGUgPSAndGV4dCc7XG5cdFx0bmFtZUZpZWxkLnJlcXVpcmVkID0gJ3RydWUnO1xuXHRcdG5hbWVGaWVsZC5wbGFjZWhvbGRlciA9ICdOYW1lJztcblx0XHRuYW1lTGFiZWwuYXBwZW5kQ2hpbGQobmFtZUZpZWxkKTtcblxuXHRcdGNvbnN0IHBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRcdC8vcGhvbmVMYWJlbC50ZXh0Q29udGVudCA9ICdQaG9uZSBOdW1iZXI6ICc7XG5cdFx0Y29uc3QgcGhvbmVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0cGhvbmVGaWVsZC5uYW1lID0gJ3Bob25lJztcblx0XHRwaG9uZUZpZWxkLnR5cGUgPSAncGhvbmUnO1xuXHRcdHBob25lRmllbGQucmVxdWlyZWQgPSAndHJ1ZSc7XG5cdFx0cGhvbmVGaWVsZC5wbGFjZWhvbGRlciA9ICdQaG9uZSc7XG5cdFx0cGhvbmVMYWJlbC5hcHBlbmRDaGlsZChwaG9uZUZpZWxkKTtcblxuXHRcdGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRcdC8vZW1haWxMYWJlbC50ZXh0Q29udGVudCA9ICdFbWFpbDogJztcblx0XHRjb25zdCBlbWFpbEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRlbWFpbEZpZWxkLm5hbWUgPSAnZW1haWwnO1xuXHRcdGVtYWlsRmllbGQudHlwZSA9ICdlbWFpbCc7XG5cdFx0ZW1haWxGaWVsZC5yZXF1aXJlZCA9ICd0cnVlJztcblx0XHRlbWFpbEZpZWxkLnBsYWNlaG9sZGVyID0gJ0VtYWlsJztcblx0XHRlbWFpbExhYmVsLmFwcGVuZENoaWxkKGVtYWlsRmllbGQpO1xuXG5cdFx0Y29uc3QgZGF0ZXRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdFx0Ly9kYXRldGltZUxhYmVsLnRleHRDb250ZW50ID0gJ0RhdGUgYW5kIFRpbWU6ICc7XG5cdFx0Y29uc3QgZGF0ZXRpbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0ZGF0ZXRpbWVGaWVsZC5uYW1lID0gJ2RhdGV0aW1lJztcblx0XHRkYXRldGltZUZpZWxkLnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnO1xuXHRcdC8vIFRPRE86IGFkZCBtaW4gYW5kIG1heCB0aW1lXG5cblx0XHRsZXQgZ2V0RGF0ZSA9ICgpID0+IHtcblx0XHRcdHZhciBkdCA9IG5ldyBEYXRlKCk7XG5cdFx0XHR2YXIgb2ZmID0gZHQuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuXHRcdFx0dmFyIG5ld2R0ID0gbmV3IERhdGUoZHQgLSBvZmYpLnRvSVNPU3RyaW5nKCk7XG5cdFx0XHRyZXR1cm4gbmV3ZHQuc2xpY2UoMCwgMTkpO1xuXHRcdH07XG5cdFx0ZGF0ZXRpbWVGaWVsZC5taW4gPSBnZXREYXRlKCkuc3BsaXQoJy4nKVswXTtcblx0XHRkYXRldGltZUZpZWxkLnN0ZXAgPSA2MDAwMDtcblx0XHRkYXRldGltZUZpZWxkLnJlcXVpcmVkID0gJ3RydWUnO1xuXHRcdGRhdGV0aW1lTGFiZWwuYXBwZW5kQ2hpbGQoZGF0ZXRpbWVGaWVsZCk7XG5cblx0XHRjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdHN1Ym1pdEJ1dHRvbi5uYW1lID0gJ3N1Ym1pdCc7XG5cdFx0c3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0Jztcblx0XHRzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0dCc7XG5cblx0XHRmb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cdFx0Zm9ybS5hcHBlbmRDaGlsZChwaG9uZUxhYmVsKTtcblx0XHRmb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZXRpbWVMYWJlbCk7XG5cdFx0Zm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXHRcdGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cdFx0cmV0dXJuIGZvcm1Db250YWluZXI7XG5cdH1cbn1cblxuZXhwb3J0IGxldCBzY2hlZHVsZUZvcm0gPSBuZXcgU2NoZWR1bGVGb3JtKCk7XG4iLCJpbXBvcnQgeyBUYXBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmNvbnN0IHRhcHMgPSBbXG5cdHtcblx0XHRuYW1lOiBcIk1hbm55J3MgUGFsZSBBbGVcIixcblx0XHRicmV3ZXI6ICdHZW9yZ2V0b3duIEJyZXdlcnknLFxuXHRcdGFidjogJzUnLFxuXHRcdG9yaWdpbjogJ1NlYXR0bGUsIFdBJyxcblx0XHRkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJyxcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiTWFubnkncyBQYWxlIEFsZVwiLFxuXHRcdGJyZXdlcjogJ0dlb3JnZXRvd24gQnJld2VyeScsXG5cdFx0YWJ2OiAnNScsXG5cdFx0b3JpZ2luOiAnU2VhdHRsZSwgV0EnLFxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJNYW5ueSdzIFBhbGUgQWxlXCIsXG5cdFx0YnJld2VyOiAnR2VvcmdldG93biBCcmV3ZXJ5Jyxcblx0XHRhYnY6ICc1Jyxcblx0XHRvcmlnaW46ICdTZWF0dGxlLCBXQScsXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LicsXG5cdH0sXG5dO1xuXG5jbGFzcyBUYXBMaXN0IHtcblx0Y3JlYXRlVGFwTGlzdCgpIHtcblx0XHRjb25zdCB0YXBMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0XHRjb25zdCB0YXBMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGFwTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib3JkZXJlZCcpO1xuXHRcdHRhcExpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFwbGlzdC1jb250YWluZXInKTtcblx0XHR0YXBzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGxldCB0YXBDYXJkID0gbmV3IFRhcENhcmQoXG5cdFx0XHRcdGl0ZW0ubmFtZSxcblx0XHRcdFx0aXRlbS5icmV3ZXIsXG5cdFx0XHRcdGl0ZW0uYWJ2LFxuXHRcdFx0XHRpdGVtLm9yaWdpbixcblx0XHRcdFx0aXRlbS5kZXNjcmlwdGlvblxuXHRcdFx0KTtcblx0XHRcdHRhcExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFwQ2FyZC5jcmVhdGVUYXBDYXJkKCkpO1xuXHRcdH0pO1xuXG5cdFx0Ly90YXBMaXN0LmFwcGVuZENoaWxkKHRhcExpc3RIZWFkaW5nKTtcblx0XHR0YXBMaXN0LmFwcGVuZENoaWxkKHRhcExpc3RDb250YWluZXIpO1xuXHRcdHJldHVybiB0YXBMaXN0O1xuXHR9XG59XG5cbmV4cG9ydCBsZXQgdGFwTGlzdCA9IG5ldyBUYXBMaXN0KCk7XG4iLCJpbXBvcnQgeyBuYXYgfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuY2xhc3MgVGFwTGlzdEJhbm5lciB7XG5cdGxvYWRUYXBMaXN0QmFubmVyKCkge1xuXHRcdGNvbnN0IGJhbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGJhbm5lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXItY29udGFpbmVyJyk7XG5cblx0XHRjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG5cdFx0Y29uc3QgYmFubmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGJhbm5lclRleHQuY2xhc3NMaXN0LmFkZCgnYmFubmVyLXRleHQnKTtcblxuXHRcdGNvbnN0IGJhbm5lckgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0XHRiYW5uZXJIMS5jbGFzc0xpc3QuYWRkKCdiYW5uZXItaGVhZGluZycpO1xuXHRcdGJhbm5lckgxLnRleHRDb250ZW50ID0gJ1RhcCBMaXN0Jztcblx0XHRiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGJhbm5lckgxKTtcblxuXHRcdGNvbnN0IGJhbm5lckgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0XHRiYW5uZXJIMi5jbGFzc0xpc3QuYWRkKCdiYW5uZXItdGFnbGluZScpO1xuXHRcdGJhbm5lckgyLnRleHRDb250ZW50ID0gJ1JlbG9hZCB3aXRoIGEgYnJldy4nO1xuXHRcdGJhbm5lclRleHQuYXBwZW5kQ2hpbGQoYmFubmVySDIpO1xuXG5cdFx0YmFubmVyLmFwcGVuZENoaWxkKGJhbm5lclRleHQpO1xuXHRcdGJhbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChiYW5uZXIpO1xuXG5cdFx0cmV0dXJuIGJhbm5lckNvbnRhaW5lcjtcblx0fVxufVxuXG5leHBvcnQgbGV0IHRhcExpc3RCYW5uZXIgPSBuZXcgVGFwTGlzdEJhbm5lcigpO1xuIiwiaW1wb3J0IHsgaG9tZUJhbm5lciwgYWJvdXQgfSBmcm9tICcuLi9sYXlvdXRzJztcblxuZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQmFubmVyLmxvYWRIb21lQmFubmVyKCkpO1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXHRtYWluLmFwcGVuZENoaWxkKGFib3V0LmxvYWRBYm91dCgpKTtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgeyBsb2FkSG9tZVBhZ2UgfTtcbiIsImV4cG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gJy4vaG9tZVBhZ2UnO1xuZXhwb3J0IHsgbG9hZFRhcExpc3RQYWdlIH0gZnJvbSAnLi90YXBMaXN0UGFnZSc7XG5leHBvcnQgeyBsb2FkU2NoZWR1bGVUb3VyUGFnZSB9IGZyb20gJy4vc2NoZWR1bGVUb3VyUGFnZSc7XG4iLCJpbXBvcnQgeyBzY2hlZHVsZUJhbm5lciB9IGZyb20gJy4uL2xheW91dHMvc2NoZWR1bGVCYW5uZXInO1xuaW1wb3J0IHsgc2NoZWR1bGVGb3JtIH0gZnJvbSAnLi4vbGF5b3V0cy9zY2hlZHVsZUZvcm0nO1xuXG5mdW5jdGlvbiBsb2FkU2NoZWR1bGVUb3VyUGFnZSgpIHtcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoc2NoZWR1bGVCYW5uZXIubG9hZFNjaGVkdWxlQmFubmVyKCkpO1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXHRtYWluLmFwcGVuZENoaWxkKHNjaGVkdWxlRm9ybS5sb2FkU2NoZWR1bGVGb3JtKCkpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCB7IGxvYWRTY2hlZHVsZVRvdXJQYWdlIH07XG4iLCJpbXBvcnQgeyB0YXBMaXN0LCB0YXBMaXN0QmFubmVyIH0gZnJvbSAnLi4vbGF5b3V0cyc7XG5cbmZ1bmN0aW9uIGxvYWRUYXBMaXN0UGFnZSgpIHtcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGFwTGlzdEJhbm5lci5sb2FkVGFwTGlzdEJhbm5lcigpKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblx0bWFpbi5hcHBlbmRDaGlsZCh0YXBMaXN0LmNyZWF0ZVRhcExpc3QoKSk7XG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IHsgbG9hZFRhcExpc3RQYWdlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBsb2FkSG9tZVBhZ2UsIGxvYWRUYXBMaXN0UGFnZSwgbG9hZFNjaGVkdWxlVG91clBhZ2UgfSBmcm9tICcuL3BhZ2VzJztcbmltcG9ydCB7IG5hdiB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmNvbnN0IG5hdkJhciA9IG5hdi5sb2FkTmF2KCk7XG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5pZCA9ICdjb250YWluZXInO1xuY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5uYXYuaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNsZWFyQ29udGVudCgpO1xuXHRjb25zb2xlLmxvZygnSG9tZSBMaW5rIENsaWNrZWQnKTtcblx0bG9hZEhvbWVQYWdlKCk7XG59KTtcbm5hdi50YXBMaXN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0Y2xlYXJDb250ZW50KCk7XG5cdGNvbnNvbGUubG9nKCdUYXAgTGlzdCBMaW5rIENsaWNrZWQnKTtcblx0bG9hZFRhcExpc3RQYWdlKCk7XG59KTtcbm5hdi5zY2hlZHVsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNsZWFyQ29udGVudCgpO1xuXHRjb25zb2xlLmxvZygnU2NoZWR1bGUgTGluayBDbGlja2VkJyk7XG5cdGxvYWRTY2hlZHVsZVRvdXJQYWdlKCk7XG59KTtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuXHRjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblx0Y29uc3QgY29udGVudFRvQ2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5cdGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudFRvQ2xlYXIpO1xuXHRjb25zdCBjb250ZW50VG9DcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29udGVudFRvQ3JlYXRlLmlkID0gJ2NvbnRhaW5lcic7XG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudFRvQ3JlYXRlKTtcbn1cblxubG9hZEhvbWVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=