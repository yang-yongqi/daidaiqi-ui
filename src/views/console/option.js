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

export let visitsOption = {
    grid: {

    },
    xAxis: {
        data: [
            '1 月统计',
            '2 月统计',
            '3 月统计',
            '4 月统计',
            '5 月统计',
            '6 月统计',
            '7 月统计',
            '8 月统计',
            '9 月统计',
            '10 月统计',
            '11 月统计',
            '12 月统计',
        ],
        splitLine: {
            lineStyle: {
                type: 'dashed',
                width: 1,
            },
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#606266',
            },
        },
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed',
                width: 1,
            },
            show: true,
        },
    },
    series: [
        {
            type: 'bar',
            barWidth: 50,
            itemStyle: {
                color: echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: '#5ef3ff',
                        },
                        {
                            offset: 1,
                            color: '#06a4f4',
                        },
                    ],
                    false
                ),
            },
            data: [
                254, 3254, 1654, 2454, 4757, 2011, 1211, 254, 3254, 1654, 2454, 4757,
            ],
        },
    ],
}