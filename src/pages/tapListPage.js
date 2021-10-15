import { tapList, tapListBanner } from "../layouts";
import { nav } from '../components';
import { loadHomePage } from '../pages';



function loadTapListPage() {
    const content = document.querySelector('#content');
    content.appendChild(tapListBanner.loadTapListBanner());
    const main = document.createElement('main');
    main.appendChild(tapList.createTapList())
    content.appendChild(main);

    nav.homeLink.addEventListener('click', () => {
        clearContent();
        loadHomePage();
    })
}

function clearContent() {
    const contentToClear = document.querySelector('#content');
    document.body.removeChild(contentToClear);
    const contentToCreate = document.createElement('div');
    contentToCreate.id = 'content';
    document.body.appendChild(contentToCreate)
}

export { loadTapListPage };