import { revealContent } from "./script/revealContent.js";
import { gsapAnimation } from "./script/gsapAnimation.js";
import { map } from "./script/map.js";
import { showPopup, closePopup } from "./script/reservationPopup.js";
import { validateDate, validatePhone, validateForm, errorMessage} from "./script/validateData.js";
import { slider } from "./script/slider.js";


const sliderMQ = window.matchMedia("(max-width: 40.2em)");
const tp = document.querySelector(".testimonials-tp")
window.addEventListener("DOMContentLoaded", () => {
  gsapAnimation();
  map();

  if(sliderMQ.matches) slider();
  
});

const btnsContainer = document.querySelector(".about__left-side");
btnsContainer.addEventListener("click", function (event) {
  event.preventDefault();

  const clickedBtn = event.target.closest(".about__button");
  if (!clickedBtn) return;

  revealContent(clickedBtn);
});


const eventContainer = document.querySelector(".events");
eventContainer.addEventListener("click", function (event) {
  event.preventDefault();

  const clickedEvent = event.target.closest(".events__event-box");
  if (!clickedEvent) return;

  revealContent(clickedEvent, "event");
});

const reservationBtn = document.querySelectorAll(".reservation-btn");
const closeBtn = document.querySelector(".close-popup");
const overlay = document.querySelector(".overlay");
const userPhone = document.getElementById("phone");
const userDate = document.getElementById("date");
const formBtn = document.querySelector(".form-btn");
const successAlert = document.querySelector(".success");

reservationBtn.forEach((btn) => btn.addEventListener("click", showPopup));
closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

userPhone.addEventListener("blur", validatePhone);

userDate.addEventListener("input", validateDate);

formBtn.addEventListener("click", () => {
  const formStatus = validateForm();
  
  if (!formStatus.formComplete.status) errorMessage(formStatus.formComplete.message);

  else if (!formStatus.phoneFormatIsCorrect.status) errorMessage(formStatus.phoneFormatIsCorrect.message);

  else {
    closePopup();
    successAlert.style.top = "0rem";
    setTimeout(() => {
      successAlert.style.top = "-12rem";
    }, 3000);
  }
});

const tpNav = document.querySelector(".navigation__tablet-phone");
const arrowNav = document.querySelector(".arrow-navi");

arrowNav.addEventListener("click", event => {
  event.preventDefault();
  tpNav.classList.toggle("open-navi");
  arrowNav.classList.toggle("rotate-arrow");
});

