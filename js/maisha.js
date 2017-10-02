jQuery(document).ready(function($) {


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

$('.hamburger-container').click(function(event) {
		event.stopPropagation();
        $('.site-menu-container').toggleClass('drop');
        return false;
    });

 $(document).click(function(evt) {
    var target = evt.currentTarget;
    var inside = $(".site-menu-container");
    var hasDrop = $(".site-menu-container").hasClass("drop");

    if (target != inside && hasDrop) {
        $('.site-menu-container').removeClass('drop');
    }

});

});