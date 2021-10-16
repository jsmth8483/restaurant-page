import { loadHomePage, loadTapListPage, loadScheduleTourPage } from './pages';
import { nav } from './components';

const navBar = nav.loadNav();
const contentDiv = document.querySelector('#content');
const header = document.createElement('header');
header.appendChild(navBar);
contentDiv.appendChild(header);
const container = document.createElement('div');
container.id = 'container';
contentDiv.appendChild(container);

nav.homeLink.addEventListener('click', () => {
	clearContent();
	console.log('Home Link Clicked');
	loadHomePage();
});
nav.tapListLink.addEventListener('click', () => {
	clearContent();
	console.log('Tap List Link Clicked');
	loadTapListPage();
});
nav.scheduleLink.addEventListener('click', () => {
	clearContent();
	console.log('Schedule Link Clicked');
	loadScheduleTourPage();
});

function clearContent() {
	const contentDiv = document.querySelector('#content');
	const contentToClear = document.querySelector('#container');
	contentDiv.removeChild(contentToClear);
	const contentToCreate = document.createElement('div');
	contentToCreate.id = 'container';
	contentDiv.appendChild(contentToCreate);
}

loadScheduleTourPage();
