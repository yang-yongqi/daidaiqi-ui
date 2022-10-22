<template>
    <div>
        <div class="console-top">
            <a-row :gutter="15">
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="6" class="m-t-15">
                    <a-card size="small" title="访问量" :bordered="false">
                        <template #extra>
                            <a-tag color="success">日</a-tag>
                        </template>
                        <div class="console-top-card">
                            <div class="console-top-number">
                                26,818.00
                            </div>
                            <div class="console-top-trend">
                                <span class="m-r-10">日同比 12.5%</span>
                                <icon icon="CaretUpOutlined" style="color: #ed4014"></icon>
                                <span class="m-l-10 m-r-10">周同比 5%</span>
                                <icon icon="CaretDownOutlined" style="color: #19be6b"></icon>
                            </div>
                        </div>
                        <a-row justify="space-between" class="m-t-10">
                            <a-col :span="12">总访问量</a-col>
                            <a-col :span="12" class="text-r">280 万</a-col>
                        </a-row>
                    </a-card>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="6" class="m-t-15">
                    <a-card size="small" title="销售额" :bordered="false">
                        <template #extra>
                            <a-tag color="error">月</a-tag>
                        </template>
                        <div class="console-top-card">
                            <div class="console-top-number">
                                ¥12,000
                            </div>
                            <a-progress
                                :showInfo="false"
                                :percent="86"
                            />
                        </div>
                        <a-row justify="space-between" class="m-t-10">
                            <a-col :span="12">总销售额</a-col>
                            <a-col :span="12" class="text-r">68 万</a-col>
                        </a-row>
                    </a-card>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="6" class="m-t-15">
                    <a-card size="small" title="订单量" :bordered="false">
                        <template #extra>
                            <a-tag color="success">日</a-tag>
                        </template>
                        <div class="console-top-card">
                            <div class="console-top-number">
                                1588
                            </div>
                            <div id="orderQuantity"></div>
                        </div>
                        <a-row justify="space-between" class="m-t-10">
                            <a-col :span="12">转化率</a-col>
                            <a-col :span="12" class="text-r">60 %</a-col>
                        </a-row>
                    </a-card>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="6" class="m-t-15">
                    <a-card size="small" title="用户量" :bordered="false">
                        <template #extra>
                            <a-tag color="processing">总</a-tag>
                        </template>
                        <div class="console-top-card">
                            <div class="console-top-number">
                                66 <span class="console-top-number-min">位</span>
                            </div>
                            <div class="console-top-image">
                                <img src="/img/ailin.jpg" alt="">
                                <img src="/img/fei.jpg" alt="">
                                <img src="/img/jing.jpg" alt="">
                                <img src="/img/kuangtie.jpg" alt="">
                                <img src="/img/lan.jpg" alt="">
                                <img src="/img/mengya.jpg" alt="">
                            </div>
                        </div>
                        <a-row justify="space-between" class="m-t-10">
                            <a-col :span="12">总用户</a-col>
                            <a-col :span="12" class="text-r">10800 人</a-col>
                        </a-row>
                    </a-card>
                </a-col>
            </a-row>
        </div>
        <div>
            <a-row :gutter="15">
                <a-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3" v-for="(item,index) in quickList" :key="index"
                       class="m-t-15 quickList">
                    <a-card>
                        <div class="quickList-icon">
                            <icon-font :type="item.icon" :style="{color: item.color,fontSize:'24px'}"></icon-font>
                        </div>
                        <div class="quickList-title">
                            {{ item.title }}
                        </div>
                    </a-card>
                </a-col>
            </a-row>
        </div>
        <div>
            <a-row :gutter="15">
                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="18" class="m-t-15">
                    <div class="console-card">
                        <div class="console-card-title">
                            <div class="console-card-title-icon">
                                <icon-font type="icon-heguiqushi"></icon-font>
                            </div>
                            <div class="m-l-10 console-card-title-text">访问量</div>
                        </div>
                        <div id="visits"></div>
                    </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="6" class="m-t-15">
                    <div class="console-card">
                        <div class="console-card-title">
                            <div class="m-l-10 console-card-title-text">统计</div>
                        </div>
                        <div class="statistics">
                            <div class="statistics-item flex-between" v-for="(item,index) in 12" :key="index">
                                <div class="flex">
                                    <div class="statistics-item-index">{{ item }}</div>
                                    <div class="statistics-item-title">{{ chinese[index] }}月总订单</div>
                                </div>
                                <div class="statistics-item-text">{{ item * 300 }}</div>
                            </div>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
        <div class="m-t-15">
            <div class="console-card">
                <div class="console-card-title">
                    <div class="m-l-10 console-card-title-text">项目说明</div>
                </div>
                <div class="explain">
                    <div>
                        与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                        在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                    </div>
                    <a-divider></a-divider>
                    <div>
                        控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
                        页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                    </div>
                    <a-divider></a-divider>
                    <div>
                        简化流程：设计简洁直观的操作流程；
                        清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                        帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                    </div>
                    <a-divider></a-divider>
                    <div>
                        用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                        结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {defineComponent, onMounted, reactive, toRefs} from 'vue';
