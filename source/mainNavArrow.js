const list = document.querySelector(".main__nav--list");
const left = document.querySelector("#left-arrow");
const right = document.querySelector("#right-arrow");


function scrollRight(event){
    event.preventDefault();
    list.scrollTo({
        left: list.clientWidth,
        behavior: "smooth"
    });
    right.style.display = "none";
    left.style.display = "block";
}

function scrollLeft(event){
    event.preventDefault();
    list.scrollTo({
        left: 0,
        behavior: "smooth"
    });
    right.style.display = "block";
    left.style.display = "none";
}

function handleResize(){
    if(list.clientWidth < list.scrollWidth){
        if( list.scrollLeft === 0 ){
            right.style.display = "block";
            left.style.display = "none";
        } else {
            right.style.display = "none";
            left.style.display = "block";
        }
    } else {
        right.style.display = "none";
        left.style.display = "none";
    }
}

function init() {
    left.addEventListener("click", scrollLeft);
    right.addEventListener("click", scrollRight);
    window.addEventListener("resize", handleResize);
}

init();