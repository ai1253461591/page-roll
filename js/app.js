$(document).ready(function() {

	var fn,
		ofp = true;

	winHeight = $(window).height();
	totalHeight = $('.section').length * winHeight;
	mainScrollTop = $('.main-wrap').scrollTop();

	$('.main-wrap').css('height', totalHeight);
	$('.section').css('height', winHeight)
	$(window).resize(function(){
		var fn,
		ofp = true;

	winHeight = $(window).height();
	totalHeight = $('.section').length * winHeight;
	mainScrollTop = $('.main-wrap').scrollTop();

	$('.main-wrap').css('height', totalHeight);
	$('.section').css('height', winHeight)
	})
	
	var scrollFunc = function(e) {
		var beforeScrollTop = parseInt($('.main-wrap').css('top'));
		console.log(beforeScrollTop + " " + "11111")
			var direct = 0,
				decoration = 0;
			e = e || window.event;
			
			oendHeight = totalHeight - winHeight;
			if(e.wheelDelta && ofp == true) { //判断浏览器IE，谷歌滑轮事件  
				
				if(e.wheelDelta > 0 && beforeScrollTop < 0) { //当滑轮向上滚动时
					ofp = false;
					$('.main-wrap').stop(true).animate({
						top: beforeScrollTop + winHeight
					}, 500, function() {
						ofp = true;
					})
				}
				if(e.wheelDelta < 0 && oendHeight != -beforeScrollTop) { //当滑轮向下滚动时
					console.log(beforeScrollTop)
					ofp = false;
					$('.main-wrap').stop(true).animate({
						top: beforeScrollTop - winHeight
					}, 500, function() {
						ofp = true;
					})
				}
			} else if(e.detail && ofp == true) { //Firefox滑轮事件
				console.log('firefox')
				if(e.detail > 0 && ofp == true) { //当滑轮向上滚动时
					ofp = false;
					$('.main-wrap').stop(true).animate({
						top: beforeScrollTop + winHeight
					}, 500, function() {
						ofp = true;
					})
				}
				if(e.detail < 0 && ofp == true) { //当滑轮向下滚动时
					ofp = false;
					$('.main-wrap').stop(true).animate({
						top: beforeScrollTop - winHeight
					}, 500, function() {
						ofp = true;
					})
				}
			}
		}
		//给页面绑定滑轮滚动事件
	if(document.addEventListener) {
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	}
	//滚动滑轮触发scrollFunc方法
	window.onmousewheel = document.onmousewheel = scrollFunc;
	///ssssssssssssssssssssssssssssssssssssssss

})