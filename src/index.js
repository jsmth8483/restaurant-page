import { loadHomePage, loadTapListPage } from './pages';
import { nav } from './components';

loadHomePage();

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