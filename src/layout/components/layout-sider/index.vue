<template>
    <a-layout-sider width="255" class="layout-sider">
        <layout-logo></layout-logo>
        <layout-menu></layout-menu>
    </a-layout-sider>
</template>

<script>
import {defineComponent} from "vue";
import layoutLogo from '../layout-logo/index.vue'
import layoutMenu from '../layout-menu/index.vue'

export default defineComponent({
    components: {layoutLogo, layoutMenu},
})
</script>
<style lang="less">
.layout-sider {
    height: 100vh;
    background: #000;
    color: #ffffff;
}
</style>