import _throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', _throttle(handelFormInput, 500));
formRef.addEventListener('submit', handelFormSubmit);

const formData = {};
getInputValue();

function handelFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  const value = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, value);
}

function handelFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getInputValue() {
  const savedInputValue = localStorage.getItem(STORAGE_KEY);
  const jsonParse = JSON.parse(savedInputValue);
  console.log(inputRef.value);
  if (savedInputValue) {
    console.log(savedInputValue);
    inputRef.value = jsonParse.email;
    textareaRef.value = jsonParse.message;
  }
}
