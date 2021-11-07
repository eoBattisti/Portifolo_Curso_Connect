$( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( ".icone" ).removeClass("fas fa-moon fa-2x");
        $( ".icone" ).addClass("fas fa-sun fa-2x");
    } else {
        $( "body" ).addClass( "dark" );
        $( ".icone" ).removeClass("fas fa-sun fa-2x");
        $( ".icone" ).addClass("fas fa-moon fa-2x");
    }
});

function openTab(evt, tabName){
    var i, tabContent, navButton;

    tabContent = document.getElementsByClassName("tabcontent");
    for(i = 0; i <tabContent.length; i++){
            tabContent[i].style.display = "none";
            
    }

    navButton = document.getElementsByClassName("nav-buttons");
    for(i = 0; i < navButton.length; i++){
        navButton[i].className = navButton[i].className.replace(" active", "");
    }
    if(tabName === "AboutMT"){
        document.getElementById("btnMT").style.borderLeft = "7px solid var(--extra-color)";

    }
    if(tabName !== "AboutMT"){
        document.getElementById("AboutMT").style.display = "none";
        document.getElementById("btnMT").style.borderLeft = "7px solid var(--primary-color)";
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
    document.getElementById("btnMT").style.borderLeft = "7px solid var(--extra-color)";
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}