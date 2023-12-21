let mode = document.getElementById("mode");
let logo = document.getElementById("logoIMG");
let mainIMG = document.getElementById("backImg");
let navWhite = document.querySelector("nav");

let click = false;

mode.addEventListener("click", () => {
     if (click === false) {
          navWhite.classList.remove("nav-dark");
          navWhite.classList.add("nav-white");
          document.body.style.backgroundColor = "#EAE1EB";
          logo.src = "logo/white-logo.png";
          mainIMG.src = "logo/main-white.png";
          click = true;
     } else {
          document.body.style.backgroundColor = "#100F11";
          navWhite.classList.remove("nav-white");
          navWhite.classList.add("nav-dark");
          logo.src = "logo/dark-logo.png"
          mainIMG.src = "logo/main-black.png";
          click = false;
     }
});

//#969c3a  :: GOLDEN
//#6b3a9c  :: PURPLE
//#321F44  :: purple REQUIRED


