//scroll to the bottom while scrolls
function scroll(console){
	let scrollEl = document.scrollingElement; 
	
	if(scrollEl.scrollTop + scrollEl.clientHeight == scrollEl.scrollHeight){
		clearInterval(interalId);
		return "Done, but scroll down to double check, and launch set the inteval again in needed";
	}else {
		scrollEl.scrollBy(0, 42000);
		return "scrolling";
	}
}
let interalId = setInterval(() =>  console.log(scroll()), 3000);


this._measureRelativeViewportRect = function() {
	let doomScrollScreenSize = document.scrollingElement.scrollHeight;
	return {
		_top: 0, 
		_height: doomScrollScreenSize, 
		getTop: function() {return 0;}, 
		getBottom: function() {return doomScrollScreenSize;}, 
		getHeight: function() {return doomScrollScreenSize;}}
}

let css = '';
let len = document.styleSheets.length - 1;
let csso = document.styleSheets[len].cssRules;
for (let i = 0;i < csst.length; i++) {
	const csso = csst[i];
	css += csso.cssText;
}
document.querySelectorAll('style')[len].innerHTML = css;




