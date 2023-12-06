console.log("GANPATI BAPPA MORYA");
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

     let allSelection = document.querySelectorAll('.sectionGym');
     allSelection[0].style.borderRadius = '20px';
     allSelection[1].style.borderRadius = '20px';
     allSelection[2].style.borderRadius = '20px';
     allSelection[3].style.borderRadius = '20px';

     document.getElementById('facilityDown').addEventListener('click' , function () {
          let allDetails = document.getElementById('facility');
          if(allDetails.style.display === 'none'){
               allSelection[0].style["borderBottomLeftRadius"] = '';
               allSelection[0].style["borderBottomRightRadius"] = '';
               allSelection[0].style["borderTopLeftRadius"] = '20px';
               allSelection[0].style["borderTopRightRadius"] = '20px';
               allDetails.style.display = 'block';
               document.getElementById('facilityDown').classList.add('fa-rotate-180');
               console.log("successfully");
          }
          else{
               allSelection[0].style.borderRadius = '20px';
               document.getElementById('facilityDown').classList.remove('fa-rotate-180');
               allDetails.style.display = 'none';
               console.log("success");
               
          }
     })


     document.getElementById('equipmentDown').addEventListener('click' , function () {
          let allDetails = document.getElementById('equipment');
          if(allDetails.style.display === 'none'){
               allSelection[1].style["borderBottomLeftRadius"] = '';
               allSelection[1].style["borderBottomRightRadius"] = '';
               allSelection[1].style["borderTopLeftRadius"] = '20px';
               allSelection[1].style["borderTopRightRadius"] = '20px';
               allDetails.style.display = 'block';
               console.log("successfully");
               document.getElementById('equipmentDown').classList.add('fa-rotate-180');
          }
          else{
               
               allSelection[1].style.borderRadius = '20px';
               allDetails.style.display = 'none';
               console.log("success");
               document.getElementById('equipmentDown').classList.remove('fa-rotate-180');
          }
     }
     )



     document.getElementById('programDown').addEventListener('click' , function () {
          let allDetails = document.getElementById('program');
          if(allDetails.style.display === 'none'){
               allSelection[2].style["borderBottomLeftRadius"] = '';
               allSelection[2].style["borderBottomRightRadius"] = '';
               allSelection[2].style["borderTopLeftRadius"] = '20px';
               allSelection[2].style["borderTopRightRadius"] = '20px';
               allDetails.style.display = 'block';
               console.log("successfully");
               document.getElementById('programDown').classList.add('fa-rotate-180');

          }
          else{
               allSelection[2].style.borderRadius = '20px';
               allDetails.style.display = 'none';
               console.log("success");
               document.getElementById('programDown').classList.remove('fa-rotate-180');
          }
     }
     )

     

     document.getElementById('safetyDown').addEventListener('click' , function () {
          let allDetails = document.getElementById('safety');
          if(allDetails.style.display === 'none'){
               allSelection[3].style["borderBottomLeftRadius"] = '';
               allSelection[3].style["borderBottomRightRadius"] = '';
               allSelection[3].style["borderTopLeftRadius"] = '20px';
               allSelection[3].style["borderTopRightRadius"] = '20px';
               allDetails.style.display = 'block';
               console.log("successfully");
               document.getElementById('safetyDown').classList.add('fa-rotate-180');
     
          }
          else{
               allSelection[3].style.borderRadius = '20px';
               document.getElementById('safetyDown').classList.remove('fa-rotate-180');
               allDetails.style.display = 'none';
               console.log("success");
          }
     }
     )
