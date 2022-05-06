// console.log('开始获取天气')
// $(function () {
//     $('.weather_from_web').ajaxForm({
//         url: "http://www.webxml.com.cn/WebServices/WeatherWebService.asmx/getWeatherbyCityName?theCityName=武汉",
//         methods: 'POST',
//         success: function (data) {
//             console.log(data)
//         }
//     })
// })
// url = 'http://www.webxml.com.cn/WebServices/WeatherWebService.asmx/getWeatherbyCityName'
// $(function(){
//     console.log('开始jsonp')
//     $.get(url,{'theCityName':'武汉'},callback,'jsonp')
// })
// function callback(data){
//     console.log('这是数据')
//     console.log(data)
// }
$(function () {
    $.ajax({
        url: 'http://www.webxml.com.cn/WebServices/WeatherWebService.asmx/getWeatherbyCityName?theCityName=武汉',
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "ooo",
        success: function (data) {
            console.log(data);
        }
    });
})

function ooo(){
    console.log('ppppp')
}