
let progress=document.getElementById("pro");
let song=document.getElementById("song")
let ctrl=document.getElementById("ctrl");


function playpause(){

    if(ctrl.classList.contains("fa-pause")){

        song.pause();
        ctrl.classList.remove("fa-pause");
        ctrl.classList.add("fa-play");
    }

    else{

        song.play();
        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");

    }
}



song.onloadmetadata=function(){

    progress.max=song.duration;
    progress.value=song.currentTime;


}


// JavaScript to handle sidebar toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('show');
});
