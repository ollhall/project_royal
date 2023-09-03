export function isValidation() {


  document.addEventListener("DOMContentLoaded", function () {
    function validateForm(event) {
      let form = document.getElementById("contactForm");

      // Проверяем, существует ли форма на странице
      if (!form) {
        return true;
      }

      let nameInput = form.querySelector("#formName");
      let phoneInput = form.querySelector("#formPhone");
      let nameError = form.querySelector("#nameError");
      let phoneError = form.querySelector("#phoneError");
     

      nameError.innerHTML = "";
      phoneError.innerHTML = "";
   
      if (nameInput.value.trim() === "") {
        nameError.innerHTML = "Заповніть поле";
        nameInput.style.border = "1px solid red";
        event.preventDefault(); // Отменяет отправку формы
        return false;
      }

      if (phoneInput.value.trim() === "") {
        phoneError.innerHTML = "Заповніть поле";
        phoneInput.style.border = "1px solid red";
        event.preventDefault(); // Отменяет отправку формы
        return false;
      }

      return true;
    }

    let form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", validateForm);
    }
  });

  //=========================================

  document.addEventListener("DOMContentLoaded", function () {
    function validateForm(event) {
      let form = document.getElementById("revForm");

      // Проверяем, существует ли форма на странице
      if (!form) {
        return true;
      }

      let nameInput = form.querySelector("#formName");
      let messageInput = form.querySelector("#formMessage");
      let nameError = form.querySelector("#nameError");
      let messageError = form.querySelector("#messageError");

      nameError.innerHTML = "";
      messageError.innerHTML = "";

      if (nameInput.value.trim() === "") {
        nameError.innerHTML = "Заповніть поле";
        nameInput.style.border = "1px solid red";
        event.preventDefault(); // Отменяет отправку формы
        return false;
      }

      if (messageInput.value.trim() === "") {
        messageError.innerHTML = "Заповніть поле";
        messageInput.style.border = "1px solid red";
        event.preventDefault(); // Отменяет отправку формы
        return false;
      }

      return true;
    }

    let form = document.getElementById("revForm");
    if (form) {
      form.addEventListener("submit", validateForm);
    }
  });

  //=========================================

  document.addEventListener("DOMContentLoaded", function () {
    function validateForm(event) {
      let form = document.getElementById("popupForm");

      // Проверяем, существует ли форма на странице
      if (!form) {
        return true;
      }

      let nameInput = form.querySelector("#formName");
      let phoneInput = form.querySelector("#formPhone");
      let nameError = form.querySelector("#nameError");
      let phoneError = form.querySelector("#phoneError");

      nameError.innerHTML = "";
      phoneError.innerHTML = "";

      if (nameInput.value.trim() === "") {
        nameError.innerHTML = "Заповніть поле";
        nameInput.style.border = "1px solid red";
        event.preventDefault(); // Отменяет отправку формы
        return false;
      }

      if (phoneInput.value.trim() === "") {
        phoneError.innerHTML = "Заповніть поле";
        phoneInput.style.border = "1px solid red";
        event.preventDefault(); // Отменяет отправку формы
        return false;
      }
      return true;
    }

    let form = document.getElementById("popupForm");
    if (form) {
      form.addEventListener("submit", validateForm);
    }
  });
}
