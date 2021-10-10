import { nav } from '../components';

class TapListBanner {
    loadTapListBanner() {
        const bannerContainer = document.createElement('div');
        bannerContainer.classList.add('tap-list-banner-container');
        const header = document.createElement('header');
        header.appendChild(nav.loadNav());
        bannerContainer.appendChild(header);

        const banner = document.createElement('div');
        banner.classList.add('banner');
        const bannerText = document.createElement('div');
        bannerText.classList.add('banner-text');
        const bannerH1 = document.createElement('h1');
        bannerH1.classList.add('banner-heading');
        bannerH1.textContent = 'Tap List';

        bannerText.appendChild(bannerH1);

        banner.appendChild(bannerText);
        bannerContainer.appendChild(banner);
        
        return bannerContainer;
    }
}

export let tapListBanner = new TapListBanner();