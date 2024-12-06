if (addEventListener){
	window.addEventListener("load",T);
}else{
	window.attachEventListener("load",T);
}
function T(){
	let heightL = (document.body)?document.body.scrollHeight:document.documentElement.scrollHeight;
	let back = document.querySelector("#back");
	let pixaldata = [];
	let pixallife = 300;
	window.addEventListener("mousemove",(e)=>{
		e = e || window.event;
		if (e.pageY+4>heightL) return;
		let span = document.createElement("span");
		span.className = "pixal";
		back.appendChild(span);
		pixaldata.push({
			age:0,
			color:`rgba(
				${parseInt(Math.random()*255)},
				${parseInt(Math.random()*255)},
				${parseInt(Math.random()*255)},
				${parseInt(Math.random()*255)})`,
			vx:Math.random() * 0.5,
			vy:Math.random() * 0.75,
			sx:e.x,
			sy:e.pageY
		});
	});
	function draw(){
		for (let i = 0; i < pixaldata.length; i++){
			pixal = pixaldata[i];
			children = back.children[i];
			pixal.age++;
			pixal.sx += pixal.vx * 2;
			if (pixal.sy*1.008 < heightL) pixal.sy += pixal.vy * 2;
			
			children.style.background = pixal.color;
			children.style.left = pixal.sx + "px";
			children.style.top = pixal.sy + "px"; 
			if (pixal.age > pixallife){
				pixaldata.splice(i,1);
				back.removeChild(back.childNodes[i]);
			}
		}
	}
	setInterval(draw, 1);
}


