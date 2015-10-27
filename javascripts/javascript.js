var desp = innerWidth/2;
var desp2 = 0;

function desplazarseLateral() {
	var im = document.getElementById('pablo');
	var im2 = document.getElementById('bravo');
	desp=desp+1;
	desp2=desp2-1;
	if(desp==(innerWidth/2)+1){
		setTimeout("desplazarseLateral()", 3000);
		return;
	}
	
	im.style.right = desp+"px";
	im2.style.right = desp2+"px";
	
	if(desp>innerWidth){
		im.style.display= "none";	
		im2.style.display= "none";	
		return;
	}	
	setTimeout("desplazarseLateral()", 1);
}

setTimeout("desplazarseLateral()", 1);

$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});
 
function moverImagenes(){ 
if($(window).width() >= 999){
  $(function() {
	  $('#esqui').hover(function() {
		$('#nieve').css('marginRight', '10%');
		$('#nieve').css('opacity', '1');
	  }, function() {
		// vuelve a dejar el <div> como estaba al hacer el "mouseout"
		$('#nieve').css('marginRight', '16%');
		$('#nieve').css('opacity', '0');
	  });
});

  $(function() {
  $('#golf').hover(function() {
	$('#golfista').css('marginRight', '10%');
	$('#golfista').css('opacity', '1');
  }, function() {
    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
	$('#golfista').css('marginRight', '16%');
	$('#golfista').css('opacity', '0');
  });
});

  $(function() {
  $('#futbol').hover(function() {
	$('#jugando').css('marginLeft', '10%');
	$('#jugando').css('opacity', '1');

  }, function() {
    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
	$('#jugando').css('marginLeft', '16%');
	$('#jugando').css('opacity', '0');
  });
});

  $(function() {
  $('#pintar').hover(function() {
	$('#pintando').css('marginLeft', '10%');
	$('#pintando').css('opacity', '1');
  }, function() {
    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
	$('#pintando').css('marginLeft', '16%');
	$('#pintando').css('opacity', '0');
  });
});

$(function() {
	  $('#padel').hover(function() {
		$('#imgpadel').css('marginRight', '10%');
		$('#imgpadel').css('opacity', '1');
	  }, function() {
		// vuelve a dejar el <div> como estaba al hacer el "mouseout"
		$('#imgpadel').css('marginRight', '16%');
		$('#imgpadel').css('opacity', '0');
	});
});
$(function() {
  $('#surf').hover(function() {
	$('#imgsurf').css('marginLeft', '10%');
	$('#imgsurf').css('opacity', '1');
  }, function() {
    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
	$('#imgsurf').css('marginLeft', '16%');
	$('#imgsurf').css('opacity', '0');
  });
});
$(function() {
  $('#rutas').hover(function() {
	$('#imgrutas').css('opacity', '1');
  }, function() {
    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
	$('#imgrutas').css('opacity', '0');
  });
});
}
else if($(window).width() > 500){
	$('#nieve').css('marginRight', '10%');
	$('#nieve').css('opacity', '1');
	$('#golfista').css('marginRight', '10%');
	$('#golfista').css('opacity', '1');
	$('#jugando').css('marginLeft', '10%');
	$('#jugando').css('opacity', '1');
	$('#pintando').css('marginLeft', '10%');
	$('#pintando').css('opacity', '1');
	$('#imgpadel').css('marginRight', '10%');
	$('#imgpadel').css('opacity', '1');
	$('#imgsurf').css('marginLeft', '10%');
	$('#imgsurf').css('opacity', '1');
	$('#imgrutas').css('marginRight', '5%');
	$('#imgrutas').css('opacity', '1');
}
  setTimeout("moverImagenes()", 1000);
}
setTimeout("moverImagenes()", 1000);

function moverNombre(){
	var work = document.getElementById('movernombre');
	if (window.innerWidth>1000) {	
		var scrll= $(document).scrollTop().valueOf();
		if(scrll<=50){
			work.style.marginTop="120px";
		}
		else if(scrll > 50 && scrll<300){
			var m = scrll*2;
			work.style.marginTop=m+"px";
		}
		if(scrll<=50){
			work.style.color="#2c3b55";
			work.style.opacity="1"
		}
		else if(scrll>50 && scrll<=100){
			work.style.color="#CECEF6";
			work.style.opacity="0.6"
		}
		else if(scrll>100 && scrll<=200){
			work.style.color="#CECEF6";
			work.style.opacity="0.4"
		}
		else if(scrll>200 && scrll<=270){
			work.style.color="#CECEF6";
			work.style.opacity="0.2"
		}
		else if(scrll>270){
			work.style.color="#CECEF6";
			work.style.opacity="0.2"
			work.style.marginTop="45%";
		}
	}
	else{
		work.style.color="#2c3b55";
		work.style.opacity="1"
		work.style.marginTop="120px";
	}
	
  
  setTimeout("moverNombre()", 100);
}
setTimeout("moverNombre()", 100);

/*
function agregar(){
var work = document.getElementById('work');
	var scrll= $(document).scrollTop().valueOf();
	if(scrll > 800){
		work.style.visibility="visible";
		work.style.height="15em";
	}
	else{
		work.style.visibility="hidden";
	}
  
  setTimeout("agregar()", 8);
}
setTimeout("agregar()", 8);*/

/*MENU*/

$(document).ready(function () {
		var base_html = 'http://pablobravo.es/';
		loadFunctions(base_html);					
	});	

// -- RUN JS  -- 
var base_html = '';
var is_mobile = false;
// -- VARIABLES DEL SCROLL 
var pageOffsets = [];// cache pages' document position
var pageOffsetsInverso = [];// cache pages' document inverse position
var navPages;

