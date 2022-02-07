window.addEventListener('load', function () {
    initLeftTop();
    initLeftMiddle();
    initLeftBottom1();
    initLeftBottom2();
    initLeftBottom3();
    initRightTop();
    initRightMiddle();
    initRightBottom();
});

function initLeftTop() {
    var ec = echarts.init(document.getElementById('leftTop'));
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            splitLine: {
                show: false
            },
            type: 'category',
            data: ['商超门店', '教育培训', '房地产', '生活服务', '汽车销售', '旅游酒店', '五金建材'],
            axisLabel: {
                color: 'rgba(255,255,255,0.8)',
                rotate: 25,
                fontSize: 12
            }
        },
        yAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                    type: 'dotted'
                }
            },
            axisLabel: {
                color: 'rgba(255,255,255,0.8)',
                rotate: 25,
                fontSize: 12
            }
        },
        grid: {
            top: '12%',
            bottom: '0%',
            containLabel: true
        },
        series: [
            {
                type: 'bar',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                barMaxWidth: 20,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(255,255,255,0.0)'
                },
                emphasis: {
                    backgroundStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                },
                itemStyle: {
                    borderRadius: 5
                }
            }
        ]
    };
    ec.setOption(option);
    window.addEventListener('resize', function () {
        ec.resize();
    })
}

function initLeftMiddle() {
    var ec = echarts.init(document.getElementById('leftMiddle'));
    var option = {
        color: ['#27d08a'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            splitLine: {
                show: false
            },
            type: 'category',
            data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽'],
            axisLabel: {
                color: 'rgba(255,255,255,0.8)',
                rotate: 25,
                fontSize: 12
            }
        },
        yAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                    type: 'dotted'
                }
            },
            axisLabel: {
                color: 'rgba(255,255,255,0.8)',
                rotate: 25,
                fontSize: 12
            }
        },
        grid: {
            top: '12%',
            bottom: '0%',
            containLabel: true
        },
        series: [
            {
                type: 'bar',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                barMaxWidth: 20,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(255,255,255,0.0)'
                },
                emphasis: {
                    backgroundStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                },
                itemStyle: {
                    borderRadius: 5
                }
            }
        ]
    };
    ec.setOption(option);
    window.addEventListener('resize', function () {
        ec.resize();
    })
}

function initLeftBottom1() {
    var ec = echarts.init(document.getElementById('leftBottom1'));
    var option = {
        color: ['#27d08a'],
        title: {
            text: '年龄分布',
            left: 'center',
            top: '10%',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            left: 'center',
            top: 'bottom',
            icon: 'circle',
            textStyle: {
                fontSize: 10,
                color: 'rgba(255,255,255,0.8)'
            },
            itemGap: 5,
            itemHeight: 10,
            orient: 'vertical'
        },
        series: [
            {
                type: 'pie',
                color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                radius: ['40%', '50%'],
                label: {
                    show: false
                },
                data: [
                    {
                        name: '0-33岁',
                        value: 200
                    },
                    {
                        name: '33-66岁',
                        value: 100
                    },
                    {
                        name: '66岁以上',
                        value: 100
                    },
                ]
            }
        ]
    };
    ec.setOption(option);
    window.addEventListener('resize', function () {
        ec.resize();
    })
}

function initLeftBottom2() {
    var ec = echarts.init(document.getElementById('leftBottom2'));
    var option = {
        color: ['#27d08a'],
        title: {
            text: '职业分布',
            left: 'center',
            top: '10%',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            left: 'center',
            top: 'bottom',
            icon: 'circle',
            textStyle: {
                fontSize: 10,
                color: 'rgba(255,255,255,0.8)'
            },
            itemGap: 5,
            itemHeight: 10,
            orient: 'vertical'
        },
        series: [
            {
                type: 'pie',
                color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                radius: ['40%', '50%'],
                label: {
                    show: false
                },
                data: [
                    {
                        name: 'IT',
                        value: 200
                    },
                    {
                        name: '金融',
                        value: 100
                    },
                    {
                        name: '教育',
                        value: 100
                    },
                ]
            }
        ]
    };
    ec.setOption(option);
    window.addEventListener('resize', function () {
        ec.resize();
    })
}

function initLeftBottom3() {
    var ec = echarts.init(document.getElementById('leftBottom3'));
    var option = {
        color: ['#27d08a'],
        title: {
            text: '兴趣分布',
            left: 'center',
            top: '10%',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            left: 'center',
            top: 'bottom',
            icon: 'circle',
            textStyle: {
                fontSize: 10,
                color: 'rgba(255,255,255,0.8)'
            },
            itemGap: 5,
            itemHeight: 10,
            // orient: 'vertical'
        },
        series: [
            {
                type: 'pie',
                color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                radius: ['40%', '50%'],
                label: {
                    show: false
                },
                data: [
                    {
                        name: '汽车',
                        value: 200
                    },
                    {
                        name: '教育',
                        value: 100
                    },
                    {
                        name: '软件',
                        value: 100
                    },
                    {
                        name: '旅游',
                        value: 100
                    },
                    {
                        name: '财经',
                        value: 100
                    },
                ]
            }
        ]
    };
    ec.setOption(option);
    window.addEventListener('resize', function () {
        ec.resize();
    })
}

