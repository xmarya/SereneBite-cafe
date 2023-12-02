
const popup = document.querySelector(".reservation-popup");
const overlay = document.querySelector(".overlay");

export const showPopup = function(event)  {
    // console.log(popup.className.split(' '));
    event.preventDefault();
    popup.classList.remove("display-none");
    overlay.classList.remove("display-none");
}

export const closePopup = () => {
    popup.classList.add("display-none");
    overlay.classList.add("display-none");
    document.querySelector(".reservation-popup__form").reset();
}



