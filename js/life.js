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
			var scale=1-c/700;
			(scale<0.5)&&(scale=0.5);
			aImg[0].style.height=aImg[1].style.width=128*scale+'px';
			aImg[0].style.width=aImg[1].style.height=128*scale+'px';
				
			aImg[1].style.marginTop='5px';
			aImg[1].style.WebkitTransform='scale(0.8,-0.8)';
			aImg[1].style.WebkitMask='-webkit-linear-gradient(rgba(0,0,0,0) 70%,rgba(0,0,0,0.5))';
		}
	};	
}

//无缝滚动    有问题：鼠标释放的时候存的点有问题；
/*function roll(){
	var oQx = document.querySelector('.qixing');
	var oUl = document.querySelector('.qixing ul');
	var aLi = oUl.children;
	oUl.style.width = aLi.length*aLi[0].offsetWidth+'px';
	var iNow = 1;
	var x = -iNow*aLi[0].offsetWidth;
	oUl.onmousedown=function(ev){
		var disX = ev.pageX-x;
		var downX = ev.pageX;
		alert(downX)
		document.onmousemove=function(ev){
			x = ev.pageX-disX;
			oUl.style.WebkitTransform = 'translate3d('+x+'px,0,0)';
		};
		document.onmouseup=function(){
			
			document.onmousemove=null;
			document.onmouseup=null;	
			var upX = ev.clientX;
			alert(upX)
			if(Math.abs(upX-downX)>100){
				if(downX>upX){
					iNow++;
					if(iNow==aLi.length){
						iNow = aLi.length-1;
					}
				}else if(downX<upX){
					iNow--;
					if(iNow<0){
						iNow = 0;
					}
				}
			}
			x = -iNow*aLi[0].offsetWidth;
			oUl.style.WebkitTransition = '.5s all ease';
			oUl.style.WebkitTransform = 'translate3d('+x+'px,0,0)';
			if(iNow==aLi.length-1){
					iNow = 1;
					x = -iNow*aLi[0].offsetWidth;
					oUl.style.WebkitTransform = 'translate3d('+x+'px,0,0)';
			}else if(iNow==0){
				iNow = aLi.length-2;
				x = -iNow*aLi[0].offsetWidth;
				oUl.style.WebkitTransform = 'translate3d('+x+'px,0,0)';
			}
		};	
		return false;
	};
}
*/	
		
function tab(){
	var oQx = document.getElementById('qixing');
	var oUl = oQx.children[0];
	var aLi = oUl.children;
	oUl.style.width = aLi[0].offsetWidth*aLi.length+'px';
	var aSpan = oQx.children[1].getElementsByTagName('span');
	var iNow = 0;
	function next(){
		move(aSpan[iNow],{width:80},{complete:function(){
			iNow++;
			if(iNow == aSpan.length){
				iNow = 0;
			}
			move(oUl,{left:-iNow*aLi[0].offsetWidth},{complete:function(){
				for(var i = 0;i<aSpan.length;i++){
					aSpan[i].style.width = 0 ;
				}
				next();
			}});
		}});
	}
	next();

}

window.onload=function(){
	doMove();
	tab();
};