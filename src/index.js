import { loadHomePage, loadTapListPage } from './pages';

loadHomePage();

function clearContent() {
    const content = document.querySelector('#content');
    document.body.removeChild(content);
}