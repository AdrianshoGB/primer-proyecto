$(document).ready(function(){

	/* slider */
	$('#slider-marcas').lightSlider({
		adaptiveHeight:true,
		item:8,
		slideMargin:0,
		loop:true,
		auto:true,
		speed:500,
		pause:1000*2,
		controls:false,
		pauseOnHover:true,
		pager:false,
		responsive : [
			{
				breakpoint:470,
				settings: {
					item:3,
				  }
			}
		]
	});

	/* slider */
	$('#slider-categorias').lightSlider({
		adaptiveHeight:true,
		item:6,
		slideMargin:0,
		loop:true,
		auto:true,
		speed:800,
		pause:1000*2,
		controls:false,
		pauseOnHover:true,
		pager:false,
		responsive : [
			{
				breakpoint:470,
				settings: {
					item:2,
				  }
			}
		]
	});


	console.log('ready!');

	$('.slider-inicio').slidePs({ctrl:'.slider-dir',speed:3000});
	
	$(document).on('click','.nav',function(){
		var n = $(this), m = n.parent().find('ul.menu');
		if(!m.is(':visible')){ m.slideDown('fast'); n.addClass('active').find('.fa').attr('class','fa fa-times'); }
		else{ m.slideUp('fast'); n.removeClass('active').find('.fa').attr('class','fa fa-bars'); }
	});

	var ancho = $(window).width();
	
	$(window).resize(function(){
		if(ancho > 767){
			$('ul.menu').removeAttr('style');
			$('.nav').removeClass('active').find('.fa').attr('class','fa fa-bars');
		}
	});
	
	/*$('[data-fancybox]').fancybox({
		buttons : [
			//'slideShow',
			//'fullScreen',
			//'thumbs',
			//'share',
			//'download',
			//'zoom',
			'close'
		],
	});*/

});

/* @ slidePs */
$.fn.extend({
	slidePs: function(options){
		var el = this;
		var defaults = {
			ctrl: '.ctrls',
			speed: 5000,
		}
		var opc = $.extend({}, defaults, options);
		
		this.slide = function(dir){
			var li = el.find('li'), ancho = li.eq(0).outerWidth(true);
			if(el.hasClass('mov')) return false;
			el.addClass('mov');
			if(dir == 'a'){
				el.find('li:eq('+(li.length-1)+')').clone().insertBefore(el.find('li:eq(0)'));
				el.css('margin-left',-1*ancho+'px');
				el.animate({'margin-left': 0+'px' },500, function(){
					el.removeClass('mov');
					li.last().remove();
				});
			}
			if(dir == 's'){
				el.find('li:eq(0)').clone().insertAfter(el.find('li:eq('+(li.length-1)+')'));
				el.animate({'margin-left': -1*ancho+'px'},500, function(){
					li.first().remove();
					el.removeClass('mov');
					el.css('margin-left',0);
				});
			}
		}
		
		this.intervalo = function(){
			setInterval(function(){
				var t = parseInt(el.attr('t')) | 0;
				if(t > 0 && Math.round(+new Date()/1000)-5 < t ) return false;
				el.slide('s');
			},opc.speed);
		}
		
		return this.each(function(){
			el.intervalo();
			el.mouseenter(function(){ el.addClass('mov'); }).mouseleave(function(){ el.removeClass('mov'); });
			$(opc.ctrl).on('click',function(e){
				el.attr('t',Math.round(+new Date()/1000));
				el.slide($(this).attr('dir'));
				return false;
			});
		});
	}
});