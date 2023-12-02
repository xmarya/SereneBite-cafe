const aboutBtns = document.querySelectorAll(".about__button");
const contentHolders = document.querySelectorAll(".content-holder");
const imgsHolder = document.querySelectorAll(".picture-holder");
const hiddenParagraph = document.querySelectorAll(".hidden-paragraph");

function hideOtherContents(activeContent, activeBtn ="", activeImg="", contentType ="") {
  
  if(contentType === "event") {
    hiddenParagraph.forEach(paragraph => {
      if(paragraph !== activeContent) paragraph.classList.add("display-none");
    })
  }

  else {
    contentHolders.forEach((holder) => {
      if(holder !== activeContent) holder.parentElement.classList.add("display-none");
    });
  
    aboutBtns.forEach(btn => {
      if(btn !== activeBtn) {
        btn.classList.remove("button--active");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("data-content-state", "")
      }
    });
  
    imgsHolder.forEach(holder => {
      if(holder !== activeImg) holder.classList.add("display-none");
    })
  }
}


export const revealContent = function(btn, contentType = ""){
  
  if(contentType === "event") {
    const paragraph = btn.querySelector(".hidden-paragraph");
    paragraph.classList.toggle("display-none");
    hideOtherContents(paragraph,"", "", "event");
  }

  else {
    // Getting the content of the clicked btn using the aria-controls :
  const content = document.querySelector(`#${btn.getAttribute("aria-controls")}`);

  // Getting the img of the clicked btn using the previous content's id :
  let img;
  imgsHolder.forEach(holder => {
    if(holder.dataset.img === content.id) {
      holder.classList.remove("display-none");
      img = holder;

    }
  })
  

  // After getting the specific element we're going to set arias attributes :
  btn.setAttribute("aria-expanded", "true");
  btn.setAttribute("data-content-state", "open");

  content.parentElement.classList.toggle("display-none"); // the content will be display: none if the use clicked the element twice.
  btn.classList.toggle("button--active");

  hideOtherContents(content, btn, img);
  }
}
