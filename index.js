var menuItems = document.getElementById("menuitems")
menuItems.style.maxHeight = "0px";
function toggleMenu(){
    if(menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "200px";
    }
    else{
        menuItems.style.maxHeight = "0px";
    }
}