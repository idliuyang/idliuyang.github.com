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

//打字机效果；
function typeWrite(){
	var oTxtBox=document.querySelector('.txt_box');
	var str='  欢迎来到我的个人网站，这里有我开发的比较好玩的各种效果，也有我的一些个人小经历，如果有您感兴趣的小效果，或者有什么需要讨论的各种效果，都可以@我下面的邮箱，或者联系我的QQ，很希望和各位同学们沟通交流!!';
	var len=str.length;
	for(var i=0;i<len;i++){
		var oSpan=document.createElement('span');
		
		oSpan.innerHTML=str.charAt(i);
		oSpan.style.color='rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
		oTxtBox.appendChild(oSpan);//把新建的元放到body里面去；	
	}	
	var aSpan=oTxtBox.children;
	var count=0;
	var timer=null;
	clearInterval(timer);
	timer=setInterval(function(){
		move(aSpan[count],{opacity:1});	
		count++;
		if(count==aSpan.length){
			clearInterval(timer);	
		}
		
	},200);
}

function rnd(m,n){
	return Math.floor(Math.random()*(n-m)+m);	
}
//小圆扩散
function circle(){
	var oCircle = document.getElementById('circle');
	var oS = oCircle.children[0];	
	var R = oCircle.offsetWidth/2;
	var bOk = true;
	var N = 10;
	var timer = null;
	//角度转弧度
	function d2a(n){
		return n*Math.PI/180;
	}
	//弧度转角度
	function a2d(n){
		//n*180/PI
		return n*180/Math.PI;
	}
	//创建了10个小球
	for(var i = 0;i<N;i++){
		var oS = document.createElement('span');
		oCircle.appendChild(oS);
	}
	var aSpan = oCircle.getElementsByTagName('span');
	
	oCircle.onclick = function(){
		if(bOk){
			for(var i = 0;i<aSpan.length;i++){
				move(aSpan[i],i*360/N);	
				aSpan[i].style.background='rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
			}	
		}else{
			for(var i = 0;i<aSpan.length;i++){
				move(aSpan[i],0);	
			}	
		}
		bOk = !bOk;
	};
	function move(obj,target){
		var start = obj.a||0;
		var dis = target - start;
		var count = Math.round(1000/16);
		var n = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			n++;
			var b = 1 -n/count;
			var cur = start+dis*(1-Math.pow(b,3));
			var x = R+R*Math.sin(d2a(cur));
			var y = R-R*Math.cos(d2a(cur));
			obj.a = cur;
			obj.style.left = x+'px';
			obj.style.top = y+'px';
			if(n == count){
				clearInterval(obj.timer);
			}
		},16);
	}	
}
//显示隐藏
function toShow(){
	var oShow=document.getElementById('show');
	var iNow=1;
	var oTxt=document.getElementById('txt_box');
	var oCwk=document.getElementById('count_wk');	
	oShow.onclick=function(){
		iNow++;
		if(iNow%2==1){
			oCwk.style.display='none';
			oShow.innerHTML='效果展示';
		}else{
			oTxt.style.display='none';
			oCwk.style.display='block';
			oShow.innerHTML='隐藏效果';
		}
	};
}

//鼠标移入移出
function overOut(){
	var oCwk=document.getElementById('count_wk');
	var aLi=oCwk.children;
	var len=aLi.length;
	for(var i=0;i<len;i++){
		aLi[i].onmouseover=function (){
			var oP=this.children[0].children[1];
			move(oP, {bottom: 0, opacity: 1});
		};
		aLi[i].onmouseout=function (){
			var oP=this.children[0].children[1];
			move(oP, {bottom: -80, opacity: 0});
		};
	}
}

window.onload=function(){
	toShow();	
	typeWrite();
	doMove();
	circle();
	overOut();
	var oClock=document.querySelector('.clock');
	var oHou=document.querySelector('.hou');
	var oMin=document.querySelector('.min');
	var oSec=document.querySelector('.sec');
	var oCap=document.querySelector('.cap');
	var oTime=document.querySelector('.time');
	var N=60;
	for(var i=0;i<N;i++){
		var oS=document.createElement('span');
		oS.style.WebkitTransform='rotate('+(i*6)+'deg)';
		oS.style.MozTransform='rotate('+(i*6)+'deg)';
		oS.style.msTransform='rotate('+(i*6)+'deg)';
		if(i%5==0){
			oS.className='big_scale';	
			oS.innerHTML='<em>'+(i/5||12)+'<\/em>';
			var oEm=oS.children[0];
			oEm.style.WebkitTransform='rotate('+(-i*6)+'deg)';
			oEm.style.Mozransform='rotate('+(-i*6)+'deg)';
			oEm.style.msTransform='rotate('+(-i*6)+'deg)';
		}
		oClock.appendChild(oS);
	}
	function toDou(n){
		return n<10?'0'+n:''+n	
	}
	function time(){
		var oDate=new Date();
		var h=oDate.getHours();
		var m=oDate.getMinutes();
		var s=oDate.getSeconds();
		var ms=oDate.getMilliseconds();
		oHou.style.WebkitTransform='rotate('+(h*30+m/60*30)+'deg)';
		oMin.style.WebkitTransform='rotate('+(m*6+s/60*6)+'deg)';
		oSec.style.WebkitTransform='rotate('+(s*6+ms/1000*6)+'deg)';
		
		oHou.style.MozTransform='rotate('+(h*30+m/60*30)+'deg)';
		oMin.style.MozTransform='rotate('+(m*6+s/60*6)+'deg)';
		oSec.style.MozTransform='rotate('+(s*6+ms/1000*6)+'deg)';
		
		oHou.style.msTransform='rotate('+(h*30+m/60*30)+'deg)';
		oMin.style.msTransform='rotate('+(m*6+s/60*6)+'deg)';
		oSec.style.msTransform='rotate('+(s*6+ms/1000*6)+'deg)';
		
		oTime.innerHTML=''+toDou(h)+' : '+toDou(m)+' : '+toDou(s)+'';
	}
	time();
	setInterval(time,1);
	
	//小太阳效果
	var oSun=document.querySelector('.circle');
	var oText=document.querySelector('.txt_box');
	oSun.onmousedown=function(ev){
		var oEvent=ev||event;
		var disX=oEvent.clientX-oSun.offsetLeft;
		var disY=oEvent.clientY-oSun.offsetTop;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			oSun.style.left=oEvent.clientX-disX+'px';	
			oSun.style.top=oEvent.clientY-disY+'px';	
			var x=(oText.offsetLeft+oText.offsetWidth/2)-(oSun.offsetLeft+oSun.offsetWidth/2);
			var y=(oText.offsetTop+oText.offsetHeight/2)-(oSun.offsetTop+oSun.offsetHeight/2);
			var dis=Math.sqrt(x*x+y*y);
			oText.style.textShadow=x/10+'px '+y/4+'px 1px #000';
		};
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			oText.style.textShadow='0 0 0';	
		};
		return false;
	};
	
};