import {Icon, IconFont} from "../../common/icon";
import * as echarts from 'echarts'
import {orderQuantityOption, visitsOption} from "./option";

export default defineComponent({
    components: {
        Icon,
        IconFont
    },
    setup() {
        let state = reactive({
            chinese: ['壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾', '拾壹', '拾贰'],
            statistics: [{
                title: 'Ant Design Title 1',
            }, {
                title: 'Ant Design Title 2',
            }, {
                title: 'Ant Design Title 3',
            }, {
                title: 'Ant Design Title 4',
            }],
            quickList: [
                {
                    title: '用户',
                    icon: 'icon-yonghu',
                    color: 'rgb(105, 192, 255)',
                },
                {
                    title: '角色',
                    icon: 'icon-setting-role',
                    color: 'rgb(149, 222, 100)',
                },
                {
                    title: '权限',
                    icon: 'icon-quanxian',
                    color: 'rgb(255, 156, 110)',
                },
                {
                    title: '卡片',
                    icon: 'icon-qiapian',
                    color: 'rgb(179, 127, 235)',
                },
                {
                    title: '商品',
                    icon: 'icon-shangpin',
                    color: 'rgb(255, 214, 102)',
                },
                {
                    title: '文章',
                    icon: 'icon-wenzhang-copy',
                    color: 'rgb(92, 219, 211)',
                },
                {
                    title: '项目',
                    icon: 'icon-xiangmu',
                    color: 'rgb(255, 133, 192)',
                },
                {
                    title: '应用',
                    icon: 'icon-yingyongchengxu',
                    color: 'rgb(255, 192, 105)',
                },
            ],
        })
        onMounted(() => {
            let orderQuantity = echarts.init(document.getElementById("orderQuantity"));
            orderQuantity.setOption(orderQuantityOption);
            let visits = echarts.init(document.getElementById("visits"));
            visits.setOption(visitsOption);

            window.addEventListener('resize', () => {
                orderQuantity.resize();
                visits.resize();
            })
        })
        return {
            ...toRefs(state)
        };
    },

});
</script>
<style lang="less">
.console-top {
    margin-top: -15px;
}

.console-top-number {
    font-size: 30px;
}

.console-top-number-min {
    font-size: 22px;
}

.console-top-card {
    height: 90px;
    border-bottom: 1px solid rgb(232, 234, 236);
}

.console-top-trend {
    height: 22px;
    overflow: hidden;
}

.quickList {
    cursor: pointer;
}

.quickList-icon {
    text-align: center;
}

.quickList-title {
    text-align: center;
    margin-top: 5px;
    color: #515a6e;
}

#orderQuantity {
    height: 40px;
}

#visits {
    height: 435px;
    padding: 20px;
}

.console-top-image {
    height: 35px;
    overflow: hidden;

    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 10px;
    }
}

.console-card {
    background: #ffffff;
}

.console-card-title {
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
}

.console-card-title-icon {
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #1890ff;
    background-color: #e6f7ff;
    border-radius: 50%;
    font-size: 18px;
    font-weight: bold;
}

.console-card-title-text {
    font-weight: bold;
    height: 25px;
    line-height: 25px;
}

.statistics {
    padding: 20px;

    .statistics-item {
        display: flex;
        margin-bottom: 5px;
        color: #8c8c8c;
        font-size: 15px;

        .statistics-item-index {
            width: 28px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            color: #1890ff;
            background-color: #e6f7ff;
            border-radius: 50%;
        }

        .statistics-item-title {
            height: 28px;
            line-height: 28px;
            margin-left: 10px;
        }

        .statistics-item-text {
            height: 28px;
            line-height: 28px;
            margin-left: 10px;
        }
    }
}

.explain {
    padding: 20px;
    font-size: 13px;
}
</style>