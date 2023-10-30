var mouse_event = "empty"

var last_position_of_x 
 
var last_position_of_y


canvas = document.getElementById("myCanvas")

color="red";

ctx= canvas.getContext("2d")
width_of_line = 2

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
   mouse_event = "mouseDown"
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e)
{
    mouse_event = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;


    if(mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line; 

        ctx.moveTo(last_position_of_x, last_position_of_y); 
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_Y); 
        ctx.stroke();
        
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_Y;
}