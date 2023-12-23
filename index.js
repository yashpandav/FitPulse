let mode = document.getElementById("mode");
let logo = document.getElementById("logoIMG");
let navWhite = document.querySelector("nav");
let needWhite = document.querySelector(".second-main h1");
let cardP = document.querySelectorAll(".card p");
let slogan = document.querySelector("#fitness h4");
let click = false;

mode.addEventListener("click", () => {
     if (click === false) {
          navWhite.classList.remove("nav-dark");
          navWhite.classList.add("nav-white");
          document.body.style.backgroundColor = "#EAE1EB";
          logo.src = "logo/white-logo.png";
          needWhite.classList.remove("need-black");
          needWhite.classList.add("need-white");
          for(let i = 0; i < cardP.length; i++){
               cardP[i].style.color = "#100F11";
          }
          slogan.style.color = "#321F44";
          click = true;
          active();
     } else {
          document.body.style.backgroundColor = "#100F11";
          navWhite.classList.remove("nav-white");
          navWhite.classList.add("nav-dark");
          logo.src = "logo/dark-logo.png"
          needWhite.classList.remove("need-white");
          needWhite.classList.add("need-black");
          for(let i = 0; i < cardP.length; i++){
               cardP[i].style.color = "rgb(178, 190, 202)";
          }
          slogan.style.color = "orange";
          click = false;
          active();
     }
});


function active(){
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
}
window.addEventListener("scroll", active);

let mainGym = document.querySelectorAll(".gym-intro");
for(let gym of mainGym){
     gym.addEventListener("mouseover" , ()=>{
               let introGym = document.querySelector(`#${gym.id} h4`);
               let gymIcon = document.querySelector(`#${gym.id} i`);
               let outroGym = document.querySelector(`#${gym.id} div`);
               if(gymIcon.id == "first"){
                    gymIcon.style.setProperty("color", "red");
                    outroGym.style.backgroundColor = "red";
                    introGym.style.backgroundColor = "red";
                    introGym.style.color = "whitesmoke";
               }
               else if(gymIcon.id == "sec"){
                    gymIcon.style.setProperty("color", "rgb(0, 13, 255)");
                    outroGym.style.backgroundColor = "rgb(0, 13, 255)";
                    introGym.style.backgroundColor = "rgb(0, 13, 255)";
                    introGym.style.color = "whitesmoke";
               }
               else{
                    gymIcon.style.setProperty("color", "green");
                    outroGym.style.backgroundColor = "green";
                    introGym.style.backgroundColor = "green";
                    introGym.style.color = "whitesmoke";
               }
               introGym.classList.add("aniForGymIntro");    
               introGym.classList.remove("visibilityForIntro");    
               introGym.classList.add("visible");

               outroGym.classList.add("aniForGymInfo");
               outroGym.classList.remove("visibilityForIntro");
               outroGym.classList.add("visible");
     })
     gym.addEventListener("mouseout" , ()=>{
               let introGym = document.querySelector(`#${gym.id} h4`);
               let outroGym = document.querySelector(`#${gym.id} div`);
               let gymIcon = document.querySelector(`#${gym.id} i`);
               gymIcon.style.removeProperty("color");

               introGym.style.setProperty("visibility" , "hidden");
               introGym.classList.remove("aniForGymIntro"); 
               introGym.classList.add("visibilityForIntro");
               introGym.classList.remove("visible");    
             
               outroGym.style.setProperty("visibility" , "hidden");
               outroGym.classList.remove("aniForGymInfo"); 
               outroGym.classList.add("visibilityForIntro");
               outroGym.classList.remove("visible");    
     })
}



//#969c3a  :: GOLDEN
//#6b3a9c  :: PURPLE
//#321F44  :: purple REQUIRED
