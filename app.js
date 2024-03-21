const arrows=document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=> {
    const itemNumber=movieLists[i].querySelectorAll("img").length;
    let clickCounter=0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth / 290);
        clickCounter++
       if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){

            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
              }px)`;
        } else{
            movieLists[i].style.transform ="translateX(0)"
            clickCounter=0;
        }
    
});
console.log(movieLists[i].querySelectorAll("img").length);

});
//TOGGLE
const footer= document.querySelector(".copyright");
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
  footer.classList.toggle("active");
});
var frame = document.getElementById("iframeid");

const whatchButton= document.querySelector(".whatch-Active");
const whatch= document.querySelector(".whatch");
const close= document.querySelector(".close");
const video=document.querySelector(".video")
whatchButton.addEventListener("click",()=>{
  console.log("hi")
  whatch.style.display="flex"
});
close.addEventListener("click",()=>{
  whatch.style.display="none"
frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  

});

 
