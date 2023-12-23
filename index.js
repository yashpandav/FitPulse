let mode = document.getElementById("mode");
let logo = document.getElementById("logoIMG");
let navWhite = document.querySelector("nav");
let needWhite = document.querySelector(".second-main h1");
let cardP = document.querySelector(".card p");

let click = false;

mode.addEventListener("click", () => {
     if (click === false) {
          navWhite.classList.remove("nav-dark");
          navWhite.classList.add("nav-white");
          document.body.style.backgroundColor = "#EAE1EB";
          logo.src = "logo/white-logo.png";
          needWhite.classList.remove("need-black");
          needWhite.classList.add("need-white");
          cardP.style.color = "#100F11"
          click = true;
     } else {
          document.body.style.backgroundColor = "#100F11";
          navWhite.classList.remove("nav-white");
          navWhite.classList.add("nav-dark");
          logo.src = "logo/dark-logo.png"
          needWhite.classList.remove("need-white");
          needWhite.classList.add("need-black");
          cardP.style.color = "rgb(178, 190, 202)";
          click = false;
     }
});

let navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", ()=>{
     let navLinks = document.querySelectorAll("nav a");
     if(navLinks[1].classList.contains("active")){
          navWhite.style.backgroundColor = "transparent";
     }
     else{
          if(click === false){
               navWhite.style.backgroundColor = "#100F11";
          }
          else{
               navWhite.style.backgroundColor = "#EAE1EB";
          }

     }
})

//#969c3a  :: GOLDEN
//#6b3a9c  :: PURPLE
//#321F44  :: purple REQUIRED
