

 var icon= document.getElementById("icon");
 icon.onclick = function(){
     document.body.classList.toggle("darktheme");
 }

const tabsContainer = document.querySelector(".tab");
const section = document.querySelector(".about-right");
tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-items") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        section.querySelector(".tab-content.active").classList.remove("active");
       section.querySelector(target).classList.add("active");
    }
});