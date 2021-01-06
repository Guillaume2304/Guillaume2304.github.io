/*var src = document.getElementById("source");
var clientX, clientY;

$("#touch").append($("<h3>Position cliquée<h3>"));

src.addEventListener('touchstart', function(e) {    
    if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
        x = e.clientX;
        y = e.clientY;
    }
  $("#touch").append(
      $("<p>X: "+x+"<p>"),
      $("<p>Y: "+y+"<p>")
      );
}, false);

src.addEventListener('touchend', function(e) {
  var deltaX, deltaY;

  
  deltaX = e.changedTouches[0].clientX - clientX;
  deltaY = e.changedTouches[0].clientY - clientY;
  $("#touch").append(
    $("<p>X: "+deltaX+"<p>"),
    $("<p>Y: "+deltaY+"<p>")
    );
}, false);*/
document.getElementById("touchme").addEventListener("touchstart",
function clicked(e) {
    var br = document.getElementById("touchme").getBoundingClientRect();    
    var x = e.touches[0].clientX - br.left;
    var y = e.touches[0].clientY - br.top;
    $("#touch").append(
        $("x: " + x + " y: " + y)
    );
});