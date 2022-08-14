"user strict";
const quoteForm = document.querySelector("#quotes");
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

quoteForm.addEventListener("submit", (e) => {
   e.preventDefault();
   let value = e.target;

   let isNameValid = checkName(value);
   let isEmailValid = checkEmail(value);
   let isSelectedValid = checkSelected(value);
   let isSubjectValid = checkSubject(value);
   let isMessageValid = checkMessage(value);

   if (isNameValid && isEmailValid && isSelectedValid && isMessageValid && isSubjectValid) {
      quoteForm.reset();
      alert("Request Successfully Sent!");
   }
});

/* ================= REAL TIME FORM VALIDATION ================= */
let timeOut;

quoteForm.addEventListener("input", (e) => {
   e.preventDefault();
   let getId = e.target.id;

   if (timeOut) {
      clearTimeout(timeOut);
   }

   timeOut = setTimeout(() => {
      switch (getId) {
         case "name":
            if (checkName(quoteForm)) {
               let element = quoteForm.name;
               showWarning(element.nextElementSibling, "remove");
               showWarning(element, "remove");
            }
            break;

         case "email":
            if (checkEmail(quoteForm)) {
               let element = quoteForm.email;
               showWarning(element.nextElementSibling, "remove");
               showWarning(element, "remove");
            }
            break;

         case "select-services":
            if (checkSelected(quoteForm)) {
               let element = quoteForm.services;
               showWarning(element.nextElementSibling, "remove");
               showWarning(element, "remove");
            }

            break;

         case "subject":
            if (checkSubject(quoteForm)) {
               let element = quoteForm.subject;
               showWarning(element.nextElementSibling, "remove");
               showWarning(element, "remove");
            }
            break;

         case "message":
            if (checkMessage(quoteForm)) {
               let element = quoteForm.message;
               showWarning(element.nextElementSibling, "remove");
               showWarning(element, "remove");
            }
      }
   }, 500);
});
