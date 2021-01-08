const itemWrapper = document.querySelectorAll(".item__wrapper");

function dropDropClick(event){
    event.target.classList.toggle("dropped");
    event.target.nextElementSibling.classList.toggle("dropped"); //nextSibling returns text cause of line change in html document. so nextElementSibling is to be used
}

function init(){
    itemWrapper.forEach(item => {
        item.addEventListener("click", dropDropClick);
    });
}

init();