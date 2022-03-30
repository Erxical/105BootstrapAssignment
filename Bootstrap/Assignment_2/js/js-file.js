$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
function getExcited(){
    document.getElementById('getExciting').style.display="block";
    var vid = document.getElementById('getExciting');
    vid.play();
    document.getElementById('getExciting').requestFullscreen();
}