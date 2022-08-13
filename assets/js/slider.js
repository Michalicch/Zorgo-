$(document).ready(function(){
	let position = 0;
	const sliderToShow = 5;
	const sliderToScroll = 1;
	const container = $('.slider-container');
	const track = $('.certificates-slider');
	const item = $('.certificates-slide');
	const btnPrev = $('.btn-prev');
	const btnNext = $('.btn-next');

	const itemWidth = container.width() / sliderToShow;


	item.eash(function(index, item){
		$(item).css({
			minWidth: itemWidth,
		})
	});

	btnPrev.click(function(){
		console.log('btnPrev');

		track.css({
			transform: TranslateX
		})
	});

	btnNext.click(function(){
		console.log('btnNext');
	});

});