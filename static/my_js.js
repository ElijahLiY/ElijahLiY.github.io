// JavaScript Document
window.onload=function(){alert("Page OnLoad");}

//$(window).load(function(){alert("hello");})

function main(){
//	alert("main函数已经执行");
	show_time();
	show_words();
//	show_weather();
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
     document.getElementById('time').innerHTML = year + "年" + month+1 + "月" + date + "日" + "<br />"+ hour + ":" + minute + ":" + second;
	//1s后运行本身，达到重复运行的功效
	setTimeout("show_time()", 1000);
}
function show_words(){
	var lz = ["天行健，君子以自強不息，地勢坤，君子以厚德载物","如果放弃太早，你永远都不知道自己会错过什么","你特么的看看你现在的样子?还是我爱的那个你么","你的选择是做或不做，但不做就永远不会有机会", "你必须成功，因为你不能失败","人生有两出悲剧：一是万念俱灰，另一是踌躇满志","遇到困难时不要抱怨，既然改变不了过去，那么就努力改变未来","只要功夫深，铁杵磨成针", "用理想去成就人生，不要蹉跎了岁月","永不言败是追究者的最佳品格", "目标的实现建立在我要成功的强烈愿望上","保持激情;只有激情，你才有动力，才能感染自己和其他人", "别人能做到的事，自己也可以做到","学习必须如蜜蜂一样，采过许多花，这才能酿出蜜来","努力了不一定能够成功，但是放弃了肯定是失败", "生命有期限 爱却无限",'对我而言 你就是整个世界',"幸福是你喜欢的人du也喜欢你","你的笑容是我最深的牵zhi挂","爱不会因为时间而变得乏味","爱是一种无言的承诺 需要用心聆听", "爱是你我之间不变的深情","你我互为彼此的唯一","真心不会因为距离而遥远","你是我的一切 无人可以替代","爱是快乐忧愁的分享分担","来不及参与你的过去 但我不会错过你的未来","我会陪你走过所有的阴天和艳阳天 直到一生一世","缘分让我们认识 感觉让我喜欢你","有一种默契叫心照不宜","爱你是一种幸福 想你是一种快乐","一切尽在不言中或许正是爱情的最高境界","相爱的两个 用心温暖着彼此","当他自然地牵起你的手的 他是爱你的","恋爱 就是些许笨拙 加上无数的好奇","因为有你 此生无悔", "当他静静地看着你微笑时 他是爱你的","爱是两人世界里 唯一的信仰", "时间让我爱上你 心中一切都是你","爱 是夜里与你数星星的安闲舒适", "诺言与谎言只有一字之差","满招损，谦受益","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃","不离不弃"];
	var m = Math.random();
	var n = Math.floor(m*(lz.length+1));
	document.getElementById("lzwords").innerHTML = lz[n]+'</br>';
	setTimeout("show_words()", 5000);
}
function show_weather(){
	alert("weather")
}

