console.log("================================");
     let btn = document.querySelector("#bt");
     let theme = "light";
     btn.addEventListener("click", () => {
     if(theme === "light"){
          document.body.classList.remove("white");
          document.body.classList.add("black");
          btn.classList.remove("fa-moon");
          btn.classList.add("fa-sun");
          theme = "black";
     }
     else{
          document.body.classList.remove("black");
          document.body.classList.add("white");
          btn.classList.remove("fa-sun");
          btn.classList.add("fa-moon");
          theme = "light";
     }     
     console.log(theme);
     })

