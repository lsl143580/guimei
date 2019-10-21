window.onload = function() {
				var timeD = document.getElementsByTagName("div")[1];
				//一开始先执行一下，应为要等1秒才显示
                getDateTime()
                //循环显示当前时间
				window.setInterval(getDateTime,1000);

                //获得当前时间，并把它写到 time标签里
				function getDateTime() {
					var date = new Date();

					var year = date.getFullYear();
					var month = date.getMonth()+1;
					var day = date.getDate();
					var hours = date.getHours();
					var minutes = date.getMinutes();
					var Seconds = date.getSeconds();
					//拼接字符
					var dateString = "你好，欢迎访问贵美商城！" + year + "年" + getTwo(month) + "月" + getTwo(day) + "日 " + getTwo(hours) + "时" +
						getTwo(minutes) + "分" + getTwo(Seconds) + "秒";
					//设置当前时间
					timeD.innerHTML = dateString;
				}

				function getTwo(s) {
					return s < 10 ? "0" + s : s;
				}
			}