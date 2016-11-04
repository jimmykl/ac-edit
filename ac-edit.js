javascript: (function () {   
  var pathArray = window.location.pathname;
  pathArray = pathArray.split('/');
  var newURL = window.location.protocol + "//" + window.location.host + '/admin/' + pathArray[1] + "/" + pathArray[2] + "/edit";
  window.open(newURL);
 }());