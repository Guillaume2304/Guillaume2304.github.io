window.addEventListener("DOMContentLoaded", (event) => {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function process(event) {
            var alpha = event.alpha;
            var beta = event.beta;
            var gamma = event.gamma;  
            
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                var crd = pos.coords;
                var northAngle = crd.heading;
            }
            
            function error(err) {
                console.warn(`ERREUR (${err.code}): ${err.message}`);
            }
            
            navigator.geolocation.getCurrentPosition(success, error, options);
               
          
            var canvas = document.getElementById('canvas');
            if (canvas.getContext) {
              var ctx = canvas.getContext('2d');
              ctx.drawImage(compass, 0, 0, compass.width, compass.height, 0, 0, canvas.width, canvas.height );
              ctx.save();
              ctx.translate(canvas.width/2,canvas.height/2);
              ctx.rotate(alpha*Math.PI/180); 
              ctx.drawImage(arrow, 0, 0, arrow.width, arrow.height, 0, 0, canvas.width, canvas.height );
              //ctx.setTransform(1, 0, 0, 1, 0, 0);
              ctx.restore();
              
            }
            
        });   
    }
})
