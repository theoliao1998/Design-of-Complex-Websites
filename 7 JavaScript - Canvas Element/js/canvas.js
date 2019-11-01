window.onload = function(){
    myCanvas["width"] = String(window.innerWidth*0.8);
    myCanvas["height"] = String(window.innerHeight*0.8);
}

let color = {
    'b':'blue',
    'r':'red',
    'g':'green',
    'y':'yellow'
};

let ctx = myCanvas.getContext("2d");

function draw(e){
    ctx.beginPath();
    ctx.arc(e.offsetX,e.offsetY,10,0,2*Math.PI);
    ctx.fill();
}

myCanvas.addEventListener('mousemove', draw);
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(e) {
    ctx.fillStyle = color[e.key];
    if(e.keyCode == "32"){
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    } else if(e.keyCode == "38"){
        myCanvas.removeEventListener("mousemove", draw);
    } else if(e.keyCode == "40"){
        myCanvas.addEventListener("mousemove", draw);
    } 
}

document.querySelector("#picker").addEventListener('change', function() {
    ctx.fillStyle = this["value"];
});