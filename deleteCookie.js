function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  document.cookie = escape(name) + "=" + cval + "; expires=" + exp.toGMTString();
}