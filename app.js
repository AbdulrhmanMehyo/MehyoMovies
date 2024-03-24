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

const togglebtn= document.querySelector(".toggle-btn");
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
  toggleBtn.classList.toggle("active");
});
const whatchButton= document.querySelector(".whatch-Active");
const whatch= document.querySelector(".whatch");
const close= document.querySelector(".close");
whatchButton.addEventListener("click",()=>{
  console.log("hi")
  whatch.style.display="flex"
});
close.addEventListener("click",()=>{
  whatch.style.display="none"
  

});



function stopVideo() {
  // Modify the iframe's src attribute to remove the autoplay parameter
  document.getElementById('youtube-player').src = "https://www.youtube.com/embed/CHKn-yDCE2w?";
}

const whatchButton1= document.querySelector(".whatch-Active-1");
const whatch1= document.querySelector(".whatch-1");
const close1= document.querySelector(".close-1");
whatchButton1.addEventListener("click",()=>{
  console.log("higg")
  whatch1.style.display="flex"
});
close1.addEventListener("click",()=>{
  whatch1.style.display="none"
  

});


function stopVideo1() {
  // Modify the iframe's src attribute to remove the autoplay parameter
  document.getElementById('youtube-player-1').src = "https://www.youtube.com/embed/HIs9x49DK7I?si=ajBzdKUV0Cxkc3-U";
}

//drop down list
const toggleBtn = document.querySelector(".toggle-btn");
const dropdownmenu = document.querySelector(".menu-list-dropdown");
toggleBtn.onclick= function() {
  dropdownmenu.classList.toggle("open")
  
}

dropdownmenu.onclick= function() {
  dropdownmenu.classList.toggle("open")
  
}

