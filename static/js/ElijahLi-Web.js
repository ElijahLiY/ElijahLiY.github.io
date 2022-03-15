// JavaScript Document
// 实现标签切换
$(function () { // 绑定菜单标题标签切换功能
	$(".menu_li").click(function () { //每个菜单标题上绑定一个函数
		$(this).addClass('selected').siblings().removeClass('selected'); // 在标题上加上选中效果并移除别的标题上的选中效果（该效果已经在css中写好）
		var index = $(this).index(); // 取得被点的元素的索引
		$(".content_page").eq(index).show().siblings().hide(); // 利用这个索引显示相应内容，隐藏其他
	})
	$(".tools_tits_li").click(function () {
		$(this).addClass('selected').siblings().removeClass('selected');
		var tool_tit_index = $(this).index();
		$(".tools_child_page").eq(tool_tit_index).show().siblings().hide();
	})
	$(".games_tits_li").click(function () {
		$(this).addClass('selected').siblings().removeClass('selected');
		var game_tit_index = $(this).index();
		$(".games_child_page").eq(game_tit_index).show().siblings().hide();
	})
})

$(function () { // 默认显示
	$(".nav_tit").addClass('selected') //主界面标题默认选中效果
	$(".nav").css("display", "block").siblings().css("display", "none"); //主界面显示nav

	$(".tools_tits_li:first-child").addClass('selected');
	$(".translate").css("display", "block").siblings().css("display", "none"); // 工具界面显示trans

	$(".greedy_snake_tit").addClass('selected');
	$(".greedySnake").css("display", "block").siblings().css("display", "none"); // 游戏界面显示greedysnake
})

// 将网站导航图标绑在div上
var common_web_link = [
	['网易公开课', 'static/images/web_icos/网易公开课.jpg', 'https://open.163.com/'],
	['百度', 'static/images/web_icos/百度.jpg', 'http://www.baidu.com'],
	['bilibili', 'static/images/web_icos/bilibili.jpg', 'https://www.bilibili.com/'],
	['知乎', 'static/images/web_icos/知乎.jpg', 'https://www.zhihu.com/'],
	['', 'static/images/web_icos/腾讯课堂.jpg', 'https://ke.qq.com/'],
	['xjtu', 'static/images/web_icos/xjtu.jpg', 'http://www.xjtu.edu.cn/'],
	['中国工商银行', 'static/images/web_icos/中国工商银行.jpg', ''],
	['安居客', 'static/images/web_icos/安居客.jpg', 'https://wuhan.anjuke.com/'],
	['百度地图', 'static/images/web_icos/百度地图.jpg', 'https://map.baidu.com/'],
	['虫虫吉他', 'static/images/web_icos/虫虫吉他.jpg', 'http://www.ccguitar.cn/'],
	['斗鱼', 'static/images/web_icos/斗鱼.jpg', 'https://www.douyu.com/'],
	['豆瓣', 'static/images/web_icos/豆瓣.jpg', 'https://www.douban.com/'],
	['去哪网', 'static/images/web_icos/去哪网.jpg', 'https://www.qunar.com/'],
	['谷歌翻译', 'static/images/web_icos/谷歌翻译.jpg', 'https://translate.google.cn/'],
	['添加', 'static/images/web_icos/添加.jpg', ''],
]
var prg_web_link = [
	['python官网', 'static/images/web_icos/python官网.jpg', 'http://python.com'],
	['CSDN', 'static/images/web_icos/CSDN.jpg', 'https://www.csdn.net/'],
	['github', 'static/images/web_icos/github.jpg', 'https://github.com/'],
	['html5', 'static/images/web_icos/html5.jpg', 'https://www.xuanfengge.com/funny/html5/element/'],
	['jquery', 'static/images/web_icos/jquery.jpg', 'https://www.jquery123.com/'],
	['pythonanywhere', 'static/images/web_icos/pythonanywhere.jpg', 'https://www.pythonanywhere.com/user/ElijahLi/'],
	['青云', 'static/images/web_icos/青云.jpg', 'https://www.qingcloud.com/'],
	['npm', 'static/images/web_icos/npm.jpg', 'https://www.npmjs.cn/'],
	['空白', 'static/images/web_icos/空白.jpg', ''],
]
var src_web_link = [
	['TED', 'static/images/web_icos/TED.jpg', 'https://www.ted.com/'],
	['爱学术', 'static/images/web_icos/爱学术.jpg', 'https://www.ixueshu.com/'],
	['慕课', 'static/images/web_icos/慕课.jpg', 'https://www.icourse163.org/'],
	['空白', 'static/images/web_icos/空白.jpg', ''],
]
var shopping_web_link = [
	['京东', 'static/images/web_icos/京东.jpg', 'https://www.jd.com/'],
	['淘宝', 'static/images/web_icos/淘宝.jpg', 'https://www.taobao.com/'],
	['凡客', 'static/images/web_icos/凡客.jpg', ''],
	['空白', 'static/images/web_icos/空白.jpg', ''],
]


