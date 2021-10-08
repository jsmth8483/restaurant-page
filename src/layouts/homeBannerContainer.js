import { nav } from '../components';
class HomeBannerContainer {

    loadHomeBannerContainer() {
        const bannerContainer = document.createElement('div');
        bannerContainer.classList.add('banner-container');
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

export let homeBannerContainer = new HomeBannerContainer();

{/* <div class="banner-container">
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Tap List</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Schedule A Tour</a></li>
            </ul>
        </nav>
    </header>
    <div class="banner">
        <div class="banner-text">
            <h1 class="banner-heading">Battleground Brewing</h1>
            <h2 class="banner-tagline">Beer worth fighting for.</h2>
            <button>View Tap List</button>
        </div>
    </div>
</div> */}