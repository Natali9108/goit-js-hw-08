import _throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const refs = {
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', _throttle(handelFormInput, 500));
formRef.addEventListener('submit', handelFormSubmit);

let formData = {};
getInputValue();

function handelFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handelFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getInputValue() {
  const savedInputValue = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedInputValue) {
    formData = savedInputValue;
    console.log(formData);
    formData.email === undefined ? {} : (refs.input.value = formData.email);
    formData.message === undefined
      ? {}
      : (refs.textarea.value = formData.message);
  }
}
