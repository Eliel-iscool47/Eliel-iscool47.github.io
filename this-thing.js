//setup canvas
const canvas = document.getElementById('main');
const cxt = canvas.getContext('2d');
//variables
const pi = Math.PI;
//not variables
cxt.fillStyle = 'red';
cxt.fillRect(0,0,40,40);
cxt.fillStyle='blue';
cxt.fillRect(1326,728,40,40);
cxt.beginPath();cxt.moveTo(40,40);
cxt.lineTo(1326,728);
cxt.lineWidth = 5;
function drawPlayer(x,y,size,color) {
    const halfSize = size/2
    const centerX = x + halfSize
    const centerY = y + halfSize

    cxt.fillStyle = color;
    cxt.fillRect(x,y,size,size);
    cxt.beginPath()
    cxt.lineWidth = 5
    cxt.arc(centerX,centerY,size*0.425,0,pi*2);
    cxt.fill()
    cxt.moveTo(centerX,centerY);
    cxt.lineTo(x,y);
    cxt.stroke();
}
    
cxt.font = '24px Arial'
canvas.addEventListener('click',(event)=>{
    const{offsetX: x, offsetY: y} = event;
    console.log(`Your location is: ${x}, ${y}`);
});

canvas.addEventListener('mousemove',(event)=>{
    const{offsetX: x, offsetY: y} = event;
    cxt.fillStyle = 'rgba(0,120,255,0.7)';
    cxt.arc(x, y,50,0,pi*2,true)

});
