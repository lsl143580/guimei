$(function(){
	
	
	
	
	
	
	
	var tab = document.getElementById("table1");
				//获得表的的tbody（因为一个）
				var tbody = tab.tBodies[0];
				var tfootRowCells = tab.tFoot.rows[0].cells;
				//获得tbody所有的行
				var rows = tbody.rows;
				

				//设置购物车的价格-----------------------------
				setTotalPrice();
				//修改商品数量 一。----------------------------------------------------
				var productNumInput = tab.getElementsByClassName("productNum");
				for(var i = 0; i < productNumInput.length; i++) {
					productNumInput[i].oninput = function() {
						//alert(this.value)
						this.value=getSum(this.value);
						setTotalPrice();
					}
				}
				for (var i = 0; i <  productNumInput.length; i++) {
					productNumInput[i].onkeydown=function(event){
						tui = true;
						if(event.charCode==0){
						   this.value= 0;	
						}
					}
				}
				//修改商品数量 二。----------------------------------------------------
				var sumAdds = tab.getElementsByClassName("sumAdd");
				for(var i = 0; i < sumAdds.length; i++) {
					sumAdds[i].onclick = function() {
						var inp=this.parentNode.children[1];
						inp.value=getSum((parseInt(inp.value)+1)+"");
						setTotalPrice();
					}
				}
				var sumSubs = tab.getElementsByClassName("sumSub");
				for(var i = 0; i < sumSubs.length; i++) {
					sumSubs[i].onclick = function() {
						var inp=this.parentNode.children[1];
						inp.value=getSum(inp.value-1);
						setTotalPrice();
					}
				}

				//删除一件商品----------------------------------------------------
				var sps = tab.getElementsByClassName("deletee");
				for(var i = 0; i < sps.length; i++) {
					sps[i].onclick = function() {
						//alert(this.parentNode.parentNode.parentNode.innerHTML)
						this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
						//重新计算值
						setTotalPrice();
						if(rows.length == 0) {
							tab.style.display = "none";
							document.getElementsByClassName("noGoods")[0].style.display = "block";
						} else {
							tab.style.display = "block";
							document.getElementsByClassName("noGoods")[0].style.display = "none";
						}
					}
				}

				function setTotalPrice() {
					tfootRowCells[2].innerText = "￥" + getActualPrice();
					tfootRowCells[3].firstElementChild.innerText = "￥" + (getActualPrice1() - getActualPrice()).toFixed(2);
				}
				//实际总金额
				function getActualPrice() {
					var price = 0;
					for(var i = 0; i < rows.length; i++) {
						price += getOneRowPrice(rows[i])
					}
					return price;
				}
				//优惠前的总金额
				function getActualPrice1() {
					var price = 0;
					for(var i = 0; i < rows.length; i++) {
						price += getOneRowPrice1(rows[i])
					}
					return price;
				}
				//或单行的实际价格   价格*数量
				function getOneRowPrice(row) {
					var price;
					var cs = row.cells;
					var dj = parseFloat(cs[2].innerText.substring(1));
					var sl = parseInt(cs[4].children[1].value);
					price = dj * sl;
					return price;
				}
				//或单行的优惠前的价格   原价格价格*数量
				function getOneRowPrice1(row) {
					var price;
					var cs = row.cells;
					var dj = parseFloat(cs[1].innerText.substring(1));
					var sl = parseInt(cs[4].children[1].value);
					price = dj * sl;
					return price;
				}

				function getSum(val) {
					var v;
					var reg = /^[1-9][0-9]{0,2}$/;
					
					if(!reg.test(val)) {
						//alert(3)
						v = 1;
					}else{
						v = val < 1 ? 1 : (val > 99) ? 99 : val;
					}
					return v;
				}
	
	
	
	
	
});