import { tapList } from '../layouts';
import { homeBannerContainer } from '../layouts';

function loadHomePage() {
    const content = document.querySelector('#content')
    content.appendChild(homeBannerContainer.loadHomeBannerContainer());
    const main = document.createElement('main');
    main.appendChild(tapList.createTapList())
    content.appendChild(main);
}

export {
    loadHomePage
} 
