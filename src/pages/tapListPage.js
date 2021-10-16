import { tapList, tapListBanner } from '../layouts';

function loadTapListPage() {
	const container = document.querySelector('#container');
	container.appendChild(tapListBanner.loadTapListBanner());
	const main = document.createElement('main');
	main.appendChild(tapList.createTapList());
	container.appendChild(main);
}

export { loadTapListPage };
