const pageUpBtn = document.querySelector("#page-up");
const mainContent = document.querySelector(".main-content");

function scrollHandler(event) {
    const mainFromBottom = mainContent.getBoundingClientRect().bottom - window.innerHeight;

    if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20){
        pageUpBtn.style.setProperty("opacity", "");//if set to 0, :hover effect in css will lose priority and will not work
        pageUpBtn.style.setProperty("visibility", "visible");
    } else {
        pageUpBtn.style.setProperty("opacity", "0");
        pageUpBtn.style.setProperty("visibility", "hidden");
    }

    if(mainFromBottom <= 0) {
        pageUpBtn.classList.add("fix");
    } else {
        pageUpBtn.classList.remove("fix");
    }
}

function pageUpOnClick(event) {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}

function init() {
    window.addEventListener("scroll", scrollHandler);
    pageUpBtn.addEventListener("click", pageUpOnClick);
}

init();