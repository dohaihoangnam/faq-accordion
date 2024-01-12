import { desktopHeader, mobileHeader, showButton, hideButton } from "./glyphs.js";

const header = document.querySelector("header");
const showHide = document.querySelectorAll(".show-hide");
const answers = document.querySelectorAll(".answer");

window.onload = () => {
    if (window.innerWidth < 375) {
        header.innerHTML = mobileHeader;
    } else {
        header.innerHTML = desktopHeader;
    }
    showHide.forEach((el, idx) => {
        el.innerHTML = showButton;
        answers[idx].style.display = "none";
    })
}

showHide.forEach((el, idx) => {
    el.addEventListener("click", () => {
        console.log("clicked!");
        if (answers[idx].style.display == "block") {
            el.innerHTML = showButton;
            answers[idx].style.display = "none";
        } else if (answers[idx].style.display == "none") {
            el.innerHTML = hideButton;
            answers[idx].style.display = "block";
        }
    })
})