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

//rnd
function rnd(n,m){
	return Math.floor(Math.random()*(m-n)+n);
}

//3d图片换
function roll(){
	var aLi=document.querySelectorAll('.roll li');	
	var len=aLi.length;
	for(var i=0;i<len;i++){
		aLi[i].style.WebkitTransition='1s all ease '+((len-i)*100)+'ms';
		aLi[i].style.WebkitTransform='rotateY('+(360/len*i)+'deg) translateZ(350px)';
		aLi[i].style.MozTransition='1s all ease '+((len-i)*100)+'ms';
		aLi[i].style.MozTransform='rotateY('+(360/len*i)+'deg) translateZ(350px)';
		aLi[i].style.msTransition='1s all ease '+((len-i)*100)+'ms';
		aLi[i].style.msTransorm='rotateY('+(360/len*i)+'deg) translateZ(350px)';
		aLi[i].innerHTML+=aLi[i].innerHTML;
		var aImg=aLi[i].children;
		aImg[1].style.top='205px';
		
		aImg[1].style.WebkitTransform='scale(1,-1)';
		aImg[1].style.WebkitMask='-webkit-linear-gradient(rgba(0,0,0,0) 60%,rgba(0,0,0,0.7))';
		aImg[1].style.MozTransform='scale(1,-1)';
		aImg[1].style.MozMask='-moz-linear-gradient(rgba(0,0,0,0) 60%,rgba(0,0,0,0.7))';
		aImg[1].style.msTransform='scale(1,-1)';
		aImg[1].style.msMask='-ms-linear-gradient(rgba(0,0,0,0) 60%,rgba(0,0,0,0.7))';
	} 	
}

//翻书效果
function pageTurn(){
	var oBox=document.querySelector('.page_turn .box');
	var oPage=document.querySelector('.page_turn .page');
	var oFront=document.querySelector('.page_turn .front');
	var oBack=document.querySelector('.page_turn .back');
	var oPage2=document.querySelector('.page_turn .page2');
	var bOk=false;
	var iNow=0;
	oBox.onclick=function(){
		if(bOk)return;
		bOk=true;
		oPage.style.WebkitTransition='1s all ease';
		oPage.style.WebkitTransform='perspective(800px) rotateY(-180deg)';
		oPage.style.MozTransition='1s all ease';
		oPage.style.MozTransform='perspective(800px) rotateY(-180deg)';
		oPage.style.msTransition='1s all ease';
		oPage.style.msTransform='perspective(800px) rotateY(-180deg)';
		iNow++;
		function tranEnd(){
			oPage.removeEventListener('transitionend',tranEnd,false);
			oPage.style.WebkitTransition='none';
			oPage.style.MozTransition='none';
			oPage.style.msTransition='none';
			
			oBox.style.backgroundImage='url(images/img/'+(iNow%3+1)+'.jpg)';
			oFront.style.backgroundImage='url(images/img/'+(iNow%3+1)+'.jpg)';
			oBack.style.backgroundImage='url(images/img/'+((iNow+1)%3+1)+'.jpg)';
			oPage2.style.backgroundImage='url(images/img/'+((iNow+1)%3+1)+'.jpg)';
			oPage.style.WebkitTransform='perspective(800px) rotateY(0deg)';
			oPage.style.MozTransform='perspective(800px) rotateY(0deg)';
			oPage.style.msTransform='perspective(800px) rotateY(0deg)';
			bOk=false;
		}
		oPage.addEventListener('transitionend',tranEnd,false);
	};
}

