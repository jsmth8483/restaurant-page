
class Nav {
    homeLink;
    tapListLink;
    scheduleLink;

    loadNav() {
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');

        const homeLi = document.createElement('li'); 
        const homeLink = document.createElement('a')
        homeLink.textContent = 'Home';
        homeLink.href = '#'
        homeLink.id = 'nav-home';
        homeLi.appendChild(homeLink);
        ul.appendChild(homeLi)
        this.homeLink = homeLink;

        const tapListLi = document.createElement('li'); 
        const tapListLink = document.createElement('a');
        tapListLink.textContent = 'Tap List';
        tapListLink.href = '#'
        tapListLink.id = 'nav-tap-list';
        tapListLi.appendChild(tapListLink);
        ul.appendChild(tapListLi);
        this.tapListLink = tapListLink;
        
        const scheduleLi = document.createElement('li'); 
        const scheduleLink = document.createElement('a');
        scheduleLink.textContent = 'Schedule a Tour';
        scheduleLink.href = '#'
        scheduleLink.id = 'nav-schedule';
        scheduleLi.appendChild(scheduleLink);
        ul.appendChild(scheduleLi);
        this.scheduleLink = scheduleLink;

        nav.appendChild(ul);
        return nav;
    }

    
}

export let nav = new Nav();


{/* <nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tap List</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Schedule A Tour</a></li>
    </ul>
</nav> */}