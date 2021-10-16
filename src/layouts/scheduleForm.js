class ScheduleForm {
	loadScheduleForm() {
		const formContainer = document.createElement('div');
		formContainer.classList.add('form-container');
		formContainer.classList.add('bordered');
		const form = document.createElement('form');

		const nameLabel = document.createElement('label');
		//nameLabel.textContent = 'Name: ';
		const nameField = document.createElement('input');
		nameField.name = 'name';
		nameField.type = 'text';
		nameField.required = 'true';
		nameField.placeholder = 'Name';
		nameLabel.appendChild(nameField);

		const phoneLabel = document.createElement('label');
		//phoneLabel.textContent = 'Phone Number: ';
		const phoneField = document.createElement('input');
		phoneField.name = 'phone';
		phoneField.type = 'phone';
		phoneField.required = 'true';
		phoneField.placeholder = 'Phone';
		phoneLabel.appendChild(phoneField);

		const emailLabel = document.createElement('label');
		//emailLabel.textContent = 'Email: ';
		const emailField = document.createElement('input');
		emailField.name = 'email';
		emailField.type = 'email';
		emailField.required = 'true';
		emailField.placeholder = 'Email';
		emailLabel.appendChild(emailField);

		const datetimeLabel = document.createElement('label');
		//datetimeLabel.textContent = 'Date and Time: ';
		const datetimeField = document.createElement('input');
		datetimeField.name = 'datetime';
		datetimeField.type = 'datetime-local';
		// TODO: add min and max time

		let getDate = () => {
			var dt = new Date();
			var off = dt.getTimezoneOffset() * 60000;
			var newdt = new Date(dt - off).toISOString();
			return newdt.slice(0, 19);
		};
		datetimeField.min = getDate().split('.')[0];
		datetimeField.step = 60000;
		datetimeField.required = 'true';
		datetimeLabel.appendChild(datetimeField);

		const submitButton = document.createElement('input');
		submitButton.name = 'submit';
		submitButton.type = 'submit';
		submitButton.textContent = 'Submitt';

		form.appendChild(nameLabel);
		form.appendChild(phoneLabel);
		form.appendChild(emailLabel);
		form.appendChild(datetimeLabel);
		form.appendChild(submitButton);
		formContainer.appendChild(form);
		return formContainer;
	}
}

export let scheduleForm = new ScheduleForm();
