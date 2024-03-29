import { nav } from '../components';

class TapListBanner {
	loadTapListBanner() {
		const bannerContainer = document.createElement('div');
		bannerContainer.classList.add('banner-container');

		const banner = document.createElement('div');
		banner.classList.add('banner');
		const bannerText = document.createElement('div');
		bannerText.classList.add('banner-text');

		const bannerH1 = document.createElement('h1');
		bannerH1.classList.add('banner-heading');
		bannerH1.textContent = 'Tap List';
		bannerText.appendChild(bannerH1);

		const bannerH2 = document.createElement('h2');
		bannerH2.classList.add('banner-tagline');
		bannerH2.textContent = 'Reload with a brew.';
		bannerText.appendChild(bannerH2);

		banner.appendChild(bannerText);
		bannerContainer.appendChild(banner);

		return bannerContainer;
	}
}

export let tapListBanner = new TapListBanner();
