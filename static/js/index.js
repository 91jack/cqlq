
			// 地图模块
			// 地图初始化
			var map = new BMap.Map("map"); // 创建Map实例
			var point = new BMap.Point(107.562695, 29.271674); //赵家乡政府
			map.centerAndZoom(point, 10); // 初始化地图,设置中心点坐标和地图级别

			map.enableScrollWheelZoom(true);
			//创建小汽车
			var pt = new BMap.Point(107.562695, 29.271674);
			var myIcon = new BMap.Icon("static/images/icon_car.png", new BMap.Size(33,21));
			var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
			map.addOverlay(marker2);              // 将标注添加到地图中

			var opts = {
			  width : 200,     // 信息窗口宽度
			  height: 100,     // 信息窗口高度
			  title : "海底捞王府井店" , // 信息窗口标题
			  enableMessage:true,//设置允许信息窗发送短息
			  message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
			}
			var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象 
			marker2.addEventListener("click", function(){          
				map.openInfoWindow(infoWindow,point); //开启信息窗口
			});
			
			// 编写自定义函数,创建标注
			function addMarker(point){
			  var marker = new BMap.Marker(point);
			  map.addOverlay(marker);
			}
			
			// 随机向地图添加25个标注
			var bounds = map.getBounds();
			var sw = bounds.getSouthWest();
			var ne = bounds.getNorthEast();
			var lngSpan = Math.abs(sw.lng - ne.lng);
			var latSpan = Math.abs(ne.lat - sw.lat);
			for (var i = 0; i < 25; i ++) {
				var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
				//addMarker(point);
				var marker2 = new BMap.Marker(point,{icon:myIcon});  // 创建标注
					map.addOverlay(marker2);      
			}
			
			
			// 
			// 生产数据



			// 折线图
			var lineChart = echarts.init(document.getElementById('lineChart'));
			var option = {
				grid: {
					//				show:true,
					top: 35,
					left: 40,
					right:0,
					bottom:10
					
				},
				tooltip: {
			        trigger: 'axis',  
			    },
				xAxis: {
					type: 'category',
					data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
					axisLine: {
						//      	show:true,
						lineStyle: {
							color: '#148976'
						}
					},
					axisTick: {
						lineStyle: {
							color: '#fff'
						}
					},

				},
				yAxis: {
					name:'油石比（%）',
					type: 'value',
					splitLine: {
						show: false
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#148976'
						}
					},
					axisTick: {
						lineStyle: {
							color: '#fff'
						}
					},
				},
				series: [{
					name:'油石比',
					type: 'line',
					data: [1330, 1320, 932, 901, 300, 100, 900, 934, 820, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 1330, 1320, 1500],
					itemStyle: {
						color: '#FFAE00'
					}
				}]
			};

			lineChart.setOption(option);

			//柱状图
			var barChart = echarts.init(document.getElementById('barChart'));
			var option = {
				grid: {
					//show:true,
					top: 30,
					left: 40,
					right:0,
					bottom:10
				},
				tooltip: {
			        trigger: 'axis',  
			    },
				xAxis: {
					type: 'category',
					data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
					axisTick: {
						lineStyle: {
							color: '#fff'
						}
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#148976'
						}
					},
				},
				yAxis: {
					name:'温度（℃）',
					type: 'value',
					splitLine: {
						show: false
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#148976'
						}
					},
					axisTick: {
						lineStyle: {
							color: '#fff'
						}
					},
				},
				series: [{
						name:'温度',
						data: [1330, 1320, 932, 901, 300, 100, 900, 934, 820, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 1330, 1320, 1500],
						type: 'bar',
						itemStyle: {
							color: '#00CAB0'
						}
					},

				]
			};

			barChart.setOption(option);