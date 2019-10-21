$(function() {
	//放大镜
	(function() {
		var ione = $(".one"),
			ithe = $(".the"),
			itwo = $(".two img"),
			tthe = $(".the img");

		var arr = ["img/product_img/z1.jpg", "img/product_img/z2.jpg", "img/product_img/z3.jpg", "img/product_img/z4.jpg", "img/product_img/z5.jpg"];
		var oarr = ["img/product_img/d1.jpg", "img/product_img/d2.jpg", "img/product_img/d3.jpg", "img/product_img/d4.jpg", "img/product_img/d5.jpg"];
		itwo.each(function(i) {
			$(this).click(function() {
				$(".one img").attr("src", arr[i])
				tthe.attr("src", oarr[i])
				itwo.removeClass("active")
				$(this).addClass("active")
			})

			ione.mousemove(function(a) {
				var evt = a || window.event
				ithe.css('display', 'block')
				var ot = evt.clientY - ($(".one").offset().top - $(document).scrollTop()) - 87;
				var ol = evt.clientX - ($(".one").offset().left - $(document).scrollLeft()) - 87;
				if(ol <= 0) {
					ol = 0;
				}
				if(ot <= 0) {
					ot = 0;
				}
				if(ol >= 111) {
					ol = 111
				}
				if(ot >= 111) {
					ot = 111
				}
				$(".wai span").css({
					'left': ol,
					'top': ot
				})
				var ott = ot / 286 * 800
				var oll = ol / 286 * 800
				tthe.css({
					'left': -oll,
					'top': -ott
				})
			})
			ione.mouseout(function() {
				ithe.css('display', 'none')
			})

		})
	})();

	//分类选着
	(function() {
		var sys_item = {

			"mktprice": "3600.00",

			"price": "3000.80",

			"sys_attrprice": {
				"3_13": {
					"price": "2500",
					"mktprice": "2896"
				},
				"3_14": {
					"price": "2360",
					"mktprice": "2860"
				},
				"3_16": {
					"price": "1400",
					"mktprice": "1500"
				},
				"3_17": {
					"price": "4000",
					"mktprice": "4800"
				},
				"4_13": {
					"price": "2500",
					"mktprice": "2896"
				},
				"4_14": {
					"price": "2360",
					"mktprice": "2860"
				},
				"4_16": {
					"price": "1400",
					"mktprice": "1500"
				},
				"4_17": {
					"price": "4000",
					"mktprice": "4800"
				},
				"8_13": {
					"price": "2500",
					"mktprice": "2896"
				},
				"8_14": {
					"price": "2360",
					"mktprice": "2860"
				},
				"8_16": {
					"price": "1400",
					"mktprice": "1500"
				},
				"8_17": {
					"price": "4000",
					"mktprice": "4800"
				},
				"9_13": {
					"price": "2500",
					"mktprice": "2896"
				},
				"9_14": {
					"price": "2360",
					"mktprice": "2860"
				},
				"9_16": {
					"price": "1400",
					"mktprice": "1500"
				},
				"9_17": {
					"price": "4000",
					"mktprice": "4800"
				}
			}
		};

		$(".sys_item_spec .sys_item_specpara").each(function() {

			var i = $(this);

			var p = i.find("ul>li");

			p.click(function() {

				if(!!$(this).hasClass("selected")) {

					$(this).removeClass("selected");

					i.removeAttr("data-attrval");

				} else {

					$(this).addClass("selected").siblings("li").removeClass("selected");

					i.attr("data-attrval", $(this).attr("data-aid"))

				}

				getattrprice() //输出价格

			})

		})

		//获取对应属性的价格

		function getattrprice() {

			var defaultstats = true;

			var _val = '';

			var _resp = {

					mktprice: "#preferentialPrice",

					price: "#originalPrice"

				} //输出对应的class

			$(".sys_item_spec .sys_item_specpara").each(function() {

				var i = $(this);

				var v = i.attr("data-attrval");

				if(!v) {

					defaultstats = false;

				} else {

					_val += _val != "" ? "_" : "";

					_val += v;

				}

			})

			if(!!defaultstats) {

				_mktprice = sys_item['sys_attrprice'][_val]['mktprice'];

				_price = sys_item['sys_attrprice'][_val]['price'];

			} else {

				_mktprice = sys_item['mktprice'];

				_price = sys_item['price'];

			}

			//输出价格

			$(_resp.mktprice).text(_mktprice); ///其中的math.round为截取小数点位数

			$(_resp.price).text(_price);

		}
	})();

	(function() {
		var shengs = {
			"1": "河南省",
			"2": "山西省"
		};
		var shis = {
			"1": {
				"110": "郑州市",
				"120": "开封市",
				"130": "洛阳市"
			},
			"2": {
				"210": "太原市",
				"220": "晋城市",
				"230": "长治市"
			}
		};
		var qus = {
			"230": {
				"231": "沁县",
				"232": "平顺县",
				"233": "黎城县"
			},
			"220": {
				"221": "泽州县",
				"222": "阳城县",
				"223": "陵川县"
			},
			"210": {
				"211": "迎泽区",
				"212": "晋源区  ",
				"213": "小店区 "
			},
			"110": {
				"111": "金水区",
				"112": "管城区",
				"113": "中原区"
			},
			"120": {
				"121": "龙亭区",
				"122": "鼓楼区",
				"123": "祥符区"
			},
			"130": {
				"131": "西工区",
				"132": "洛龙区",
				"133": "涧西区"
			}
		};
		$(".ui-switchable-item").on("click", function() {
			var index = $(this).index();
			$(this).addClass("ui-area-current").siblings(".ui-area-current").removeClass("ui-area-current");
			$(".ui-switchable-panel").eq(index).show().siblings().hide();
		});

		var sheng = $(".ui-area-content-list").eq(0); //省
		var shi = $(".ui-area-content-list").eq(1); //市
		var qu = $(".ui-area-content-list").eq(2); //区
		for(var x in shengs) {
			sheng.append($("<li><a href='javascript:void(0)' shengid='" + x + "'>" + shengs[x] + "</a></li>"));
		}
		sheng.find("a").on("click", function() {
			var shengid = $(this).attr("shengid");
			shi.empty();
			for(var x in shis[shengid]) {
				shi.append($("<li><a href='javascript:void(0)' shiid='" + x + "'>" + shis[shengid][x] + "</a></li>"));
			}
			$("#shengd").text($(this).text());
			$("#shid").text("");
			$("#qud").text("");
			$(".ui-switchable-item").eq(0).text($(this).text());
			$(".ui-switchable-item").eq(1).text("请选着");
			$(".ui-switchable-item").eq(2).text("请选着");
			nextPage(1);

		});
		$(document).on("click", ".ui-area-content-list.shi a", function() {
			var shiid = $(this).attr("shiid");
			qu.empty();
			for(var x in qus[shiid]) {
				qu.append($("<li><a href='javascript:void(0)' quid='" + x + "'>" + qus[shiid][x] + "</a></li>"));
			}
			$("#shid").text($(this).text());
			$("#qud").text("");
			$(".ui-switchable-item").eq(1).text($(this).text());
			$(".ui-switchable-item").eq(2).text("请选着");
			nextPage(2);
		});
		$(document).on("click", ".ui-area-content-list.qu a", function() {
			$("#qud").text($(this).text());
			$(".ui-switchable-item").eq(2).text($(this).text());
			//nextPage(2);
		});
		$(".ui-area-text-wrap").mouseover(function() {
			$(".dizhi").show()
		}).mouseout(function() {
			$(".dizhi").hide()
		});

		function nextPage(index) {
			setTimeout(function() {
				$(".ui-switchable-item").eq(index).show().addClass("ui-area-current").siblings(".ui-area-current").removeClass("ui-area-current");
				$(".ui-switchable-panel").eq(index).show().siblings().hide();
			}, 300);

		}

	})();

	//加入购物车---------
	(function() {
		$('#jrgwc').on('click', function() {
			var cart = $('#zheli');
			var imgtodrag = $("#ddddddd");
			if(imgtodrag) {
				var imgclone = imgtodrag.clone().offset({
					top: imgtodrag.offset().top,
					left: imgtodrag.offset().left
				}).css({
					'opacity': '0.5',
					'position': 'absolute',
					'height': '150px',
					'width': '150px',
					'z-index': '100'
				}).appendTo($('body')).animate({
					'top': cart.offset().top + 10,
					'left': cart.offset().left + 10,
					'width': 75,
					'height': 75
				}, 1000, 'easeInOutExpo');
				setTimeout(function() {
					cart.effect('shake', 200);
				}, 1500);
				imgclone.animate({
					'width': 0,
					'height': 0
				}, function() {
					$(this).detach();
				});
			}
		});
		var id;
		$(".sideNavigation >ul a").mouseover(function() {
			var this_ = $(this);
			id = setTimeout(function() {

				this_.next().fadeIn(200);
			}, 100);
		}).mouseout(function() {
			clearTimeout(id);
			$(this).next().fadeOut(100);
		});

	})();
	
	(function(){
							
			                var max = 99;
							var min = 1;
							var $jia = $(".choose-amount>.ooooo>.btn-add");
							var $jian = $(".choose-amount>.ooooo>.btn-reduce");
							var $inpt = $(".choose-amount>.ooooo>.buy-num");
							$jia.on("click",function(){
								if($inpt.val()<max){
									$inpt.val(window.parseInt($inpt.val())+1);
								}
								
							});
							$jian.on("click",function(){
								if($inpt.val()>min){
									$inpt.val(window.parseInt($inpt.val())-1);
								}
								
							});
							$inpt.on("input",function(){
							 var reg = /^\d{1,2}$/;
							 console.log(reg.test($(this).val()))
							 if(!reg.test($(this).val())){
							 	$(this).val("1");
							}
							});				
		
	})();

})