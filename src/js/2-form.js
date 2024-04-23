const form = document.querySelector(".feedback-form");
const userEmail = form.elements.email
const textarea = form.elements.message;
const localStorageEmail = "userEmail";
const localStorageMessage = "userMessage"
userEmail.value = localStorage.getItem(localStorageEmail) ?? "";
textarea.value = localStorage.getItem(localStorageMessage) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageEmail, evt.target.value);
  localStorage.setItem(localStorageMessage, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
    console.log(evt.target.elements.email.value);
	console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageEmail);
  localStorage.removeItem(localStorageMessage);
  form.reset();
});
