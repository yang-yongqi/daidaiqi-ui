<template>
    <a-layout-header class="layout-header">
        <div class="layout-header-left">
            <div>
                <i class="iconfont icon-zhedie1"></i>
            </div>
            <div>
            </div>
        </div>
        <div>2</div>
    </a-layout-header>
</template>
<script>
import {defineComponent, watch} from "vue";
import {useRoute} from "vue-router";

export default defineComponent({
    setup() {
        const route = useRoute()
        console.log(route.matched)
        watch(
            () => route.matched,
            item => {
                console.log(item)
            }
        )
        return {
            route
        }
    }
})
</script>
<style lang="less">
.layout-header {
    background: #ffffff;
    padding: 0 50px 0 20px;
    display: flex;
    justify-content: space-between;

    .layout-header-left {
        display: flex;
    }

    i {
        font-size: 20px;
        cursor: pointer;
    }
}
</style>