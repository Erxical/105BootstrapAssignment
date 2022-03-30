var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
function getExcited(){
    document.getElementById('getExciting').style.display="block";
    var vid = document.getElementById('getExciting');
    vid.play();
    document.getElementById('getExciting').requestFullscreen();
}