var src = document.getElementById("source");
var clientX, clientY;

$("#touch").append($("<h3>Position touch cliquée<h3>"));

src.addEventListener('touchstart', function(e) {    
  clientX = e.touches[0].clientX;
  clientY = e.touches[0].clientY;
  $("#touch").append(
      $("<p>X: "+clientX+"<p>"),
      $("<p>Y: "+clientY+"<p>")
      );
}, false);

src.addEventListener('touchend', function(e) {
  var deltaX, deltaY;

  
  deltaX = e.changedTouches[0].clientX - clientX;
  deltaY = e.changedTouches[0].clientY - clientY;
  $("#touch").append(
    $("<p>X: "+clientX+"<p>"),
    $("<p>Y: "+clientY+"<p>")
    );
}, false);