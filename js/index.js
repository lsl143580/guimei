window.onload=function(){
				//1.无限滚动------------------------
				(function(){
					var zjs = document.getElementById("zjs");
				var con = document.querySelector(".right_main_2_con");
				var mt = 0;
				//var inte;
				var inte=setInterval(slide,50);
			    //鼠标移动到，暂停
			    con.onmouseover=function(){
			    	clearInterval(inte);
			    }
			    con.onmouseout=function(){
			    	inte=setInterval(slide,50);
			    }
				
				//滑动的函数
				function slide(){
					if(mt== -245){
						mt = 0;
					}
					mt--;
					zjs.style.marginTop=mt+"px";
				}
				})();
				
				//广告关闭----------------------------
				(function(){
					var clo11s = document.getElementsByClassName("clo11");
				for (var i = 0; i < clo11s.length; i++) {
					clo11s[i].onclick=function(){
						this.parentNode.style.display="none";
					}
				}
				})();
				
				//轮播图------------
				(function(){
						var slideshow = document.getElementById("slideshow");
						var img = slideshow.getElementsByTagName("img")[0];
						var lis = slideshow.getElementsByTagName("li");
						var initNum = 1;
						
				        //自动轮播
						window.setInterval(function(){
							if(initNum>4){
								initNum=1;
							}
							img.setAttribute("src","img/ad-0"+initNum+".jpg");
							setLiStyle(initNum-1)
							initNum++;
						},3000);
						//手动轮播
					    for (var i = 0; i < lis.length; i++) {
					    	lis[i].onmouseover=function(){
					    		var index = getIndex(this);
					    		setLiStyle(index);
					    		img.setAttribute("src","img/ad-0"+(index+1)+".jpg");
					    		initNum=(index+1);
					    	}
					    }
						
						//根据索引设置对应li样式
						function setLiStyle(index){
							for (var i = 0; i < lis.length; i++) {
								if (index==i) {
									lis[i].className="lijh";
								} else{
									lis[i].className="";
								}
							}
						}
						//获得li的索引
						function getIndex(thi){
							for (var i = 0; i < lis.length; i++) {
								var index;
								if (lis[i]==thi) {
									index = i;
								} 
							}
							return index;
						}
						
				
					})();
						
				
			}