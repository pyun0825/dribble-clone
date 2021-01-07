const mobileHeaderBtn = document.querySelector(".mobile-header__dropBtn");
const mobileHeaderDropdown = document.querySelector(".mobile-header__dropdown");

function mobileHeaderClick(event){
    mobileHeaderBtn.classList.toggle("mdrop");
    mobileHeaderDropdown.classList.toggle("mdrop");
}

function init() {
    mobileHeaderBtn.addEventListener("click", mobileHeaderClick);
}

init();