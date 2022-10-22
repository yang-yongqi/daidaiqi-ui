<template>
    <div>
        <div>
            <a-card title="中央处理器" size="small">
                <a-descriptions title="" bordered :column="2" size="small">
                    <a-descriptions-item label="核心数">2核</a-descriptions-item>
                    <a-descriptions-item label="用户使用率">1%</a-descriptions-item>
                    <a-descriptions-item label="系统使用率">0.5%</a-descriptions-item>
                    <a-descriptions-item label="当前空闲率">98.5%</a-descriptions-item>
                </a-descriptions>
            </a-card>
        </div>
        <div class="m-t-15">
            <a-card title="内存" size="small">
                <a-descriptions title="" bordered :column="2" size="small">
                    <a-descriptions-item label="总内存">7.56G</a-descriptions-item>
                    <a-descriptions-item label="已用内存">3.76G</a-descriptions-item>
                    <a-descriptions-item label="剩余内存">3.8G</a-descriptions-item>
                    <a-descriptions-item label="使用率">49.77%</a-descriptions-item>
                </a-descriptions>
            </a-card>
        </div>
        <div class="m-t-15">
            <a-card title="服务器信息" size="small">
                <a-descriptions title="" bordered :column="2" size="small">
                    <a-descriptions-item label="服务器名称">
                        iZwz94p7mycommzd52gme4Z
                    </a-descriptions-item>
                    <a-descriptions-item label="服务器IP">127.0.0.1</a-descriptions-item>
                    <a-descriptions-item label="剩余内存">3.8G</a-descriptions-item>
                    <a-descriptions-item label="操作系统">Linux</a-descriptions-item>
                    <a-descriptions-item label="系统架构">amd64</a-descriptions-item>
                </a-descriptions>
            </a-card>
        </div>
        <div class="m-t-15">
            <a-card title="Java虚拟机信息" size="small">
                <a-descriptions title="" bordered :column="2" size="small">
                    <a-descriptions-item label="Java名称">
                        Java HotSpot(TM) 64-Bit Server VM
                    </a-descriptions-item>
                    <a-descriptions-item label="Java版本">1.8.0_111</a-descriptions-item>
                    <a-descriptions-item label="启动时间">
                        2022-03-15 15:48:45
                    </a-descriptions-item>
                    <a-descriptions-item label="运行时长">
                        10天21小时21分钟
                    </a-descriptions-item>
                    <a-descriptions-item label="项目路径">/ home</a-descriptions-item>
                </a-descriptions>
            </a-card>
        </div>
        <div class="m-t-15">
            <a-card title="磁盘状态" size="small">
                <a-descriptions title="" bordered :column="2" size="small">
                    <a-descriptions-item label="总大小">39.2 GB</a-descriptions-item>
                    <a-descriptions-item label="可用大小">23.5 GB</a-descriptions-item>
                    <a-descriptions-item label="已用大小">15.7 GB</a-descriptions-item>
                    <a-descriptions-item label="已用百分比">40.11%</a-descriptions-item>
                </a-descriptions>
            </a-card>
        </div>
        <div class="m-t-15">
            <a-card title="缓存状态" size="small">
                <a-descriptions title="" bordered :column="2" size="small">
                    <a-descriptions-item label="Redis版本">5.0.5</a-descriptions-item>
                    <a-descriptions-item label="端口">6379</a-descriptions-item>
                    <a-descriptions-item label="运行时间">71</a-descriptions-item>
                    <a-descriptions-item label="使用内存">921.30K</a-descriptions-item>
                </a-descriptions>
            </a-card>
        </div>
    </div>
</template>
<script>
import {defineComponent} from 'vue';

export default defineComponent({
    setup() {
        return {};
    },

});
</script>