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

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Apply dark mode styles to all sections needing dark mode colors
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('.header-text').classList.toggle('dark-mode');
    document.querySelector('.sub-title').classList.toggle('dark-mode');
    document.querySelector('.projects-list').classList.toggle('dark-mode');
    document.querySelector('form').classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Load user's saved theme preference
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('nav').classList.add('dark-mode');
        document.querySelector('.header-text').classList.add('dark-mode');
        document.querySelector('.sub-title').classList.add('dark-mode');
        document.querySelector('.projects-list').classList.add('dark-mode');
        document.querySelector('form').classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
};
