import _throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', _throttle(handelFormInput, 500));
formRef.addEventListener('submit', handelFormSubmit);

let formData = {};

function handelFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  const value = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, value);
}

function handelFormSubmit(evt) {
  evt.preventDefault();
  const savedInputValue = localStorage.getItem(STORAGE_KEY);

  if (savedInputValue) {
    console.log(savedInputValue);
    formData = savedInputValue;
  }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
