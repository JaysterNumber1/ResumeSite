
function goToHome(){
    window.location.href = "index.html";
}
function goToAbout(){
    window.location.href = "aboutMe.html";
}
function goToComputer(){
    window.location.href = "computerTalent.html";
}
function goToCAD(){
    window.location.href = "cadDesign.html";
}
function goToContact(){
    window.location.href = "contact.html";
}

function openSide(){


    document.getElementById("Sidebar").style.left = "-30vw";
    document.getElementById("Sidebar").style.transition = "1s";
}


function closeSide(){
    //document.getElementById("Sidebar").style.display = "none";
   
    document.getElementById("Sidebar").style.left = "0vw";
}

//background:   linear-gradient(rgba(255, 255, 255, 0.5),rgba(206, 206, 206, 0.5));