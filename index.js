let mode = document.getElementById("mode");
let logo = document.getElementById("logoIMG");
let navWhite = document.querySelector("nav");
let needWhite = document.querySelector(".second-main h1");
let cardP = document.querySelectorAll(".card p");
let thought = document.querySelectorAll(".thoughts");
let thoughtH2 = document.querySelectorAll(".thoughts h2");
let selfcare = document.querySelector(".selfcare")
let joinNow = document.querySelectorAll(".joinNow h4");
let traineeBack = document.querySelector(".trainee");
let traineeH4 = document.querySelector(".trainee-head h4");
let traineePara = document.querySelector(".trainee-head p")
let replyPara = document.querySelectorAll(".reply p");
let testMain = document.querySelectorAll(".teste");
let quateImg = document.querySelectorAll(".LightQuote");
let testerName = document.querySelectorAll(".joinNow h6");
let testerReplay = document.querySelector("#replay");
let testerNameCard = testerReplay.querySelectorAll("p");
let testerh4 = testerReplay.querySelectorAll("h4");
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
          joinNow.forEach(function (joinNow) {
               joinNow.style.color = "#321F44";
          });
          traineeBack.style.background = "linear-gradient(to bottom, rgba(255, 250, 250,0.95), rgb(255, 255, 255,0.6) , rgba(255, 250, 250, 0.95)),url('Image/glow_trainee.jpg')";
          traineeH4.style.color = "#103054";
          traineePara.style.color = "black"
          replyPara.forEach(function (replyPara) {
               replyPara.style.color = "#18022c";
               replyPara.style.fontWeight = "bold";
          });
          testMain.forEach(function (testMain) {
               testMain.style.backgroundColor = "rgba(206, 198, 209, 0.26)";
          });
          quateImg.forEach(function (quateImg) {
               quateImg.src = "Image/LightQuoteWhite.png";
          });
          testerName.forEach(function (testerName) {
               testerName.style.color = "#321F44";    
          })
          testerNameCard.forEach(function (testerNameCard) {
               testerNameCard.style.color = "#321F44";
          });
          testerh4.forEach(function (testerh4) {
               testerh4.style.color = "#321F44";
          });
          testerReplay.style.backgroundImage = "url('Image/LightQuoteWhite.png')";
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
          joinNow.forEach(function (joinNow) {
               joinNow.style.color = "#f5f5f5";
          });
          traineeBack.style.background = "linear-gradient(to bottom, #100F11, rgba(255, 255, 255, 0) , #100F11),url('Image/glow_trainee.jpg')";
          traineeH4.style.color = "rgb(67, 132, 218)";
          traineePara.style.color = "whitesmoke";
          replyPara.forEach(function (replyPara) {
               replyPara.style.color = "whitesmoke";
               replyPara.style.fontWeight = "normal";
          });
          testMain.forEach(function (testMain) {
               testMain.style.backgroundColor = "rgba(48, 48, 47, 0.255)";
          });
          quateImg.forEach(function (quateImg) {
               quateImg.src = "Image/LightQuoteDark.png";
          });          
          testerName.forEach(function (testerName) {
               testerName.style.color = "whitesmoke";    
          })
          testerNameCard.forEach(function (testerNameCard) {
               testerNameCard.style.color = "whitesmoke";
          });
          testerh4.forEach(function (testerh4) {
               testerh4.style.color = "whitesmoke";
          });
          testerReplay.style.backgroundImage = "url('Image/LightQuoteDark.png')";
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
                    membership.style.boxShadow = "1px 1px 12px #eae1eb, -1px 1px 12px #eae1eb, 1px -1px 12px #eae1eb, -1px -1px 12px #eae1eb";
               }
          });
     });

     membership.addEventListener('mouseout', function () {
          memberships.forEach(function (otherMembership) {
               otherMembership.style.transform = "";
               otherMembership.style.opacity = "";
               membership.style.boxShadow = "1px 1px 12px rgb(130, 130, 130), -1px 1px 12px rgb(130, 130, 130), 1px -1px 12px rgb(130, 130, 130), -1px -1px 12px rgb(130, 130, 130)";
          });
     });
});


/* MEMBERSHIP-PRICE ANIMATION*/
let membership = document.querySelectorAll(".member-info");
let allPrice = document.querySelectorAll(".price");
for (let allMembers of membership) {
     allMembers.addEventListener("mouseover", () => {
          let member = allMembers.childNodes[3];
          // let sibilingPrice = allMembers.previousSibling;
          // let amount = sibilingPrice.querySelector(".amount");
          // let perMonth = sibilingPrice.querySelector(".per");
          // amount.classList.add("priceAni");
          // setTimeout(() => {
          //      perMonth.classList.remove("visibilityForIntro");
          //      perMonth.classList.add("visible");
          //      perMonth.classList.add("perAni");
          //      perMonth.style.removeProperty("visibility");
          // }, 200);
          // sibilingPrice.classList.remove("visibilityForIntro");
          // sibilingPrice.classList.add("visible");
          member.classList.remove("visibilityForIntro");
          member.classList.add("visible");
     })
     allMembers.addEventListener("mouseout", () => {
          let member = allMembers.childNodes[3];
          // let sibilingPrice = allMembers.previousSibling;
          // // let amount = sibilingPrice.querySelector(".amount");
          // let perMonth = sibilingPrice.querySelector(".per");
          // amount.classList.remove("priceAni");
          // perMonth.classList.remove("perAni");
          // perMonth.style.setProperty("visibility", "hidden");
          // perMonth.classList.remove("visible");
          // perMonth.classList.add("visibilityForIntro");
          // sibilingPrice.classList.remove("visible");
          // sibilingPrice.classList.add("visibilityForIntro");
          member.classList.remove("visible");
          member.classList.add("visibilityForIntro");
     }
     )
}

// TESTIMONIAL MEDIA

let replayCarousel = document.getElementById("replay");
let replayNormal = document.querySelectorAll(".testimonial");
const media = () =>{
     let q = matchMedia("(max-width:500px)");
     if(q.matches){
          replayNormal.forEach(function (item) {
               item.style.display = "none";
          });
          replayCarousel.style.display = "block";
     }
     else{
          replayCarousel.style.display = "none";
          replayNormal.forEach(function (item) {
               item.style.display = "grid";
          });    
     }
}
onload = media;
onresize = media;

//#969c3a  :: GOLDEN
//#6b3a9c  :: PURPLE
//#321F44  :: purple REQUIRED
