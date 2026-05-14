const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const formData = {
	email: '',
	message: '',
};

populateForm();

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmit);

function populateForm() {
	const savedState = localStorage.getItem(STORAGE_KEY);

	if (!savedState) {
		return;
	}

	const parsedState = JSON.parse(savedState);

	formData.email = parsedState.email ?? '';
	formData.message = parsedState.message ?? '';

	form.elements.email.value = formData.email;
	form.elements.message.value = formData.message;
}

function handleFormInput(event) {
	const { name, value } = event.target;

	formData[name] = value.trim();

	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleFormSubmit(event) {
	event.preventDefault();

	formData.email = form.elements.email.value.trim();
	formData.message = form.elements.message.value.trim();

	if (!formData.email || !formData.message) {
		alert('Fill please all fields');
		return;
	}

	console.log({ ...formData });

	localStorage.removeItem(STORAGE_KEY);
	form.reset();

	formData.email = '';
	formData.message = '';
}