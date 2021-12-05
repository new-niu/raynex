
var hui = (function(selector){
	var _huiDeputes = new Array();
	/* 选择器 */
	var _hui = function(selector){
		if(!selector){selector = document;}
		var selectorType = typeof(selector);
		switch(selectorType){
			case 'string':
			var doms = document.querySelectorAll(selector);
			var reObj = {dom:doms, length:doms.length};
			break;
			case 'object':
			var reObj = {dom:[selector], length:1};
			break;
			default:
			return null;
		}
		reObj.__proto__ = hcExtends;
		return reObj;
	}
	function addFuns(doms){var reObj = {dom:doms, length:doms.length}; reObj.__proto__ = hcExtends; return reObj;}
	_hui.import = function(funName, path){
		if(!path){path = './js/';}
		new_element=document.createElement("script");
		new_element.setAttribute("type","text/javascript");
		new_element.setAttribute("src", path+'hui-'+funName+'.js');
		document.body.appendChild(new_element);
	}

	/* loading */
	_hui.loading = function(msg, isClose){
		if(msg){var loadingText = '<div id="hui-loading-text">'+msg+'</div>';}else{var loadingText = '';}
		var HUI_LoadingMask = document.getElementById('hui-transparent-mask');
		if(isClose){if(HUI_LoadingMask){HUI_LoadingMask.parentNode.removeChild(HUI_LoadingMask);} return false;}
		if(!HUI_LoadingMask){
			var HUI_LoadingMask = document.createElement('div');
			HUI_LoadingMask.setAttribute('id', 'hui-transparent-mask');
			HUI_LoadingMask.innerHTML = '<div id="hui-loading"><div id="hui-loading-in"><div></div><div></div><div></div><div></div><div></div></div>'+loadingText+'</div>';
			document.body.appendChild(HUI_LoadingMask);
		}
	};
	_hui.closeLoading = function(){
		var HUI_LoadingMask = document.getElementById('hui-transparent-mask');
		if(HUI_LoadingMask){HUI_LoadingMask.parentNode.removeChild(HUI_LoadingMask);}
	};
	_hui.h5Loading = function(isClose, title, options){
		if(isClose){plus.nativeUI.closeWaiting(); return ;}
		if(!title){title = ''}; if(!options){options = {};}
		plus.nativeUI.showWaiting(title, options);
	}
	return _hui;
})(document);
window.addEventListener('resize', function(){
	clearTimeout(huiReSizeTimer);
	if(huiResizeNeedDo.length < 1){return false;}
	huiReSizeTimer = setTimeout(function(){for(var i = 0; i < huiResizeNeedDo.length; i++){var fun = huiResizeNeedDo[i]; fun();}}, 100);
});
Array.prototype.shuffle = function(){this.sort(function(){return Math.random() - 0.5;});};