$(function () { // 添加相应的网址栏
	add_websites('通用', common_web_link);
	add_websites('编程', prg_web_link);
	add_websites('资源', src_web_link);
	add_websites('购物', shopping_web_link);
})

function add_websites(name, web_link) {
	var $web_list = $('<div></div>'); //建立一个类盒子（一类网址）
	$web_list.addClass('web_list').addClass('clear');
	// 为此类网址添加一个标题
	$web_list_tit = $('<h5></h5>');
	$web_list_tit.addClass('web_list_tit').text(name);
	$web_list_tit.appendTo($web_list);
	//标题下面放一条白线分割一下
	$white_line = $('<div></div>');
	$white_line.addClass('white_line');
	$white_line.appendTo($web_list);

	// 导航框框盒子
	$web_icons = $('<div></div>'); //构建大盒子
	$web_icons.addClass('web_icons');
	for (i = 0; i < web_link.length; i++) {
		var $web_icon = $('<a></a>'); //创建一个小盒
		$web_icon.addClass('web_icon'); //小盒应该有的样式（与内容无关）
		$web_icon.css("backgroundImage", 'url(' + web_link[i][1] + ')').attr({ //小盒子的内容
			"href": web_link[i][2],
			"target": "_blank"
		})
		//将小盒子挂到大盒子上
		$web_icon.appendTo($web_icons);

	}
	// 大盒子构建在类别盒子上
	$web_icons.appendTo($web_list);

	//将盒子挂在网页上
	$web_list.appendTo($('.websites'));
}

// 网址图标的悬停效果
$(function () {
	$(".web_icon").hover(function () {
		$(this).siblings().stop().fadeTo(100, 0.5); // 兄弟元素变暗
	}, function () {
		$(this).siblings().stop().fadeTo(200, 1); //兄弟元素变回来
	})
})

// 显示时间
$(function showTime() {
	var time = new Date(); //获得当前时间
	var year = time.getFullYear(); //获得年月日
	var month = time.getMonth(); //获得年月日
	var date = time.getDate(); //获得年月日
	var hour = time.getHours(); //获得小时、分钟、秒
	var minute = time.getMinutes();
	var second = time.getSeconds();
	if (minute < 10) { //如果分钟只有1位，补0显示
		minute = "0" + minute;
	} else {
		;
	}
	if (second < 10) { //如果秒数只有1位，补0显示
		second = "0" + second;
	} else {
		;
	}

	$(".date").text(year + "年" + month + "月" + date + "日" + "\n" + hour + ":" + minute + ":" + second);
	setTimeout(showTime, 1000);
})

// 调用百度翻译接口
$(function () {
	const appid = '20211023000980498'
	const secretKey = 'qOkqwNRPiUHWmdAwDT8w'
	const myurl = 'http://api.fanyi.baidu.com/api/trans/vip/translate'
	
	$('.trans_btn').click(function () {
		// 随机数验证安全
		var salt = Math.round(Math.random(0, 1) * 10000)
		// 取得输入内容q
		var q = 'love'
		var sign = md5(appid + q + String(salt) + secretKey)

		$.ajax({
			url:myurl,
			type:'get',
			dataType:'json',
			data:{
				appid:appid,
				q:q,
				from:'en',
				to:'zh',
				salt:salt,
				sign:sign
			},
			success: function(data){
				console.log(data)
			}
		})
	})
})