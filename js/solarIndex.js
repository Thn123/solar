
$('.welcome').html('欢迎回来：'+sessionStorage['loginUname']);
console.log(2);

/*-------*----------------页面主体内容实现切换---------------------------------------*/
$('ul.title').on('mouseover', 'li a', function(e){
	e.preventDefault();
	//修改A的父元素LI的.active的位置
	$(this).parent().addClass('active').siblings('.active').removeClass('active');

	//根据A的HREF找到对应的右侧DIV，修改.active的位置
	var id = $(this).attr('href');
	$(id).addClass('active').siblings('.active').removeClass('active');
});


/*-------------------------------------轮播广告部分-------------------------------------*/
$(document).ready(function(){
	var length,
		currentIndex=0,
		interval,
		hasStarted = false, //是否已经开始轮播
		t=3000; //轮播时间间隔
	length = $('.slider-panel').length;
	//将除了第一张图片隐藏
	$('.slider-panel:not(:first)').hide();
	//将第一个slider-item设为激活状态
	$('.slider-item:first').addClass('slider-item-selected');
	//隐藏向前、向后翻按钮
	$('.slider-page').hide();
	//鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
	$('.slider-panel, .slider-pre, .slider-next').hover(function() {
		stop();
		$('.slider-page').show();
	}, function() {
		$('.slider-page').hide();
		start();
	});
	$('.slider-item').hover(function(e) {
		stop();
//index()返回这个元素在同辈中的索引位置。
//filter()筛选出与指定表达式匹配的元素集合。
		var preIndex = $(".slider-item").filter(".slider-item-selected").index();
		currentIndex = $(this).index();
		play(preIndex, currentIndex);
	}, function(){
		start();
	});
	//从每一个匹配的元素中删除绑定的事件。
//		$('.slider-pre').unbind('click');
//		从每一个匹配的元素中绑定的事件。
	$('.slider-pre').bind('click', function() {
		pre();
	});
//		$('.slider-next').unbind('click');
	$('.slider-next').bind('click', function() {
		next();
	});
	//向前翻页
	function pre(){
		var preIndex = currentIndex;//4 3 1 0
		currentIndex = (--currentIndex + length) % length;//3 2 0 3
		play(preIndex, currentIndex);
	}
	//向后翻页
	function next(){
		var preIndex = currentIndex;
		currentIndex = ++currentIndex % length;
		play(preIndex, currentIndex);
	}
	/**
	 * 从preIndex页翻到currentIndex页
	 * preIndex 整数，翻页的起始页
	 * currentIndex 整数，翻到的那页
	 */
	function play(preIndex, currentIndex) {
//通过不透明度的变化来实现所有匹配元素的淡出效果
		$('.slider-panel').eq(preIndex).fadeOut(500)
			.parent().children().eq(currentIndex).fadeIn(1000);
		$('.slider-item').removeClass('slider-item-selected');
		$('.slider-item').eq(currentIndex).addClass('slider-item-selected');
	}
	/**
	 * 开始轮播
	 */
	function start(){
		if(!hasStarted) {
			hasStarted = true;
			interval = setInterval(next, t);
		}
	}
	/**
	 * 停止轮播
	 */
	function stop(){
		clearInterval(interval);
		hasStarted = false;
	}
	//开始轮播
	start();
});

/****** --------------------------------滚动新闻列表------------------------------------------------********/
function ScrollLeft(){
	var speed=50;
	var MyMar = null;
	var scroll_begin = document.getElementById("scroll_begin");
	var scroll_end = document.getElementById("scroll_end");
	var scroll_div = document.getElementById("scroll_div");
	scroll_end.innerHTML=scroll_begin.innerHTML;
	function Marquee(){
		//scroll_begin.offsetWidth表示相对父元素的偏移宽度；
		//等页面完全出去的时候，scroll_begin.offset=scroll_div.scrollLeft这时让使滚动条立即返回
		if(scroll_begin.offsetWidth-scroll_div.scrollLeft<=0)
			scroll_div.scrollLeft=0;
		else
			scroll_div.scrollLeft++;
	}
	MyMar=setInterval(Marquee,speed);
	scroll_div.onmouseover = function(){
		clearInterval(MyMar);
	};
	scroll_div.onmouseout = function(){
		MyMar = setInterval(Marquee,speed);
	}
}
ScrollLeft();
