function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  document.cookie = escape(name) + "=" + cval + "; expires=" + exp.toGMTString();
}

// function listCookie() {
//   document.writeln("<table>");
//   document.writeln("<tr><th>Name<th>Value");
//   cookieArray = document.cookie.split(";");
//   for (var i = 0; i < cookieArray.length; i++) {
//     thisCookie = cookieArray[i].split("=");
//     cName = unescape(thisCookie[0]);
//     cValue = unescape(thisCookie[1]);
//     document.writeln("<tr><td>" + cName + "</td><td>" + cValue + "</td>");
//   }
//   document.writeln("</table>");
// }