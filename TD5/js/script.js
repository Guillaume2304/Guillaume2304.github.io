window.addEventListener("DOMContentLoaded", (event) => {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function process(event) {
            var alpha = event.alpha;
            var beta = event.beta;
            var gamma = event.gamma;  
            var angle;
            ctx.drawImage(compass, 0, 0, compass.width, compass.height, 0, 0, canvas.width, canvas.height );
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                var crd = pos.coords;
                angle = crd.heading;
            }
            
            function error(err) {
                console.warn(`ERREUR (${err.code}): ${err.message}`);
            }
            
            navigator.geolocation.getCurrentPosition(success, error, options);
               
          
            var canvas = document.getElementById('canvas');
           

            function drawRotated(angle) {
              var ctx = canvas.getContext('2d');
              
              ctx.clearRect(0,0,canvas.width,canvas.height);
              ctx.save();
              ctx.translate(arrow.width/2,arrow.height/2);
              ctx.rotate(angle*Math.PI/180); 
              ctx.drawImage(arrow, -arrow.width/2, -arrow.width/2 );
              //ctx.setTransform(1, 0, 0, 1, 0, 0);
              ctx.restore();
              
            }
            drawRotated(angle);
        });
    }
})
