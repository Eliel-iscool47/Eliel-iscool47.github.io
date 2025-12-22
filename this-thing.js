//setup canvas
const canvas = document.getElementById("canvas");
const cxt = canvas.getContext("2d");
//things
function clear(){
    cxt.clearRect(0,0,canvas.width,canvas,height);
}
//variables
const pi = Math.PI;


//other
function drawPlayer(x,y,radius,color) {
    //variables

    //actual drawing thing
    cxt.fillStyle = color;
    cxt.fillRect(x,y,radius*2,radius*2);
    cxt.beginPath()
    cxt.lineWidth = 5
    cxt.arc(x+radius,y+radius,radius*0.8,0,pi*2);
    cxt.strokeStyle = 'black'
    cxt.stroke()
}
    
cxt.font = '24px Arial'
canvas.addEventListener('click',(event)=>{
    const{offsetX: x, offsetY: y} = event;
    console.log(`Your location is: ${x}, ${y}`);
});

canvas.addEventListener('mousemove',(event)=>{
    const{offsetX: x, offsetY: y} = event;
    cxt.fillStyle = 'rgba(0,120,255,0.7)';
    cxt.arc(x, y,50,0,pi*2,true);
    cxt.fill();
});

document.addEventListener('keydown',(event)=>{
console.log('yes');
});