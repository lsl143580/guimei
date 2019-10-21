window.onload=function(){
				var ggs = document.getElementById("sadsad");
				var imgs = ggs.getElementsByTagName("img");
				var divs = ggs.getElementsByClassName("cone")
				for (var i = 0; i < imgs.length; i++) {
					imgs[i].onclick=function(){
						var nextEle = this.nextElementSibling;
						if(nextEle.style.display=="block"){
							nextEle.style.display="none";
						}else{
							for (var i = 0; i < divs.length; i++) {
								divs[i].style.display="none";
							}
							nextEle.style.display="block";
						}
					}
				}
			}