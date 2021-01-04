const navBtn = document.querySelector(".main__nav-btn");
const dropdown = document.querySelector(".nav__dropdown--list");

function handleMouseDown(event){
    navBtn.style.setProperty("transform", "scale(0.98)");
    navBtn.style.boxShadow = "none";
}
function handleMouseUp(event){
    navBtn.style.setProperty("transform", "");
    navBtn.style.boxShadow = "";    
    // Without it, box-shadow would be gone forever but when I wrote the box-shadow properties for hover, it will stay there forever, so I tried giving it "" as it's the style that stays on html, and it works!
}

function handleOnClickBtn(event){
    if(event.target === navBtn){
        dropdown.classList.toggle("show");
        navBtn.classList.toggle("show");
    } else {
        dropdown.classList.remove("show");      
        navBtn.classList.remove("show");    
    }
}

function init() {
    navBtn.addEventListener("mousedown", handleMouseDown);
    navBtn.addEventListener("mouseup", handleMouseUp);
    //Would like to know if there is a more efficient way of making a button change scale on mouse down.
    document.onclick = handleOnClickBtn;
}

init();