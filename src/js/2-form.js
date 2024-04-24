const formData = {
    email: "",
    message: "",
  }
  
  const feedbackFormState = "feedback-form-state";
  
  const formRefs = {
    form:  document.querySelector(".feedback-form"),
    input: document.querySelector(".email-input"),
    textarea: document.querySelector(".textarea"),
  }
  
  formRefs.form.addEventListener('input', onFormInput);
  formRefs.form.addEventListener('submit', onFormSubmit);
  
  function onFormInput(event) {
    event.preventDefault();
    formData.email = formRefs.input.value;
    formData.message = formRefs.textarea.value;
    localStorage.setItem(feedbackFormState, JSON.stringify(formData));
  }
  function refillInputs() {
    const storagedText = localStorage.getItem(feedbackFormState);
    if (storagedText !== null) {
      const { email, message } = JSON.parse(storagedText);
      formRefs.input.value = email;
      formRefs.textarea.value = message;
    }
  }
  refillInputs()
  
  function onFormSubmit(event) {
    event.preventDefault();
    const currentData = {
      email: formRefs.input.value,
      message: formRefs.textarea.value
    };
    if (currentData.email === "" || currentData.message === "") {
      return alert("Fill please all fields");
    }
    event.target.reset();
    localStorage.removeItem(feedbackFormState);
  }
  
  
  