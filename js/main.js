$(document).ready( function(){
	$('.main_menu li').has('.submenu').hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	});	

	$(function(){
		var $length = $('.rombs_item').length;
		$('.rombs_item').each(function(index, el) {
			$(this).css('z-index', index);
			$(this).hover(function() {
				$(this).css('z-index', $length+index);
			}, function() {
				$(this).css('z-index', index);
			});
		});
	});

	$(function(){
		$('.rombs_menu').on( 'click', '.rombs_item:not(.active)', function() {
			$(this).parent().siblings('.rombs_menu_overlay:not(.visible)').addClass('visible');
			$(this).addClass('active').siblings().removeClass('active')
			.parent().siblings('.rombs_menu_content').css('z-index',3).find('.rombs_menu_content_block').eq($(this).index()).addClass('visible').siblings('.tabs_content_block').removeClass('visible');
			$(this).parent().siblings('.rombs_menu_overlay').css('z-index', 2);


			$('.rombs_menu_content_block').find('.close').click(closeBLock);
			function closeBLock () {
				$(this).closest('.rombs_menu_content_block').removeClass('visible').parent().siblings('.rombs_menu_overlay').removeClass('visible');
				$(this).closest('.rombs_menu_content').siblings('.rombs_menu').find('.rombs_item').removeClass('active');
				$(this).closest('.rombs_menu_content').css('z-index', 0);
				$(this).closest('.rombs_menu_content').siblings('.rombs_menu_overlay').css('z-index', 0);
			}
			$('.rombs_menu_overlay').click(closeBLock);
		});
	});



});
