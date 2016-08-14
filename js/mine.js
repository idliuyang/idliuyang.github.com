// JavaScript Document
//苹果放大效果；
function doMove(){
	var oNav=document.getElementById('nav');
	var aA=oNav.children; 
	var len=aA.length;
	for(var i=0;i<len;i++){
		aA[i].innerHTML+=aA[i].innerHTML;	
	}
	document.onmousemove=function(ev){
		var oEvent=ev||event;
		for(var i=0;i<len;i++){
			var aImg=aA[i].children;
			var a=oNav.offsetLeft+aImg[0].offsetLeft+aImg[0].offsetWidth-oEvent.clientX;
			var b=oNav.offsetTop+aImg[0].offsetTop+aImg[0].offsetHeight-oEvent.clientY;
			var c=Math.sqrt(a*a+b*b);
			var scale=1-c/500;
			(scale<0.7)&&(scale=0.7);
			aImg[0].style.height=aImg[1].style.width=100*scale+'px';
			aImg[0].style.width=aImg[1].style.height=100*scale+'px';
				
			aImg[1].style.marginTop='5px';
			aImg[1].style.WebkitTransform='scale(1,-1)';
			aImg[1].style.WebkitMask='-webkit-linear-gradient(rgba(0,0,0,0) 70%,rgba(0,0,0,0.4))';
			aImg[1].style.MozTransform='scale(1,-1)';
			aImg[1].style.MozMask='-moz-linear-gradient(rgba(0,0,0,0) 70%,rgba(0,0,0,0.4))';
			aImg[1].style.msTransform='scale(1,-1)';
			aImg[1].style.msMask='-ms-linear-gradient(rgba(0,0,0,0) 70%,rgba(0,0,0,0.4))';
		}
	};	
}


function rnd(m,n){
	return Math.floor(Math.random()*(n-m)+m);	
}


//彩色时钟

window.onload=function(){
	doMove();
};
