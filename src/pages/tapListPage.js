import { tapList, tapListBanner } from "../layouts";

function loadTapListPage() {
        const content = document.querySelector('#content');
        content.appendChild(tapListBanner.loadTapListBanner());
        const main = document.createElement('main');
        main.appendChild(tapList.createTapList())
        content.appendChild(main);
    }


export { loadTapListPage };