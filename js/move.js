function getStyle(obj,name){
	return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
}
 
function move(obj,json,options){
	options = options||{};
	options.easing = options.easing ||'ease-out';
	options.duration = options.duration ||700;
	var start = {};
	var dis = {};
	for(var name in json){
		if(isNaN(start[name])){
			//默认值
			switch(name){
				case 'width':
				start[name] = obj.offsetWidth;
				break;
				case 'heigth':
				start[name] = obj.offsetHeight;
				break;
				case 'left':
				start[name] = obj.offsetLeft;
				break;
				case 'top':
				start[name] = obj.offsetTop;
				break;
				case 'opacity':
				start[name] = 1;
				break;
				case 'borderWidth':
				start[name] = 0;
				break;
			}
		}
		
		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name] - start[name];
	}
	var count = Math.round(options.duration/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.easing){
				case 'linear':
				var cur = start[name]+dis[name]*n/count;
				break;
				case 'ease-in':
				var a = n/count;
				var cur = start[name]+dis[name]*Math.pow(a,3);
				break;
				case 'ease-out':
				var a =1 - n/count;
				var cur = start[name]+dis[name]*(1-Math.pow(a,3));		
				break;
				
			}
			
			if(name == 'opacity'){
				obj.style.opacity = cur;
				obj.style.filter = 'alpha(opacity:'+cur*100+')'
			}else{
				obj.style[name] = cur +'px';
			}
		
		}
		if(n == count){
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}	
	},30);
}