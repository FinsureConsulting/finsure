/* -------------------------------------------

	Name:		Finsure
	Date:		2023/01/15
	Author:		http://psdhtml.me

---------------------------------------------  */
/*global jQuery, document, window, yall, setTimeout */
var i = 0,
	img_lazy = document.querySelectorAll('img[data-src]:not(.dont)'),
	isMobile = false;
for (i = 0; i < img_lazy.length; i = i + 1) {
	img_lazy[i].classList.add('lazy');
}

function isTouchDevice() {
	"use strict";
	if (window.matchMedia("(pointer: coarse)").matches) {
		return true;
	} else {
		return false;
	}
}
if (window.mobileCheck() || isTouchDevice()) {
	isMobile = true;
}
document.addEventListener('DOMContentLoaded', function () {
	'use strict';
	yall({
		observeChanges: true,
		threshold: 500
	});
});
jQuery(function () {
	"use strict";
	var
		$ = jQuery.noConflict(),
		html_tag = document.documentElement,

		footer_id = document.getElementById('footer'),
		footer_date = footer_id ? footer_id.querySelectorAll('.date') : [],

		email_tag = document.getElementsByClassName('email'),
		list_logo = $(document.getElementsByClassName('list-logo')),
		list_testimonials = $(document.getElementsByClassName('list-testimonials')),
		text_slider = $(document.getElementsByClassName('text-slider')),

		Default = {
			utils: {
				mails: function () {
					if (email_tag.length) {
						Array.from(email_tag).filter(function (el) {
							return el.tagName.toLowerCase() !== 'input' && el.tagName.toLowerCase() !== 'div';
						}).forEach(function (el) {
							el.innerText = el.innerText.replace('//', '@').replace(/\//g, '.');
							if (el.tagName.toLowerCase() === 'a') {
								el.setAttribute('href', 'mailto:' + el.innerText);
							}
						});
					}
				},
				date: function () {
					if (footer_date.length) {
						footer_date[0].innerText = (new Date()).getFullYear();
					}
				},
				mobile: function () {
					if (isMobile) {
						html_tag.classList.add('mobile');
					} else {
						html_tag.classList.add('no-mobile');
					}
				},
				done: function () {
					var tag = document.createElement('script');
					tag.src = "javascript/scripts-async.js";
					document.body.appendChild(tag);
				},
				miscellaneous: function () {
					if (list_testimonials.length || text_slider.length) {
						list_testimonials.add(text_slider).each(function () {
							var im = $(this),
								li = false,
								no = [1, 1, 1];

							if (im.is('[data-linked]')) {
								li = '[data-linked="' + im.attr('data-linked') + '"] .inner';
							}
							if (im.is('.small')) {
								no = [3, 2, 1];
							}
							if (im.children().length > no[0]) {
								im.owlLayout().children('.inner').owlCarousel({
									loop: true,
									nav: true,
									dots: false,
									autoHeight: true,
									lazyLoad: true,
									margin: 32,
									items: no[0],
									linked: li,
									onInitialized: function () {
										$(this.$element).owlSemantic();
									},
									onTranslated: function () {
										$(this.$element).owlSemantic();
									},
									responsive: {
										0: {
											items: no[2]
										},
										760: {
											items: no[1]
										},
										1000: {
											items: no[0]
										}
									}
								});
							}
						});
					}
					if (list_logo.length) {
						list_logo.filter('.slider').each(function () {
							var im = $(this);
							if (im.children().length > 1) {
								im.owlLayout().children('.inner').owlCarousel({
									loop: true,
									nav: false,
									dots: false,
									autoHeight: true,
									//autoWidth: true,
									lazyLoad: true,
									margin: 32,
									autoplay: true,
									autoplayTimeout: 5000,
									autoplaySpeed: 5000,
									autoplayHoverPause: false,
									slideTransition: 'linear',
									onInitialized: function () {
										$(this.$element).owlSemantic();
									},
									onTranslated: function () {
										$(this.$element).owlSemantic();
									}
								});
							}
						});
					}
				}
			}

		};
	setTimeout(function () {
		Default.utils.mails();
		Default.utils.date();
		Default.utils.miscellaneous();
		Default.utils.mobile();
		Default.utils.done();
	}, 0);
});

/*!*/
hljs.highlightAll();