function navbarFadeOut(){
	document.getElementById("nv").style.display="none";
}
function navbarFadeIn(){
	document.getElementById("nv").style.display="block";
}

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       navbarFadeOut();
   }
   else if($(window).scrollTop() + $(window).height() < $(document).height()) {
       navbarFadeIn();
   }
});