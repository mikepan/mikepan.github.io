(function($) {
	
	$.fn.slideview = function(slides, settings) {
		return this.each(function() {
			init(this, slides, settings);
		});
	}
	
	function init(element, slides, settings, rootPath) {
		if ($.isFunction(slides)) slides = slides(element);
		size = settings.size || 75;
		
		$viewport  = $(element).css({ overflow: 'hidden', width: size[0] + 'px', height: size[1] + 'px'}).addClass('slideview-viewport').empty();
		$container = $('<div></div>').css({ overflow: 'hidden', margin: 0, padding: 0, border: 0, height: size[1] + 'px', width: (size[0]*slides.length) + 'px' })
										.addClass('slideview-container').appendTo($viewport);
		
		for (i = 0; i < slides.length; i++) {
			$('<div><img src="content/thumbs/'+ slides[i] + '" alt="" style="width:100%;"/></div>')
				.css({ margin: 0, padding: 0, width: size[0] + 'px', height: size[1] + 'px', overflow: 'hidden', 'float': 'left', border: 0 })
				.addClass('slideview-slide').appendTo($container);
		}
		
		// $viewport.bind('mousemove.slideview', function(evt) {
		// 	x = evt.pageX - this.offsetLeft;
		// 	offset = Math.floor(x / (size[0] / slides.length)) * size[0];
		// 	$(this).animate({ scrollLeft: offset }, 0);
		// 	return false;
		// });

		$viewport.on({'mousemove touchmove': function(evt) {
			x = evt.pageX - this.offsetLeft;
			offset = Math.floor(x / (size[0] / slides.length)) * size[0];
			$(this).animate({ scrollLeft: offset }, 0);
			return false;
		}})
	}
	
})(jQuery);