var progressBar=document.getElementById("progressbar");
var percent=document.getElementById("percent");

var totalHeight =document.body.scrollHeight-window.innerHeight;
window.onscroll=function(){
    var progress=(window.pageYOffset/totalHeight)*100;
    progressBar.style.height=progress+"%";
    percent.innerHTML="Page Scrolled"+Math.round(progress)+"%";
}