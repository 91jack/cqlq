var agent = navigator.userAgent.toLowerCase();
var g_ocx;
var PLUGINS_CLASSID = '7F9063B6-E081-49DB-9FEC-D72422F2727F';
var VERSION_GUI = 'version=3,1,0,4'; //注意：本地GUI上版本信息显示需要的字符串，修改版本的时候这个字符串也要修改
var Sys = {};
var isMac = navigator.userAgent.toLowerCase().indexOf("mac") != -1;
var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/(msie\s|trident.*rv:)([\d.]+)/)) ? Sys.ie = s[2] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
 var PLUGINS_NAME = 'WebActiveEXE.Plugin.1';
var hasPlugin = checkPlugins();

var g_PlayTime;
var g_curSpeed = 4;//默认的正常速度
var htmlStChn1 = '';

/**
 * 检测浏览器是否存在视频插件
 * @return {Boolean}
 */
function checkPlugins(){
    var result;
    if (Sys.ie) {
        try { 
            result = new ActiveXObject(PLUGINS_NAME);
            delete result;
        } catch (e) {
            return false;
        }
        return true;
    } else {
        navigator.plugins.refresh(false);
        result = navigator.mimeTypes["application/media-plugin-version-3.1.0.2"];
        return !!(result && result.enabledPlugin);
    }
}

function hideInstallDialog()
{
	document.getElementById('login_install_dialog').style.display = 'none';
	if(document.getElementById('username') && !g_isRemoteLogin)
	{
		if(document.getElementById('username').value != '')
		{
			document.getElementById('password').focus();
		}
		else
		{
			document.getElementById('username').focus();
		}
	}
}
function showInstallDialog()
{
	document.getElementById('login_install_dialog').style.display = '';
}
function instal(){
	hideInstallDialog();
	setTimeout('loadPlugins()',1000);
}
var mainOcxHtml = '';
if (Sys.ie)
{		
	mainOcxHtml = '<object id="ocx" width="100%" height="100%" classid="CLSID:{'+PLUGINS_CLASSID+'}"codebase="/webrec.cab"></object>';
}
else
{
	mainOcxHtml = '<object id="ocx" width="100%" height="100%" type="application/media-plugin-version-3.1.0.2" VideoWindTextColor="9c9c9c" VideoWindBarColor="414141"></object>';
}

var handlerOcxEvents = {
	fireOcxEvent: function(jsonStr) {
		document.getElementById('downPos').value = jsonStr;
	}
}

function loadPlugins()
{
	if(checkPlugins())
	{	
		hasPlugin = true;
		setTimeout('loadPageOcx()',2000);
	}
	else
	{
		setTimeout('loadPlugins()',1000);
	}	
}

if (!hasPlugin ) 
{
	showInstallDialog();				
}
else
{
	hideInstallDialog();
	loadPageOcx();
}	

function loadPageOcx (){
		document.getElementById('f_ocx').innerHTML = mainOcxHtml;
		//document.getElementById('Login').style.display = '';
		initPageOcx();	

}

function initPageOcx() {
	g_ocx = document.getElementById('ocx');
	//g_ocx.AddEventListener('SetNetPlayRecordStatus', ShowRecInfo);
	g_ocx.AddEventListener('SetNetPlayFileInfo', ShowRecInfo);
	g_ocx.AddEventListener('NetPlayTimeInform', ShowPlayTime);
	g_ocx.AddEventListener('TransEvent', handlerOcxEvents.fireOcxEvent);
}
	

function LoginDevice(){

	var bRet = g_ocx.LoginDeviceEx("192.168.2.222",80,"admin","zonjo123", 0);
	if(bRet == 0){
		g_ocx.SetWinBindedChannel(6, 0, 0, 1);
		g_ocx.SetModuleMode(1); //监视模式
		g_ocx.ConnectRealVideo(0 ,1);
		g_ocx.ConnectRealVideo(1 ,1);
		g_ocx.ConnectRealVideo(2 ,1);
		g_ocx.ConnectRealVideo(3 ,1);
		g_ocx.ConnectRealVideo(4 ,1);
		g_ocx.ConnectRealVideo(5 ,1);
	}	
}

