let g;  

function circle() {
  g.beginPath();
  g.arc(0,0,50,0,2*Math.PI,false);
  g.fill();
}

function circle_mini() {
  g.beginPath();
  g.arc(0, 0, 25, 0, 2 * Math.PI, false);
  g.fillStyle = "white"
  g.fill();
}

function square() {
  g.fillStyle = "red"
  g.fillRect(-50,-50,125,100);
}

function rectangle() {
  g.fillRect(-75,25,450,200)
}

function rectangle_mini() {
  g.fillStyle = "black"
  g.fillRect(255,-25, 120, 100)
    // g.fill()
}

function rectangle_mini2() {
  g.fillStyle = "white"
  g.fillRect(290,-25, 50, 100)
}

function rectangle_mini3() {
  g.fillStyle = "white"
  g.fillRect(5, 5, 40, 40)
} 

function triangle() {
  g.beginPath();
  g.fillStyle = "black";
  g.moveTo(-60,60);
  g.lineTo(60,60);
  g.lineTo(0,-60);
  g.closePath();
  g.fill();
}

function text() {
  g.fillStyle = "red";
  g.fillRect(50, 420, 500, 120);

  // Menggambar teks putih di dalam latar belakang merah
  g.font = "40px Arial";
  g.fillStyle = "white";
  g.textAlign = "center";
  g.fillText("Grafika Kelas A 2023", canvas.width/2, canvas.height/2 + 200);
}

function draw() {
  g.fillStyle = "white";
  g.fillRect(0,0,600,600);
  g.fillStyle = "black";
  
  g.save();
  g.translate(150,250);
  rectangle();
  g.restore();
  
  g.save();
  g.translate(-15, 250);
  rectangle_mini();
  g.restore();

  g.save();
  g.translate(300, 165);
  triangle();
  g.restore();

  g.save();
  g.translate(300, 220);
  circle_mini();
  g.restore();

  g.save();
  g.translate(-15, 350);
  rectangle_mini2();
  g.restore();

  g.save();
  g.translate(300, 325);
  circle_mini();
  g.restore();

  g.save();
  g.translate(100, 290);
  rectangle_mini3();
  g.restore();

  g.save();
  g.translate(190, 290);
  rectangle_mini3();
  g.restore();

  g.save();
  g.translate(360, 290);
  rectangle_mini3();
  g.restore();

  g.save();
  g.translate(450, 290);
  rectangle_mini3();
  g.restore();

  g.save();
  g.translate(100, 360);
  rectangle_mini3();
  g.restore();

  g.save();
  g.translate(190, 360);
  rectangle_mini3();
  g.restore();

  g.save();
  g.translate(360, 360);
  rectangle_mini3();
  g.restore();

  g.save();
  g.translate(450, 360);
  rectangle_mini3();
  g.restore();

  g.save();

  g.restore();

  text();
} 

function temp() {
  g.fillStyle = "white";
  g.fillRect(0,0,600,600);
  g.fillStyle = "black";

  g.save();
  g.translate(150,150);
  circle();  // draw a circle of radius 50 centered at (0,0)  
  g.restore();

  g.save();
  g.translate(150, 150);
  circle_mini();  // draw a circle of radius 50 centered at (0,0)
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

  text();
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