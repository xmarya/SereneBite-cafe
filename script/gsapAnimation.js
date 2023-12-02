import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
  
const scrollLine = document.querySelector("#header-to-about path");
const lineLenght = scrollLine.getTotalLength();
const menuBoxs = gsap.utils.toArray(".menu__box");


export const gsapAnimation = () => {
  gsap.defaults({ ease: "none" });

 
 // // Make very long dashes (the length of the path itself):
 scrollLine.style.strokeDasharray = lineLenght + " " + lineLenght;

 // // Offset the dashes so the it appears hidden entirely :
 scrollLine.style.strokeDashoffset = lineLenght;

 const headerSVG = gsap.timeline({
   scrollTrigger: {
     trigger: scrollLine,
     // markers: true,
     scrub: 0.6,
     start: "top 20%", // the top of the SVG is on the page 20% far of the page top .
     end: "center top",
     id: "svg",
   },
 });

 headerSVG.to(scrollLine, {
   strokeDashoffset:
     lineLenght -
     (lineLenght -
       (document.documentElement.scrollTop + document.body.scrollTop) /
         (document.documentElement.scrollHeight -
           document.documentElement.clientHeight)),
 });

 menuBoxs.forEach((box) => {
   const photo = box.querySelector("img");
   const haikei = box.querySelector(".menu__box__photo__haikei");
   const item = box.querySelector(".menu__box__items");

   const menuTrigger = gsap
     .timeline({
       defaults: {
         opacity: 0,
         ease: "sine.inOut",
       },
     }).from(haikei, { height:0, duration: 0.6 })
     .from(photo, { x: -80, duration: 1 })
     .from(item, { x: 50, duration: 0.8}, "-=0.6")

   ScrollTrigger.create({
     trigger: box,
     // markers: true,
     start: "10% 90%",
     id: "menu",
     animation: menuTrigger,
   });
 });


};

// // Make very long dashes (the length of the path itself):
// scrollLine.style.strokeDasharray = lineLenght + " " + lineLenght;

// // Offset the dashes so the it appears hidden entirely :
// scrollLine.style.strokeDashoffset = lineLenght;

// scrollLine.getBoundingClientRect();

// window.addEventListener("scroll", () => {

//   // what % down is it ?
//   const scrollPrecentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//   // lenght to offset the dashes :
//   const drownLenght = lineLenght * scrollPrecentage;

//   console.log(lineLenght, "lineLenght");
//   // console.log(scrollPrecentage, "scrollPrecentage");
//   console.log(drownLenght, "drownLenght");

//   // reverse the rown line when scroll to top :
//   scrollLine.style.strokeDashoffset = lineLenght - drownLenght;
// });
