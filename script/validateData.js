const formInputs = document.querySelectorAll("input");

const errorAlert = document.querySelector(".error p");
const phoneRegex = new RegExp(/^(\+44|44)\d{9}$/);
const today = new Date().toJSON().slice(0, 10);

const mq63em = window.matchMedia("(max-width: 63.1em)");

let formStatus = {
  formComplete : {
    status: false,
    message: "Please Fill out all the Fields before Submitting"
  },
  phoneFormatIsCorrect : {
    status: false,
    message: "Please Insert a valid Phone number!"
  },
}


const shakingField = function(field) {
  field.classList.add("shaking");
  setTimeout(() => {
   field.classList.remove("shaking");
  }, 400);
}

export const errorMessage = (msg) => {
  errorAlert.textContent = msg;
  errorAlert.parentElement.style.top = "0rem";

  setTimeout(() => {
    errorAlert.parentElement.style.top = "-12rem";
  }, 2500);
};

export const validatePhone = function (event) {
  formStatus.phoneFormatIsCorrect.status = true;
  const userInput = event.target.value;
  if (userInput !== "" && !phoneRegex.test(userInput) || !phoneRegex.test(userInput)) {
    shakingField(event.target);
    errorMessage(formStatus.phoneFormatIsCorrect.message);
    formStatus.phoneFormatIsCorrect.status = false;
  } 
};

export const validateDate = function (event) {
  const userInput = event.target.value;

  if (userInput <= today) {
    shakingField(event.target);
    errorMessage("Please Insert a correct Date!");
  }
};

export const validateForm = () => {
  formStatus.formComplete.status = true
   formInputs.forEach(input => {
      if(input.value.trim() === "") formStatus.formComplete.status = false;
   });   
   
   return formStatus;
}
