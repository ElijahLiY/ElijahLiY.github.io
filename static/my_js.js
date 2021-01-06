// JavaScript Document
window.onload=function(){alert("Page OnLoad");}

//$(window).load(function(){alert("hello");})

function main(){
	alert("main函数已经执行");
	show_time();
	show_words();
	show_weather();
}

function show_time(){
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
     //设置form内容为当前时间
     document.getElementById('time').innerHTML = year + "年" + month+1 + "月" + date + "日" + hour + ":" + minute + ":" + second
	//1s后运行本身，达到重复运行的功效
	setTimeout("show_time()", 1000)
}
function show_words(){
	alert("words")
}
function show_weather(){
	alert("weather")
}

//<script type="text/javascript">
//		name = prompt('请输入你的名字','Elijah')
//		alert('你好,'+name+'!')
//		document.write('你好,'+name+'!')
//		
//		function disptime(){
////		alert("程序已经运行！");
//        var time = new Date(); //获得当前时间
//        var year = time.getFullYear(); //获得年月日
//        var month = time.getMonth(); //获得年月日
//        var date = time.getDate(); //获得年月日
//        var hour = time.getHours(); //获得小时、分钟、秒
//        var minute = time.getMinutes();
//        var second = time.getSeconds();
//        if (minute < 10) //如果分钟只有1位，补0显示
//            minute = "0" + minute;
//        if (second < 10) //如果秒数只有1位，补0显示
//            second = "0" + second;
//				
//        /*设置form内容为当前时间*/
//        document.getElementById('clock').innerHTML = year + "年" + month + "月" + date + "日" + hour + ":" + minute + ":" + second
//			
//		/*设置span内容为当前时间*/
//        document.myform.myclock.value = year + "年" + month + "月" + date + "日" + hour + ":" + minute + ":" + second
//		
//		/*1s后运行本身，达到重复运行的功效*/
//		setTimeout("disptime()", 1000)
//			}
//		
//		
//		disptime();
//
//		function showwords(){
//			alert('程序已经运行')
//			ls = '真正的努力总是在别人看不到的地方'
//			document.getElementById('lzwords').value = ls[0]
//		}
//		window.onload = showwords
//		</script> 