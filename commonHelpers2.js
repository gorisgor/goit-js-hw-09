import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),o=t.elements.email,r=t.elements.message,a="userEmail",l="userMessage";o.value=localStorage.getItem(a)??"";r.value=localStorage.getItem(l)??"";t.addEventListener("input",e=>{localStorage.setItem(a,e.target.value),localStorage.setItem(l,e.target.value)});t.addEventListener("submit",e=>{e.preventDefault(),console.log(e.target.elements.message.value),localStorage.removeItem(a),localStorage.removeItem(l),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map