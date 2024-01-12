import { desktopHeader, mobileHeader, showButton, hideButton } from "./glyphs.js";

const header = document.querySelector("header");
const showHide = document.querySelectorAll(".show-hide");
const answers = document.querySelectorAll(".answer");

const chooseHeader = () => {
    if (window.innerWidth < 375) {
        header.innerHTML = mobileHeader;
    } else {
        header.innerHTML = desktopHeader;
    }
}

window.onload = () => {
    chooseHeader();

    if (window.innerWidth > 1440) {
        window.resizeTo(1440);
    }

    showHide.forEach((el, idx) => {
        el.innerHTML = showButton;
        answers[idx].style.display = "none";
    })
}

window.addEventListener("resize", () => {
    chooseHeader();
})

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