const named = document.getElementsByClassName("menubar");
const navmenu = document.getElementById("Nav");
const navbtn   = document.getElementById("Navbtn");
const projects  = document.getElementById("Project")
navmenu.addEventListener('click',()=>{
  for(i=0;i<named.length;i++){
   
        named[i].classList.toggle('display');
   
  } 
menucreation();
});
function menucreation(){
    const fullmenu = document.createElement("div");

    fullmenu.classList.add("fullmenu");

    navbtn.appendChild(fullmenu);
    navigation(fullmenu);
}
const navigator5 = document.createElement("img");


function navigation(box){
    const navigator1 = document.createElement("img");
    navigator1.setAttribute('src',"./img/home-icon.png");
    navigator1.classList.add('Navigatoricon')
    box.appendChild(navigator1);
linknav(navigator1,projects);
    

    const navigator2 = document.createElement("img");
    navigator2.setAttribute('src',"./img/computer-repair-icon.png");
    navigator2.classList.add('Navigatoricon')
    box.appendChild(navigator2);

    const navigator3 = document.createElement("img");
    navigator3.setAttribute('src',"./img/professional-skills-icon.png");
    navigator3.classList.add('Navigatoricon')
    box.appendChild(navigator3);

    const navigator4 = document.createElement("img");
    navigator4.setAttribute('src',"./img/male-services-support-icon.png");
    navigator4.classList.add('Navigatoricon')
    box.appendChild(navigator4);

    
    navigator5.setAttribute('src',"./img/chevron-direction-right-icon.png");
    navigator5.classList.add('Navigatoricon')
    box.appendChild(navigator5);
   
    navigator5.addEventListener('click',()=>{
        box.style.display = 'none';
        for(i=0;i<named.length;i++){
       
            named[i].classList.remove('display');
       
      }
    
    });

}
function linknav(nav1,destination){
nav1.addEventListener('click',()=>{
    destination.scrollIntoView({behavior:"smooth",block:"start"});})
}