window.addEventListener('load', function(){
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var bubbles = new Array(20);
    var t = 0;

    var img = document.getElementById("vraagteken");

    //create bubbles
    for (var i=0; i<bubbles.length; i++) {
	bubbles[i] = {
	    x: Math.random()*innerWidth, 
	    y: Math.random()*innerHeight, 
	    vx: 0.5-Math.random(), 
	    vy: -0.2-Math.random(), 
	    o: 0.05 + Math.random()*0.1,
	    r: 10 + Math.random()*30
	}; 
    }
    var limit = function (d) {
	if (d.x<-d.r) d.x = innerWidth+d.r;
	if (d.x>innerWidth+d.r) d.x = -d.r;
	if (d.y<-d.r) d.y = innerHeight+d.r;
	if (d.y>innerHeight+d.r) d.y = -d.r;
    };
    var animate = function () {
	t++;
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	bubbles.forEach(function (b) {
	    b.x += b.vx;
	    b.y += b.vy;
	    limit(b);
	    ctx.globalAlpha = 0.35;
	    ctx.drawImage(img, b.x-b.r,b.y-b.r, b.r*2, (b.r-(0.1*b.r))*2);
	    ctx.beginPath();
	    ctx.arc(b.x,b.y,b.r,Math.PI*2,0);
	});
	requestAnimationFrame(animate);
    };
    animate();
}, false);
