
function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
}

addScript('bower_components/jquery/dist/jquery.js');
addScript('bower_components/bootstrap/dist/js/bootstrap.js');
addScript('bower_components/angular/angular.js');
addScript('bower_components/angular-route/angular-route.js');
addScript('bower_components/angular-resource/angular-resource.js');