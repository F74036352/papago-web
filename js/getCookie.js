function getCookie(cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}

function get(it){
    var name, i$, ref$, len$, ca, c;
    name = it + '=';
    
    for (i$ = 0, len$ = (ref$ = document.cookie.split(';')).length; i$ < len$; ++i$) {
      ca = ref$[i$];
      c = ca.trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
// function getCookie(name) {
//   var arg = escape(name) + "=";
//   var nameLen = arg.length;
//   var cookieLen = document.cookie.length;
//   var i = 0;
//   while (i & lt; cookieLen) {
//     var j = i + nameLen;
//     if (document.cookie.substring(i, j) == arg) return getCookieValueByIndex(j);
//     i = document.cookie.indexOf(" ", i) + 1;
//     if (i == 0) break;
//   }
//   return null;
// }

// function getCookieValueByIndex(startIndex) {
//   var endIndex = document.cookie.indexOf(";", startIndex);
//   if (endIndex == -1) endIndex = document.cookie.length;
//   return unescape(document.cookie.substring(startIndex, endIndex));
// }