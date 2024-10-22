const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');
const sidemenu = document.getElementById("sidemenu");



function opentab(tab){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tab).classList.add("active-tab")
}

function openMenu(){
    sidemenu.style.right=0;
}
function closeMenu(){
    sidemenu.style.right="-200px";
}