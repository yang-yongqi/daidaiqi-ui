<template>
    <a-layout-sider width="255" class="layout-sider" :collapsed="store.isCollapse" collapsible>
        <layout-logo></layout-logo>
        <layout-menu></layout-menu>
    </a-layout-sider>
</template>

<script>
import {defineComponent, reactive, toRefs} from "vue";
import layoutLogo from '../layout-logo/index.vue'
import layoutMenu from '../layout-menu/index.vue'
import {useAppStore} from "../../../store/modules/app";

export default defineComponent({
    components: {layoutLogo, layoutMenu},
    setup() {
        let store = useAppStore();
        return {
            store
        }
    }
})
</script>
<style lang="less">
.layout-sider {
    min-height: 100vh;
    background: #000;
    color: #ffffff;
}
</style>