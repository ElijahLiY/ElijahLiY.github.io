// JavaScript Document
function main() {
	show_time();
	show_content('nav');
	//	show_weather();
	//	round_mode_on();
}
function show_time() {
	var time = new Date(); //获得当前时间
	var year = time.getFullYear(); //获得年月日
	var month = time.getMonth(); //获得年月日
	var date = time.getDate(); //获得年月日
	var hour = time.getHours(); //获得小时、分钟、秒
	var minute = time.getMinutes();
	var second = time.getSeconds();
	if (minute < 10) //如果分钟只有1位，补0显示
		minute = "0" + minute;
	if (second < 10) //如果秒数只有1位，补0显示
		second = "0" + second;
	//计算过年倒计时
	var count_down = 12 - date;
	if (count_down < 0) { count_down += 31; }
	//设置form内容为当前时间
	document.getElementById('date').innerHTML = year + "年" + month + 1 + "月" + date + "日";
	// document.getElementById('date').innerHTML = year + "年" + month+1 + "月" + date + "日" + "<br />"+ hour + ":" + minute + ":" + second + "<br />";
	//1s后运行本身，达到重复运行的功效
	setTimeout("show_time()", 1000);
}
// 导航菜单按钮
function show_content(menu_button) {
	//所有的都关掉
	document.getElementsByClassName("nav")[0].style.display = "none";//关掉网址导航部分
	document.getElementsByClassName("tools")[0].style.display = "none";//关掉工具部分
	document.getElementsByClassName("album")[0].style.display = "none";//关掉相册部分
	document.getElementsByClassName("message")[0].style.display = "none";//关掉留言部分
	for (i = 0; i < document.getElementsByClassName("menu_li").length; i++) {
		// document.getElementsByClassName("menu_li")[i].style.backgroundColor = "rgba(119,126,132,0.56)";//标题背景变化
		document.getElementsByClassName("menu_li")[i].style.background = "none";//标题背景变化
	}
	//打开需要打开的部分
	document.getElementsByClassName(menu_button)[0].style.display = "block";//打开相应部分
	document.getElementsByClassName(menu_button + "_tit")[0].style.backgroundColor = "gray";//标题背景变化
}
// 工具中的菜单按钮
function displayTool(tools_button){
	//所有都关掉
	document.getElementsByClassName("translate")[0].style.display = "none";
	document.getElementsByClassName("text_rec")[0].style.display = "none";
	// document.getElementsByClassName("translate")[0].style.display = "none";
	// document.getElementsByClassName("translate")[0].style.display = "none";
	for (i = 0; i < document.getElementsByClassName("tools_tits_li").length; i++) {
		document.getElementsByClassName("tools_tits_li")[i].style.borderBottom = "2px solid transparent";//标题下划线变化
		document.getElementsByClassName("tools_tits_li")[i].style.color = "#595959";//标题颜色变化
	}
	document.getElementsByClassName(tools_button)[0].style.display = "block";//打开相应部分
	document.getElementsByClassName(tools_button + "_tit")[0].style.borderBottom = "2px solid #f43700";//标题背景变化
	document.getElementsByClassName(tools_button + "_tit")[0].style.color = "#f43700";//标题背景变化
}










function show_weather() {
	alert("weather")
}
function show_message_board() {
	document.getElementsByClassName("message_board")[0].style.display = "block";//显示留言板
	document.getElementsByClassName("mask")[0].style.display = "block";//显示灰色蒙版
}
function kill_message_board() {
	document.getElementsByClassName("message_board")[0].style.display = "none";//关掉留言板
	document.getElementsByClassName("mask")[0].style.display = "none";//关掉灰色蒙版
}
function submit_message_board() {
	document.getElementsByClassName("success_submit_board")[0].style.display = "block";//显示提交成功字样
	setTimeout("kill_success_submit_board()", 1000);//一秒后调用关掉字样函数
}
function kill_success_submit_board() {
	document.getElementsByClassName("success_submit_board")[0].style.display = "none";//关掉提交成功字样
}
function show_developing_board() {
	document.getElementsByClassName("developing_board")[0].style.display = "block";//显示正在开发提示板
	document.getElementsByClassName("mask")[0].style.display = "block";//显示灰色蒙版
}
function kill_developing_board() {
	document.getElementsByClassName("developing_board")[0].style.display = "none";//关掉正在开发提示版
	document.getElementsByClassName("mask")[0].style.display = "none";//关掉灰色蒙版
}
function show_tips() {
	document.getElementsByClassName("mask")[0].style.display = "block";//显示灰色蒙版
	document.getElementsByClassName("tips")[0].style.display = "block";//显示提示板
}
function kill_tips() {
	document.getElementsByClassName("mask")[0].style.display = "none";//关掉灰色蒙版
	document.getElementsByClassName("tips")[0].style.display = "none";//关掉正在开发提示版
}
function show_photo_album() {
	document.getElementsByClassName("content")[0].style.display = "none";//关掉网址导航部分
	document.getElementsByClassName("album")[0].style.display = "block";//显示相册部分
}

function round_mode_on() {
	var list = document.getElementsByClassName("img")
	for (i = 0; i < list.length; i++) {
		list[i].style.borderRadius = "50%";//CSS中是border-radius，出现不同了
	}//把图片变成圆滚滚
	document.getElementsByClassName("search_submit_button")[0].style.borderRadius = "50%";//百度搜索按钮
	document.getElementsByClassName("search_submit_button")[1].style.borderRadius = "50%";//谷歌搜索按钮
	document.getElementsByClassName("round_mode_on_button")[0].style.display = "none";
	document.getElementsByClassName("round_mode_off_button")[0].style.display = "inline";
}
function round_mode_off() {
	var list = document.getElementsByClassName("img")
	for (i = 0; i < list.length; i++) {
		list[i].style.borderRadius = "20%";
	}
	document.getElementsByClassName("search_submit_button")[0].style.borderRadius = "0";//百度搜索按钮
	document.getElementsByClassName("search_submit_button")[1].style.borderRadius = "0";//谷歌搜索按钮
	document.getElementsByClassName("round_mode_on_button")[0].style.display = "inline";
	document.getElementsByClassName("round_mode_off_button")[0].style.display = "none";
}
function search_tips_off() {
	//该函数还没有实现，可能是因为getElementsByName不能读取input的name
	document.getElementsByName("word")[0].style.list = "none";
}