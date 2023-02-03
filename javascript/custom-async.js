/*global jQuery, enquire, document, window, ariaRemove, ariaAdd */
jQuery(function () {
	"use strict";
	var
		$ = jQuery.noConflict(),
		html_tag = $(document.documentElement),

		nav_id = $(document.getElementById('nav')),
		skip_id = document.getElementById('skip'),
		top_id = $(document.getElementById('top')),

		a_tag_external = document.querySelectorAll('a[rel*="external"]'),
		form_children = document.querySelectorAll('form > *'),
		form_filters = $(document.getElementsByClassName('form-filters')),
		list_events = $(document.getElementsByClassName('list-events')),

		loadRes = function (u, c, i) {
			if (html_tag.is('.' + i)) {
				c();
				return true;
			}
			var s = document.createElement('script');
			s.src = u;
			s.async = true;
			s.onload = c;
			document.body.appendChild(s);
			html_tag.not('.' + i).addClass(i);
			return true;
		},

		Default = {
			async: {
				links: function () {
					if (a_tag_external.length) {
						Array.from(a_tag_external).forEach(function (el) {
							el.setAttribute('rel', 'external noopener');
							el.addEventListener('click', function (e) {
								e.preventDefault();
								window.open(this.attributes.href.value);
							});
						});
					}
				},
				forms: function () {
					if (form_children.length) {
						Array.from(form_children).forEach(function (el, i) {
							el.style.zIndex = (form_children.length - i);
						});
					}
				},
				responsive: function () {
					var desktop_hide = Array.from(document.getElementsByClassName('desktop-hide')),
						desktop_only = Array.from(document.getElementsByClassName('desktop-only')),
						tablet_hide = Array.from(document.getElementsByClassName('tablet-hide')),
						tablet_only = Array.from(document.getElementsByClassName('tablet-only')),
						mobile_hide = Array.from(document.getElementsByClassName('mobile-hide')),
						mobile_only = Array.from(document.getElementsByClassName('mobile-only'));

					enquire.register('screen and (min-width: 1001px)', function () {
						if (desktop_only.length || tablet_hide.length || mobile_hide.length) {
							ariaRemove(desktop_only.concat(tablet_hide).concat(mobile_hide));
						}
						if (desktop_hide.length || tablet_only.length || mobile_only.length) {
							ariaAdd(desktop_hide.concat(tablet_only).concat(mobile_only));
						}
					}).register('screen and (min-width: 761px) and (max-width: 1000px)', function () {
						if (desktop_hide.length || tablet_only.length || mobile_hide.length) {
							ariaRemove(desktop_hide.concat(tablet_only).concat(mobile_hide));
						}
						if (desktop_only.length || tablet_hide.length || mobile_only.length) {
							ariaAdd(desktop_only.concat(tablet_hide).concat(mobile_only));
						}
					}).register('screen and (max-width: 760px)', function () {
						if (desktop_hide.length || tablet_hide.length || mobile_only.length) {
							ariaRemove(desktop_hide.concat(tablet_hide).concat(mobile_only));
						}
						if (desktop_only.length || tablet_only.length || mobile_hide.length) {
							ariaAdd(desktop_only.concat(tablet_only).concat(mobile_hide));
						}
						if (skip_id) {
							Array.from(skip_id.querySelectorAll('a[href="#nav"], a[href="#mobile"]')).forEach(function (el) {
								el.setAttribute('href', '#mobile');
							});
						}
					}).register('screen and (min-width: 761px)', function () {
						if (skip_id) {
							Array.from(skip_id.querySelectorAll('a[href="#nav"], a[href="#mobile"]')).forEach(function (el) {
								el.setAttribute('href', '#nav');
							});
						}
					});
				},
				miscellaneous: function () {
					if (nav_id) {
						top_id.append('<a class="menu" role="button">Menu</a>').children('a.menu').on('click', function () {
							html_tag.toggleClass('menu-active');
							return false;
						});
						nav_id.find('li > ul').parent().addClass('sub').each(function () {
							$(this).children('a:first').after('<a class="toggle" href="' + $(this).children('a:first').attr('href') + '">Toggle ' + $(this).children('a:first').text() + '</a>');
						}).children('a.toggle').on('click', function () {
							if ($(this).parent().is('.toggle')) {
								$(this).attr('aria-expanded', false).parent().removeClass('toggle').children('ul').attr({
									'aria-hidden': true,
									'focusable': false
								});
							} else {
								$(this).attr('aria-expanded', false).parents('ul:first').children('li.toggle').removeClass('toggle').children('ul').attr({
									'aria-hidden': true,
									'focusable': false
								});
								$(this).attr('aria-expanded', true).parent().addClass('toggle').children('ul').attr({
									'aria-hidden': false,
									'focusable': true
								});
							}
							return false;
						});
					}
					if (form_filters.length) {
						form_filters.find('p a').on('click', function () {
							$(this).closest('.form-filters').toggleClass('toggle');
							return false;
						});
					}
					list_events.each(function () {
						$(this).children('li').addClass('grid-item');
						var grid = $(this).isotope({
								itemSelector: '.grid-item',
								layoutMode: 'fitRows'
							}),
							$checkboxes = $(this).siblings('.form-filters').find('input[data-filter]'),
							filterValue,
							inclusives;

						$checkboxes.change(function () {
							inclusives = [];
							$checkboxes.each(function (i, elem) {
								if (elem.checked) {
									inclusives.push(elem.getAttribute('data-filter'));
								}
							});

							filterValue = inclusives.length ? inclusives.join(', ') : '*';
							grid.isotope({
								filter: filterValue
							});
						});
					});
					var loadPopup = function (id) {
						loadRes('javascript/popup.js', function () {
							if ($.fn.semanticPopup !== undefined) {
								var cde = $(document.querySelectorAll('[class^="popup-"]:not(html)'));
								if (cde && !html_tag.is('.spi')) {
									cde.semanticPopup();
								}
								$.openPopup(id);
							}
						}, 'popup-loaded');
					};
					$(document.querySelectorAll('a[data-popup]')).on('click', function () {
						loadPopup($(this).attr('data-popup'));
						return false;
					});
				}
			}

		};

	Default.async.links();
	Default.async.forms();
	Default.async.miscellaneous();
	Default.async.responsive();
});

/*!*/
