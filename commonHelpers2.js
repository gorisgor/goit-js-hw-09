import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o="feedback-form-state",t={form:document.querySelector(".feedback-form"),input:document.querySelector('input[type="email"]'),message:document.querySelector("textarea")},a={};u();function r(e){e.preventDefault(),console.log("✅ Data send successfully"),e.currentTarget.reset(),localStorage.removeItem(o)}function n(e){e.preventDefault(),console.log(e.target.email),console.log(e.target.value),a[e.target.email]=e.target.value,console.log(a)}t.form.addEventListener("submit",r);t.form.addEventListener("input",n);function l(e){localStorage.setItem(o,e.target.value)}t.message.addEventListener("input",l);function u(){const e=localStorage.getItem(o);e&&(t.message.value=e)}
//# sourceMappingURL=commonHelpers2.js.map
