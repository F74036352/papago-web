function setCookie(cookieName, cookieValue, exdays) {
  if (document.cookie.indexOf(cookieName) >= 0) {
    var expD = new Date();
    expD.setTime(expD.getTime() + (-1*24*60*60*1000));
    var uexpires = "expires="+expD.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + uexpires; 
  } 
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + "; " + expires + ";path=/";  
}

function doCookieSetup(name, value) {
  var expires = new Date();
  //有效時間保存 2 天 2*24*60*60*1000
  expires.setTime(expires.getTime() + 172800000);
  document.cookie = name + "=" + escape(value) + ";expires=" + expires.toGMTString()
}