const filterContainer = document.querySelector(".main__nav--filters");
const filterBtn = filterContainer.querySelector(".main__nav--filters-btn");
const filterDropdown = document.querySelector(".filter__dropdown");

function handleClick(event){
    filterBtn.classList.toggle("show");
    filterDropdown.classList.toggle("show");
}

function init() {
    filterBtn.addEventListener("click", handleClick);
}

init();