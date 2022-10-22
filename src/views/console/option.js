import * as echarts from 'echarts'

export let orderQuantityOption = {
    tooltip: {
        trigger: 'axis',
        formatter: '{b} : {c} 单',
    },
    grid: {
        top: '8%',
        left: '0%',
        right: '0%',
        bottom: '0%',
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [
                '星期一',
                '星期二',
                '星期三',
                '星期四',
                '星期五',
                '星期六',
                '星期日',
            ],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '订单总数',
            type: 'line',
            smooth: true,
            symbolSize: 0,
            lineStyle: {
                color: '#3deaff',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {offset: 0, color: 'rgba(61,234,255, 0.9)'},
                        {offset: 0.7, color: 'rgba(61,234,255, 0)'},
                    ],
                    false
                ),
            },
            data: [10, 20, 15, 20, 10, 15, 13],
        },
    ],
}
