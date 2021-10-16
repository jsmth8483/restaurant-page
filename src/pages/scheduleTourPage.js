import { scheduleBanner } from '../layouts/scheduleBanner';
import { scheduleForm } from '../layouts/scheduleForm';

function loadScheduleTourPage() {
	const container = document.querySelector('#container');
	container.appendChild(scheduleBanner.loadScheduleBanner());
	const main = document.createElement('main');
	main.appendChild(scheduleForm.loadScheduleForm());
	container.appendChild(main);
}

export { loadScheduleTourPage };
