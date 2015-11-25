(function($){
      
    // defines various easing effects
    $.easing['jswing'] = $.easing['swing'];
    $.extend( $.easing,
    {
            def: 'easeOutQuad',
            swing: function (x, t, b, c, d) {
                    return $.easing[$.easing.def](x, t, b, c, d);
            },
            easeInQuad: function (x, t, b, c, d) {
                    return c*(t/=d)*t + b;
            },
            easeOutQuad: function (x, t, b, c, d) {
                    return -c *(t/=d)*(t-2) + b;
            },
            easeInOutQuad: function (x, t, b, c, d) {
                    if ((t/=d/2) < 1) return c/2*t*t + b;
                    return -c/2 * ((--t)*(t-2) - 1) + b;
            },
            easeInCubic: function (x, t, b, c, d) {
                    return c*(t/=d)*t*t + b;
            },
            easeOutCubic: function (x, t, b, c, d) {
                    return c*((t=t/d-1)*t*t + 1) + b;
            },
            easeInOutCubic: function (x, t, b, c, d) {
                    if ((t/=d/2) < 1) return c/2*t*t*t + b;
                    return c/2*((t-=2)*t*t + 2) + b;
            },
            easeInQuart: function (x, t, b, c, d) {
                    return c*(t/=d)*t*t*t + b;
            },
            easeOutQuart: function (x, t, b, c, d) {
                    return -c * ((t=t/d-1)*t*t*t - 1) + b;
            },
            easeInOutQuart: function (x, t, b, c, d) {
                    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                    return -c/2 * ((t-=2)*t*t*t - 2) + b;
            },
            easeInQuint: function (x, t, b, c, d) {
                    return c*(t/=d)*t*t*t*t + b;
            },
            easeOutQuint: function (x, t, b, c, d) {
                    return c*((t=t/d-1)*t*t*t*t + 1) + b;
            },
            easeInOutQuint: function (x, t, b, c, d) {
                    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                    return c/2*((t-=2)*t*t*t*t + 2) + b;
            },
            easeInSine: function (x, t, b, c, d) {
                    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
            },
            easeOutSine: function (x, t, b, c, d) {
                    return c * Math.sin(t/d * (Math.PI/2)) + b;
            },
            easeInOutSine: function (x, t, b, c, d) {
                    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
            },
            easeInExpo: function (x, t, b, c, d) {
                    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
            },
            easeOutExpo: function (x, t, b, c, d) {
                    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            },
            easeInOutExpo: function (x, t, b, c, d) {
                    if (t==0) return b;
                    if (t==d) return b+c;
                    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function (x, t, b, c, d) {
                    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
            },
            easeOutCirc: function (x, t, b, c, d) {
                    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
            },
            easeInOutCirc: function (x, t, b, c, d) {
                    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
            },
            easeInElastic: function (x, t, b, c, d) {
                    var s=1.70158;var p=0;var a=c;
                    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                    if (a < Math.abs(c)) { a=c; var s=p/4; }
                    else var s = p/(2*Math.PI) * Math.asin (c/a);
                    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            },
            easeOutElastic: function (x, t, b, c, d) {
                    var s=1.70158;var p=0;var a=c;
                    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                    if (a < Math.abs(c)) { a=c; var s=p/4; }
                    else var s = p/(2*Math.PI) * Math.asin (c/a);
                    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
            },
            easeInOutElastic: function (x, t, b, c, d) {
                    var s=1.70158;var p=0;var a=c;
                    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
                    if (a < Math.abs(c)) { a=c; var s=p/4; }
                    else var s = p/(2*Math.PI) * Math.asin (c/a);
                    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
            },
            easeInBack: function (x, t, b, c, d, s) {
                    if (s == undefined) s = 1.70158;
                    return c*(t/=d)*t*((s+1)*t - s) + b;
            },
            easeOutBack: function (x, t, b, c, d, s) {
                    if (s == undefined) s = 1.70158;
                    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
            },
            easeInOutBack: function (x, t, b, c, d, s) {
                    if (s == undefined) s = 1.70158; 
                    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
            },
            easeInBounce: function (x, t, b, c, d) {
                    return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
            },
            easeOutBounce: function (x, t, b, c, d) {
                    if ((t/=d) < (1/2.75)) {
                            return c*(7.5625*t*t) + b;
                    } else if (t < (2/2.75)) {
                            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                    } else if (t < (2.5/2.75)) {
                            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                    } else {
                            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                    }
            },
            easeInOutBounce: function (x, t, b, c, d) {
                    if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
                    return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
            }
    });
    
    $.fn.animatescroll = function(options) {
        
        // fetches options
        var opts = $.extend({},$.fn.animatescroll.defaults,options);

        // make sure the callback is a function
        if (typeof opts.onScrollStart == 'function') {
            // brings the scope to the callback
            opts.onScrollStart.call(this);
        }
                
        if(opts.element == "html,body") {
            // Get the distance of particular id or class from top
            var offset = this.offset().top;
        
            // Scroll the page to the desired position
            $(opts.element).stop().animate({ scrollTop: offset - opts.padding}, opts.scrollSpeed, opts.easing);
        }
        else {
            // Scroll the element to the desired position
            $(opts.element).stop().animate({ scrollTop: this.offset().top - this.parent().offset().top + this.parent().scrollTop() - opts.padding}, opts.scrollSpeed, opts.easing);
        }

        setTimeout(function() {

            // make sure the callback is a function
            if (typeof opts.onScrollEnd == 'function') {
                // brings the scope to the callback
                opts.onScrollEnd.call(this);
            }
        }, opts.scrollSpeed);
    };
    
    // default options
    $.fn.animatescroll.defaults = {        
        easing:"swing",
        scrollSpeed:800,
        padding:0,
        element:"html,body"
    };   
    
}(jQuery));


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
	
	$('.about').click(function(){
		$('#estudios').animatescroll({scrollSpeed:2000});
	});
	
	$('.home').click(function(){
		$('#inicio').animatescroll({scrollSpeed:2000});
	});
	
	$('.services').click(function(){
		$('#sobremi').animatescroll({scrollSpeed:2000});
	});
	$('.contact').click(function(){
		$('#contacto').animatescroll({scrollSpeed:2000});
	});
});

