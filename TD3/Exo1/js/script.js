function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.drawImage(paysage, 0, 0, paysage.width, paysage.height, 0, 0, canvas.width, canvas.height );
      ctx.fillStyle = '#CD853F'; 
      ctx.fillRect(30, 250, 100, 100);
      ctx.fillStyle = 'brown'; 
      ctx.fillRect(70, 300, 30, 50);
      ctx.beginPath();
      ctx.moveTo(82, 190);
      ctx.lineTo(30, 250);
      ctx.lineTo(130, 250);
      ctx.closePath();     
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle="yellow"
      ctx.arc(150, 80, 30, 0, 2 * Math.PI);
      ctx.fill();
    }
    var draw = SVG().addTo('#drawing'), sky = draw.rect(250, 250).move(0,0).fill('#2C75FF')    
    var draw = SVG().addTo('#drawing'), sun = draw.circle(60).move(120,40).fill('yellow')    
    var draw = SVG().addTo('#drawing'), grass = draw.rect(300, 170).move(0,230).fill('#9ACD32')
    var draw = SVG().addTo('#drawing'), house = draw.rect(100, 100).move(30,250).fill('#CD853F')
    var draw = SVG().addTo('#drawing'), door = draw.rect(30, 50).move(70,300).fill('brown')
    var draw = SVG().addTo('#drawing'), leftMoutain = draw.polygon('50,0 100,150 50,150').move(0,80).fill('silver').stroke({ width: 1 })
    var draw = SVG().addTo('#drawing'), middleLeftMoutain = draw.polygon('100,50 150,150 50,150').move(5,130).fill('silver').stroke({ width: 1 })
    var draw = SVG().addTo('#drawing'), middleMoutain = draw.polygon('100,60 150,150 50,150').move(50,140).fill('silver').stroke({ width: 1 })
    var draw = SVG().addTo('#drawing'), middleRightMoutain = draw.polygon('100,50 150,150 50,150').move(70,130).fill('silver').stroke({ width: 1 })
    var draw = SVG().addTo('#drawing'), rightMoutain = draw.polygon('100,20 150,150 50,150').move(150,100).fill('silver').stroke({ width: 1 })
    var draw = SVG().addTo('#drawing'), roof = draw.polygon('100,110 150,180 50,180').move(30,180).fill('red').stroke({ width: 1 })

    var skycolor = "blue";
    sun.on('click', function(){
        if (skycolor=="blue"){
            sky.fill('grey');
            skycolor = "grey";
        }
        else{
            sky.fill('#2C75FF')
            skycolor = "blue";
        }        
    })

    var doorcolor ="brown"
    door.on('mouseover', function(){
        if (doorcolor == "brown"){
            door.fill('white');
            doorcolor = "white";
        }
        else{
            door.fill('brown');
            doorcolor = "brown";
        }
    })
   
  
  }
  
  window.addEventListener("DOMContentLoaded", (event) => {
      draw();
  })