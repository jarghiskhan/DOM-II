// Your code goes here
const navButtons = document.querySelectorAll(".nav-link");
const signMeUp = document.getElementsByClassName("btn");
const busPicture = document.querySelector("header img");
const logoHeader = document.querySelector(".logo-heading");
const letsGoImg = document.querySelector(".content-section .img-content img");
const pObject =  document.querySelectorAll("p");
const pickYourDestinationImg = document.querySelector(".content-destination img");
const stopPropagation1 = document.querySelector(".text-content");
const stopPropagation2 = document.querySelector(".text-content h2");

console.log(stopPropagation1);

//mouseenter
navButtons[0].addEventListener("mouseenter", () => {
  navButtons[0].style.color = "red";
});
//mouseleave
navButtons[0].addEventListener("mouseleave", () => {
  navButtons[0].removeAttribute("style");
});
//mouseover
busPicture.addEventListener("mouseover", () => {
  busPicture.style.filter = "grayscale(100%)";
  document.querySelector(".main-navigation").style.zIndex = "99";
});
//keydown
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyH") {
    logoHeader.hidden = "true";
  }
});

// `wheel`
letsGoImg.addEventListener("wheel", zoom);
function zoom(event) {
let scale = .5;

  event.preventDefault();

  if (event.deltaY < 0) {
    scale *= event.deltaY * -.75;
  } else {
    scale /= event.deltaY * .75;
  }
  scale = Math.min(Math.max(0.125, scale), 1);
  letsGoImg.style.transform = `scale(${scale})`;
}

// `load`
window.addEventListener('load',()=>{
    alert("Page has loaded.");
});
// `resize`
window.addEventListener('resize',()=>{
    let w = window.outerWidth;
    let h = window.outerHeight;
    if(w <= 200 || h <= 200){
        alert("TOO SMALL!");
    }
})
// `contextmenu`
document.addEventListener('contextmenu', ()=>{
    for(let i=0; i<pObject.length; i++){
        pObject[i].textContent="You clicked the right mouse button."
    }
})
// `offline`
window.addEventListener('offline', () => {
    alert("You lost internet connection ya dingus");
});
// `dblclick`
pickYourDestinationImg.addEventListener('dblclick',(event)=>{
    pickYourDestinationImg.src="https://www.closerweekly.com/wp-content/uploads/2020/01/tom-selleck-magnum-pi.jpg?resize=1180%2C1814"
})

//stopPropagation. With the line stopPropagation added, the div event won't trigger. Only the logo event will.
stopPropagation1.addEventListener('click', ()=>{
    alert(`Clicked the Let's Go div!`);
})
stopPropagation2.addEventListener('click', (event)=>{
    alert(`Clicked the text Let's Go`);
    event.stopPropagation();
}
);
//preventDefault to prevent refreshing the page and going to the link.
navButtons.addEventListener("click", ()=>{
    preventDefault();
})