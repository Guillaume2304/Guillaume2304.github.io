if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function process(event) {
        var alpha = event.alpha;
        var beta = event.beta;
         var gamma = event.gamma;
	    
        $("#orientation").append(
            $("<p>Orientation de l'appareil :<p> "),
            $("<p>Alpha : "+alpha+"<p>"),
            $("<p>Beta : "+beta+"<p>"),
            $("<p>Gamma : "+gamma+"<p>")
        );
    });   
}

  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler);
    setTimeout(stopJump, 3*1000);
  }



