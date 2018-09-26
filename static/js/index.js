




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