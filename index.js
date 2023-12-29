let mode = document.getElementById("mode");
let logo = document.getElementById("logoIMG");
let navWhite = document.querySelector("nav");
let needWhite = document.querySelector(".second-main h1");
let cardP = document.querySelectorAll(".card p");
let thought = document.querySelectorAll(".thoughts");
let thoughtH2 = document.querySelectorAll(".thoughts h2");
let selfcare = document.querySelector(".selfcare")
let joinNow = document.querySelector(".joinNow h4");
let click = false;

/* DARK MODE AND WHITE MOMDE */
mode.addEventListener("click", () => {
     if (click === false) {
          navWhite.classList.remove("nav-dark");
          navWhite.classList.add("nav-white");
          document.body.style.backgroundColor = "#FFFAFA";
          logo.src = "logo/white-logo.png";
          needWhite.classList.remove("need-black");
          needWhite.classList.add("need-white");
          for (let i = 0; i < cardP.length; i++) {
               cardP[i].style.color = "#100F11";
          }
          for (let i = 0; i < thoughtH2.length; i++) {
               thoughtH2[i].style.color = "#321F44";
          }
          selfcare.style.color = "#321F44";
          joinNow.style.color = "#321F44";
          click = true;
          active();
     } else {
          document.body.style.backgroundColor = "#100F11";
          navWhite.classList.remove("nav-white");
          navWhite.classList.add("nav-dark");
          logo.src = "logo/dark-logo.png"
          needWhite.classList.remove("need-white");
          needWhite.classList.add("need-black");
          for (let i = 0; i < cardP.length; i++) {
               cardP[i].style.color = "rgb(178, 190, 202)";
          }
          for (let i = 0; i < thoughtH2.length; i++) {
               thoughtH2[i].style.color = "#f5f5f5";
          }
          selfcare.style.color = "#f5f5f5";
          joinNow.style.color = "#f5f5f5";
          click = false;
          active();
     }
});

/* NAVBAR TRANSPARENCY*/
function active() {
     let navLinks = document.querySelectorAll("nav a");
     if (navLinks[1].classList.contains("active")) {
          navWhite.style.backgroundColor = "transparent";
     }
     else {
          if (click === false) {
               navWhite.style.backgroundColor = "#100F11";
          }
          else {
               navWhite.style.backgroundColor = "#EAE1EB";
          }
     }
}
window.addEventListener("scroll", active);


/* GYM INTRO ANIMATION*/
let mainGym = document.querySelectorAll(".gym-intro");
for (let gym of mainGym) {
     gym.addEventListener("mouseover", () => {
          let introGym = document.querySelector(`#${gym.id} h4`);
          let gymIcon = document.querySelector(`#${gym.id} i`);
          let outroGym = document.querySelector(`#${gym.id} div`);
          if (gymIcon.id == "first") {
               gymIcon.style.setProperty("color", "red");
               outroGym.style.backgroundColor = "red";
               introGym.style.backgroundColor = "red";
               introGym.style.color = "whitesmoke";
          }
          else if (gymIcon.id == "sec") {
               gymIcon.style.setProperty("color", "rgb(0, 13, 255)");
               outroGym.style.backgroundColor = "rgb(0, 13, 255)";
               introGym.style.backgroundColor = "rgb(0, 13, 255)";
               introGym.style.color = "whitesmoke";
          }
          else {
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
     gym.addEventListener("mouseout", () => {
          let introGym = document.querySelector(`#${gym.id} h4`);
          let outroGym = document.querySelector(`#${gym.id} div`);
          let gymIcon = document.querySelector(`#${gym.id} i`);
          gymIcon.style.removeProperty("color");

          introGym.style.setProperty("visibility", "hidden");
          introGym.classList.remove("aniForGymIntro");
          introGym.classList.add("visibilityForIntro");
          introGym.classList.remove("visible");

          outroGym.style.setProperty("visibility", "hidden");
          outroGym.classList.remove("aniForGymInfo");
          outroGym.classList.add("visibilityForIntro");
          outroGym.classList.remove("visible");
     })
}

/* MEMBERSHIP ANIMATION*/
let memberships = document.querySelectorAll('.membership');
memberships.forEach(function (membership) {
     membership.addEventListener('mouseover', function () {
          memberships.forEach(function (otherMembership) {
               if (otherMembership !== membership) {
                    otherMembership.style.transform = "scale(0.8)";
                    otherMembership.style.opacity = "0.7";
                    membership.style.boxShadow = "10px 10px 10px white,-10px 10px 10px white,10px -10px 10px white,-10px -10px 10px white";
               }
          });
     });

     membership.addEventListener('mouseout', function () {
          memberships.forEach(function (otherMembership) {
               otherMembership.style.transform = "";
               otherMembership.style.opacity = "";
               membership.style.boxShadow = "10px 10px 10px rgb(130, 130, 130), -10px 10px 10px rgb(130, 130, 130), 10px -10px 10px rgb(130, 130, 130), -10px -10px 10px rgb(130, 130, 130)";
          });
     });
});


/* MEMBERSHIP-PRICE ANIMATION*/
let membership = document.querySelectorAll(".member-info");
let allPrice = document.querySelectorAll(".price");
for (let allMembers of membership) {
     allMembers.addEventListener("mouseover", () => {
          let member = allMembers.childNodes[3];
          let sibilingPrice = allMembers.previousSibling;
          let amount = sibilingPrice.querySelector(".amount");
          let perMonth = sibilingPrice.querySelector(".per");
          amount.classList.add("priceAni");
          setTimeout(() => {
               perMonth.classList.remove("visibilityForIntro");
               perMonth.classList.add("visible");
               perMonth.classList.add("perAni");
               perMonth.style.removeProperty("visibility");
          }, 200);
          sibilingPrice.classList.remove("visibilityForIntro");
          sibilingPrice.classList.add("visible");
          member.classList.remove("visibilityForIntro");
          member.classList.add("visible");
     })
     allMembers.addEventListener("mouseout", () => {
          let member = allMembers.childNodes[3];
          let sibilingPrice = allMembers.previousSibling;
          let amount = sibilingPrice.querySelector(".amount");
          let perMonth = sibilingPrice.querySelector(".per");
          amount.classList.remove("priceAni");
          perMonth.classList.remove("perAni");
          perMonth.style.setProperty("visibility", "hidden");
          perMonth.classList.remove("visible");
          perMonth.classList.add("visibilityForIntro");
          sibilingPrice.classList.remove("visible");
          sibilingPrice.classList.add("visibilityForIntro");
          member.classList.remove("visible");
          member.classList.add("visibilityForIntro");
     }
     )
}


//#969c3a  :: GOLDEN
//#6b3a9c  :: PURPLE
//#321F44  :: purple REQUIRED
