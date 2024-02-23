canvas=document.getElementById("mycanvas");
color="red";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,Math.PI*2);
ctx.strokeStyle();