let g;  

function circle() {
    g.beginPath();
    g.arc(0,0,50,0,2*Math.PI,false);
    g.fill();
}

function square() {
g.fillRect(-50,-50,100,100);
}

function triangle() {
g.beginPath();
    g.moveTo(-50,50);
    g.lineTo(50,50);
    g.lineTo(0,-50);
    g.closePath();
    g.fill();
}


function draw() {
      g.fillStyle = "white";
      g.fillRect(0,0,600,600);
      g.fillStyle = "black";

      g.save();
      g.translate(150,150);
      circle();  // draw a circle of radius 50 centered at (0,0)
      g.restore();

      g.save();
      g.translate(450,150);
      triangle(); // draw a triangle, centered at (0,0)
      g.restore();

      g.save();
      g.translate(150,450);
      square();  // draw a square with side 100, centered at (0,0)
      g.restore();

      g.save();
      g.fillStyle = "red";
      g.translate(450,450);

      g.save();
      g.rotate(Math.PI/4);
      g.scale(2, 0.5);
      square();
      g.restore();

      g.save();
      g.rotate(-Math.PI/4);
      g.scale(2,0.5);
      square();
      g.restore();

      g.restore();

      g.font = "40px Arial";
      g.fillStyle = "black";
      g.textAlign = "center";
      g.fillText("Grafika Kelas A 2023", canvas.width/2, canvas.height/2);

      //-------------------------------------------------------------------------

} 
  
function init() {
    try {
        let canvas = document.getElementById("canvas");
        g = canvas.getContext("2d");
    } catch(e) {
        document.getElementById("canvasholder").innerHTML =
            "<p>Canvas graphics is not supported.<br>" +
            "An error occurred while initializing graphics.</p>";
        return;
    }
    draw();
}

window.onload = init; 