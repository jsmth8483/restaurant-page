import { nav } from '../components';
import { tapList } from '../layouts';
import { homeBanner } from '../layouts';
import { loadTapListPage } from '../pages';


function loadHomePage() {
    const content = document.querySelector('#content')
    content.appendChild(homeBanner.loadHomeBanner());
    const main = document.createElement('main');
    main.appendChild(tapList.createTapList())
    content.appendChild(main);
    nav.tapListLink.addEventListener('click', () => {
        clearContent();
        loadTapListPage();
    })
}

function clearContent() {
    const contentToClear = document.querySelector('#content');
    document.body.removeChild(contentToClear);
    const contentToCreate = document.createElement('div');
    contentToCreate.id = 'content';
    document.body.appendChild(contentToCreate)
}

export {
    loadHomePage
} 
