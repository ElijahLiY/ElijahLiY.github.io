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
	$(".nav_tit").addClass('selected')//主界面标题默认选中效果
	$(".nav").css("display", "block").siblings().css("display", "none");//主界面显示nav

	$(".translate_tit").addClass('selected');
	$(".translate").css("display", "block").siblings().css("display", "none");// 工具界面显示trans

	$(".greedy_snake_tit").addClass('selected');
	$(".greedySnake").css("display", "block").siblings().css("display", "none");// 游戏界面显示greedysnake
})

// 将网站导航图标绑在div上
var common_web_link = [
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
	['去哪网','static/images/web_icos/去哪网.jpg','https://www.qunar.com/']
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
	['空白','static/images/web_icos/空白.jpg',''],
	['空白','static/images/web_icos/空白.jpg',''],

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



var request = request("www.baidu.com");
console.log(request)






// function show_weather() {
// 	alert("weather")
// }
// function show_message_board() {
// 	document.getElementsByClassName("message_board")[0].style.display = "block";//显示留言板
// 	document.getElementsByClassName("mask")[0].style.display = "block";//显示灰色蒙版
// }
// function kill_message_board() {
// 	document.getElementsByClassName("message_board")[0].style.display = "none";//关掉留言板
// 	document.getElementsByClassName("mask")[0].style.display = "none";//关掉灰色蒙版
// }
// function submit_message_board() {
// 	document.getElementsByClassName("success_submit_board")[0].style.display = "block";//显示提交成功字样
// 	setTimeout("kill_success_submit_board()", 1000);//一秒后调用关掉字样函数
// }
// function kill_success_submit_board() {
// 	document.getElementsByClassName("success_submit_board")[0].style.display = "none";//关掉提交成功字样
// }
// function show_developing_board() {
// 	document.getElementsByClassName("developing_board")[0].style.display = "block";//显示正在开发提示板
// 	document.getElementsByClassName("mask")[0].style.display = "block";//显示灰色蒙版
// }
// function kill_developing_board() {
// 	document.getElementsByClassName("developing_board")[0].style.display = "none";//关掉正在开发提示版
// 	document.getElementsByClassName("mask")[0].style.display = "none";//关掉灰色蒙版
// }
// function show_tips() {
// 	document.getElementsByClassName("mask")[0].style.display = "block";//显示灰色蒙版
// 	document.getElementsByClassName("tips")[0].style.display = "block";//显示提示板
// }
// function kill_tips() {
// 	document.getElementsByClassName("mask")[0].style.display = "none";//关掉灰色蒙版
// 	document.getElementsByClassName("tips")[0].style.display = "none";//关掉正在开发提示版
// }
// function show_photo_album() {
// 	document.getElementsByClassName("content")[0].style.display = "none";//关掉网址导航部分
// 	document.getElementsByClassName("album")[0].style.display = "block";//显示相册部分
// }

// function round_mode_on() {
// 	var list = document.getElementsByClassName("img")
// 	for (i = 0; i < list.length; i++) {
// 		list[i].style.borderRadius = "50%";//CSS中是border-radius，出现不同了
// 	}//把图片变成圆滚滚
// 	document.getElementsByClassName("search_submit_button")[0].style.borderRadius = "50%";//百度搜索按钮
// 	document.getElementsByClassName("search_submit_button")[1].style.borderRadius = "50%";//谷歌搜索按钮
// 	document.getElementsByClassName("round_mode_on_button")[0].style.display = "none";
// 	document.getElementsByClassName("round_mode_off_button")[0].style.display = "inline";
// }
// function round_mode_off() {
// 	var list = document.getElementsByClassName("img")
// 	for (i = 0; i < list.length; i++) {
// 		list[i].style.borderRadius = "20%";
// 	}
// 	document.getElementsByClassName("search_submit_button")[0].style.borderRadius = "0";//百度搜索按钮
// 	document.getElementsByClassName("search_submit_button")[1].style.borderRadius = "0";//谷歌搜索按钮
// 	document.getElementsByClassName("round_mode_on_button")[0].style.display = "inline";
// 	document.getElementsByClassName("round_mode_off_button")[0].style.display = "none";
// }
// function search_tips_off() {
// 	//该函数还没有实现，可能是因为getElementsByName不能读取input的name
// 	document.getElementsByName("word")[0].style.list = "none";
// }