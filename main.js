canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

rw = 100;
rh = 90;
rx = 10;
ry = 10;
ri = "rover.png";
bi = "mars.jpg";
function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = bi;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = ri;

}
function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(rover_imgTag, rx, ry, rw,rh);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    
}
function up()
{
    if(ry >=0)
    {
        ry= ry-10;
        console.log("when up arrow is pressed =" + rx + " - "+ ry);
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if(ry <=500)
    {
        ry= ry+10;
        console.log("when down arrow is pressed =" + rx + " - "+ ry);
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if(rx >=0)
    {
        rx= rx-10;
        console.log("when left arrow is pressed =" + rx + " - "+ ry);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rx <=700)
    {
        rx= rx+10;
        console.log("when rigth arrow is pressed =" + rx + " - "+ ry);
        uploadBackground();
        uploadrover();
    }
}