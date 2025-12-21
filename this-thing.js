const pi = Math.pi
const main = document.getElementById('main');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.strokeStyle='red';
ctx.fillRect(0,0,40,40);
ctx.fillStyle='blue';
ctx.fillRect(1326,728,40,40);
ctx.beginPath();
ctx.moveTo(40,40);
ctx.lineTo(1326,728);
ctx.lineWidth=3;
ctx.stroke();
ctx.beginPath();
ctx.arc(40,40,20,pi * 0.75,pi * 1.25,false)