function verImagenes(){ 
	var scroll = $(window).scrollTop();
	scroll = scroll +  (window.innerHeight/2);
	var posEsqui = Math.round($('#esqui').offset().top); 
	if(posEsqui < scroll){
		$('#nieve').css('marginRight', '10%');
		$('#nieve').css('opacity', '1');
	  }else {
		// vuelve a dejar el <div> como estaba al hacer el "mouseout"
		$('#nieve').css('marginRight', '16%');
		$('#nieve').css('opacity', '0');}
	
	var posGolf = Math.round($('#golf').offset().top); 
	if(posGolf < scroll){
		$('#golfista').css('marginRight', '10%');
		$('#golfista').css('opacity', '1');
	 }else {
		// vuelve a dejar el <div> como estaba al hacer el "mouseout"
		  $('#golfista').css('marginRight', '16%');
		$('#golfista').css('opacity', '0');
	 }
	
	var posFutbol = Math.round($('#futbol').offset().top); 
	if(posFutbol < scroll){
		$('#jugando').css('marginLeft', '10%');
		$('#jugando').css('opacity', '1');
	 }else {
		 $('#jugando').css('marginLeft', '16%');
			$('#jugando').css('opacity', '0');
	 }
	
	var posPintar = Math.round($('#pintar').offset().top); 
	if(posPintar < scroll){
		$('#pintando').css('marginLeft', '10%');
		$('#pintando').css('opacity', '1');
	 }else {
		 $('#pintando').css('marginLeft', '16%');
			$('#pintando').css('opacity', '0');
	 }
	
	var posPadel = Math.round($('#padel').offset().top); 
	if(posPadel < scroll){
		$('#imgpadel').css('marginRight', '10%');
		$('#imgpadel').css('opacity', '1');
	 }else {
		 $('#imgpadel').css('marginRight', '16%');
			$('#imgpadel').css('opacity', '0');
	 }
	
	var posSurf = Math.round($('#surf').offset().top); 
	if(posSurf < scroll){
		$('#imgsurf').css('marginLeft', '10%');
		$('#imgsurf').css('opacity', '1');
	 }else {
		 $('#imgsurf').css('marginLeft', '16%');
		$('#imgsurf').css('opacity', '0');
	 }
	
	var posRuta = Math.round($('#rutas').offset().top); 
	if(posRuta < scroll){
		$('#imgrutas').css('opacity', '1');
	 }else {
		 $('#imgrutas').css('opacity', '0');
	 }
	
	setTimeout("verImagenes()", 100);
}
setTimeout("verImagenes()", 100);

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
