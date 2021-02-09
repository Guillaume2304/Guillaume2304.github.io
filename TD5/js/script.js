window.addEventListener("DOMContentLoaded", (event) => {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function process(event) {
            var alpha = event.alpha;
            var beta = event.beta;
            var gamma = event.gamma;        
          
            var canvas = document.getElementById('canvas');
            if (canvas.getContext) {
              var ctx = canvas.getContext('2d');
              ctx.drawImage(compass, 0, 0, compass.width, compass.height, 0, 0, canvas.width, canvas.height );
             
              ctx.rotate(alpha); 
              ctx.drawImage(arrow, 0, 0, arrow.width, arrow.height, 0, 0, canvas.width, canvas.height );
              ctx.setTransform(1, 0, 0, 1, 0, 0);
              
            }
            
        });   
    }
 
})