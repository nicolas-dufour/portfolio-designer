var menuToggle=document.getElementById("navIco");
menuToggle.addEventListener("click",toogleMenu);
function toogleMenu(event){
	var classes=menuToggle.classList;
	if(classes.contains("bars")){
		menuToggle.innerHTML="<i class='fas fa-times'></i>";
		menuToggle.classList.remove("bars")
		menuToggle.style.color="white";
		showNav();
	}
	else{
		menuToggle.innerHTML="<i class='fas fa-bars'></i>";
		menuToggle.classList.add("bars");
		menuToggle.style.color="black";
		hideNav();
	}
}
function hideNav(){
	var menu=document.getElementById("navContainer");
	menu.classList.remove('openNav');
}
function showNav(){
	var menu=document.getElementById("navContainer");;
	menu.classList.add('openNav');
}

// PArralax
(function() {
  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      var translateY=layer.getAttribute('data-translateY')
      movement = translateY-(topDistance * depth);
      translate3d = 'translate3d(0, calc('+translateY+'vh + ' + movement + 'px), 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
    var name=document.getElementById("nameCenter");
    movement=-(topDistance * name.getAttribute('data-depth'));
    name.style.transform='translate3d(0, calc(-50% + ' + movement + 'px), 0)';
  });

}).call(this);
