class About {
	loadAbout() {
		const aboutContainer = document.createElement('div');
		aboutContainer.classList.add('bordered');
		const aboutHeader = document.createElement('h3');
		const aboutParagraph = document.createElement('p');

		aboutHeader.textContent = 'About Us';
		aboutParagraph.textContent =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar purus sed ligula consectetur, non bibendum massa cursus. Etiam placerat mollis nisl quis eleifend. Integer ac pretium lacus. Curabitur vitae maximus metus. Vivamus ipsum neque, tempus pretium sollicitudin consectetur, egestas ut ligula. Phasellus ut efficitur nunc, at convallis nunc. Donec elementum nulla in pulvinar tempus. Aenean id neque erat. Integer ligula est, ultricies sit amet dolor pharetra, consectetur tincidunt sem. Phasellus leo velit, sagittis iaculis venenatis et, varius at urna. Praesent tortor nunc, placerat nec blandit ac, lobortis eu metus.';
		aboutContainer.appendChild(aboutHeader);
		aboutContainer.appendChild(aboutParagraph);

		aboutContainer.classList.add('about-container');

		return aboutContainer;
	}
}

export let about = new About();