//爆炸效果
function boom(){
	var oBox = document.querySelector('.boom .box');
	var iNow = 0;
	var R = 4;
	var C = 7;
	var bOk = false;
	for(var i=0;i<C;i++){
		for(var j=0;j<R;j++){
			var oS=document.createElement('span');
			oS.style.width=oBox.offsetWidth/C+'px';	
			oS.style.height=oBox.offsetHeight/R+'px';
			oBox.appendChild(oS);
			oS.style.left=oS.offsetWidth*i+'px';
			oS.style.top=oS.offsetHeight*j+'px';
			oS.style.backgroundPosition=(-oS.offsetLeft)+'px '+(-oS.offsetTop)+'px';
		}	
	}
	var aS=oBox.children;
	oBox.onclick=function(){
		if(bOk)return;
		bOk=true;
		iNow++;
		for(var i=0;i<aS.length;i++){
			aS[i].style.WebkitTransition='1s all ease';
			aS[i].style.MozTransition='1s all ease';
			aS[i].style.msTransition='1s all ease';
			var x=aS[i].offsetLeft+aS[i].offsetWidth/2-oBox.offsetWidth/2;
			var y=aS[i].offsetTop+aS[i].offsetHeight/2-oBox.offsetHeight/2;	

			aS[i].style.WebkitTransform = 'perspective(800px) translate('+x+'px,'+y+'px) rotateY('+rnd(-360,360)+'deg) rotateX('+rnd(-360,360)+'deg) scale('+rnd(1,3)+','+rnd(1,3)+')';
			aS[i].style.MozTransform = 'perspective(800px) translate('+x+'px,'+y+'px) rotateY('+rnd(-360,360)+'deg) rotateX('+rnd(-360,360)+'deg) scale('+rnd(1,3)+','+rnd(1,3)+')';
			aS[i].style.msTransform = 'perspective(800px) translate('+x+'px,'+y+'px) rotateY('+rnd(-360,360)+'deg) rotateX('+rnd(-360,360)+'deg) scale('+rnd(1,3)+','+rnd(1,3)+')';
			aS[i].style.opacity=0;
		}	
		function tranEnd(){
			aS[aS.length-1].removeEventListener('transitionend',tranEnd,false);
			for(var i=0; i<aS.length;i++){
				aS[i].style.WebkitTransition='none';
				aS[i].style.MozTransition='none';
				aS[i].style.msTransition='none';
				aS[i].style.backgroundImage = 'url(images/img/'+(iNow%3+1)+'.jpg)';
				aS[i].style.WebkitTransform = 'perspective(800px) translate(0px,0px) rotateY(0deg) rotateX(0deg) scale(1,1)';
				aS[i].style.MozTransform = 'perspective(800px) translate(0px,0px) rotateY(0deg) rotateX(0deg) scale(1,1)';
				aS[i].style.msTransform = 'perspective(800px) translate(0px,0px) rotateY(0deg) rotateX(0deg) scale(1,1)';
				aS[i].style.opacity = 1;
			}
			oBox.style.backgroundImage = 'url(images/img/'+((iNow+1)%3+1)+'.jpg)';
			bOk = false;
		}
		aS[aS.length-1].addEventListener('transitionend',tranEnd,false);		
	};
}

function a2d(n){
	return 	n*180/Math.PI;		
}
//穿墙模式    有问题，只从上面出来；
function through(obj){
	function a2d(n){
		return 	n*180/Math.PI;		
	}
	function hoverDir(obj,ev){
		var x=obj.offsetLeft+obj.offsetWidth/2-ev.pageX;	
		var y=obj.offsetTop+obj.offsetHeight/2-ev.pageY;	
		return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
	}	
	
	obj.onmouseenter=function(ev){
		var oEvent=ev||event;	
		var oS=obj.children[0];
		oS.style.background='rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
		var dir= hoverDir(obj,oEvent);
		switch(dir){
			case 0:
				oS.style.left='-240px';
				oS.style.top='0';
				break;
			case 1:
				oS.style.left='0';
				oS.style.top='240px';
				break;
			case 2:
				oS.style.left='240px';
				oS.style.top='0';
				break;
			case 3:
				oS.style.left='0';
				oS.style.top='-240px';
				break;
		} 
		move(oS,{left:0,top:0});
	}
	obj.onmouseleave=function(ev){
		var oEvent=ev||event;	
		var oS=obj.children[0];
		var dir= hoverDir(obj,oEvent);
		switch(dir){
			case 0:
				move(oS,{left:240,top:0})
				break;
			case 1:
				move(oS,{left:0,top:240})
				break;
			case 2:
				move(oS,{left:-240,top:0})
				break;
			case 3:
				move(oS,{left:0,top:-240})
				break;
		} 
	}
}

function throughMove(){
	var oTh=document.getElementById('th_list');
	var aLi=oTh.children;
	var len=aLi.length;
	for(var i=0;i<len;i++){
		through(aLi[i]);
	}		
}
window.onload=function(){
	doMove();
	roll();
	pageTurn();
	boom();
	throughMove();
};