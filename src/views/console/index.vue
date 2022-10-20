<template>
    <div>
        <div class="console-top">
            <a-row :gutter="24">
                <a-col :xs="24" :md="12" :lg="12" :xl="6" class="m-t-15">
                    <a-card size="small" title="访问量" :bordered="false">
                        <div>
                            <div class="console-top-number">
                                26,818.00
                            </div>
                        </div>
                    </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="12" :xl="6" class="m-t-15">
                    <a-card size="small" title="销售额" :bordered="false">
                    </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="12" :xl="6" class="m-t-15">
                    <a-card size="small" title="订单量" :bordered="false">
                    </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="12" :xl="6" class="m-t-15">
                    <a-card size="small" title="用户量" :bordered="false">
                    </a-card>
                </a-col>
            </a-row>
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
<style>
.console-top-number{
    font-size: 30px;
}
</style>