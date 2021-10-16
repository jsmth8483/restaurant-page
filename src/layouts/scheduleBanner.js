class ScheduleBanner {
	loadScheduleBanner() {
		const bannerContainer = document.createElement('div');
		bannerContainer.classList.add('banner-container');

		const banner = document.createElement('div');
		banner.classList.add('banner');
		const bannerText = document.createElement('div');
		bannerText.classList.add('banner-text');
		const bannerH1 = document.createElement('h1');
		bannerH1.classList.add('banner-heading');
		bannerH1.textContent = 'Tour The Battleground';
		const bannerH2 = document.createElement('h2');
		bannerH2.classList.add('banner-tagline');
		bannerH2.textContent = 'Brewed with valor.';

		bannerText.appendChild(bannerH1);
		bannerText.appendChild(bannerH2);

		banner.appendChild(bannerText);
		bannerContainer.appendChild(banner);

		return bannerContainer;
	}
}

export let scheduleBanner = new ScheduleBanner();
