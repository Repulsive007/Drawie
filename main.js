var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = { x: 0, y: 0 };

canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
}, false);

ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#00CC99';

canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);

    canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);

var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};





function sideopen() {
    document.getElementById("sidebar").style.marginLeft = "0px";
}

function sideclose() {
    document.getElementById("sidebar").style.marginLeft = "-250px";
}


function counter() {
    var val = document.getElementById("range").value;

    document.getElementById("counter").innerHTML = val;
}


function save() {

    var canvas = document.getElementById("canvas");
    // draw to canvas...
    canvas.toBlob(function(blob) {
        saveAs(blob, "drawing.png");
    });
}


function clearuo() {



    ctx.clearRect(0, 0, canvas.width, canvas.height);

}