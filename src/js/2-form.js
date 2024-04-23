const localStorageKey = "feedback-form-state";
const formRefs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.email-input'),
    message: document.querySelector('.textarea'),
  };
  const data = {};

  populateTextareaField();
  
  function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(localStorageKey);
  }
  function onFormInput(event) {
    event.preventDefault();
    data[event.target.email] = event.target.value;;
  }
  
  formRefs.form.addEventListener('submit', onFormSubmit);
  formRefs.form.addEventListener('input', onFormInput);

  function onTextareaInput(event) {
    localStorage.setItem(localStorageKey, event.target.value);
  }
  
  formRefs.message.addEventListener('input', _.throttle(onTextareaInput, 300));
  function populateTextareaField() {

    const messageText = localStorage.getItem(localStorageKey);
    if (!messageText) return;
    formRefs.message.value = messageText;
  }