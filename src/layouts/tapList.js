import { TapCard } from '../components';

const taps = [
    {
        name: 'Manny\'s Pale Ale', 
        brewer: 'Georgetown Brewery', 
        abv: '5', 
        origin: 'Seattle, WA', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        name: 'Manny\'s Pale Ale', 
        brewer: 'Georgetown Brewery', 
        abv: '5', 
        origin: 'Seattle, WA', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        name: 'Manny\'s Pale Ale', 
        brewer: 'Georgetown Brewery', 
        abv: '5', 
        origin: 'Seattle, WA', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
]

class TapList {
    createTapList() {
        const tapList = document.createElement('div');
        const tapListHeading = document.createElement('h3');
        tapListHeading.textContent = 'Tap List';
        
        const tapListContainer = document.createElement('div');
        tapListContainer.classList.add('taplist-container');
        taps.forEach((item) => {
            let tapCard = new TapCard(item.name, item.brewer, item.abv, item.origin, item.description);
            tapListContainer.appendChild(tapCard.createTapCard());
        })   

        tapList.appendChild(tapListHeading);
        tapList.appendChild(tapListContainer);
        return tapList;
    }
}


export let tapList = new TapList();