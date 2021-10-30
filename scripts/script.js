function openTab(evt, tabName){
    var i, tabContent, navButton, subMenuButton;

    tabContent = document.getElementsByClassName("tabcontent");
    for(i = 0; i <tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    navButton = document.getElementsByClassName("nav-buttons");
    for(i = 0; i < navButton.length; i++){
        navButton[i].className = navButton[i].className.replace(" active", "");
    }
    if(tabName === "AboutMT"){
        document.getElementById("btnMT").style.borderLeft = "7px solid green";

    }
    if(tabName !== "AboutMT"){
        document.getElementById("AboutMT").style.display = "none";
        document.getElementById("btnMT").style.borderLeft = "7px solid var(--gray)";
    }
    
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
    
}

function openMenuTab(evt, tabName){
    var i, tabContent, navButton;

    tabContent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    navButton = document.getElementsByClassName("nav-buttons");
    for(i = 0; i < navButton.length; i++){
        navButton[i].className = navButton[i].className.replace(" active", "");
    }
    document.getElementById("btnMT").style.borderLeft = "7px solid green";
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}