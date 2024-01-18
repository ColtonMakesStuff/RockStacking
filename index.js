let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
console.log("hello");


ctx.fillStyle = '#FFFFFF'; // Set the fill color to white
ctx.fillRect(0, 0, canvas.width, canvas.height); // Draw a rectangle covering the entire canvas



ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
