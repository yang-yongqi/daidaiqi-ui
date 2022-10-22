<template>
    <div>
        <div class="console-top">
            <a-row :gutter="24">
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
                        </div>
                        <a-row justify="space-between" class="m-t-10">
                            <a-col :span="12">总用户</a-col>
                            <a-col :span="12" class="text-r">10800 人</a-col>
                        </a-row>
                    </a-card>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
import {defineComponent, onMounted} from 'vue';
import {Icon} from "../../common/icon";
import * as echarts from 'echarts'
import {orderQuantityOption} from "./option";

export default defineComponent({
    components: {
        Icon,
    },
    setup() {
        onMounted(() => {
            let orderQuantity = echarts.init(document.getElementById("orderQuantity"));
            orderQuantity.setOption(orderQuantityOption);
            window.addEventListener('resize', () => {
                orderQuantity.resize();
            })
        })
        return {};
    },

});
</script>
<style>
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

#orderQuantity {
    width: 100%;
    height: 40px;
}
</style>