function initRightTop() {
    var ec = echarts.init(document.getElementById('rightTop'));
    var option = {
        color: ['#2f89cf', '#27d08a'],
        legend: {
            show: true,
            left: 'center',
            top: '5%',
            textStyle: {
                color: 'auto'
            },
            data: ['安卓', 'IOS']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            splitLine: {
                show: false
            },
            type: 'value',
            axisLabel: {
                color: 'rgba(255,255,255,0.8)',
                rotate: 25,
                fontSize: 12
            }
        },
        yAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                    type: 'dotted'
                }
            },
            type: 'value',
            axisLabel: {
                color: 'rgba(255,255,255,0.8)',
                rotate: 25,
                fontSize: 12
            }
        },
        grid: {
            top: '20%',
            bottom: '0%',
            containLabel: true
        },
        series: [
            {
                name: '安卓',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                areaStyle: {
                    color: '#27d08a',
                    opacity: 0.1
                },
                itemStyle: {
                    color: 'auto',
                    borderType: 'dotted'
                },
                data: [
                    [2, 3],
                    [3, 2],
                    [4, 4],
                    [5, 3],
                    [6, 5],
                    [7, 4],
                ],
            },
            {
                name: 'IOS',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                areaStyle: {
                    color: '#27d08a',
                    opacity: 0.1
                },
                data: [
                    [1, 7],
                    [2, 5],
                    [3, 7],
                    [4, 3],
                    [5, 8],
                    [6, 6],
                ],
            }
        ]
    };
    ec.setOption(option);
    window.addEventListener('resize', function () {
        ec.resize();
    })
}

function initRightMiddle() {
    var ec = echarts.init(document.getElementById('rightMiddle'));
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            splitLine: {
                show: false
            },
            type: 'category',
            data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽'],
            axisLabel: {
                color: 'rgba(255,255,255,0.8)',
                rotate: 25,
                fontSize: 12
            }
        },
        yAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                    type: 'dotted'
                }
            },
            axisLabel: {
                color: 'rgba(255,255,255,0.8)',
                rotate: 25,
                fontSize: 12
            }
        },
        grid: {
            top: '12%',
            bottom: '0%',
            containLabel: true
        },
        series: [
            {
                type: 'bar',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                barMaxWidth: 20,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(255,255,255,0.0)'
                },
                emphasis: {
                    backgroundStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                },
                itemStyle: {
                    borderRadius: 5
                }
            }
        ]
    };
    ec.setOption(option);
    window.addEventListener('resize', function () {
        ec.resize();
    })
}

function initRightBottom() {
    var ec = echarts.init(document.getElementById('rightBottom'));
    var option = {
        color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['浙江', '上海', '江苏', '广东', '北京'],
            textStyle: {
                color: '#fff'
            }
        },
        polar: {
            radius:['0','70%'],
        },
        angleAxis: {
            max: 100,
            startAngle: 75,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        radiusAxis: {
            type: 'category',
            data: [''],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        },
        grid: {
            top: '12%',
            bottom: '0%',
            containLabel: true
        },
        series: [
            {
                name: '浙江',
                type: 'bar',
                coordinateSystem: 'polar',
                // color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6']
                data: [
                    {
                        value: 20,
                        itemStyle: {
                            color: '#0f63d6'
                        }
                    }
                ],
                barMaxWidth: 20,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(255,255,255,0.0)'
                },
                emphasis: {
                    backgroundStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                },
                itemStyle: {
                    borderRadius: 5
                }
            },
            {
                name: '上海',
                type: 'bar',
                coordinateSystem: 'polar',
                // color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6']
                data: [
                    {
                        value: 40,
                        itemStyle: {
                            color: '#0f78d6'
                        }
                    }
                ],
                barMaxWidth: 20,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(255,255,255,0.0)'
                },
                emphasis: {
                    backgroundStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                },
                itemStyle: {
                    borderRadius: 5
                }
            },
            {
                name: '江苏',
                type: 'bar',
                coordinateSystem: 'polar',
                // color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6']
                data: [
                    {
                        value: 60,
                        itemStyle: {
                            color: '#0f8cd6'
                        }
                    }
                ],
                barMaxWidth: 20,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(255,255,255,0.0)'
                },
                emphasis: {
                    backgroundStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                },
                itemStyle: {
                    borderRadius: 5
                }
            },
            {
                name: '广东',
                type: 'bar',
                coordinateSystem: 'polar',
                // color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6']
                data: [
                    {
                        value: 80,
                        itemStyle: {
                            color: '#0fa0d6'
                        }
                    }
                ],
                barMaxWidth: 20,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(255,255,255,0.0)'
                },
                emphasis: {
                    backgroundStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                },
                itemStyle: {
                    borderRadius: 5
                }
            },
            {
                name: '北京',
                type: 'bar',
                coordinateSystem: 'polar',
                // color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6']
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            color: '#0fb4d6'
                        }
                    }
                ],
                barMaxWidth: 20,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(255,255,255,0.0)'
                },
                emphasis: {
                    backgroundStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                },
                itemStyle: {
                    borderRadius: 5
                }
            },
        ]
    };
    ec.setOption(option);
    window.addEventListener('resize', function () {
        ec.resize();
    })
}