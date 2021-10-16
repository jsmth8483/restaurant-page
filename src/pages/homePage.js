import { homeBanner, about } from '../layouts';

function loadHomePage() {
	const container = document.querySelector('#container');
	container.appendChild(homeBanner.loadHomeBanner());
	const main = document.createElement('main');
	main.appendChild(about.loadAbout());
	container.appendChild(main);
}

export { loadHomePage };
