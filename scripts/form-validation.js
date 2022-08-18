"user strict";
const quoteForm = document.querySelector("#quotes");
const contactForm = document.querySelector("#contact-form");
const warnings = document.querySelectorAll(".warning");

/* form validation */
const isRequired = (value) => {
   return value ? true : false;
};

const showWarning = (element, isAdded) => {
   isAdded === "remove" ? element.classList.remove("active") : element.classList.add("active");
};

const checkName = (item) => {
   let name = item.name.value;
   let maxLength = name.length;
   let element = item.name;

   if (isRequired(name) && maxLength >= 5 && maxLength <= 30) {
      return true;
   }

   showWarning(element.nextElementSibling, "add");
   showWarning(element, "add");
   return false;
};

const checkEmail = (item) => {
   let email = item.email.value.trim();
   let maxLength = email.length;
   let element = item.email;

   const emailFormat = /[^@ \t\r\n]+@[^@ \t\r\n]+\.(\w{2,3})+$/;
   const isEmailCorrect = emailFormat.test(email);

   if (isRequired(email) && maxLength <= 30 && isEmailCorrect) {
      return true;
   }

   showWarning(element.nextElementSibling, "add");
   showWarning(element, "add");
   return false;
};

const checkSelected = (item) => {
   let services = item.services.value;
   let element = item.services;

   if (isRequired(services)) {
      return true;
   }

   showWarning(element.nextElementSibling, "add");
   showWarning(element, "add");
   return false;
};

const checkSubject = (item) => {
   let name = item.subject.value.trim();
   let maxLength = name.length;
   let element = item.subject;

   if (isRequired(name) && maxLength >= 5 && maxLength <= 30) {
      return true;
   }

   showWarning(element.nextElementSibling, "add");
   showWarning(element, "add");
   return false;
};

const checkMessage = (item) => {
   let message = item.message.value.trim();
   let maxLength = message.length;
   let element = item.message;

   if (isRequired(message) && maxLength >= 5 && maxLength <= 200) {
      return true;
   }

   showWarning(element.nextElementSibling, "add");
   showWarning(element, "add");
   return false;
};

const isInputAllValid = (value) => {
   let isNameValid = checkName(value);
   let isEmailValid = checkEmail(value);
   let isSubjectValid = checkSubject(value);
   let isMessageValid = checkMessage(value);

   if (isNameValid && isEmailValid && isMessageValid && isSubjectValid) {
      return true;
   }

   return false;
};

quoteForm &&
   quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let value = e.target;
      let isSelectedValid = checkSelected(value);

      if (isInputAllValid(value) && isSelectedValid) {
         alert("Request Successfully Sent!");
         quoteForm.reset();
      }
   });

contactForm &&
   contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let value = e.target;

      if (isInputAllValid(value)) {
         alert("Successfully Sent!");
         contactForm.reset();
      }
   });

/* ================= REAL TIME FORM VALIDATION ================= */
let timeOut;

const isAllClear = (getId, forms) => {
   if (timeOut) {
      clearTimeout(timeOut);
   }

   timeOut = setTimeout(() => {
      switch (getId) {
         case "name":
            if (checkName(forms)) {
               let element = forms.name;
               showWarning(element.nextElementSibling, "remove");
               showWarning(element, "remove");
            }
            break;

         case "email":
            if (checkEmail(forms)) {
               let element = forms.email;
               showWarning(element.nextElementSibling, "remove");
               showWarning(element, "remove");
            }
            break;

         case "select-services":
            if (checkSelected(forms)) {
               let element = forms.services;
               showWarning(element.nextElementSibling, "remove");
               showWarning(element, "remove");
            }

            break;

         case "subject":
            if (checkSubject(forms)) {
               let element = forms.subject;
               showWarning(element.nextElementSibling, "remove");
               showWarning(element, "remove");
            }
            break;

         case "message":
            if (checkMessage(forms)) {
               let element = forms.message;
               showWarning(element.nextElementSibling, "remove");
               showWarning(element, "remove");
            }
      }
   }, 500);
};

quoteForm &&
   quoteForm.addEventListener("input", (e) => {
      e.preventDefault();
      let forms = quoteForm;
      let getId = e.target.id;

      isAllClear(getId, forms);
   });

contactForm &&
   contactForm.addEventListener("input", (e) => {
      e.preventDefault();
      let forms = contactForm;
      let getId = e.target.id;

      isAllClear(getId, forms);
   });
