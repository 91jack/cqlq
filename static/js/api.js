// sockt host
var socktHost = 'ws://192.168.1.123:8080/jbz/';

// GPS
var gpsUrl = socktHost + 'gps';

// 生产数据
var productUrl = socktHost + 'product';

// host 
var host= 'http://192.168.1.123:8080/jbz';


// 油石比
var GetYSBUrl = host + '/api/data/ajaxGetYSB';



// ajax数据请求
function ajaxData(url,params,callback){
	$.ajax({
		type:"get",
		url:url,
		data:params,
		success:function(res){
			callback(res)
		}
	});
}

// websocket函数
function WebSocketFn(url,callback){
    if ("WebSocket" in window){
      // console.log("您的浏览器支持 WebSocket!");
       // 打开一个 web socket
       var ws = new WebSocket(url);
        
       ws.onopen = function(){
          // Web Socket 已连接上，使用 send() 方法发送数据
          //ws.send("发送数据");
          //alert("数据发送中...");
       };
        
       ws.onmessage = function (evt) { 
          var received_msg = evt.data;
          //console.log(received_msg);
          callback(received_msg);
          //alert("数据已接收...");
       };
        
       ws.onclose = function(){ 
          // 关闭 websocket
          console.log("连接已关闭..."); 
       };
    }else{
       // 浏览器不支持 WebSocket
       alert("您的浏览器不支持 WebSocket!");
    }
}