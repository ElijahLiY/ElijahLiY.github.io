// JavaScript Document
// 实现标签切换
$(function () {// 绑定菜单标题标签切换功能
	$(".menu_li").click(function () {//每个菜单标题上绑定一个函数
		$(this).addClass('selected').siblings().removeClass('selected'); // 在标题上加上选中效果并移除别的标题上的选中效果（该效果已经在css中写好）
		var index = $(this).index();// 取得被点的元素的索引
		$(".content_page").eq(index).show().siblings().hide();// 利用这个索引显示相应内容，隐藏其他
	})
	$(".tools_tits_li").click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var tool_tit_index = $(this).index();
		$(".tools_child_page").eq(tool_tit_index).show().siblings().hide();
	})
	$(".games_tits_li").click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var game_tit_index = $(this).index();
		$(".games_child_page").eq(game_tit_index).show().siblings().hide();
	})
})

$(function () {// 默认显示
	$(".games_tit").addClass('selected')//主界面标题默认选中效果
	$(".games").css("display", "block").siblings().css("display", "none");//主界面显示nav

	$(".tools_tits_li:first-child").addClass('selected');
	$(".translate").css("display", "block").siblings().css("display", "none");// 工具界面显示trans

	$(".block_tit").addClass('selected');
	$(".block").css("display", "block").siblings().css("display", "none");// 游戏界面显示greedysnake
})

// 将网站导航图标绑在div上
var common_web_link = [
	['网易公开课', 'static/images/web_icos/网易公开课.jpg', 'https://open.163.com/'],
	['百度', 'static/images/web_icos/百度.jpg', 'http://www.baidu.com'],
	['bilibili', 'static/images/web_icos/bilibili.jpg', 'https://www.bilibili.com/'],
	['知乎','static/images/web_icos/知乎.jpg','https://www.zhihu.com/'],
	['','static/images/web_icos/腾讯课堂.jpg','https://ke.qq.com/'],
	['xjtu','static/images/web_icos/xjtu.jpg','http://www.xjtu.edu.cn/'],
	['中国工商银行','static/images/web_icos/中国工商银行.jpg',''],
	['安居客','static/images/web_icos/安居客.jpg','https://wuhan.anjuke.com/'],
	['百度地图','static/images/web_icos/百度地图.jpg','https://map.baidu.com/'],
	['虫虫吉他','static/images/web_icos/虫虫吉他.jpg','http://www.ccguitar.cn/'],
	['斗鱼','static/images/web_icos/斗鱼.jpg','https://www.douyu.com/'],
	['豆瓣','static/images/web_icos/豆瓣.jpg','https://www.douban.com/'],
	['去哪网','static/images/web_icos/去哪网.jpg','https://www.qunar.com/'],
	['谷歌翻译','static/images/web_icos/谷歌翻译.jpg','https://translate.google.cn/']
	// ['','static/images/web_icos/.jpg','https://www..com/']
	// ['','static/images/web_icos/.jpg','https://www..com/']
	// ['','static/images/web_icos/.jpg','https://www..com/']
]
var prg_web_link = [
	['python官网', 'static/images/web_icos/python官网.jpg', 'http://python.com'],
	['CSDN','static/images/web_icos/CSDN.jpg','https://www.csdn.net/'],
	['github', 'static/images/web_icos/github.jpg','https://github.com/'],
	['html5','static/images/web_icos/html5.jpg','https://www.xuanfengge.com/funny/html5/element/'],
	['jquery','static/images/web_icos/jquery.jpg','https://www.jquery123.com/'],
	['pythonanywhere','static/images/web_icos/pythonanywhere.jpg','https://www.pythonanywhere.com/'],
	['青云', 'static/images/web_icos/青云.jpg','https://www.qingcloud.com/'],
	['npm','static/images/web_icos/npm.jpg','https://www.npmjs.cn/'],
	['npm','static/images/web_icos/npm.jpg','https://www.npmjs.cn/'],
	['npm','static/images/web_icos/npm.jpg','https://www.npmjs.cn/'],
	['npm','static/images/web_icos/npm.jpg','https://www.npmjs.cn/'],
	['npm','static/images/web_icos/npm.jpg','https://www.npmjs.cn/'],
	['npm','static/images/web_icos/npm.jpg','https://www.npmjs.cn/'],
	['npm','static/images/web_icos/npm.jpg','https://www.npmjs.cn/']

	// ['空白','static/images/web_icos/空白.jpg','http://python.com'],

]
var src_web_link = [
	['TED','static/images/web_icos/TED.jpg','https://www.ted.com/'],
	['爱学术','static/images/web_icos/爱学术.jpg','https://www.ixueshu.com/'],
	['慕课','static/images/web_icos/慕课.jpg','https://www.icourse163.org/'],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
]
var shopping_web_link = [
	['京东','static/images/web_icos/京东.jpg','https://www.jd.com/'],
	['淘宝','static/images/web_icos/淘宝.jpg','https://www.taobao.com/'],
	['凡客','static/images/web_icos/凡客.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],

]
$(function(){ // 尝试过利用隐式循环，但是隐式循环中老是不识别下标
	for(var i=0;i<$('.common_web .web_icon').length;i++){// 通用网站
		$('.common_web .web_icon').eq(i).css("backgroundImage",'url('+common_web_link[i][1]+')').attr({
			"href":common_web_link[i][2],
			"target":"_blank"
		})
		$('.prg_web .web_icon').eq(i).css("backgroundImage",'url('+prg_web_link[i][1]+')').attr({
			"href":prg_web_link[i][2],
			"target":"_blank"
		})
		$('.src_web .web_icon').eq(i).css("backgroundImage",'url('+src_web_link[i][1]+')').attr({
			"href":src_web_link[i][2],
			"target":"_blank"
		})
		$('.shopping_web .web_icon').eq(i).css("backgroundImage",'url('+shopping_web_link[i][1]+')').attr({
			"href":shopping_web_link[i][2],
			"target":"_blank"
		})
	}
})

// 网址图标的悬停效果
$(function(){
	$(".web_icon").hover(function(){
		$(this).siblings().stop().fadeTo(100, 0.5);// 兄弟元素变暗
	}, function(){
		$(this).siblings().stop().fadeTo(200, 1);//兄弟元素变回来
	})
})

// 显示时间
$(function showTime(){
	var time = new Date(); //获得当前时间
	var year = time.getFullYear(); //获得年月日
	var month = time.getMonth(); //获得年月日
	var date = time.getDate(); //获得年月日
	var hour = time.getHours(); //获得小时、分钟、秒
	var minute = time.getMinutes();
	var second = time.getSeconds();
	if (minute < 10){ //如果分钟只有1位，补0显示
		minute = "0" + minute;
	}else{;}
	if (second < 10){ //如果秒数只有1位，补0显示
		second = "0" + second;
	}else{;}
	
	$(".date").text(year + "年" + month + "月" + date + "日"+ "</br>"+ hour + ":" + minute + ":" + second);
	setTimeout(showTime, 1000);
})







