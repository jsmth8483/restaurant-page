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

(0,_pages__WEBPACK_IMPORTED_MODULE_0__.loadScheduleTourPage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNERBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL3RhcENhcmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xheW91dHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xheW91dHMvaG9tZUJhbm5lci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy9zY2hlZHVsZUJhbm5lci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy9zY2hlZHVsZUZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xheW91dHMvdGFwTGlzdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0cy90YXBMaXN0QmFubmVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL3NjaGVkdWxlVG91clBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL3RhcExpc3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgVGFwQ2FyZCB9IGZyb20gJy4vdGFwQ2FyZCc7XG5leHBvcnQgeyBuYXYgfSBmcm9tICcuL25hdic7IiwiXG5jbGFzcyBOYXYge1xuICAgIGhvbWVMaW5rO1xuICAgIHRhcExpc3RMaW5rO1xuICAgIHNjaGVkdWxlTGluaztcblxuICAgIGxvYWROYXYoKSB7XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgICAgY29uc3QgaG9tZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgXG4gICAgICAgIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICBob21lTGluay5ocmVmID0gJyMnXG4gICAgICAgIGhvbWVMaW5rLmlkID0gJ25hdi1ob21lJztcbiAgICAgICAgaG9tZUxpLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoaG9tZUxpKVxuICAgICAgICB0aGlzLmhvbWVMaW5rID0gaG9tZUxpbms7XG5cbiAgICAgICAgY29uc3QgdGFwTGlzdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgXG4gICAgICAgIGNvbnN0IHRhcExpc3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICB0YXBMaXN0TGluay50ZXh0Q29udGVudCA9ICdUYXAgTGlzdCc7XG4gICAgICAgIHRhcExpc3RMaW5rLmhyZWYgPSAnIydcbiAgICAgICAgdGFwTGlzdExpbmsuaWQgPSAnbmF2LXRhcC1saXN0JztcbiAgICAgICAgdGFwTGlzdExpLmFwcGVuZENoaWxkKHRhcExpc3RMaW5rKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQodGFwTGlzdExpKTtcbiAgICAgICAgdGhpcy50YXBMaXN0TGluayA9IHRhcExpc3RMaW5rO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IFxuICAgICAgICBjb25zdCBzY2hlZHVsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHNjaGVkdWxlTGluay50ZXh0Q29udGVudCA9ICdTY2hlZHVsZSBhIFRvdXInO1xuICAgICAgICBzY2hlZHVsZUxpbmsuaHJlZiA9ICcjJ1xuICAgICAgICBzY2hlZHVsZUxpbmsuaWQgPSAnbmF2LXNjaGVkdWxlJztcbiAgICAgICAgc2NoZWR1bGVMaS5hcHBlbmRDaGlsZChzY2hlZHVsZUxpbmspO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChzY2hlZHVsZUxpKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZUxpbmsgPSBzY2hlZHVsZUxpbms7XG5cbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgcmV0dXJuIG5hdjtcbiAgICB9XG5cbiAgICBcbn1cblxuZXhwb3J0IGxldCBuYXYgPSBuZXcgTmF2KCk7XG5cblxuey8qIDxuYXY+XG4gICAgPHVsPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlRhcCBMaXN0PC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFib3V0IFVzPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNjaGVkdWxlIEEgVG91cjwvYT48L2xpPlxuICAgIDwvdWw+XG48L25hdj4gKi99IiwiaW1wb3J0IHRhcEltZyBmcm9tICcuLi9iZWVyLnBuZyc7XG5cbmNsYXNzIFRhcENhcmQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGJyZXdlciwgYWJ2LCBvcmlnaW4sIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYnJld2VyID0gYnJld2VyO1xuICAgICAgICB0aGlzLmFidiA9IGFidjtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBvcmlnaW47XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBjcmVhdGVUYXBDYXJkKCkge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgndGFwLWNhcmQnKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ3RhcC1jYXJkLWRldGFpbHMnKTtcblxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudCBmb3IgaW1hZ2VcbiAgICAgICAgaW1hZ2Uuc3JjID0gdGFwSW1nO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudCBmb3IgdGFwIG5hbWUgaGVhZGVyXG4gICAgICAgIGNvbnN0IG5hbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBuYW1lSGVhZGVyLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKG5hbWVIZWFkZXIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50cyBmb3IgdGFwSW5mb1xuICAgICAgICBjb25zdCB0YXBJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFidlNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGJyZXdlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IG9yaWdpblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGFidlNwYW4udGV4dENvbnRlbnQgPSBgJHt0aGlzLmFidn0lIEFCVmA7XG4gICAgICAgIGJyZXdlclNwYW4udGV4dENvbnRlbnQgPSB0aGlzLmJyZXdlcjtcbiAgICAgICAgb3JpZ2luU3Bhbi50ZXh0Q29udGVudCA9IHRoaXMub3JpZ2luO1xuICAgICAgICB0YXBJbmZvLmFwcGVuZENoaWxkKGFidlNwYW4pO1xuICAgICAgICB0YXBJbmZvLmFwcGVuZENoaWxkKGJyZXdlclNwYW4pO1xuICAgICAgICB0YXBJbmZvLmFwcGVuZENoaWxkKG9yaWdpblNwYW4pO1xuICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKHRhcEluZm8pO1xuXG4gICAgICAgIC8vQ3JlYXRlIGVsZW1lbnQgZm9yIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhZ3JhcGgpO1xuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XG5cbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUYXBDYXJkIH07XG4iLCJjbGFzcyBBYm91dCB7XG5cdGxvYWRBYm91dCgpIHtcblx0XHRjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvcmRlcmVkJyk7XG5cdFx0Y29uc3QgYWJvdXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRcdGNvbnN0IGFib3V0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG5cdFx0YWJvdXRIZWFkZXIudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuXHRcdGFib3V0UGFyYWdyYXBoLnRleHRDb250ZW50ID1cblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDdXJhYml0dXIgcHVsdmluYXIgcHVydXMgc2VkIGxpZ3VsYSBjb25zZWN0ZXR1ciwgbm9uIGJpYmVuZHVtIG1hc3NhIGN1cnN1cy4gRXRpYW0gcGxhY2VyYXQgbW9sbGlzIG5pc2wgcXVpcyBlbGVpZmVuZC4gSW50ZWdlciBhYyBwcmV0aXVtIGxhY3VzLiBDdXJhYml0dXIgdml0YWUgbWF4aW11cyBtZXR1cy4gVml2YW11cyBpcHN1bSBuZXF1ZSwgdGVtcHVzIHByZXRpdW0gc29sbGljaXR1ZGluIGNvbnNlY3RldHVyLCBlZ2VzdGFzIHV0IGxpZ3VsYS4gUGhhc2VsbHVzIHV0IGVmZmljaXR1ciBudW5jLCBhdCBjb252YWxsaXMgbnVuYy4gRG9uZWMgZWxlbWVudHVtIG51bGxhIGluIHB1bHZpbmFyIHRlbXB1cy4gQWVuZWFuIGlkIG5lcXVlIGVyYXQuIEludGVnZXIgbGlndWxhIGVzdCwgdWx0cmljaWVzIHNpdCBhbWV0IGRvbG9yIHBoYXJldHJhLCBjb25zZWN0ZXR1ciB0aW5jaWR1bnQgc2VtLiBQaGFzZWxsdXMgbGVvIHZlbGl0LCBzYWdpdHRpcyBpYWN1bGlzIHZlbmVuYXRpcyBldCwgdmFyaXVzIGF0IHVybmEuIFByYWVzZW50IHRvcnRvciBudW5jLCBwbGFjZXJhdCBuZWMgYmxhbmRpdCBhYywgbG9ib3J0aXMgZXUgbWV0dXMuJztcblx0XHRhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEhlYWRlcik7XG5cdFx0YWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRQYXJhZ3JhcGgpO1xuXG5cdFx0YWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGFpbmVyJyk7XG5cblx0XHRyZXR1cm4gYWJvdXRDb250YWluZXI7XG5cdH1cbn1cblxuZXhwb3J0IGxldCBhYm91dCA9IG5ldyBBYm91dCgpO1xuIiwiY2xhc3MgSG9tZUJhbm5lciB7XG5cdGxvYWRIb21lQmFubmVyKCkge1xuXHRcdGNvbnN0IGJhbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGJhbm5lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXItY29udGFpbmVyJyk7XG5cblx0XHRjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG5cdFx0Y29uc3QgYmFubmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGJhbm5lclRleHQuY2xhc3NMaXN0LmFkZCgnYmFubmVyLXRleHQnKTtcblx0XHRjb25zdCBiYW5uZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdFx0YmFubmVySDEuY2xhc3NMaXN0LmFkZCgnYmFubmVyLWhlYWRpbmcnKTtcblx0XHRiYW5uZXJIMS50ZXh0Q29udGVudCA9ICdCYXR0bGVncm91bmQgQnJld2luZyc7XG5cdFx0Y29uc3QgYmFubmVySDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRcdGJhbm5lckgyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci10YWdsaW5lJyk7XG5cdFx0YmFubmVySDIudGV4dENvbnRlbnQgPSAnQmVlciB3b3J0aCBmaWdodGluZyBmb3IuJztcblx0XHRjb25zdCBiYW5uZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRiYW5uZXJCdG4udGV4dENvbnRlbnQgPSAnU2NoZWR1bGUgYSBUb3VyJztcblxuXHRcdGJhbm5lclRleHQuYXBwZW5kQ2hpbGQoYmFubmVySDEpO1xuXHRcdGJhbm5lclRleHQuYXBwZW5kQ2hpbGQoYmFubmVySDIpO1xuXHRcdGJhbm5lclRleHQuYXBwZW5kQ2hpbGQoYmFubmVyQnRuKTtcblxuXHRcdGJhbm5lci5hcHBlbmRDaGlsZChiYW5uZXJUZXh0KTtcblx0XHRiYW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVyKTtcblxuXHRcdHJldHVybiBiYW5uZXJDb250YWluZXI7XG5cdH1cbn1cblxuZXhwb3J0IGxldCBob21lQmFubmVyID0gbmV3IEhvbWVCYW5uZXIoKTtcbiIsImV4cG9ydCB7IGhvbWVCYW5uZXIgfSBmcm9tICcuL2hvbWVCYW5uZXInO1xuZXhwb3J0IHsgdGFwTGlzdCB9IGZyb20gJy4vdGFwTGlzdCc7XG5leHBvcnQgeyB0YXBMaXN0QmFubmVyIH0gZnJvbSAnLi90YXBMaXN0QmFubmVyJztcbmV4cG9ydCB7IGFib3V0IH0gZnJvbSAnLi9hYm91dCc7XG4iLCJjbGFzcyBTY2hlZHVsZUJhbm5lciB7XG5cdGxvYWRTY2hlZHVsZUJhbm5lcigpIHtcblx0XHRjb25zdCBiYW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRiYW5uZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyLWNvbnRhaW5lcicpO1xuXG5cdFx0Y29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicpO1xuXHRcdGNvbnN0IGJhbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRiYW5uZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci10ZXh0Jyk7XG5cdFx0Y29uc3QgYmFubmVySDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHRcdGJhbm5lckgxLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1oZWFkaW5nJyk7XG5cdFx0YmFubmVySDEudGV4dENvbnRlbnQgPSAnVG91ciBUaGUgQmF0dGxlZ3JvdW5kJztcblx0XHRjb25zdCBiYW5uZXJIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdFx0YmFubmVySDIuY2xhc3NMaXN0LmFkZCgnYmFubmVyLXRhZ2xpbmUnKTtcblx0XHRiYW5uZXJIMi50ZXh0Q29udGVudCA9ICdCcmV3ZWQgd2l0aCB2YWxvci4nO1xuXG5cdFx0YmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJIMSk7XG5cdFx0YmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJIMik7XG5cblx0XHRiYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVyVGV4dCk7XG5cdFx0YmFubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhbm5lcik7XG5cblx0XHRyZXR1cm4gYmFubmVyQ29udGFpbmVyO1xuXHR9XG59XG5cbmV4cG9ydCBsZXQgc2NoZWR1bGVCYW5uZXIgPSBuZXcgU2NoZWR1bGVCYW5uZXIoKTtcbiIsImNsYXNzIFNjaGVkdWxlRm9ybSB7XG5cdGxvYWRTY2hlZHVsZUZvcm0oKSB7XG5cdFx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcblx0XHRmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvcmRlcmVkJyk7XG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuXHRcdGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdFx0Ly9uYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTogJztcblx0XHRjb25zdCBuYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdG5hbWVGaWVsZC5uYW1lID0gJ25hbWUnO1xuXHRcdG5hbWVGaWVsZC50eXBlID0gJ3RleHQnO1xuXHRcdG5hbWVGaWVsZC5yZXF1aXJlZCA9ICd0cnVlJztcblx0XHRuYW1lRmllbGQucGxhY2Vob2xkZXIgPSAnTmFtZSc7XG5cdFx0bmFtZUxhYmVsLmFwcGVuZENoaWxkKG5hbWVGaWVsZCk7XG5cblx0XHRjb25zdCBwaG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0XHQvL3Bob25lTGFiZWwudGV4dENvbnRlbnQgPSAnUGhvbmUgTnVtYmVyOiAnO1xuXHRcdGNvbnN0IHBob25lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdHBob25lRmllbGQubmFtZSA9ICdwaG9uZSc7XG5cdFx0cGhvbmVGaWVsZC50eXBlID0gJ3Bob25lJztcblx0XHRwaG9uZUZpZWxkLnJlcXVpcmVkID0gJ3RydWUnO1xuXHRcdHBob25lRmllbGQucGxhY2Vob2xkZXIgPSAnUGhvbmUnO1xuXHRcdHBob25lTGFiZWwuYXBwZW5kQ2hpbGQocGhvbmVGaWVsZCk7XG5cblx0XHRjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0XHQvL2VtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRW1haWw6ICc7XG5cdFx0Y29uc3QgZW1haWxGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0ZW1haWxGaWVsZC5uYW1lID0gJ2VtYWlsJztcblx0XHRlbWFpbEZpZWxkLnR5cGUgPSAnZW1haWwnO1xuXHRcdGVtYWlsRmllbGQucmVxdWlyZWQgPSAndHJ1ZSc7XG5cdFx0ZW1haWxGaWVsZC5wbGFjZWhvbGRlciA9ICdFbWFpbCc7XG5cdFx0ZW1haWxMYWJlbC5hcHBlbmRDaGlsZChlbWFpbEZpZWxkKTtcblxuXHRcdGNvbnN0IGRhdGV0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRcdC8vZGF0ZXRpbWVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlIGFuZCBUaW1lOiAnO1xuXHRcdGNvbnN0IGRhdGV0aW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdGRhdGV0aW1lRmllbGQubmFtZSA9ICdkYXRldGltZSc7XG5cdFx0ZGF0ZXRpbWVGaWVsZC50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJztcblx0XHQvLyBUT0RPOiBhZGQgbWluIGFuZCBtYXggdGltZVxuXG5cdFx0bGV0IGdldERhdGUgPSAoKSA9PiB7XG5cdFx0XHR2YXIgZHQgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0dmFyIG9mZiA9IGR0LmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcblx0XHRcdHZhciBuZXdkdCA9IG5ldyBEYXRlKGR0IC0gb2ZmKS50b0lTT1N0cmluZygpO1xuXHRcdFx0cmV0dXJuIG5ld2R0LnNsaWNlKDAsIDE5KTtcblx0XHR9O1xuXHRcdGRhdGV0aW1lRmllbGQubWluID0gZ2V0RGF0ZSgpLnNwbGl0KCcuJylbMF07XG5cdFx0ZGF0ZXRpbWVGaWVsZC5zdGVwID0gNjAwMDA7XG5cdFx0ZGF0ZXRpbWVGaWVsZC5yZXF1aXJlZCA9ICd0cnVlJztcblx0XHRkYXRldGltZUxhYmVsLmFwcGVuZENoaWxkKGRhdGV0aW1lRmllbGQpO1xuXG5cdFx0Y29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRzdWJtaXRCdXR0b24ubmFtZSA9ICdzdWJtaXQnO1xuXHRcdHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG5cdFx0c3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdHQnO1xuXG5cdFx0Zm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQocGhvbmVMYWJlbCk7XG5cdFx0Zm9ybS5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcblx0XHRmb3JtLmFwcGVuZENoaWxkKGRhdGV0aW1lTGFiZWwpO1xuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblx0XHRmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXHRcdHJldHVybiBmb3JtQ29udGFpbmVyO1xuXHR9XG59XG5cbmV4cG9ydCBsZXQgc2NoZWR1bGVGb3JtID0gbmV3IFNjaGVkdWxlRm9ybSgpO1xuIiwiaW1wb3J0IHsgVGFwQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5jb25zdCB0YXBzID0gW1xuXHR7XG5cdFx0bmFtZTogXCJNYW5ueSdzIFBhbGUgQWxlXCIsXG5cdFx0YnJld2VyOiAnR2VvcmdldG93biBCcmV3ZXJ5Jyxcblx0XHRhYnY6ICc1Jyxcblx0XHRvcmlnaW46ICdTZWF0dGxlLCBXQScsXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LicsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIk1hbm55J3MgUGFsZSBBbGVcIixcblx0XHRicmV3ZXI6ICdHZW9yZ2V0b3duIEJyZXdlcnknLFxuXHRcdGFidjogJzUnLFxuXHRcdG9yaWdpbjogJ1NlYXR0bGUsIFdBJyxcblx0XHRkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJyxcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiTWFubnkncyBQYWxlIEFsZVwiLFxuXHRcdGJyZXdlcjogJ0dlb3JnZXRvd24gQnJld2VyeScsXG5cdFx0YWJ2OiAnNScsXG5cdFx0b3JpZ2luOiAnU2VhdHRsZSwgV0EnLFxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nLFxuXHR9LFxuXTtcblxuY2xhc3MgVGFwTGlzdCB7XG5cdGNyZWF0ZVRhcExpc3QoKSB7XG5cdFx0Y29uc3QgdGFwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdFx0Y29uc3QgdGFwTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRhcExpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9yZGVyZWQnKTtcblx0XHR0YXBMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhcGxpc3QtY29udGFpbmVyJyk7XG5cdFx0dGFwcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRsZXQgdGFwQ2FyZCA9IG5ldyBUYXBDYXJkKFxuXHRcdFx0XHRpdGVtLm5hbWUsXG5cdFx0XHRcdGl0ZW0uYnJld2VyLFxuXHRcdFx0XHRpdGVtLmFidixcblx0XHRcdFx0aXRlbS5vcmlnaW4sXG5cdFx0XHRcdGl0ZW0uZGVzY3JpcHRpb25cblx0XHRcdCk7XG5cdFx0XHR0YXBMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhcENhcmQuY3JlYXRlVGFwQ2FyZCgpKTtcblx0XHR9KTtcblxuXHRcdC8vdGFwTGlzdC5hcHBlbmRDaGlsZCh0YXBMaXN0SGVhZGluZyk7XG5cdFx0dGFwTGlzdC5hcHBlbmRDaGlsZCh0YXBMaXN0Q29udGFpbmVyKTtcblx0XHRyZXR1cm4gdGFwTGlzdDtcblx0fVxufVxuXG5leHBvcnQgbGV0IHRhcExpc3QgPSBuZXcgVGFwTGlzdCgpO1xuIiwiaW1wb3J0IHsgbmF2IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmNsYXNzIFRhcExpc3RCYW5uZXIge1xuXHRsb2FkVGFwTGlzdEJhbm5lcigpIHtcblx0XHRjb25zdCBiYW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRiYW5uZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyLWNvbnRhaW5lcicpO1xuXG5cdFx0Y29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicpO1xuXHRcdGNvbnN0IGJhbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRiYW5uZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci10ZXh0Jyk7XG5cblx0XHRjb25zdCBiYW5uZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdFx0YmFubmVySDEuY2xhc3NMaXN0LmFkZCgnYmFubmVyLWhlYWRpbmcnKTtcblx0XHRiYW5uZXJIMS50ZXh0Q29udGVudCA9ICdUYXAgTGlzdCc7XG5cdFx0YmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJIMSk7XG5cblx0XHRjb25zdCBiYW5uZXJIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdFx0YmFubmVySDIuY2xhc3NMaXN0LmFkZCgnYmFubmVyLXRhZ2xpbmUnKTtcblx0XHRiYW5uZXJIMi50ZXh0Q29udGVudCA9ICdSZWxvYWQgd2l0aCBhIGJyZXcuJztcblx0XHRiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGJhbm5lckgyKTtcblxuXHRcdGJhbm5lci5hcHBlbmRDaGlsZChiYW5uZXJUZXh0KTtcblx0XHRiYW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVyKTtcblxuXHRcdHJldHVybiBiYW5uZXJDb250YWluZXI7XG5cdH1cbn1cblxuZXhwb3J0IGxldCB0YXBMaXN0QmFubmVyID0gbmV3IFRhcExpc3RCYW5uZXIoKTtcbiIsImltcG9ydCB7IGhvbWVCYW5uZXIsIGFib3V0IH0gZnJvbSAnLi4vbGF5b3V0cyc7XG5cbmZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUJhbm5lci5sb2FkSG9tZUJhbm5lcigpKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblx0bWFpbi5hcHBlbmRDaGlsZChhYm91dC5sb2FkQWJvdXQoKSk7XG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IHsgbG9hZEhvbWVQYWdlIH07XG4iLCJleHBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tICcuL2hvbWVQYWdlJztcbmV4cG9ydCB7IGxvYWRUYXBMaXN0UGFnZSB9IGZyb20gJy4vdGFwTGlzdFBhZ2UnO1xuZXhwb3J0IHsgbG9hZFNjaGVkdWxlVG91clBhZ2UgfSBmcm9tICcuL3NjaGVkdWxlVG91clBhZ2UnO1xuIiwiaW1wb3J0IHsgc2NoZWR1bGVCYW5uZXIgfSBmcm9tICcuLi9sYXlvdXRzL3NjaGVkdWxlQmFubmVyJztcbmltcG9ydCB7IHNjaGVkdWxlRm9ybSB9IGZyb20gJy4uL2xheW91dHMvc2NoZWR1bGVGb3JtJztcblxuZnVuY3Rpb24gbG9hZFNjaGVkdWxlVG91clBhZ2UoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHNjaGVkdWxlQmFubmVyLmxvYWRTY2hlZHVsZUJhbm5lcigpKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblx0bWFpbi5hcHBlbmRDaGlsZChzY2hlZHVsZUZvcm0ubG9hZFNjaGVkdWxlRm9ybSgpKTtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgeyBsb2FkU2NoZWR1bGVUb3VyUGFnZSB9O1xuIiwiaW1wb3J0IHsgdGFwTGlzdCwgdGFwTGlzdEJhbm5lciB9IGZyb20gJy4uL2xheW91dHMnO1xuXG5mdW5jdGlvbiBsb2FkVGFwTGlzdFBhZ2UoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRhcExpc3RCYW5uZXIubG9hZFRhcExpc3RCYW5uZXIoKSk7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cdG1haW4uYXBwZW5kQ2hpbGQodGFwTGlzdC5jcmVhdGVUYXBMaXN0KCkpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCB7IGxvYWRUYXBMaXN0UGFnZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgbG9hZEhvbWVQYWdlLCBsb2FkVGFwTGlzdFBhZ2UsIGxvYWRTY2hlZHVsZVRvdXJQYWdlIH0gZnJvbSAnLi9wYWdlcyc7XG5pbXBvcnQgeyBuYXYgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5jb25zdCBuYXZCYXIgPSBuYXYubG9hZE5hdigpO1xuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbmhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxubmF2LmhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRjbGVhckNvbnRlbnQoKTtcblx0Y29uc29sZS5sb2coJ0hvbWUgTGluayBDbGlja2VkJyk7XG5cdGxvYWRIb21lUGFnZSgpO1xufSk7XG5uYXYudGFwTGlzdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNsZWFyQ29udGVudCgpO1xuXHRjb25zb2xlLmxvZygnVGFwIExpc3QgTGluayBDbGlja2VkJyk7XG5cdGxvYWRUYXBMaXN0UGFnZSgpO1xufSk7XG5uYXYuc2NoZWR1bGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRjbGVhckNvbnRlbnQoKTtcblx0Y29uc29sZS5sb2coJ1NjaGVkdWxlIExpbmsgQ2xpY2tlZCcpO1xuXHRsb2FkU2NoZWR1bGVUb3VyUGFnZSgpO1xufSk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcblx0Y29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cdGNvbnN0IGNvbnRlbnRUb0NsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuXHRjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnRUb0NsZWFyKTtcblx0Y29uc3QgY29udGVudFRvQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRlbnRUb0NyZWF0ZS5pZCA9ICdjb250YWluZXInO1xuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRlbnRUb0NyZWF0ZSk7XG59XG5cbmxvYWRTY2hlZHVsZVRvdXJQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=