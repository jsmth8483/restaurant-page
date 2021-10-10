import { tapList } from '../layouts';
import { homeBanner } from '../layouts';

function loadHomePage() {
    const content = document.querySelector('#content')
    content.appendChild(homeBanner.loadHomeBanner());
    const main = document.createElement('main');
    main.appendChild(tapList.createTapList())
    content.appendChild(main);
}

export {
    loadHomePage
} 
