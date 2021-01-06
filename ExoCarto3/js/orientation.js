if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function process(event) {
        var alpha = event.alpha;
        var beta = event.beta;
        var gamma = event.gamma;
	    
        $("#orientation").append(
            $("<p>Orientation de l'appareil :<p> "),
            $("<p>Alpha : "+alpha+"<p>"),
            $("<p>Beta : "+beta+"<p>"),
            $("<p>Gamma : "+gamma+"<p>"),
            $("<br><br>")
        );

        setTimeout(stopJump, 3*1000)
    });   
}

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function process2(event) {
        var x = event.accelerationIncludingGravity.x;
        var y = event.accelerationIncludingGravity.y;
        var z = event.accelerationIncludingGravity.z;
	    
        $("#orientation").append(
            $("<p>Orientation de l'appareil :<p> "),
            $("<p>X : "+x+"<p>"),
            $("<p>Y : "+y+"<p>"),
            $("<p>Z : "+z+"<p>")
        );

        setTimeout(stopJump, 3*1000)
    });   
}

  






