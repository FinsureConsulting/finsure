/*globals history, document, window, jQuery */
/*!
	semanticPopup
	Copyright	Paul Wisniowski
	License		MIT
	Version		1.0.0

	http://psdhtml.me
*/
(function ($) {
	"use strict";
	$.openPopup = function (t) {
		var el = $('a[data-popup="' + t + '"]');
		if (el.length) {
			$('[class^=popup].shown').removeClass('shown');
			$('[class^=popup][data-title="' + t + '"]').addClass('shown').attr({
				'focusable': true,
				'aria-hidden': false
			});
			$(document.documentElement).addClass('popup-shown')
		}
	};
	$.fn.semanticPopup = function () {
		var html_tag = $(document.documentElement),
			co = $(this);
		$(this).attr({
			'focusable': false,
			'aria-hidden': true
		}).wrapInner('<div class="box-outer"><div class="box-inner"><div class="box-inset"></div></div></div>');
		html_tag.addClass('spi');
		$(this).each(function (i) {
			$(this).attr({
				'aria-labelledby': $(this).attr('data-title') + '-tab',
				'aria-describedby': $(this).attr('data-title') + '-tab',
				'id': $(this).attr('data-title')
			});
			$('[data-popup="' + $(this).attr('data-title') + '"]').attr({
				'id': $(this).attr('data-title') + '-tab',
				'aria-controls': $(this).attr('data-title'),
				'aria-haspopup': 'true',
				'href': '#' + $(this).attr('data-title')
			});
			$('<a class="close" href="./">Close</a>').appendTo($(this).find('.box-outer, .box-inset'));
			$(this).find('.close, button[type="reset"]').on('click', function () {
				co.filter('.shown').removeClass('shown').attr({
					'focusable': false,
					'aria-hidden': true
				}).addClass('unshown').delay(500).queue(function () {
					$(this).removeClass('unshown').dequeue()
				});
				html_tag.removeClass('popup-shown');
				return false
			}).prev().addClass('last-child');
			$(this).addClass('ready')
		});
		$('body').on('submit', 'form[data-popup]', function () {
			if (!$(this).is('.disabled')) {
				co.filter('.shown').removeClass('shown').attr({
					'focusable': false,
					'aria-hidden': true
				}).addClass('unshown').delay(500).queue(function () {
					$(this).removeClass('unshown').dequeue()
				});
				$('[class^=popup][data-title="' + $(this).attr('data-popup') + '"]').addClass('shown').attr({
					'focusable': true,
					'aria-hidden': false
				});
				html_tag.addClass('popup-shown');
				return false
			}
		});
		$(window).on('keydown', function (e) {
			if (e.which === 27) {
				co.filter('.shown').removeClass('shown').attr({
					'focusable': false,
					'aria-hidden': true
				}).addClass('unshown').delay(500).queue(function () {
					$(this).removeClass('unshown').dequeue()
				});
				html_tag.removeClass('popup-shown')
			}
		});
		return $(this)
	}
})(jQuery);
