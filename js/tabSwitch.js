function tabSwitch(father){
	_this = this;
	this.tabLis = father.children[0].getElementsByTagName('li');
	this.contentDivs = father.getElementsByTagName('div');
	for (var i = this.tabLis.length - 1; i >= 0; i--) {
		this.tabLis[i].index = i;
		this.tabLis[i].onclick = function(){
			_this.clickFun(this.index);
		};
	}
}
tabSwitch.prototype.clickFun = function(index){
	for (var i = this.tabLis.length - 1; i >= 0; i--) {
		this.tabLis[i].className = '';
		this.contentDivs[i].style.display = '';
	}
	this.tabLis[index].className = 'current';
	this.contentDivs[index].style.display = 'block';
}