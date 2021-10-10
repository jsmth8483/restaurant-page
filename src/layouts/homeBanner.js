import { nav } from '../components';
class HomeBanner {

    loadHomeBanner() {
        const bannerContainer = document.createElement('div');
        bannerContainer.classList.add('home-banner-container');
        const header = document.createElement('header');
        header.appendChild(nav.loadNav());
        bannerContainer.appendChild(header);

        const banner = document.createElement('div');
        banner.classList.add('banner');
        const bannerText = document.createElement('div');
        bannerText.classList.add('banner-text');
        const bannerH1 = document.createElement('h1');
        bannerH1.classList.add('banner-heading');
        bannerH1.textContent = 'Battleground Brewing';
        const bannerH2 = document.createElement('h2');
        bannerH2.classList.add('banner-tagline');
        bannerH2.textContent = 'Beer worth fighting for.';
        const bannerBtn = document.createElement('button');
        bannerBtn.textContent = 'View Tap List';

        bannerText.appendChild(bannerH1);
        bannerText.appendChild(bannerH2);
        bannerText.appendChild(bannerBtn);

        banner.appendChild(bannerText);
        bannerContainer.appendChild(banner);
        
        return bannerContainer;
    }
}

export let homeBanner = new HomeBanner();