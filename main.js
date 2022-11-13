canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
greencar_width=100
greencar_height=160
greencar_x=10
greencar_y=10
greencar_image="car2.png"
background_image="parkingLot.jpg"
function add()
{
background_image_tag=new Image();
background_image_tag.onload=uploadbackground;
background_image_tag.src=background_image;
greencar_image_tag=new Image();
greencar_image_tag.onload=uploadgreencar;
greencar_image_tag.src=greencar_image;

}

function uploadbackground()
{
ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height)    

}

function uploadgreencar()
{
ctx.drawImage(greencar_image_tag,greencar_x,greencar_y,greencar_width,greencar_height)    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
 keypressed=e.keyCode;
 console.log(keypressed);
 if(keypressed=='38')
 {
up();
console.log("up");  
 } 
 if (keypressed=='40')
 {
 down();
 console.log("down");   
 } 
 if(keypressed=='37')
 {
left();
console.log("left");
 }
 if(keypressed=='39')
 {
 right();
 console.log("right"); 
 }
}
function up()
{
if(greencar_y>=0) {
	greencar_y=greencar_y-10;
console.log("when up arrow key is pressed x = "+greencar_x+"y = "+greencar_y);
uploadbackground();
uploadgreencar();    
}   
}
function down()
{
if (greencar_y<=550)
{
	greencar_y=greencar_y+10;
console.log("when down arrown key is pressed x ="+greencar_x+"y = "+greencar_y);
uploadbackground();
uploadgreencar();  
}   
}
function left()
{
if(greencar_x>=0) {
greencar_x=greencar_x-10;
 console.log("when left arrow key is pressed x = "+greencar_x+"y ="+greencar_y) ;
 uploadbackground();
 uploadgreencar();
}   
}
function right()
{
if(greencar_x<=750) {
greencar_x=greencar_x+10;
console.log("when right arrow key is pressed x = "+greencar_x+"y = "+greencar_y );
uploadbackground();
uploadgreencar();
}    
}