var arePluginsLoaded = false;
/* SCROLL HIDDEN WHEN SCROLL DOWN */
var didScroll;
var lastScrollTop = 0;
var delta = 5;

function loadFunctions(base){	
	base_html = base;
	// GENERAL
	openMenu();	
}
function openWork(){
	var work = document.getElementById('work');
	var scroll_pos = $(window).scrollTop();
	if(scroll_pos > 3){
		work.style.visibility("visible");
	}
}

function openMenu(){
	$("html, body").addClass("overflow");
	$("nav .menu-button .button").click(function(){
		actionMenu();
	});
	$("body").keydown(function(e) {
		if($("nav .active").hasClass("active")){
			if(e.keyCode == 27) { // esc
				actionMenu();
			}
		}
	});
}

// FunciÃ³n auxiliar que maneja las acciones del menÃº
function actionMenu(){
	$("nav .menu-button").parents("header").toggleClass("active");
	$("nav").toggleClass("active");
	$("html, body").toggleClass("overflow");
}

function homeAnimations(){
	if($(window).width() <= 1023){
		is_mobile = true;
	}

	$(document).scroll(function(){
		updateNavHome();
	});

	adjustTopHeight();
	animateFace();
	playVideoButton();
	scrollDownButton();
	barsClick();
}

function updateNavHome(){
	var scroll_pos = $(window).scrollTop();
	if($(".home").size() != 0){
		if($(window).width() <= 400){
			if(scroll_pos > 10){
				$("nav").addClass("dark");
			}else{
				$("nav").removeClass("dark");
			}
		}else{
			var bars_pos = $(".home .bars").offset().top - 90;
			if(bars_pos - scroll_pos < 0){
				$("nav").addClass("dark");
			}else{
				$("nav").removeClass("dark");
			}
		}
	}
}

function adjustTopHeight(){
	if(is_mobile){
		$(".home .top").height($(window).height());
	}
}


function playVideoButton(){
	var video = $('video').get(0);
	if(video != null){		
		$(".video-container .playvideo p").click(			
			function(){				
				if($(".video-container").hasClass("playing")){
					$("nav").removeClass("dark");
					$(".video-container").removeClass("playing");
					unlockHomeScroll();
					var teaser = $('video').attr('data-teaser');
					$('video').attr('src', teaser);
					$('video').attr('loop');
					video.pause();
				}else if($(".video-container").hasClass("restart")){
					$(".video-container").removeClass("restart");
					if(video.paused)
						video.play();					
				} else{			
					$("nav").addClass("dark").addClass('is-playing');
					lockHomeScroll();
					var src = $('video source.mp4').attr('src');
					$(".video-container").addClass("playing");
					$('video').attr('src', src);
					$('video').attr('controls', true);
					$('video').removeAttr('loop');
					if(video.paused)
						video.play();
					video.onended = function(e){			
						$("nav").removeClass("dark").removeClass('is-playing');
						$(".video-container").removeClass("playing");
						unlockHomeScroll();
						var teaser = $('video').attr('data-teaser');
						$('video').attr('src', teaser);
					}
				}
			}
		);
		$(".video-pulguche-container .playvideo p").click(			
			function(){				
				var $video = $('video#pulguche');		
				var video = $video.get(0);
				$('nav').addClass('fixed-section');
				$(".video-pulguche-container").toggleClass('is-playing');
				if(video.paused){
					video.play();					
					video.onended = function(e){			
						$(".video-pulguche-container").removeClass('is-playing');
						video.pause();
						video.currentTime = 0;
					}
				} else{			
					video.pause();
					video.currentTime = 0;
					
				}
			}
		);
	}
}

function scrollDownButton(){
	$(".home .top .scrolldown").click(
		function(){
			$(".home").attr("id", "pos2");
			var video = document.getElementsByTagName('video')[0];
			video.pause();
		}
	);
}

function lockHomeScroll(){
	$("html").addClass("block");
	$(window).unbind('mousewheel');
}
function unlockHomeScroll(){
	$("html").removeClass("block");
	if(!is_mobile){
		setTimeout(
			function(){	
				$(window).bind('mousewheel', function(e) {
					if(e.originalEvent.wheelDelta / 120 > 0) {
						homeMoveUp();
					} else {
						homeMoveDown();
					}
				});
			}, 
			1000
		);
	}
}

function homeMoveDown(){
	if($('.home').size() > 0){
		lockHomeScroll();
		var position = $(".home").attr("id").replace("pos", "");

		/* CAMBIAR AQUÃ PARA LO DEL FOOTER */
		if(position < 2){
			position++;
		}

		$(".home").attr("id", "pos"+position);
		unlockHomeScroll();

		var video = document.getElementsByTagName('video')[0];
		video.pause();
	}
}
function homeMoveUp(){
	if($('.home').size() > 0){
		lockHomeScroll();
		var position = $(".home").attr("id").replace("pos", "");

		if(position > 1){
			position--;
		}

		$(".home").attr("id", "pos"+position);
		unlockHomeScroll();

		var video = document.getElementsByTagName('video')[0];
		if(video.paused)
			video.play();
	}
}

// REMOVING COOKIES WHEN CLICK AND PUT IN SESSION
function removeCookies(){
	$('.cookies .close').on('click', function(){
		$.ajax({
			url		:	"lib/ajax/remove-cookies.php", 
			type	: 	"POST",
			async 	: 	false,
			success	: 	function(data) {
							$('#wrapper-cookies').html(data);
						}
		});
	})
}
