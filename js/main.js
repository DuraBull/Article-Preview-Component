const share = document.querySelector(".share");
const shareBox = document.querySelector(".share-box");

share.addEventListener("click", shareClick);

function shareClick() {
    if (shareBox.classList.contains("inv")) {
        shareBox.classList.remove("inv");
        share.classList.add("share-active");
    }
    else{
        shareBox.classList.add("inv");
        share.classList.remove("share-active");
    }
}