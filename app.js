console.log("app.js LOAD");

displaymenu = false;
ulnav = document.getElementById("ulnav");


function MenuMobile(){
    console.log("> MenuMobile");
    // console.log(displaymenu);
    if(displaymenu === false){
        displaymenu = true;
        console.log(displaymenu);
        ulnav.classList.remove("nonactive");
        ulnav.classList.add("active");
    } else{
        displaymenu = false,
        console.log(displaymenu);
        ulnav.classList.remove("active");
        ulnav.classList.add("nonactive");
    }


}
