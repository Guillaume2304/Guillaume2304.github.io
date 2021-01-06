if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', deviceOrientationHandler, false);
    document.getElementById("doeSupported").innerText = "Supported!";
  }
  else{
    document.getElementById("doeSupported").innerText = "Not Supported!";
  }

  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler);
    setTimeout(stopJump, 3*1000);
  }

function process(event) {
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;
  $("#orientation").append(
        $("<p>Orientation de l'appareil :<p> "),
        $("<p>Alpha : "+alpha+"<p>"),
        $("<p>Beta : "+beta+"<p>"),
        $("<p>Gamma : "+gamma+"mètres.<p>")
    );
}

