import {TapCard} from '../components/tapCard.js';

function loadTapList() {
    const tapCard = new TapCard();
    tapCard.loadTapCard();
}

export default loadTapList;